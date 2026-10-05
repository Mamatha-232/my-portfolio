import { useEffect, useState } from 'react'
import { profile, roles, roleLabel } from '../data'
import Notebook from './Notebook'

export default function Hero() {
  const [i, setI] = useState(0)
  const [fading, setFading] = useState(false)

  // Every 2.4s: fade out, swap the word, fade in
  useEffect(() => {
    const t = setInterval(() => {
      setFading(true)
      setTimeout(() => { setI((x) => (x + 1) % roles.length); setFading(false) }, 300)
    }, 2400)
    return () => clearInterval(t)
  }, [])

  return (
    <header className="hero" id="home">
      <p className="hey">Hey there <span className="wave" role="img" aria-label="waving hand">👋</span></p>
      <h1><span className="im">I'm</span> {profile.displayName}</h1>
      <p className="role"><span className="label">{roleLabel}</span><span className={'pill' + (fading ? ' out' : '')}>{roles[i]}</span></p>
      <Notebook />
    </header>
  )
}
