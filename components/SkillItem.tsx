import React from "react";

const SkillItem = ({ title }: { title: string }) => {
  return (
    <li>
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
