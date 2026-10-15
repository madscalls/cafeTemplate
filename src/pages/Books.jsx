// Generated from the Steep & Spine design mockup (Books.dc.html), then hand-editable.
// The page logic below is the mockup's own class; DCLogic (src/dc.js) gives it state like a React component.
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';
import { DCLogic, useLogic } from '../dc.js';
import { img } from '../assets.js';

const PAGE_CSS = "body{margin:0;background:#F5F1ED}\na{color:#345D5E}a:hover{color:#252323}\n.wrap{max-width:1240px;margin:0 auto;padding:0 40px;box-sizing:border-box}\n.navlinks a{color:#252323;text-decoration:none}\n.navlinks a:hover{color:#3A6667;text-decoration:underline;text-underline-offset:6px}\n.kicker{margin:0;font-size:13px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:#345D5E}\n.grid4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:28px}\n.split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}\n.form2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}\n.field{display:flex;flex-direction:column;gap:8px;font-size:14px;font-weight:500;color:#252323}\n.field input,.field textarea{min-height:50px;padding:12px 16px;border-radius:14px;border:1px solid #CFC6B2;font:400 15px Poppins,sans-serif;color:#252323;background:#FAF8F5;box-sizing:border-box}\n.field input:focus,.field textarea:focus{outline:3px solid #A99985;outline-offset:1px}\n.cover{transition:transform .35s ease,box-shadow .35s ease}\n.bookcard:hover .cover{transform:translateY(-6px) rotate(-1.5deg);box-shadow:0 22px 34px -18px rgba(37,35,35,.45)}\n@media (max-width:960px){\n.grid4{grid-template-columns:repeat(2,minmax(0,1fr))!important}\n.split{grid-template-columns:1fr!important}\n}\n@media (max-width:640px){\n.navlinks{display:none!important}\n.wrap{padding:0 20px!important}\n.form2{grid-template-columns:1fr!important}\n.grid4{gap:16px!important}\n.h1t{font-size:42px!important}\n.h2t{font-size:32px!important}\n.hdrbtn{padding:0 14px!important;font-size:13px!important}\n}";

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { filter: 'all', holds: {}, cond: 'either', format: 'any', sent: false };
  }
  renderVals() {
    const s = this.state;
    const books = [
      { id: 'pp', title: 'Pride and Prejudice', author: 'Jane Austen', cond: 'Used', price: '$8', bg: '#DAD2BC', fg: '#252323', pick: true },
      { id: 'sg', title: 'The Secret Garden', author: 'F. H. Burnett', cond: 'New', price: '$14', bg: '#3A6667', fg: '#FFFFFF', pick: false },
      { id: 'mm', title: 'Middlemarch', author: 'George Eliot', cond: 'Used', price: '$10', bg: '#CFC6B2', fg: '#252323', pick: false },
      { id: 'lg', title: 'Leaves of Grass', author: 'Walt Whitman', cond: 'New', price: '$16', bg: '#A99985', fg: '#252323', pick: true },
      { id: 'ai', title: 'The Age of Innocence', author: 'Edith Wharton', cond: 'Used', price: '$7', bg: '#DCE6E5', fg: '#3A6667', pick: false },
      { id: 'rv', title: 'A Room with a View', author: 'E. M. Forster', cond: 'New', price: '$15', bg: '#E9E2D6', fg: '#252323', pick: true },
      { id: 'md', title: 'Moby-Dick', author: 'Herman Melville', cond: 'Used', price: '$9', bg: '#548687', fg: '#FFFFFF', pick: false },
      { id: 'aw', title: 'The Awakening', author: 'Kate Chopin', cond: 'New', price: '$13', bg: '#C9D8D7', fg: '#252323', pick: false }
    ];
    const filters = [['all', 'All'], ['pick', 'Staff picks'], ['New', 'New'], ['Used', 'Used']];
    const pills = filters.map(([id, label]) => ({ label, on: s.filter === id, off: s.filter !== id, pick: () => this.setState({ filter: id }) }));
    const shown = books
      .filter((b) => s.filter === 'all' || (s.filter === 'pick' ? b.pick : b.cond === s.filter))
      .map((b) => ({ ...b, held: !!s.holds[b.id], free: !s.holds[b.id], toggle: () => this.setState({ holds: { ...s.holds, [b.id]: !s.holds[b.id] } }) }));
    const nHolds = books.filter((b) => s.holds[b.id]).length;
    const condList = [['new', 'New'], ['used', 'Used'], ['either', 'Either is fine']];
    const conds = condList.map(([id, label]) => ({ label, on: s.cond === id, off: s.cond !== id, pick: () => this.setState({ cond: id }) }));
    const formatList = [['hard', 'Hardcover'], ['paper', 'Paperback'], ['large', 'Large print'], ['any', 'Any']];
    const formats = formatList.map(([id, label]) => ({ label, on: s.format === id, off: s.format !== id, pick: () => this.setState({ format: id }) }));
    return {
      pills, shown,
      hasHolds: nHolds > 0,
      holdNote: nHolds === 1 ? '1 book on hold.' : nHolds + ' books on hold.',
      conds, formats,
      sent: s.sent, notSent: !s.sent,
      send: (e) => { e.preventDefault(); this.setState({ sent: true }); },
      again: () => this.setState({ sent: false })
    };
  }
}

