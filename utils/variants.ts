export const banner = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const appear = {
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
};

export const letterAni = {
  initial: {
    y: 300,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.77, 0, 0.175, 1],
      duration: 0.8,
    },
  },
};

export const appearRender = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.77, 0, 0.175, 1],
      duration: 1,
    },
  },
};

export const variants = {
  default: {
    opacity: 1,
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
    // backgroundColor: "rgba(255, 255, 255, 0.6)",
    backgroundColor: "#DD4D42",
    color: "#ffffff",
    height: "9vw",

    width: "9vw",
    fontSize: "20px",
    borderColor: "#DD4D42",
    transition: {
      ease: [0.77, 0, 0.175, 1],
    },
  },
  drag: {
    opacity: 1,
    // backgroundColor: "rgba(255, 255, 255, 0.6)",
    backgroundColor: "#DD4D42",
    color: "#ffffff",
    height: "7vw",

    width: "7vw",
    fontSize: "18px",
    borderColor: "#DD4D42",
    transition: {
      ease: [0.77, 0, 0.175, 1],
    },
  },
  skill: {
    opacity: 1,
    // backgroundColor: "rgba(255, 255, 255, 0.6)",
    backgroundColor: "#DD4D42",
    color: "#ffffff",
    height: "7vw",

    width: "7vw",
    fontSize: "32px",
    borderColor: "#DD4D42",
    transition: {
      ease: [0.77, 0, 0.175, 1],
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
