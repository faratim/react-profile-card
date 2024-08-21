import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skills={skills}/>
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="avatar.jpg" alt="avatar-image"/>
    </div>
  )
}

function Intro() {
  return (
    <div>
      <h1>Tim Fara</h1>
      <span>Full-stack web developer at INSP. Father of 3. When not coding, I like to research whatever is interesting to me, play board games, or be in the sun.</span>
    </div>
  )
}

function SkillList({ skills }) {

  return (
    <div className="skill-list">
      {skills.map(skill => <Skill skill={skill.skill} color={skill.color} level={skill.level} key={skill.skill} />)}
    </div>
  )
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={ {backgroundColor: color} }>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);



/* <div className="skill-list">
      <Skill skill='PHP 💪' backgroundColor='blue' fontColor='white'/>
      <Skill skill='JavaScript 💪' backgroundColor='purple' fontColor='white'/>
      <Skill skill='SQL 👍' backgroundColor='gray' fontColor='white'/>
      <Skill skill='Family 💪' backgroundColor='lightgreen' fontColor='black'/>
      <Skill skill='Pizza Eating 🍕' backgroundColor='teal' fontColor='white'/>
    </div> */