import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function DesktopProject({ title, image, github, demo, description, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
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
      <motion.div
        className="project"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: -100, y: -100 },
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 120,
          delay: index * 0.4,
        }}
      >
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
      </motion.div>
    </>
  );
}

export default DesktopProject;
