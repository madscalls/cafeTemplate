// Generated from the Steep & Spine design mockup (Main.dc.html), then hand-editable.
// The page logic below is the mockup's own class; DCLogic (src/dc.js) gives it state like a React component.
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';
import { DCLogic, useLogic } from '../dc.js';
import { img } from '../assets.js';

const PAGE_CSS = "body{margin:0;background:#F5F1ED}\na{color:#345D5E}a:hover{color:#252323}\n.wrap{max-width:1240px;margin:0 auto;padding:0 40px;box-sizing:border-box}\n.hero{display:grid;grid-template-columns:1fr 1.05fr;gap:56px;align-items:center}\n.split{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}\n.grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px}\n.navlinks a{color:#252323;text-decoration:none;font-weight:400}\n.navlinks a:hover{color:#3A6667;text-decoration:underline;text-underline-offset:6px}\n.kicker{margin:0;font-size:13px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:#345D5E}\n.menu-row{display:flex;justify-content:space-between;gap:20px;padding:18px 0;border-bottom:1px solid #E2DBCD}\n\n/* book stacks: tip over on hover, then fade back into place */\n.stack{display:flex;flex-direction:column;align-items:center;text-decoration:none;padding-top:40px;outline-offset:8px;border-radius:12px}\n.bk{position:relative;display:block;box-sizing:border-box;font-size:0;color:transparent;transform-origin:50% 100%;border-radius:2px;\nbackground:repeating-linear-gradient(180deg,#F4ECDA 0 2px,#E3D6BB 2px 3px);\nborder-top:5px solid var(--cov);border-bottom:5px solid var(--cov);box-shadow:0 3px 4px -2px rgba(37,35,35,.25)}\n.bk::after{content:\"\";position:absolute;top:-5px;bottom:-5px;right:-8px;width:24px;border-radius:3px 12px 12px 3px;background:var(--cov);\nbackground-image:linear-gradient(90deg,transparent 0 36%,rgba(214,190,140,.55) 36% 44%,transparent 44% 64%,rgba(214,190,140,.55) 64% 72%,transparent 72%);\nbox-shadow:inset -5px 0 0 rgba(0,0,0,.14),inset 0 3px 0 rgba(255,255,255,.12)}\n.w2::after,.w4::after{right:auto;left:-8px;border-radius:12px 3px 3px 12px;box-shadow:inset 5px 0 0 rgba(0,0,0,.14),inset 0 3px 0 rgba(255,255,255,.12)}\n.stack:hover .bk,.stack:focus-visible .bk,.stack:hover .specs,.stack:focus-visible .specs,.stack.tumbling .bk,.stack.tumbling .specs{animation:topple 2.8s cubic-bezier(.3,.75,.35,1) both}\n.specs{display:block;width:96px;height:34px;margin-bottom:-6px;transform-origin:50% 100%;--x:-150px;--y:150px;--r:-120deg}\n@keyframes topple{\n0%{transform:none;opacity:1}\n26%{transform:translate(var(--x),var(--y)) rotate(var(--r));opacity:1}\n58%{transform:translate(var(--x),var(--y)) rotate(var(--r));opacity:1}\n72%{transform:translate(var(--x),var(--y)) rotate(var(--r));opacity:0}\n74%{transform:none;opacity:0}\n100%{transform:none;opacity:1}}\n.f1{--x:-120px;--y:120px;--r:-84deg;animation-delay:0s!important}\n.f2{--x:130px;--y:104px;--r:72deg;animation-delay:.07s!important}\n.f3{--x:-70px;--y:70px;--r:-28deg;animation-delay:.14s!important}\n.f4{--x:80px;--y:46px;--r:16deg;animation-delay:.2s!important}\n.f5{--x:-26px;--y:20px;--r:-7deg;animation-delay:.26s!important}\n.f6{--x:10px;--y:4px;--r:3deg;animation-delay:.3s!important}\n.c-mint{--cov:#7A5236}\n.c-ash{--cov:#A99985}\n.c-lav{--cov:#5E7D63}\n.c-grape{--cov:#3A6667}\n.c-bean{--cov:#9C4F35}\n.c-paper{--cov:#33415C}\n.w1{width:214px}.w2{width:182px}.w3{width:236px}.w4{width:164px}.w5{width:198px}\n.h1{height:32px}.h2{height:42px}.h3{height:26px}\n.o1{margin-left:-22px;rotate:-1.4deg}.o2{margin-left:18px;rotate:1.6deg}.o3{margin-left:-8px;rotate:-.7deg}.o4{margin-left:30px;rotate:1deg}\n.cup{position:relative;padding-top:56px;padding-bottom:40px}\n.cuphandle{position:absolute;right:-62px;top:150px;width:104px;height:200px;box-sizing:border-box;border:20px solid #A99985;border-left:0;border-radius:0 110px 110px 0}\n.steam{position:absolute;top:0;left:50%;transform:translateX(-50%);display:flex;gap:26px}\n.steam path{animation:steam 3.6s ease-in-out infinite}\n.steam svg:nth-child(2) path{animation-delay:.6s}.steam svg:nth-child(3) path{animation-delay:1.2s}\n@keyframes steam{0%,100%{transform:translateY(4px);opacity:.35}50%{transform:translateY(-4px);opacity:.9}}\n@media (prefers-reduced-motion:reduce){.stack:hover .bk,.stack:focus-visible .bk,.stack:hover .specs,.stack:focus-visible .specs,.stack.tumbling .bk,.stack.tumbling .specs,.steam path{animation:none}}\n\n@media (max-width:960px){\n.hero,.split{grid-template-columns:1fr!important}\n.grid3{grid-template-columns:1fr!important}\n}\n@media (max-width:640px){\n.navlinks{display:none!important}\n.wrap{padding:0 20px!important}\n.h1t{font-size:44px!important}\n.h2t{font-size:34px!important}\n.hdrbtn{padding:0 14px!important;font-size:13px!important}\n.herophoto{height:380px!important}\n.cuphandle{display:none!important}\n}";

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { joined: false, tip: {} };
  }
  renderVals() {
    const bk = (f, c, w, h, o, t, n) => ({ cls: 'bk ' + [f, c, w, h, o].join(' '), t, n: n || '' });
    const stacks = [
      { title: 'Staff picks', note: 'Handwritten notes tucked inside every one.', label: 'Browse staff picks', bg: '#DAD2BC', books: [
        bk('f1', 'c-grape', 'w4', 'h3', 'o2', 'Poems', ''),
        bk('f2', 'c-paper', 'w2', 'h1', 'o1', 'Field notes', 'II'),
        bk('f3', 'c-lav', 'w5', 'h2', 'o3', 'A quiet year', ''),
        bk('f4', 'c-ash', 'w1', 'h1', 'o4', 'The long walk', '·'),
        bk('f5', 'c-bean', 'w3', 'h2', '', 'Collected stories', '')
      ] },
      { title: 'Used & rare', note: 'Trade in two, take one home. First editions behind the counter.', label: 'Browse used and rare books', bg: '#DCE6E5', books: [
        bk('f1', 'c-mint', 'w2', 'h1', 'o4', 'Letters', ''),
        bk('f2', 'c-grape', 'w4', 'h2', 'o1', 'Atlas', ''),
        bk('f3', 'c-paper', 'w1', 'h3', 'o2', 'Cookbook', '1962'),
        bk('f4', 'c-lav', 'w5', 'h1', 'o3', 'Selected essays', ''),
        bk('f5', 'c-ash', 'w3', 'h2', '', 'Encyclopedia', 'Vol. 4')
      ] },
      { title: 'New releases', note: 'Fresh off the truck every Tuesday. Pre-orders welcome.', label: 'Browse new releases', bg: '#E9E2D6', books: [
        bk('f1', 'c-lav', 'w4', 'h1', 'o1', 'Debut', ''),
        bk('f2', 'c-mint', 'w5', 'h2', 'o2', 'Summer novel', ''),
        bk('f3', 'c-grape', 'w2', 'h1', 'o4', 'Memoir', ''),
        bk('f4', 'c-paper', 'w1', 'h2', 'o3', 'Short fiction', ''),
        bk('f5', 'c-ash', 'w3', 'h1', '', 'Book club pick', '')
      ] }
    ];
    const tipper = (id) => () => {
      if (this.state.tip[id]) return;
      this.setState({ tip: { ...this.state.tip, [id]: true } });
      setTimeout(() => this.setState({ tip: { ...this.state.tip, [id]: false } }), 2900);
    };
    const stacksOut = stacks.map((st, i) => ({ ...st, tip: this.state.tip['s' + i] ? 'tumbling' : '', tipIt: tipper('s' + i) }));
    const week = [
      { type: 'Poetry', title: 'Open mic poetry night', note: 'Sign up at the counter for a five-minute slot. Listeners very welcome.', when: '[Thursday] · [7pm]', tagBg: '#E9E2D6', tagFg: '#3A6667' },
      { type: 'Live music', title: 'Acoustic in the stacks', note: '[Artist name] plays a quiet set between the shelves.', when: '[Saturday] · [6pm]', tagBg: '#DAD2BC', tagFg: '#252323' },
      { type: 'Book club', title: 'Sunday silent reading', note: 'Bring a book, phones away, one hour of quiet. Chai refills on us.', when: '[Sunday] · [10am]', tagBg: '#E4DED2', tagFg: '#252323' }
    ];
    return {
      stacks: stacksOut, week,
      heroTip: this.state.tip.hero ? 'tumbling' : '', tipHero: tipper('hero'),
      joined: this.state.joined, notJoined: !this.state.joined,
      join: (e) => { e.preventDefault(); this.setState({ joined: true }); }
    };
  }
}

