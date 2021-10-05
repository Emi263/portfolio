import React from "react";
import Image from "next/image";
import Head from "next/head";
function Project({ title, image, github, demo, description }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="project">
        <picture>
          <Image
            src={image}
            width={400}
            height={400}
            layout="responsive"
            alt={title}
          />
        </picture>
        <h1>{title}</h1>
        <h4>{description}</h4>
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
    </>
  );
}

export default Project;
