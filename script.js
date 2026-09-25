/* ===== Tokens ===== */
:root{
  --bg:#FAF8FF;
  --surface:#FFFFFF;
  --ink:#16121F;
  --ink-soft:#5C5370;
  --violet:#6C3CE9;
  --violet-soft:#EFE7FF;
  --pink:#FF5D8F;
  --teal:#00C2A8;
  --amber:#FFB020;
  --border:#E7E1F7;
  --shadow:0 20px 40px -20px rgba(108,60,233,.25);
  --radius:18px;
  --grad:linear-gradient(135deg,var(--violet),var(--pink));
}
:root[data-theme="dark"]{
  --bg:#120E1C;
  --surface:#1B1530;
  --ink:#F5F2FF;
  --ink-soft:#B7ADD1;
  --violet-soft:#2A2049;
  --border:#332A54;
  --shadow:0 20px 40px -20px rgba(0,0,0,.6);
}

*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  background:var(--bg);
  color:var(--ink);
  font-family:'Inter',sans-serif;
  line-height:1.6;
  overflow-x:hidden;
  transition:background .4s ease,color .4s ease;
}
h1,h2,h3{font-family:'Space Grotesk',sans-serif;font-weight:700;letter-spacing:-.02em}
a{color:inherit;text-decoration:none}
section{padding:8rem 8vw;position:relative}
.eyebrow{
  font-family:'IBM Plex Mono',monospace;
  font-size:.85rem;color:var(--violet);
  margin-bottom:.75rem;
}
.grad{
  background:var(--grad);
  -webkit-background-clip:text;background-clip:text;color:transparent;
}

/* ===== Custom cursor ===== */
.cursor-dot,.cursor-ring{position:fixed;top:0;left:0;pointer-events:none;border-radius:50%;z-index:9999;transform:translate(-50%,-50%)}
.cursor-dot{width:8px;height:8px;background:var(--violet)}
.cursor-ring{width:34px;height:34px;border:1.5px solid var(--pink);transition:width .2s,height .2s,opacity .2s}
@media (hover:none){.cursor-dot,.cursor-ring{display:none}}

/* ===== Nav ===== */
.nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
  padding:1.4rem 8vw;
  backdrop-filter:blur(10px);
  background:color-mix(in srgb, var(--bg) 80%, transparent);
  border-bottom:1px solid transparent;
  transition:border-color .3s ease;
}
.nav.scrolled{border-color:var(--border)}
.nav-logo{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1.2rem}
.nav-logo span{color:var(--pink)}
.nav-links{display:flex;gap:2rem;font-family:'IBM Plex Mono',monospace;font-size:.9rem}
.nav-links a{position:relative;color:var(--ink-soft);transition:color .2s}
.nav-links a::after{content:"";position:absolute;left:0;bottom:-4px;width:0;height:1px;background:var(--violet);transition:width .25s ease}
.nav-links a:hover,.nav-links a.active{color:var(--ink)}
.nav-links a:hover::after,.nav-links a.active::after{width:100%}
.theme-toggle{
  width:44px;height:24px;border-radius:20px;border:1px solid var(--border);
  background:var(--surface);cursor:pointer;position:relative;
}
.toggle-dot{
  position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;
  background:var(--grad);transition:transform .3s ease;
}
:root[data-theme="dark"] .toggle-dot{transform:translateX(20px)}

/* ===== Hero ===== */
.hero{
  min-height:100vh;display:flex;align-items:center;justify-content:space-between;gap:4rem;
  padding-top:10rem;flex-wrap:wrap;
}
.hero-text{flex:1 1 480px;max-width:640px}
.hero-title{font-size:clamp(2.2rem,5vw,3.6rem);line-height:1.15;margin-bottom:1.4rem}
.typed{color:var(--pink)}
.cursor-blink{color:var(--violet);animation:blink 1s step-end infinite}
@keyframes blink{50%{opacity:0}}
.hero-sub{color:var(--ink-soft);max-width:46ch;margin-bottom:2.2rem;font-size:1.05rem}
.hero-cta{display:flex;gap:1rem;flex-wrap:wrap}

.btn{
  display:inline-block;padding:.9rem 1.8rem;border-radius:100px;font-weight:600;
  font-size:.95rem;position:relative;
}
.btn span{position:relative;z-index:1}
.btn-primary{background:var(--grad);color:#fff;box-shadow:var(--shadow)}
.btn-ghost{border:1px solid var(--border);color:var(--ink)}
.btn-lg{padding:1.1rem 2.4rem;font-size:1.05rem}

.hero-visual{flex:1 1 380px;max-width:460px;position:relative;height:420px}
.blob{position:absolute;border-radius:50%;filter:blur(50px);opacity:.55}
.blob-1{width:280px;height:280px;background:var(--violet);top:-20px;right:20px;animation:float1 9s ease-in-out infinite}
.blob-2{width:220px;height:220px;background:var(--pink);bottom:0;left:0;animation:float2 11s ease-in-out infinite}
.blob-3{width:340px;height:340px;background:var(--teal);opacity:.35;top:-100px;right:-100px;filter:blur(70px)}
@keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(-20px,25px)}}
@keyframes float2{0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-20px)}}

