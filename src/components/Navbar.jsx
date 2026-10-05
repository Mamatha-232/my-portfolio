import { useEffect, useState } from 'react'

const links = [['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['experience', 'Experience'], ['certificates', 'Certificates'], ['contact', 'Contact']]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('theme') || '' } catch { return '' } })

  // Dark/light: we set data-theme on <html>, CSS reads it. Empty = follow the system.
  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme
    if (theme) { try { localStorage.setItem('theme', theme) } catch {} }
  }, [theme])

  const toggle = () => {
    const dark = theme ? theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(dark ? 'light' : 'dark')
  }

  // Highlight the pill of the section currently in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    links.forEach(([id]) => io.observe(document.getElementById(id)))
    return () => io.disconnect()
  }, [])

  return (
    <nav>
      <div className="pills">
        {links.map(([id, label]) => (
          <a key={id} href={'#' + id} className={active === id ? 'on' : ''}>{label}</a>
        ))}
      </div>
      <a className="btn nav-btn" href="/Panday_Mamatha_Resume.pdf" download>Resume</a>
      <button className="theme" onClick={toggle} aria-label="Toggle dark and light mode">◐</button>
    </nav>
  )
}
