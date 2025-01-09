import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { ApiUrl } from "@/Utility/ApiUrl";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = dynamic(import("@/Components/Common/Layout"));

const Industry = ({ industryData }) => {
    const router = useRouter()
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything until mou
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Head>
        <title>
          {" "}
          Give Growth & Transformation To Your Business | iWebwiser
        </title>
        <meta
          name="keywords"
          content="iWebwiser, Growth and Transformation, Global Company, Design and Development Services, IT Soultions"
        />
        <meta
          name="description"
          content="iWebwiser provides expert solutions & services according to your needs, which will result in the efficient growth and innovative transformation of your business."
        />
        <link rel="canonical" href="https://www.iwebwiser.com/about-us" />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content="Give Growth & Transformation To Your Business | iWebwiser"
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Funique1.webp&w=1920&q=75"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="Give Growth & Transformation To Your Business | iWebwiser"
        />
        <meta property="og:url" content="https://www.iwebwiser.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Funique1.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="iWebwiser provides expert solutions & services according to your needs, which will result in the efficient growth and innovative transformation of your business."
        />
      </Head>
      <Layout>
        {console.log("induties", industryData)}
        {/* Industry page  start*/}
        <div className="">
          <section className="indusnew-sec">
            <div className="container">
              <div className="industry-tpl">
                <h2 className="mb-3">
                  Preferred transformation partner of globle leaders in{" "}
                  <span className="text-primary">HEALTHCARE</span>
                </h2>
                <p>
                  Making visions a reality in all areas of technology has
                  enabled thousands of businesses to grow and dominate in their
                  sectors, just like you could do with your business.
                </p>
                <Link href={"/contact-us"} className="btn btn-primary">
                  Consult our experts
                </Link>
              </div>
              <div className="industr-img">
                <img src="./assets/img/aboutBanner.webp" alt="" />
              </div>
            </div>
          </section>

          <section className="weserveindus">
            <div className="container">
              <div className="indtp">
                <h2 className="sh">Industries We Serve</h2>
                <p className="sd">
                  Providing secure and scalable UI/UX designing services across
                  multiple industries to enhance user engagement and retention
                  results in increased business revenue.
                </p>
              </div>
              <ul className="industryboxes">
                {industryData?.map((item, index) => (
                  <li
                    className="boxes"
                    key={index}
                    onClick={() =>
                      router.push(
                        `'/industries/industry/${item?.industry_page?.slug}`
                      )
                    }
                  >
                    {console.log("induties", item)}
                    <div className="img-box">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="boxcard">
                      <h4>{item.title}</h4>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    </div>
                  </li>
                ))}
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
                <Link href={"/contact-us"} className="btn btn-outline-dark">
                  Let’s Discuss Your Requirement
                </Link>
              </div>
            </div>
          </section>
        </div>
        {/* industry page end */}

        {/* industry detail page start */}
        <div className="d-nne">
          <section className="indusdetlnew">
            <div className="container">
              <h2 className="sh mb-3 text-center">
                Healthcare software development services
              </h2>
              <p className="sd text-center mb-4">
                Making visions a reality in all areas of technology has enabled
                thousands of businesses to grow and dominate in their sectors,
                just like you could do with your business.
              </p>
              <div className="text-center">
                <button className="btn btn-primary text-white">
                  Consult our experts
                </button>
              </div>
            </div>
          </section>

          <section className="breadcrsec">
            <div className="container">
              <div className="industry-navigate">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#">Hospitality & Lifestyle</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="#">E-learning &Education</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="#">Insurance</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="#">RealState</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Tour & Travels
                    </li>
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

          <section class="serinscope-section pt-0">
            <div class="container">
              <ul class="services-grid">
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
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(`${ApiUrl.getAllIndustry}`);
    const data = await response.json();
    return {
      props: {
        industryData: data.data.industryData || [],
      },
      // Revalidate every 24 hours
      revalidate: 86400,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        industryData: [],
      },
      revalidate: 86400,
    };
  }
}

export default Industry;
