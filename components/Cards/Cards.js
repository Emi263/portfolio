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
        "I enjoy building SPA and websites with React Js and its framework Next JS. The React ecosystem provides you with many opportunities to have an innovative website",
      image: design2,
    },
    {
      title: "Backend and databases",
      description:
        "Already familiar with Firebase (Auth, Storage, Firestore) and MongoDB. Aiming to learn NodeJs (Express JS) soon",
      image: design3,
    },
  ];

  return (
    <>
      <h1 className="title">What to expect from me</h1>
      <div className="cards">
        {data.map((data) => (
          <SingleCard
            image={data.image}
            description={data.description}
            title={data.title}
            key={data.title}
          />
        ))}
      </div>
    </>
  );
}

export default Cards;
