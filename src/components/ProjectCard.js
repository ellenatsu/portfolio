import Link from "next/link";

/**
 * ProjectCard component props
 * @param {string} topicName - The name of the topic.
 * @param {string} topicDescription - A brief description of the topic.
 * @param {string[]} categories - Categories or labels associated with the topic.
 * @param {string} projectLink - URL link to the project.
 */

const ProjectCard = ({
  topicName,
  topicCover,
  topicDescription,
  categories,
  projectLink,
}) => {
  const category = categories.join(" ");
  return (
    <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 react">
      <div
        className="works-item scrolla-element-anim-1 scroll-animate"
        data-animate="active"
      >
        <div className="image">
          <div className="img">
            {/* <Link legacyBehavior href="/work-single">
              <a>
                <img
                  decoding="async"
                  src={topicCover}
                  alt="cover"
                />
                <span className="overlay" />
              </a>
            </Link> */}
            <a>
              <img
                decoding="async"
                src={topicCover}
                alt="cover"
              />
              <span className="overlay" />
            </a>
          </div>
        </div>
        <div className="desc">
          <span className="category">{category}</span>
          <h5 className="name">

            <a>{topicName}</a>

          </h5>
          <div className="text">
            <p>{topicDescription}</p>
          </div>
          <Link legacyBehavior href={projectLink} passHref>
            <a className="lnk" target="_blank" rel="noopener noreferrer">
              Go Website
            </a>
          </Link>
        </div>
        <div
          className="bg-img"
          style={{
            backgroundImage: "url(assets/images/pat-2.png)",
          }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
