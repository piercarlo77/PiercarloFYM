# Genera gli HTML delle copertine LinkedIn (1584x396) con la grafica FYM 2026.
# Uso: python3 genera.py && node render.js copertina-A-navy copertina-2-scuola copertina-3-sport copertina-4-libri
NAVY, SKY, DAND, BLU, WHITE, TENUE, UNIBERRY = '#112b4d', '#a3c0d2', '#f5bc47', '#015174', '#ffffff', '#4a5f79', '#9f1c4c'

CSS = """
html,body{margin:0;padding:0}
body{width:1584px;height:396px;position:relative;overflow:hidden;background:#112b4d;font-family:'Plus Jakarta Sans',sans-serif;-webkit-font-smoothing:antialiased;color:#fff}
.marchio{position:absolute;left:64px;top:56px;display:flex;align-items:center;gap:20px}
.marchio img{height:72px;width:auto;display:block}
.marchio .riga{width:3px;height:64px;background:#f5fafc}
.marchio .desc{font-family:'Red Hat Display',sans-serif;font-weight:700;font-size:24px;line-height:1.1;color:#f5fafc;letter-spacing:-.01em}
.testo{position:absolute;left:560px;top:64px;width:900px}
.tratt{width:64px;height:6px;background:#f5bc47;margin:0 0 20px}
.etichetta{font-weight:600;font-size:24px;line-height:1.4;color:#a3c0d2;margin:0 0 18px;letter-spacing:.01em}
h1{font-family:'Red Hat Display',sans-serif;font-weight:800;font-size:58px;line-height:1.02;letter-spacing:-.02em;color:#fff;margin:0 0 22px}
h1 em{font-style:normal;color:#f5bc47}
.voce{font-family:'Fraunces',serif;font-style:italic;font-weight:400;font-size:34px;line-height:1.3;color:#fff;margin:0}
.sito{font-weight:600;font-size:24px;color:#a3c0d2;margin:0}
.cifre{display:flex;gap:48px;margin:0 0 26px}
.cifre div{display:flex;flex-direction:column;gap:2px}
.cifre b{font-family:'Red Hat Display',sans-serif;font-weight:700;font-size:40px;line-height:1;color:#fff}
.cifre span{font-weight:600;font-size:20px;color:#a3c0d2}
.taglio{position:absolute;right:0;bottom:0;width:0;height:0;border-left:139px solid transparent;border-bottom:160px solid #a3c0d2}
.slot{position:absolute;background:center/contain no-repeat}
.schede{display:flex;gap:24px;margin-top:4px}
.scheda{position:relative;width:438px;height:212px;background:#a3c0d2;color:#112b4d;padding:24px 28px;box-sizing:border-box;clip-path:polygon(0 0,100% 0,100% calc(100% - 64px),calc(100% - 56px) 100%,0 100%)}
.scheda h2{font-family:'Red Hat Display',sans-serif;font-weight:800;font-size:30px;line-height:1.05;letter-spacing:-.02em;margin:0 0 10px;width:250px}
.scheda p{margin:0 0 6px;font-size:17px;line-height:1.35;width:250px}
.scheda .sito{position:absolute;left:28px;bottom:22px;color:#112b4d;font-size:19px}
.scheda .libro{position:absolute;right:20px;top:20px;width:130px;height:172px;background:center/contain no-repeat}
"""

def pagina(titolo, corpo, extra=''):
    return f"""<!doctype html><html lang="it"><head><meta charset="utf-8"><title>{titolo}</title>
<link rel="stylesheet" href="fonts.css"><style>{CSS}{extra}</style></head><body>
{corpo}
</body></html>"""

def marchio(descrittore=None):
    d = f'<div class="riga"></div><div class="desc">{descrittore}</div>' if descrittore else ''
    return f'<div class="marchio"><img src="logo-soft.svg" alt="FYM">{d}</div>'

copertine = {}

copertine['copertina-A-navy'] = pagina('Copertina LinkedIn · Piercarlo', marchio() + """
<div class="testo">
<div class="tratt"></div>
<p class="etichetta">Formatore e coach strategico - founder e CEO FYM</p>
<h1>Chi guida <em>persone</em> cambia per primo e facilita il <em>cambiamento</em></h1>
<p class="voce">Trasformazioni, evoluzioni e apprendimenti strategici</p>
</div>
<div class="taglio"></div>""")

copertine['copertina-2-scuola'] = pagina('Copertina LinkedIn · Scuola di Coaching Strategico',
 marchio('Scuola<br>Coaching Strategico') + """
<div class="testo" style="top:56px">
<div class="tratt"></div>
<h1 style="font-size:50px">L'unica scuola che allena i coach su casi reali, con <em>clienti veri</em>.</h1>
<div class="cifre">
 <div><b>1.000+</b><span>ore di pratica l'anno</span></div>
 <div><b>800+</b><span>casi reali interi in archivio</span></div>
 <div><b>3.200+</b><span>sessioni video-registrate</span></div>
</div>
<p class="sito">scuolacoachingstrategico.it</p>
</div>
<div class="taglio"></div>""")

copertine['copertina-3-sport'] = pagina('Copertina LinkedIn · Sport Coaching Strategico',
 marchio('Sport<br>Coaching Strategico') + """
<div class="testo">
<div class="tratt"></div>
<p class="etichetta">Coaching strategico per atleti, allenatori e società sportive</p>
<h1>Mente, emozioni, <em>performance</em>.</h1>
<p class="voce" style="margin-bottom:18px">La testa si allena come le gambe.</p>
<p class="sito">sportcoaching.it</p>
</div>
<div class="slot" style="right:160px;top:48px;width:260px;height:300px;background-image:url(scs-logo.png)"></div>
<div class="taglio"></div>""")

copertine['copertina-4-libri'] = pagina('Copertina LinkedIn · I libri', marchio() + """
<div class="testo" style="top:56px">
<div class="tratt"></div>
<p class="etichetta" style="margin-bottom:14px">Due libri per chi guida persone</p>
<div class="schede">
 <div class="scheda"><h2>La cultura del feedback</h2><p>Alberto De Panfilis<br>Piercarlo Romeo</p><p class="sito">culturadelfeedback.it</p><div class="libro" style="background-image:url(libro-feedback.png)"></div></div>
 <div class="scheda"><h2>Equilibrio emotivo</h2><p>Piercarlo Romeo</p><p class="sito">equilibrioemotivo.it</p><div class="libro" style="background-image:url(libro-equilibrio.png)"></div></div>
</div>
</div>""")

for nome, html in copertine.items():
    open(nome + '.html', 'w').write(html)
print('scritte:', ', '.join(copertine))
