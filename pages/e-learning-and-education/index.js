import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
const Layout = dynamic(import("@/Components/Common/Layout"));

const ELearingEducation = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>
            IT Solutions for E-learning & Education | Digital Transformation{" "}
          </title>
          <meta
            name="keywords"
            content="iWebwiser, E-learning and Education, Learning System, Learning Managment System, Eduction Platform"
          />
          <meta
            name="description"
            content="iWebwiser's IT solutions can support every environment in the e-learning & education industry with the expertise in creating enjoyable educational experiences."
          />
          <link
            rel="canonical"
            href="https://www.iwebwiser.com/e-learning-and-eduction"
          />
          <meta name="robots" content="index, follow" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iWebwiser" />
          <meta
            name="twitter:title"
            content="IT Solutions for E-learning & Education | Digital Transformation"
          />
          <meta name="twitter:site:id" content="@iWebwiser" />
          <meta name="twitter:creator" content="@iWebwiser" />
          <meta
            name="twitter:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FofferEducation.webp&w=1920&q=75"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />

          <meta
            property="og:title"
            content="IT Solutions for E-learning & Education | Digital Transformation"
          />
          <meta
            property="og:url"
            content="https://www.iwebwiser.com/e-learning-and-education"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="iWebwiser" />
          <meta
            property="og:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FofferEducation.webp&w=1920&q=75"
          />
          <meta
            property="og:description"
            content="iWebwiser's IT solutions can support every environment in the e-learning & education industry with the expertise in creating enjoyable educational experiences."
          />
        </Head>

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
                      className="btn btn-navigate active"
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
                  {/* Industry-banner Content start here... */}
                  <div className="Banner-content">
                    <h4 className="title">
                      Innovative IT solutions that can Transform the
                      <span> E-learning and Education industry.</span>{" "}
                    </h4>
                    <p>
                      iWebwiser is among the top companies offering digital
                      innovations in E-learning and Education. We combine our
                      vast technological expertise and deep field knowledge to
                      provide excellence throughout the value chain for
                      education. Our integrated IT solutions can support every
                      environment- preschools, universities, training centers,
                      or workplaces. Additionally, we are focused on the most
                      recent trends to provide educators with the necessary
                      equipment for efficient learning.
                    </p>
                    <p>
                      From our experience working in the E-learning and
                      Education industry, we possess an in-depth knowledge of
                      how schools can leverage advanced technology to enhance
                      students' learning. Our team boosts expertise in creating
                      enjoyable educational experiences through cutting-edge
                      e-learning solutions. Additionally, they are capable of
                      helping set up management tools to ensure seamless
                      operations.
                    </p>

                    <span className="solution-text-bold">
                      Create a solid ground for developing your E-learning and
                      Education app idea.
                    </span>

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
                      src="/assets/img/ELearnBanner.webp"
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
                We strive to provide excellence in the education value chain by
                offering our top services and solutions.
              </p>
              <div className="row service-content">
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Digital Transformation</h6>
                    <p className="desc">
                      Make the most of digital transformation and innovate
                      faster and more efficiently in your industry.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Application Development</h6>
                    <p className="desc">
                      Modernize your existing business apps to improve customer
                      services and generate opportunities for new income streams
                      through our excellent application development methods.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Managining Cloud Services</h6>
                    <p className="desc">
                      We can help you migrate and manage your apps on top cloud
                      platforms such as AWS, Azure, and Google Cloud.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Business Transformation</h6>
                    <p className="desc">
                      We strive to provide excellence in the education value
                      chain by offering customized services to your business
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Product Engineering</h6>
                    <p className="desc">
                      Develop your digital product by leveraging our engineering
                      skills by utilizing DevOps and a flexible approach to
                      speedy time-to-market.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div className="service">
                    <h6 className="title">Experience Design</h6>
                    <p className="desc">
                      Create a better user experience, gain more customer
                      engagement, and distinguish your brand by incorporating
                      user-centric designs with the help of our top-notch
                      designers.
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
            <div className="row align-items-center mx-0 justify-content-between">
              <div className="col-12 col-lg-6 px-0">
                <div className="our-solution-content">
                  <h4 className="title">Our solutions</h4>
                  {/* <p className="para">
                    Healthcare technology solutions for improved patient care
                  </p> */}
                  <ul>
                    <li>
                      <p>Digital Learning Experience.</p>
                    </li>
                    <li>
                      <p>Learning Management System.</p>
                    </li>
                    <li>
                      <p>Video Tutorial Solutions.</p>
                    </li>
                    <li>
                      <p>Student Management System.</p>
                    </li>
                    <li>
                      <p>School Management System.</p>
                    </li>
                    <li>
                      <p>Admission Management System.</p>
                    </li>
                    <li>
                      <p>Cloud-based Education Platform.</p>
                    </li>
                    <li>
                      <p>Online Examination Systems.</p>
                    </li>

                    <li>
                      <p>Skills Management System.</p>
                    </li>
                    <li>
                      <p>Virtual Classroom System.</p>
                    </li>

                    {/* <li>
                      <p>Blockchain-based Certificate Issuance Platform</p>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-3 px-0">
                <div className="ourSolutions">
                  <div className="contentImg">
                    <MyImage
                      src="/assets/img/ourSolution2.webp"
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
                Check Out Our Solutions For{" "}
                <span>
                  {" "}
                  <br />
                  E-Learning Education.
                </span>
              </h2>
              <div className="row">
                <div className="col-12 col-md-4 px-lg-0">
                  <div className="Related-card">
                    <div className="Related-img">
                      <MyImage
                        src="/assets/img/portfolio3.webp"
                        alt="RelatedImg"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <div className="card-img-overlay">
                      <div className="overlay-img">
                        <Link
                          href={"/zidni-academy"}
                          as={"/zidni-academy"}
                          className="stretched-link"
                        >
                          <MyImage
                            src="/assets/img/caseLogo2.webp"
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
                        src="/assets/img/project2.webp"
                        alt="RelatedImg"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <div className="card-img-overlay">
                      <div className="overlay-img">
                        <Link
                          href={"/ishango-e-college"}
                          className="stretched-link"
                        >
                          <MyImage
                            src="/assets/img/project-logo3.webp"
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

export default ELearingEducation;
