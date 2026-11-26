import { useEffect, useState } from 'react'

const FORM_ENDPOINT = 'https://formspree.io/f/xpwdzgbb'
const BOOKING_EMAIL = '[YOUR BOOKING EMAIL]'
const BOOKING_PHONE = '[YOUR PHONE]'

const genres = ['EDM', 'Latin', 'Dancehall', 'Soca', 'Hip-Hop', 'Afrobeats', 'Top 40']

const ranges = [
  { color: '#1FB5AD', title: 'Clubs', body: 'Peak-hour energy, resident-night consistency and a crowd that stays on the floor.' },
  { color: '#E5BF63', title: 'Festivals', body: 'Big-stage sets that bring together fans of every sound in one field.' },
  { color: '#C98A9A', title: 'Concerts', body: "Pre-show and intermission sets that keep the room warm and the headliner's crowd locked in." },
  { color: '#7FD6D2', title: 'Opening for DJs', body: "Sets the tone, respects the headliner's lane and hands the room over at full energy." },
]

const mixes = [
  { title: '[Mix title: Club Night]', note: '[Genres and length]' },
  { title: '[Mix title: Festival Set]', note: '[Genres and length]' },
  { title: '[Mix title: Open Format Mix]', note: '[Genres and length]' },
]

function PlayIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E5BF63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l5.5 3.5-5.5 3.5z" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#7FD6D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  )
}

function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-brand">
        <span className="protected-bg" style={{ width: 44, height: 44, backgroundImage: 'url(/images/logo.png)' }} role="img" aria-label="DJ Aslan logo" />
        <span>ASLAN</span>
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#range">Range</a>
        <a href="#sets">Mixes</a>
        <a href="#gigs">Past Gigs</a>
        <a href="#presskit">Press Kit</a>
        <a href="#book" className="btn btn-gold" style={{ padding: '11px 22px' }}>Book Aslan</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <div id="top" className="hero">
      <div
        className="hero-bg protected-bg"
        role="img"
        aria-label=""
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', backgroundImage: 'url(/images/hero.jpg)' }}
      />
      <div className="hero-fade" />
      <div className="hero-inner">
        <span className="hero-logo protected-bg" role="img" aria-label="DJ Aslan logo, a faceted teal lion head" style={{ backgroundImage: 'url(/images/logo.png)', backgroundRepeat: 'no-repeat' }} />
        <h1>ASLAN</h1>
        <p className="hero-tag">Any crowd. Any room. Any genre.</p>
        <p className="hero-sub">Open format DJ for clubs, festivals, concerts and opening slots. One DJ who reads the room and moves between worlds without missing a beat.</p>
        <div className="hero-cta">
          <a href="#book" className="btn btn-gold">Book Aslan</a>
          <a href="#sets" className="btn btn-ghost">Hear a Mix</a>
        </div>
      </div>
    </div>
  )
}

