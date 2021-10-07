import React from "react";
import Image from "next/image";

function ProjectCard({ image, title, description, github, demo }) {
  return (
    <div>
      <div className="project" title={description}>
        <picture>
          <Image
            priority={true}
            src={image}
            width={400}
            height={400}
            layout="responsive"
            alt={title}
          />
        </picture>
        <h1>{title}</h1>

        <div className="buttons">
          {" "}
          <a href={github}>
            Github Repo <i className="fab fa-github"></i>
          </a>
          <a href={demo}>
            Live Demo <i className="fab fa-chrome"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
