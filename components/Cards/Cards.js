import React from "react";
import SingleCard from "./SingleCard";
import design1 from "../../public/design1.png";
import design2 from "../../public/design2.png";
import design3 from "../../public/design3.png";

function Cards() {
  const data = [
    {
      title: "User Interface and User Experience",
      description:
        "Good understanding of design principles, topography, color contrast etc. Familiar with Figma and Photoshop. Always trying to code a pixel-perfect design",
      image: design1,
    },
    {
      title: "React JS ecosystem",
      description:
        "I enjoy building SPA and websites with React Js and its framework Next JS. I also have working experience with React Native ",
      image: design2,
    },
    {
      title: "Backend and databases",
      description:
        "Work experience developing applications with Node JS (Express JS and NestJS), Prisma ORM, Postgresql, MongoDB",
      image: design3,
    },
  ];

  return (
    <div style={{ paddingBottom: "3rem" }}>
      <h1 className="title" id="about" name="about">
        What to expect from me
      </h1>
      <div className="cards">
        {data.map((data, index) => (
          <SingleCard
            image={data.image}
            description={data.description}
            title={data.title}
            key={data.title}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
