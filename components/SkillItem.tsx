import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { setCursorText, setCursorVariant } from "../redux/cursor-slice";
import { useAppDispatch } from "../redux/redux-hooks";
gsap.registerPlugin(ScrollTrigger);

const SkillItem = ({ title, source }: { title: string; source: string }) => {
  const dispatch = useAppDispatch();

  const listRef = useRef<HTMLLIElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    const image = imageRef.current;
    const scaleImage = document.querySelector(".hover-image") as HTMLElement;

    if (image && list && scaleImage) {
      const imageMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;

        image.style.left = `${clientX + list?.clientWidth / 5}px`;
        image.style.top = `${clientY / 3}px`;
        image.style.opacity = "1";
        list.style.zIndex = "50";
      };

      const imageLeave = (e: MouseEvent) => {
        const { clientX, clientY } = e;

        image.style.opacity = "0";
        list.style.zIndex = "1";
        image.style.left = `${-clientX + list?.clientWidth / 5}px`;
        image.style.top = `${-clientY / 3}px`;
      };

      list?.addEventListener("mousemove", imageMove);
      list?.addEventListener("mouseleave", imageLeave);
      return () => {
        list?.removeEventListener("mousemove", imageMove);
        list?.removeEventListener("mouseleave", imageLeave);
      };
    }
  }, [listRef]);
  return (
    <li
      onMouseEnter={() => {
        dispatch(setCursorText("⌨️"));
        dispatch(setCursorVariant("skill"));
      }}
      onMouseLeave={() => {
        dispatch(setCursorText(""));
        dispatch(setCursorVariant("default"));
      }}
      className="skills-list-item-wrapper"
      ref={listRef}
    >
      <div
        className="skills-list-item"
        data-scroll
        data-scroll-speed="-5"
        data-scroll-direction="horizontal"
        data-scroll-delay="0.06"
      >
        <h2 data-text={`${title}  `}>{title}</h2>

        <div className="image-hover-reveal" ref={imageRef}>
          <Image
            className="hover-image"
            src={source}
            height="300"
            width="300"
            alt="portrait"
          />
        </div>
      </div>
    </li>
  );
};

export default SkillItem;