.photo-frame{
  position:relative;width:200px;height:200px;margin:0 auto;border-radius:50%;
  padding:6px;background:var(--grad);
  animation:float1 9s ease-in-out infinite;
  box-shadow:var(--shadow);
}
.profile-photo{
  width:100%;height:100%;border-radius:50%;object-fit:cover;
  display:block;border:4px solid var(--bg);
}
.code-card{
  position:relative;background:var(--surface);border:1px solid var(--border);
  border-radius:var(--radius);box-shadow:var(--shadow);
  padding:1.2rem;width:100%;max-width:340px;margin:-30px auto 0;
  transform:rotate(-3deg);transition:transform .4s ease;
}
.code-card:hover{transform:rotate(0deg) translateY(-4px)}
.code-card-head{display:flex;align-items:center;gap:.4rem;margin-bottom:.9rem}
.dot{width:9px;height:9px;border-radius:50%;display:inline-block}
.code-card-title{margin-left:.6rem;font-family:'IBM Plex Mono',monospace;font-size:.75rem;color:var(--ink-soft)}
.code-body{font-family:'IBM Plex Mono',monospace;font-size:.82rem;line-height:1.7;white-space:pre;color:var(--ink-soft);overflow-x:auto}
.c-key{color:var(--pink)}.c-var{color:var(--teal)}.c-prop{color:var(--violet)}.c-str{color:var(--amber)}

/* ===== About ===== */
.section-head h2{font-size:clamp(1.8rem,3.4vw,2.6rem);margin-top:.3rem}
.about-grid{display:flex;gap:4rem;flex-wrap:wrap;margin:3rem 0 4rem}
.about-text{flex:1 1 380px;color:var(--ink-soft);font-size:1.05rem;max-width:56ch}
.stats{flex:1 1 300px;display:flex;gap:2.4rem;flex-wrap:wrap}
.stat-num{display:block;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:2.4rem;color:var(--violet)}
.stat-label{color:var(--ink-soft);font-size:.85rem}

.marquee-wrap{overflow:hidden;border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:1.4rem 0}
.marquee{display:flex;width:max-content}
.marquee-track{display:flex;gap:.8rem;padding-right:.8rem;animation:scroll 22s linear infinite}
.marquee:hover .marquee-track{animation-play-state:paused}
@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-100%)}}
.pill{
  font-family:'IBM Plex Mono',monospace;font-size:.85rem;white-space:nowrap;
  padding:.5rem 1.1rem;border-radius:100px;background:var(--violet-soft);color:var(--violet);
}

/* ===== Work / Bento ===== */
.bento{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;margin-top:2.5rem}
.card{
  background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);
  padding:2rem;transition:transform .35s ease,box-shadow .35s ease;
}
.card:hover{box-shadow:var(--shadow)}
.card-tags{display:flex;gap:.5rem;margin-bottom:1rem;flex-wrap:wrap}
.card-tags span{font-family:'IBM Plex Mono',monospace;font-size:.72rem;padding:.25rem .6rem;border-radius:100px;background:var(--violet-soft);color:var(--violet)}
.card h3{font-size:1.3rem;margin-bottom:.6rem}
.card p{color:var(--ink-soft);font-size:.95rem;margin-bottom:1.2rem}
.card-link{font-weight:600;color:var(--pink);font-size:.9rem}
.card-big{grid-column:span 2;grid-row:span 2;display:flex;flex-direction:column;justify-content:flex-end;min-height:320px;background:var(--grad);color:#fff}
.card-big .card-tags span{background:rgba(255,255,255,.2);color:#fff}
.card-big h3{font-size:1.8rem}
.card-big p{color:rgba(255,255,255,.85)}
.card-big .card-link{color:#fff}
.card-wide{grid-column:span 2}
@media(max-width:900px){.bento{grid-template-columns:1fr}.card-big,.card-wide{grid-column:span 1}}

/* ===== Experience ===== */
.timeline{position:relative;margin-top:3rem;padding-left:2.5rem;border-left:2px solid var(--border)}
.timeline-item{position:relative;padding-bottom:2.6rem}
.timeline-item:last-child{padding-bottom:0}
.timeline-dot{position:absolute;left:-2.56rem;top:.3rem;width:12px;height:12px;border-radius:50%;background:var(--grad)}
.timeline-date{font-family:'IBM Plex Mono',monospace;font-size:.8rem;color:var(--violet)}
.timeline-content h3{font-size:1.15rem;margin:.3rem 0}
.timeline-content p{color:var(--ink-soft);font-size:.95rem}

/* ===== Contact ===== */
.contact{text-align:center;padding-bottom:6rem;overflow:hidden}
.contact h2{font-size:clamp(2rem,4.5vw,3.2rem);margin-bottom:2.4rem}
.socials{display:flex;justify-content:center;gap:1.6rem;margin-top:2rem;font-family:'IBM Plex Mono',monospace;font-size:.9rem}
.socials a{color:var(--ink-soft);transition:color .2s}
.socials a:hover{color:var(--violet)}

.footer{text-align:center;padding:2.4rem;color:var(--ink-soft);font-size:.85rem;border-top:1px solid var(--border)}

#confetti{position:fixed;inset:0;pointer-events:none;z-index:9998}

/* ===== Reveal ===== */
.reveal{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}
.reveal.in{opacity:1;transform:translateY(0)}

@media(prefers-reduced-motion:reduce){
  *{animation:none !important;transition:none !important}
}
@media(max-width:640px){
  section{padding:5rem 6vw}
  .nav{padding:1.1rem 6vw}
  .nav-links{display:none}
}
