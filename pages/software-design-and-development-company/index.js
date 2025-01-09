import Layout from "@/Components/Common/Layout";
import PartOfTeam from "@/Components/Common/PartOfTeam";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { callApi } from "@/hooks/useapi";
import { ApiUrl, ServerUrl } from "@/Utility/ApiUrl";

const DesignDevelopment = (props) => {
  const [data, setdata] = useState([]);
  // console.log(data)
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const fetchData = async () => {
    try {
      const response = await callApi(ServerUrl + ApiUrl.getAllService);
      const res = await response.data.services
      setdata(res)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData()
  }, []);
  const DesignDevelopementServices = data.find(service => service.title === "Design & Development");
  console.log(DesignDevelopementServices)
  return (
    <>
      <Head>
        <title>App/Web Design & Development Services | iWebwiser</title>
        <meta
          name="keywords"
          content="iWebwiser, Mobile Application Development Services, Website Devlopment Service, UI UX Design, Software Devlopment Services"
        />
        <meta
          name="description"
          content="iWebwiser is the top software development company that provides mobile application and website development services and the best UI UX designs."
        />
        <link
          rel="canonical"
          href="https://www.iwebwiser.com/software-design-and-development-company"
        />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content="App/Web Design & Development Services | iWebwiser"
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fsplash-screen.webp&w=1920&q=75"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="App/Web Design & Development Services | iWebwiser"
        />
        <meta
          property="og:url"
          content="https://www.iwebwiser.com/software-design-and-development-company"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fsplash-screen.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="iWebwiser is the top software development company that provides mobile application and website development services and the best UI UX designs."
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
                <h4 className="text-center">Design & Development</h4>
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
                  src={props.developmentData.image_1}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Experties-Home-section end here... */}

        {/* Page Breadcrumb Navigation section start here... */}
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
                      as={"/app-web-software-design-development-services"}
                    >
                      All Experts
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <span>Design&Development</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* Page Breadcrumb Navigation section end here... */}

        {/* Client-tell-story-section start here... */}
        <section ref={ref1} className="client-story">
          <div
            style={{
              scale: isInView1 ? "1" : "0",
              opacity: isInView1 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}
            className="container-fluid"
          >
            <h4>
              We use digital innovation to create marvellous outcomes whether
              you're starting from zero or extending your existing business.
            </h4>
            {/* <p>
              We believe in the transformative power of technology and the
              impact it can have on businesses. Trust iWebwiser to be your
              partner in navigating the digital landscape and taking your
              business to new heights through our innovative solutions and
              unwavering commitment to your success.
            </p> */}
          </div>
        </section>
        {/* Client-tell-story-section end here... */}
        {/* Mobile-app section start here... */}
        <section className="mobile-app">
          <div className="max-content-width">
            <div className="container-fluid">
              <div ref={ref2} className="row">
                <div className="col-12 col-lg-6">
                  <div className="mobile-app-text">
                    <h4>Mobile Application Development</h4>
                    <p>
                      With increasing competition, companies are turning to
                      mobile application strategies to transform their processes
                      and gain an advantage. iWebwiser's mobile application
                      development services company enables businesses and brands
                      to explore new possibilities while providing mobile
                      application design and development that are functional and
                      seamless experiences with feature-rich, precise, and
                      future-proof solutions. You will get excellent results
                      working with iWebwiser, which provides the best mobile
                      application development services. With a proactive
                      approach and an agile process, we ensure that your time
                      and investment are optimized at every stage of development
                      and that you receive a digital product that fully meets
                      your requirements and exceeds your expectations. As the
                      best mobile application development company, we offer a
                      robust roadmap and strategy for native application
                      development with the right mix of technologies.
                    </p>
                    <div className="text-center text-lg-start">
                      <Link
                        href={"/mobile-app-development-company"}
                        as={"/mobile-app-development-company"}
                        className="btn btn-outline-light"
                        role="button"
                      >
                        VIEW MOBILE APPS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="mobile-app-splashs">
                    <div
                      style={{
                        transform: isInView2
                          ? "translateY(0)"
                          : "translateY(100%)",
                        opacity: isInView2 ? 1 : 0,
                        transition:
                          "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                      }}
                      className="splash splash-trans-1"
                    >
                      <MyImage
                        src="/assets/img/splash-screen.webp"
                        alt=""
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
        {/* Mobile-app section end here... */}
        {/* Website-development section start here... */}
        <section className="web-development">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12 col-md-8 col-lg-6 order-2 order-lg-1">
                  <div className="web-development-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/webDevelopment.webp"
                      alt="web-development"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                  <div className="web-development-text">
                    <h4>Website Development Services</h4>
                    <p>
                      At iWebwiser, we offer top-notch website development
                      services to help businesses develop their online presence.
                      Our experienced website developers and designers create
                      visually stunning, user-friendly, search engine-optimized
                      websites. We work closely with our clients to understand
                      their needs and objectives to ensure the final product
                      meets their expectations. We designed websites to be
                      responsive and website-optimized, providing a great user
                      experience on all devices. Trust iWebwiser, the best
                      website development company, to create a website that
                      looks great, drives traffic, and increases conversions for
                      your business. Our sole goal is to provide high-quality
                      website development services and solutions for a
                      transparent & efficient development process.
                    </p>
                    <div className="text-center text-lg-start">
                      <Link
                        href={"/best-web-development-company"}
                        as={"/best-web-development-company"}
                        className="btn btn-outline-dark bg-white"
                        role="button"
                      >
                        VIEW WEBSITES
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="web-curlly-1">
                <MyImage
                  className="w-100"
                  src={props.developmentData.image_7}
                  alt="curlly-light"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <div className="web-curlly-2">
                <MyImage
                  className="w-100"
                  src={props.developmentData.image_8}
                  alt="curlly-light"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Website-development section end here... */}
        {/* UI-&-UX section start here... */}
        <section className="ui-ux-develop">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="ui-ux-develop-text">
                    <h4>UI UX Design Company</h4>
                    <p>
                      iWebwiser is a UI UX design company that helps transform
                      businesses through seamless, simple & sophisticated user
                      interfaces and experiences. We have delivered successful
                      digital UI UX design and development services, building
                      products and providing solutions for nearly a decade. We
                      design intuitive, user-friendly layouts because it is
                      excellent for the brand when we design for your clientele.
                      We believe in making the user’s journey through your
                      business landscape a fun, effortless experience, so it is
                      essential to center the background around the user -
                      understand and build for them. Our design goes way beyond
                      making things look good. iWebwiser, the best UI UX design
                      company delves deep into our client’s unique needs and
                      their target audience, then harnesses the power of
                      technology and data to create digital experiences that are
                      not just tailored but transformative.
                    </p>
                    <div className="text-center text-lg-start">
                      <Link
                        href={"/graphic-and-ui-ux-design-company"}
                        as={"/graphic-and-ui-ux-design-company"}
                        className="btn btn-outline-light"
                        role="button"
                      >
                        VIEW DESIGNS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="ui-ux-develop-img">
                    <MyImage
                      className="w-100"
                      src={"/assets/img/ui--ux-develop.webp"}
                      alt="ui-ux-develop-img"
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
        {/* UI-&-UX section end here... */}
        {/* Website-development section start here... */}
        <section className="web-development bg-white">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-around">
                <div className="col-12 col-md-8 col-lg-5 order-2 order-lg-1">
                  <div className="web-development-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/softwareDevelopment.webp"
                      alt="software-development"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                  <div className="web-development-text">
                    <h4>Top Software Development Company</h4>
                    <p>
                      Strengthen your business with world-class software
                      development services by accessing a pool of talented
                      resources to transform your business and withstand modern
                      technological changes. Gain a competitive advantage by
                      partnering with a top software development company in
                      India. Their proven skills and ability to provide
                      impeccable software development services will increase
                      your company's revenue. We provide customized software
                      solutions with different services like software design,
                      software development, software testing, migration of
                      existing applications, product development, and much more.
                      iWebwiser, a top software development company, is at the
                      forefront of software development services from India to
                      global locations with a dedicated team of skilled and
                      experienced software developers ensuring optimized
                      business processes, productivity, and profitability.
                    </p>
                    <div className="text-center text-lg-start">
                      <Link
                        href={"/app-web-software-design-development-services"}
                        as={"/app-web-software-design-development-services"}
                        className="btn btn-outline-dark bg-white"
                        role="button"
                      >
                        VIEW SOFTWARES
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* <section className="mobile-app">
          <div className="max-content-width">
            <div className="container-fluid">
              <div ref={ref2} className="row">
                <div className="col-12 col-lg-6">
                  <div className="mobile-app-text">
                    <h4>Mobile Application Development</h4>
                    <p>
                      With increasing competition, companies are turning to
                      mobile application strategies to transform their processes
                      and gain an advantage. iWebwiser's mobile application
                      development services company enables businesses and brands
                      to explore new possibilities while providing mobile
                      application design and development that are functional and
                      seamless experiences with feature-rich, precise, and
                      future-proof solutions. You will get excellent results
                      working with iWebwiser, which provides the best mobile
                      application development services. With a proactive
                      approach and an agile process, we ensure that your time
                      and investment are optimized at every stage of development
                      and that you receive a digital product that fully meets
                      your requirements and exceeds your expectations. As the
                      best mobile application development company, we offer a
                      robust roadmap and strategy for native application
                      development with the right mix of technologies.
                    </p>
                    <div className="text-center text-lg-start">
                      <Link
                        href={"/mobile-app-development-company"}
                        as={"/mobile-app-development-company"}
                        className="btn btn-outline-light"
                        role="button"
                      >
                        VIEW MOBILE APPS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="mobile-app-splashs">
                    <div
                      style={{
                        transform: isInView2
                          ? "translateY(0)"
                          : "translateY(100%)",
                        opacity: isInView2 ? 1 : 0,
                        transition:
                          "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                      }}
                      className="splash splash-trans-1"
                    >
                      <MyImage
                        src="/assets/img/splash-screen.webp"
                        alt=""
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
        </section> */}
        {/* Mobile-app section end here... */}
        {/* Website-development section start here... */}
        {/* <section className="web-development">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12 col-md-8 col-lg-6 order-2 order-lg-1">
                  <div className="web-development-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/webDevelopment.webp"
                      alt="web-development"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                  <div className="web-development-text">
                    <h4>Website Development Services</h4>
                    <p>
                      At iWebwiser, we offer top-notch website development
                      services to help businesses develop their online presence.
                      Our experienced website developers and designers create
                      visually stunning, user-friendly, search engine-optimized
                      websites. We work closely with our clients to understand
                      their needs and objectives to ensure the final product
                      meets their expectations. We designed websites to be
                      responsive and website-optimized, providing a great user
                      experience on all devices. Trust iWebwiser, the best
                      website development company, to create a website that
                      looks great, drives traffic, and increases conversions for
                      your business. Our sole goal is to provide high-quality
                      website development services and solutions for a
                      transparent & efficient development process.
                    </p>
                    <div className="text-center text-lg-start">
                      <Link
                        href={"/best-web-development-company"}
                        as={"/best-web-development-company"}
                        className="btn btn-outline-dark bg-white"
                        role="button"
                      >
                        VIEW WEBSITES
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="web-curlly-1">
                <MyImage
                  className="w-100"
                  src={props.developmentData.image_7}
                  alt="curlly-light"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <div className="web-curlly-2">
                <MyImage
                  className="w-100"
                  src={props.developmentData.image_8}
                  alt="curlly-light"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </section> */}
        {/* Website-development section end here... */}
        {/* UI-&-UX section start here... */}
        {/* <section className="ui-ux-develop">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="ui-ux-develop-text">
                    <h4>UI UX Design Company</h4>
                    <p>
                      iWebwiser is a UI UX design company that helps transform
                      businesses through seamless, simple & sophisticated user
                      interfaces and experiences. We have delivered successful
                      digital UI UX design and development services, building
                      products and providing solutions for nearly a decade. We
                      design intuitive, user-friendly layouts because it is
                      excellent for the brand when we design for your clientele.
                      We believe in making the user’s journey through your
                      business landscape a fun, effortless experience, so it is
                      essential to center the background around the user -
                      understand and build for them. Our design goes way beyond
                      making things look good. iWebwiser, the best UI UX design
                      company delves deep into our client’s unique needs and
                      their target audience, then harnesses the power of
                      technology and data to create digital experiences that are
                      not just tailored but transformative.
                    </p>
                    <div className="text-center text-lg-start">
                      <Link
                        href={"/graphic-and-ui-ux-design-company"}
                        as={"/graphic-and-ui-ux-design-company"}
                        className="btn btn-outline-light"
                        role="button"
                      >
                        VIEW DESIGNS
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="ui-ux-develop-img">
                    <MyImage
                      className="w-100"
                      src={"/assets/img/ui--ux-develop.webp"}
                      alt="ui-ux-develop-img"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* UI-&-UX section end here... */}
        {/* Website-development section start here... */}
        {/* <section className="web-development bg-white">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-around">
                <div className="col-12 col-md-8 col-lg-5 order-2 order-lg-1">
                  <div className="web-development-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/softwareDevelopment.webp"
                      alt="software-development"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                  <div className="web-development-text">
                    <h4>Top Software Development Company</h4>
                    <p>
                      Strengthen your business with world-class software
                      development services by accessing a pool of talented
                      resources to transform your business and withstand modern
                      technological changes. Gain a competitive advantage by
                      partnering with a top software development company in
                      India. Their proven skills and ability to provide
                      impeccable software development services will increase
                      your company's revenue. We provide customized software
                      solutions with different services like software design,
                      software development, software testing, migration of
                      existing applications, product development, and much more.
                      iWebwiser, a top software development company, is at the
                      forefront of software development services from India to
                      global locations with a dedicated team of skilled and
                      experienced software developers ensuring optimized
                      business processes, productivity, and profitability.
                    </p>
                    <div className="text-center text-lg-start">
                      <Link
                        href={"/app-web-software-design-development-services"}
                        as={"/app-web-software-design-development-services"}
                        className="btn btn-outline-dark bg-white"
                        role="button"
                      >
                        VIEW SOFTWARES
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Website-development section end here... */}
        {/* Become-A-part-of-Team section start here... */}
        <PartOfTeam />
        {/* Become-A-part-of-Team section end here... */}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const developmentData = {
    image_1: "/assets/img/Design&Development.webp",
    image_2:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/Mobile-app-1.png",
    image_3:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/Mobile-app-2.png",
    image_4: "/assets/img/curlly-light.webp",
    image_5: "/assets/img/curlly-light-2.webp",
    image_6:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/web-development.png",
    image_7: "/assets/img/curlly-dark-2.webp",
    image_8: "/assets/img/curlly-dark.webp",
    image_9:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/ui-&-ux-develop.png",
  };
  return {
    props: {
      developmentData,
    },
  };
}

export default DesignDevelopment;
