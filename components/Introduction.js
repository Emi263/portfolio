import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Gif from "../public/ungif.gif";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Introduction() {
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
      <div className="introduction" id="home">
        <div className="firstSection">
          <div className="absSvg secondSvg">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#1A1D88"
                d="M27.8,-51.8C35.4,-43.7,40.7,-35.1,51.8,-26.4C62.9,-17.7,79.8,-8.8,85,3C90.2,14.8,83.5,29.6,74.2,41.4C64.9,53.2,52.9,61.9,40,61.3C27.2,60.8,13.6,50.8,2.7,46.2C-8.3,41.5,-16.5,42.2,-25.3,40.5C-34.1,38.8,-43.4,34.6,-53.1,27.5C-62.7,20.3,-72.6,10.2,-70.5,1.2C-68.4,-7.8,-54.4,-15.5,-48.5,-29.1C-42.5,-42.6,-44.7,-62,-38,-70.6C-31.3,-79.2,-15.6,-77.1,-2.8,-72.3C10.1,-67.5,20.1,-59.9,27.8,-51.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <motion.div
            className="title"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          >
            Emrulla Ramilli
          </motion.div>
          <div className="picture">
            <motion.p
              className="name"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
            >
              Hello, my name is Emrulla. I am a Full Stack Developer specialized in FrontEnd!
  
            </motion.p>
            <motion.picture
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <Image
                className="gif-image"
                src={Gif}
                height={500}
                width={500}
                layout="intrinsic"
                alt="A guy programming"
                priority={true}
              />
            </motion.picture>
          </div>
        </div>
        <div className="firstSection">
          <div className="absSvg">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#1A1D88"
                d="M43,-74.6C56.8,-66.5,69.8,-57.1,78.6,-44.5C87.5,-31.8,92.2,-15.9,92.1,-0.1C92,15.8,87,31.6,79,45.7C71,59.8,59.9,72.2,46.2,79.5C32.6,86.8,16.3,89.1,0.2,88.7C-15.9,88.3,-31.7,85.4,-44.8,77.7C-57.8,70,-68,57.6,-76.5,43.8C-85,30.1,-91.7,15.1,-92.9,-0.7C-94.1,-16.5,-89.8,-32.9,-80.8,-45.7C-71.8,-58.6,-58.2,-67.8,-43.9,-75.6C-29.7,-83.4,-14.8,-89.8,-0.1,-89.6C14.6,-89.4,29.2,-82.6,43,-74.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <motion.div
            ref={ref}
            className="title"
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -500 },
            }}
          >
            What I do
          </motion.div>
          <motion.p
            ref={ref}
            className="second"
            animate={controls}
            initial="hidden"
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -10 },
            }}
          >
            I enjoy creating websites and Single Page Applications with React JS
            ecosystem technologies! I pay attention to pixels and responsiveness
            of a website.
          </motion.p>
          <div className="topsvg"></div>
        </div>

        <section>
          <motion.div>
            <h1>DRY.</h1>
            <h1>KISS.</h1>
            <h1>SOLID.</h1>
          </motion.div>
          <a href="#contact">
            Contact me <i className="fas fa-arrow-right"></i>
          </a>
        </section>
      </div>
    </>
  );
}

export default Introduction;
