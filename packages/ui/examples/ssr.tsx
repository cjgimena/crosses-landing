/**
 * Renders the Landing example to a standalone HTML file on stdout, so the built
 * bundle can be eyeballed side by side with the hand-written page.
 *
 *   npm run verify   →   examples/.out/index.html
 */
import { renderToStaticMarkup } from 'react-dom/server';
import { Landing } from './Landing';

const body = renderToStaticMarkup(<Landing />);

process.stdout.write(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Crosses · rebuilt from @crosses/ui</title>
<!-- No font <link>. The library ships its own @font-face + woff2, and this page
     proves it: if the type below is right, a design built with @crosses/ui gets
     the brand faces with nothing loaded from a font host. -->
<link rel="stylesheet" href="../../dist/index.css">
<style>
  /* The page-level frame the library deliberately does not own: the document
     ground, and the scroll offset for the fixed masthead. */
  html { background: #F5F5F7; scroll-behavior: smooth; scroll-padding-top: 84px; }
  body { margin: 0; overflow-x: hidden; }
</style>
</head>
<body>
${body}
</body>
</html>
`);
