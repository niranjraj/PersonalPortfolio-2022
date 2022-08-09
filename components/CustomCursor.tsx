import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../redux/redux-hooks";

const CustomCursor = () => {
  const cursorText = useAppSelector((state) => state.cursor.cursorText);
  const cursorVariant = useAppSelector((state) => state.cursor.cursorVariant);
  const [scrolling, setScrolling] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // const cursorX = useMotionValue(-100);
  // const cursorY = useMotionValue(-100);
  // const springConfig = { damping: 25, stiffness: 700 };
  // const cursorXSpring = useSpring(cursorX, springConfig);
  // const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      const mouseCurrent = cursorRef.current;
      const { clientX, clientY } = e;
      if (mouseCurrent) {
        const mouseX = clientX - mouseCurrent.clientWidth / 2;
        const mouseY = clientY - mouseCurrent.clientHeight / 2;
        mouseCurrent.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
      }
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [cursorRef]);

  const variants = {
    default: {
      opacity: 1,
      height: 50,
      width: 50,
      fontSize: "16px",

      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#ffffff",
      color: "#111111",
      height: "10vw",

      width: "10vw",
      fontSize: "20px",
      borderColor: "#ffffff",
      transition: {
        ease: [0.77, 0, 0.175, 1],
      },
    },
    drag: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#DD4D42",
      color: "#ffffff",
      height: "7vw",

      width: "7vw",
      fontSize: "18px",
      borderColor: "#DD4D42",
      transition: {
        ease: [0.77, 0, 0.175, 1],
      },
    },
    skill: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#DD4D42",
      color: "#ffffff",
      height: "7vw",

      width: "7vw",
      fontSize: "32px",
      borderColor: "#DD4D42",
      transition: {
        ease: [0.77, 0, 0.175, 1],
      },
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: "5vw",
      width: "5vw",
      borderColor: "#FFBCBC",
      fontSize: "32px",
    },
    click: {
      opacity: 1,
      height: "5vw",
      width: "5vw",
      fontSize: "18px",
      backgroundColor: "#1D4AC0",
      borderColor: "#1D4AC0",
    },
    mail: {
      opacity: 1,
      backgroundColor: "#69365A",
      color: "#000",
      height: "5vw",
      width: "5vw",
      borderColor: "#69365A",
      fontSize: "32px",
    },
    take: {
      opacity: 1,
      height: "6vw",
      width: "6vw",
      fontSize: "18px",
      backgroundColor: "#DD4D42",
      borderColor: "#DD4D42",
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <motion.div
      className="circle"
      variants={variants}
      animate={cursorVariant}
      transition={spring}
      ref={cursorRef}
    >
      <span className="cursorText">{cursorText}</span>
    </motion.div>
  );
};
export default CustomCursor;
