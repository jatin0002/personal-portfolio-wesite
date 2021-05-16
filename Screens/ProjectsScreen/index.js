import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import AllFilteredProjects from "../../Components/AllFilteredProjects";
import FeaturedProject from "../../Components/FeaturedProject";
import HeadingComponent from "../../Components/HeadingComponent";

export default function ProjectsScreen({ data }) {
  const { ref, inView } = useInView({ threshold: 0.01 });
  const animation = useAnimation();
  
  const isNoteWorthyProject = data.filter((proj) => {
    if (proj.isNoteWorthy) {
      return proj;
    }
  });
  const highEndProject = data.filter((proj) => {
    if (!proj.isNoteWorthy) {
      return proj;
    }
  });

  useEffect(() => {
    if (inView) {
      animation.start((i) => ({
        x: 0,
        opacity: 1,
        transition: { delay: i * 1.2 },
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
    <div>
      <div className="p-16 ssm:pl-0 pt-28 ssm:p-5" id="projects">
        <HeadingComponent heading="Some Things I’ve Built" width="25%" />
        <div ref={ref}>
          {highEndProject.map((project, i) => (
            <div key={i}>
              <FeaturedProject data={project} custom={i} animate={animation} />
            </div>
          ))}
        </div>

        <AllFilteredProjects data={isNoteWorthyProject} />
      </div>
    </div>
  );
}
