import { useEffect, useRef, useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'
import { profile } from '../data'

// A round bitmoji button in the corner. Click it and a small contact card pops up above it.
export default function FloatingContact() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)   // the whole bubble + card; clicks inside it should NOT close the card

  // Esc closes the card (keyboard users expect this)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Clicking or tapping anywhere outside closes it. Only listens while the card is open.
  useEffect(() => {
    if (!open) return
    const onOutside = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onOutside)
    document.addEventListener('touchstart', onOutside)
    return () => { document.removeEventListener('mousedown', onOutside); document.removeEventListener('touchstart', onOutside) }
  }, [open])

  return (
    <div className="fab" ref={ref}>
      {open && (
        <div className="panel" role="dialog" aria-label="Contact card">
          <img src="/avatar.png" alt="" width="84" height="84" />
          <p className="me-name">{profile.displayName}</p>
          <p className="tag">Let's talk!</p>
          <ul className="rows">
            <li><a href={'mailto:' + profile.email}><span className="ic"><FaEnvelope /></span><span>Email</span></a></li>
            <li><a href={profile.github}><span className="ic"><FaGithub /></span><span>GitHub</span></a></li>
            <li><a href={profile.linkedin}><span className="ic"><FaLinkedin /></span><span>LinkedIn</span></a></li>
            <li><a href="/Panday_Mamatha_Resume.pdf" download><span className="ic"><FaFileDownload /></span><span>Resume</span></a></li>
          </ul>
          <a className="btn" href="#contact" onClick={() => setOpen(false)}>Send a message</a>
        </div>
      )}
      <button className="bubble" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close contact card' : 'Open contact card'}>
        <img src="/avatar.png" alt="" />
      </button>
      {!open && <span className="hi">Say hi 👋</span>}
    </div>
  )
}
