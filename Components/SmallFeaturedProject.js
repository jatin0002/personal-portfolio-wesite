import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../helper";

import { FolderIcon, GithubIcon, LiveLinkIcon } from "./SmallIcons";

const SmallFeaturedProject = ({ data, custom, animate, length }) => {
  const [smScreen, setSmScreen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  let w, h;
  if (typeof window !== "undefined") {
    const { width, height } = useWindowDimensions();
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

  return (
    <motion.div custom={custom} animate={animate}>
      <div
        className="rounded p-1 group bg-LightNavy transform hover:-translate-y-1.5 duration-200 ease-in"
        style={{
          minHeight: smScreen ? 300 : smallScreen ? 300 : 340,
          width: smScreen ? 300 : smallScreen ? 270 : 340,
        }}
      >
        <div className="flex justify-between p-5 small:p-3">
          <div>
            <FolderIcon />
          </div>
          <div className="flex ">
            {data.project_github_link && (
              <GithubIcon
                width={5}
                height={5}
                link={data.project_github_link}
              />
            )}
            {data.project_live_link && (
              <LiveLinkIcon
                width={5}
                height={5}
                link={data.project_live_link}
              />
            )}
          </div>
        </div>
        <div className="px-3 text-2xl font-semibold capitalize text-White small:text-lg">
          <p>{data?.project_title}</p>
        </div>
        <div className="px-3 py-3 text-Slate text-base  ssm:text-sm small:text-sm">
          <p>{data?.project_description}</p>
        </div>
        <div>
          <ul className="text-Slate grid grid-cols-3 gap-2 text-center text-sm opacity-80 group-hover:text-Green group-hover:opacity-100 ">
            {data?.project_tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default SmallFeaturedProject;
