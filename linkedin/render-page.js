const { chromium } = require('playwright'); const path=require('path');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport:{width:1584,height:900}, deviceScaleFactor:1 });
 await p.goto('file://'+path.resolve(process.argv[2]+'.html')); await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(300);
 await p.screenshot({path:process.argv[2]+'.png', fullPage:true}); await b.close(); })();
