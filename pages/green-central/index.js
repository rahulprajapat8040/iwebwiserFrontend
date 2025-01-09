import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import Layout from "@/Components/Common/Layout";
import Head from "next/head";
// const Layout = dynamic(import("@/Components/Common/Layout"));

const CaseDetail = (props) => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref1, { once: true });
  const isInView3 = useInView(ref1, { once: true });
  const isInView4 = useInView(ref1, { once: true });

  return (
    <>
      <Layout>
        <Head>
          <title>Case Study | Green Central - Delivery System</title>
          <meta name="keywords" content="" />
          <meta
            name="description"
            content="Let us tell you how green central is a revolutionary first-breed delivery technology in South Africa developed by iWebwiser that is tailored to your product."
          />
          <link
            rel="canonical"
            href="https://www.iwebwiser.com/green-central"
          />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iWebwiser" />
          <meta
            name="twitter:title"
            content="Case Study | Green Central - Delivery System"
          />
          <meta name="twitter:site:id" content="@iWebwiser" />
          <meta name="twitter:creator" content="@iWebwiser" />
          <meta
            name="twitter:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FaboutCase.webp&w=1920&q=75"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />

          <meta
            property="og:title"
            content="Case Study | Green Central - Delivery System"
          />
          <meta
            property="og:url"
            content="https://www.iwebwiser.com/green-central"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="iWebwiser" />
          <meta
            property="og:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FaboutCase.webp&w=1920&q=75"
          />
          <meta
            property="og:description"
            content="Let us tell you how green central is a revolutionary first-breed delivery technology in South Africa developed by iWebwiser that is tailored to your product."
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
                  Designing Delivery-oriented products, Green Central works
                  across several Industries.
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
                  src="/assets/img/caseDetaillogo.webp"
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
                      <span>Green Central</span>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Case Detaill Breadcrumb Navigation section end here... */}
              <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                  <div className="project-detail-text">
                    <h5>Delivery system</h5>
                    <h4>Green Central</h4>
                    <p>
                      Green Central is the South African market disruptor in the
                      food, consumables, and brown goods delivery space, where
                      your business no longer has to pay a percentage of the
                      order to the aggregator to fulfill your delivery. Instead,
                      you pay a monthly license fee and a nominal fee per
                      delivery to keep all the revenue! On average, this will
                      save your business up to 150k rand per month! You no
                      longer need to compete with other companies for the same.
                    </p>
                    <p>
                      Consumer spending directly to your Order-Delivery app to
                      receive the order, take payment, and fulfill for a
                      fraction of what you currently pay! Yes, that is correct.
                      Green Central empowers your business to achieve your
                      orders with no layaways! Let us tell you how Green Central
                      is a revolutionary first-breed Order/Delivery Tech
                      tailored to your product and brand. We offer a fully
                      white-label customized solution ready for implementation
                      within 3-7 working days! Green Central allows your
                      business to build a one-on-one relationship.
                    </p>
                    <p>
                      With your customers, enhance the user experience and make
                      personal touch a part of your business as you evolve into
                      a larger-than-life personality.
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
                            <p>South Africa</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Platform Users</p>
                          </th>
                          <td>
                            <p>50k</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Website</p>
                          </th>
                          <td>
                            <Link
                              href="https://greencentral.co.za"
                              target="_blank"
                              className="btn"
                            >
                              www.greencentral.co.za
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Customer App</p>
                          </th>
                          <td>
                            iOS or Android App, allowing your customer to view
                            your menu and products, order in real time and have
                            the items delivered or collect their order at store
                            level
                            {/* <a
                              href="https://greencentral.co.za"
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
                              href="https://greencentral.co.za"
                              className="btn"
                            >
                              <MyImage
                                src={props.caseDetailData.image_3}
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
                            <p>Driver App</p>
                          </th>
                          <td>
                            Fully interactive app to advise your pool of drivers
                            an order has been placed and to locate the store and
                            route to customer through GPS quickest route
                            {/* <a
                              href="https://greencentral.co.za"
                              className="btn"
                            >
                              <MyImage
                                src={props.caseDetailData.image_4}
                                alt="google-play"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a>
                            <a
                              href="https://greencentral.co.za"
                              className="btn"
                            >
                              <MyImage
                                src={props.caseDetailData.image_5}
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
                            <p>Store App</p>
                          </th>
                          <td>
                            IOS or Android App, providing your store with
                            new/pending orders, being prepared, completed and
                            driver collected orders or in-store collection
                            {/* <a
                              href="https://greencentral.co.za"
                              className="btn"
                            >
                              <MyImage
                                src={props.caseDetailData.image_6}
                                alt="google-play"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a>
                            <a
                              href="https://greencentral.co.za"
                              className="btn"
                            >
                              <MyImage
                                src={props.caseDetailData.image_7}
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
                            <p>Product & Menus</p>
                          </th>
                          <td>
                            An easy to use back office system, allowing you to
                            manage your business and products available for
                            sale. In just a few clicks on the web-based system
                            {/* <a
                              href="https://greencentral.co.za"
                              className="btn"
                            >
                              <MyImage
                                src={props.caseDetailData.image_6}
                                alt="google-play"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a>
                            <a
                              href="https://greencentral.co.za"
                              className="btn"
                            >
                              <MyImage
                                src={props.caseDetailData.image_7}
                                alt="apple-store"
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </a> */}
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
              <div className="row">
                <div className="col-12 col-lg-7 px-0">
                  <div className="project-slide-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/aboutCase.webp"
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
                        Deliver Now faced challenges in accurately tracking
                        drivers within their delivery system. Despite the
                        system's ability to facilitate deliveries and track
                        recipients, precise tracking of drivers remained a
                        significant issue. This hindered the overall efficiency
                        and reliability of the delivery process.
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
                        iWebwiser resolved Deliver Now's tracking problem by
                        implementing GPS technology. The integration of GPS
                        enabled continuous updates of the driver's location in
                        real-time through API requests sent every 50 meters.
                        This significantly improved tracking accuracy, enhancing
                        visibility and efficiency for both delivery personnel
                        and recipients.
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
              <div className="row justify-content-center justify-content-lg-start">
                <div className="col-12 col-lg-5 order-2 order-lg-1">
                  <div className="feature-text">
                    <h4>Impact</h4>
                    <h5>Business Impact:</h5>
                    <p className="description">
                      Enhanced delivery reliability boosts customer loyalty and
                      trust, leading to increased repeat business and positive
                      word-of-mouth referrals.
                    </p>

                    <h5>User Impact:</h5>
                    <p className="description">
                      Users experience greater satisfaction and confidence in
                      their deliveries, leading to improved overall customer
                      experience. and here is the list of features in Deliver
                      Now. Users can also explore these features.
                    </p>
                    <ul className="list-styled">
                      <li>
                        <p>Single centralised server for all business.</p>
                      </li>
                      <li>
                        <p>Multiple kinds of delivery business.</p>
                      </li>
                      <li>
                        <p>Wallet management.</p>
                      </li>
                      <li>
                        <p>Pickup and courier delivery service.</p>
                      </li>
                      <li>
                        <p>Store Membership subscriptions.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7 order-1 order-lg-2">
                  <div className="feature-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/caseFeatured1.webp"
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

export default CaseDetail;
