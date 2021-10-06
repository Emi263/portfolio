import React from "react";

function SkillCard({ level, icon, text }) {
  return (
    <div className="skill-card">
      <h1 className="skillH1">
        {text} <i className={icon}></i>
      </h1>
      <span>{level}</span>
    </div>
  );
}

export default SkillCard;
