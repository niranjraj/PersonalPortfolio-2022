import React from "react";

import { setCursorText, setCursorVariant } from "../redux/cursor-slice";
import { useAppSelector, useAppDispatch } from "../redux/redux-hooks";

const SkillItem = ({ title }: { title: string }) => {
  const dispatch = useAppDispatch();

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
