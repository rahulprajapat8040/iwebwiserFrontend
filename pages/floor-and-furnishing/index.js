import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import Layout from "@/Components/Common/Layout";
import Head from "next/head";
// const Layout = dynamic(import("@/Components/Common/Layout"));

const flourFurnish = () => {
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
            Case Study | Floor and Furnishing - Home Furnishing Brand
          </title>
          <meta name="keywords" content="" />
          <meta
            name="description"
            content="F&F is a home furnishing brand with a vision to give each home its own identity. It has a unique collection of decor accessories, furniture, rugs and much more."
          />
          <link
            rel="canonical"
            href="https://www.iwebwiser.com/floor-and-furnishing"
          />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iWebwiser" />
          <meta
            name="twitter:title"
            content="Case Study | Floor and Furnishing - Home Furnishing Brand"
          />
          <meta name="twitter:site:id" content="@iWebwiser" />
          <meta name="twitter:creator" content="@iWebwiser" />
          <meta
            name="twitter:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Ff%26fAbout.webp&w=1920&q=75"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />

          <meta
            property="og:title"
            content="Case Study | Floor and Furnishing - Home Furnishing Brand"
          />
          <meta
            property="og:url"
            content="https://www.iwebwiser.com/floor-and-furnishing"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="iWebwiser" />
          <meta
            property="og:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Ff%26fAbout.webp&w=1920&q=75"
          />
          <meta
            property="og:description"
            content="F&F is a home furnishing brand with a vision to give each home its own identity. It has a unique collection of decor accessories, furniture, rugs and much more."
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
              <p>
                Creating tasteful, exceptional, and appealing designs that speak
                luxury and comfort.
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
                src="/assets/img/f&fLogo.webp"
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
                      <span>F&F</span>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Case Detaill Breadcrumb Navigation section end here... */}
              <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                  <div className="project-detail-text">
                    <h5>Retails & E-Commerce</h5>
                    <h4>F&F - Floor & Furnishings</h4>
                    <p>
                      F&F is a home furnishing brand with a vision of giving
                      each home its identity. Our philosophy is to help
                      homeowners reflect their personalities through the home
                      interiors. Every product under our brand name sets a
                      benchmark in quality and seamlessly creates an aura you
                      will fall in love with. With thousands of options in our
                      inventory, we strive to keep only exceptionally aesthetic
                      and superior-quality products. As a result, the designs
                      you find at F&F are unique, and with just one glance, you
                      can say they truly belong to your home. iWebwiser helps
                      hundreds of businesses grow in this competitive market.
                      F&F is an exclusive yet elaborate collection of
                      upholstery, bed linen, rugs, decor accessories, furniture,
                      and much more.
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
                            <p>India</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Platform Users</p>
                          </th>
                          <td>
                            <p>7.1k+</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>IC Tablet App</p>
                          </th>
                          <td>
                            Help customer to select there curtains or other
                            things
                            {/* <a href="https://www.fandf.online/" className="btn">
                              <MyImage
                                src="/assets/img/google-play.webp"
                                alt="google-play"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a>
                            <a href="https://www.fandf.online/" className="btn">
                              <MyImage
                                src="/assets/img/apple-store.webp"
                                alt="apple-store"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a> */}
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Measure Tablet App</p>
                          </th>
                          <td>
                            to get measurements of curtains or other things
                            {/* <a href="https://www.fandf.online/" className="btn">
                              <MyImage
                                src="/assets/img/google-play.webp"
                                alt="google-play"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a>
                            <a href="https://www.fandf.online/" className="btn">
                              <MyImage
                                src="/assets/img/apple-store.webp"
                                alt="apple-store"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a> */}
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>QC Tablet App</p>
                          </th>
                          <td>
                            to check the quality of the products
                            {/* <a href="https://www.fandf.online/" className="btn">
                              <MyImage
                                src="/assets/img/google-play.webp"
                                alt="google-play"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a>
                            <a href="https://www.fandf.online/" className="btn">
                              <MyImage
                                src="/assets/img/apple-store.webp"
                                alt="apple-store"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a> */}
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Driver and Installer Mobile APP</p>
                          </th>
                          <td>to delivery and installation of product.</td>
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
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-6 px-0">
                <div className="project-slide-img">
                  <MyImage
                    className="w-100"
                    src="/assets/img/f&fAbout.webp"
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
                      F&F faced workforce and inventory management challenges
                      due to a lack of precise data on employee activities and
                      warehouse inventory. Understanding employee roles and
                      levels posed further complications, impacting task
                      allocation and progress monitoring.
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
                      iWebwiser devised a bespoke CMS solution for F&F,
                      empowering efficient operations management. The solution
                      provided insights into employee activities, facilitating
                      task allocation and monitoring. Clarity on employee roles
                      fostered transparency and accountability. Accurate
                      inventory tracking enabled optimized inventory management
                      processes, enhancing overall efficiency and organizational
                      performance.
                    </p>
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
              <div className="row align-items-start justify-content-center justify-content-lg-between">
                <div className="col-12 col-lg-7 order-2 order-lg-1">
                  <div className="feature-text">
                    <h4>Impact</h4>
                    <h5>Business Impact:</h5>
                    <p className="description">
                      Improved operations management leads to better resource
                      utilization and cost control, driving profitability and
                      competitiveness for F&F.
                    </p>

                    <h5>User Impact:</h5>
                    <p className="description">
                      Users benefit from a more transparent and efficient
                      shopping experience, leading to increased satisfaction and
                      loyalty. and here is the list of features in F&F. Users
                      can also explore these features.
                    </p>
                    <ul className="list-styled">
                      <li>
                        <p>Feature category search system.</p>
                      </li>
                      <li>
                        <p>Online cart and wishlist section.</p>
                      </li>
                      <li>
                        <p>
                          List of Collection of Products like wall covers, bed
                          linen, etc.
                        </p>
                      </li>
                      <li>
                        <p>
                          Description of products like type of fabric, fabric,
                          size, thread counts, etc
                        </p>
                      </li>
                      <li>
                        <p>User-friendly website design.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 order-1 order-lg-2">
                  <div className="feature-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/f&fTechno.webp"
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
        <section className="system-phase d-none">
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
        <section className="system-phase certification d-none">
          <div className="max-14-content">
            <h4 className="title">Client satisfaction and project success</h4>
            <div className="container">
              <div className="row">
                <div className="col-6 col-md-4">
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
                <div className="col-6 col-md-4">
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
                <div className="col-6 col-md-4">
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

export default flourFurnish;
