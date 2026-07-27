// Waitlist capture → Airtable.
//
// Runs as a Vercel Serverless Function at POST /api/waitlist. It exists so the
// Airtable token never ships to the browser: the static page posts an email
// here, and this function forwards it to Airtable's REST API with a token held
// in a server-side env var. A token in client JS would be scrapable and grant
// read/write to the base, so keep the write path here.
//
// Required env vars (set in Vercel → Project → Settings → Environment Variables):
//   AIRTABLE_TOKEN    Personal access token, scope data.records:write on the base
//   AIRTABLE_BASE_ID  e.g. appXXXXXXXXXXXXXX
// Optional:
//   AIRTABLE_TABLE    Table name or id. Defaults to "Waitlist".
//   WAITLIST_EMAIL_FIELD   Column for the email. Defaults to "Email".
//   WAITLIST_SOURCE_FIELD  Column for a source tag. Optional; skipped if unset.
//
// The Airtable table needs at least the email column (single line text or email).
// If WAITLIST_SOURCE_FIELD is set, add that column too (single line text).

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  // Body may arrive parsed (Vercel) or as a raw string; handle both.
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (_) { body = {}; }
  }
  const email = (body && typeof body.email === "string" ? body.email : "").trim();

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }

  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_TABLE || "Waitlist";
  const emailField = process.env.WAITLIST_EMAIL_FIELD || "Email";
  const sourceField = process.env.WAITLIST_SOURCE_FIELD;

  if (!token || !baseId) {
    // Misconfiguration is ours, not the visitor's — say so without leaking which var.
    console.error("waitlist: AIRTABLE_TOKEN / AIRTABLE_BASE_ID not configured");
    return res.status(500).json({ error: "The waitlist isn't accepting signups right now." });
  }

  const fields = {};
  fields[emailField] = email;
  if (sourceField) fields[sourceField] = "crossesapp.com";

  const url =
    "https://api.airtable.com/v0/" + baseId + "/" + encodeURIComponent(table);

  try {
    const r = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      // typecast lets Airtable coerce into an email-typed field cleanly.
      body: JSON.stringify({ records: [{ fields }], typecast: true })
    });

    if (r.ok) {
      return res.status(200).json({ ok: true });
    }

    // Log the real Airtable error server-side; return a generic message to the client.
    let detail = "";
    try { detail = JSON.stringify(await r.json()); } catch (_) { detail = String(r.status); }
    console.error("waitlist: Airtable responded " + r.status + " " + detail);

    return res.status(502).json({ error: "Couldn't save your email. Try again in a moment." });
  } catch (err) {
    console.error("waitlist: request to Airtable failed", err);
    return res.status(502).json({ error: "Couldn't reach the waitlist. Try again in a moment." });
  }
};
