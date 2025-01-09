import React, { useEffect, useState } from "react";
import Layout from "@/Components/Common/Layout";
import Head from "next/head";
import { ApiUrl, ServerUrl } from "@/Utility/ApiUrl";
import { callApi } from "@/hooks/useapi";

export default function ServicesDetails() {
  const [data, setData] = useState([]);
  const [Faq, setFaq] = useState([]);
  // console.log(Faq);
  //   console.log(data);
  const fetchData = async (url, setDataFunc) => {
    try {
      const response = await callApi(url);
      setDataFunc(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(ServerUrl + ApiUrl.getAllService, (data) =>
      setData(data.services)
    );
    fetchData(ServerUrl + ApiUrl.getAllServiceFaq, (data) =>
      setFaq(data.serviceFaqs)
    );
  }, []);

  const getRandomItems = (items, count) =>
    items.sort(() => 0.5 - Math.random()).slice(0, count);

  const randomFaqs = getRandomItems(Faq, 3);
  const randomServices = getRandomItems(data, 6);
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
        {/* service detail page start */}
        <div className="">
          <section class="servidetbnr">
            <div class="container">
              <h3 class="sh text-center">
                Boost User Experience and Engagement with Our Web UI UX Design
                Solutions
              </h3>
              <p class="sd text-center">
                Making visions a reality in all areas of technology has enabled
                thousands of businesses to grow and dominate in their sectors,
                just like you could do with your business.
              </p>
              <button class="btn btn-outline-dark mx-auto d-block">
                Let's Discuss Your Requirement
              </button>
            </div>
          </section>
          <section class="servinte pt-0">
            <div class="container">
              <div class="servinte-box-left">
                <div className="polyns">
                  <img src="./assets/img/Polygontooltp.png" alt="" />
                </div>
                <h4 class="servinte-title">
                  Interactive Mobile and Web UI UX Design Services
                </h4>
              </div>
              <div class="servinte-box-right">
                <p class="servinte-description">
                  We build your website and app with innovative UI/UX designs
                  that enhance engagement, streamline user journeys, transform
                  the digital experience into stunning visuals, and boost
                  conversion rates. Our team of designers brings expertise and
                  market knowledge from years of experience in creating UI/UX
                  design for various industries.
                </p>
                <div className="polyns">
                  <img src="./assets/img/Polygontooltp.png" alt="" />
                </div>
              </div>
            </div>
          </section>
          <section class="serinscope-section pt-0">
            <div class="container">
              <div class="serinscope-header">
                <h3 class="sh">The Scope Of Our Web UI/UX Design Services</h3>
                <button class="btn btn-outline-dark">
                  Get Tailored Solutions
                </button>
              </div>
              <ul class="services-grid">
                {randomServices.map((service) => (
                  <li key={service.id}>
                    <h3>{service.title}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: service.short_description,
                      }}
                    ></p>
                  </li>
                ))}
              </ul>
              {/* <ul class="services-grid">
                <li>
                  <h3>Social Media Website Design</h3>
                  <p>
                    IT solutions to simplify and streamline the operations in
                    processes like listing services, booking deals, managing
                    customers, and more.
                  </p>
                </li>
                <li>
                  <h3>Ecommerce UI/UX Design</h3>
                  <p>
                    Industry-leading digital solutions to help lodging
                    organizations embrace innovation and redefine the guest
                    experiences.
                  </p>
                </li>
                <li>
                  <h3>Real Estate Website Design</h3>
                  <p>
                    Integrated IT solutions for organizations managing lifestyle
                    spaces like golf courses, stadiums, racecourses, arenas, and
                    more.
                  </p>
                </li>
                <li>
                  <h3>Healthcare Website Design</h3>
                  <p>
                    IT solutions to simplify and streamline the operations in
                    processes like listing services, booking deals, managing
                    customers, and more.
                  </p>
                </li>
                <li>
                  <h3>Mobile UI UX Design</h3>
                  <p>
                    Industry-leading digital solutions to help lodging
                    organizations embrace innovation and redefine the guest
                    experiences.
                  </p>
                </li>
                <li>
                  <h3>Figma App Design</h3>
                  <p>
                    Integrated IT solutions for organizations managing lifestyle
                    spaces like golf courses, stadiums, racecourses, arenas, and
                    more.
                  </p>
                </li>
              </ul> */}
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
                <h3 class="sh text-white">Industries We Serve</h3>
                <p class="sd">
                  Providing secure and scalable UI/UX designing services across
                  multiple industries to enhance user engagement and retention
                  results in increased business revenue.
                </p>
              </div>
              <ul class="industries-grid">
                <li>
                  <div className="imgtpbx">
                    <img src="./assets/img/approved_.svg" alt="" />
                  </div>

                  <h3 className="text-white">Requirement Gathering</h3>
                  <p className="text-white">
                    First, we understand what you really want and what your
                    business requires. And after that, we ask you to fill out
                    the questionnaires we provide and collect all this data to
                    create custom design solutions for you.
                  </p>
                </li>
                <li>
                  <h3 className="text-white">Market Research & Analysis</h3>
                  <p className="text-white">
                    First, we understand what you really want and what your
                    business requires. And after that, we ask you to fill out
                    the questionnaires we provide and collect all this data to
                    create custom design solutions for you.
                  </p>
                </li>
                <li>
                  <div className="bluebx"></div>
                  <h3 className="text-white">Implanting Plan</h3>
                  <p className="text-white">
                    After understanding your requirements, we conduct market
                    research based on your needs, market trends, and your
                    preference to ensure the designs are up-to-industry level
                    and your expectations.
                  </p>
                </li>
                <li>
                  <div className="bluebx"></div>
                  <h3 className="text-white">Formulating Strategies</h3>
                  <p className="text-white">
                    After understanding your requirements, we conduct market
                    research based on your needs, market trends, and your
                    preference to ensure the designs are up-to-industry level
                    and your expectations.
                  </p>
                </li>
                <li>
                  <div className="bluebx"></div>
                  <h3 className="text-white">Design and Development</h3>
                  <p className="text-white">
                    After understanding your requirements, we conduct market
                    research based on your needs, market trends, and your
                    preference to ensure the designs are up-to-industry level
                    and your expectations.
                  </p>
                </li>
                <li>
                  <div className="bluebx"></div>
                  <h3 className="text-white">Quality Assurance & Testing</h3>
                  <p className="text-white">
                    After understanding your requirements, we conduct market
                    research based on your needs, market trends, and your
                    preference to ensure the designs are up-to-industry level
                    and your expectations.
                  </p>
                </li>
                <li>
                  <div className="bluebx"></div>
                  <h3 className="text-white">Delivering the Project</h3>
                  <p className="text-white">
                    After understanding your requirements, we conduct market
                    research based on your needs, market trends, and your
                    preference to ensure the designs are up-to-industry level
                    and your expectations.
                  </p>
                </li>
                <li>
                  <div className="bluebx"></div>
                  <h3 className="text-white">Support and Maintenance</h3>
                  <p className="text-white">
                    After understanding your requirements, we conduct market
                    research based on your needs, market trends, and your
                    preference to ensure the designs are up-to-industry level
                    and your expectations.
                  </p>
                </li>
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
                    <h2 class="tools-description__title">UI/UX Design Tools</h2>
                    <p class="tools-description__text">
                      After understanding your requirements, we conduct market
                      research based on your needs, market trends, and user
                      preference to ensure the designs are up-to-industry level
                      and your expectations.
                    </p>
                  </div>
                </div>
                <div class="tools-list">
                  <div class="tools-list__item">
                    <h3 class="tools-list__category">
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
                          src="./assets/img/balsamiq-icon.svg"
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
                    </ul>
                  </div>

                  <div class="tools-list__item">
                    <h3 class="tools-list__category">
                      For user feedback and behavioral analysis
                    </h3>
                    <ul class="tools-list__icons">
                      <li>
                        <img
                          src="./assets/img/google-analytics-icon.svg"
                          alt="Google Analytics"
                          class="tools-icon tools-icon--google-analytics"
                        />
                      </li>
                      <li>
                        <img
                          src="./assets/img/hotjar-icon.svg"
                          alt="Hotjar"
                          class="tools-icon tools-icon--hotjar"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="servicefaq pt-0">
            <div className="container">
              <h3 class="sh text-center">Frequently Asked Questions</h3>
              <div
                class="accordion  accordion-flush"
                id="accordionFlushExample"
              >
                {randomFaqs.map((item, index) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-service-${index + 1}`}
                        aria-expanded="false"
                        aria-controls={`#faq-service-${index + 1}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`faq-service-${index + 1}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div
                class="accordion  accordion-flush"
                id="accordionFlushExample"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-service-1"
                      aria-expanded="false"
                      aria-controls="faq-service-1"
                    >
                      Why is UI/UX design important?
                    </button>
                  </h2>
                  <div
                    id="faq-service-1"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      UI/UX design is important to enhance the user experience,
                      increase user retention and engagement, improve
                      accessibility and usability, boost conversion rates and
                      business growth, and differentiate your brand in today’s
                      competitive market.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-service-2"
                      aria-expanded="false"
                      aria-controls="faq-service-2"
                    >
                      What industries does iWebwiser specialize in for web UI UX
                      design?
                    </button>
                  </h2>
                  <div
                    id="faq-service-2"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body"> </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-service-3"
                      aria-expanded="false"
                      aria-controls="faq-service-3"
                    >
                      What industries does iWebwiser specialize in for web UI UX
                      design?
                    </button>
                  </h2>
                  <div
                    id="faq-service-3"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body"> </div>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </div>
        {/* service detail page end */}
      </Layout>
    </>
  );
}
