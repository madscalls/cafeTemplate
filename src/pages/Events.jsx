// Generated from the Steep & Spine design mockup (Events.dc.html), then hand-editable.
// The page logic below is the mockup's own class; DCLogic (src/dc.js) gives it state like a React component.
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';
import { DCLogic, useLogic } from '../dc.js';
import { img } from '../assets.js';

const PAGE_CSS = "body{margin:0;background:#F5F1ED}\na{color:#345D5E}a:hover{color:#252323}\n.wrap{max-width:1240px;margin:0 auto;padding:0 40px;box-sizing:border-box}\n.navlinks a{color:#252323;text-decoration:none}\n.navlinks a:hover{color:#3A6667;text-decoration:underline;text-underline-offset:6px}\n.kicker{margin:0;font-size:13px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:#345D5E}\n.hero{display:grid;grid-template-columns:1.1fr 1fr;gap:56px;align-items:center}\n.grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}\n.form2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}\n.field{display:flex;flex-direction:column;gap:8px;font-size:14px;font-weight:500;color:#252323}\n.field input,.field textarea{min-height:50px;padding:12px 16px;border-radius:14px;border:1px solid #CFC6B2;font:400 15px Poppins,sans-serif;color:#252323;background:#FAF8F5;box-sizing:border-box}\n.field input:focus,.field textarea:focus{outline:3px solid #A99985;outline-offset:1px}\n.ev{display:grid;grid-template-columns:96px 1fr auto;gap:28px;align-items:center;padding:26px 0;border-bottom:1px solid #E2DBCD}\n@media (max-width:960px){\n.hero{grid-template-columns:1fr!important}\n.grid3{grid-template-columns:1fr!important}\n}\n@media (max-width:640px){\n.navlinks{display:none!important}\n.wrap{padding:0 20px!important}\n.form2{grid-template-columns:1fr!important}\n.ev{grid-template-columns:72px 1fr!important;gap:16px!important}\n.evbtn{grid-column:1 / -1}\n.h1t{font-size:42px!important}\n.h2t{font-size:32px!important}\n.hdrbtn{padding:0 14px!important;font-size:13px!important}\n}";

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { filter: 'all', saved: {}, kind: 'music', nights: { thu: true }, sent: false };
  }
  renderVals() {
    const s = this.state;
    const types = { poetry: ['Poetry', '#E9E2D6', 'Save a seat'], music: ['Live music', '#DAD2BC', 'Save a seat'], club: ['Book club', '#E4DED2', 'Join the club'], author: ['Author reading', '#DCE6E5', 'Save a seat'] };
    const raw = [
      { id: 'a', kind: 'poetry', offset: 2, time: '7pm', title: 'Open mic poetry night', note: 'Five-minute slots, sign up at the counter. First-timers get a free chai.' },
      { id: 'b', kind: 'music', offset: 4, time: '6pm', title: 'Acoustic in the stacks: [Artist name]', note: 'A quiet folk set between the shelves. Free, tips go to the artist.' },
      { id: 'c', kind: 'club', offset: 5, time: '10am', title: 'Sunday silent reading', note: 'One hour, phones away, bring whatever you are reading.' },
      { id: 'd', kind: 'author', offset: 11, time: '7pm', title: '[Author name] reads from [book title]', note: 'Reading, Q&A and signing. Copies available at the counter.' },
      { id: 'e', kind: 'poetry', offset: 9, time: '7pm', title: 'Open mic poetry night', note: 'Theme night: [letters never sent]. Any style welcome.' },
      { id: 'f', kind: 'music', offset: 18, time: '6pm', title: 'Strings &amp; chai: [Duo name]', note: 'Cello and guitar. Lavender honey chai on special all night.' },
      { id: 'g', kind: 'club', offset: 21, time: '6:30pm', title: 'The [month] book club', note: 'This month: [book title]. Ten percent off the book if you join.' }
    ];
    const now = new Date();
    const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dows = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const all = raw.slice().sort((a, b) => a.offset - b.offset).map((e) => {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + e.offset);
      const t = types[e.kind];
      return { ...e, title: e.title.replace('&amp;', '&'), type: t[0], tint: t[1], cta: t[2], mon: mons[d.getMonth()], day: String(d.getDate()), dow: dows[d.getDay()], saved: !!s.saved[e.id], unsaved: !s.saved[e.id], toggle: () => this.setState({ saved: { ...s.saved, [e.id]: !s.saved[e.id] } }) };
    });
    const filters = [['all', 'All'], ['poetry', 'Poetry'], ['music', 'Live music'], ['club', 'Book club'], ['author', 'Readings']];
    const pills = filters.map(([id, label]) => ({ label, on: s.filter === id, off: s.filter !== id, pick: () => this.setState({ filter: id }) }));
    const events = all.filter((e) => s.filter === 'all' || e.kind === s.filter);
    const next = all[0];
    const kindList = [['music', 'Live music'], ['poetry', 'Poetry or spoken word'], ['author', 'Author event'], ['club', 'Hosting a book club'], ['private', 'Private evening']];
    const kinds = kindList.map(([id, label]) => ({ label, on: s.kind === id, off: s.kind !== id, pick: () => this.setState({ kind: id }) }));
    const nightList = [['thu', 'Thursday'], ['fri', 'Friday'], ['sat', 'Saturday'], ['sun', 'Sunday']];
    const nights = nightList.map(([id, label]) => ({ label, on: !!s.nights[id], toggle: () => this.setState({ nights: { ...s.nights, [id]: !s.nights[id] } }) }));
    return {
      pills, events, none: events.length === 0,
      nextTitle: next.title, nextWhen: next.dow + ' ' + next.mon + ' ' + next.day + ' · ' + next.time,
      kinds, nights,
      sent: s.sent, notSent: !s.sent,
      send: (e) => { e.preventDefault(); this.setState({ sent: true }); },
      again: () => this.setState({ sent: false })
    };
  }
}

