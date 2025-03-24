import dynamic from "next/dynamic";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import { aboutMeData, personalInfo } from "../public/assets/data/data";

const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Ellen</b> Wang{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am <strong>Web Developer</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                      From Vancouver, Canada. I have rich experience in Full
                      Stack Web Development and Mobile App Development.
                    </p>
                  </div>
                  <div className="social-links">
                    <a
                      target="_blank"
                      rel="nofollow"
                      href={personalInfo.githubUrl}
                    >
                      <i aria-hidden="true" className="fab fa-github" />
                    </a>
                    <a
                      target="_blank"
                      rel="nofollow"
                      href={personalInfo.linkedinUrl}
                    >
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1MtQuIUhe8rpVICyyLF-ZlST6zMr8RrYc/view?usp=sharing"
                    className="btn"
                  >
                    <span>Check Resume</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    More about me{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  decoding="async"
                  src="assets/newImages/anime-selfie.png"
                  alt="<b>Ellen</b> Wang"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> ellen wang </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Works */}
      <section className="lui-section lui-gradient-bottom" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Works </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>Startup project, website, apps</span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> works </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="skills-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Professional Skills </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Talent</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> FrontEnd </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          React, HTML, CSS, JavaScript, Bootstrap, Tailwind...
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "85%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        85 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Javascript </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p></p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        90 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> BackEnd </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Node.js, Express, MySQL, MongoDB, Firebase, RESTful
                          API, GraphQL, PHP...
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "75%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        75 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Python </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p></p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "70%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        70 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Mobile App </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>React Native, Android, Flutter</p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "70%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        70 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Java </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p></p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "70%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        70 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Resume */}
      <Resume />

      {/* Section - About me detail */}
      <section className="lui-section lui-gradient-bottom" id="contact-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>More About Me </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> My life and passion</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lui-contacts v-line v-line-left">
          <div className="container">
              <div className="liu-text h5">
                <p>
                  Hi, I'm Ellen — a full-stack web and app developer with a
                  background in Android development and a growing focus on
                  modern web technologies.
                </p>
                <p>
                  Over the past two years, I've built a variety of projects
                  including an AI-powered web chatbot and ecommerce store demo.
                </p>
                <p>
                  I recently led a 6-month solo developer role at a startup,
                  designing and building an end-to-end cashback gift registry
                  platform using React, Node.js, and PostgreSQL.
                </p>
                <p>
                  What drives me is the challenge of problem-solving and the
                  excitement of building intuitive digital experiences. I enjoy
                  merging design with functionality and adapting quickly to new
                  technologies and workflows.
                </p>
                <p>
                  When I’m not coding, I love playing ARPG & strategy games and
                  painting — both of which fuel my creative thinking in tech.
                </p>
              </div>
            

            <div className="lui-bgtitle">
              <span> About Me </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
