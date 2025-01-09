import Layout from "@/Components/Common/Layout";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ApiUrl } from "@/Utility/ApiUrl";
const Expertises = ({ servicesData }) => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>
          Design & Development of Businesses | Professional Developers
        </title>
        <meta
          name="keywords"
          content="iWebwiser, Design & Development, Professional Developers, Digital Marketing Services, Support Services, Solutions & Services"
        />
        <meta
          name="description"
          content="iWebwiser's professional developers provide top-quality design & development services along with prime support services & IT solutions to grow your business"
        />
        <link
          rel="canonical"
          href="https://www.iwebwiser.com/app-web-software-design-development-services"
        />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content="Design & Development of Businesses | Professional Developers"
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FourSolution2.webp&w=1920&q=75"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="Design & Development of Businesses | Professional Developers"
        />
        <meta
          property="og:url"
          content="https://www.iwebwiser.com/app-web-software-design-development-services"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FourSolution2.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="iWebwiser's professional developers provide top-quality design & development services along with prime support services & IT solutions to grow your business."
        />
      </Head>
      <Layout>
        {/* Experties-Home-section start here... */}
        {/* <section className="experties-home">
          <div className="max-content-width">
            <div className="experties-home-bg">
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
                <h4 className="text-center">Create. Innovate. Promote</h4>
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
                className="experties-img"
              >
                <MyImage
                  className="w-100 d-none"
                  src="/assets/img/expertises.webp"
                  alt="expertise-design-and-development"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </motion.div>
            </div>
          </div>
        </section> */}
        {/* Experties-Home-section end here... */}
        {/* Client-tell-story-section start here... */}
        {/* <section className="client-story">
          <div ref={ref1} className="container-fluid">
            <motion.div
              style={{
                scale: isInView1 ? "1" : "0",
                opacity: isInView1 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
              }}
            >
              <h4>Deliver The Finest Solution at the Right Time.</h4>
              <p>
                Since 2018, iWebwiser has been delivering outstanding apps and
                web solutions to worldwide clients.
              </p>
            </motion.div>
          </div>
        </section> */}
        {/* Client-tell-story-section end here... */}

        {/* All Expertise Section start here... */}
        {/* Design & Development Expertise start here... */}
        {/* <section className="expertise-section">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="expertises">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-7 px-0">
                    <div className="expertise-img">
                      <motion.div className="scaleExpert">
                        <MyImage
                          className=""
                          src="/assets/img/ourSolution2.webp"
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="transforming-business-through-digital-innovation"
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5 px-0">
                    <motion.div className="expertise-content">
                      <h4>Design & Development</h4>
                      <p>
                        Our professional developers can develop websites as well
                        as mobile applications in a wide variety of languages,
                        including React js, Shopify, PHP,.Net, WordPress,
                        Python, and others. We are able to customize any design
                        to meet your requirements with multi-browser
                        compatibility and high-performance compatibility. We can
                        help you set new standards and unlock new sources of
                        business revenue in this design & development world. Our
                        web specialists are committed to providing the best
                        services using modern technological frameworks to ensure
                        the success of your business.
                      </p>
                      <div className="text-center text-lg-start">
                        <Link
                          href={"/software-design-and-development-company"}
                          as={"/software-design-and-development-company"}
                          className="btn btn-outline-light"
                          role="button"
                        >
                          READ MORE
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Design & Development Expertise end here... */}

        {/* Strategic Marketing Expertise start here... */}
        {/* <section className="expertise-section">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="expertises">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-5 px-0">
                    <motion.div className="expertise-content">
                      <h4>Digital Marketing Services</h4>
                      <p>
                        Digital marketing services offer businesses of all sizes
                        the ability to market their brand 24/7 at a moderate
                        cost. Our digital marketing services cover your entire
                        funnel, but we are far from generalists. We assist your
                        business with our engaged digital marketing solutions,
                        including effective SEO, targeted Pay-Per-Click, and
                        Social Media Marketing. Whether you invest in one, the
                        other, or all, they are a great way to grow your
                        business over time. These are the best digital marketing
                        solutions for enhancing your business at a new level.
                      </p>
                      <div className="text-center text-lg-start">
                        <Link
                          href={"/strategic-marketing"}
                          as={"/strategic-marketing"}
                          className="btn btn-outline-light"
                          role="button"
                        >
                          READ MORE
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-12 col-lg-7 px-0">
                    <div className="expertise-img">
                      <motion.div className="scaleExpert">
                        <MyImage
                          className=""
                          src="/assets/img/stratgicMarket (2).webp"
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="boost-your-online-visibility-and-outshine-your-competitor-with-company-marketing-strategy"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Strategic Marketing Expertise end here... */}

        {/* Support Service Expertise start here... */}
        {/* <section className="expertise-section">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="expertises">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-7 px-0">
                    <div className="expertise-img">
                      <motion.div className="scaleExpert">
                        <MyImage
                          className=""
                          src="/assets/img/hosting.webp"
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="projsupport-service-offer-a-cost-effective-solution-to-ensure-everything-runs-effectivelyect"
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5 px-0">
                    <div className="expertise-content">
                      <h4>Support Service</h4>
                      <p>
                        In today's business environment, staying up to date is
                        essential. Support services are a rich source of
                        information that can be used to evaluate the product and
                        services. Our professionals can provide a wide range of
                        support services that will save you time and money. With
                        our comprehensive, unified solutions and purpose-built
                        solar tracking service model, you can get the most out
                        of your enterprise software, invest in innovation, gain
                        a competitive advantage, and drive growth.
                      </p>
                      <div className="text-center text-lg-start">
                        <Link
                          href={"/support-and-services"}
                          as={"/support-and-services"}
                          className="btn btn-outline-light"
                          role="button"
                        >
                          READ MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Support Service Expertise end here... */}

        {/* Solutions & offerings Expertise start here... */}
        {/* <section className="expertise-section">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="expertises">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-5 px-0">
                    <div className="expertise-content">
                      <h4>Solutions & Service</h4>
                      <p>
                        We innovatively provide end-to-end IT solutions &
                        services. Our wide range of services allows you to
                        operate, manage, support, customize, connect, protect,
                        monitor and optimize your business applications,
                        databases and technology software platforms. IT
                        solutions & services cover a wide range of products and
                        industries. Without them, society and companies would be
                        unable to expand their networks. Our Advanced systems
                        cover the capabilities of traditional work arrangements,
                        from basic operations such as data entry and record
                        keeping to completing demanding tasks.
                      </p>
                      <div className="text-center text-lg-start">
                        <Link
                          href={"/our-solutions"}
                          as={"/our-solutions"}
                          className="btn btn-outline-light"
                          role="button"
                        >
                          READ MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 px-0">
                    <div className="expertise-img">
                      <motion.div className="scaleExpert">
                        <MyImage
                          className=""
                          src="/assets/img/expertSolution.webp"
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="solutions-iwebwiser-offers"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Solutions & offerings Expertise end here... */}
        {/* All Expertise Section end here... */}

        {/* services page start */}
        <div className="">
          <section className="servicenw-section">
            <div className="container">
              <h3 className="sh text-center">
                Since 2019 we have helped our clients tell their story through a{" "}
                <br /> plethora of digital innovation.
              </h3>
              <p className="sd text-center">
                Making visions a reality in all areas of technology has enabled
                thousands of businesses to grow and <br /> dominate in their
                sectors, just like you could do with your business.
              </p>
              <div className="d-flex align-items-center justify-content-center mb-5">
                <Link href={"/our-company"} className="btn btn-outline-dark">
                  More about us
                </Link>
              </div>
              <ul className="service-tabs">
                {servicesData?.map((item, index) => (
                  <li key={index}>{item?.title || ""}</li>
                ))}
              </ul>
            </div>
          </section>

          {servicesData?.map((item, index) => (
            <section
              className={`servicenw-${
                index % 2 === 0 ? "design-development" : "digital-marketing"
              }`}
              key={index}
            >
              <div className="container">
                {index % 2 === 0 ? (
                  // Left content, Right image layout
                  <>
                    <div className="lftbx">
                      <h2 className="sh">{item?.title || ""}</h2>
                      {mounted ? (
                        <p
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></p>
                      ) : (
                        <p>{item?.description || ""}</p>
                      )}
                      <div className="sub-services">
                        {Array.isArray(item?.services) &&
                          item?.services?.map((service, idx) => (
                            <Link
                              key={idx}
                              href={`services-details/${
                                service?.service_detail?.slug || ""
                              }`}
                              className="btn"
                            >
                              {service?.title || ""}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11 7.9917H12V10.9917C12 11.5417 11.55 11.9917 11 11.9917H1C0.45 11.9917 0 11.5417 0 10.9917V0.991699C0 0.441699 0.45 -0.00830078 1 -0.00830078H4V0.991699H1V10.9917H11V7.9917ZM6 -0.00830078L8.25 2.2417L5 5.4917L6.5 6.9917L9.75 3.7417L12 5.9917V-0.00830078H6Z"
                                  fill="#0029FF"
                                />
                              </svg>
                            </Link>
                          ))}
                      </div>
                      {item?.buttonText && (
                        <Link href={"/contact-us"} className="btn btn-dark">
                          {item?.buttonText}
                        </Link>
                      )}
                    </div>
                    <div className="image-container">
                      {item?.image && (
                        <img
                          src={item.image}
                          alt={`${item?.title || ""} mockups`}
                        />
                      )}
                    </div>
                  </>
                ) : (
                  // Left image, Right content layout
                  <>
                    <div className="image-container">
                      {item?.image && (
                        <img
                          src={item.image}
                          alt={`${item?.title || ""} mockups`}
                        />
                      )}
                    </div>
                    <div className="lftbx">
                      <h2 className="sh">{item?.title}</h2>
                      {mounted ? (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        ></p>
                      ) : (
                        <p>{item?.description || ""}</p>
                      )}
                      <div className="sub-services">
                        {item?.services?.map((service, idx) => (
                          <Link
                            key={idx}
                            href={
                              `services-details/${service?.service_detail?.slug}` ||
                              "/"
                            }
                            className="btn"
                          >
                            {service?.title}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11 7.9917H12V10.9917C12 11.5417 11.55 11.9917 11 11.9917H1C0.45 11.9917 0 11.5417 0 10.9917V0.991699C0 0.441699 0.45 -0.00830078 1 -0.00830078H4V0.991699H1V10.9917H11V7.9917ZM6 -0.00830078L8.25 2.2417L5 5.4917L6.5 6.9917L9.75 3.7417L12 5.9917V-0.00830078H6Z"
                                fill="#0029FF"
                              />
                            </svg>
                          </Link>
                        ))}
                      </div>
                      {item?.buttonText && (
                        <Link href={item?.buttonLink || ""} className="btn btn-dark">
                          {item?.buttonText}
                        </Link>
                      )}
                    </div>
                  </>
                )}
              </div>
            </section>
          ))}

          {/* <section className="servicenw-design-development">
            <div className="container">
              <div className="lftbx">
                <h2 className="sh">Design and development</h2>
                <p>Working across a range of industries over the last two decades we have noticed a significant rise in the need for mobile app development. Because of such demands we have built applications for many major brands to provide next level experiences for their customers. Understanding the different clientele and technology sectors we can tailor any application to meet the needs and requirements of any business.</p>
                <div className="sub-services">
                  <Link href={'/services-details'} className="btn">App development <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.9917H12V10.9917C12 11.5417 11.55 11.9917 11 11.9917H1C0.45 11.9917 0 11.5417 0 10.9917V0.991699C0 0.441699 0.45 -0.00830078 1 -0.00830078H4V0.991699H1V10.9917H11V7.9917ZM6 -0.00830078L8.25 2.2417L5 5.4917L6.5 6.9917L9.75 3.7417L12 5.9917V-0.00830078H6Z" fill="#0029FF" />
                  </svg></Link>
                  <Link href={'/services-details'} className="btn">Website Development <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.9917H12V10.9917C12 11.5417 11.55 11.9917 11 11.9917H1C0.45 11.9917 0 11.5417 0 10.9917V0.991699C0 0.441699 0.45 -0.00830078 1 -0.00830078H4V0.991699H1V10.9917H11V7.9917ZM6 -0.00830078L8.25 2.2417L5 5.4917L6.5 6.9917L9.75 3.7417L12 5.9917V-0.00830078H6Z" fill="#0029FF" />
                  </svg></Link>
                  <Link href={'/services-details'} className="btn">UI & UX Figma design <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.9917H12V10.9917C12 11.5417 11.55 11.9917 11 11.9917H1C0.45 11.9917 0 11.5417 0 10.9917V0.991699C0 0.441699 0.45 -0.00830078 1 -0.00830078H4V0.991699H1V10.9917H11V7.9917ZM6 -0.00830078L8.25 2.2417L5 5.4917L6.5 6.9917L9.75 3.7417L12 5.9917V-0.00830078H6Z" fill="#0029FF" />
                  </svg></Link>
                  <Link href={'/services-details'} className="btn">Graphics <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.9917H12V10.9917C12 11.5417 11.55 11.9917 11 11.9917H1C0.45 11.9917 0 11.5417 0 10.9917V0.991699C0 0.441699 0.45 -0.00830078 1 -0.00830078H4V0.991699H1V10.9917H11V7.9917ZM6 -0.00830078L8.25 2.2417L5 5.4917L6.5 6.9917L9.75 3.7417L12 5.9917V-0.00830078H6Z" fill="#0029FF" />
                  </svg></Link>
                  <Link href={'/services-details'} className="btn">Custom software Development <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.9917H12V10.9917C12 11.5417 11.55 11.9917 11 11.9917H1C0.45 11.9917 0 11.5417 0 10.9917V0.991699C0 0.441699 0.45 -0.00830078 1 -0.00830078H4V0.991699H1V10.9917H11V7.9917ZM6 -0.00830078L8.25 2.2417L5 5.4917L6.5 6.9917L9.75 3.7417L12 5.9917V-0.00830078H6Z" fill="#0029FF" />
                  </svg></Link>
                </div>
              </div>
              <div className="image-container">
                <img src="./assets/img/servicepg-img1.png" alt="Design and development mockups" />
              </div>
            </div>
          </section>

          <section className="servicenw-digital-marketing">
            <div className="container">
              <div className="image-container">
                <img src="./assets/img/servicepg-img2.png" alt="Digital marketing mockups" />
              </div>
              <div className="lftbx">
                <h2 className="sh">Digital Marketing</h2>
                <p>Working across a range of industries over the last two decades we have noticed a significant rise in the need for mobile app development. Because of such demands we have built applications for many major brands to provide next level experiences for their customers. Understanding the different clientele and technology sectors we can tailor any application to meet the needs and requirements of any business.</p>
                <div className="sub-services">
                  <Link href={'/services-details'} className="btn">SEO <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.9917H12V10.9917C12 11.5417 11.55 11.9917 11 11.9917H1C0.45 11.9917 0 11.5417 0 10.9917V0.991699C0 0.441699 0.45 -0.00830078 1 -0.00830078H4V0.991699H1V10.9917H11V7.9917ZM6 -0.00830078L8.25 2.2417L5 5.4917L6.5 6.9917L9.75 3.7417L12 5.9917V-0.00830078H6Z" fill="#0029FF" />
                  </svg></Link>
                  <Link href={'/services-details'} className="btn">SMM <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.9917H12V10.9917C12 11.5417 11.55 11.9917 11 11.9917H1C0.45 11.9917 0 11.5417 0 10.9917V0.991699C0 0.441699 0.45 -0.00830078 1 -0.00830078H4V0.991699H1V10.9917H11V7.9917ZM6 -0.00830078L8.25 2.2417L5 5.4917L6.5 6.9917L9.75 3.7417L12 5.9917V-0.00830078H6Z" fill="#0029FF" />
                  </svg></Link>
                  <Link href={'/services-details'} className="btn">Paid Media <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.9917H12V10.9917C12 11.5417 11.55 11.9917 11 11.9917H1C0.45 11.9917 0 11.5417 0 10.9917V0.991699C0 0.441699 0.45 -0.00830078 1 -0.00830078H4V0.991699H1V10.9917H11V7.9917ZM6 -0.00830078L8.25 2.2417L5 5.4917L6.5 6.9917L9.75 3.7417L12 5.9917V-0.00830078H6Z" fill="#0029FF" />
                  </svg></Link>
                  <Link href={'/services-details'} className="btn">Email marketing <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.9917H12V10.9917C12 11.5417 11.55 11.9917 11 11.9917H1C0.45 11.9917 0 11.5417 0 10.9917V0.991699C0 0.441699 0.45 -0.00830078 1 -0.00830078H4V0.991699H1V10.9917H11V7.9917ZM6 -0.00830078L8.25 2.2417L5 5.4917L6.5 6.9917L9.75 3.7417L12 5.9917V-0.00830078H6Z" fill="#0029FF" />
                  </svg></Link>
                </div>
              </div>

            </div>
          </section>

          <section className="servicenw-it-solutions">
            <div className="container">
              <div className="lftbx">
                <h2 className="sh">IT Solutions</h2>
                <p>Working across a range of industries over the last two decades we have noticed a significant rise in the need for mobile app development. Because of such demands we have built applications for many major brands to provide next level experiences for their customers. Understanding the different clientele and technology sectors we can tailor any application to meet the needs and requirements of any business.</p>
                <Link href={'/contact-us'} className="btn btn-dark" >Find your solution</Link>
              </div>
              <div className="image-container">
                <img src="./assets/img/servicepg-img3.png" alt="IT solutions image" />
              </div>
            </div>
          </section>
          <section className="servicenw-support-services">
            <div className="container">
              <div className="image-container">
                <img src="./assets/img/servicepg-img4.png" alt="Support services image" />
              </div>
              <div className="lftbx">
                <h2 className="sh">Support Services</h2>
                <p className="">Working across a range of industries over the last two decades we have noticed a significant rise in the need for mobile app development. Because of such demands we have built applications for many major brands to provide next level experiences for their customers. Understanding the different clientele and technology sectors we can tailor any application to meet the needs and requirements of any business.</p>
                <Link href={'/contact-us'} className="btn btn-dark">We are here to support you</Link>
              </div>

            </div>
          </section> */}
        </div>
        {/* services page end */}

        {/* Become-A-part-of-Team section start here... */}
        {/* <PartOfTeam /> */}
        {/* Become-A-part-of-Team section end here... */}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(`${ApiUrl.getField}`);
    const data = await response.json();

    return {
      props: {
        servicesData: data.data || [],
      },
      // Revalidate every 24 hours
      revalidate: 86400,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        servicesData: [],
      },
      revalidate: 86400,
    };
  }
}

export default Expertises;
