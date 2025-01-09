import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import Layout from "@/Components/Common/Layout";
import Head from "next/head";
// const Layout = dynamic(import("@/Components/Common/Layout"));

const Topstay = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  return (
    <>
      <Layout>
        <Head>
          <title>Case Study | Top Stay - Explore Unique Properties</title>
          <meta name="keywords" content="" />
          <meta
            name="description"
            content="At Top Stay Homes, you are No. 1, whether you are a property owner, tenant or buyer. We provide you with the individual attention and service you deserve."
          />
          <link
            rel="canonical"
            href="https://www.iwebwiser.com/top-stay-homes"
          />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iWebwiser" />
          <meta
            name="twitter:title"
            content="Case Study | Top Stay - Explore Unique Properties"
          />
          <meta name="twitter:site:id" content="@iWebwiser" />
          <meta name="twitter:creator" content="@iWebwiser" />
          <meta
            name="twitter:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FTopstayAbout.webp&w=1920&q=75"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />

          <meta
            property="og:title"
            content="Case Study | Top Stay - Explore Unique Properties"
          />
          <meta
            property="og:url"
            content="https://www.iwebwiser.com/top-stay-homes"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="iWebwiser" />
          <meta
            property="og:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FTopstayAbout.webp&w=1920&q=75"
          />
          <meta
            property="og:description"
            content="At Top Stay Homes, you are No. 1, whether you are a property owner, tenant or buyer. We provide you with the individual attention and service you deserve."
          />
        </Head>

        {/* Case-Studies-Home-section start here... */}
        <section className="case-view-home">
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
              <p>Explore Unique Properties In Top Regions.</p>
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
                src="/assets/img/TopstayMainLogo.webp"
                alt="ViewCase-logo"
                width={0}
                height={0}
                sizes="100vw"
              />
            </motion.div>
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
                      <span>Topstayhomes</span>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Case Detaill Breadcrumb Navigation section end here... */}
              <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                  <div className="project-detail-text">
                    <h5>Real Estate</h5>
                    <h4>Top Stay Homes</h4>
                    <p>
                      Top Stay Homes family has been in the Real Estate
                      Industry, serving clients ‘needs for over 40 years. Top
                      Stay Homes, you are number one; whether you are a Property
                      Owner, Tenant, or buyer, we value your business and will
                      provide you with the individual attention and service you
                      deserve. We believe in integrity, commitment to
                      excellence, a professional attitude, and personalized
                      care.
                    </p>
                    <p>
                      The idea is to develop a system with a bespoke APP and
                      integrated website with a CRM system to facilitate in the
                      running of a Real Estate Business. The key to its success
                      will be its property matching database, which will offer
                      the user more search criteria and allow for a more
                      specific search. The ability to add applicants looking to
                      rent or buy and the entry of properties for sale or to
                      rent will be fully accessible from the mobile App. At the
                      same time, the database should be fully integrated with a
                      back office admin system, allowing entry and checking of
                      data and a reporting system to facilitate the running of
                      the real estate business.
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
                            <p>Cyprus</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Industry:</p>
                          </th>
                          <td>
                            <p>Real State</p>
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
                              target="blank"
                              href="https://topstayhomes.com/"
                              className="btn"
                            >
                              Topstayhomes.com
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
              <div className="row justify-content-center align-items-center">
                <div ref={ref1} className="col-12 px-0">
                  <motion.div
                    style={{
                      transform: isInView1
                        ? "translateY(0px)"
                        : "translateY(100px)",
                      opacity: isInView1 ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
                    }}
                    className="project-slide-img"
                  >
                    <MyImage
                      className="w-100"
                      src="/assets/img/TopstayAbout.webp"
                      alt="about-case-view"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
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
                        <p>Browse Properties by Location.</p>
                      </li>
                      <li>
                        <p>
                          A manual search feature will allow the agent to search
                          for property when an enquiry is made.
                        </p>
                      </li>
                      <li>
                        <p>
                          When a property is physically viewed/visited, the
                          owner is automatically notified with any feedback.
                        </p>
                      </li>
                      <li>
                        <p>
                          The system will report on a daily basis and prompt the
                          user when action is needed for follow ups etc.
                        </p>
                      </li>
                      <li>
                        <p>
                          When a new property is added to the database, the
                          system will automatically match suitable clients and
                          send details of the property.
                        </p>
                      </li>
                      <li>
                        <p>
                          New client is added the system will do an automatic
                          match of suitable properties and send details to the
                          client.(whatsapp and email)
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 order-1 order-lg-2">
                  <div className="feature-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/TopstayTechno.webp"
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

export default Topstay;
