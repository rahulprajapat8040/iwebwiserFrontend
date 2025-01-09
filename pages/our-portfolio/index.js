import Layout from "@/Components/Common/Layout";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";

const Portfolio = (props) => {
  // let { scrollYProgress } = useScroll();
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Head>
        <title>
          Portfolio | Journey of Trust and Satisfaction - iWebwiser
        </title>
        <meta name="keywords" content="" />
        <meta
          name="description"
          content="Explore our successful projects and gain an intimated level of knowledge and experience of your industry. Partner with iWebwiser for secure IT future growth."
        />
        <link rel="canonical" href="https://www.iwebwiser.com/our-portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta name="twitter:title" content="Portfolio | Journey of Trust and Satisfaction - iWebwiser" />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta name="twitter:image" content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fportfolio3.webp&w=1920&q=75" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta property="og:title" content="Portfolio | Journey of Trust and Satisfaction - iWebwiser" />
        <meta property="og:url" content="https://www.iwebwiser.com/our-portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta property="og:image" content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fportfolio3.webp&w=1920&q=75" />
        <meta property="og:description" content="Explore our successful projects and gain an intimated level of knowledge and experience of your industry. Partner with iWebwiser for secure IT future growth." />

      </Head>
      <Layout>
        {/* Portfolio-home-section start here... */}
        <section className="Portfolio-home">
          <div className="max-content-width">
            <div className="Portfolio-home-bg">
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
                <h4>Portfolio</h4>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Portfolio-home-section end here... */}
        {/* All Projects Portfolio with tabs start here... */}
        <section className="project-portfolio">
          <div className="container-fluid">
            <h4>{props?.portfolioData?.heading_1}</h4>
            {/* portfolio-of-all project start here... */}
            <div className="container">
              {/* All industry-tabs start here... */}
              <ul
                className="nav nav-pills justify-content-start"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-5-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-5"
                    type="button"
                    role="tab"
                    aria-controls="pills-5"
                    aria-selected="false"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-4"
                    type="button"
                    role="tab"
                    aria-controls="pills-4"
                    aria-selected="false"
                  >
                    Healthcare & lifestyle
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-1"
                    aria-selected="true"
                  >
                    E-commerce system
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-2"
                    type="button"
                    role="tab"
                    aria-controls="pills-2"
                    aria-selected="false"
                  >
                    E-learning system
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-3"
                    type="button"
                    role="tab"
                    aria-controls="pills-3"
                    aria-selected="false"
                  >
                    Real state
                  </button>
                </li>
              </ul>
              {/* All industry-tabs end here... */}
            </div>
            <div>
              {/* All Industry project portfolio cards tab-pane content start here... */}
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade"
                  id="pills-1"
                  role="tabpanel"
                  aria-labelledby="pills-1-tab"
                  tabIndex={0}
                >
                  <div className="max-content-width">
                    {/* All Projects start here... */}
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio1.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo1.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              DELIVERY SERVICE
                            </span>
                            <h4 className="title">Green Central</h4>
                            <p className="card-para">
                              System for food, consumables, and brown goods
                              delivery space, where your business no longer has
                              to pay a percentage of the order to the aggregator
                              to fulfils your delivery
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio2.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo3.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              Floor & Furnishings
                            </span>
                            <h4 className="title">Floor and Furnishing</h4>
                            <p className="card-para">
                              F&F is a home furnishing brand with a vision of
                              giving each home its own identity. Our philosophy
                              is to help house owners reflect their
                              personalities through the home interiors.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio13.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/portfolioLogo13.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">Sports & Games</span>
                            <h4 className="title">Golfplayed</h4>
                            <p className="card-para">
                              A growing community of like minded golfers. keep
                              track of where you have played, who you have
                              played with and where you want to play!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* All Projects end here... */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-2"
                  role="tabpanel"
                  aria-labelledby="pills-2-tab"
                  tabIndex={0}
                >
                  <div className="max-content-width">
                    {/* All Projects start here... */}
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio3.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo2.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              E-Learning & Education
                            </span>
                            <h4 className="title">
                              The Arab Board of Health Specialisations | CPD
                            </h4>
                            <p className="card-para">
                              System for Trainees, Instructors, Speakers and
                              Universities, Including E-learning system.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/project2.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo7.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              E-learning system
                            </span>
                            <h4 className="title">ishango e-college</h4>
                            <p className="card-para">
                              System for take control of your destiny through
                              quality distance learning online Courses and
                              learnings
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* All Projects end here... */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-3"
                  role="tabpanel"
                  aria-labelledby="pills-3-tab"
                  tabIndex={0}
                >
                  <div className="max-content-width">
                    {/* All Projects start here... */}
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/TopstayPortfolio.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/TopstayLogo.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">Real state</span>
                            <h4 className="title">Top stay homes</h4>
                            <p className="card-para">
                              Top stay homes ability to add applicants looking
                              to rent or buy and the entry of properties for
                              sale or to rent will be fully accessible from the
                              mobile App and provide you with the individual
                              attention and service you deserve
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* All Projects end here... */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-4"
                  role="tabpanel"
                  aria-labelledby="pills-4-tab"
                  tabIndex={0}
                >
                  <div className="max-content-width">
                    {/* All Projects start here... */}
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/MaaPortfolio.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo4.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              Healthcare & lifestyle
                            </span>
                            <h4 className="title">
                              Mission against anemia (Anemia tracker)
                            </h4>
                            <p className="card-para">
                              A system for health concern for young girls and
                              boys across the country. to create awareness about
                              how these simple steps can have a huge and
                              long-lasting impact on this generation of girls
                              and boys and on the generations to come.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/project3.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo6.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              Healthcare & Lifestyle
                            </span>
                            <h4 className="title">Medifellows</h4>
                            <p className="card-para">
                              System provide a digital platform for the medical
                              community Social media platform that helps doctors
                              stay connected with other medical
                              para-professionals.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio10.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo8.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              Healthcare & Lifestyle
                            </span>
                            <h4 className="title">Health power medical</h4>
                            <p className="card-para">
                              System provide a digital platform for the medical
                              community Social media platform that helps doctors
                              stay connected with other medical
                              paraprofessionals
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio11.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo9.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              Healthcare & lifestyle
                            </span>
                            <h4 className="title">
                              Extraordinary hospital of Africa
                            </h4>
                            <p className="card-para">
                              Extraordinary Hospitals of Africa is a boutique
                              consultancy based in South Africa. My partners and
                              I bring more than 250 years of collective
                              healthcare experience to healthcare teams wishing
                              to grow and excel.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio12.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/portfolioLogo12.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              Healthcare & lifestyle
                            </span>
                            <h4 className="title">Kivunoir</h4>
                            <p className="card-para">
                              the Rwandan Red Bourbon Arabica. Kivu noir is
                              rated amongst the top 1% of the world’s highest
                              quality single estate coffees, for its
                              quintessential richness of flavour, freshness and
                              smooth texture.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* All Projects end here... */}
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="pills-5"
                  role="tabpanel"
                  aria-labelledby="pills-5-tab"
                  tabIndex={0}
                >
                  <div className="max-content-width">
                    {/* All Projects start here... */}
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio1.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo1.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              DELIVERY SERVICE
                            </span>
                            <h4 className="title">Green Central</h4>
                            <p className="card-para">
                              System for food, consumables, and brown goods
                              delivery space, where your business no longer has
                              to pay a percentage of the order to the aggregator
                              to fullfils your delivery.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio2.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo3.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              Floor & Furnishings
                            </span>
                            <h4 className="title">Floor and Furnishing</h4>
                            <p className="card-para">
                              F&F is a home furnishing brand with a vision of
                              giving each home its own identity. Our philosophy
                              is to help house owners reflect their
                              personalities through the home interiors.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio13.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/portfolioLogo13.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">Sports & Games</span>
                            <h4 className="title">Golfplayed</h4>
                            <p className="card-para">
                              A growing community of like minded golfers. keep
                              track of where you have played, who you have
                              played with and where you want to play!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio3.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo2.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              E-Learning & Education
                            </span>
                            <h4 className="title">
                              The Arab Board of Health Specialisations | CPD
                            </h4>
                            <p className="card-para">
                              System for Trainees, Instructors, Speakers and
                              Universities, Including E-learning system for the betterment of education infrastracture.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/project2.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo7.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              E-learning system
                            </span>
                            <h4 className="title">ishango e-college</h4>
                            <p className="card-para">
                              System for take controlof your destiny through
                              quality distance learning online curses and
                              learnings
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/MaaPortfolio.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo4.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              Healthcare & lifestyle
                            </span>
                            <h4 className="title">
                              Mission against anemia (Anemia tracker)
                            </h4>
                            <p className="card-para">
                              A system for health concern for young girls and
                              boys across the country. To create awareness about
                              how these simple steps can have a huge and
                              long-lasting impact on this generation of girls
                              and boys and on the generations to come.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/project3.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo6.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              Healthcare & Lifestyle
                            </span>
                            <h4 className="title">Medifellows</h4>
                            <p className="card-para">
                              Medifellows is a new social media platform based in Capetown. The nucleus of healthcare Collaboration, A new way to connect and engage with healthcare minds from around the world.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio10.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo8.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              Healthcare & Lifestyle
                            </span>
                            <h4 className="title">Health power medical</h4>
                            <p className="card-para">
                              System provide a digital platform for the medical
                              community Social media platform that helps doctors
                              stay connected with other medical
                              para-professionals.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio11.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/caseLogo9.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              Healthcare & lifestyle
                            </span>
                            <h4 className="title">
                              Extraordinary hospital of Africa
                            </h4>
                            <p className="card-para">
                              Extraordinary Hospitals of Africa is a boutique
                              consultancy based in South Africa. My partners and
                              I bring more than 250 years of collective
                              healthcare experience to healthcare teams wishing
                              to grow and excel.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/portfolio12.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/portfolioLogo12.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">
                              Healthcare & lifestyle
                            </span>
                            <h4 className="title">Kivunoir</h4>
                            <p className="card-para">
                              The Rwandan Red Bourbon Arabica. Kivu noir is
                              rated amongst the top 1% of the world’s highest
                              quality single estate coffees, for its
                              quintessential richness of flavour, freshness and
                              smooth texture.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="project-card">
                          <div className="project-img">
                            <MyImage
                              src="/assets/img/TopstayPortfolio.webp"
                              alt=""
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                            <div className="card-img-overlay">
                              <div className="overlay-text">
                                <div className="project-logo">
                                  <MyImage
                                    src="/assets/img/TopstayLogo.webp"
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <span className="logo-slogon">Real state</span>
                            <h4 className="title">Top stay homes</h4>
                            <p className="card-para">
                              Top stay homes ability to add applicants looking
                              to rent or buy and the entry of properties for
                              sale or to rent will be fully accessible from the
                              mobile App and provide you with the individual
                              attention and service you deserve.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* All Projects end here... */}
                  </div>
                </div>
              </div>
              {/* All Industry project portfolio cards tab-pane content end here... */}
            </div>
            {/* portfolio-of-all project end here... */}
          </div>
        </section>
        {/* All Projects Portfolio with tabs end here... */}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const portfolioData = {
    heading_1:
      "Choose a partner with intimate knowledge of your industry and first-hand experience of defining it's future",
    image_1:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/portfolio-2.png",
    image_2:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/Case-study-light (2).png",
    image_3:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/project (2).png",
    image_4:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/project-logo (2).png",
    image_5:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/portfolio-1.png",
    image_6:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/project-logo (4).png",
    image_7:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/case-study-4.png",
    image_8:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/Case-study-light (1).png",
    image_9:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/project (3).png",
    image_10:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/project-logo (1).png",
    image_11:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/project (1).png",
    image_12:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/project-logo (3).png",
  };
  return {
    props: {
      portfolioData,
    },
  };
}

export default Portfolio;
