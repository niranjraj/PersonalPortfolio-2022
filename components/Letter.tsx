import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
};

const letterAni = {
  initial: {
    y: 300,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.77, 0, 0.175, 1],
      duration: 0.8,
    },
  },
};

const Letter = ({ title }: Props) => {
  return (
    <>
      {title.split(" ").map((letter, index) => {
        return (
          <motion.span
            key={`${title}-${letter}-${index}`}
            className="letter-ani"
            variants={letterAni}
          >
            {letter}
            <span>&nbsp;</span>
          </motion.span>
        );
      })}
    </>
  );
};

export default Letter;
