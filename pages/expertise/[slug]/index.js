import Layout from "@/Components/Common/Layout";
import PartOfTeam from "@/Components/Common/PartOfTeam";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { callApi } from "@/hooks/useapi";
import { ApiUrl } from "@/Utility/ApiUrl";

const Expertises = ({ expertiseData }) => {
  // Remove unused props parameter
  const [isMounted, setIsMounted] = useState(false);
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  // Add these class name arrays
  const classNames = ["pay-per-click", "search-engine", "social-media"];

  const sectionClassNames = ["pay-per-click", "search-engine", "social-media"];

  const rowClassNames = [
    "row-class-1",
    "row-class-2",
    "row-class-3",
    "row-class-4",
    "row-class-5",
  ];

  const colClassNames = [
    "col-12 col-md-6 px-0 col-class-1",
    "col-12 col-md-6 px-0 col-class-2",
    "col-12 col-md-6 px-0 col-class-3",
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Add error handling for invalid data
  if (!isMounted) {
    return null;
  }

  console.log("Rendering expertise data:", expertiseData);
  return (
    <>
      <Head>
        <title>
          iWebwiser | Best Digital Marketing Services | SEO, PPC & SMM
        </title>
        <meta
          name="keywords"
          content="iWebwiser, Pay Per Click Advertising, Seo Services, Social Media Marketing Strategy, Digital Marketing Services"
        />
        <meta
          name="description"
          content="iWebwiser provides the best Digital Marketing Services like pay-per-click advertising, social media marketing strategy, and top SEO services for your business."
        />
        <link
          rel="canonical"
          href="https://www.iwebwiser.com/strategic-marketing"
        />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content=" iWebwiser | Best Digital Marketing Services | SEO, PPC & SMM"
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FstratgicMarket%20(3).webp&w=1920&q=75"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content=" iWebwiser | Best Digital Marketing Services | SEO, PPC & SMM"
        />
        <meta
          property="og:url"
          content="https://www.iwebwiser.com/strategic-marketing"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FstratgicMarket%20(3).webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="iWebwiser provides the best Digital Marketing Services like pay-per-click advertising, social media marketing strategy, and top SEO services for your business."
        />
      </Head>
      <Layout>
        {/* Experties-Home-section start here... */}
        <section className="experties-home">
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
                <h4 className="text-center">{expertiseData?.title} Services</h4>
              </motion.div>
            </div>
          </div>
        </section>
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
                <h4 className="text-center">Digital Marketing Services</h4>
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
                  src={props?.strategyData?.image_1}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </motion.div>
            </div>
          </div>
        </section> */}
        {/* Experties-Home-section end here... */}

        {/* Page Breadcrumb Navigation section start here... */}

        {/* Page Breadcrumb Navigation section end here... */}

        {/* Client-tell-story-section start here... */}
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
                      as={"/  app-web-software-design-development-services"}
                    >
                      All Experts
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <span>{expertiseData?.title}</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <section  className="client-story ">
          <div
          >
            <h4  dangerouslySetInnerHTML={{ __html: expertiseData?.short_description || "" }}></h4>
          </div>
        </section>

        {/* Services section */}
        {expertiseData?.services?.map((subService, index) => (
          <section
            key={subService.id || index}
            className={`Marketing-section ${index % 2 === 0 ? "even" : "odd"} ${
              sectionClassNames[index % sectionClassNames.length]
            } `}
          >
            <div className="max-content-width">
              <div
                className={`container-fluid ${
                  classNames[index % classNames.length]
                }`}
              >
                <div
                  className={`row ${
                    rowClassNames[index % rowClassNames.length]
                  }`}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className={colClassNames[0]}>
                        <div className="Marketing-text">
                          <h4>{subService.title}</h4>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: subService.long_description,
                            }}
                          ></p>
                          <div className="text-center text-lg-start">
                            <Link
                              className="btn btn-outline-dark bg-white"
                              href={`/services-details/${subService?.service_detail?.slug}`}
                              as={`/services-details/${subService?.service_detail?.slug}`}
                            >
                              READ MORE
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className={colClassNames[1]}>
                        <div className="marketing-img">
                          <MyImage
                            className="w-100"
                            src={
                              subService.image ||
                              "/assets/img/default-image.webp"
                            }
                            alt={
                              subService.title
                                ?.toLowerCase()
                                .replace(/\s+/g, "-") || "service"
                            }
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    // ...existing alternate layout code...
                    <>
                      <div className={colClassNames[1]}>
                        <div className="marketing-img">
                          <MyImage
                            className="w-100"
                            src={
                              subService.image ||
                              "/assets/img/default-image.webp"
                            }
                            alt={
                              subService.title
                                ?.toLowerCase()
                                .replace(/\s+/g, "-") || "service"
                            }
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                      <div className={colClassNames[2]}>
                        <div className="Marketing-text">
                          <h4>{subService.title}</h4>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: subService.long_description,
                            }}
                          ></p>
                          <Link
                            className="btn btn-outline-dark bg-white"
                            href={`/services-details/${subService?.service_detail?.slug}`}
                            as={`/services-details/${subService?.service_detail?.slug}`}
                          >
                            READ MORE
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        <PartOfTeam />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const { slug } = params;
    const response = await fetch(`${ApiUrl.getFieldBySlug}/${slug}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      props: {
        expertiseData: data.data,
        slug,
      },
    };
  } catch (error) {
    console.error("Error fetching expertise:", error);
    return {
      props: {
        expertiseData: null,
        slug: params.slug,
        error: error.message,
      },
    };
  }
}

export default Expertises;
