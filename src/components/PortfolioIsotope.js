import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { projectsData } from "../../public/assets/data/data";

import ProjectCard from "./ProjectCard";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div className="works-items works-masonry-items row">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              topicName={project.topicName}
              topicCover={project.topicCover}
              topicDescription={project.topicDescription}
              categories={project.categories}
              projectLink={project.projectLink}
              hostedWebsite={project?.hostedWebsite}
            />
          ))}
        </div>

      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
