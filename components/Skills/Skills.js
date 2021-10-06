import React from "react";
import SkillCard from "./SkillCard";

function Skills() {
  const data = [
    {
      text: "HTML5",
      icon: "fas fa-code",
      level: "Advanced",
    },
    {
      text: "CSS3",
      icon: "fab fa-css3",
      level: "Advanced",
    },
    {
      text: "Javascript",
      icon: "fab fa-js-square",
      level: "Intermediate",
    },
    {
      text: "React JS",
      icon: "fab fa-react",
      level: "Intermediate",
    },
    {
      text: "Next JS",
      icon: "fas fa-meh-rolling-eyes",
      level: "Intermediate",
    },
    {
      text: "SCSS",
      icon: "fab fa-sass",
      level: "Advanced",
    },
    {
      text: "Typescript",
      icon: "fas fa-keyboard",
      level: "Intermediate",
    },
    {
      text: "Firebase",
      icon: "fas fa-fire-alt",
      level: "Intermediate",
    },
    {
      text: "Styled Components",
      icon: "fas fa-pencil-alt",
      level: "Advanced",
    },
    {
      text: "Material UI",
      icon: "fab fa-medium-m",
      level: "Intermediate",
    },
    {
      text: "Tailwind CSS",
      icon: "fas fa-meh-rolling-eyes",
      level: "Advanced",
    },
    {
      text: "Contentful",
      icon: "fas fa-feather-alt",
      level: "Intermediate",
    },
  ];

  return (
    <div className="skills">
      <div className="title">My Skills</div>
      <div className="skills-container">
        {data.map((data) => (
          <SkillCard
            key={data.text}
            text={data.text}
            icon={data.icon}
            level={data.level}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
