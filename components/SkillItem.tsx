import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { setCursorText, setCursorVariant } from "../redux/cursor-slice";
import { useAppSelector, useAppDispatch } from "../redux/redux-hooks";
gsap.registerPlugin(ScrollTrigger);
const SkillItem = ({ title }: { title: string }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);
  return (
    <li
      onMouseEnter={() => {
        dispatch(setCursorText("Take Me"));
        dispatch(setCursorVariant("drag"));
      }}
      onMouseLeave={() => {
        dispatch(setCursorText(""));
        dispatch(setCursorVariant("default"));
      }}
      className="skills-list-item-wrapper"
    >
      <div
        className="skills-list-item"
        data-scroll
        data-scroll-speed="-5"
        data-scroll-direction="horizontal"
        data-scroll-delay="0.06"
      >
        <h2 data-text={`${title}  `}>{title}</h2>
      </div>
    </li>
  );
};

export default SkillItem;
