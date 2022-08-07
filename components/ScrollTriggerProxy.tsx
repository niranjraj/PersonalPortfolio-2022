import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll";

type Props = {
  loading: boolean;
};
const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el as HTMLElement;
      scroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value as number, { offset: 0, duration: 0 })
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          console.log("in scroll");
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: element?.style.transform ? "transform" : "fixed",
      });

      const arrayContainer = document.querySelectorAll(".theme-container");

      arrayContainer?.forEach((item, index) => {
        const currentTheme = item.getAttribute("data-theme");
        console.log(currentTheme);
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            scroller: ".main-container",
            start: "top center",
            end: "bottom top",
            toggleClass: { targets: "html", className: currentTheme as string },
          },
        });
      });
    }

    return () => {
      ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      ScrollTrigger.refresh();
    };
  }, [scroll]);

  return null;
};

export default ScrollTriggerProxy;