export default function Books() {
  const props = useTheme({});
  const v = useLogic(Component, props).renderVals();
  useEffect(() => { document.title = "Steep & Spine: books and requests"; }, []);
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div style={{fontFamily: "Poppins, sans-serif", color: "#4A4644", background: "#F5F1ED", overflowX: "clip"}}>

<div style={{background: "#DAD2BC", padding: "10px 20px", textAlign: "center", fontSize: "14px", color: "#252323"}}>Trade in two used books, take one home · New releases every [Tuesday]</div>

<header className="wrap" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", paddingTop: "24px", paddingBottom: "24px"}}>
<Link to="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#252323"}}>
<svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#DAD2BC"></circle><path d="M8 13c4-2 8-2 12 1v15c-4-3-8-3-12-1zM32 13c-4-2-8-2-12 1v15c4-3 8-3 12-1z" fill="none" stroke="#3A6667" strokeWidth="1.8" strokeLinejoin="round"></path></svg>
<span style={{display: "flex", flexDirection: "column", lineHeight: "1.05"}}><span style={{fontWeight: "600", fontSize: "21px", letterSpacing: "-0.01em"}}>Steep &amp; Spine</span><span style={{fontSize: "11px", fontWeight: "500", letterSpacing: ".22em", textTransform: "uppercase", color: "#3A6667"}}>Books &amp; Chai</span></span>
</Link>
<nav className="navlinks" style={{display: "flex", gap: "34px", fontSize: "15px"}} aria-label="Main">
<Link to="/books" aria-current="page" style={{color: "#3A6667", textDecoration: "underline", textUnderlineOffset: "6px"}}>Books</Link>
<Link to="/#chai">Chai</Link>
<Link to="/events">Events</Link>
<Link to="/#visit">Visit</Link>
</nav>
<a className="hdrbtn" href="#request" style={{display: "inline-flex", alignItems: "center", minHeight: "46px", padding: "0 22px", borderRadius: "999px", background: "#3A6667", color: "#FFFFFF", textDecoration: "none", fontWeight: "500", fontSize: "14px"}}>Request a book</a>
</header>


<section className="wrap" style={{paddingTop: "20px", paddingBottom: "90px"}}>
<div style={{position: "relative"}}>
<img src={img("/images/pages.jpg")} alt="A wall covered in open book pages" style={{display: "block", width: "100%", height: "400px", objectFit: "cover", borderRadius: "28px"}} />
<div style={{position: "relative", margin: "-120px 0 0 clamp(16px, 5vw, 64px)", maxWidth: "640px", background: "#FAF8F5", borderRadius: "28px", padding: "clamp(26px, 4vw, 48px)", display: "flex", flexDirection: "column", gap: "18px", boxShadow: "0 30px 60px -40px rgba(37,35,35,.5)"}}>
<p className="kicker">The shelves</p>
<h1 className="h1t" style={{margin: "0", fontWeight: "500", fontSize: "58px", lineHeight: "1.05", letterSpacing: "-0.035em", color: "#252323"}}>New, used <span style={{fontWeight: "300", fontStyle: "italic", color: "#3A6667"}}>&amp; well loved.</span></h1>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.75"}}>Everything on the shelves is free to read in the shop. If you want to take it home, it's for sale. If we don't have it, we'll find it.</p>
</div>
</div>
</section>


