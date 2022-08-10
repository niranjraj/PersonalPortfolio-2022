import React, { useEffect, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import Counter from "./Counter";
import { banner, letterAni } from "../utils/variants";
gsap.registerPlugin(ScrollTrigger);

const Language = () => {
  const [progressbar, setProgressbar] = useState(false);

  const { scroll } = useLocomotiveScroll();
  useEffect(() => {
    if (scroll !== null) {
      scroll.on("call", (obj: string) => {
        if ((obj as string) === "animateCounter") {
          setProgressbar(true);
        }
      });
    }
  }, [scroll]);

  return (
    <div className="about-lang">
      <motion.h2
        className="about-lang-title"
        variants={banner}
        whileInView="animate"
        viewport={{ once: true }}
        initial="initial"
      >
        <motion.span variants={letterAni} className="letter-ani">
          Languages
        </motion.span>
      </motion.h2>
      <div
        data-scroll
        data-scroll-target="#animateCounter"
        id="animateCounter"
        data-scroll-call="animateCounter"
        className="lang-item-wrapper"
      >
        <div className="lang-item">
          <Counter newPercentage={100} progressState={progressbar} />
          <div className="lang-info">
            <h3>English</h3>
            <p>Advance Level</p>
          </div>
        </div>
        <div className="lang-item">
          <Counter newPercentage={80} progressState={progressbar} />
          <div className="lang-info">
            <h3>Malayalam</h3>
            <p>Native language</p>
          </div>
        </div>
        <div className="lang-item">
          <Counter newPercentage={40} progressState={progressbar} />
          <div className="lang-info">
            <h3>Hindi</h3>
            <p>Elementary Level</p>
          </div>
        </div>
        <div className="lang-item">
          <Counter newPercentage={30} progressState={progressbar} />
          <div className="lang-info">
            <h3>Arabic</h3>
            <p>Elementary Level</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Language);
