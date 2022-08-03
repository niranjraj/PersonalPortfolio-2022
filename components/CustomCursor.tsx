import React, { MutableRefObject, useEffect } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../redux/redux-hooks";

type Props = {
  mouseRef: MutableRefObject<HTMLDivElement | null>;
};

const CustomCursor = (props: Props) => {
  const cursorText = useAppSelector((state) => state.cursor.cursorText);
  const cursorVariant = useAppSelector((state) => state.cursor.cursorVariant);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

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
      backgroundColor: "#DD4D42",
      color: "#ffffff",
      height: "10vw",

      width: "10vw",
      fontSize: "18px",
      borderColor: "#DD4D42",
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
      style={{ left: cursorX, top: cursorY }}
    >
      <span className="cursorText">{cursorText}</span>
    </motion.div>
  );
};

export default CustomCursor;
