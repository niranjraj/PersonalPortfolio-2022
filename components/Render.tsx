import React, { Suspense } from "react";
import { Canvas, Vector3 } from "@react-three/fiber";
import {
  OrbitControls,
  TrackballControls,
  PerspectiveCamera,
} from "@react-three/drei";

type Props = {
  children: JSX.Element;
  control: boolean;
  position?: Vector3;
};

const Render = (props: Props) => {
  const angleToRadians = (angle: number) => (Math.PI / 180) * angle;
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        position={props.position ? props.position : [5, -4, 20]}
      />
      {props.control ? (
        <TrackballControls noZoom={true} noPan={true} rotateSpeed={0.8} />
      ) : (
        <OrbitControls
          enableZoom={false}
          minPolarAngle={angleToRadians(-25)}
          maxPolarAngle={angleToRadians(60)}
        />
      )}

      <ambientLight intensity={0.7} />
      <pointLight position={[50, 5, 2]} intensity={1} />
      <Suspense fallback={null}>{props.children}</Suspense>
    </Canvas>
  );
};

export default React.memo(Render);
