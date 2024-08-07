import Image from "next/image";
import { useState } from "react";
import SvgComponent from "./SvgComponent";

import Language from "./Language";
import Render from "./Render";

import { motion } from "framer-motion";
import { setCursorText, setCursorVariant, setGif } from "../redux/cursor-slice";
import { useAppDispatch } from "../redux/redux-hooks";
import SkillItem from "./SkillItem";

import { Hobby, myHobby } from "../utils/data";
import { appear, banner, letterAni } from "../utils/variants";

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
  const IntroHover = () => {
    dispatch(setCursorVariant("gif"));
    dispatch(setGif("/static/giphy.gif"));
  };
  const IntroLeave = () => {
    dispatch(setGif(null));
    dispatch(setCursorVariant("default"));
  };

  return (
    <section
      className="intro-container theme-container"
      data-scroll-section
      id="about"
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
            <Image
              onMouseEnter={IntroHover}
              onMouseLeave={IntroLeave}
              src="/static/BeachFront.jpeg"
              className="intro-img-content"
              layout="fill"
              alt="portrait"
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
              <li>Currently listening to nothing</li>
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
              style={{
                color:
                  hobby.state === 0
                    ? "var( --render-button-sel)"
                    : "var( --render-button)",
              }}
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
              style={{
                color:
                  hobby.state === 1
                    ? "var( --render-button-sel)"
                    : "var( --render-button)",
              }}
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
              style={{
                color:
                  hobby.state === 2
                    ? "var( --render-button-sel)"
                    : "var( --render-button)",
              }}
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
            <SkillItem title="React" source="/static/reactLogo.png" />
            <SkillItem title="html & css," source="/static/html.png" />
            <SkillItem title="Python" source="/static/python.png" />
            <SkillItem title="JavaScript" source="/static/javascript.png" />
            <SkillItem title="Django" source="/static/django.png" />
            <SkillItem title="Tailwind" source="/static/tailwind.png" />
            <SkillItem title="NextJs" source="/static/nextLogo.png" />
            <SkillItem title="TypeScript" source="/static/typescript.png" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
