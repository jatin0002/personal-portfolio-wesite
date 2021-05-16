import { useState, memo, useEffect } from "react";
import Image from "next/image";
import useWindowDimensions from "../../helper";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import HeadingComponent from "../../Components/HeadingComponent";

function AboutMeScreen({ data }) {
  const [smScreen, setSmScreen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const { ref, inView } = useInView({ threshold: 0.01 });
  const animation = useAnimation();

  let w, h;
  if (typeof window !== "undefined") {
    const { width, height } = useWindowDimensions({ threshold: 0.4 });
    w = width;
    h = height;
  }
  useEffect(() => {
    if (w >= 320 && w < 639) {
      setSmScreen(true);
      setSmallScreen(false);
    } else if (w >= 640 && w < 767) {
      setSmScreen(false);
      setSmallScreen(true);
    } else if (w >= 768 && w < 1023) {
      setSmScreen(false);
      setSmallScreen(false);
    } else if (w >= 1024 && w < 1279) {
      setSmScreen(false);
      setSmallScreen(false);
    } else if (w >= 1280 && w < 1535) {
      setSmScreen(false);
      setSmallScreen(false);
    }
  }, [w]);

  useEffect(() => {
    if (inView) {
      animation.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.3 },
      }));
    }

    if (!inView) {
      animation.start({
        y: 10,
        opacity: 0,
      });
    }
  }, [inView]);

  const widthOfPicture = smScreen ? 150 : smallScreen ? 165 : 300;
  const heightOfPicture = smScreen ? 150 : smallScreen ? 165 : 300;

  return (
    <div id="about" style={{ height: "100vh" }} >
      <div className="p-16  pt-36 ssm:p-0 ssm:mt-5 small:p-10 ">
        <HeadingComponent heading="about me" />

        <div
          ref={ref}
          className="flex p-8 pl-0 mt-5 ssm:flex-col ssm:mt-1 small:flex-col "
        >
          <motion.div
            custom={1}
            animate={animation}
            className="ssm:flex ssm:justify-center small:flex small:justify-center ssm:mb-6 small:mb-6 "
          >
            <div className="relative cursor-pointer ssm:inline-block small:inline-block ">
              <div
                className="absolute -top-2.5 -right-2.5  border-Green"
                style={{
                  width: widthOfPicture / 4,
                  height: heightOfPicture / 4,
                  borderWidth: "3px 3px 0 0",
                }}
              ></div>
              <Image
                src={data?.profile_picture.formats.large.url}
                alt="jatin"
                width={widthOfPicture}
                height={heightOfPicture}
              />
              <div
                className="absolute -bottom-2 -left-2.5  border-Green"
                style={{
                  width: widthOfPicture / 4,
                  height: heightOfPicture / 4,
                  borderWidth: "0 0 3px 3px",
                }}
              ></div>
            </div>
          </motion.div>
          <motion.div
            custom={1}
            animate={animation}
            className="px-14 ssm:p-0 small:px-3 "
          >
            <p className="text-Slate text-xl  ssm:text-base small:text-base ">
              {data?.profile_info}
            </p>
            <div className="mt-20 ssm:mt-10 small:mt-3">
              <p className="text-Slate text-lg mt-10 ssm:mt-6 ssm:text-base small:text-base">
                Here are a few technologies I've been working with recently :
              </p>
              <ul className="text-Green grid capitalize text-sm grid-cols-3 gap-4 mt-8 ssm:mt-5 small:mt-3">
                {data?.profile_tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default memo(AboutMeScreen);