export default function Home() {
  const props = useTheme({});
  const v = useLogic(Component, props).renderVals();
  useEffect(() => { document.title = "Steep & Spine: home"; }, []);
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div style={{fontFamily: "Poppins, sans-serif", color: "#4A4644", background: "#F5F1ED", overflowX: "clip"}}>

<div style={{background: "#DAD2BC", padding: "10px 20px", textAlign: "center", fontSize: "14px", color: "#252323"}}>Chai of the month: <strong style={{fontWeight: "600"}}>[Cardamom rose]</strong> · Open mic poetry every [Thursday] at [7pm]</div>

<header className="wrap" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", paddingTop: "24px", paddingBottom: "24px"}}>
<Link to="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#252323"}}>
<svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#DAD2BC"></circle><path d="M8 13c4-2 8-2 12 1v15c-4-3-8-3-12-1zM32 13c-4-2-8-2-12 1v15c4-3 8-3 12-1z" fill="none" stroke="#3A6667" strokeWidth="1.8" strokeLinejoin="round"></path></svg>
<span style={{display: "flex", flexDirection: "column", lineHeight: "1.05"}}><span style={{fontWeight: "600", fontSize: "21px", letterSpacing: "-0.01em"}}>Steep &amp; Spine</span><span style={{fontSize: "11px", fontWeight: "500", letterSpacing: ".22em", textTransform: "uppercase", color: "#3A6667"}}>Books &amp; Chai</span></span>
</Link>
<nav className="navlinks" style={{display: "flex", gap: "34px", fontSize: "15px"}} aria-label="Main">
<Link to="/books">Books</Link>
<a href="#chai">Chai</a>
<Link to="/events">Events</Link>
<a href="#visit">Visit</a>
</nav>
<Link to="/books" className="hdrbtn" style={{display: "inline-flex", alignItems: "center", minHeight: "46px", padding: "0 22px", borderRadius: "999px", background: "#3A6667", color: "#FFFFFF", textDecoration: "none", fontWeight: "500", fontSize: "14px"}}>Request a book</Link>
</header>


