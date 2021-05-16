import { CrossIcon, MenuIcon } from "./SmallIcons";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const NavBar = ({ resume, onToggle, toggle }) => {
  return (
    <div
      className="fixed bg-LightNavy z-100 w-full ssm:flex"
      style={{ zIndex: 10000, scrollMarginTop: "5rem" }}
    >
      <div className="  relative  flex flex-row items-center w-full justify-around ">
        {/* logo */}
        <div className="text-Green text-4xl flex-1  py-2 ssm:pl-6 ml-16 ">
          Jatin
        </div>
        {/* nav bar */}

        <nav className="flex-1 ssm:hidden">
          <motion.ul className="flex justify-evenly w-full ssm:flex-col mid:w-96 small:w-96 text-sm font-medium ">
            <motion.li className="text-Slate cursor-pointer ssm:py-1 ssm:text-center transform hover:scale-110 transition 300s ease-in hover:text-Green">
              <Link
                to="home"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
              >
                Home
              </Link>
            </motion.li>
            <motion.li className="text-Slate cursor-pointer ssm:py-1 ssm:text-center transform hover:scale-110 transition 300s ease-in hover:text-Green">
              <Link
                to="about"
                activeClass="active"
                smooth={true}
                duration={250}
                spy={true}
              >
                About
              </Link>
            </motion.li>
            <motion.li className="text-Slate cursor-pointer ssm:py-1 ssm:text-center transform hover:scale-110 transition 300s ease-in hover:text-Green">
              <Link
                to="projects"
                smooth={true}
                duration={250}
                activeClass="active"
                spy={true}
              >
                Projects
              </Link>
            </motion.li>
            <motion.li className="text-Slate cursor-pointer ssm:py-1 ssm:text-center transform hover:scale-110 transition 300s ease-in hover:text-Green">
              <Link
                to="contact"
                smooth={true}
                activeClass="active"
                duration={250}
                spy={true}
              >
                Contact Me
              </Link>
            </motion.li>
            <motion.li className="cursor-pointer ssm:py-1 ssm:text-center  text-Green transform hover:scale-110 transition 300s ease-in ">
              <a
                href={resume[0]?.url}
                download
                className="border-2 px-4 py-2 rounded border-Green"
              >
                Resume
              </a>
            </motion.li>
          </motion.ul>
        </nav>

        {
          <div className="text-white flex-1 hidden ssm:inline-block relative">
            <div
              className="w-6 h-6 absolute"
              style={{ top: -15, right: 30 }}
              onClick={onToggle}
            >
              {!toggle ? <MenuIcon /> : <CrossIcon />}
            </div>
          </div>
        }
      </div>
    </div>
  );
};
