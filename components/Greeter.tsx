import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Letter from "./Letter";
import { setCursorText, setCursorVariant } from "../redux/cursor-slice";
import { useAppDispatch } from "../redux/redux-hooks";
import { banner, appear } from "../utils/variants";

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
            <Letter title="art direction," />
          </span>
          <span className="row">
            <Letter title="interactive design" />
          </span>
          <span className="row">
            <Letter title="and appealing digital" />
          </span>
          <span className="row">
            <Letter title="experience." />
          </span>
        </h1>
      </div>
    </motion.section>
  );
};

export default Greeter;
