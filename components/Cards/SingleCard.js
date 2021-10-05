import React from "react";
import Image from "next/image";
function SingleCard({ image, title, description }) {
  return (
    <div className="singleCard">
      <div className="image">
        <Image src={image} width={1184} height={858} layout="intrinsic" />
      </div>
      <div className="card-title">{title}</div>
      <p>{description}</p>
    </div>
  );
}

export default SingleCard;
