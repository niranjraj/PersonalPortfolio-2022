import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.2 39.52V40h5.76v-.48c0-4.88 1.92-9.52 5.36-13.04 3.44-3.52 8.08-5.44 12.96-5.52h.4v-1.04H39.2c-4.88-.08-9.44-2-12.88-5.52-3.44-3.44-5.36-8.08-5.36-13.04V.88H15.2v.48c0 5.28 2.48 10.16 7.04 13.84 2.72 2.16 5.92 3.76 9.44 4.72H.8v1.04h30.88c-3.52.96-6.72 2.56-9.44 4.72-4.56 3.68-7.04 8.64-7.04 13.84Z"
      fill="#F3DDB6"
    />
  </svg>
);

export default SvgComponent;