<section className="wrap hero" style={{paddingTop: "36px", paddingBottom: "100px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "26px"}}>
<p className="kicker">Bookshop &amp; chai bar · [Your city]</p>
<h1 className="h1t" style={{margin: "0", fontWeight: "500", fontSize: "68px", lineHeight: "1.04", letterSpacing: "-0.035em", color: "#252323"}}>Stay for a chapter. <span style={{fontWeight: "300", fontStyle: "italic", color: "#3A6667"}}>Leave with a book.</span></h1>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.75", maxWidth: "31rem"}}>Shelves to browse, armchairs to sink into, and the chai latte people cross town for. Read anything here for free. Take home the ones you can't put down.</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "14px"}}>
<a href="#chai" style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#3A6667", color: "#FFFFFF", textDecoration: "none", fontWeight: "500", fontSize: "15px"}}>See the chai menu</a>
<Link to="/books" style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", borderRadius: "999px", border: "1.5px solid #3A6667", color: "#3A6667", textDecoration: "none", fontWeight: "500", fontSize: "15px"}}>Browse the shelves</Link>
</div>
<div style={{display: "flex", flexWrap: "wrap", gap: "28px", paddingTop: "22px", borderTop: "1px solid #E2DBCD", fontSize: "14px"}}>
<span><strong style={{display: "block", fontWeight: "600", color: "#252323"}}>Open daily</strong>[8am – 9pm]</span>
<span><strong style={{display: "block", fontWeight: "600", color: "#252323"}}>New &amp; used</strong>Buy, trade or just read</span>
<span><strong style={{display: "block", fontWeight: "600", color: "#252323"}}>Thursdays</strong>Open mic poetry</span>
</div>
</div>
<div className="cup">
<div className="steam" aria-hidden="true"><svg width="22" height="48" viewBox="0 0 22 48"><path d="M11 46c-8-8 8-14 0-22s8-14 0-22" fill="none" stroke="#A99985" strokeWidth="3" strokeLinecap="round"></path></svg><svg width="22" height="48" viewBox="0 0 22 48"><path d="M11 46c-8-8 8-14 0-22s8-14 0-22" fill="none" stroke="#A99985" strokeWidth="3" strokeLinecap="round"></path></svg><svg width="22" height="48" viewBox="0 0 22 48"><path d="M11 46c-8-8 8-14 0-22s8-14 0-22" fill="none" stroke="#A99985" strokeWidth="3" strokeLinecap="round"></path></svg></div>
<div className="cuphandle" aria-hidden="true"></div>
<img className="herophoto" src={img("/images/shelves.jpg")} alt="Tall wooden shelves packed with books" style={{display: "block", width: "100%", height: "540px", objectFit: "cover", borderRadius: "28px 28px 50% 50% / 28px 28px 34% 34%", position: "relative"}} />
<img src={img("/images/cheers.jpg")} alt="Three friends clinking lattes over a cafe table" style={{position: "absolute", left: "-36px", bottom: "0", width: "200px", height: "200px", objectFit: "cover", borderRadius: "50%", border: "8px solid #F5F1ED"}} />
<Link to="/books" className={`stack ${v.heroTip}`} aria-label="Browse the shelves" onMouseEnter={v.tipHero} onFocus={v.tipHero} style={{position: "absolute", right: "-6px", bottom: "-10px", zIndex: "2"}}>
<svg className="specs" viewBox="0 0 96 34" aria-hidden="true"><path d="M6 14h8M82 14h8" stroke="#252323" strokeWidth="3" strokeLinecap="round"></path><rect x="12" y="8" width="30" height="20" rx="7" fill="rgba(245,241,237,.5)" stroke="#252323" strokeWidth="3.5"></rect><rect x="54" y="8" width="30" height="20" rx="7" fill="rgba(245,241,237,.5)" stroke="#252323" strokeWidth="3.5"></rect><path d="M42 15c2-3 10-3 12 0" fill="none" stroke="#252323" strokeWidth="3"></path></svg>
<span className="bk f1 c-mint w4 h2 o2">Poems</span>
<span className="bk f2 c-lav w2 h1 o3">Field notes</span>
<span className="bk f3 c-ash w5 h3 o1">A quiet year</span>
<span className="bk f4 c-paper w2 h2 o4">Letters</span>
<span className="bk f5 c-bean w1 h1">Steep &amp; Spine</span>
</Link>
</div>
</section>


<section id="chai" style={{background: "#DAD2BC", padding: "110px 0"}}>
<div className="wrap split">
<div style={{position: "relative"}}>
<img src={img("/images/lattes.jpg")} alt="Three lattes with heart foam art on a wooden table between potted plants" style={{display: "block", width: "100%", height: "600px", objectFit: "cover", borderRadius: "28px"}} />
<span style={{position: "absolute", top: "22px", left: "22px", background: "#FAF8F5", color: "#3A6667", borderRadius: "999px", padding: "8px 16px", fontSize: "13px", fontWeight: "500"}}>[Swap in your own chai photo]</span>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
<p className="kicker">What we're known for</p>
<h2 className="h2t" style={{margin: "0", fontWeight: "500", fontSize: "52px", lineHeight: "1.08", letterSpacing: "-0.03em", color: "#252323"}}>The chai is <span style={{fontWeight: "300", fontStyle: "italic"}}>steeped, not syruped.</span></h2>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.75"}}>We simmer our own masala blend every morning: black tea, cardamom, ginger, cinnamon and a little black pepper. Then we pour it over your milk of choice and draw something on top.</p>
<div style={{marginTop: "6px"}}>
<div className="menu-row"><div><strong style={{display: "block", fontWeight: "600", color: "#252323", fontSize: "17px"}}>House masala chai</strong><span style={{fontSize: "14px"}}>The one we're known for. Hot or iced.</span></div><span style={{fontWeight: "500", color: "#252323"}}>$5.25</span></div>
<div className="menu-row"><div><strong style={{display: "block", fontWeight: "600", color: "#252323", fontSize: "17px"}}>Dirty chai</strong><span style={{fontSize: "14px"}}>House chai with a shot of espresso.</span></div><span style={{fontWeight: "500", color: "#252323"}}>$6.00</span></div>
<div className="menu-row"><div><strong style={{display: "block", fontWeight: "600", color: "#252323", fontSize: "17px"}}>Lavender honey chai</strong><span style={{fontSize: "14px"}}>Local honey, a whisper of lavender.</span></div><span style={{fontWeight: "500", color: "#252323"}}>$6.25</span></div>
<div className="menu-row"><div><strong style={{display: "block", fontWeight: "600", color: "#252323", fontSize: "17px"}}>Chai of the month</strong><span style={{fontSize: "14px"}}>[Cardamom rose: rose petals, extra cardamom]</span></div><span style={{fontWeight: "500", color: "#252323"}}>$6.50</span></div>
<div className="menu-row" style={{borderBottom: "0"}}><div><strong style={{display: "block", fontWeight: "600", color: "#252323", fontSize: "17px"}}>Not a chai person?</strong><span style={{fontSize: "14px"}}>Espresso, pour-over, loose-leaf tea and pastries from [local bakery].</span></div></div>
</div>
<p style={{margin: "0", fontSize: "13px"}}>Oat, almond and whole milk at no extra charge. Sample prices.</p>
</div>
</div>
</section>


<section className="wrap" style={{paddingTop: "110px", paddingBottom: "100px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "30px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "14px", maxWidth: "36rem"}}>
<p className="kicker">The shelves</p>
<h2 className="h2t" style={{margin: "0", fontWeight: "500", fontSize: "52px", lineHeight: "1.08", letterSpacing: "-0.03em", color: "#252323"}}>Read here. <span style={{fontWeight: "300", fontStyle: "italic"}}>Take one home.</span></h2>
</div>
<p style={{margin: "0", fontSize: "15px", maxWidth: "22rem"}}>Careful with the stacks, they tip. Thousands of new and used books, and we'll order anything we don't have.</p>
</div>
<div className="grid3">
{v.stacks.map((s, $index) => (<Fragment key={$index}><div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "22px", padding: "10px 20px 34px", borderRadius: "28px", background: s.bg}}>
<Link to="/books" className={`stack ${s.tip}`} aria-label={s.label} onMouseEnter={s.tipIt} onFocus={s.tipIt} style={{minHeight: "250px", justifyContent: "flex-end"}}>
{s.books.map((b, $index) => (<Fragment key={$index}><span className={b.cls}>{b.t} <i>{b.n}</i></span></Fragment>))}
</Link>
<div style={{textAlign: "center", display: "flex", flexDirection: "column", gap: "6px"}}>
<h3 style={{margin: "0", fontWeight: "600", fontSize: "21px", color: "#252323"}}>{s.title}</h3>
<p style={{margin: "0", fontSize: "15px", lineHeight: "1.6"}}>{s.note}</p>
</div>
</div></Fragment>))}
</div>
</section>


