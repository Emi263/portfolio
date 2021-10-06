import React, { useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function SingleCard({ image, title, description, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="singleCard"
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay: index * 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <div className="image">
        <Image src={image} width={1184} height={858} layout="intrinsic" />
      </div>
      <div className="card-title">{title}</div>
      <p>{description}</p>
    </motion.div>
  );
}

export default SingleCard;
