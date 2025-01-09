import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
const Layout = dynamic(import("@/Components/Common/Layout"));
const HealthcareLifestyle = () => {
  return (
    <>
      <Head>
        <title>Advanced Healthcare & Lifestyle IT Solutions | iWebwiser</title>
        <meta
          name="keywords"
          content="iWebwiser, Healthcare & Lifestyle, Healthcare & Lifestyle IT Soltions, Healthcare Systems, Healthcare Digital Transformation"
        />
        <meta
          name="description"
          content="iWebwiser has deep knowledge and proven experience in healthcare IT services and it is designed for every segment of the healthcare & lifestyle industry."
        />

        <link
          rel="canonical"
          href="https://www.iwebwiser.com/healthcare-and-lifestyle"
        />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content="Advanced Healthcare & Lifestyle IT Solutions | iWebwiser"
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FofferHealthcare.webp&w=1920&q=75"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="Advanced Healthcare & Lifestyle IT Solutions | iWebwiser"
        />
        <meta
          property="og:url"
          content="https://www.iwebwiser.com/healthcare-and-lifestyle"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FofferHealthcare.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="iWebwiser has deep knowledge and proven experience in healthcare IT services and it is designed for every segment of the healthcare & lifestyle industry."
        />
      </Head>

      <Layout>
        {/* Industry-Banner Section start here... */}
        <section className="Industry-banner">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-start">
                <div className="col-12 col-lg-7 px-0">
                  {/* Industry-banner Content start here... */}
                  {/* All Industry Navigation content start here... */}
                  <div className="industry-navigate">
                    <Link
                      href={"/healthcare-and-lifestyle"}
                      as={"/healthcare-and-lifestyle"}
                      role="button"
                      className="btn btn-navigate active"
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
                      className="btn btn-navigate"
                    >
                      Tour & Travels
                    </Link>
                  </div>
                  {/* All Industry Navigation content end here... */}
                  <div className="Banner-content">
                    <h4 className="title">
                      Our Digital Solutions For The{" "}
                      <span>Healthcare and Lifestyle Industry.</span>
                    </h4>
                    <p>
                      iWebwiser, a reputable healthcare technology solutions and
                      services provider, brings together its strong capabilities
                      in application development and its extensive knowledge of
                      the healthcare field to help you digitize your healthcare
                      system. We create efficient, secure, scalable, and
                      completely customized healthcare and lifestyle IT
                      solutions that increase the quality of care for patients
                      and lower the costs of operations.
                    </p>

                    <p>
                      With the help of IT and IoT technologies, iWebwiser helps
                      the healthcare and lifestyle industry with better
                      services, increases customer satisfaction levels, and
                      promotes sustainable growth in today's technologically
                      driven environment. As a leading healthcare technology
                      provider, we provide technical and operational solutions
                      to diverse categories of clients across the healthcare
                      spectrum. With our deep knowledge and proven experience in
                      health IT consulting services, we have provided innovative
                      healthcare and lifestyle IT solutions by leveraging the
                      latest technologies, including digital transformation,
                      mobility, big data, analytics, and cloud computing.
                    </p>

                    {
                      <p className="fw-bold">
                        Get your digital transformation today by contacting
                        iWebwiser.
                      </p>
                    }
                    <Link
                      href={"/contact-us"}
                      as={"/contact-us"}
                      className="btn btn-outline-dark"
                      role="button"
                    >
                      Contact Us Now
                    </Link>
                  </div>
                  {/* Industry-banner Content end here... */}
                </div>
                <div className="col-12 col-lg-5 px-0">
                  <div className="healthcareImg">
                    <MyImage
                      src="/assets/img/health&lifestyleBanner.webp"
                      alt="health&lifestyleBanner"
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

        {/* We-Serve-Segments Section start here... */}
        <section className="segments-section">
          <div className="max-content-width">
            <div className="container-fluid">
              <h4 className="title text-center">Segments that We Serve</h4>
              <p className="mx-auto text-center">
                iWebwiser IT solutions are designed for every segment of the
                healthcare and lifestyle industry. We provide customized
                healthcare and lifestyle IT solutions to our clients according
                to their requirements.
              </p>
              <div className="row">
                <div className="col-12 col-md-4 px-0">
                  <div className="segment-card">
                    <h4 className="title">Healthcare Providers</h4>
                    <p>
                      Digital services can catalyze innovations for clinics,
                      hospitals, and other medical providers.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="segment-card">
                    <h4 className="title">Pharma Companies</h4>
                    <p>
                      Effective CRM solutions and productivity suites to
                      revolutionize your operations and business.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="segment-card border-0">
                    <h4 className="title">Healthcare Startups</h4>
                    <p>
                      Benefit from our expertise in the field with our flexible
                      engagement model and competitive offers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* We-Serve-Segments Section end here... */}

        {/* offer Section start here... */}
        <section className="offers">
          <div className="max-content-width">
            <div className="container-fluid">
              <h4 className="title">Our Services</h4>
              <p className="description">
                Each segment is offered by us with equal commitment and
                attention. Take advantage of the exclusive services we offer to
                you.
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
                      Cloud.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Product Engineering</h6>
                    <p className="desc">
                      Develop your digital product using our engineering
                      expertise using DevOps and a flexible approach to speedy
                      time-to-market.
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
                    <h6 className="title">Offshore Development Center</h6>
                    <p className="desc">
                      High-quality software development within a specific time
                      frame and at a low development cost by iWebwiser's
                      professional developers.
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
                  <p className="para">
                    Healthcare Technology Solutions For Improved Patient Care.
                  </p>
                  <ul>
                    <li>
                      <p>Clinic Management Systems.</p>
                    </li>
                    <li>
                      <p>Hospital Information System.</p>
                    </li>
                    <li>
                      <p>Health Insurance System.</p>
                    </li>
                    <li>
                      <p>Care Solutions.</p>
                    </li>
                    <li>
                      <p>Nursing Care System.</p>
                    </li>
                    <li>
                      <p>Healthcare CRM.</p>
                    </li>
                    <li>
                      <p>Patient Engagement.</p>
                    </li>
                    <li>
                      <p>Healthcare eCommerce.</p>
                    </li>

                    <li>
                      <p>Patient Tracking System.</p>
                    </li>

                    <li>
                      <p>Electronic Medical Records.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-3 px-0">
                <div className="ourSolutions">
                  <div className="contentImg">
                    <MyImage
                      src="/assets/img/ourSolution.webp"
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
                Check Our Solutions For <span>Hospitality & Lifestyle</span>{" "}
                Industry Solution.
              </h2>
              <div className="row">
                <div className="col-12 col-md-4 px-lg-0">
                  <div className="Related-card">
                    <div className="Related-img">
                      <MyImage
                        src="/assets/img/portfolio11.webp"
                        alt="RelatedImg"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <div className="card-img-overlay">
                      <div className="overlay-img">
                        <Link
                          href={"/extraordinary-hospital-of-africa"}
                          as={"/extraordinary-hospital-of-africa"}
                          className="stretched-link"
                        >
                          <MyImage
                            src="/assets/img/EHOALogo.webp"
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
                <div className="col-12 col-md-4 px-lg-0">
                  <div className="Related-card">
                    <div className="Related-img">
                      <MyImage
                        src="/assets/img/Related-section2.webp"
                        alt="RelatedImg"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <div className="card-img-overlay">
                      <div className="overlay-img">
                        <Link href={"/medi-fellows"} className="stretched-link">
                          <MyImage
                            src="/assets/img/RelatedLogo2.webp"
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
                <div className="col-12 col-md-4 px-lg-0">
                  <div className="Related-card">
                    <div className="Related-img">
                      <MyImage
                        src="/assets/img/Related-section.webp"
                        alt="RelatedImg"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <div className="card-img-overlay">
                      <div className="overlay-img">
                        <Link
                          href={"/health-power"}
                          as={"/health-power"}
                          className="stretched-link"
                        >
                          <MyImage
                            src="/assets/img/RelatedLogo3.webp"
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

export default HealthcareLifestyle;