<section className="wrap split" style={{paddingBottom: "110px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "20px", order: "2"}}>
<p className="kicker">About the shop</p>
<h2 className="h2t" style={{margin: "0", fontWeight: "500", fontSize: "46px", lineHeight: "1.1", letterSpacing: "-0.03em", color: "#252323"}}>A bookshop that happens to make <span style={{fontWeight: "300", fontStyle: "italic"}}>very good chai.</span></h2>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.75"}}>[Owner name] opened Steep &amp; Spine in [year] with a few hundred books from home and a chai recipe borrowed from [family member]. The shelves have grown a lot since then. The recipe hasn't changed.</p>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.75"}}>Stay as long as you like. No laptop limit, no minimum, and the armchairs by the window are first come, first served.</p>
</div>
<img src={img("/images/barista.jpg")} alt="Baristas working behind a long wooden counter in a bright cafe" style={{display: "block", width: "100%", height: "460px", objectFit: "cover", borderRadius: "28px", order: "1"}} />
</section>


<section style={{background: "#DCE6E5", padding: "100px 0"}}>
<div className="wrap">
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", marginBottom: "40px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
<p className="kicker">This week</p>
<h2 className="h2t" style={{margin: "0", fontWeight: "500", fontSize: "48px", lineHeight: "1.08", letterSpacing: "-0.03em", color: "#252323"}}>Pull up a chair.</h2>
</div>
<Link to="/events" style={{fontWeight: "500"}}>All events and how to perform →</Link>
</div>
<div className="grid3">
{v.week.map((e, $index) => (<Fragment key={$index}><Link to="/events" style={{display: "flex", flexDirection: "column", gap: "14px", padding: "28px", borderRadius: "24px", background: "#FAF8F5", textDecoration: "none", color: "#4A4644", border: "1px solid #E2DBCD"}}>
<span style={{alignSelf: "flex-start", fontSize: "12px", fontWeight: "500", letterSpacing: ".12em", textTransform: "uppercase", padding: "6px 12px", borderRadius: "999px", background: e.tagBg, color: e.tagFg}}>{e.type}</span>
<strong style={{fontWeight: "600", fontSize: "22px", lineHeight: "1.25", color: "#252323"}}>{e.title}</strong>
<span style={{fontSize: "15px", lineHeight: "1.6"}}>{e.note}</span>
<span style={{marginTop: "auto", fontSize: "14px", fontWeight: "500", color: "#3A6667"}}>{e.when}</span>
</Link></Fragment>))}
</div>
</div>
</section>


