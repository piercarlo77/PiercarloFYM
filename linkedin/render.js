const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const names = process.argv.slice(2);
  const b = await chromium.launch();
  for (const n of names) {
    const p = await b.newPage({ viewport: { width: 1584, height: 396 }, deviceScaleFactor: 1 });
    await p.goto('file://' + path.resolve(n + '.html'));
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(300);
    await p.screenshot({ path: n + '.png', type: 'png' });
    const fonts = await p.evaluate(() => [...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family+' '+f.weight+' '+f.style));
    console.log(n, 'fonts:', fonts.join(' | '));
    await p.close();
  }
  await b.close();
})();
