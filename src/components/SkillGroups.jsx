import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPlug, FaTicketAlt } from 'react-icons/fa'
import { SiTailwindcss, SiSpringboot, SiExpress, SiMysql, SiMongodb, SiPostman } from 'react-icons/si'

// Each logo: [name, icon, colour it takes on hover]. All skills come from your resume.
// GitHub/Express use the text colour so they stay visible in dark mode.
const languages = [['Java', FaJava, '#E76F00'], ['Python', FaPython, '#3776AB'], ['JavaScript', FaJs, '#F7DF1E']]
const stack = [
  ['Frontend', [['HTML', FaHtml5, '#E34F26'], ['CSS', FaCss3Alt, '#1572B6'], ['JavaScript', FaJs, '#F7DF1E'], ['React.js', FaReact, '#61DAFB'], ['Tailwind CSS', SiTailwindcss, '#06B6D4']]],
  ['Backend', [['Spring Boot', SiSpringboot, '#6DB33F'], ['Node.js', FaNodeJs, '#5FA04E'], ['Express.js', SiExpress, 'var(--ink)'], ['REST APIs', FaPlug, '#9B8CFF']]],
  ['Database', [['MySQL', SiMysql, '#4479A1'], ['MongoDB', SiMongodb, '#47A248']]],
]
const tools = [['Git', FaGitAlt, '#F05032'], ['GitHub', FaGithub, 'var(--ink)'], ['Postman', SiPostman, '#FF6C37'], ['ServiceNow (basics)', FaTicketAlt, '#62D84E']]

// Groups without logos are just a line of text
const textGroups = [
  ['Concepts', ['Data Structures', 'Algorithms', 'OOP', 'DBMS']],
  ['AI and ML', ['Probability and Statistics', 'Linear Algebra', 'ML fundamentals']],
  ['Soft skills', ['Teamwork', 'Leadership', 'Problem solving']],
]

// Big logo, small name under it. Grey until hover.
const Logos = ({ items }) => (
  <ul className="logos">
    {items.map(([name, Icon, color]) => (
      <li key={name} style={{ '--c': color }}><Icon size={46} aria-hidden="true" /><span>{name}</span></li>
    ))}
  </ul>
)

const Group = ({ title, children }) => (
  <div className="sgroup"><h3>{title}</h3><div>{children}</div></div>
)

export default function SkillGroups() {
  return (
    <div className="skills">
      <Group title="Languages"><Logos items={languages} /></Group>
      <Group title="Stack">
        {stack.map(([label, items]) => (
          <div className="srow" key={label}><span className="slabel">{label}</span><Logos items={items} /></div>
        ))}
      </Group>
      <Group title="Tools"><Logos items={tools} /></Group>
      {textGroups.map(([title, items]) => (
        <Group key={title} title={title}><p className="stext">{items.join('  ·  ')}</p></Group>
      ))}
    </div>
  )
}
