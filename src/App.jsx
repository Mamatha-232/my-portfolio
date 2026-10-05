import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import SkillGroups from './components/SkillGroups'
import ContactForm from './components/ContactForm'
import FloatingContact from './components/FloatingContact'
import { profile, skills, education, projects, experience, certificates, achievements } from './data'

// Small eye icon, inline SVG so we need no icon library
const Eye = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" />
  </svg>
)

export default function App() {
  return (
    <>
      <Navbar />
      <div className="page">
        <main>
        <Hero />

        <section id="about">
          <h2>About</h2>
          <p>{profile.about}</p>
          <p className="edu-title"><b>Education:</b></p>
          <ul className="plain">
            {education.map((e) => (
              <li key={e.school}>{e.what} - {e.school} <span className="when">| {e.score}, {e.when}</span></li>
            ))}
          </ul>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <SkillGroups />
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => <Card key={p.title} href={p.repo} title={p.title} short={p.short} tech={p.tech} />)}
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.role}>
                <h3>{e.role}, {e.org}</h3>
                <p className="when">{e.meta}</p>
                <p>{e.short}</p>
                
              </li>
            ))}
          </ol>
        </section>

        <section id="certificates">
          <h2>Certificates</h2>
          <ul className="certs">
            {certificates.map((c) => (
              <li key={c.title}>
                <span><b>{c.title}</b><br /><small>{c.issuer}{c.when && ' | ' + c.when}</small></span>
                <a className="eye" href={c.link} target="_blank" rel="noreferrer" aria-label={'View certificate: ' + c.title}><Eye /> View</a>
              </li>
            ))}
          </ul>
          <h3 className="sub">Achievements</h3>
          <ul className="plain">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Have a question or an opportunity? Send me a message.</p>
          <ContactForm />
          {/* Phones hide the sidebar, so the links show here instead */}
          <div className="links small"><a href={'mailto:' + profile.email}>Email</a><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a></div>
        </section>
      </main>
      </div>
      <footer>{profile.college}</footer>
      <FloatingContact />
    </>
  )
}
