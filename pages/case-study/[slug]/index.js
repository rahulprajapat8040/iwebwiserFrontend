import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/Components/Common/Layout";
import Head from "next/head";
import { ApiUrl } from "@/Utility/ApiUrl";
import { useEffect, useState } from "react";

const CaseDetail = ({ caseStudyData }, props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything until mounted
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Case Study | {caseStudyData?.addCaseStudy?.productName}</title>
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
                <p>{caseStudyData?.addCaseStudy?.productSlogan}</p>
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
                  src={caseStudyData?.addCaseStudy?.image}
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
                      <span>{caseStudyData?.addCaseStudy?.productName}</span>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Case Detaill Breadcrumb Navigation section end here... */}
              <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                  <div className="project-detail-text">
                    <h5>{caseStudyData?.industry?.title || "No data"}</h5>
                    <h4>{caseStudyData?.addCaseStudy?.productName}</h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: caseStudyData?.addCaseStudy?.full_description,
                      }}
                    ></p>
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
                            <p>
                              {caseStudyData?.addCaseStudy?.country || "India"}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Platform Users</p>
                          </th>
                          <td>
                            <p>
                              {caseStudyData?.addCaseStudy?.platformUsers ||
                                "0"}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {caseStudyData?.addtional_information?.length > 0 && (
                      <table className="table table-borderless">
                        <tbody>
                          {caseStudyData?.addtional_information?.map(
                            (info, index) => (
                              <tr key={index}>
                                <th>
                                  <p>{info?.title}</p>
                                </th>
                                <td>{info?.description}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    )}
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
                      src={caseStudyData?.challenges?.image}
                      alt="about-case-view"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-5 px-0">
                  <div className="project-slide-text">
                    <div>
                      <h3>Challenge</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: caseStudyData?.challenges?.challeng,
                        }}
                      ></p>
                    </div>
                    <div>
                      <h3>Solution</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: caseStudyData?.challenges?.solution,
                        }}
                      ></p>
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
                    <p
                      className="description"
                      dangerouslySetInnerHTML={{
                        __html: caseStudyData?.impact?.businessImpact,
                      }}
                    ></p>
                    <h5>User Impact:</h5>
                    <p
                      className="description"
                      dangerouslySetInnerHTML={{
                        __html: caseStudyData?.impact?.userImpact,
                      }}
                    ></p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7 order-1 order-lg-2">
                  <div className="feature-img">
                    <img
                      src={caseStudyData?.impact?.image}
                      alt="case-Featured"
                      className="w-100 "
                      style={{
                        objectFit: "contain",
                        height: "800px",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {caseStudyData?.system_phase?.length > 1 && (
          <section className="system-phase ">
            <div className="max-14-content">
              <h3 className="title">System phases</h3>
              <div className="phase-content">
                {caseStudyData?.system_phase?.map((item) => (
                  <div>
                    <h4 className="content-title">{item?.title}</h4>
                    <ul className="border-right">
                      {item?.features?.map((feature) => (
                        <li key={feature}>
                          <p>{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
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

export async function getServerSideProps({ params }) {
  try {
    const { slug } = params;
    const response = await fetch(`${ApiUrl.getCaseStudyBySlug}/${slug}`);
    const data = await response.json();

    // Ensure we have valid data and transform any undefined values to null
    const sanitizedData = {
      addCaseStudy: data.data?.addCaseStudy || null,
      addtional_information: data.data?.addtional_information || [],
      challenges: data.data?.challenges || null,
      impact: data.data?.impact || null,
      system_phase: data.data?.system_phase || [],
      industry: data.data?.industry || null
    };

    return {
      props: {
        caseStudyData: sanitizedData,
        slug: slug || null,
      },
    };
  } catch (error) {
    console.error("Error fetching case study:", error);
    return {
      props: {
        caseStudyData: null,
        slug: params.slug || null,
        error: "Failed to fetch case study data"
      },
    };
  }
}

export default CaseDetail;
