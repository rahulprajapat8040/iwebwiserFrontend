import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Layout = dynamic(import("@/Components/Common/Layout"));

const tourtravel = () => {
  return (
    <>
      <Head>
        <title>
          Transportation & Logistics Software Development | IT Solutions
        </title>
        <meta
          name="keywords"
          content="iWebwiser, Logistics and Transportation, Logistics and Transportation Software Development, Services and Support, Management System"
        />
        <meta
          name="description"
          content=" iwebwiser | make your journey planning fast and easy with highly featured tour and travel app and web development software company in IndiaDigitalization of your old processes for logistics and transportation with iWebwiser. We provide customized software, system integration, and digital consulting."
        />

        <link
          rel="canonical"
          href="https://www.iwebwiser.com/tour-and-travel"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Layout>
        {/* Industry-Banner Section start here... */}
        <section className="Industry-banner">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-start">
                <div className="col-12 col-lg-7 px-0">
                  {/* All Industry Navigation content start here... */}
                  <div className="industry-navigate">
                    <Link
                      href={"/healthcare-and-lifestyle"}
                      as={"/healthcare-and-lifestyle"}
                      role="button"
                      className="btn btn-navigate"
                    >
                      Hospitality & Lifestyle
                    </Link>
                    <Link
                      role="button"
                      href={"/e-learning-and-education"}
                      as={"/e-learning-and-education"}
                      className="btn btn-navigate"
                    >
                      E-learning & Education
                    </Link>
                    <Link
                      href={"/retail-ecommerce"}
                      role="button"
                      className="btn btn-navigate"
                    >
                      Retail & eCommerce
                    </Link>
                    <Link
                      href={"/real-estate"}
                      as={"/real-estate"}
                      role="button"
                      className="btn btn-navigate"
                    >
                      Real Estate
                    </Link>
                    <Link
                      href={"/tour-and-travel"}
                      as={"/tour-and-travel"}
                      role="button"
                      className="btn btn-navigate active"
                    >
                      Tour & Travels
                    </Link>
                  </div>
                  {/* All Industry Navigation content end here... */}
                  {/* Industry-banner Content start here... */}
                  <div className="Banner-content">
                    <h4 className="title">
                      Digitalization Your Old Processes For{" "}
                      <span>Logistics and Transportation.</span>
                    </h4>
                    <p>
                      Modernize your existing logistics processes, optimize your
                      processes for increased scalability and performance, and
                      consolidate your complicated workflows to improve data
                      accessibility and visibility by utilizing iWebwiser, the
                      top custom transportation and logistics and transportation
                      software development company. Improving existing logistics
                      and transportation management solutions is essential, as
                      stagnation could be detrimental in an ever-changing global
                      logistics services market.
                    </p>

                    <p>
                      That is why we constantly invest in research and
                      development and have created a Center of Excellence. With
                      over five years of expertise in cross-functional and
                      complex implementations, we design customized solutions
                      that range from freight, transportation, warehouse, and
                      fleet management systems to customized carrier portals,
                      CRM systems, EDI solutions, and apps for logistics on the
                      go.
                    </p>
                    <p className="fw-bold">
                      Transform Your Old Processes For Logistics With Our
                      Experts.
                    </p>
                    <Link
                      href={"/contact-us"}
                      as={"/contact-us"}
                      className="btn btn-outline-dark"
                      role="button"
                    >
                      Contact Us
                    </Link>
                  </div>
                  {/* Industry-banner Content end here... */}
                </div>
                <div className="col-12 col-lg-5 px-0">
                  <div className="healthcareImg">
                    <MyImage
                      src="/assets/img/tour&travelBanner.webp"
                      alt="ELearnBanner"
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
        {/* Industry-Banner Section end here... */}

        {/* offer Section start here... */}
        <section className="offers">
          <div className="max-content-width">
            <div className="container-fluid">
              <h4 className="title">Our Services</h4>
              <p className="description">
                Every segment offers equal commitment and attention through our
                team of experts.
              </p>
              <div className="row service-content">
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Digital Strategy & Consulting</h6>
                    <p className="desc">
                      Our experts understand your business challenges, establish
                      your goals for digital transformation, examine your tech
                      needs, identify opportunities for process optimization,
                      and design an outline of digital transformation that
                      aligns with your company's goals.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Logistics Software Development</h6>
                    <p className="desc">
                    Utilizing our full-cycle implementation expertise and
                      low-code platform knowledge, We design customized
                      transportation, fleet, and warehouse management solutions,
                      Last-mile deliveries, systems for EDI platforms for
                      visibility of supply chains, and various other digital
                      systems.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">
                    Customization of Logistics Software
                    </h6>
                    <p className="desc">
                    Suppose you're looking to add new features to your old
                      system, automate processes for more efficiency, set up and
                      establish logistical and digital platforms, or even modify
                      your existing workflows. In that case, our logistics
                      software developers can handle everything.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">System Integration</h6>
                    <p className="desc">
                    Integrating logistics into existing or third-party systems
                      can take time and effort. Our experts will help connect
                      your transportation and logistics platform to tools and
                      systems like CRM, TMS, WMS shipping service providers,
                      freight calculation tools, and more.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Experience Design</h6>
                    <p className="desc">
                      Improve user experience, increase customer reach, and
                      distinguish your brand through user-friendly designs and
                      advanced graphic designs.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Services and Support for Managed Services & Support</h6>
                    <p className="desc">
                    Our 24/7 team worldwide ensures maximum performance,
                      speed, and efficiency of your software for logistics by
                      continuously monitoring system performance, fixing issues
                      and bugs, performing updates and improvements, and
                      providing consistent technical assistance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="offer-link">
                <Link
                  role="button"
                  className="btn btn-outline-dark"
                  href={"/case-study-unlock-your-solutions"}
                >
                  Let’s Find Solutions With Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* offer Section end here... */}

        {/* our Solution Section start here... */}
        <section className="our-solution">
          <div className="max-content-width">
            <div className="row mx-0 justify-content-between">
              <div className="col-12 col-lg-6 px-0">
                <div className="our-solution-content">
                  <h4 className="title">Our solutions</h4>
                  {/* <p className="para">
                    Healthcare technology solutions for improved patient care
                  </p> */}
                  <ul>
                    <li>
                      <p>Intelligent sourcing.</p>
                    </li>
                    <li>
                      <p>Fleet Management.</p>
                    </li>
                    <li>
                      <p>Asset Management.</p>
                    </li>
                    <li>
                      <p>Freight management.</p>
                    </li>
                    <li>
                      <p>Warehouse Management.</p>
                    </li>
                    <li>
                      <p>Process visibility.</p>
                    </li>
                    <li>
                      <p>Field workforce automation.</p>
                    </li>
                    <li>
                      <p>Rail Engineering.</p>
                    </li>
                    <li>
                      <p>Logistics Service Booking & Scheduling.</p>
                    </li>
                    <li>
                      <p>Forwarder and Broker Solutions.</p>
                    </li>
                    <li>
                      <p>Consignment Management System.</p>
                    </li>
                    <li>
                      <p>Route Optimization.</p>
                    </li>
                    <li>
                      <p>Shipment Management Solution.</p>
                    </li>
                    <li>
                      <p>Vehicle Maintenance.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-3 px-0">
                <div className="ourSolutions">
                  <div className="contentImg">
                    <MyImage
                      src="/assets/img/ourSolution5.webp"
                      alt="offerImg"
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
        {/* our Solution Section end here... */}
      </Layout>
    </>
  );
};

export default tourtravel;
