import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Master of electrical and computer engineering",
    academy: "University of Toronto",
    dec: "Relevant courses--Data Structures and Algorithms, Mobile App Design, Machine Learning ",
    startYear: "2018",
    endYear: "2020",
  },
  {
    id: 2,
    title: "Bachelor of Science",
    academy: "Wuhan University",
    dec: "Geographical Information Science",
    startYear: "2014",
    endYear: "2018",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Freelance Web Developer",
    company: "",
    dec: "Responsible for all phases of the project from initial client consultation to ongoing development.  Developing a web-based chatbot that utilizes Retrieval-Augmented Generation (RAG) to intelligently process and interpret an extensive array of PDF files on Buddhism. Integrated the Orca-2 AI language model offering a cost-effective alternative to commercial models like ChatGPT. Also under the development of an online marketplace tailored for the sale of traditional Chinese goods, including jade jewelry and tea cups.",
    startYear: "2024",
    endYear: false,
  },
  {
    id: 2,
    title: "Junior Application Developer",
    company: "Redfox Games Corps",
    dec: "Developed and maintained Android SDK, focusing on SDK updates for gaming applications and efficient problem resolution within a 3-day timeframe.Spearheaded the integration of new features like Discord login, Alphapay, and Authorized Pay, enhancing user experience and payment functionalities.Pioneered the company’s transition to web development by creating a web-based personal center from scratch within 2 months, showcasing rapid self-taught proficiency.Rapidly mastered Flutter within one month, effectively managing the transition and updates from Dart 1 to Dart 3. Skillfully addressed and resolved legacy issues, such as image uploading in rich text inputs and tab errors, enhancing the functionality and reliability of our Android-based Flutter applications.Demonstrated exceptional efficiency and time management by consistently completing tasks and delivering new features ahead of deadlines.Facilitated cross-functional communication and project coordination among a 5-member team, bridging gaps between Chinese tech teams and non-Chinese market teams.",
    startYear: "2022",
    endYear: "2024",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-top" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
