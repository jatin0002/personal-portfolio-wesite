import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import useWindowDimensions from "../../helper";
export default function HomeScreen() {
  const [smScreen, setSmScreen] = useState(false);
  let w, h;
  if (typeof window !== "undefined") {
    const { width, height } = useWindowDimensions();
    w = width;
    h = height;
  }
  useEffect(() => {
    if (w >= 320 && w < 639) {
      setSmScreen(true);
    } else if (w >= 640 && w < 767) {
      setSmScreen(false);
    } else if (w >= 768 && w < 1023) {
      setSmScreen(false);
    } else if (w >= 1024 && w < 1279) {
      setSmScreen(false);
    } else if (w >= 1280 && w < 1535) {
      setSmScreen(false);
    }
  }, [w]);

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 10,
        ease: "easeIn",
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn",
      },
    },
  };
  return (
    <div className="relative pt-10" id="home" style={{ height: "100vh" }}>
      <motion.div
        className="p-16 pl-32 ssm:pl-0 ssm:pt-16 small:pl-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="text-lg font-semibold tracking-wide text-Slate my-5 ssm:my-3 ssm:text-base sm:text-base"
          variants={item}
        >
          Hey! This is.
        </motion.p>
        <motion.p
          className="text-Green text-7xl mb-3 font-semibold  ssm:text-4xl ssm:mb-2  small:text-5xl"
          variants={item}
          initial="hidden"
          animate="show"
        >
          Jatin
        </motion.p>
        <motion.p
          className="text-Green text-7xl  font-semibold ssm:text-4xl  small:text-5xl "
          variants={item}
          initial="hidden"
          animate="show"
          style={{ width: smScreen ? "18rem" : "100%" }}
        >
          Pratap Singh.
        </motion.p>
        <motion.p
          className="text-Slate text-2xl my-7 tracking-wide font-semibold ssm:text-lg ssm:my-5  small:text-xl  "
          variants={item}
          initial="hidden"
          animate="show"
        >
          Fullstack Web Developement And Mobile Developement.
        </motion.p>
        <motion.p
          className="text-white text-xl my-6 font-regular w-1/2  ssm:text-base ssm:my-5  small:text-base small:w-3/4 "
          variants={item}
          initial="hidden"
          animate="show"
          style={{ width: smScreen ? "18rem" : "100%" }}
        >
          I am a full stack web developer and a mobile application developer. I
          like to develop websites and mobile apps for human beings to make
          their life easier.
        </motion.p>
        <motion.div
          className="border-2 cursor-pointer p-3 px-4 mt-5 text-Slate font-medium rounded-md inline-block border-Green transform hover:text-Green  transition 300s ease-in ssm:my-8 ssm:text-sm small:text-sm small:my-8"
          variants={item}
          initial="hidden"
          animate="show"
        >
          <a href="mailto:jatin.akash@gmail.com">Get In Touch</a>
        </motion.div>
      </motion.div>
      <div className="absolute ssm:hidden bottom-16 left-1/2 animate-bounce  text-Slate w-7 h-7 transform cursor-pointer -translate-x-2/4 ">
        <Link to="about" smooth={true} duration={500}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-down"
            className="svg-inline--fa fa-chevron-down fa-w-14"
            role="img"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
