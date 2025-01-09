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

  return (
    <>
      <Layout>
        <Head>
          <title>Case Study | Kivu Noir - Exclusive Estate Coffee Beans</title>
          <meta name="keywords" content="" />
          <meta
            name="description"
            content="Kivu noir is rated among the top 1% of the world’s highest-quality single estate coffees for its quintessential richness of flavour, freshness, and smooth texture."
          />
          <link rel="canonical" href="https://www.iwebwiser.com/kivu-noir" />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iWebwiser" />
          <meta
            name="twitter:title"
            content="Case Study | Kivu Noir - Exclusive Estate Coffee Beans"
          />
          <meta name="twitter:site:id" content="@iWebwiser" />
          <meta name="twitter:creator" content="@iWebwiser" />
          <meta
            name="twitter:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fkivuabout.webp&w=1920&q=75"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />

          <meta
            property="og:title"
            content="Case Study | Kivu Noir - Exclusive Estate Coffee Beans"
          />
          <meta
            property="og:url"
            content="https://www.iwebwiser.com/kivu-noir"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="iWebwiser" />
          <meta
            property="og:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fkivuabout.webp&w=1920&q=75"
          />
          <meta
            property="og:description"
            content="Kivu noir is rated among the top 1% of the world’s highest-quality single estate coffees for its quintessential richness of flavour, freshness, and smooth texture."
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
                <p>Kivu noir Freshest Coffee in The World.</p>
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
                  src="/assets/img/portfolioLogo12.webp"
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
                      <span>KIVUNOIR </span>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Case Detaill Breadcrumb Navigation section end here... */}
              <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                  <div className="project-detail-text">
                    <h5>Healthcare & lifestyle</h5>
                    <h4>KIVU NOIR</h4>
                    <p>
                      In the center of Africa, 4,800 ft above sea level, you
                      will find Rwanda’s deepest body of water, lake Kivu. A
                      dark secret lies beneath the water. Lake Kivu’s bed sits
                      upon a rift valley, slowly being pulled apart, causing
                      volcanic activity.
                    </p>
                    <p>
                      In the rich volcanic soils that line the shores of Lake
                      Kivu, one of the world’s most exclusive coffee beans is
                      the Rwanda Red Bourbon Arabica. Kivu noir is rated amongst
                      the top 1% of the world’s highest quality single estate
                      coffees for its quintessential richness of flavour,
                      freshness and smooth texture. Typically, Kivu noir takes
                      one month from harvest to cup, whereas other coffees can
                      take up to 20 years from crop to cup.
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
                            <p>South Arica</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Industry:</p>
                          </th>
                          <td>
                            <p>Healthcare & lifestyle</p>
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
                            <p>Website:</p>
                          </th>
                          <td>
                            <Link
                              href="https://kivunoir.coffee/"
                              className="btn"
                              target="_blank"
                            >
                              kivunoir.coffee
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
              <div className="row justify-content-between">
                <div className="col-12 col-lg-6 px-0">
                  <div className="project-slide-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/kivuabout.webp"
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
                      The world’s highest quality single estate coffees are
                      known for their quintessential richness of flavour,
                      freshness, and smooth texture.
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
              <div className="row justify-content-center justify-content-lg-between align-items-center">
                <div className="col-12 col-lg-5 order-2 order-lg-1">
                  <div className="feature-text">
                    <h4>System Features</h4>
                    <ul className="list-unstyled">
                      <li>
                        <p>Growing Coffee and Delivering It to You Freshest.</p>
                      </li>
                      <li>
                        <p>Shop Now with an Easy Process.</p>
                      </li>
                      <li>
                        <p>Avaliblity all Around the World.</p>
                      </li>
                      <li>
                        <p>Multiple Payments Avaliblie.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 order-1 order-lg-2">
                  <div className="feature-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/kivuFeatured.webp"
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