function GenreRibbon() {
  return (
    <div className="ribbon">
      <div className="ribbon-inner">
        {genres.map((g, i) => (
          <span key={g} style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
            {g}
            {i < genres.length - 1 && <span aria-hidden="true">◆</span>}
          </span>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <div id="about" className="sec">
      <div className="sec-inner about">
        <div className="about-media">
          <div
            className="about-photo"
            style={{ border: '2px dashed #3B8E8C', background: 'linear-gradient(160deg,#0C2A33,#0A1E26)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, textAlign: 'center', padding: 24 }}
          >
            <CameraIcon />
            <span style={{ color: '#B9D6D5', fontSize: 15 }}>[PHOTO: Portrait of Aslan behind the decks. Vertical, 4:5]</span>
          </div>
        </div>
        <div className="about-text">
          <span className="eyebrow">ABOUT</span>
          <h2 className="h2" style={{ margin: 0 }}>Many facets. One lion.</h2>
          <p>Aslan is an open format DJ. Not just EDM, not just Latin, not just dancehall or soca. Every genre is a facet, and the set is built from all of them, so the dance floor never has to wait for the right song.</p>
          <p>[YOUR STORY: where you're from, how you started, the rooms and crowds that shaped your sound. Two or three sentences.]</p>
          <div className="stats">
            <div>
              <div className="stat-num">[00]+</div>
              <div className="stat-label">Years behind the decks</div>
            </div>
            <div>
              <div className="stat-num">[00]+</div>
              <div className="stat-label">Venues and events played</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Range() {
  return (
    <div id="range" className="sec range-sec">
      <div className="sec-inner">
        <div className="range-head">
          <span className="eyebrow">THE RANGE</span>
          <h2 className="h2" style={{ margin: 0 }}>Built for every room you book.</h2>
          <p className="lede" style={{ margin: 0 }}>Whatever the slot, the energy and the crowd, the set adapts in real time.</p>
        </div>
        <div className="range-grid">
          {ranges.map((r) => (
            <div className="range-card" key={r.title}>
              <div className="range-bar" style={{ background: r.color }} />
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Sets() {
  return (
    <div id="sets" className="sec">
      <div className="sec-inner">
        <div className="sets-head">
          <span className="eyebrow">LISTEN</span>
          <h2 className="h2" style={{ margin: 0 }}>Hear the range.</h2>
        </div>
        <div className="sets-grid">
          {mixes.map((m) => (
            <div className="set-card" key={m.title}>
              <div className="set-thumb">
                <PlayIcon />
                <span>[EMBED: Mix or live set video]</span>
              </div>
              <h3>{m.title}</h3>
              <p>{m.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Gigs() {
  return (
    <div id="gigs" className="sec gigs-sec">
      <div className="sec-inner">
        <div className="gigs-head">
          <span className="eyebrow">TRACK RECORD</span>
          <h2 className="h2" style={{ margin: 0 }}>Rooms Aslan has moved.</h2>
        </div>
        <div className="logo-row">
          {[0, 1, 2, 3].map((i) => <div className="logo-slot" key={i}>[VENUE / FESTIVAL LOGO]</div>)}
        </div>
        <div className="photo-row">
          <div className="photo-slot">[PHOTO: Crowd shot]</div>
          <div className="photo-slot">[PHOTO: Aslan on stage]</div>
          <div className="photo-slot">[PHOTO: Festival or club moment]</div>
        </div>
      </div>
    </div>
  )
}

function PressKit() {
  return (
    <div id="presskit" className="sec">
      <div className="sec-inner">
        <div className="press">
          <div className="press-text">
            <h2>Promoters and buyers: grab the press kit.</h2>
            <p>Bio, logos, hi-res photos, tech rider and set lengths in one download.</p>
          </div>
          <a href="#book" className="btn btn-gold">Download Press Kit [ADD LINK]</a>
        </div>
      </div>
    </div>
  )
}

function Book() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.target
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error('request failed')
      form.reset()
      setStatus('ok')
    } catch {
      setStatus('err')
    }
  }

  return (
    <div id="book" className="sec book-sec">
      <div className="sec-inner book-grid">
        <div className="book-text">
          <span className="eyebrow">BOOKING</span>
          <h2 className="h2" style={{ margin: 0 }}>Book Aslan for your event.</h2>
          <p>Tell us about the room, the date and the crowd. Expect a reply from Aslan's team within [24-48 hours].</p>
          <div className="book-contact">
            <span>Email: {BOOKING_EMAIL}</span>
            <span>Phone: {BOOKING_PHONE}</span>
            <span>Based in: [YOUR CITY], available to travel</span>
          </div>
        </div>
        <form className="book-form" onSubmit={onSubmit}>
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999 }} />
          <input type="hidden" name="_subject" value="New booking request – DJ Aslan website" />
          <div className="row2">
            <div className="fld">
              <label htmlFor="f-name">Your name</label>
              <input id="f-name" name="name" type="text" required />
            </div>
            <div className="fld">
              <label htmlFor="f-email">Email</label>
              <input id="f-email" name="email" type="email" required />
            </div>
          </div>
          <div className="row2">
            <div className="fld">
              <label htmlFor="f-type">Event type</label>
              <select id="f-type" name="event-type">
                <option>Club night</option>
                <option>Festival</option>
                <option>Concert</option>
                <option>Opening for another DJ</option>
                <option>Other</option>
              </select>
            </div>
            <div className="fld">
              <label htmlFor="f-date">Event date</label>
              <input id="f-date" name="date" type="date" />
            </div>
          </div>
          <div className="fld full">
            <label htmlFor="f-venue">Venue and city</label>
            <input id="f-venue" name="venue" type="text" />
          </div>
          <div className="fld full">
            <label htmlFor="f-msg">Tell us about the crowd and vibe</label>
            <textarea id="f-msg" name="message" rows="5" />
          </div>
          <button className="btn btn-gold" type="submit" disabled={status === 'sending'} style={{ alignSelf: 'flex-start' }}>
            {status === 'sending' ? 'Sending…' : 'Send Booking Request'}
          </button>
          {status === 'ok' && <p className="form-msg ok" role="status">Thank you. We'll be in touch soon.</p>}
          {status === 'err' && <p className="form-msg err" role="alert">Something went wrong. Please try again or email {BOOKING_EMAIL}.</p>}
        </form>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <span className="footer-logo protected-bg" role="img" aria-label="" aria-hidden="true" style={{ backgroundImage: 'url(/images/logo.png)' }} />
      <span className="footer-word">ASLAN</span>
      <div className="footer-links">
        <a href="#">Instagram [ADD LINK]</a>
        <a href="#">SoundCloud [ADD LINK]</a>
        <a href="#">YouTube [ADD LINK]</a>
        <a href="#">TikTok [ADD LINK]</a>
      </div>
      <span className="footer-copy">© {new Date().getFullYear()} DJ Aslan. All rights reserved.</span>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    const blockContextMenu = (e) => e.preventDefault()
    const blockDrag = (e) => e.preventDefault()
    const blockKeys = (e) => {
      const k = e.key.toLowerCase()
      if (k === 'printscreen') return
      if ((e.ctrlKey || e.metaKey) && ['s', 'u', 'p'].includes(k)) e.preventDefault()
      if (k === 'f12') e.preventDefault()
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c'].includes(k)) e.preventDefault()
    }
    document.addEventListener('contextmenu', blockContextMenu)
    document.addEventListener('dragstart', blockDrag)
    document.addEventListener('keydown', blockKeys)
    return () => {
      document.removeEventListener('contextmenu', blockContextMenu)
      document.removeEventListener('dragstart', blockDrag)
      document.removeEventListener('keydown', blockKeys)
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <GenreRibbon />
        <About />
        <Range />
        <Sets />
        <Gigs />
        <PressKit />
        <Book />
      </main>
      <Footer />
    </>
  )
}
