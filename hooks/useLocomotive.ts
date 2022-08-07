import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { LocomotiveScrollOptions, Scroll } from "locomotive-scroll";

type UseLocomotiveScrollHook = [React.RefObject<Scroll>];

type Props = {
  ref: React.RefObject<Element>;
} & Omit<LocomotiveScrollOptions, "el">;
const useLocomotiveScroll = ({
  ref,
  ...otherProps
}: Props): UseLocomotiveScrollHook => {
  const locomotiveScrollRef = useRef<Scroll | null>(null);

  useEffect(() => {
    console.log(ref);
    if (ref?.current) {
      import("locomotive-scroll").then((locomotiveModule) => {
        locomotiveScrollRef.current = new locomotiveModule.default({
          ...otherProps,
          el: ref.current as HTMLDivElement,
        });
      });
    }
    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, [ref.current]);
  return [locomotiveScrollRef];
};
export default useLocomotiveScroll;
