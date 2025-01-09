import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import Layout from "@/Components/Common/Layout";
import Head from "next/head";
// const Layout = dynamic(import("@/Components/Common/Layout"));

const golfPlayedCaseDetail = (props) => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref1, { once: true });
  const isInView3 = useInView(ref1, { once: true });
  const isInView4 = useInView(ref1, { once: true });

  return (
    <>
      <Layout>
        <Head>
          <title>Case Study | Golfplayed - Connecting Golfers Globally </title>
          <meta name="keywords" content="" />
          <meta
            name="description"
            content="GolfPlayed assists golfers to play golf courses and create the ultimate global golf community by linking you up with our members around the world. "
          />
          <link rel="canonical" href="https://www.iwebwiser.com/golf-played" />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iWebwiser" />
          <meta
            name="twitter:title"
            content="Case Study | Golfplayed - Connecting Golfers Globally "
          />
          <meta name="twitter:site:id" content="@iWebwiser" />
          <meta name="twitter:creator" content="@iWebwiser" />
          <meta
            name="twitter:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FgolfPlayedabout.webp&w=1920&q=75"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />

          <meta
            property="og:title"
            content="Case Study | Golfplayed - Connecting Golfers Globally "
          />
          <meta
            property="og:url"
            content="https://www.iwebwiser.com/golf-played"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="iWebwiser" />
          <meta
            property="og:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FgolfPlayedabout.webp&w=1920&q=75"
          />
          <meta
            property="og:description"
            content="GolfPlayed assists golfers to play golf courses and create the ultimate global golf community by linking you up with our members around the world."
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
                <p>The Ultimate Global Golf Community.</p>
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
                  src="/assets/img/portfolioLogo13.webp"
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
                      <span>Golfplayed</span>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Case Detaill Breadcrumb Navigation section end here... */}
              <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                  <div className="project-detail-text">
                    <h5>Sports & Games</h5>
                    <h4>Golf played</h4>
                    <p>
                      With over 30 years of experience in the industry and over
                      60,000 users on our app, we have got your golfing needs
                      covered. We assist golfers in playing private or public
                      golf courses globally. This is done through our concierge
                      service, which links you up with our members around the
                      world. Start your journey with GolfPlayed.
                    </p>
                    <p>
                      The vision of GolfPlayed is to create The Ultimate Global
                      Golf Community by establishing a database of like-minded
                      individuals who record, recall, and relive their golfing
                      experiences, share these with friends, and track
                      performance through stats, leaderboards, and flexible
                      reports.
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
                            <p>South Arica</p>
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
                        <tr>
                          <th>
                            <p>Mobile app:</p>
                          </th>
                          <td>
                            <a
                              href="https://www.golfplayed.com/"
                              className="btn"
                            >
                              <MyImage
                                src={props.caseDetailData.image_2}
                                alt="google-play"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a>
                            <a
                              href="https://www.golfplayed.com/"
                              className="btn"
                            >
                              <MyImage
                                src={props.caseDetailData.image_3}
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
                      src="/assets/img/golfPlayedabout.webp"
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
                        There are so many application that were currently
                        available in market related to social communication,
                        like face book, LinkedIn, Whatsapp, where we can also
                        create different groups related to different categories.
                        Our challenge was to develop a system and make to
                        popular with their unique functionalities. Our initial
                        market was South Africa and Delaware, for Medical
                        communities and Doctors.
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
                        We focused on creating a community or a digital system
                        where the client base must be the part of medical
                        community, where only medical related things like: Posts
                        related New research work by a doctor Inputs by other
                        doctors People can meet and decide for a meeting through
                        app People can have an event and can invite other
                        members from the system or outside from the system, and
                        make them the part of it Jobs can be posted, and people
                        can apply A market place for Medical or surgical
                        suppliers, where they can buy an sell. after doing our
                        study with strong references like Facebook, LinkedIn,
                        Whatsapp, we have started designing our system
                        accordingly.
                      </p>
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
              <div className="row justify-content-center justify-content-lg-between align-items-center">
                <div className="col-12 col-lg-5 order-2 order-lg-1">
                  <div className="feature-text">
                    <h4>System Features</h4>
                    <ul className="list-unstyled">
                      <li>
                        <p>
                          Keep track of how many golf courses you have played
                          around the world.
                        </p>
                      </li>
                      <li>
                        <p>Global Concierge Service.</p>
                      </li>
                      <li>
                        <p>Track performance through leaderboards.</p>
                      </li>
                      <li>
                        <p>Request To Play Any Course.</p>
                      </li>
                      <li>
                        <p>Personal Introductions To Members.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 order-1 order-lg-2">
                  <div className="feature-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/golfPlayedfeatured.webp"
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
                          src={props.caseDetailData.image_10}
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
                          src={props.caseDetailData.image_11}
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
                          src={props.caseDetailData.image_12}
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
                          src={props.caseDetailData.image_13}
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
                          src={props.caseDetailData.image_14}
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

export async function getStaticProps() {
  const caseDetailData = {
    image_1: "/assets/img/ViewCase-logo.png",
    image_2: "/assets/img/google-play.webp",
    image_3: "/assets/img/apple-store.webp",
    image_4: "/assets/img/google-play.webp",
    image_5: "/assets/img/apple-store.webp",
    image_6: "/assets/img/google-play.webp",
    image_7: "/assets/img/apple-store.webp",
    image_8: "/assets/img/about-case-view.png",
    image_9: "/assets/img/case-Featured.png",
    image_10: "/assets/img/Technology stack (1).webp",
    image_11: "/assets/img/Technology stack (5).webp",
    image_12: "/assets/img/Technology stack (4).webp",
    image_13: "/assets/img/Technology stack (3).webp",
    image_14: "/assets/img/Technology stack (2).webp",
  };
  return {
    props: {
      caseDetailData,
    },
  };
}

export default golfPlayedCaseDetail;
