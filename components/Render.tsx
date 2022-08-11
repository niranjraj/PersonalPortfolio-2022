import React, { Suspense, useEffect, useState } from "react";
import { Canvas, Vector3 } from "@react-three/fiber";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import { setCursorText, setCursorVariant } from "../redux/cursor-slice";
import { useAppSelector, useAppDispatch } from "../redux/redux-hooks";
import { appear } from "../utils/variants";
import { useMediaQuery } from "react-responsive";
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

const Render = (props: Props) => {
  const angleToRadians = (angle: number) => (Math.PI / 180) * angle;
  const dispatch = useAppDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const controls = useAnimation();

  useEffect(() => {
    controls.set({ opacity: 0, y: 100 });
    controls.start({
      y: 0,
      opacity: 1,

      transition: { type: "spring", damping: 10, stiffness: 700, mass: 0.35 },
    });
  }, [props.hobby.state, controls]);
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
              <Football scale={isTabletOrMobile ? 0.15 : 0.1} />
            ) : props.hobby.state === 1 ? (
              <Controller scale={isTabletOrMobile ? 3 : 2.4} />
            ) : (
              <Headphone
                scale={isTabletOrMobile ? 0.5 : 0.4}
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
