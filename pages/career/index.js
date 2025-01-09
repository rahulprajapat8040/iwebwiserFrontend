import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Layout = dynamic(import("@/Components/Common/Layout"));

const JoinTeam = (props) => {
  return (
    <>
      <Head>
        <title>Discover Your Potential | Career with iWebwiser</title>
        <meta name="keywords" content="" />
        <meta
          name="description"
          content="Discover the exciting job openings at iWebwiser in a range of areas, such as web/app development, designing & digital marketing to freshers and experienced."
        />
        <link rel="canonical" href="https://www.iwebwiser.com/career/" />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content="Discover Your Potential | Career with iWebwiser"
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FjoinMailteam.webp&w=1920&q=75"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="Discover Your Potential | Career with iWebwiser"
        />
        <meta property="og:url" content="https://www.iwebwiser.com/career" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FjoinMailteam.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="Discover the exciting job openings at iWebwiser in a range of areas, such as web/app development, designing & digital marketing to freshers and experienced."
        />
      </Head>

      <Layout>
        {/* JoinTeam Banner section start here... */}
        <section className="JoinTeam-home">
          <div className="JoinTeam-home-bg">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate={"visible"}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4> Your Next Professional Opportunity</h4>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate={"visible"}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <p>
                iWebwiser makes about a good, irreversible, and innovative
                transformation in the world of digital commerce.
              </p>
            </motion.div>
          </div>
        </section>
        {/* JoinTeam Banner section end here... */}

        {/* Team Eligibility Tabs section start here... */}
        <section className="join-member">
          {/* Team Country tabs start here... */}
          <div className="team-country">
            <ul
              className="nav nav-pills justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-Bikaner-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Bikaner"
                  type="button"
                  role="tab"
                  aria-controls="pills-Bikaner"
                  aria-selected="true"
                >
                  Bikaner, India
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-South-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-South"
                  type="button"
                  role="tab"
                  aria-controls="pills-South"
                  aria-selected="false"
                >
                  South Africa
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Australia-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Australia"
                  type="button"
                  role="tab"
                  aria-controls="pills-Australia"
                  aria-selected="false"
                >
                  Australia
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Indore-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Indore"
                  type="button"
                  role="tab"
                  aria-controls="pills-Indore"
                  aria-selected="false"
                >
                  Indore, India
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Ratangarh-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Ratangarh"
                  type="button"
                  role="tab"
                  aria-controls="pills-Ratangarh"
                  aria-selected="false"
                >
                  Ratangarh , India
                </button>
              </li>
            </ul>
          </div>
          {/* Team Country tabs start here... */}

          {/* Team Country Eligible content start here... */}
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-Bikaner"
              role="tabpanel"
              aria-labelledby="pills-Bikaner-tab"
              tabindex="0"
            >
              <div className="Stram-content">
                <div className="accordion" id="Developer">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#AngularDeveloper"
                        aria-expanded="true"
                        aria-controls="AngularDeveloper"
                      >
                        <span>
                          React Native / Fresher / Experience Developer
                        </span>
                        <span>Bikaner, India</span>
                      </button>
                    </h2>
                    <div
                      id="AngularDeveloper"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#Developer"
                    >
                      <div className="accordion-body">
                        <h5>Role and Responsibility</h5>
                        <ul>
                          <li>
                            <p>
                              Planned, executed and oversaw all programming
                              activities on a study, including but not limited
                              to resource estimation, working within a budget,
                              meeting timelines, maximizing quality, interaction
                              with other departments and the client, etc.
                            </p>
                          </li>

                          <li>
                            <p>
                              Produce Defined XML/PDFs, Analysis Results
                              Metadata (ARM), annotated CRFs and reviewer guides
                              to support SDTMs and ADaMs.
                            </p>
                          </li>

                          <li>
                            <p>
                              Review SAPs and TFL shells from a programming
                              perspective for studies.
                            </p>
                          </li>

                          <li>
                            <p>
                              Mentor less-experienced programmers in the
                              processes around SDTMs, ADaMs and TFLs.
                            </p>
                          </li>

                          <li>
                            <p>
                              Present and share knowledge at department
                              meetings.
                            </p>
                          </li>

                          <li>
                            <p>
                              Respond to QA and client audits and support
                              qualification audits.
                            </p>
                          </li>

                          <li>
                            <p>
                              Identify processes within programming that will
                              increase productivity, quality and efficiency.
                            </p>
                          </li>
                        </ul>
                        <h5>Experience:- 3 Years Minimum.</h5>
                        <div className="text-center text-lg-start">
                          <Link
                            href={"/contact-us"}
                            as={"/contact-us"}
                            className="btn btn-outline-dark"
                            role="button"
                          >
                            APPLY NOW
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#PHPDeveloper"
                        aria-expanded="false"
                        aria-controls="PHPDeveloper"
                      >
                        <span>
                          Frontend Developer / Fresher / Experience Developer
                        </span>
                        <span>Bikaner, India</span>
                      </button>
                    </h2>
                    <div
                      id="PHPDeveloper"
                      className="accordion-collapse collapse"
                      data-bs-parent="#Developer"
                    >
                      <div className="accordion-body">
                        <h5>Role and Responsibility</h5>
                        <ul>
                          <li>
                            <p>
                              Develop robust and scalable frontend solutions
                              using Angular framework, HTML, CSS, and
                              JavaScript.
                            </p>
                          </li>
                          <li>
                            <p>
                              Collaborate with designers and backend developers
                              to implement user interfaces that align with
                              project requirements and design specifications.
                            </p>
                          </li>

                          <li>
                            <p>
                              Write clean, modular, and maintainable code while
                              following coding best practices and standards.
                            </p>
                          </li>

                          <li>
                            <p>
                              Optimize application performance by identifying
                              and resolving frontend-related bottlenecks.
                            </p>
                          </li>

                          <li>
                            <p>
                              Conduct thorough testing of the user interfaces to
                              ensure functionality, responsiveness, and
                              cross-browser compatibility.
                            </p>
                          </li>

                          <li>
                            <p>
                              Collaborate with the UX/UI team to create
                              intuitive and visually appealing interfaces.
                            </p>
                          </li>

                          <li>
                            <p>
                              Stay updated with the latest frontend
                              technologies, tools, and trends, and actively
                              participate in knowledge sharing within the team.
                            </p>
                          </li>

                          <li>
                            <p>
                              Participate in code reviews to maintain code
                              quality, provide feedback, and suggest
                              improvements.
                            </p>
                          </li>

                          <li>
                            <p>
                              Troubleshoot and debug frontend issues to ensure
                              smooth application functionality.
                            </p>
                          </li>

                          <li>
                            <p>
                              Contribute to the overall software development
                              lifecycle by participating in requirements
                              gathering, sprint planning, and estimation.
                            </p>
                          </li>
                        </ul>
                        <h5>Experience: 3 Years Minimum</h5>
                        <div className="text-center text-lg-start">
                          <Link
                            href={"/contact-us"}
                            as={"/contact-us"}
                            className="btn btn-outline-dark"
                            role="button"
                          >
                            APPLY NOW
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#JavaDeveloper"
                        aria-expanded="false"
                        aria-controls="JavaDeveloper"
                      >
                        <span>Laravel / Fresher / Experience Developer</span>
                        <span>Bikaner, India</span>
                      </button>
                    </h2>
                    <div
                      id="JavaDeveloper"
                      className="accordion-collapse collapse"
                      data-bs-parent="#Developer"
                    >
                      <div className="accordion-body">
                        <h5>Role and Responsibility</h5>
                        <ul>
                          <li>
                            <p>
                              Experience in Java Server side development,
                              RestAPI development, Spring Boot and J2EE.
                            </p>
                          </li>
                          <li>
                            <p>
                              Software development experience in Python working
                              with Rest API's.
                            </p>
                          </li>

                          <li>
                            <p>
                              Experience working with API development tools such
                              as swagger.
                            </p>
                          </li>

                          <li>
                            <p>
                              Experience on creating unit and integration tests
                              using JUnit, Jasmine, SoapUI, or Selenium.
                            </p>
                          </li>

                          <li>
                            <p>
                              Experience working with Kubernetes, Docker, and
                              cloud deployment technologies.
                            </p>
                          </li>

                          <li>
                            <p>
                              Experience working with Kibana logging system and
                              debugging issues based on logs.
                            </p>
                          </li>

                          <li>
                            <p>
                              Experience in working with the AWS cloud platform.
                            </p>
                          </li>

                          <li>
                            <p>
                              Knowledge of DevOps concepts and process and CICD
                              tools such as Jenkins.
                            </p>
                          </li>

                          <li>
                            <p>Node.js experience is plus.</p>
                          </li>

                          <li>
                            <p>
                              Good communication skills and ability to present
                              technical information in a clear and concise
                              manner.
                            </p>
                          </li>

                          <li>
                            <p>
                              Software development experience in Python working
                              with Rest API's.
                            </p>
                          </li>
                        </ul>
                        <h5>Experience: 3 Years Minimum</h5>
                        <div className="text-center text-lg-start">
                          <Link
                            href={"/contact-us"}
                            as={"/contact-us"}
                            className="btn btn-outline-dark"
                            role="button"
                          >
                            APPLY NOW
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#DotNetDeveloper"
                        aria-expanded="false"
                        aria-controls="DotNetDeveloper"
                      >
                        <span>Dot Net / Fresher / Experience Developer</span>
                        <span>Bikaner, India</span>
                      </button>
                    </h2>
                    <div
                      id="DotNetDeveloper"
                      className="accordion-collapse collapse"
                      data-bs-parent="#Developer"
                    >
                      <div className="accordion-body">
                        <h5>Role and Responsibility</h5>
                        <ul>
                          <li>
                            <p>
                              Experience with modernizing .NET applications to
                              .NET Core.
                            </p>
                          </li>
                          <li>
                            <p>
                              Knowledge of Azure cloud platform and services.
                            </p>
                          </li>

                          <li>
                            <p>
                              Understanding of software version control systems,
                              such as Git or Subversion.
                            </p>
                          </li>

                          <li>
                            <p>
                              Collaborate with business stakeholders and
                              technical teams to gather and analyze requirements
                              for .NET Core applications.
                            </p>
                          </li>

                          <li>
                            <p>
                              Design, develop, and enhance software solutions
                              using .NET Core programming languages, including
                              C#, F#, and Visual Basic.
                            </p>
                          </li>

                          <li>
                            <p>
                              Write efficient and well-structured code to
                              implement business logic and functionality on the
                              .NET Core platform.
                            </p>
                          </li>

                          <li>
                            <p>
                              Perform unit testing and debugging to ensure the
                              quality and reliability of developed applications.
                            </p>
                          </li>
                          <li>
                            <p>
                              Maintain and enhance existing .NET Core
                              applications by troubleshooting issues,
                              implementing bug fixes, and optimizing
                              performance.{" "}
                            </p>
                          </li>

                          <li>
                            <p>
                              Collaborate with other developers, database
                              administrators, and system administrators to
                              integrate .NET Core applications with other
                              systems and databases.{" "}
                            </p>
                          </li>

                          <li>
                            <p>
                              Develop and maintain technical documentation,
                              including system design, coding standards, and
                              user manuals.
                            </p>
                          </li>

                          <li>
                            <p>
                              Stay updated with the latest .NET Core
                              technologies and industry trends and recommend
                              improvements or alternative solutions to enhance
                              system performance and efficiency.{" "}
                            </p>
                          </li>

                          <li>
                            <p>
                              Collaborate with cross-functional teams to support
                              system integration, data migration, and software
                              deployment activities.
                            </p>
                          </li>

                          <li>
                            <p>
                              Participate in code reviews and provide
                              constructive feedback to ensure adherence to
                              coding standards and best practices.
                            </p>
                          </li>
                          <li>
                            <p>
                              Proactively identify and address potential risks
                              or issues related to .NET Core applications and
                              propose appropriate solutions.{" "}
                            </p>
                          </li>

                          <li>
                            <p>
                              Familiarity with relational databases,
                              particularly SQL Server and MySQL.
                            </p>
                          </li>
                          <li>
                            <p>
                              Ability to prioritize and manage multiple tasks
                              and projects effectively{" "}
                            </p>
                          </li>

                          <li>
                            <p>
                              Knowledge of Azure cloud platform and services.
                            </p>
                          </li>
                          <li>
                            <p>
                              Knowledge of Azure cloud platform and services.
                            </p>
                          </li>
                        </ul>
                        <h5>Experience: 3 Years Minimum</h5>
                        <div className="text-center text-lg-start">
                          <Link
                            href={"/contact-us"}
                            as={"/contact-us"}
                            className="btn btn-outline-dark"
                            role="button"
                          >
                            APPLY NOW
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-South"
              role="tabpanel"
              aria-labelledby="pills-South-tab"
              tabindex="0"
            ></div>
            <div
              className="tab-pane fade"
              id="pills-Australia"
              role="tabpanel"
              aria-labelledby="pills-Australia-tab"
              tabindex="0"
            ></div>
            <div
              className="tab-pane fade"
              id="pills-Indore"
              role="tabpanel"
              aria-labelledby="pills-Indore-tab"
              tabindex="0"
            ></div>
            <div
              className="tab-pane fade"
              id="pills-Ratangarh"
              role="tabpanel"
              aria-labelledby="pills-Ratangarh-tab"
              tabindex="0"
            ></div>
          </div>
          {/* Team Country Eligible content end here... */}
        </section>
        {/* Team Eligibility Tabs section end here... */}

        {/* Mail Our Team section start here... */}
        <section className="mail-team">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-lg-10">
                  <div className="mail-content">
                    <p className="text-center">
                      Begin your professional journey with iWebwiser and write
                      your own success story with our amazing career
                      opportunities.
                    </p>
                    <div className="text-center">
                      <Link
                        className="btn btn-outline-dark"
                        role="button"
                        href={"mailto:Support@iwebwiser.com"}
                      >
                        Support@iwebwiser.com
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-none">
                  <div className="mail-img">
                    <MyImage
                      src="/assets/img/joinMailteam.webp"
                      alt="iwebwiser-are-looking-for-talented-people-to-join-our-team"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Mail Our Team section end here... */}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const teamData = {
    image_1:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/JoinTeam.svg",
  };

  return {
    props: {
      teamData,
    },
  };
}
export default JoinTeam;
