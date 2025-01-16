import Layout from "@/Components/Common/Layout";
import PartOfTeam from "@/Components/Common/PartOfTeam";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { callApi } from "@/hooks/useapi";
import { ApiUrl } from "@/Utility/ApiUrl";
import ProjectsSection from "@/Components/Home/ProjectsSection";
import { Toaster, toast } from "react-hot-toast";
import { usePathname } from "next/navigation";

const Expertises = ({ industryData, industries }) => {
  // Remove unused props parameter
  const [isMounted, setIsMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const pathName = usePathname();
  const ref1 = useRef(null);
  const ref5 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref5, { once: true });

  const parsedData = industryData?.industry?.caseStudies[currentIndex];
  const parsedCase = JSON.parse(parsedData.addCaseStudy);

  const nextClick = () => {
    if (currentIndex < industryData?.industry.caseStudies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(industryData.industry.caseStudies.length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < industryData.industry.caseStudies.length - 1
          ? prevIndex + 1
          : 0
      );
    }, 5000); // Change slides every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [industryData.industry.caseStudies.length]);

  const isActive = (path) => pathName.includes(path);
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

  return (
    <>
      <Toaster />
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
        <div className="d-nne">
          <section className="indusdetlnew">
            <div className="container">
              <h2 className="sh mb-3 text-center">
                {industryData?.hero_title || ""}
              </h2>
              <p
                className="sd text-center mb-4"
                dangerouslySetInnerHTML={{
                  __html: industryData?.hero_description || "",
                }}
              ></p>
              <div className="text-center">
                <Link
                  href={"/contact-us"}
                  className="btn btn-primary text-white"
                >
                  Consult our experts
                </Link>
              </div>
            </div>
          </section>

          <section className="breadcrsec">
            <div className="container">
              <div className="industry-navigate">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb d-flex justify-content-center">
                    {industries?.map((item) => (
                      <li className="breadcrumb-item">
                        {console.log("item", item)}
                        <Link
                          href={`/our-industries/${item?.industry_page?.slug || ''} `}
                          style={{ fontSize: "18px" }}
                          className={
                            isActive(item?.industry_page?.slug)
                              ? "text-black fw-bold"
                              : ""
                          }
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                    {/* <li className="breadcrumb-item">
                      <a href="#">Hospitality & Lifestyle</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">E-learning &Education</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Insurance</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">RealState</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Tour & Travels
                    </li> */}
                  </ol>
                </nav>
              </div>
            </div>
          </section>

          <section className="empowrdes">
            <div className="container">
              <div className="tpsec">
                <h2 className="sh text-center mb-3">
                  {industryData?.industry_title || ""}
                </h2>
                {/* <h2 className="sh text-center mb-3">
                  Empower digital care with our innovative healthcare software
                  development services
                </h2> */}
                {/* <p className="sd text-center">
                  Making visions a reality in all areas of technology has
                  enabled thousands of businesses to grow and dominate in their
                  sectors, just like you could do with your business.
                </p> */}
                <p
                  className="sd text-center"
                  dangerouslySetInnerHTML={{
                    __html: industryData?.industry_description || "",
                  }}
                ></p>
              </div>
            </div>
          </section>

          <section className="serinscope-section pt-0">
            <div className="container">
              <ul className="services-grid">
                {industryData?.industrySolution?.map((item) => (
                  <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
                {/* <li>
                  <h3>Healthcare software</h3>
                  <p>
                    IT solutions to simplify and streamline the operations in
                    processes like listing services, booking deals, managing
                    customers, and more.
                  </p>
                </li>
                <li>
                  <h3>Custome software development</h3>
                  <p>
                    Industry-leading digital solutions to help lodging
                    organizations embrace innovation and redefine the guest
                    experiences.
                  </p>
                </li>
                <li>
                  <h3>Healthcare E-commerce</h3>
                  <p>
                    Integrated IT solutions for organizations managing lifestyle
                    spaces like golf courses, stadiums, racecourses, arenas, and
                    more.
                  </p>
                </li>
                <li>
                  <h3>Healthcare software</h3>
                  <p>
                    IT solutions to simplify and streamline the operations in
                    processes like listing services, booking deals, managing
                    customers, and more.
                  </p>
                </li>
                <li>
                  <h3>Custome software development</h3>
                  <p>
                    Industry-leading digital solutions to help lodging
                    organizations embrace innovation and redefine the guest
                    experiences.
                  </p>
                </li>
                <li>
                  <h3>Healthcare E-commerce</h3>
                  <p>
                    Integrated IT solutions for organizations managing lifestyle
                    spaces like golf courses, stadiums, racecourses, arenas, and
                    more.
                  </p>
                </li> */}
              </ul>
            </div>
          </section>
          <section className="clientdevel">
            <div className="container">
              <h2 className="text-center sh mb-3">
                We work with clients developing Industry- leading Solutions
              </h2>
              <p className="text-center sd mb-4">
                Making visions a reality in all areas of technology has enabled
                thousands of businesses to grow and dominate in their sectors,
                just like you could do with your business.
              </p>
              <div className="text-center ">
                <button className="btn btn-outline-dark">
                  Let’s Discuss Your Requirement
                </button>
              </div>
            </div>
          </section>
          <section className="out-prosec">
            <div className="max-content-width">
              <div
                style={{
                  transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
                }}
              >
                <h3 className="sh">{ProjectsSection?.heading_1}</h3>
                <p className="sd">{ProjectsSection?.Paragraph}</p>
              </div>
              <div className="content pb-3 pb-lg-5 ">
                <React.Fragment>
                  <div
                    className="inner-card "
                    style={{
                      transition:
                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                    }}
                  >
                    <img src={parsedCase.mainImage} alt="img" />
                    <div className="inner-info">
                      <span className="flag-icon">
                        {/* <img src={ProjectsSection?.InnerCard_1?.FlagImg} alt="" /> */}
                      </span>
                      <div className="abscon">
                        <img src={parsedCase.image} alt="" />
                        <h4>{parsedCase.productName}</h4>
                        <p>{ProjectsSection?.InnerCard_1?.Paragraphinner}</p>
                      </div>
                    </div>
                  </div>
                  <div className="rght">
                    <div class="imgbx">
                      <img src={parsedCase.image} alt="" />
                    </div>
                    {/* <h4>"</h4> */}
                    <p
                      class="description"
                      dangerouslySetInnerHTML={{
                        __html: parsedCase.short_description,
                      }}
                    ></p>
                    <div class="stats">
                      <div class="stat">
                        <h3>Users</h3>
                        <p>{parsedCase.platformUsers} Users</p>
                      </div>
                      <div class="stat">
                        <h3>Downloads</h3>
                        <p>{parsedCase.downloads}</p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
                <div
                  className="position-absolute p-2 start-0"
                  onClick={prevClick}
                  style={{
                    transition:
                      "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.26)",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M70 20 L30 50 L70 80"
                      stroke="black"
                      stroke-width="5"
                      fill="none"
                    />
                  </svg>
                </div>
                <div
                  onClick={nextClick}
                  className="position-absolute p-2 end-0"
                  style={{
                    transition:
                      "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.26)",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 20 L70 50 L30 80"
                      stroke="black"
                      stroke-width="5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* <div className="content pb-3 pb-lg-5">
            <div className="inner-card" style={{
              transform: isInView6 ? "none" : "translateX(-100px)",
              opacity: isInView6 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={ProjectsSection?.InnerCard_1?.Img} alt="" />
              <div className="inner-info">
                <span className="flag-icon"><img src={ProjectsSection?.InnerCard_1?.FlagImg} alt="" /></span>
                <div className="abscon">
                  <img src='./assets/img/medifellowswhite.png' alt="" />
                  <h4>{ProjectsSection?.InnerCard_1?.heading}</h4>
                  <p>{ProjectsSection?.InnerCard_1?.Paragraphinner}</p>
                </div>
              </div>
            </div>
            <div className="rght">
              <div class="imgbx">
                <img src={ProjectsSection?.InnerCard_1?.LogoImg} alt="" />
              </div>
              <h4>Healthcare IT Solutions</h4>
              <p class="description">
                MediFellows is a new social media platform that helps  doctors stay connected with other medical professionals. It  provides a digital platform for the medical community that  offers easy access, credible content, and productive  interaction within the industry.
              </p>
              <div class="stats">
                <div class="stat">
                  <h3>Users</h3>
                  <p>10K Users</p>
                </div>
                <div class="stat">
                  <h3>Downloads</h3>
                  <p>300k</p>
                </div>
              </div>
            </div>
          </div> */}
              {/* <div className="content d-none">
            <div className="inner-card" style={{
              transform: isInView7 ? "none" : "translateY(-100px)",
              opacity: isInView7 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={ProjectsSection?.InnerCard_2?.Img} alt="" />
              <div className="inner-info">
                <span className="flag-icon"><img src={ProjectsSection?.InnerCard_2?.FlagImg} alt="" /></span>
                <div className="abscon">
                  <img src={ProjectsSection?.InnerCard_2?.LogoImg} alt="" />
                  <h4>{ProjectsSection?.InnerCard_2?.heading}</h4>
                  <p>{ProjectsSection?.InnerCard_2?.Paragraphinner}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content d-none">
            <div className="inner-card" style={{
              transform: isInView8 ? "none" : "translateX(100px)",
              opacity: isInView8 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={ProjectsSection?.InnerCard_3?.Img} alt="" />
              <div className="inner-info">
                <span className="flag-icon"><img src={ProjectsSection?.InnerCard_3?.FlagImg} alt="" /></span>
                <div className="abscon">
                  <img src={ProjectsSection?.InnerCard_3?.LogoImg} alt="" />
                  <h4>{ProjectsSection?.InnerCard_3?.heading}</h4>
                  <p>{ProjectsSection?.InnerCard_3?.Paragraphinner}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content d-none">
            <div className="inner-card" style={{
              transform: isInView16 ? "none" : "translateY(-100px)",
              opacity: isInView16 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={ProjectsSection?.InnerCard_4?.Img} alt="" />
              <div className="inner-info">
                <span className="flag-icon"><img src={ProjectsSection?.InnerCard_4?.FlagImg} alt="" /></span>
                <div className="abscon">
                  <img src={ProjectsSection?.InnerCard_4?.LogoImg} alt="" />
                  <h4>{ProjectsSection?.InnerCard_4?.heading}</h4>
                  <p>{ProjectsSection?.InnerCard_4?.Paragraphinner}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content d-none">
            <div className="inner-card" style={{
              transform: isInView17 ? "none" : "translateX(100px)",
              opacity: isInView17 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={ProjectsSection?.InnerCard_5?.Img} alt="" />
              <div className="inner-info">
                <span className="flag-icon"><img src={ProjectsSection?.InnerCard_5?.FlagImg} alt="" /></span>
                <div className="abscon">
                  <img src={ProjectsSection?.InnerCard_5?.LogoImg} alt="" />
                  <h4>{ProjectsSection?.InnerCard_5?.heading}</h4>
                  <p>{ProjectsSection?.InnerCard_5?.Paragraphinner}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content d-none">
            <div className="inner-card" style={{
              transform: isInView18 ? "none" : "translateY(-100px)",
              opacity: isInView18 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={ProjectsSection?.InnerCard_6?.Img} alt="" />
              <div className="inner-info">
                <span className="flag-icon"><img src={ProjectsSection?.InnerCard_6?.FlagImg} alt="" /></span>
                <div className="abscon">
                  <img src={ProjectsSection?.InnerCard_6?.LogoImg} alt="" />
                  <h4>{ProjectsSection?.InnerCard_6?.heading}.</h4>
                  <p>{ProjectsSection?.InnerCard_6?.Paragraphinner}</p>
                </div>
              </div>
            </div>
          </div> */}

              <div class="text-center mt-lg-5 mt-3">
                <Link
                  class="btn btn-outline-dark"
                  role="button"
                  href="/case-study-unlock-your-solutions"
                >
                  OUR STORIES/PORTFOLIO
                </Link>
              </div>
            </div>
          </section>
        </div>
        <PartOfTeam />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const { slug } = params;
    const allIndustry = await fetch(`${ApiUrl.getAllIndustry}`);
    const response = await fetch(`${ApiUrl.getIndustryDetailBySlug}/${slug}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const industries = await allIndustry.json();

    const data = await response.json();
    return {
      props: {
        industries: industries.data.industryData,
        industryData: data.data,

        slug,
      },
    };
  } catch (error) {
    console.error("Error fetching expertise:", error);
    return {
      props: {
        industryData: null,
        slug: params.slug,
        error: error.message,
      },
    };
  }
}

export default Expertises;
