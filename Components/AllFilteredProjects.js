import React, { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import SmallFeaturedProject from "./SmallFeaturedProject";

const AllFilteredProjects = ({ data }) => {
  const [allProject, setAllProject] = useState(data);
  const [isActive, setIsActive] = useState({
    A: true,
    B: false,
    C: false,
    D: false,
  });

  const allSmallProjects = () => {
    setIsActive({ A: true, B: false, C: false, D: false });
    setAllProject(data);
  };
  const allWebProjects = () => {
    setIsActive({ A: false, C: false, D: false, B: true });
    setAllProject(
      data.filter((proj) => {
        if (proj.project_category === "web") {
          return proj;
        }
      })
    );
  };
  const allMobileProjects = () => {
    setIsActive({ A: false, B: false, D: false, C: true });
    setAllProject(
      data.filter((proj) => {
        if (proj.project_category === "mobile") {
          return proj;
        }
      })
    );
  };
  const allBackendProjects = () => {
    setIsActive({ A: false, B: false, C: false, D: true });
    setAllProject(
      data.filter((proj) => {
        if (proj.project_category === "backend") {
          return proj;
        }
      })
    );
  };
  useEffect(() => {}, [allProject]);
  
  const { ref, inView } = useInView({ threshold: 0.01 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start((i) => ({
        x: 0,
        opacity: 1,
        transition: { delay: i * 0.6 },
      }));
    }

    if (!inView) {
      animation.start({
        x: "-100vw",
        opacity: 0.5,
      });
    }
  }, [inView]);

  return (
    <div className="mb-10 mt-5">
      <div className="flex justify-center w-full mt-20 mb-12 ">
        <p className=" tracking-normal text-3xl font-semibold  text-white ssm:text-2xl small:text-2xl text-center ">
          Other Noteworthy Projects
        </p>
      </div>
      <div className="w-full mb-10 flex justify-center ssm:justify-start small:justify-start">
        <div className="w-4/6 rounded-full bg-LightNavy ssm:w-full small:w-full">
          <ul className="flex justify-between font-normal capitalize text-Green ">
            <div
              className="px-16 py-2 rounded-full ssm:px-3 small:px-5 cursor-pointer "
              style={{
                backgroundColor: isActive.A ? "white" : "transparent",
                color: isActive.A ? "#0a192f" : "#64ffda",
              }}
              onClick={allSmallProjects}
            >
              <li className="cursor-pointer text-sm font-semibold tracking-wide">
                All
              </li>
            </div>
            <div
              style={{
                backgroundColor: isActive.B ? "white" : "transparent",
                color: isActive.B ? "#0a192f" : "#64ffda",
              }}
              className="px-16 py-2 rounded-full ssm:px-3 small:px-5"
              onClick={allWebProjects}
            >
              <li className="cursor-pointer text-sm font-semibold tracking-wide">
                Web
              </li>
            </div>
            <div
              style={{
                backgroundColor: isActive.C ? "white" : "transparent",
                color: isActive.C ? "#0a192f" : "#64ffda",
              }}
              className="px-16 py-2 rounded-full ssm:px-3 small:px-5"
              onClick={allMobileProjects}
            >
              <li className="cursor-pointer text-sm font-semibold tracking-wide">
                Mobile
              </li>
            </div>
            <div
              style={{
                backgroundColor: isActive.D ? "white" : "transparent",
                color: isActive.D ? "#0a192f" : "#64ffda",
              }}
              className="px-16 py-2 rounded-full ssm:px-3 small:px-5"
              onClick={allBackendProjects}
            >
              <li className="cursor-pointer text-sm font-semibold tracking-wide">
                Backend
              </li>
            </div>
          </ul>
        </div>
      </div>
      {/* small projects */}
      <div className="flex justify-center ">
        <div
          ref={ref}
          className=" grid grid-cols-3 gap-5 ssm:justify-center ssm:grid-cols-1 ssm:gap-4 small:grid-cols-2"
        >
          {allProject <= 0 ? (
            <div className="flex  w-screen justify-center  p-2 ">
              <p className="text-Green text-2xl mr-96 ssm:mr-28 small:mr-52 text-center capitalize font-semibold tracking-wide">
                No project yet!
              </p>
            </div>
          ) : (
            allProject?.map((project, i) => (
              <div key={i}>
                <SmallFeaturedProject
                  data={project}
                  custom={i}
                  animate={animation}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllFilteredProjects;