export default function Events() {
  const props = useTheme({});
  const v = useLogic(Component, props).renderVals();
  useEffect(() => { document.title = "Steep & Spine: live music and poetry nights"; }, []);
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div style={{fontFamily: "Poppins, sans-serif", color: "#4A4644", background: "#F5F1ED", overflowX: "clip"}}>

<div style={{background: "#DAD2BC", padding: "10px 20px", textAlign: "center", fontSize: "14px", color: "#252323"}}>Open mic sign-up starts at [6:30pm] every [Thursday] · Free to attend, chai to buy</div>

<header className="wrap" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", paddingTop: "24px", paddingBottom: "24px"}}>
<Link to="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#252323"}}>
<svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#DAD2BC"></circle><path d="M8 13c4-2 8-2 12 1v15c-4-3-8-3-12-1zM32 13c-4-2-8-2-12 1v15c4-3 8-3 12-1z" fill="none" stroke="#3A6667" strokeWidth="1.8" strokeLinejoin="round"></path></svg>
<span style={{display: "flex", flexDirection: "column", lineHeight: "1.05"}}><span style={{fontWeight: "600", fontSize: "21px", letterSpacing: "-0.01em"}}>Steep &amp; Spine</span><span style={{fontSize: "11px", fontWeight: "500", letterSpacing: ".22em", textTransform: "uppercase", color: "#3A6667"}}>Books &amp; Chai</span></span>
</Link>
<nav className="navlinks" style={{display: "flex", gap: "34px", fontSize: "15px"}} aria-label="Main">
<Link to="/books">Books</Link>
<Link to="/#chai">Chai</Link>
<Link to="/events" aria-current="page" style={{color: "#3A6667", textDecoration: "underline", textUnderlineOffset: "6px"}}>Events</Link>
<Link to="/#visit">Visit</Link>
</nav>
<a className="hdrbtn" href="#perform" style={{display: "inline-flex", alignItems: "center", minHeight: "46px", padding: "0 22px", borderRadius: "999px", background: "#3A6667", color: "#FFFFFF", textDecoration: "none", fontWeight: "500", fontSize: "14px"}}>Perform here</a>
</header>


