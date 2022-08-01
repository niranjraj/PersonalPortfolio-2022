import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Letter from "./Letter";

//variants
const banner = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};
const letter = {
  initial: {
    y: 300,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.77, 0, 0.175, 1],
      duration: 1,
    },
  },
};
const appear = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.77, 0, 0.175, 1],
      duration: 0.8,
    },
  },
};

const Greeter = () => {
  useEffect(() => {}, []);
  return (
    <motion.section
      variants={banner}
      animate="animate"
      initial="initial"
      className="greeter-container"
      data-scroll-section
    >
      <ul className="nav-title">
        <motion.li variants={appear} animate="animate" initial="initial">
          <Link href="/">
            <a>Home.</a>
          </Link>
        </motion.li>
        <motion.li variants={appear} animate="animate" initial="initial">
          <Link href="/">
            <a>About.</a>
          </Link>
        </motion.li>
        <motion.li variants={appear} animate="animate" initial="initial">
          <Link href="/">
            <a>Contact.</a>
          </Link>
        </motion.li>
      </ul>
      <div className="greeter">
        <div className="greeter-subtitle"></div>
        <h1 className="greeter-title">
          <span className="row">
            <Letter title="Websites & web" />
          </span>
          <span className="row">
            <Letter title="apps that merge art" />
          </span>
          <span className="row">
            <Letter title="direction, digitial interactions and" />
          </span>
          <span className="row">
            <Letter title="and creative startegy." />
          </span>
          <span className="row">
            <Letter title="Providing an interactive digital experience." />
          </span>
        </h1>
      </div>
    </motion.section>
  );
};

export default Greeter;
