import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
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

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill='PHP 💪' backgroundColor='blue' fontColor='white'/>
      <Skill skill='JavaScript 💪' backgroundColor='purple' fontColor='white'/>
      <Skill skill='SQL 👍' backgroundColor='gray' fontColor='white'/>
      <Skill skill='Family 💪' backgroundColor='lightgreen' fontColor='black'/>
      <Skill skill='Pizza Eating 🍕' backgroundColor='teal' fontColor='white'/>
    </div>
  )
}

function Skill(props) {
  return (
    <span className="skill" style={{backgroundColor: props.backgroundColor, color: props.fontColor}}>{props.skill}</span>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
