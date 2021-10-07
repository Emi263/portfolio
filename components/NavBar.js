import React, { useState, useEffect } from "react";
import Head from "next/head";

import { motion, useAnimation } from "framer-motion";

function Hamburger({ active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={active ? "hamburger active" : "hamburger notActive"}
    >
      <span></span>
      <span></span>
    </div>
  );
}

function NavBar() {
  const [active, setActive] = useState(false); //navbar state
  const menu = [
    {
      text: "About",
      href: "#about",
    },
    {
      text: "Works",
      href: "#portfolio",
    },

    {
      text: "Skills",
      href: "#skills",
    },

    {
      text: "Contact",
      href: "#contact",
    },
  ];

  const handleMenuClick = () => {
    setActive(false);
  };

  useEffect(() => {
    if (active) {
      document.querySelector("body").style.height = "100vh";
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.height = "auto";
      document.querySelector("body").style.overflowY = "scroll";
    }
  }, [active]);
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
      <nav>
        <div className="navbar" id="nav">
          <div className="name">
            <span className="e">E</span>
            <span className="r">R</span>
            <span className="portfolio">PORTFOLIO</span>
            <span className="point">.</span>
            <span className="cv">
              <a href="https://drive.google.com/file/d/1ifCdSgHwUZ5t3dhIJ_RwoyiSv79lUaR_/view?usp=sharing">
                CV
                <i
                  style={{ marginLeft: "8px" }}
                  className="fas fa-cloud-download-alt"
                ></i>
              </a>{" "}
            </span>
          </div>
          <Hamburger active={active} onClick={() => setActive(!active)} />
        </div>

        <ul className={active ? "menu active" : "menu"}>
          <div className="blank">
            <i className="fab fa-html5 blank-icon"></i>
            <i className="fab fa-css3-alt blank-icon"></i>
            <i className="fab fa-react blank-icon"></i>
            <i className="fas fa-laptop-code blank-icon"></i>
          </div>
          <div className="middle">
            <div className="contact">
              <span>
                <i className="far fa-envelope icon"></i>
                <a href="mailto:emrullaramilli@gmail.com">
                  emrullaramilli@gmail.com
                </a>
              </span>
              <span>
                <i className="fas fa-map-marker icon"></i>
                <address>Shijak, Durres</address>
              </span>
              <span>
                <i className="fas fa-phone-alt icon"></i>
                <a href="tel:+355676289932">+355676289932</a>
              </span>
            </div>
            <div className="socialmedia">
              <span>
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/emrulla-ramilli-871441201/">
                  Linkedin Profile{" "}
                </a>
              </span>
              <span>
                <i className="fab fa-instagram"></i>
                <a href="https://www.instagram.com/emi___26/">
                  Instagram Profile{" "}
                </a>
              </span>
            </div>
          </div>
          <div className="list">
            {menu.map((item, index) => (
              <motion.li
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={item.text}
                onClick={() => handleMenuClick()}
              >
                <a href={item.href}>{item.text}</a>
              </motion.li>
            ))}
            <div className="socialmedia mobile">
              <span>
                <i className="fab fa-linkedin"></i>
                <a href="#">Linkedin Profile </a>
              </span>
              <span>
                <i className="fab fa-instagram"></i>
                <a href="#">Instagram Profile </a>
              </span>
            </div>
          </div>

          <div className="design"></div>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
