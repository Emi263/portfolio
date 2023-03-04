import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
function SkillCard({ level, icon, text, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="skill-card"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, x: 0, y: 0 },
        hidden: { opacity: 0, x: -50, y: -50 },
      }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
        delay: index * 0.1,
      }}
    >
      <h1 className="skillH1">
        #{text} <i className={icon}></i>
      </h1>
    </motion.div>
  );
}

export default SkillCard;
