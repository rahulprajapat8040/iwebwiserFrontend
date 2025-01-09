import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import Layout from "@/Components/Common/Layout";
import Head from "next/head";
// const Layout = dynamic(import("@/Components/Common/Layout"));

const ishangoCaseDetail = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref1, { once: true });

  return (
    <>
      <Layout>
        <Head>
          <title>Case Study | Ishango E-College - Education Platform</title>
          <meta name="keywords" content="" />
          <meta
            name="description"
            content="Ishango  E-College offers quality distance online complete learning programs that empower you to take control of your career and personal development."
          />
          <link
            rel="canonical"
            href="https://www.iwebwiser.com/ishango-e-college"
          />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iWebwiser" />
          <meta
            name="twitter:title"
            content="Case Study | Ishango E-College - Education Platform"
          />
          <meta name="twitter:site:id" content="@iWebwiser" />
          <meta name="twitter:creator" content="@iWebwiser" />
          <meta
            name="twitter:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FishangoAbout.webp&w=1920&q=75"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />

          <meta
            property="og:title"
            content="Case Study | Ishango E-College - Education Platform"
          />
          <meta
            property="og:url"
            content="https://www.iwebwiser.com/ishango-e-college"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="iWebwiser" />
          <meta
            property="og:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FishangoAbout.webp&w=1920&q=75"
          />
          <meta
            property="og:description"
            content="Ishango E-College offers quality distance online complete learning programs that empower you to take control of your career and personal development."
          />
        </Head>

        {/* Case-Studies-Home-section start here... */}
        <section className="case-view-home">
          <div className="max-content-width">
            <div className="case-view-home-bg">
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
                <p>
                  Ishango E-College will empower you to take control of your
                  career and personal development by offering quality distance
                  learning.
                </p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 1.5 },
                  visible: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 1.5 },
                }}
                initial="hidden"
                animate={"visible"}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="case-logo"
              >
                <MyImage
                  src="/assets/img/IshangoLogo.webp"
                  alt="ViewCase-logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Case-Studies-Home-section end here... */}
        {/* Project Detail section start here... */}
        <section className="project-detail">
          <div className="max-content-width">
            <div className="container-fluid">
              {/* Case Detaill Breadcrumb Navigation section start here... */}
              <div className="project-navigation">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link
                        href={"/case-study-unlock-your-solutions"}
                        as={"/case-study-unlock-your-solutions"}
                      >
                        Case study
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <span>Ishango</span>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Case Detaill Breadcrumb Navigation section end here... */}
              <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                  <div className="project-detail-text">
                    <h5>E-learning & Education</h5>
                    <h4>Ishango E-College</h4>
                    <p>
                      Ishango College identified this need, and what followed
                      for several years was the extensive development of
                      software and educational platforms, including virtual
                      education material, online assessment tools, e-commerce
                      platforms, and a prospectus of proficiency courses. Our
                      new logo and website were officially launched in 2021.
                      Ishango College will empower you to take control of your
                      career and personal development by offering quality
                      distance learning programs which can be completed online.
                    </p>
                    <p>
                      Everybody wants to increase their earning potential. The
                      best way to improve our future opportunities and our
                      standard of living is to increase our knowledge and skills
                      through study to improve our chances of being employed,
                      promoted or to start our own business.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="project-avaliblity">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <th>
                            <p>Client:</p>
                          </th>
                          <td>
                            <p>South Africa</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Industry:</p>
                          </th>
                          <td>
                            <p>E-learning</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Language</p>
                          </th>
                          <td>
                            <p>English</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Website</p>
                          </th>
                          <td>
                            <Link
                              href="https://ishangocollege.co.za"
                              target="_blank"
                              className="btn"
                            >
                              ishangocollege.co.za
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Project Detail section end here... */}
        {/* Project Slide section start here... */}
        <section className="project-slide">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row justify-content-between align-items-center">
                <div className="col-12 col-lg-7 px-0">
                  <div className="project-slide-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/ishangoAbout.webp"
                      alt="about-case-view"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div ref={ref1} className="col-12 col-lg-5 px-0">
                  <motion.div
                    style={{
                      transform: isInView1 ? "scaleY(1)" : "scaleY(0.4)",
                      opacity: isInView1 ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
                    }}
                    className="project-slide-text"
                  >
                    <h4
                      style={{
                        transform: isInView2
                          ? "translateY(0px)"
                          : "translateY(100px)",
                        opacity: isInView2 ? 1 : 0,
                        transition:
                          "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.2s",
                      }}
                    >
                      Improve your earning potential and career prospects by
                      completing one of our tailor-made proficiency courses.
                    </h4>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Project Slide section end here... */}
        {/* System Features section start here... */}
        <section className="system-features">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                  <div className="feature-text">
                    <h4>System Features</h4>
                    <ul className="list-unstyled">
                      <li>
                        <p>Enroll course of your choice.</p>
                      </li>
                      <li>
                        <p>Advance your Career.</p>
                      </li>
                      <li>
                        <p>Develop your Professional Potential.</p>
                      </li>
                      <li>
                        <p>
                          Share your success stories and learning experiences.
                        </p>
                      </li>
                      <li>
                        <p>Revise for Matrix.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 order-1 order-lg-2">
                  <div className="feature-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/IshangoFeatured.webp"
                      alt="case-Featured"
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
        {/* System Features section end here... */}
        {/* Technology stack section start here... */}
        <section className="technology-stack d-none">
          <div className="max-content-width">
            <div className="container-fluid">
              <h4>Technology stack</h4>
              <div className="row">
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack-card">
                    <div className="technology-stack-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://aws.amazon.com/free/?trk=14a4002d-4936-4343-8211-b5a150ca592b&sc_channel=ps&ef_id=CjwKCAjw-vmkBhBMEiwAlrMeFwbibSOiLODJlRZqTDQ6EhShGoo-WdXw_1qiXoa3CzmjNgUUB2_RkBoCmecQAvD_BwE:G:s&s_kwcid=AL!4422!3!453325184782!e!!g!!aws!10712784856!111477279771"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (1).webp"
                          alt="technology-stack"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack-card">
                    <div className="technology-stack-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://nodejs.org/en"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (5).webp"
                          alt="technology-stack"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack-card">
                    <div className="technology-stack-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://react.dev/"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (4).webp"
                          alt="technology-stack"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack-card">
                    <div className="technology-stack-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://www.mysql.com/"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (3).webp"
                          alt="technology-stack"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack-card">
                    <div className="technology-stack-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://laravel.com/"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (2).webp"
                          alt="technology-stack"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technology stack section end here... */}
      </Layout>
    </>
  );
};

export default ishangoCaseDetail;
