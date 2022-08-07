import { animate } from "framer-motion";
import React, { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

type Props = {
  valueStart: number;
  valueEnd: number;
  progressState: boolean;
  children: (value: number) => React.ReactElement<any, any>;
};
const ProgressProvider = ({
  valueStart,
  valueEnd,
  progressState,
  children,
}: Props) => {
  const [value, setValue] = React.useState(valueStart);

  useEffect(() => {
    if (progressState) {
      let initialLoad = setTimeout(() => setValue(valueEnd), 1000);

      return () => {
        clearTimeout(initialLoad);
      };
    }
  }, [progressState]);

  return children(value);
};
export default ProgressProvider;
