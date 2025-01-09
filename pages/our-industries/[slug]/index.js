import Layout from "@/Components/Common/Layout";
import PartOfTeam from "@/Components/Common/PartOfTeam";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { callApi } from "@/hooks/useapi";
import { ApiUrl } from "@/Utility/ApiUrl";

const Expertises = ({ industryData, industries }) => {
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

  console.log("Rendering expertise data:", industries);
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
                          href={`/our-industries/${item?.industry_page?.slug}`}
                          style={{ fontSize: "18px" }}
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
                  Empower digital care with our innovative healthcare software
                  development services
                </h2>
                <p className="sd text-center">
                  Making visions a reality in all areas of technology has
                  enabled thousands of businesses to grow and dominate in their
                  sectors, just like you could do with your business.
                </p>
              </div>
            </div>
          </section>

          <section className="serinscope-section pt-0">
            <div className="container">
              <ul className="services-grid">
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
                </li>
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
