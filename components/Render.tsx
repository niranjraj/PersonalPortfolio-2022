import React, { Suspense, useEffect, useState } from "react";
import { Canvas, Vector3 } from "@react-three/fiber";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import {
  setCursorText,
  setCursorVariant,
  setTheme,
} from "../redux/cursor-slice";
import { useAppSelector, useAppDispatch } from "../redux/redux-hooks";

import {
  OrbitControls,
  TrackballControls,
  PerspectiveCamera,
} from "@react-three/drei";

const Football = dynamic(() => import("./Football"), {
  suspense: true,
});
const Controller = dynamic(() => import("./Controller"), {
  suspense: true,
});

const Headphone = dynamic(() => import("./Headphone"), {
  suspense: true,
});

type Hobby = {
  state: number;
  position?: Vector3;
  title: string;
  des: string;
};
type Props = {
  hobby: Hobby;
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

const Render = (props: Props) => {
  const angleToRadians = (angle: number) => (Math.PI / 180) * angle;
  const dispatch = useAppDispatch();
  const [windowSize, setWindowSize] = useState<number | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      const handleResize = () => {
        // Set window width/height to state
        setWindowSize(window.innerWidth);
      };

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    controls.set({ opacity: 0, y: 100 });
    controls.start({
      y: 0,
      opacity: 1,

      transition: { type: "spring", damping: 10, stiffness: 700, mass: 0.35 },
    });
  }, [props.hobby.state]);
  return (
    <>
      <motion.div
        className="render-desc"
        variants={appear}
        initial="initial"
        whileInView="animate"
        animate={controls}
      >
        <h3>{props.hobby.title}</h3>
        <p>{props.hobby.des}</p>
      </motion.div>

      <div
        className="render"
        onMouseEnter={() => {
          dispatch(setCursorText("Drag Me"));
          dispatch(setCursorVariant("drag"));
        }}
        onMouseLeave={() => {
          dispatch(setCursorText(""));
          dispatch(setCursorVariant("default"));
        }}
      >
        <Canvas>
          <PerspectiveCamera
            makeDefault
            position={props.hobby.position ? props.hobby.position : [5, -4, 20]}
          />

          <OrbitControls
            enableZoom={false}
            minPolarAngle={angleToRadians(-25)}
            maxPolarAngle={angleToRadians(60)}
          />

          <ambientLight intensity={0.7} />
          <pointLight position={[50, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            {props.hobby.state === 0 ? (
              <Football
                scale={
                  windowSize
                    ? windowSize <= 1024 && windowSize > 480
                      ? 0.15
                      : 0.1
                    : 0.1
                }
              />
            ) : props.hobby.state === 1 ? (
              <Controller
                scale={
                  windowSize
                    ? windowSize <= 1024 && windowSize > 480
                      ? 3
                      : 2.4
                    : 2.4
                }
              />
            ) : (
              <Headphone
                scale={
                  windowSize
                    ? windowSize <= 1024 && windowSize > 480
                      ? 0.5
                      : 0.4
                    : 0.4
                }
                position={[0, -4, 0]}
              />
            )}
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default React.memo(Render);
