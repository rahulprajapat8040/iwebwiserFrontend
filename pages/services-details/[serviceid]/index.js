import React, { useState, useEffect } from "react";
import Layout from "@/Components/Common/Layout";
import Head from "next/head";
import { ApiUrl } from "@/Utility/ApiUrl";
import { callApi } from "@/hooks/useapi";
import Link from "next/link";
import dynamic from "next/dynamic";

// Import client component dynamically
const DynamicFAQSection = dynamic(
  () => import("@/Components/ServicesDetails/FAQSection"),
  {
    ssr: false,
  }
);

// Move sanitizer outside component
const sanitizeHtml = (html) => {
  if (typeof html !== "string") return "";
  return html
    .replace(/<\/?(?!p|br|strong|em)[^>]*>/gi, "") // Only allow p, br, strong, em tags
    .replace(/[\r\n]+/g, ""); // Remove extra line breaks
};

function ServicesDetails({ serverData, stepsDatas }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  console.log("serverData", serverData);
  useEffect(() => {
    // Pre-process data on client side
    if (serverData) {
      const processedData = {
        ...serverData,
        hero_description: sanitizeHtml(serverData.hero_description),
        ServiceDetailDescription: sanitizeHtml(
          serverData.ServiceDetailDescription
        ),
        serviceIndustryDescription: sanitizeHtml(
          serverData.serviceIndustryDescription
        ),
        sub_services: serverData.sub_services?.map((service) => ({
          ...service,
          description: sanitizeHtml(service.short_description),
        })),
        service: {
          ...serverData.service,
          industries: serverData.service?.industries?.map((item) => ({
            ...item,
            description: sanitizeHtml(item.description),
          })),
          serviceToolDescription: sanitizeHtml(
            serverData.serviceToolDescription
          ),
        },
      };
      setData(processedData);
      setIsLoading(false);
    }
  }, [serverData]);

  if (isLoading || !data) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

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
        <div className="">
          {/* Static/Server-rendered sections */}
          <section className="servidetbnr">
            <div className="container d-flex flex-column justify-content-center">
              <h3 className="sh text-center">
                {data?.hero_title || "No Title Available"}
              </h3>
              <div
                className="sd text-center"
                // Safe server-side rendering of HTML
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html: data.hero_description,
                }}
              />
              <Link
                href={data?.heroButtonLink || "/"}
                class="btn btn-outline-dark mx-auto "
              >
                {data?.heroButtonText || "No Text Available"}
              </Link>
            </div>
          </section>
          <section class="servinte pt-0">
            <div class="container">
              <div class="servinte-box-left">
                <div className="polyns">
                  <img src="../assets/img/Polygontooltp.png" alt="" />
                </div>
                <h4 class="servinte-title">
                  {data?.ServiceDetailTitle || "No Title Available"}
                </h4>
              </div>
              <div class="servinte-box-right">
                <div
                  class="servinte-description"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.ServiceDetailDescription ||
                      "No Description Available",
                  }}
                ></div>
                <div className="polyns">
                  <img src="../assets/img/Polygontooltp.png" alt="" />
                </div>
              </div>
            </div>
          </section>
          <section class="serinscope-section pt-0">
            <div class="container">
              <div class="serinscope-header">
                <h3 class="sh">
                  {data?.ServiceDetailSubTitle || "No Title Available"}
                </h3>
                <Link
                  href={data?.ServiceDetailButtonUrl || "/service"}
                  class="btn btn-outline-dark"
                >
                  Get Tailored Solutions
                </Link>
              </div>
              <ul class="services-grid">
                {data?.sub_services?.map((service) => (
                  <li key={service.id}>
                    <h3>{service.title}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: service.description,
                      }}
                    ></p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section class="industries-section bg-black position-relative">
            <div className="indusbgbtm-imgbox">
              <img src="./assets/img/indusbgbtm.svg" alt="" />
            </div>
            <div className="indusbgtp-imgbox">
              <img src="./assets/img/indusbgtp.svg" alt="" />
            </div>
            <div class="container">
              <div class="section-header">
                <h3 class="sh text-white">
                  {data?.serviceIndustryTitle || "No Title Available"}
                </h3>
                <div
                  className="sd"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.serviceIndustryDescription ||
                      "No Description Available",
                  }}
                ></div>
              </div>
              <ul class="industries-grid">
                {stepsDatas?.map((item) => (
                  <li key={item.id}>
                    <div className="imgtpbx">
                      <img src={item.image} alt="" />
                    </div>

                    <h3 className="text-white">{item.title}</h3>
                    <p className="sd">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section class="tools-section">
            <div className="container">
              <div class="tools-section__header">
                <h3 class="sh">Tools and Tech We Use</h3>
                <p class="sd">
                  With our user-friendly approach, we make technology accessible
                  and easy to use. We understand that every business is unique,
                  and our team of experts will work closely with you to
                  understand your specific needs and challenges.
                </p>
              </div>
              <div className="toolmnsc">
                <div class="tools-content">
                  <div className="tool-imgbox"></div>
                  <div class="tools-description">
                    <h2 class="tools-description__title">
                      {data?.serviceToolTitle || "No Title Available"}
                    </h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          data.serviceToolDescription ||
                          "No Description Available",
                      }}
                      className="tools-description__text"
                    ></p>
                  </div>
                </div>
                <div class="tools-list">
                  <div class="tools-list__item">
                    {/* <h3 class="tools-list__category">
                      For creating interfaces and wireframes
                    </h3>
                    <ul class="tools-list__icons">
                      <li>
                        <img
                          src="./assets/img/sketch-icon.svg"
                          alt="Sketch"
                          class="tools-icon tools-icon--sketch"
                        />
                      </li>
                      <li>
                        <img
                          src="./assets/img/figma-icon.svg"
                          alt="Figma"
                          class="tools-icon tools-icon--figma"
                        />
                      </li>
                      <li>
                        <img
                          src="./assets/img/adobe-xd-icon.svg"
                          alt="Adobe XD"
                          class="tools-icon tools-icon--adobe-xd"
                        />
                      </li>
                      <li>
                        <img
                          src="./assets/img/invision-icon.svg"
                          alt="InVision"
                          class="tools-icon tools-icon--invision"
                        />
                      </li>
                    </ul>
                  </div>

                  <div class="tools-list__item">
                    <h3 class="tools-list__category">
                      For low-fidelity wireframing
                    </h3>
                    <ul class="tools-list__icons">
                      <li>
                        <img
                          src="../assets/img/balsamiq-icon.svg"
                          alt="Balsamiq"
                          class="tools-icon tools-icon--balsamiq"
                        />
                      </li>
                      <li>
                        <img
                          src="./assets/img/justinmind-icon.svg"
                          alt="Justinmind"
                          class="tools-icon tools-icon--justinmind"
                        />
                      </li>
                    </ul> */}
                    {/* <h3 class="tools-list__category">
                      For creating interfaces and wireframes
                    </h3> */}
                    <ul class="tools-list__icons">
                      {data.sub_services.map((service) =>
                        service.technologies.map((tech) => (
                          <li key={tech.id}>
                            <img
                              src={tech.image}
                              alt={tech.title}
                              class="tools-icon"
                            />
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Client-side interactive FAQ section */}
          <DynamicFAQSection
            faqs={data?.service?.service_faqs?.map((faq) => ({
              ...faq,
              answer: sanitizeHtml(faq.answer),
            }))}
          />
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const { serviceid } = params;
    const serviceData = await callApi(
      `${ApiUrl.getServiceDetailBySlug}/${serviceid}`
    );
    const stepsData = await callApi(`${ApiUrl.getAllSteps}`);
    const stepsDatas = stepsData.data;
    if (!serviceData.data) {
      return { notFound: true };
    }

    // Pre-sanitize data on server side
    const sanitizedData = {
      ...serviceData.data,
      hero_description: sanitizeHtml(serviceData.data.hero_description),
      ServiceDetailDescription: sanitizeHtml(
        serviceData.data.ServiceDetailDescription
      ),
      serviceIndustryDescription: sanitizeHtml(
        serviceData.data.serviceIndustryDescription
      ),
      serviceToolDescription: sanitizeHtml(
        serviceData.data.serviceToolDescription
      ),
      // ...sanitize other fields...
    };

    return {
      props: {
        serverData: sanitizedData,
        stepsDatas,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
}

export default ServicesDetails;
