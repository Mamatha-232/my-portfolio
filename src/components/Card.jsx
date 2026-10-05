// Project box: short text, tech tags, fills with gold on hover. The whole box is the link.
export default function Card({ href, title, short, tech }) {
  return (
    <a className="card" href={href} target="_blank" rel="noreferrer">
      <h3>{title}</h3>
      <p>{short}</p>
      <div className="tags">{tech.map((t) => <span key={t}>{t}</span>)}</div>
      <span className="go">View on GitHub ↗</span>
    </a>
  )
}
