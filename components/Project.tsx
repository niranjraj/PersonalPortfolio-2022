import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Letter from "./Letter";
import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useContext,
  useEffect,
} from "react";

import proj1 from "../public/static/invoicelyPhone.png";
import proj2 from "../public/static/supplyco4.png";
import proj3 from "../public/static/machinelearning.png";
import proj5 from "../public/static/arch1.png";
import proj4 from "../public/static/itiha.png";
import Link from "next/link";
import {
  setCursorText,
  setCursorVariant,
  setTheme,
} from "../redux/cursor-slice";
import { useAppSelector, useAppDispatch } from "../redux/redux-hooks";
import { useLocomotiveScroll } from "react-locomotive-scroll";

type projectItem = {
  image: StaticImageData;
  title: string;
  subtitle: string;
  type: string;
  speed: string;
  width: string;
  height: string;
  link: string;
};
const letterAni = {
  initial: {
    y: 300,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.77, 0, 0.175, 1],
      duration: 0.6,
    },
  },
};

const banner = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const projectItems: projectItem[] = [
  {
    image: proj1,
    title: "Invoicely",
    subtitle: "a professional web app for Invoices",
    type: "logic, implementation, webapp, ux",
    speed: "-2",
    width: "600",
    height: "600",
    link: "https://github.com/niranjraj/invoice-app",
  },
  {
    image: proj2,
    title: "SupplycoKerala",
    subtitle: "an online platform for government supply",
    type: "design, logic, implementation, website, ui/ux",
    speed: "-2",
    width: "600",
    height: "600",
    link: "https://github.com/niranjraj/invoice-app",
  },
  {
    image: proj3,
    title: "Diabetes Prediction",
    subtitle: "diagnosis of diabetes through machine learning",
    type: "logic, implementation, report",
    speed: "-2",
    width: "800",
    height: "800",
    link: "https://github.com/niranjraj/invoice-app",
  },
  {
    image: proj4,
    title: "Itiha",
    subtitle: "configuration of arch.",
    type: "logic, implementation, website",
    speed: "-2",
    width: "800",
    height: "800",
    link: "https://github.com/niranjraj/invoice-app",
  },
  {
    image: proj5,
    title: "Arch",
    subtitle: "configuration of arch.",
    type: "design, experiment, config",
    speed: "-2",
    width: "800",
    height: "800",
    link: "https://github.com/niranjraj/invoice-app",
  },
];

const Project = () => {
  const dispatch = useAppDispatch();
  const { scroll } = useLocomotiveScroll();

  const projectEnter = () => {
    dispatch(setCursorText("View"));
    dispatch(setCursorVariant("project"));
  };
  const leave = () => {
    dispatch(setCursorText(""));
    dispatch(setCursorVariant("default"));
  };
  return (
    <section
      className="project-container theme-container"
      data-scroll-section
      data-theme="light"
    >
      <div className="projects">
        <motion.div
          variants={banner}
          whileInView="animate"
          viewport={{ once: true }}
          initial="initial"
          className="intro-subtitle"
        >
          <span className="row-letter-ani">
            <motion.span className="letter-ani" variants={letterAni}>
              Projects.
            </motion.span>
          </span>
        </motion.div>
        <motion.h1
          className="project-header section-header-title"
          variants={banner}
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          initial="initial"
        >
          <span className="row-letter-ani">
            <Letter title="A collection of my" />
          </span>
          <span className="row-letter-ani">
            <Letter title="latest works" />
          </span>
        </motion.h1>
        <ul className="projects-layout">
          {projectItems.map((project, index) => {
            return (
              <li
                className={`project-item-wrapper project-item-wrapper-${index}`}
                key={index}
              >
                <motion.div
                  whileInView={{
                    height: 0,
                    transition: {
                      delay: 0.1,
                      ease: [0.215, 0.61, 0.355, 1],
                      duration: 0.8,
                    },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="hide-container"
                ></motion.div>
                <Link href={project.link}>
                  <a
                    className="project-item-container"
                    onMouseOver={projectEnter}
                    onMouseOut={leave}
                  >
                    <div className="project-item-img-wrapper">
                      <div className={`item-img item-img${index}`}>
                        <Image
                          className="proj-img"
                          data-scroll="true"
                          data-scroll-speed="-1.2"
                          data-scroll-offset="10"
                          src={project.image}
                          height={project.height}
                          width={project.width}
                        />
                      </div>
                    </div>
                  </a>
                </Link>

                <div className="project-title-wrapper">
                  <div className="project-title">
                    {`0${index + 1}. `}
                    {project.title}
                  </div>
                  <div className="project-type">{project.type}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Project;