<section className="wrap" style={{paddingBottom: "100px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", marginBottom: "40px"}}>
<h2 className="h2t" style={{margin: "0", fontWeight: "500", fontSize: "42px", letterSpacing: "-0.03em", color: "#252323"}}>On the front table</h2>
<div style={{display: "flex", flexWrap: "wrap", gap: "10px"}} role="group" aria-label="Filter books">
{v.pills.map((p, $index) => (<Fragment key={$index}>{p.on && (<><button type="button" aria-pressed="true" style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #3A6667", background: "#3A6667", color: "#FFFFFF", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={p.pick}>{p.label}</button></>)}
{p.off && (<><button type="button" aria-pressed="false" style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #CFC6B2", background: "#FAF8F5", color: "#252323", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={p.pick}>{p.label}</button></>)}</Fragment>))}
</div>
</div>
<div className="grid4">
{v.shown.map((b, $index) => (<Fragment key={$index}><article className="bookcard" style={{display: "flex", flexDirection: "column", gap: "14px"}}>
<div className="cover" style={{position: "relative", aspectRatio: "2 / 3", borderRadius: "6px 14px 14px 6px", background: b.bg, color: b.fg, padding: "26px 22px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "inset 6px 0 0 rgba(0,0,0,.08)"}}>
<span style={{fontSize: "11px", fontWeight: "500", letterSpacing: ".2em", textTransform: "uppercase", opacity: ".8"}}>{b.author}</span>
<span style={{fontSize: "26px", fontWeight: "500", lineHeight: "1.12", letterSpacing: "-0.02em"}}>{b.title}</span>
<span style={{width: "34px", height: "2px", background: b.fg, opacity: ".6"}}></span>
{b.pick && (<><span style={{position: "absolute", top: "-10px", right: "-8px", background: "#FAF8F5", color: "#3A6667", border: "1.5px solid #3A6667", borderRadius: "999px", padding: "4px 10px", fontSize: "11px", fontWeight: "600", letterSpacing: ".08em", textTransform: "uppercase", transform: "rotate(6deg)"}}>Staff pick</span></>)}
</div>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "10px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "2px", minWidth: "0"}}>
<strong style={{fontWeight: "600", fontSize: "16px", color: "#252323"}}>{b.title}</strong>
<span style={{fontSize: "13px"}}>{b.author} · {b.cond}</span>
</div>
<span style={{fontWeight: "500", color: "#252323"}}>{b.price}</span>
</div>
{b.held && (<><button type="button" style={{minHeight: "44px", borderRadius: "999px", border: "1.5px solid #3A6667", background: "#DAD2BC", color: "#252323", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={b.toggle}>On hold at the counter · undo</button></>)}
{b.free && (<><button type="button" style={{minHeight: "44px", borderRadius: "999px", border: "1.5px solid #CFC6B2", background: "#FAF8F5", color: "#252323", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={b.toggle}>Hold for pickup</button></>)}
</article></Fragment>))}
</div>
{v.hasHolds && (<><p style={{margin: "30px 0 0", padding: "16px 22px", borderRadius: "16px", background: "#E9E2D6", color: "#252323", fontSize: "15px"}}>{v.holdNote} We'll keep them behind the counter for [3 days].</p></>)}
</section>


<section style={{background: "#DAD2BC", padding: "100px 0"}}>
<div className="wrap split">
<img src={img("/images/aisle.jpg")} alt="A narrow aisle between tall bookshelves" style={{display: "block", width: "100%", height: "520px", objectFit: "cover", borderRadius: "999px 999px 28px 28px"}} />
<div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
<p className="kicker">Used books</p>
<h2 className="h2t" style={{margin: "0", fontWeight: "500", fontSize: "46px", lineHeight: "1.1", letterSpacing: "-0.03em", color: "#252323"}}>Bring two, <span style={{fontWeight: "300", fontStyle: "italic"}}>take one.</span></h2>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.75"}}>Drop off books you've finished and we'll give you store credit or a straight swap. We take fiction, poetry, cookbooks, kids' books and anything with a good story behind it.</p>
<ul style={{margin: "0", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "16px", lineHeight: "1.6"}}>
<li>Trade-ins any day before [6pm]</li>
<li>Store credit never expires</li>
<li>First editions and signed copies kept behind the counter. Just ask.</li>
</ul>
</div>
</div>
</section>


<section id="request" className="wrap" style={{paddingTop: "100px", paddingBottom: "100px"}}>
<div style={{maxWidth: "860px", margin: "0 auto"}}>
{v.sent && (<><div style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "60px 30px", borderRadius: "32px", background: "#E9E2D6"}}>
<svg width="64" height="64" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#FFFFFF"></circle><path d="M8 13c4-2 8-2 12 1v15c-4-3-8-3-12-1zM32 13c-4-2-8-2-12 1v15c4-3 8-3 12-1z" fill="none" stroke="#3A6667" strokeWidth="1.8" strokeLinejoin="round"></path></svg>
<h2 style={{margin: "0", fontWeight: "500", fontSize: "38px", letterSpacing: "-0.02em", color: "#252323"}}>We're on the hunt.</h2>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", maxWidth: "30rem"}}>We'll check our suppliers and the used shelves and let you know within [two days]. Most special orders arrive in [about a week].</p>
<button type="button" style={{minHeight: "46px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid #3A6667", background: "#FAF8F5", color: "#3A6667", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={v.again}>Request another book</button>
</div></>)}
{v.notSent && (<><form style={{display: "flex", flexDirection: "column", gap: "26px", padding: "clamp(24px, 4vw, 52px)", borderRadius: "32px", border: "1px solid #CFC6B2", background: "#FAF8F5"}} onSubmit={v.send}>
<div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
<p className="kicker">Book requests</p>
<h2 className="h2t" style={{margin: "0", fontWeight: "500", fontSize: "44px", lineHeight: "1.1", letterSpacing: "-0.03em", color: "#252323"}}>Can't find it? <span style={{fontWeight: "300", fontStyle: "italic"}}>We'll order it.</span></h2>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7"}}>Tell us what you're after, even if it's just "the blue one about the lighthouse." We like a puzzle.</p>
</div>
<div className="form2">
<label className="field">Title<input type="text" name="title" required placeholder="Or as much as you remember" /></label>
<label className="field">Author<input type="text" name="author" placeholder="If you know it" /></label>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
<span style={{fontSize: "14px", fontWeight: "500", color: "#252323"}}>New or used?</span>
<div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
{v.conds.map((c, $index) => (<Fragment key={$index}>{c.on && (<><button type="button" aria-pressed="true" style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #3A6667", background: "#3A6667", color: "#FFFFFF", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={c.pick}>{c.label}</button></>)}
{c.off && (<><button type="button" aria-pressed="false" style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #CFC6B2", background: "#FAF8F5", color: "#252323", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={c.pick}>{c.label}</button></>)}</Fragment>))}
</div>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
<span style={{fontSize: "14px", fontWeight: "500", color: "#252323"}}>Format</span>
<div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
{v.formats.map((f, $index) => (<Fragment key={$index}>{f.on && (<><button type="button" aria-pressed="true" style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #3A6667", background: "#3A6667", color: "#FFFFFF", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={f.pick}>{f.label}</button></>)}
{f.off && (<><button type="button" aria-pressed="false" style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1.5px solid #CFC6B2", background: "#FAF8F5", color: "#252323", font: "500 14px Poppins, sans-serif", cursor: "pointer"}} onClick={f.pick}>{f.label}</button></>)}</Fragment>))}
</div>
</div>
<div className="form2">
<label className="field">Your name<input type="text" name="name" autoComplete="name" required /></label>
<label className="field">Email or phone<input type="text" name="contact" required /></label>
</div>
<label className="field">Anything else?<textarea name="notes" rows="4" placeholder="A gift? A specific edition? A deadline?"></textarea></label>
<div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "18px"}}>
<button type="submit" style={{minHeight: "54px", padding: "0 32px", borderRadius: "999px", border: "0", background: "#3A6667", color: "#FFFFFF", font: "500 16px Poppins, sans-serif", cursor: "pointer"}}>Send request</button>
<span style={{fontSize: "14px"}}>No deposit until the book arrives.</span>
</div>
</form></>)}
</div>
</section>

<footer style={{background: "#252323", color: "#DAD2BC", padding: "36px 0"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", fontSize: "14px"}}>
<span>© Steep &amp; Spine · [Street address, City]</span>
<span style={{display: "flex", gap: "22px"}}><Link to="/" style={{color: "#FFFFFF"}}>Home</Link><Link to="/events" style={{color: "#FFFFFF"}}>Events</Link><a href="#" style={{color: "#FFFFFF"}}>Instagram</a></span>
</div>
</footer>
</div>
    </>
  );
}
