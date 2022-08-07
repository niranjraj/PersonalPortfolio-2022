import React, { MutableRefObject, useEffect, useState } from "react";
import Image from "next/image";
import SvgComponent from "./SvgComponent";

import Language from "./Language";
import Render from "./Render";

import SkillItem from "./SkillItem";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { AnimatePresence, motion } from "framer-motion";
import {
  setCursorText,
  setCursorVariant,
  setTheme,
} from "../redux/cursor-slice";
import { useAppSelector, useAppDispatch } from "../redux/redux-hooks";
import { Vector3 } from "@react-three/fiber";

//variants
const banner = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const appear = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.77, 0, 0.175, 1],
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { ease: [0.77, 0, 0.175, 1], duration: 0.8 },
  },
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

type Hobby = {
  state: number;
  position?: Vector3;
  title: string;
  des: string;
};
const myHobby = [
  {
    state: 0,
    position: [10, 0, 18] as Vector3,
    title: "Go Red Devils",
    des: `I'm a huge Manchester United fan. I spent most of my time
  watching the game at 3am. Downside of being an Asian football
  fan.`,
  },
  {
    state: 1,
    title: "PC Master Race",
    des: `Gaming has always been my interest as a child, It is also what led me to love technology. FPS games are my favorite some them are Valorant, Apex, CS 1.6, I'm also down to play other games as well.`,
  },
  {
    state: 2,

    title: "Playlist On the Way",
    des: `Music is my haven, The headphones come on, and everything else in the world goes silent. Linkin Park     and Daft Punk were my favorites, right now The Weekend is my go-to. I'm not restricted by a particular genre of music. `,
  },
];

const Intro = () => {
  const [hobby, setHobby] = useState<Hobby>(myHobby[0]);
  const dispatch = useAppDispatch();

  const buttonEnter = () => {
    dispatch(setCursorText("View"));
    dispatch(setCursorVariant("click"));
  };
  const leave = () => {
    dispatch(setCursorText(""));
    dispatch(setCursorVariant("default"));
  };

  return (
    <section
      className="intro-container theme-container"
      data-scroll-section
      data-theme="dark"
    >
      <div className="about_intro">
        <motion.div
          variants={banner}
          whileInView="animate"
          viewport={{ once: true }}
          initial="initial"
          className="intro-subtitle"
        >
          <span className="row-letter-ani">
            <motion.span className="letter-ani" variants={letterAni}>
              About.
            </motion.span>
          </span>
        </motion.div>
        <motion.h1
          className="header-intro section-header-title"
          variants={banner}
          whileInView="animate"
          viewport={{ once: true }}
          initial="initial"
        >
          <motion.span variants={letterAni} className="letter-ani">
            Hello
          </motion.span>{" "}
          <motion.span variants={letterAni} className="letter-ani">
            there!
          </motion.span>
        </motion.h1>
        <div className="intro-text">
          <motion.p
            className="intro-text-p"
            variants={appear}
            whileInView="animate"
            viewport={{ once: true }}
            initial="initial"
          >
            <span className="row top-row">
              <span className="bold"> {`Hi,I'm Niranj Rajesh`} </span>a
              passionate creative frontend developer! I love to create new and
              awesome features, Optimized to perform across all devices and
              provide a solid experience.
            </span>

            <span className="row">
              Each project is an opportuinity to learn new concepts across
              multiple domains including arts, maths and physics. I like to
              Explore all.
            </span>
            <span className="row">
              It is a pretty typical description but what excites me the most
              about web developing is all the different animations and
              interactions that I can bring to a website.Fueled by Monster
              energy drink, I provide unique and quality Web experience.
            </span>
          </motion.p>
          <div className="intro-image">
            <Image
              src="/static/beachfront.jpeg"
              className="intro-img-content"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="character-section about-section-start">
        <h2 className="about-section-title">
          <SvgComponent width={40} height={40} />
          <motion.span
            className="about-section-title-content"
            variants={banner}
            whileInView="animate"
            viewport={{ once: true }}
            initial="initial"
          >
            <motion.span variants={letterAni} className="letter-ani">
              Character
            </motion.span>
          </motion.span>
        </h2>
        <div className="character-info section-content-space">
          <div className="about-tags-wrapper">
            <motion.ul
              variants={appear}
              whileInView="animate"
              viewport={{ once: true }}
              className="about-tags"
              initial="initial"
            >
              <li>Hardworking and genuine</li>
              <li>Living in India</li>
              <li>Night Owl</li>
              <li>Currently listening to Nothing</li>
            </motion.ul>
            <Language />
          </div>
          <div className="about-desc">
            <motion.p
              variants={appear}
              whileInView="animate"
              viewport={{ once: true }}
              initial="initial"
            >
              About myself you ask? I am a pretty chill person (I guess?)
              {` I usually work alone, but I'm down for collabs. Something that`}
              drives me is learning new technology. I love the web, spend most
              {` of my time on it. I'm highly motivated to grow as a developer.`}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="hobbies-section about-section-start">
        <h2 className="about-section-title">
          <SvgComponent width={40} height={40} />
          <motion.span
            className="about-section-title-content"
            variants={banner}
            whileInView="animate"
            viewport={{ once: true }}
            initial="initial"
          >
            <motion.span variants={letterAni} className="letter-ani">
              Hobbies
            </motion.span>
          </motion.span>
        </h2>
        <div className="section-content-space">
          <div className="button-section">
            <motion.button
              variants={appear}
              whileInView="animate"
              viewport={{ once: true }}
              initial="initial"
              onMouseEnter={hobby.state !== 0 ? buttonEnter : leave}
              onMouseLeave={leave}
              style={{ color: hobby.state === 0 ? "#E0D8CD" : "#b4ada2" }}
              onClick={() => {
                setHobby(myHobby[0]);
              }}
            >
              Football
            </motion.button>
            <motion.button
              variants={appear}
              whileInView="animate"
              onMouseEnter={hobby.state !== 1 ? buttonEnter : leave}
              onMouseLeave={leave}
              viewport={{ once: true }}
              initial="initial"
              style={{ color: hobby.state === 1 ? "#E0D8CD" : "#b4ada2" }}
              onClick={() => {
                setHobby(myHobby[1]);
              }}
            >
              Games
            </motion.button>
            <motion.button
              variants={appear}
              whileInView="animate"
              onMouseEnter={hobby.state !== 2 ? buttonEnter : leave}
              onMouseLeave={leave}
              viewport={{ once: true }}
              initial="initial"
              style={{ color: hobby.state === 2 ? "#E0D8CD" : "#b4ada2" }}
              onClick={() => {
                setHobby(myHobby[2]);
              }}
            >
              Music
            </motion.button>
          </div>

          <div className="wrapper-render">
            <Render hobby={hobby} />
          </div>
        </div>
      </div>
      <div className="skills-section ">
        <h2 className="about-section-title skills-space">
          <SvgComponent width={40} height={40} />
          <motion.span
            className="about-section-title-content"
            variants={banner}
            whileInView="animate"
            viewport={{ once: true }}
            initial="initial"
          >
            <motion.span variants={letterAni} className="letter-ani">
              Skills
            </motion.span>
          </motion.span>
        </h2>
        <div className="skills">
          <ul>
            <SkillItem title="React" />
            <SkillItem title="html & css," />
            <SkillItem title="Python" />
            <SkillItem title="JavaScript" />
            <SkillItem title="Django" />
            <SkillItem title="Tailwind" />
            <SkillItem title="NextJs" />
            <SkillItem title="TypeScript" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
