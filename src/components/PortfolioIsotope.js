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
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("nextjs")}`}
            onClick={handleFilterKeyChange("nextjs")}
            data-href=".nextjs"
          >
            NextJS
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("react")}`}
            onClick={handleFilterKeyChange("react")}
            data-href=".react"
          >
            React
          </a>
        </div>
        <div className="works-items works-masonry-items row">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              topicName={project.topicName}
              topicDescription={project.topicDescription}
              categories={project.categories}
              projectLink={project.projectLink}
            />
          ))}
        </div>

        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
