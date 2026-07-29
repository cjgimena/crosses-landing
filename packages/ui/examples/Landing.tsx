/**
 * crossesapp.com, rebuilt entirely from @crosses/ui.
 *
 * This is the fidelity reference for the library: it imports the *built* bundle,
 * not the source, and it is diffed against the hand-written index.html at the
 * repo root. If a component drifts from the page it came from, this is where it
 * shows up.
 */
import {
  Access,
  Aside,
  Band,
  ButtonLine,
  ButtonOutline,
  ButtonSolid,
  CrossesRoot,
  FinePrint,
  ForkRow,
  Forks,
  Hero,
  Lockup,
  Masthead,
  Nav,
  NavLink,
  Note,
  RoomBoard,
  SessionScreen,
  SiteFooter,
  SkipLink,
  Split,
  Step,
  TagCard,
  TagLink,
  Three,
  UrlCode,
  WaitlistForm,
} from '../dist/index.js';

export function Landing() {
  return (
    <CrossesRoot>
      <SkipLink />

      <Masthead>
        <Lockup />
        <Nav action={<ButtonOutline href="#access">Early access</ButtonOutline>}>
          <NavLink href="#room">The room</NavLink>
          <NavLink href="#session">A session</NavLink>
          <NavLink href="#tags">Tags</NavLink>
        </Nav>
      </Masthead>

      <main id="top">
        <Hero
          eyebrow="Stringing machines · team rooms"
          heading="Know the machine is free before you walk over."
          lead="Crosses keeps every stringing machine your team shares on one live screen. Hold a window when you need one, tap the machine's tag to start, and every job logs itself."
        >
          <ButtonSolid href="#access">Get early access</ButtonSolid>
          <ButtonLine badge="Coming soon">iPhone</ButtonLine>
        </Hero>

        <Band id="room">
          <Split>
            <Aside eyebrow="The room" heading="Status nobody has to maintain.">
              State comes from what people are doing on the machines. It changes the second someone
              finishes: no sign-up sheet, no asking the group chat.
            </Aside>

            <div>
              <RoomBoard
                date="Wednesday, July 22nd"
                aria-label="The team-room board. Machine 01 is free, Machine 02 is in use by Mia with 24 minutes left, Machine 03 is booked for 4:00."
                machines={[
                  { machine: 'Machine 01', model: 'WISE 2086', status: { kind: 'free', label: 'Free now' } },
                  {
                    machine: 'Machine 02',
                    model: 'GAMMA X-ELS',
                    status: { kind: 'inuse', label: 'Mia · 24m left', left: 42, width: 16 },
                  },
                  {
                    machine: 'Machine 03',
                    model: 'BABOLAT STAR 5',
                    status: { kind: 'booked', label: 'Booked 4:00', left: 64, width: 15 },
                  },
                ]}
              />
            </div>
          </Split>

          <Three className="notes">
            <Note heading="One accent, one meaning">
              Orange marks what is live right now, or what is yours. Nothing else is ever orange, so
              the room reads the same way every time you look at it.
            </Note>
            <Note heading="Hold a window">
              Request a time on a specific machine and get a reminder before it starts. Your own time
              is hatched, so you can pick it out of a full day at a glance.
            </Note>
            <Note heading="Finish and free it">
              Tap done and the machine frees for everyone immediately. The job drops into history:
              racquet, string, tension, who strung it, and when.
            </Note>
          </Three>
        </Band>

        <Band id="session">
          <Split>
            <Aside eyebrow="A session" heading="Three moves, every time.">
              The same three, which is why they're on the mark. Tap, string, log.
            </Aside>

            <div>
              <Three>
                <Step label="01 · Tap" live>
                  Hold your phone to the tag on the machine. Crosses opens on it and claims it for
                  you, even from the lock screen.
                </Step>
                <Step label="02 · String">
                  A timer runs while you work and rides the Lock Screen. Extend it if the job is
                  bigger than you thought.
                </Step>
                <Step label="03 · Log">
                  Done frees the machine for the room the same second, and writes the job into the
                  room's history.
                </Step>
              </Three>

              <SessionScreen
                machine="MACHINE 02 · GAMMA X-ELS"
                timing="STARTED 3:12 PM · FINISH ~3:57 PM"
                timer="24:00"
                progress={0.47}
                aria-label="The stringing screen for Machine 02, a Gamma X-ELS. A live timer counts down the time left on your estimate, with buttons to finish or add more time."
              />
            </div>
          </Split>
        </Band>

        <Band id="tags">
          <Split>
            <Aside eyebrow="Machine tags" heading="One tag per machine.">
              Pair a sticker to a machine once, from inside the app. After that the tag is the
              shortest path into a session.
            </Aside>

            <div>
              <Forks>
                <div>
                  <ForkRow live>
                    <b>With Crosses installed,</b> the tap opens the app straight to that machine and
                    starts the session.
                  </ForkRow>
                  <ForkRow>
                    <b>Without it,</b> the same tag opens a page naming the machine: a guest stringer
                    or an Android phone still lands somewhere useful.
                  </ForkRow>
                  <UrlCode>
                    crossesapp.com/m/<b>4f2a9c</b>
                  </UrlCode>
                </div>

                <TagCard
                  title="Printed tags"
                  footer={<TagLink href="#access">Tell me when tags ship</TagLink>}
                >
                  Weatherproof NFC stickers with the mark printed on the cover and the machine number
                  beside it. Blank NTAG215 tags work today.
                </TagCard>
              </Forks>
            </div>
          </Split>
        </Band>

        <Band>
          <Access
            id="access"
            heading="Crosses is coming to iPhone."
            lead="Built and in testing on real machines. Leave your email and the TestFlight invite reaches you before it hits the App Store."
          >
            <WaitlistForm />
            <FinePrint>iPhone · iOS 26 · NFC tags optional</FinePrint>
          </Access>
        </Band>
      </main>

      <SiteFooter fine="© 2026 Crosses. Built for team rooms that share a stringing machine.">
        <Lockup size="sm" />
        <nav aria-label="Footer">
          <a href="#room">The room</a>
          <a href="#session">A session</a>
          <a href="#tags">Tags</a>
          <a href="/privacy">Privacy</a>
          <a href="/support">Support</a>
          <a href="#access">Early access</a>
        </nav>
      </SiteFooter>
    </CrossesRoot>
  );
}
