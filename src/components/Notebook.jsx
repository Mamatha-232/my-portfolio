import { useRef, useState } from 'react'
import { profile, projects, experience, certificates } from '../data'

// Short teasers built from data.js, so they always match the full sections below
const cells = [
  { code: 'about', out: () => <p>{profile.tagline}</p> },
  { code: 'skills', out: () => <div className="chips">{['Java', 'React.js', 'Spring Boot', 'MongoDB', 'ML fundamentals'].map((s) => <span key={s}>{s}</span>)}</div> },
  { code: 'projects', out: () => <div className="mono">{'[' + projects.map((p) => "'" + p.title + "'").join(',\n ') + ']'}</div> },
  { code: 'experience', out: () => <div className="mono">{'[' + experience.map((e) => "'" + e.role + ", " + e.org + "'").join(',\n ') + ']'}</div> },
  { code: 'certificates', out: () => <div className="mono">{certificates.length + ' certificates'}</div> },
  { code: 'contact', out: () => <div className="links"><a href={'mailto:' + profile.email}>Email</a><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a></div> },
]

export default function Notebook() {
  // num: null = not run, '*' = running, number = In [n]
  const [state, setState] = useState(cells.map((_, i) => ({ num: i < 2 ? i + 1 : null, shown: i < 2 })))
  const counter = useRef(2)   // First two cells are already visible on page load

  const run = (i) => {
    counter.current += 1
    const n = counter.current
    setState((s) => s.map((c, k) => (k === i ? { num: n, shown: true } : c)))
  }
  const runAll = () => { for (let i = 0; i < cells.length; i++) run(i) }

  return (
    <div className="nb">
      <div className="bar">
        <b>portfolio.ipynb</b>
        <span className="k"><i />Python 3 | Idle</span>
        <span className="sp" />
        <button className="runall" onClick={runAll}>Run all</button>
      </div>
      {cells.map((c, i) => (
        <div className="cell" key={c.code}>
          <div className="pr">In [{state[i].num ?? ' '}]:</div>
          <div className="box">
            <div className="src"><pre><span className="fn">{c.code}</span>()</pre><button className="run" onClick={() => run(i)}>Run</button></div>
            {state[i].shown && <div className="out show">{c.out()}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}
