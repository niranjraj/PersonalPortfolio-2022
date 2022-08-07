import React, { Suspense } from "react";
import { Canvas, Vector3 } from "@react-three/fiber";
import { motion } from "framer-motion";
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
  return (
    <>
      <motion.div
        variants={appear}
        whileInView="animate"
        viewport={{ once: true }}
        initial="initial"
        className="render-desc"
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
              <Football scale={0.1} />
            ) : props.hobby.state === 1 ? (
              <Controller scale={2.4} />
            ) : (
              <Headphone scale={0.4} position={[0, -4, 0]} />
            )}
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default React.memo(Render);
