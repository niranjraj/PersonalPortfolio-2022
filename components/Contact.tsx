import React from "react";
import Link from "next/link";
import SvgComponent from "./SvgComponent";
import { motion } from "framer-motion";
import Letter from "./Letter";
import { setCursorText, setCursorVariant } from "../redux/cursor-slice";
import { useAppDispatch } from "../redux/redux-hooks";
import { banner, appear, letterAni } from "../utils/variants";

const mailInfo = {
  id: "niranjrajesh7007@gmail.com",
  subject: "Project or Enquiry",
};

const Contact = () => {
  const dispatch = useAppDispatch();

  const buttonEnter = () => {
    dispatch(setCursorText("👋"));
    dispatch(setCursorVariant("contact"));
  };
  const leave = () => {
    dispatch(setCursorText(""));
    dispatch(setCursorVariant("default"));
  };
  const emailEnter = () => {
    dispatch(setCursorText("📧"));
    dispatch(setCursorVariant("mail"));
  };

  return (
    <section
      className="contact-container theme-container"
      data-scroll-section
      data-theme="dark"
      id="contact"
    >
      <div className="contact-footer-section">
        <motion.div
          variants={banner}
          whileInView="animate"
          viewport={{ once: true }}
          initial="initial"
          className="intro-subtitle"
          id="contact-start"
        >
          <span className="row-letter-ani">
            <motion.span className="letter-ani" variants={letterAni}>
              Contact.
            </motion.span>
          </span>
        </motion.div>
        <motion.h1
          variants={banner}
          whileInView="animate"
          viewport={{ once: true }}
          initial="initial"
          className="contact-title section-header-title"
        >
          <Letter title="Let's work together" />
        </motion.h1>
        <div className="contact-wrapper">
          <div className="social-item">
            <motion.h3
              variants={appear}
              whileInView="animate"
              viewport={{ once: true }}
              initial="initial"
            >
              Social.
            </motion.h3>
            <motion.ul
              variants={banner}
              whileInView="animate"
              viewport={{ once: true }}
              initial="initial"
              className="social-list"
            >
              <li className="row-letter-ani">
                <Link href="https://github.com/niranjraj">
                  <a onMouseEnter={buttonEnter} onMouseLeave={leave}>
                    <motion.span className="letter-ani" variants={letterAni}>
                      Github
                    </motion.span>
                  </a>
                </Link>
              </li>
              <li className="row-letter-ani">
                <Link href="https://www.linkedin.com/in/niranjRaj">
                  <a onMouseEnter={buttonEnter} onMouseLeave={leave}>
                    <motion.span className="letter-ani" variants={letterAni}>
                      LinkedIn
                    </motion.span>
                  </a>
                </Link>
              </li>
              <li className="row-letter-ani">
                <Link href="https://www.instagram.com/niranj.tsx/?hl=en">
                  <a onMouseEnter={buttonEnter} onMouseLeave={leave}>
                    <motion.span className="letter-ani" variants={letterAni}>
                      Instagram
                    </motion.span>
                  </a>
                </Link>
              </li>
            </motion.ul>
          </div>
          <div className="contact-header">
            <motion.p
              variants={appear}
              whileInView="animate"
              viewport={{ once: true }}
              initial="initial"
            >
              <span data-scroll data-scroll-call="" className="row">
                Have a project in mind? Would you like
              </span>

              <span className="row">to share it? Feel free to reach out</span>
              <span className="row">by writing an e-mail.</span>
            </motion.p>

            <div>
              <Link href={`mailto:${mailInfo.id}?subject=${mailInfo.subject}`}>
                <a
                  className="btn-connect"
                  onMouseEnter={emailEnter}
                  onMouseLeave={leave}
                >
                  <span>Connect</span>
                  <span>
                    <SvgComponent width={40} height={40} />
                  </span>
                </a>
              </Link>
            </div>
            <div className="credit">
              <motion.p
                variants={appear}
                whileInView="animate"
                viewport={{ once: true }}
                initial="initial"
              >
                <span className="row">
                  Designed and developed by Niranj Rajesh
                </span>
                <span className="row">2022 All rights reserved.</span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
