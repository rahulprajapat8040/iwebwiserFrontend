import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Layout = dynamic(import("@/Components/Common/Layout"));

const realEstate = () => {
  return (
    <>
      <Head>
        <title>Digital Transformation in Real Estate | iWebwiser </title>
        <meta
          name="keywords"
          content="iWebwiser, Real Estate, Real Estate IT services, Digital Tranformation"
        />
        <meta
          name="description"
          content=" iwebwiser | our team has experience in making fully featured real estate software development services to grow your business & offer the best solution at affordable costWith iWebwiser's innovative IT solutions, you can reduce costs, improve operational efficiency & establish yourself as a strong leader in a competitive industry."
        />

        <link rel="canonical" href="https://www.iwebwiser.com/real-estate" />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content="Transportation & Logistics Software Development | IT Solutions"
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/assets/img/Logo.svg"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="Transportation & Logistics Software Development | IT Solutions"
        />
        <meta
          property="og:url"
          content="https://www.iwebwiser.com/tour-and-travel"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/assets/img/Logo.svg"
        />
        <meta
          property="og:description"
          content="Digitalization of your old processes for logistics and transportation with iWebwiser. We provide customized software, system integration, and digital consulting."
        />
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
                      className="btn btn-navigate active"
                    >
                      Real Estate
                    </Link>
                    <Link
                      href={"/tour-and-travel"}
                      as={"/tour-and-travel"}
                      role="button"
                      className="btn btn-navigate"
                    >
                      Tour & Travels
                    </Link>
                  </div>
                  {/* All Industry Navigation content end here... */}
                  {/* Industry-banner Content start here... */}
                  <div className="Banner-content">
                    <h4 className="title">
                      Digital Transformation in
                      <span> Real Estate, With Our IT Solutions.</span>
                    </h4>
                    <p>
                      Change the way you conduct business by using our
                      innovative technology solutions and real estate IT
                      services. The real estate industry is evolving, and your
                      business must evolve with it. Transform property
                      transactions into a breeze, streamline managing, and gain
                      valuable insight by using our cloud-based solutions for
                      the real estate sector. Our real estate products are on
                      the cutting edge of the digital revolution within the
                      property industry. Our innovative technology speeds up
                      property transactions, facilitates maintenance, and offers
                      real estate professionals valuable information. The real
                      estate market is constantly changing, creating new
                      challenges for professionals working there. Our real
                      estate IT services reduce costs, improve operational
                      efficiency, and enable you to establish yourself as a
                      strong leader in a highly competitive industry. We'll help
                      you take advantage of technology assessments, get expert
                      advice, and use smart solutions to simplify everything
                      while saving you money. Spend less time managing your
                      technology and more time managing your property.
                    </p>

                    <p className="fw-bold">
                      At iWebwiser, we know the challenges real estate
                      professionals face and provide customized solutions that
                      empower realtors to succeed in the modern world of
                      technology.
                    </p>
                    <Link
                      href={"/contact-us"}
                      as={"/contact-us"}
                      className="btn btn-outline-dark"
                      role="button"
                    >
                      Contact us
                    </Link>
                  </div>
                  {/* Industry-banner Content end here... */}
                </div>
                <div className="col-12 col-lg-5 px-0">
                  <div className="healthcareImg">
                    <MyImage
                      src="/assets/img/RealEstateBanner.webp"
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
                We offer technology solutions and services that meet your
                business needs.
              </p>
              <div className="row service-content">
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Digital Transformation</h6>
                    <p className="desc">
                      Take advantage of the digital revolution's power to create
                      more innovative solutions with the help of iWebwiser.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Application Development</h6>
                    <p className="desc">
                      Modernize your business applications to improve customer
                      service and create fresh revenue sources.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">
                      Cloud Services Managed Cloud Services
                    </h6>
                    <p className="desc">
                      We can help you migrate and manage your applications to
                      the most advanced cloud platforms like AWS and Google
                      Cloud so you can focus on other essential things for your
                      business growth.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Product Engineering</h6>
                    <p className="desc">
                      Develop your digital product using our engineering
                      expertise using DevOps and a flexible approach to speedy
                      time-to-market efficiently.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Experience Design</h6>
                    <p className="desc">
                      Improve user experience, increase customer reach,
                      distinguish your brand through user-friendly designs and
                      outshine your competition with the help of our
                      professional designer.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Offshore Development Center</h6>
                    <p className="desc">
                      iWebwiser develops high-quality software within a specific
                      time frame and at a low cost with the help of our
                      experienced development team.
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
                      <p>Evaluation and Consultancy.</p>
                    </li>
                    <li>
                      <p>Mobile View Solutions.</p>
                    </li>
                    <li>
                      <p>Live Online View.</p>
                    </li>
                    <li>
                      <p>Business Transformation.</p>
                    </li>
                    <li>
                      <p>Broker Management.</p>
                    </li>
                    <li>
                      <p>Sellers Management.</p>
                    </li>
                    <li>
                      <p>Buyers Management.</p>
                    </li>
                    <li>
                      <p>Category Management.</p>
                    </li>
                    <li>
                      <p>Apartments Management.</p>
                    </li>
                    <li>
                      <p>Custom Design Management.</p>
                    </li>
                    <li>
                      <p>Customer relationship management system.</p>
                    </li>
                    <li>
                      <p>Property management solutions.</p>
                    </li>
                    <li>
                      <p>Personalized real estate portals.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-3 px-0">
                <div className="ourSolutions">
                  <div className="contentImg">
                    <MyImage
                      src="/assets/img/ourSolution3.webp"
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

        {/* Related Content Section start here... */}
        <section className="Related">
          <div className="max-content-width">
            <div className="container-fluid">
              <h2 className="title">
                Check Our Solutions For The <br /> <span>Real-eState</span>{" "}
                Industry.
              </h2>
              <div className="row">
                <div className="col-12 col-md-4 px-lg-0">
                  <div className="Related-card">
                    <div className="Related-img">
                      <MyImage
                        src="/assets/img/TopstayPortfolio.webp"
                        alt="RelatedImg"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <div className="card-img-overlay">
                      <div className="overlay-img">
                        <Link
                          href={"/top-stay-homes"}
                          as={"/top-stay-homes"}
                          className="stretched-link"
                        >
                          <MyImage
                            src="/assets/img/TopstayLogo.webp"
                            alt="RelatedImg"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Related Content Section end here... */}
      </Layout>
    </>
  );
};

export default realEstate;
