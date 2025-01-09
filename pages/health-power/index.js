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
          <title>Case Study | Health Power - Family Medicine Center</title>
          <meta name="keywords" content="" />
          <meta
            name="description"
            content="Saudi Health Power is a large group of family doctors working in family medicine centers. They fulfill patients' needs & develop a lifelong relationship with them."
          />
          <link rel="canonical" href="https://www.iwebwiser.com/health-power" />
          <meta name="robots" content="index, follow" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iWebwiser" />
          <meta
            name="twitter:title"
            content="Case Study | Health Power - Family Medicine Center"
          />
          <meta name="twitter:site:id" content="@iWebwiser" />
          <meta name="twitter:creator" content="@iWebwiser" />
          <meta
            name="twitter:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fhealthpowerabout.webp&w=1920&q=75"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />

          <meta
            property="og:title"
            content="Case Study | Health Power - Family Medicine Center"
          />
          <meta
            property="og:url"
            content="https://www.iwebwiser.com/health-power"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="iWebwiser" />
          <meta
            property="og:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fhealthpowerabout.webp&w=1920&q=75"
          />
          <meta
            property="og:description"
            content="Saudi Health Power is a large group of family doctors working in family medicine centers. They fulfill patients' needs & develop a lifelong relationship with them"
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
                <p>Our Family Medicine Centers Health Power.</p>
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
                  src="/assets/img/healthpowerLogo.webp"
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
                      <span>Health power medical</span>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Case Detaill Breadcrumb Navigation section end here... */}
              <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                  <div className="project-detail-text">
                    <h5>Healthcare & Lifestyle</h5>
                    <h4>Health Power Medical</h4>
                    <p>
                      Saudi Health Power is a large group of Family Doctors and
                      their healthcare teams working in Family Medicine Centers
                      across the Kingdom to improve your health. As Family
                      Doctors, they have experienced the “Medical Journey.” They
                      know that obtaining healthcare can be complex, confusing,
                      expensive, and take much of your time. It is often
                      confusing to know which doctor to visit. A person may feel
                      part of a large crowd searching for the necessary care.
                    </p>
                    <p>
                      Saudi Health Power is pleased that you have chosen our
                      team to provide you and your family with healthcare.
                      Family Medicine Consultants lead our healthcare teams and
                      include doctors whom we have trained to provide only the
                      highest quality of care. We want you to be able to develop
                      a lifelong relationship with your doctor and all the
                      members of your healthcare team in the Family Medicine
                      Center of your choice.
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
                            <p>Jordan, Saudi Arab</p>
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
                            <p>Website</p>
                          </th>
                          <td>
                            <a
                              href="https://www.healthpowermedical.com"
                              target="_blank"
                              className="btn"
                            >
                              healthpowermedical.com
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Apps</p>
                          </th>
                          <td>
                            <a
                              href="https://www.healthpowermedical.com/"
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
                              href="https://www.healthpowermedical.com/"
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
                <div className="col-12 col-lg-7 px-0">
                  <div className="project-slide-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/healthpowerabout.webp"
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
                        Health Power Medicine in Saudi Arabia faced significant
                        challenges due to manual handling of tasks within their
                        hospital centers. The absence of an automation system
                        led to difficulties in managing patient data
                        efficiently, resulting in confusion and errors. Overload
                        of information compounded these issues, causing
                        frustration and impacting the quality of healthcare
                        services provided
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
                        iWebwiser addressed Health Power Medicine's challenges
                        by delivering a tailored solution to streamline their
                        operations. This custom solution allowed Health Power
                        Medicine to manage patient data, doctor appointments,
                        medical reports, and lab reports efficiently. With
                        accurate diagnosis and streamlined processes, Health
                        Power Medicine improved their ability to provide
                        effective treatment to patients. Additionally, the
                        implementation of online consultancy services further
                        enhanced their healthcare delivery system, providing
                        instant solutions to patients' needs.
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
              <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                  <div className="feature-text">
                    <h4>Impact</h4>
                    <h5>Business Impact:</h5>
                    <p className="description">
                      Enhanced healthcare delivery efficiency leads to cost
                      savings and improved patient outcomes, positioning Health
                      Power Medicine as a trusted healthcare provider.
                    </p>

                    <h5>User Impact:</h5>
                    <p className="description">
                      Patients receive faster and more convenient access to
                      healthcare services, leading to improved health outcomes
                      and satisfaction. and here is the list of features in
                      Health Power Medicine. Users can also explore these
                      features.
                    </p>
                    <ul className="list-styled">
                      <li>
                        <p>
                          Family clinics are available for both virtual and
                          physical visits.
                        </p>
                      </li>
                      <li>
                        <p>Dental Clinics, Physiotherapy.</p>
                      </li>
                      <li>
                        <p>Primary Surgical Procedures.</p>
                      </li>
                      <li>
                        <p>Laboratories With Barcode Systems.</p>
                      </li>
                      <li>
                        <p>
                          Health Program Specialized In Physical Fitness And
                          Nutrition.
                        </p>
                      </li>
                      <li>
                        <p>Home Medical Care system.</p>
                      </li>
                      <li>
                        <p>Training Courses In Health And Nutrition.</p>
                      </li>
                      <li>
                        <p>Transportation Means Suitable For Patients.</p>
                      </li>
                      <li>
                        <p>Online pharmacy for medication for patients.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 order-1 order-lg-2">
                  <video className="featured-video" autoPlay muted loop>
                    <source
                      src={"/assets/img/HealthPowerVideo.mp4"}
                      type="video/mp4"
                    />
                  </video>
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

export default CaseDetail;
