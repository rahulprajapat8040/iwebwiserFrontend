import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Layout from "@/Components/Common/Layout";
// const Layout = dynamic(import("@/Components/Common/Layout"));
import { motion, useInView } from "framer-motion";
import Head from "next/head";

const CaseDetail = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref1, { once: true });

  return (
    <>
      <Layout>
        <Head>
          <title>Case Study | Mission Against Anemia - Anemia Tracker</title>
          <meta name="keywords" content="" />
          <meta
            name="description"
            content=" iWebwiser developed an Anemia Tracker, a healthcare app that connects you with the healthcare industry & makes you aware about their latest developments."
          />
          <link
            rel="canonical"
            href="https://www.iwebwiser.com/mission-against-anemia-tracker"
          />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iWebwiser" />
          <meta
            name="twitter:title"
            content="Case Study | Mission Against Anemia - Anemia Tracker"
          />
          <meta name="twitter:site:id" content="@iWebwiser" />
          <meta name="twitter:creator" content="@iWebwiser" />
          <meta
            name="twitter:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FANMabout.webp&w=1920&q=75"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />

          <meta
            property="og:title"
            content="Case Study | Mission Against Anemia - Anemia Tracker"
          />
          <meta
            property="og:url"
            content="https://www.iwebwiser.com/mission-against-anemia-tracker"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="iWebwiser" />
          <meta
            property="og:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FANMabout.webp&w=1920&q=75"
          />
          <meta
            property="og:description"
            content="iWebwiser developed an Anemia Tracker, a healthcare app that connects you with the healthcare industry & makes you aware about their latest developments."
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
                  Health concern for young girls and boys across the country
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
                  src="/assets/img/ANMlogo.webp"
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
                      <span>Anemia</span>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Case Detaill Breadcrumb Navigation section end here... */}
              <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                  <div className="project-detail-text">
                    <h5>Healthcare & Lifestyle</h5>
                    <h4>Mission against anemia (Anemia tracker)</h4>
                    <p>
                      Anemia tracker is a crucial health concern for young girls
                      and boys nationwide. But it has a simple, workable
                      solution – Blue Iron Folic Acid (IFA) tablets once a week
                      and deworming tablets every six months. It is that simple.
                      We need to create awareness about how these simple steps
                      can have a huge and long-lasting impact on this generation
                      of girls and boys and the generations to come.
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
                            <p>India</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Industry:</p>
                          </th>
                          <td>
                            <p>Healthcare & Lifestyle</p>
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
                            <p>Apps</p>
                          </th>
                          <td>
                            <a
                              href="https://bikaner.raj.nic.in/maa/students_login"
                              className="btn"
                            >
                              <MyImage
                                src="/assets/img/google-play.webp"
                                alt="google-play"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a>
                            <a
                              href="https://bikaner.raj.nic.in/maa/students_login"
                              className="btn"
                            >
                              <MyImage
                                src="/assets/img/apple-store.webp"
                                alt="apple-store"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a>
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
              <div className="row justify-content-between">
                <div className="col-12 col-lg-6 px-0">
                  <div className="project-slide-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/ANMabout.webp"
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
                      The mission aims to eliminate sickle cell anemia and save
                      the lives of 2.5 lakh affected children and families.
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
                <div className="col-12 col-lg-7 order-2 order-lg-1">
                  <div className="feature-text">
                    <h4>System Features</h4>
                    <ul className="list-unstyled">
                      <li>
                        <p>
                          Multiple businesses for single business owners stay
                          abreast of the latest developments with the news of
                          your fellows on your timeline.
                        </p>
                      </li>
                      <li>
                        <p>
                          Connect with your Fellows globally and stay connected
                          to them and their active cases.
                        </p>
                      </li>
                      <li>
                        <p>
                          Share and collaborate on information securely and
                          privately through our encrypted MediChat.
                        </p>
                      </li>
                      <li>
                        <p>
                          Connect with the healthcare industry and stay informed
                          about its latest developments.
                        </p>
                      </li>
                      <li>
                        <p>
                          Explore or set up your own virtual event and engage
                          with consenting professionals.
                        </p>
                      </li>
                      <li>
                        <p>
                          Conveniently manage your CPD activity for attended
                          events.
                        </p>
                      </li>
                      <li>
                        <p>
                          Control your privacy settings and manage your
                          professional profile within the industry.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 order-1 order-lg-2">
                  <div className="feature-img">
                    <MyImage
                      className="w-100 rounded-5"
                      src="/assets/img/ANMFeatured.webp"
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
                  <div className="technology-stack d-none-card">
                    <div className="technology-stack d-none-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://aws.amazon.com/free/?trk=14a4002d-4936-4343-8211-b5a150ca592b&sc_channel=ps&ef_id=CjwKCAjw-vmkBhBMEiwAlrMeFwbibSOiLODJlRZqTDQ6EhShGoo-WdXw_1qiXoa3CzmjNgUUB2_RkBoCmecQAvD_BwE:G:s&s_kwcid=AL!4422!3!453325184782!e!!g!!aws!10712784856!111477279771"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (1).webp"
                          alt="technology-stack d-none"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack d-none-card">
                    <div className="technology-stack d-none-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://nodejs.org/en"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (5).webp"
                          alt="technology-stack d-none"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack d-none-card">
                    <div className="technology-stack d-none-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://react.dev/"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (4).webp"
                          alt="technology-stack d-none"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack d-none-card">
                    <div className="technology-stack d-none-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://www.mysql.com/"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (3).webp"
                          alt="technology-stack d-none"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack d-none-card">
                    <div className="technology-stack d-none-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://laravel.com/"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (2).webp"
                          alt="technology-stack d-none"
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

export default CaseDetail;
