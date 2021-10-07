import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const data = [
    {
      title: "Email",
      text: "emrullaramilli@gmail.com",
      icon: "far fa-envelope icon",
      href: "mailto:emrullaramilli@gmail.com",
    },
    {
      title: "Phone",
      text: "+355676289932",
      icon: "fas fa-phone-alt icon",
      href: "tel:+355676289932",
    },
    {
      title: "Linkedin",
      text: "Linkedin Profile",
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/in/emrulla-ramilli-871441201",
    },
    {
      title: "Address",
      text: "Shijak, Durres",
      icon: "fas fa-map-marker icon",
      href: null,
    },
  ];

  return (
    <>
      <h1 className="title" id="contact">
        Contact me
      </h1>
      <footer>
        <div className="top-icon">
          <a href="#nav">
            <i className="far fa-arrow-alt-circle-up"></i>{" "}
          </a>
          <span>Go to top</span>
        </div>
        {data.map(({ title, text, icon, href }, index) => (
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, originX: 0 },
              hidden: { opacity: 0, scale: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
              delay: index * 0.1,
            }}
            key={text}
            className="contact-card"
          >
            <h1 className="contact-title">{title}</h1>
            <div className="icon">
              <i className={icon}> </i>
              <a href={href}>{text}</a>
            </div>
          </motion.div>
        ))}
      </footer>
    </>
  );
}

export default Footer;
