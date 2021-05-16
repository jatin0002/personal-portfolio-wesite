import { useState } from "react";
import SocialIcons from "../Components/SocialIcons";
import { NavBar } from "./NavBar";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const MainScreen = ({ children, resume }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="relative h-full overflow-hidden" style={{ zIndex: 99 }}>
        <NavBar resume={resume} toggle={toggle} onToggle={onToggle} />
        {/* email show */}
        <div
          className="fixed md:w-80 sm:w-80 right-10 transform flex items-center rotate-90 origin-right w-96 ssm:hidden"
          style={{
            bottom: -15,
            cursor: "pointer",
            zIndex: 500,
          }}
        >
          <motion.p
            initial={{ x: 15, opacity: 0 }}
            animate={{ x: -3, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className=" text-sm md:text-base sm:text-base tracking-wider text-Slate hover:text-Green cursor-pointer mr-1 transform hover:-translate-x-1.5 duration-200 ease-in "
          >
            <a href="mailto:jatin.akash@gmail.com">jatin.akash@gmail.com</a>
          </motion.p>
          <div className="border bg-Slate border-Slate mt-1 h-0 w-full"></div>
        </div>
        {/* socila media icons */}
        <motion.div
          style={{ bottom: 40, zIndex: 955 }}
          className="fixed ssm:hidden left-7  h-44 flex flex-col justify-between"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          <SocialIcons />
        </motion.div>
        <div
          className="sm:w-4/5 md:w-4/5 w-5/6 mx-auto h-full  overflow-y-scroll "
          style={{
            width: toggle ? "100wh" : "80%",
            height: toggle ? "100vh" : "100%",
            // overflowY: toggle ? "hidden" : "scroll",
          }}
        >
          {children}
        </div>
        {toggle && (
          <div
            className={
              toggle
                ? "w-9/12 absolute  h-screen bg-LightNavy top-0 right-0  "
                : ""
            }
          >
            <div className=" h-full flex  items-start  mt-14">
              <ul className="flex bg h-1/2 mt-10  justify-between w-full ssm:flex-col text-base font-medium ">
                <li className="text-Slate cursor-pointer ssm:py-1 ssm:text-center  transform hover:scale-110 transition 300s ease-in hover:text-Green">
                  <Link
                    activeClass="active"
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                  >
                    Home
                  </Link>
                </li>
                <li className="text-Slate cursor-pointer ssm:py-1 ssm:text-center  transform hover:scale-110 transition 300s ease-in hover:text-Green">
                  <Link
                    activeClass="active"
                    to="about"
                    smooth={true}
                    duration={250}
                    spy={true}
                  >
                    About
                  </Link>
                </li>
                <li className="text-Slate cursor-pointer ssm:py-1 ssm:text-center  transform hover:scale-110 transition 300s ease-in hover:text-Green">
                  <Link
                    activeClass="active"
                    to="projects"
                    smooth={true}
                    duration={250}
                    spy={true}
                  >
                    Projects
                  </Link>
                </li>
                <li className="text-Slate cursor-pointer ssm:py-1 ssm:text-center  transform hover:scale-110 transition 300s ease-in hover:text-Green">
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    duration={250}
                    spy={true}
                  >
                    Contact Me
                  </Link>
                </li>
                <li className="cursor-pointer py-1 ssm:text-center  inline-block hover:animate-none text-Green transform hover:scale-110 transition 300s ease-in ">
                  <a
                    href={resume[0]?.url}
                    download
                    className="border-2 px-4 py-2 rounded border-Green"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainScreen;
