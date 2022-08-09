import React, {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";

type Props = {
  load?: boolean;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};
const Loader = (props: Props) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let id: NodeJS.Timer;
    let initial = 1999;
    const currentLoad = loaderRef.current as HTMLDivElement;
    const year = new Date().getFullYear();
    const subtitle = document.querySelector(".subtitle-loader");

    function loading() {
      id = setInterval(frame, 100);
    }

    function frame() {
      if (initial >= year) {
        if (subtitle) {
          subtitle.innerHTML = "Welcome";
        }
        clearInterval(id);

        if (props.setLoading) {
          props.setLoading(false);
        }
      } else {
        initial++;
        currentLoad.innerHTML = `${initial}`;
      }
    }
    if (props.load) {
      loading();
    }
  }, []);
  return (
    <div className="loader-container">
      <div className="title-year" ref={loaderRef}>
        1999
      </div>
      <div className="loader-bar"></div>
      <div className="subtitle-loader"></div>
    </div>
  );
};

export default Loader;
