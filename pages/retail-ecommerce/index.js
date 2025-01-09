import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Layout = dynamic(import("@/Components/Common/Layout"));

const insurance = () => {
  return (
    <>
      <Head>
        <title>Retail & eCommerce Digitization | Custom IT Solutions</title>
        <meta
          name="keywords"
          content="iWebwiser, Retail and eCommerce, eCommerce Development, Retail and eCommerce App, Custom eCommerce"
        />
        <meta
          name="description"
          content="iWebwiser creates flexible and scalable retail & eCommerce online platforms with customized solutions suitable for B2B, B2C, and B2B2C business models"
        />

        <link rel="canonical" href="https://www.iwebwiser.com/insurance" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content="Retail & eCommerce Digitization | Custom IT Solutions"
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
          content="Retail & eCommerce Digitization | Custom IT Solutions"
        />
        <meta property="og:url" content="https://www.iwebwiser.com/insurance" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/assets/img/Logo.svg"
        />
        <meta
          property="og:description"
          content="iWebwiser creates flexible and scalable retail & eCommerce online platforms with customized solutions suitable for B2B, B2C, and B2B2C business models."
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
                      href={"/insurance"}
                      role="button"
                      className="btn btn-navigate active"
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
                      className="btn btn-navigate"
                    >
                      Tour & Travels
                    </Link>
                  </div>
                  {/* All Industry Navigation content end here... */}
                  {/* Industry-banner Content start here... */}
                  <div className="Banner-content">
                    <h4 className="title">
                      Delivering Experience Omnichannel
                      <span> Retail & eCommerce</span> Solutions
                    </h4>

                    <p>
                      Create flexible and scalable eCommerce and retail stores
                      that increase sales customers' engagement, sales, and
                      business returns by partnering with iWebwiser, a
                      multi-award-winning eCommerce development company. Our
                      combination of 5+ years of experience in the
                      implementation process and strategic alliances that
                      include java and the top technology providers allows us to
                      find the best breakthroughs and customized solutions
                      suitable for B2B, B2C, and B2B2C business models. With
                      more than 40+ certified architects and consultants across
                      various tech stacks, we can excel at the delivery of
                      complex retail and eCommerce solutions within a shorter
                      time-to-market. Around the world, iWebwiser has served as
                      an e-commerce partner for many top eCommerce and retail
                      brands, helping them reinvent eRetail and transform data
                      into strategies that deliver better customer experiences
                      across all touchpoints.
                    </p>
                    <p className="fw-bold">
                      Our eCommerce app and web developers will help you create
                      your eCommerce store keeping every detail in mind.
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
                      src="/assets/img/insuranceBanner.webp"
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
                We offer each segment with equal commitment and attention.
              </p>
              <div className="row service-content">
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Business to Business (B2B)</h6>
                    <p className="desc">
                      Create B2C-like experiences for your B2B customers by
                      providing complete transparency regarding prices,
                      catalogues, quotations, and a seamless view to service and
                      sales.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Business to Consumer (B2C)</h6>
                    <p className="desc">
                      Increase conversions, CX and sales by leveraging our
                      award-winning eCommerce and retail development expertise,
                      which is implemented successfully by the certified
                      engineers of our platform.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">
                      Business to Business to Consumer (B2B2C)
                    </h6>
                    <p className="desc">
                      Distributors and manufacturers can generate more sources
                      of revenue through the latest and most innovative
                      platform-driven B2B2C eCommerce options.
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
                    <h6 className="title">Digital Marketplaces</h6>
                    <p className="desc">
                      Get success by developing platforms multi-platform
                      integration catalogue management and customer management,
                      delivery of products and eCommerce SEO analysis and
                      reporting with iWebwiser.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">
                      Multi-Vendor Retail Application Development.
                    </h6>
                    <p className="desc">
                      Build a robust and scalable multi-vendor retail and
                      eCommerce app that allows vendors from multiple businesses
                      in your target retail app category to create their digital
                      store and sell their products through your app.
                    </p>
                  </div>
                </div>
              </div>
              <div className="offer-link">
                <Link
                  role="button"
                  className="btn btn-outline-dark"
                  href={"/app-web-software-design-development-services"}
                >
                  Services We Offer
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
                  <h4 className="title">
                    Our Custom eCommerce Developmens Solutions.
                  </h4>
                  {/* <p className="para">
                    Healthcare technology solutions for improved patient care
                  </p> */}
                  <ul>
                    <li>
                      <p>Retail & eCommerce Consulting</p>
                    </li>
                    <li>
                      <p>Omnichannel Commerce</p>
                    </li>
                    <li>
                      <p>Experience Design</p>
                    </li>
                    <li>
                      <p>eCommerce Integration</p>
                    </li>
                    <li>
                      <p>eCommerce Migration</p>
                    </li>
                    <li>
                      <p> eCommerce Support & Maintenance.</p>
                    </li>
                    <li>
                      <p>eCommerce Security.</p>
                    </li>
                    <li>
                      <p>Custom eCommerce Digital Platform Development. </p>
                    </li>

                    <li>
                      <p>Payment Gateway Integrations.</p>
                    </li>
                    <li>
                      <p>Managed Services.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-3 px-0">
                <div className="ourSolutions">
                  <div className="contentImg">
                    <MyImage
                      src="/assets/img/ourSolution4.webp"
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

export default insurance;
