import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import Layout from "@/Components/Common/Layout";
import Head from "next/head";
// const Layout = dynamic(import("@/Components/Common/Layout"));

const CaseDetail = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref1, { once: true });
  const isInView3 = useInView(ref1, { once: true });
  const isInView4 = useInView(ref1, { once: true });

  return (
    <>
      <Layout>
        <Head>
          <title>
            Case Study | MediFellows - Connect with Healthcare Minds
          </title>
          <meta name="keywords" content="" />
          <meta
            name="description"
            content="MediFellows provides a digital platform for the medical community that helps doctors stay connected and collaborate with other medical professionals"
          />
          <link rel="canonical" href="https://www.iwebwiser.com/medi-fellows" />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iWebwiser" />
          <meta
            name="twitter:title"
            content="Case Study | MediFellows - Connect with Healthcare Minds"
          />
          <meta name="twitter:site:id" content="@iWebwiser" />
          <meta name="twitter:creator" content="@iWebwiser" />
          <meta
            name="twitter:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FmedifellowAbout.webp&w=1920&q=75"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />

          <meta
            property="og:title"
            content="Case Study | MediFellows - Connect with Healthcare Minds"
          />
          <meta
            property="og:url"
            content="https://www.iwebwiser.com/medi-fellows"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="iWebwiser" />
          <meta
            property="og:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FmedifellowAbout.webp&w=1920&q=75"
          />
          <meta
            property="og:description"
            content="MediFellows provides a digital platform for the medical community that helps doctors stay connected and collaborate with other medical professionals."
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
                  The nucleus of medical collaboration is a new way to connect
                  and engage with medical minds around the world.
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
                  src="/assets/img/medifellowCaseLogo.webp"
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
                      <span>medifellows</span>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Case Detaill Breadcrumb Navigation section end here... */}
              <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                  <div className="project-detail-text">
                    <h5>Healthcare & Lifestyle</h5>
                    <h4>Medifellows</h4>
                    <p>
                      MediFellows is a new social media platform that helps 
                      doctors stay connected with other medical professionals.
                      It  provides a digital platform for the medical community
                      that  offers easy access, credible content, and
                      productive  interaction within the industry. In less than
                      five months, over 550 screens were designed  from scratch.
                      No mean feat! The iWebwiser crew worked  with a global
                      development team to bring both the mobile and  web apps to
                      life in this short time frame. The iWebwiser team designed
                      the brand’s look and feel,  including the iconic
                      MediFellows logo, setting the scene for  the global launch
                      that will establish MediFellows as one of  the best new
                      apps around.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="project-avaliblity">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <th>
                            <p>Client</p>
                          </th>
                          <td>
                            <p>Fiona Cape Town , South Africa </p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Platform Users</p>
                          </th>
                          <td>
                            <p>10k+</p>
                          </td>
                        </tr>
                        {/* <tr>
                          <th>
                            <p>Duration</p>
                          </th>
                          <td>
                            <p>11 months</p>
                          </td>
                        </tr> */}
                        <tr>
                          <th>
                            <p>Apps</p>
                          </th>
                          <td>
                            <a href="https://medifellows.com/" className="btn">
                              <MyImage
                                src="/assets/img/google-play.webp"
                                alt="google-play"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a>
                            <a href="https://medifellows.com/" className="btn">
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
                <div className="col-12 col-lg-7 px-0">
                  <div className="project-slide-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/medifellowAbout.webp"
                      alt="about-case-view"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div ref={ref1} className="col-12 col-lg-5 px-0">
                  <div className="project-slide-text">
                    <div>
                      <h3
                        style={{
                          transform: isInView1
                            ? "translateY(0px)"
                            : "translateY(100px)",
                          opacity: isInView1 ? 1 : 0,
                          transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.2s",
                        }}
                      >
                        Challenge
                      </h3>
                      <p
                        style={{
                          transform: isInView2
                            ? "translateY(0px)"
                            : "translateY(100px)",
                          opacity: isInView2 ? 1 : 0,
                          transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.2s",
                        }}
                      >
                        MediFellows is not just another social media platform;
                        it's a digital hub meticulously crafted to cater
                        specifically to the needs of healthcare professionals.
                        With seamless access, reliable content, and meaningful
                        interactions, it's poised to redefine medical
                        networking.
                      </p>
                      <p
                        style={{
                          transform: isInView2
                            ? "translateY(0px)"
                            : "translateY(100px)",
                          opacity: isInView2 ? 1 : 0,
                          transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.2s",
                        }}
                      >
                        In a remarkable feat of innovation, the iWebwiser team
                        spearheaded the design and development of over 550
                        screens for mobile and web applications within a mere
                        five months. Collaborating with a global development
                        team, they brought MediFellows' vision to life, creating
                        an intuitive interface and the iconic MediFellows logo
                        that set the stage for its global launch.
                      </p>
                    </div>
                    <div>
                      <h3
                        style={{
                          transform: isInView3
                            ? "translateY(0px)"
                            : "translateY(100px)",
                          opacity: isInView3 ? 1 : 0,
                          transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.2s",
                        }}
                      >
                        Solution
                      </h3>
                      <p
                        style={{
                          transform: isInView4
                            ? "translateY(0px)"
                            : "translateY(100px)",
                          opacity: isInView4 ? 1 : 0,
                          transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.2s",
                        }}
                      >
                        The solution lies in creating a bespoke digital
                        ecosystem tailored for healthcare professionals.
                        MediFellows offers a range of features catering
                        exclusively to the medical fraternity, including:
                      </p>

                      <ul>
                        <li>
                          <p>Posts showcasing new research by doctors.</p>
                        </li>
                        <li>
                          <p>Collaborative inputs from peers.</p>
                        </li>
                        <li>
                          <p>Facilitation of meetings and events.</p>
                        </li>
                        <li>
                          <p>Job postings within the medical field.</p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            A dedicated marketplace for medical and surgical
                            suppliers.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                    <h4>Impact</h4>
                    <h5>Business Impact:</h5>
                    <p className="description">
                      MediFellows has made waves in the market, earning college
                      accolades and becoming an integral part of medical
                      education. Students now have a platform to engage with
                      industry experts, follow their research, and participate
                      in meaningful discussions. The platform's launch at KZN
                      College has laid the groundwork for further expansion
                      despite initial marketing challenges.
                    </p>

                    <h5>User Impact:</h5>
                    <p className="description">
                      MediFellows offers a transformative experience for
                      healthcare professionals, enabling seamless networking,
                      knowledge sharing, and collaboration within the medical
                      community. It empowers doctors to stay updated on the
                      latest research, connect with peers globally, and access
                      job opportunities and essential supplies—all within a
                      secure and tailored digital environment. Additionally, for
                      students, it provides a unique opportunity to engage with
                      industry experts, expand their knowledge, and establish
                      valuable connections early in their careers, ultimately
                      shaping the future of healthcare.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 order-1 order-lg-2">
                  <div className="feature-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/medifellowFeatured.webp"
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

        {/* System phases section start here... */}
        <section className="system-phase technology-stack">
          <div className="max-14-content">
            <h3 className="title">System phases</h3>
            <div className="phase-content">
              <div>
                <h4 className="content-title">Phase -1</h4>
                <ul className="border-right">
                  <li>
                    <p>User Signup</p>
                  </li>
                  <li>
                    <p>User Login</p>
                  </li>
                  <li>
                    <p>Forgot Password</p>
                  </li>
                  <li>
                    <p>User Account/Profile Building and</p>
                  </li>
                  <li>
                    <p>Editing</p>
                  </li>
                  <li>
                    <p>Fellow/Unfollow</p>
                  </li>
                  <li>
                    <p>Follow/Unfollow</p>
                  </li>
                  <li>
                    <p>Account Settings/Preference</p>
                  </li>
                  <li>
                    <p>News Feed</p>
                  </li>
                  <li>
                    <p>Chat</p>
                  </li>
                  <li>
                    <p>Push Notifications</p>
                  </li>
                  <li>
                    <p>Email Templates</p>
                  </li>
                  <li>
                    <p>Business Pages</p>
                  </li>
                  <li>
                    <p>Groups</p>
                  </li>
                  <li>
                    <p>Notifications related to modules</p>
                  </li>
                  <li>
                    <p>Email templates related to modules</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="content-title">Phase -2</h4>
                <ul className="border-right">
                  <li>
                    <p>Events</p>
                  </li>
                  <li>
                    <p>Push Notifications</p>
                  </li>
                  <li>
                    <p>Email Notifications</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="content-title">Phase -3</h4>
                <ul className="border-right">
                  <li>
                    <p>Job Portal</p>
                  </li>
                  <li>
                    <p>Notifications related to</p>
                  </li>
                  <li>
                    <p>modules</p>
                  </li>
                  <li>
                    <p>Email templates related to</p>
                  </li>
                  <li>
                    <p>modules</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="content-title">Phase -4</h4>
                <ul>
                  <li>
                    <p>MarketPlace</p>
                  </li>
                  <li>
                    <p>Notifications related to</p>
                  </li>
                  <li>
                    <p>modules</p>
                  </li>
                  <li>
                    <p>Email templates related to</p>
                  </li>
                  <li>
                    <p>modules</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* System phases section end here... */}

        {/* Certification content section start here... */}
        <section className="system-phase certification technology-stack">
          <div className="max-14-content">
            <h4 className="title">Client satisfaction and project success</h4>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 mt-5 mt-md-0">
                  <div className="certicate-card card">
                    <div className="card-img">
                      <MyImage
                        src="/assets/img/certificate (3).webp"
                        alt="technology-stack"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 mt-5 mt-md-0">
                  <div className="certicate-card card">
                    <div className="card-img">
                      <MyImage
                        src="/assets/img/certificate (1).webp"
                        alt="technology-stack"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 mt-5 mt-md-0">
                  <div className="certicate-card card">
                    <div className="card-img">
                      <MyImage
                        src="/assets/img/certificate (2).webp"
                        alt="technology-stack"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Certification content section end here... */}
      </Layout>
    </>
  );
};

export default CaseDetail;
