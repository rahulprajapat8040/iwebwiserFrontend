import PartOfTeam from "@/Components/Common/PartOfTeam";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Layout from "@/Components/Common/Layout";
import { ApiUrl } from "@/Utility/ApiUrl";

const CaseStudy = ({ caseStudyData }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          Crafting Success | Case Study to Unlock Solutions | iWebwiser
        </title>
        <meta name="keywords" content="" />
        <meta
          name="description"
          content="Craft your success journey with iWebwiser look how closely we work with our client to unlock tailored solutions to expand our client's business globally."
        />
        <link
          rel="canonical"
          href="https://www.iwebwiser.com/case-study-unlock-your-solutions"
        />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content=" Crafting Success | Case Study to Unlock Solutions | iWebwiser"
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fportfolio12.webp&w=1920&q=75"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="Crafting Success | Case Study to Unlock Solutions | iWebwiser"
        />
        <meta
          property="og:url"
          content="https://www.iwebwiser.com/case-study-unlock-your-solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fportfolio12.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="Craft your success journey with iWebwiser look how closely we work with our client to unlock tailored solutions to expand our client's business globally."
        />
      </Head>
      <Layout>
        {/* Case-Studies-Home-section start here... */}
        <section className="case-study-home">
          <div className="max-content-width">
            <div className="case-study-home-bg">
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
                <h4 className="text-center">Case Studies</h4>
                <p className="text-center">
                  See how we interact closely with our clients to develop
                  outstanding outcomes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case-Studies-Home-section end here... */}
        <div className="max-content-width">
          {/* Projects Summary section-1 start here... */}
          {caseStudyData?.map((caseStudy, idx) => {
            const isEven = !(idx % 2); // Calculate if even without exposing index
            return (
              <section
                className={`project-summary ${
                  !isEven ? "project-summary-2" : ""
                } ${idx > 0 ? "spacing-top" : ""}`}
              >
                <div className="container-fluid">
                  <div className="row align-items-center">
                    {isEven ? (
                      <>
                        <div className="col-12 col-lg-4 px-0 order-2 order-md-1">
                          <div className="summary-text">
                            <h5>{caseStudy?.industry?.title}</h5>
                            <h4>{caseStudy?.addCaseStudy?.productName}</h4>
                            <p
                              dangerouslySetInnerHTML={{
                                __html:
                                  caseStudy?.addCaseStudy?.short_description,
                              }}
                            />
                            <div className="text-center text-lg-start">
                              <Link
                                href={`/case-study/${caseStudy?.slug}`}
                                as={`/case-study/${caseStudy?.slug}`}
                                className="btn btn-outline-light"
                              >
                                READ MORE
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-8 px-0 order-1 order-md-2">
                          <div className="summary-img-card ms-auto">
                            <div className="summary-img">
                              <MyImage
                                src={caseStudy?.addCaseStudy?.mainImage}
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </div>
                            <div className="card-img-overlay">
                              <div className="logo-img">
                                <MyImage
                                  src={caseStudy?.addCaseStudy?.image}
                                  alt="case-study"
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-12 col-lg-8 px-0">
                          <div className="summary-img-card">
                            <div className="summary-img me-auto">
                              <MyImage
                                src={caseStudy?.addCaseStudy?.mainImage}
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </div>
                            <div className="card-img-overlay">
                              <div className="logo-img">
                                <MyImage
                                  src={caseStudy?.addCaseStudy?.image}
                                  alt="case-study"
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4 px-0">
                          <div className="summary-text">
                            <h5>{caseStudy?.industry?.title}</h5>
                            <h4>{caseStudy?.addCaseStudy?.productName}</h4>
                            <p
                              dangerouslySetInnerHTML={{
                                __html:
                                  caseStudy?.addCaseStudy?.short_description,
                              }}
                            />
                            <div className="text-center text-lg-start">
                              <Link
                                href={`case-study/${caseStudy?.slug}`}
                                as={`case-study/${caseStudy?.slug}`}
                                className="btn btn-outline-dark bg-white"
                              >
                                READ MORE
                              </Link>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
          {/* Projects Summary section-1 end here... */}
        </div>
        <PartOfTeam />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(`${ApiUrl.getAllCaseStudy}`);
    const data = await response.json();
    return {
      props: {
        caseStudyData: data.data.caseStudies || [],
      },
      // Revalidate every 24 hours
      revalidate: 86400,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        caseStudyData: [],
      },
      revalidate: 86400,
    };
  }
}

export default CaseStudy;
