import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Letter from "./Letter";
import { setCursorText, setCursorVariant } from "../redux/cursor-slice";
import { useAppSelector, useAppDispatch } from "../redux/redux-hooks";

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
  const dispatch = useAppDispatch();

  const projectEnter = () => {
    dispatch(setCursorText("Take Me"));
    dispatch(setCursorVariant("take"));
  };
  const leave = () => {
    dispatch(setCursorText(""));
    dispatch(setCursorVariant("default"));
  };
  return (
    <motion.section
      variants={banner}
      animate="animate"
      initial="initial"
      data-theme="light"
      className="greeter-container theme-container"
      data-scroll-section
    >
      <ul className="nav-title">
        <motion.li variants={appear} animate="animate" initial="initial">
          <Link href="#project">
            <a
              href="#project"
              data-scroll-to
              onMouseEnter={projectEnter}
              onMouseLeave={leave}
            >
              Project.
            </a>
          </Link>
        </motion.li>
        <motion.li variants={appear} animate="animate" initial="initial">
          <Link href="#about">
            <a
              href="#about"
              data-scroll-to
              onMouseEnter={projectEnter}
              onMouseLeave={leave}
            >
              About.
            </a>
          </Link>
        </motion.li>

        <motion.li
          className="mobile-nav"
          variants={appear}
          animate="animate"
          initial="initial"
        >
          <Link href="#contact">
            <a
              href="#contact"
              data-scroll-to
              onMouseEnter={projectEnter}
              onMouseLeave={leave}
            >
              Contact.
            </a>
          </Link>
        </motion.li>
      </ul>

      <div className="greeter">
        <h1 className="greeter-title">
          <span className="row">
            <Letter title="Websites & web" />
          </span>
          <span className="row">
            <Letter title="apps that cater" />
          </span>
          <span className="row">
            <Letter title="an interactive and appealing digital experience." />
          </span>
        </h1>
      </div>
    </motion.section>
  );
};

export default Greeter;
