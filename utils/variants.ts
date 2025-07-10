import { Variants, Transition } from "framer-motion";

// import * as THREE from "three";
// import * as React from "react";

// declare module "react" {
//   namespace JSX {
//     interface IntrinsicElements {
//       primitive: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
//         object: THREE.Object3D;
//       };
//     }
//   }
// }

// 1. Banner variant — add type for clarity
export const banner: Variants = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

// 2. Appear variant with correct ease typing and type annotation
export const appear: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.77, 0, 0.175, 1] as [number, number, number, number],
      duration: 0.8,
    },
  },
};

// 3. Letter animation with proper ease typing and typed as Variants
export const letterAni: Variants = {
  initial: {
    y: 300,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.77, 0, 0.175, 1] as [number, number, number, number],
      duration: 0.8,
    },
  },
};

// 4. AppearRender variant, same fixes
export const appearRender: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.77, 0, 0.175, 1] as [number, number, number, number],
      duration: 1,
    },
  },
};

// 5. Variants object for UI states (typed with Variants is tricky, so use a type alias)
type StyleVariant = {
  opacity?: number;
  height?: string | number;
  width?: string | number;
  fontSize?: string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  border?: string;
  transition?: Transition;
};

export const variants: Record<string, StyleVariant> = {
  default: {
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
    backgroundColor: "#DD4D42",
    color: "#ffffff",
    height: "9vw",
    width: "9vw",
    fontSize: "20px",
    borderColor: "#DD4D42",
    transition: {
      ease: [0.77, 0, 0.175, 1] as [number, number, number, number],
    },
  },
  drag: {
    opacity: 1,
    backgroundColor: "#DD4D42",
    color: "#ffffff",
    height: "7vw",
    width: "7vw",
    fontSize: "18px",
    borderColor: "#DD4D42",
    transition: {
      ease: [0.77, 0, 0.175, 1] as [number, number, number, number],
    },
  },
  skill: {
    opacity: 1,
    backgroundColor: "#DD4D42",
    color: "#ffffff",
    height: "7vw",
    width: "7vw",
    fontSize: "32px",
    borderColor: "#DD4D42",
    transition: {
      ease: [0.77, 0, 0.175, 1] as [number, number, number, number],
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
    color: "#231F20",
    fontSize: "18px",
    backgroundColor: "#DD4D42",
    borderColor: "#DD4D42",
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
  gif: {
    opacity: 1,
    height: "10vw",
    width: "10vw",
    border: "0px solid rgba(255,0,0,0)",
  },
};
