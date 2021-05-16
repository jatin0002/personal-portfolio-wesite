import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import useWindowDimensions from "../helper";
import { motion } from "framer-motion";

const FeaturedProject = ({ data, custom, animate }) => {
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
    <motion.div
    custom={custom} animate={animate} 
      className="mt-10 mb-10 ssm:mt-6 "
    >
      {/* project heading */}
      <div className="ml-16 ssm:ml-6">
        <p className="text-Green capitalize text-base">Featured Project</p>
        <p className="text-White capitalize text-3xl font-semibold small:text-2xl">
          {data?.project_title}
        </p>
      </div>
      <div className="flex mt-3 ssm:flex-col small:flex-col">
        <div
          className=" border border-Slate rounded-md overflow-hidden"
          style={{ height: smScreen ? 150 : smallScreen ? 250 : 350 }}
        >
          <Image
            className="bg-cover bg-center"
            src={data?.project_picture.formats.large.url}
            alt="project1"
            width={600}
            height={350}
          />
        </div>
        <div className="flex-1 relative">
          <div className="absolute -bottom-7 -left-24 ssm:static  small:static">
            <div className="flex justify-center mb-5 ssm:justify-center ssm: mt-3">
              {data?.project_github_link && (
                <Link href={data?.project_github_link}>
                  <div className="flex flex-col items-center cursor-pointer  transform hover:scale-125 transition 300s ease-in">
                    <div className="text-Slate h-6 w-6 ssm:w-5 ssm:h-5 mb-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="github"
                        className="svg-inline--fa fa-github fa-w-16"
                        role="img"
                        viewBox="0 0 496 512"
                      >
                        <path
                          fill="currentColor"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        />
                      </svg>
                    </div>
                    <p className="text-white text-xs">Github Repo</p>
                  </div>
                </Link>
              )}
              {data?.project_live_link && (
                <Link href={data?.project_live_link}>
                  <div className="flex flex-col ml-16 items-center cursor-pointer transform hover:scale-125 transition 300s ease-in">
                    <div className="text-Slate  h-6 w-6 ssm:w-5 ssm:h-5 mb-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="link"
                        className="svg-inline--fa fa-link fa-w-16"
                        role="img"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
                        />
                      </svg>
                    </div>
                    <p className="text-white text-xs">Live Link</p>
                  </div>
                </Link>
              )}
            </div>
            <div className="bg-LightNavy w-11/12 p-5 rounded-md ssm:w-full small:w-full">
              <p className="text-Slate text-base ssm:text-sm">
                {data?.project_description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center" style={{ width: smScreen ? 280 : 480 }}>
        <ul className="text-Green grid text-sm capitalize  grid-cols-4 gap-4 ssm:grid-cols-2 small:grid-cols-5">
          {data?.project_tech.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
