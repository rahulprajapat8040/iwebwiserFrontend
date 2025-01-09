import Layout from "@/Components/Common/Layout";
import PartOfTeam from "@/Components/Common/PartOfTeam";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { callApi } from "@/hooks/useapi";
import { ApiUrl, ServerUrl } from "@/Utility/ApiUrl";

const StrategicMarket = (props) => {
  const [data, setdata] = useState([]);
  // console.log(data)
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

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
  const digitalMarketingService = data.find(service => service.title === "Digital Marketing");

  const classNames = [
    'pay-per-click',
    'search-engine',
    'social-media',
    
  ];

  const sectionClassNames = [
    'pay-per-click',
    'search-engine',
    'social-media',
  
  ];

  const rowClassNames = [
    'row-class-1',
    'row-class-2',
    'row-class-3',
    'row-class-4',
    'row-class-5'
  ];

  const colClassNames = [
    'col-12 col-md-6 px-0 col-class-1',
    'col-12 col-md-6 px-0 col-class-2',
    'col-12 col-md-6 px-0 col-class-3'
  ];

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
                    <span>StrategicMarketing</span>
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
              Boost Your Online Visibility and Outshine Your Competitors
              With Our Best Digital Marketing Services & Strategies.
            </h4>
          </div>
        </section>
        {/* Client-tell-story-section end here... */}
        {/* Social-Media Marketing section start here... */}
        {digitalMarketingService && digitalMarketingService.sub_services.map((subService, index) => (
          <section key={subService.id} className={`Marketing-section ${sectionClassNames[index % sectionClassNames.length]}`}>
            <div className="max-content-width">
              <div className="container-fluid">
                <div className={`row ${rowClassNames[index % rowClassNames.length]}`}>
                  {index % 2 === 0 ? (
                    <>
                      <div className="col-12 col-md-6 px-0">
                        <div className="Marketing-text">
                          <h4>{subService.title}</h4>
                          <p dangerouslySetInnerHTML={{ __html: subService.description }}></p>
                          <div className="text-center text-lg-start">
                            <Link
                              className="btn btn-outline-dark bg-white"
                              role="button"
                              href={subService.button_link}
                              as={subService.button_link}
                            >
                              READ MORE
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 px-0">
                        <div className="marketing-img">
                          <MyImage
                            className="w-100"
                            src={subService.image || "/assets/img/default-image.webp"}
                            alt={subService.title.toLowerCase().replace(/\s+/g, '-')}
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-12 col-md-6 px-0">
                        <div className="marketing-img">
                          <MyImage
                            className="w-100"
                            src={subService.image || "/assets/img/default-image.webp"}
                            alt={subService.title.toLowerCase().replace(/\s+/g, '-')}
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 px-0">
                        <div className="Marketing-text">
                          <h4>{subService.title}</h4>
                          <p dangerouslySetInnerHTML={{ __html: subService.description }}></p>
                          <div className="text-center text-lg-start">
                            <Link
                              className="btn btn-outline-dark bg-white"
                              role="button"
                              href={subService.button_link}
                              as={subService.button_link}
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
            </div>
          </section>
        ))}
        {/* Pay-per-Click Marketing section end here... */}
        {/* Become-A-part-of-Team section start here... */}
        <PartOfTeam />
        {/* Become-A-part-of-Team section end here... */}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const strategyData = {
    image_1: "/assets/img/StrategicMarketing.webp",
    image_2:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/social-media.png",
    image_3:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/serach-engine.png",
    image_4:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/pay-to-click.png",
  };
  return {
    props: {
      strategyData,
    },
  };
}

export default StrategicMarket;