<section id="visit" className="wrap" style={{paddingTop: "110px", paddingBottom: "100px"}}>
<img src={img("/images/storefront.jpg")} alt="Sunlit sidewalk tables and rattan chairs outside a cafe" style={{display: "block", width: "100%", height: "340px", objectFit: "cover", borderRadius: "28px"}} />
<div className="split" style={{paddingTop: "50px", alignItems: "start"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
<p className="kicker">Visit</p>
<h2 className="h2t" style={{margin: "0", fontWeight: "500", fontSize: "46px", lineHeight: "1.1", letterSpacing: "-0.03em", color: "#252323"}}>Find the chairs out front.</h2>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.75"}}>[Street address]<br />[City, State ZIP]<br />[Parking or transit note]</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "12px", paddingTop: "6px"}}>
<a href="https://maps.google.com" style={{display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 24px", borderRadius: "999px", background: "#3A6667", color: "#FFFFFF", textDecoration: "none", fontWeight: "500"}}>Get directions</a>
<a href="tel:+10000000000" style={{display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 24px", borderRadius: "999px", border: "1.5px solid #3A6667", color: "#3A6667", textDecoration: "none", fontWeight: "500"}}>[(000) 000-0000]</a>
</div>
</div>
<dl style={{margin: "0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "14px 32px", fontSize: "16px", padding: "26px 30px", borderRadius: "24px", background: "#DAD2BC"}}>
<dt style={{fontWeight: "600", color: "#252323"}}>Mon – Thu</dt><dd style={{margin: "0"}}>[8am – 9pm]</dd>
<dt style={{fontWeight: "600", color: "#252323"}}>Fri – Sat</dt><dd style={{margin: "0"}}>[8am – 10pm]</dd>
<dt style={{fontWeight: "600", color: "#252323"}}>Sunday</dt><dd style={{margin: "0"}}>[9am – 6pm]</dd>
<dt style={{fontWeight: "600", color: "#252323"}}>Kitchen</dt><dd style={{margin: "0"}}>Chai until close, pastries until they're gone</dd>
</dl>
</div>
</section>


<footer style={{background: "#252323", color: "#FFFFFF", padding: "70px 0 36px"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "40px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "28px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "10px", maxWidth: "30rem"}}>
<h2 style={{margin: "0", fontWeight: "500", fontSize: "34px", letterSpacing: "-0.02em"}}>The monthly <span style={{fontWeight: "300", fontStyle: "italic"}}>steep sheet.</span></h2>
<p style={{margin: "0", color: "#DAD2BC", fontSize: "15px"}}>New arrivals, staff picks and the next open mic. Once a month.</p>
</div>
{v.joined && (<><p style={{margin: "0", fontSize: "18px", color: "#DAD2BC"}}>You're on the list. See you between the shelves.</p></>)}
{v.notJoined && (<><form style={{display: "flex", flexWrap: "wrap", gap: "10px"}} onSubmit={v.join}>
<label htmlFor="note-email" style={{position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)"}}>Email</label>
<input id="note-email" type="email" required placeholder="you@email.com" style={{minHeight: "50px", minWidth: "260px", padding: "0 20px", borderRadius: "999px", border: "0", font: "400 15px Poppins, sans-serif", color: "#252323"}} />
<button type="submit" style={{minHeight: "50px", padding: "0 24px", borderRadius: "999px", border: "0", background: "#DAD2BC", color: "#252323", font: "500 15px Poppins, sans-serif", cursor: "pointer"}}>Subscribe</button>
</form></>)}
</div>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", paddingTop: "26px", borderTop: "1px solid #3E3B3A", fontSize: "14px", color: "#DAD2BC"}}>
<span>© Steep &amp; Spine · [Street address, City]</span>
<span style={{display: "flex", gap: "22px"}}><a href="#" style={{color: "#FFFFFF"}}>Instagram</a><Link to="/books" style={{color: "#FFFFFF"}}>Book requests</Link><Link to="/events" style={{color: "#FFFFFF"}}>Perform here</Link></span>
</div>
</div>
</footer>
</div>
    </>
  );
}
