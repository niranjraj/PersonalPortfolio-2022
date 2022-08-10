import Image from "next/image";
import { motion } from "framer-motion";
import Letter from "./Letter";
import React from "react";

import Link from "next/link";
import { setCursorText, setCursorVariant } from "../redux/cursor-slice";
import { useAppDispatch } from "../redux/redux-hooks";

import { banner, letterAni } from "../utils/variants";
import { projectItems } from "../utils/data";

const Project = () => {
  const dispatch = useAppDispatch();

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
      id="project"
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
                          alt={project.title}
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