<section className="wrap hero" style={{paddingTop: "30px", paddingBottom: "90px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "24px"}}>
<p className="kicker">Events</p>
<h1 className="h1t" style={{margin: "0", fontWeight: "500", fontSize: "64px", lineHeight: "1.05", letterSpacing: "-0.035em", color: "#252323"}}>Poems, songs <span style={{fontWeight: "300", fontStyle: "italic", color: "#3A6667"}}>and the hush between them.</span></h1>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.75", maxWidth: "32rem"}}>Most nights the shop is quiet. A few nights a week, we push the armchairs back, dim the lamps and hand someone the mic.</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "14px"}}>
<a href="#calendar" style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#3A6667", color: "#FFFFFF", textDecoration: "none", fontWeight: "500", fontSize: "15px"}}>See what's on</a>
<a href="#perform" style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", borderRadius: "999px", border: "1.5px solid #3A6667", color: "#3A6667", textDecoration: "none", fontWeight: "500", fontSize: "15px"}}>Ask about performing</a>
</div>
</div>
<div style={{position: "relative"}}>
<img src={img("/images/table.jpg")} alt="A latte, croissant and open magazine on a small wooden table" style={{display: "block", width: "100%", height: "520px", objectFit: "cover", borderRadius: "28px"}} />
<div style={{position: "absolute", left: "-28px", bottom: "34px", background: "#FAF8F5", borderRadius: "22px", padding: "18px 22px", display: "flex", alignItems: "center", gap: "14px", boxShadow: "0 20px 40px -24px rgba(37,35,35,.5)"}}>
<svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#E9E2D6"></circle><rect x="16" y="9" width="8" height="14" rx="4" fill="none" stroke="#3A6667" strokeWidth="1.8"></rect><path d="M12 20a8 8 0 0 0 16 0M20 28v4M16 32h8" fill="none" stroke="#3A6667" strokeWidth="1.8" strokeLinecap="round"></path></svg>
<span style={{display: "flex", flexDirection: "column"}}><strong style={{fontWeight: "600", color: "#252323"}}>Next up: {v.nextTitle}</strong><span style={{fontSize: "14px"}}>{v.nextWhen}</span></span>
</div>
</div>
</section>


<section id="calendar" style={{background: "#DCE6E5", padding: "90px 0"}}>
<div className="wrap">
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", marginBottom: "20px"}}>
<h2 className="h2t" style={{margin: "0", fontWeight: "500", fontSize: "44px", letterSpacing: "-0.03em", color: "#252323"}}>Coming up</h2>
<div style={{display: "flex", flexWrap: "wrap", gap: "10px"}} role="group" aria-label="Filter events">
{v.pills.map((p, $index) => (<Fragment key={$index}>{p.on && (<><button type="button" aria-pressed="true" style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #3A6667", background: "#3A6667", color: "#FFFFFF", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={p.pick}>{p.label}</button></>)}
{p.off && (<><button type="button" aria-pressed="false" style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #CFC6B2", background: "#FAF8F5", color: "#252323", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={p.pick}>{p.label}</button></>)}</Fragment>))}
</div>
</div>
<div style={{background: "#FAF8F5", borderRadius: "28px", padding: "6px clamp(20px, 3vw, 40px)"}}>
{v.events.map((e, $index) => (<Fragment key={$index}><div className="ev">
<div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "96px", borderRadius: "20px", background: e.tint, color: "#252323"}}>
<span style={{fontSize: "12px", fontWeight: "500", letterSpacing: ".14em", textTransform: "uppercase"}}>{e.mon}</span>
<span style={{fontSize: "32px", fontWeight: "500", lineHeight: "1"}}>{e.day}</span>
<span style={{fontSize: "12px"}}>{e.dow}</span>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "6px", minWidth: "0"}}>
<span style={{fontSize: "12px", fontWeight: "500", letterSpacing: ".14em", textTransform: "uppercase", color: "#3A6667"}}>{e.type} · {e.time}</span>
<strong style={{fontWeight: "600", fontSize: "21px", color: "#252323"}}>{e.title}</strong>
<span style={{fontSize: "15px", lineHeight: "1.6"}}>{e.note}</span>
</div>
<div className="evbtn">
{e.saved && (<><button type="button" style={{minHeight: "46px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #3A6667", background: "#DAD2BC", color: "#252323", font: "500 14px Poppins, sans-serif", cursor: "pointer", whiteSpace: "nowrap"}} onClick={e.toggle}>Seat saved · undo</button></>)}
{e.unsaved && (<><button type="button" style={{minHeight: "46px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #CFC6B2", background: "#FAF8F5", color: "#252323", font: "500 14px Poppins, sans-serif", cursor: "pointer", whiteSpace: "nowrap"}} onClick={e.toggle}>{e.cta}</button></>)}
</div>
</div></Fragment>))}
{v.none && (<><p style={{margin: "0", padding: "30px 0", fontSize: "16px"}}>Nothing of that kind on the calendar yet. Check back soon.</p></>)}
</div>
<p style={{margin: "18px 0 0", fontSize: "14px"}}>Seats are first come, first served. Saving one just tells us how many chairs to set out.</p>
</div>
</section>


<section className="wrap" style={{paddingTop: "100px", paddingBottom: "40px"}}>
<p className="kicker" style={{marginBottom: "14px"}}>For performers</p>
<h2 className="h2t" style={{margin: "0 0 36px", fontWeight: "500", fontSize: "44px", lineHeight: "1.1", letterSpacing: "-0.03em", color: "#252323", maxWidth: "20ch"}}>A small room <span style={{fontWeight: "300", fontStyle: "italic"}}>that really listens.</span></h2>
<div className="grid3">
<div style={{display: "flex", flexDirection: "column", gap: "8px", padding: "28px", borderRadius: "24px", background: "#DAD2BC"}}><strong style={{fontWeight: "600", fontSize: "19px", color: "#252323"}}>The space</strong><span style={{fontSize: "15px", lineHeight: "1.65"}}>Seats about [40] between the shelves, with a little more standing room by the window.</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "8px", padding: "28px", borderRadius: "24px", background: "#E9E2D6"}}><strong style={{fontWeight: "600", fontSize: "19px", color: "#252323"}}>The sound</strong><span style={{fontSize: "15px", lineHeight: "1.65"}}>A small PA with two mics and a DI box. Acoustic sets and spoken word work best.</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "8px", padding: "28px", borderRadius: "24px", background: "#DCE6E5"}}><strong style={{fontWeight: "600", fontSize: "19px", color: "#252323"}}>The deal</strong><span style={{fontSize: "15px", lineHeight: "1.65"}}>[Pay, tips or door split]. Your books and merch are welcome on the front table.</span></div>
</div>
</section>


<section id="perform" className="wrap" style={{paddingTop: "60px", paddingBottom: "100px"}}>
<div style={{maxWidth: "900px", margin: "0 auto"}}>
{v.sent && (<><div style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "60px 30px", borderRadius: "32px", background: "#DAD2BC"}}>
<svg width="64" height="64" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#FFFFFF"></circle><rect x="16" y="9" width="8" height="14" rx="4" fill="none" stroke="#3A6667" strokeWidth="1.8"></rect><path d="M12 20a8 8 0 0 0 16 0M20 28v4M16 32h8" fill="none" stroke="#3A6667" strokeWidth="1.8" strokeLinecap="round"></path></svg>
<h2 style={{margin: "0", fontWeight: "500", fontSize: "38px", letterSpacing: "-0.02em", color: "#252323"}}>Thanks, we'll be in touch.</h2>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", maxWidth: "30rem"}}>[Events host name] reads every note and replies within [a week], usually with a couple of open dates.</p>
<button type="button" style={{minHeight: "46px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #3A6667", background: "#FAF8F5", color: "#3A6667", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={v.again}>Send another</button>
</div></>)}
{v.notSent && (<><form style={{display: "flex", flexDirection: "column", gap: "26px", padding: "clamp(24px, 4vw, 52px)", borderRadius: "32px", border: "1px solid #CFC6B2"}} onSubmit={v.send}>
<div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
<p className="kicker">Inquiries</p>
<h2 className="h2t" style={{margin: "0", fontWeight: "500", fontSize: "42px", lineHeight: "1.1", letterSpacing: "-0.03em", color: "#252323"}}>Want the mic? <span style={{fontWeight: "300", fontStyle: "italic"}}>Say hello.</span></h2>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7"}}>Musicians, poets, authors and anyone who wants to host a book club or a private evening.</p>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
<span style={{fontSize: "14px", fontWeight: "500", color: "#252323"}}>I'm asking about</span>
<div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
{v.kinds.map((k, $index) => (<Fragment key={$index}>{k.on && (<><button type="button" aria-pressed="true" style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #3A6667", background: "#3A6667", color: "#FFFFFF", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={k.pick}>{k.label}</button></>)}
{k.off && (<><button type="button" aria-pressed="false" style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #CFC6B2", background: "#FAF8F5", color: "#252323", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={k.pick}>{k.label}</button></>)}</Fragment>))}
</div>
</div>
<div className="form2">
<label className="field">Name or act name<input type="text" name="name" required /></label>
<label className="field">Email<input type="email" name="email" autoComplete="email" required /></label>
<label className="field">Link to your work<input type="url" name="link" placeholder="Instagram, Bandcamp, a video" /></label>
<label className="field">Dates that work<input type="text" name="dates" placeholder="Any Thursday in [month]" /></label>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
<span style={{fontSize: "14px", fontWeight: "500", color: "#252323"}}>Best nights for you</span>
<div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
{v.nights.map((n, $index) => (<Fragment key={$index}><label style={{display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid #CFC6B2", fontSize: "14px", cursor: "pointer"}}>
<input type="checkbox" checked={n.on} onChange={n.toggle} style={{width: "18px", height: "18px", accentColor: "#3A6667"}} />{n.label}</label></Fragment>))}
</div>
</div>
<label className="field">Tell us about it<textarea name="message" rows="5" placeholder="What you do, how long a set, how many people you'd bring along"></textarea></label>
<div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "18px"}}>
<button type="submit" style={{minHeight: "54px", padding: "0 32px", borderRadius: "999px", border: "0", background: "#3A6667", color: "#FFFFFF", font: "500 16px Poppins, sans-serif", cursor: "pointer"}}>Send inquiry</button>
<span style={{fontSize: "14px"}}>We book about [a month] ahead.</span>
</div>
</form></>)}
</div>
</section>

<footer style={{background: "#252323", color: "#DAD2BC", padding: "36px 0"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", fontSize: "14px"}}>
<span>© Steep &amp; Spine · [Street address, City]</span>
<span style={{display: "flex", gap: "22px"}}><Link to="/" style={{color: "#FFFFFF"}}>Home</Link><Link to="/books" style={{color: "#FFFFFF"}}>Books</Link><a href="#" style={{color: "#FFFFFF"}}>Instagram</a></span>
</div>
</footer>
</div>
    </>
  );
}
