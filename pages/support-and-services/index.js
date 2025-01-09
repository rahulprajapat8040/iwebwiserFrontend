import Layout from "@/Components/Common/Layout";
import PartOfTeam from "@/Components/Common/PartOfTeam";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const SupportService = (props) => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  return (
    <>
      <Head>
        <title>
          Support Services | Hosting & Network Troubleshooting Services
        </title>
        <meta
          name="keywords"
          content="iWebwiser, Hosting Service, Backup and Restore, Emergency IT Support Services, Dedicated team"
        />
        <meta
          name="description"
          content="iWebwiser's dedicated team provides emergency IT support services like backup & restore, network troubleshooting service, and hosting service to help you 24/7."
        />

        <link
          rel="canonical"
          href="https://www.iwebwiser.com/support-and-services"
        />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content="Support Services | Hosting &  Network Troubleshooting Services"
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Ffulfillment1.webp&w=1920&q=75"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="Support Services | Hosting &  Network Troubleshooting Services"
        />
        <meta
          property="og:url"
          content="https://www.iwebwiser.com/support-and-services"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Ffulfillment1.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="iWebwiser's dedicated team provides emergency IT support services like backup & restore, network troubleshooting service, and hosting service to help you 24/7."
        />
      </Head>
      <Layout>
        <>
          {/* Support-Service-Home-section start here... */}
          <section className="support-service-home">
            <div className="max-content-width">
              <div className="support-service-home-bg">
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
                  <h4 className="text-center mx-auto">Support Services</h4>
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
                  className="support-service-img"
                >
                  <MyImage
                    className="w-100 d-none"
                    src="/assets/img/support-service.webp"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </motion.div>
              </div>
            </div>
          </section>
          {/* Support-Service-Home-section end here... */}

          {/* Page Breadcrumb Navigation section start here... */}
          <div className="page-navigation py-0">
            <div className="max-content-width">
              <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link
                        href={"/app-web-software-design-development-services"}
                        as={"/app-web-software-design-development-services"}
                      >
                        All Experts
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <span>SupportService</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* Page Breadcrumb Navigation section end here... */}

          {/* Hostinger section start here... */}
          <section ref={ref1} className="Hostinger">
            <div className="container-fluid">
              <div
                style={{
                  transform: isInView1 ? "translateY(0%)" : "translateY(100%)",
                  opacity: isInView1 ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                }}
                className="max-content-width"
              >
                <h4>Hosting Service</h4>
                <p>
                  iWebwiser offer comprehensive hosting support services to
                  ensure your <br /> website or application runs smoothly,
                  faster and seamlessly.
                </p>
              </div>
            </div>
          </section>
          {/* Hostinger section end here... */}
          {/* Managed Hostinger section start here... */}
          <section className="managed-hostinger">
            <div className="container-fluid">
              <div className="max-content-width">
                <div className="row justify-content-between">
                  <div className="col-12 col-lg-4 px-lg-0 order-2 order-lg-1">
                    <div className="managed-hostinger-text">
                      <h4>Fully Managed Hosting Services</h4>
                      <p>
                        Your hosting infrastructure and servers are the central
                        element of any plan for technology and essential to your
                        business. If you choose iWebwiser as your hosting
                        service provider, you can access the built-in capacity,
                        allowing you to build the required infrastructure when
                        needed. It is possible to leave it to us to discuss
                        important decisions and take action while you focus on
                        your primary business. Our web hosting services are
                        designed to provide the highest speed, unparalleled
                        security, and 24/7 fast and reliable assistance. The
                        fact that we have every aspect of your digital needs
                        managed in one place means we can provide an easy and
                        hassle-free hosting service, all while alleviating the
                        stress of dealing with multiple third-party vendors.
                        Standardizing your processes and servers can lower
                        expenses, allow for expansion, and allow you to operate
                        more efficiently. With our experience and knowledge of
                        various technologies, we can serve clients from various
                        industries. To achieve your goals and grow your
                        business, contact us today.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8 px-lg-0 order-1 order-lg-2 overflow-hidden">
                    <div className="managed-hostinger-img">
                      <MyImage
                        src="/assets/img/hosting.webp"
                        alt=""
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
          {/* Managed Hostinger section end here... */}
          {/* Server-Support section start here... */}
          <section className="server-support">
            <div className="max-content-width">
              <div className="container-fluid">
                <h4 className="title">Server Support Services</h4>
                <p className="title-para">
                  Outsourcing your infrastructure services is the <br />
                  most cost-effective method of ensuring everything runs
                  smoothly.
                </p>
                {/* server-support section tabs start here... */}
                <div className="row">
                  <div className="col-12 col-lg-4 px-0">
                    <div
                      className="nav flex-column flex-md-row flex-lg-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="nav-link active"
                        id="Backup-Restore-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#Backup-Restore"
                        type="button"
                        role="tab"
                        aria-controls="Backup-Restore"
                        aria-selected="true"
                      >
                        Backup and Restore
                      </button>
                      <button
                        className="nav-link"
                        id="Emergency-Support-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#Emergency-Support"
                        type="button"
                        role="tab"
                        aria-controls="Emergency-Support"
                        aria-selected="false"
                      >
                        Emergency Support
                      </button>
                      <button
                        className="nav-link"
                        id="Network-Services-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#Network-Services"
                        type="button"
                        role="tab"
                        aria-controls="Network-Services"
                        aria-selected="false"
                      >
                        Network Troubleshooting Services
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="Backup-Restore"
                        role="tabpanel"
                        aria-labelledby="Backup-Restore-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab">
                          <h5>Backup and Restore</h5>
                          <p>
                            As businesses accumulate large amounts of data every
                            day, backing up data and restoring critical business
                            applications has become extremely important. Your
                            company relies heavily on data. Data backup and
                            restoration become ineffective if they can't be
                            recovered quickly and successfully, which makes
                            having the capability of recovering deleted files
                            and data essential.
                          </p>
                          <p>
                            iWebwiser provides fast, simple and reliable data
                            backup and restore services for a wide range of
                            enterprise infrastructures, ensuring robust,
                            scalable and carefully maintained data backups by
                            offering archive & recovery solutions designed to
                            meet your individual needs, reducing downtime,
                            increasing flexibility, manageability and scaling
                            capabilities.
                          </p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="Emergency-Support"
                        role="tabpanel"
                        aria-labelledby="Emergency-Support-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab">
                          <h5>Emergency Support</h5>
                          <p>
                            Unexpected IT issues can create a traumatic impact
                            on your company. We provide emergency IT support
                            services to help you get your systems back up and
                            running as fast as possible without causing any
                            interruption to your company. Our trained and
                            experienced IT technicians are available to respond
                            to emergencies 24/7.
                          </p>
                          <p>
                            Our emergency IT support services include, but are
                            not limited to:
                          </p>
                          <ul>
                            <li>
                              <p>Server and network failure</p>
                            </li>
                            <li>
                              <p>Security breach</p>
                            </li>
                            <li>
                              <p>Emergency data recovery</p>
                            </li>
                            <li>
                              <p>Other critical system failure issues</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="Network-Services"
                        role="tabpanel"
                        aria-labelledby="Network-Services-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab">
                          <h5>Network Troubleshooting Services</h5>
                          <p>
                            We have vast knowledge in providing support in
                            solving problems with Networking, Server, and
                            Storage solutions. Our highly skilled system
                            engineers know the essential components required to
                            deliver critical business services.
                          </p>
                          <p>
                            We can handle all support and troubleshooting
                            internally and offer support throughout the process.
                            Problems with your network can also be solved via
                            remote access. We will assist you via phone, email,
                            web sessions, or any other way to solve any issues.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* server-support section tabs end here... */}
              </div>
            </div>
          </section>
          {/* Server-Support section end here... */}
          {/* Digital-fulfilment section start here... */}
          <section className="digital-fulfilment">
            <h4 className="title">Digital Fulfilment</h4>
            <p className="title-para">
              A Strategy for Enterprise-Wide Digital Transformation Includes
              Digital Fulfillment.
            </p>
            {/* Digital fulfilment section content start here... */}
            <div className="fulfillment-content">
              <div className="max-content-width">
                <div className="row mx-0 align-items-center">
                  <div className="col-12 col-md-6 px-0  order-2 order-md-1">
                    <div className="digital-fulfilment-text-1">
                      <h4>Managed Delivery</h4>
                      <p>
                        Finding the ideal blend of the best resources can be a
                        monumental task. Therefore, you should entrust your
                        projects to a service provider who will work together
                        with you to ensure that your Team can attain both
                        technical and business objectives that can stay with you
                        for the time needed. We will oversee your technical
                        assets and provide services to assist you in realizing
                        your desired business goals with increased
                        accountability and better coordination between your
                        business's core and your IT & Development functions.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-0  order-1 order-md-2">
                    <div className="digital-fulfilment-img-1">
                      <MyImage
                        className="h-100"
                        src="/assets/img/fulfillment1.webp"
                        alt="project"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-0  order-3 order-md-3">
                    <div className="digital-fulfilment-img-2">
                      <MyImage
                        src="/assets/img/fulfillment2.webp"
                        alt="project"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-0  order-4 order-md-4">
                    <div className="digital-fulfilment-text-2">
                      <div className="section-2">
                        <h4>Dedicated Team</h4>
                        <p>
                          When you work with the dedicated team at iWebwiser,
                          you get a team of professionals and experts
                          specifically selected for archiving your business
                          goals. The iwebwiser team can be based on the shore
                          near your office or from our brand new Development
                          Centre. Our dedicated team is designed to meet your
                          specific technical and business requirements. Each
                          offshore group is assigned a particular space in our
                          brand-new offices, and we recommend that clients come
                          to our Development Centre as often as possible to
                          strengthen the relationship even more.
                        </p>
                        <p>
                          You can use the facility for your virtual office or as
                          an offshore location. We are always looking to
                          integrate teams into their client's corporate culture
                          and be the most effective remote "employees" they can
                          be.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-0  order-last order-md-5">
                    <div className="digital-fulfilment-text-3">
                      <h4>Global Presence</h4>
                      <p>
                        iwebwiser is an established company in India. They have
                        gained the trust of their clients across the UK, USA,
                        Europe, Australia, and the Middle East. Our team has
                        worked with clients from different industries, looking
                        for a way to work with IT professionals who can give
                        them an edge in the competition. With offices on five
                        continents and superior response speed, we'll be there.
                      </p>
                      <p>
                        We are proud to be able to provide localized support and
                        assistance, providing customized solutions that satisfy
                        the specific needs of our international customers. You
                        can trust iWebWiser to become your global IT partner,
                        providing top-quality solutions and support that cross
                        the boundaries of geography and propel your company to
                        international success.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-0  order-5 order-md-6">
                    <div className="digital-fulfilment-img-3">
                      <MyImage
                        src="/assets/img/fulfillment3.webp"
                        alt="project"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Digital fulfilment section content end here... */}
          </section>
          {/* Digital-fulfilment section end here... */}
          {/* Become-A-part-of-Team section start here... */}
          <PartOfTeam />
          {/* Become-A-part-of-Team section end here... */}
        </>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const supportData = {
    image_1:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/support-service.svg",
    image_2:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/manage-hosting.png",
    image_3:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/manage-delivery.png",
    image_4:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/dedicated-team.png",
    image_5:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/Map-with-dots.svg",
  };
  return {
    props: {
      supportData,
    },
  };
}

export default SupportService;
