import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAppSelector } from "../redux/redux-hooks";
import { variants } from "../utils/variants";
const CustomCursor = () => {
  const cursorText = useAppSelector((state) => state.cursor.cursorText);
  const cursorVariant = useAppSelector((state) => state.cursor.cursorVariant);
  const gif = useAppSelector((state) => state.cursor.gif);

  const cursorRef = useRef<HTMLDivElement | null>(null);

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

  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 20,
  };

  return (
    <>
      <motion.div
        className="circle"
        variants={variants}
        animate={cursorVariant}
        transition={spring}
        ref={cursorRef}
      >
        <span className="cursorText">{cursorText}</span>
        {gif && (
          <Image
            src={gif}
            className="cursorImage"
            alt="hellothere"
            height="300"
            width="300"
          />
        )}
      </motion.div>
    </>
  );
};
export default CustomCursor;
