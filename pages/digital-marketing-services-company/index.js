import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Layout = dynamic(import("@/Components/Common/Layout"));

const DigitalMarketing = (props) => {
  useEffect(() => {
    if (props?.scrollData == "SmartSMO") {
      var secondElement = document.querySelector(".Digi-SMO");

      if (secondElement) {
        var offsetTop =
          secondElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
    if (props?.scrollData == "searchEngine") {
      var secondElement = document.querySelector(".search-engine");
      if (secondElement) {
        var offsetTop =
          secondElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
    if (props?.scrollData == "AppStore") {
      var secondElement = document.querySelector(".App-store");
      if (secondElement) {
        var offsetTop =
          secondElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [props?.scrollData]);

  return (
    <>
      <Head>
        <title>
          Digital Marketing Services - iWebwiser | Branding Solutions
        </title>
        <meta
          name="keywords"
          content="iWebwiser, Digital Marketing Services, Branding Solutions, SEO Services, Pay Per Click Advertising, Social Media Marketing"
        />
        <meta
          name="description"
          content="iWebwiser | Best digital marketing company in india, we help you to get your target customer to achieve your goal and enlarge your business iWebwiser provides the best digital marketing services, like pay-per-click advertising & SEO services, to give branding solutions so you can achieve your goals."
        />
        <link
          rel="canonical"
          href="https://www.iwebwiser.com/digital-marketing-services-company"
        />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content="Digital Marketing Services - iWebwiser | Branding Solutions"
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FDigitalMarket.webp&w=1920&q=75"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="Digital Marketing Services - iWebwiser | Branding Solutions"
        />
        <meta
          property="og:url"
          content="https://www.iwebwiser.com/digital-marketing-services-company"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FDigitalMarket.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="iWebwiser provides the best digital marketing services, like pay-per-click advertising & SEO services, to give branding solutions so you can achieve your goals."
        />
      </Head>
      <Layout>
        {/* Digital-Marketing Banner Section start here... */}
        <section className="DigiMarket-banner">
          <div className="max-content-width">
            <div className="Digi-home-bg">
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
                <h4>Digital Marketing Services</h4>
                <h5>Empowering Your Online Success. </h5>
                <p>
                  iWebwiser offers comprehensive digital marketing services,
                  including SEO, SMM, and PPC, to enable your online success and
                  growth. Our professional team of digital marketers is focused
                  on driving targeted traffic to your site while increasing and
                  expanding online visibility to expand your online presence and
                  maximize brand recognition. Search Engine Optimization (SEO)
                  involves optimizing your website to rank higher in search
                  engine results, draw organic traffic, and increase online
                  visibility. On the other hand, Social Media Marketing (SMM)
                  uses social media platforms to perform strategic digital
                  marketing services to engage your target audience while
                  building brand awareness and driving social traffic. (PPC)
                  Pay-per-click is one of the most effective forms of digital
                  marketing because it generates instant traffic and makes sales
                  easier.
                </p>
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
                className="Digi-img"
              >
                <MyImage
                  src={props?.marketData?.image_1}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Digital-Marketing Banner Section end here... */}

        {/* Page Breadcrumb Navigation section start here... */}
        <div className="page-navigation pb-4 pb-md-5">
          <div className="max-content-width">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href={"/mobile-app-development-company"}>
                          Mobile app Development
                        </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link href={"/graphic-and-ui-ux-design-company"}>
                          Designs
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        <span>Digital Marketing</span>
                      </li>
                      <li className="breadcrumb-item">
                        <Link href={"/best-web-development-company"}>
                          Web Development
                        </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link href={"/blockchain-development-services"}>
                          BlockChain Development
                        </Link>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Breadcrumb Navigation section end here... */}

        {/* Digital SMO Section start here... */}
        <section className="Digi-SMO">
          <div className="max-content-width">
            <div className="container-fluid">
              <h4>
                Best Social Media Marketing Company to Promote Your Business
                Online.{" "}
              </h4>
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 px-0">
                  <div className="Digi-SMO-img">
                    <MyImage
                      src={props?.marketData?.image_2}
                      alt="Digi-SMO"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="Digi-SMO-text">
                    <p className="fw-bold para-2">
                      Social media platforms are the easiest way to reach your
                      target audience and promote your business.
                    </p>
                    <p className="para-2">
                      Social media presence is important for search rankings and
                      digital marketing. As social media usage grows
                      exponentially, knowing how to market on social media to
                      reach your target audience and build brand awareness
                      becomes increasingly important. However, many marketers
                      enter the field of digital marketing and social media
                      without fully understanding what social media marketing is
                      and its requirements.
                    </p>
                    {
                      <p className="para-2">
                        iWebwiser is the best social media marketing company
                        that offers complete digital marketing services and
                        solutions. Get help increasing brand awareness,
                        increasing website traffic, improving your online
                        presence, and generating leads with effective social
                        media and content creation strategies. Our social media
                        marketing strategies are based on a deep understanding
                        of your brand, target audience, and key industry
                        insights. By combining creativity and meaningful data,
                        our best social media marketing company develops
                        engaging, effective content that captures your
                        audience's attention and will help you shape your brand
                        image and build trusting relationships with your
                        consumers.
                      </p>
                    }
                    <p className="fw-bold para-2">
                      Charm social media and increase your visibility with the
                      best digital marketing company that provides
                      outcome-driven services and strategies!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Digital SMO Section end here... */}

        {/* Branding Service Section start here... */}
        <section className="Branding-service">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12 col-lg-3">
                  <h4>Beneficial Branding Solutions Elevate Your Business.</h4>
                </div>
                <div className="col-12 col-lg-9">
                  <div className="branding-text">
                    <p className="para-2">
                      Strategic Branding Solutions understands the significance
                      of creating an enduring brand in today's competitive
                      marketplace and is dedicated to developing strategic
                      branding solutions and plans with lasting effects. We
                      Focus on creating brand value and cultivating meaningful
                      connections between you and your target audience. Our
                      branding solutions and services aim to enhance the
                      reputation and visibility of your business. From logo
                      design to brand messaging, our experts ensure every
                      element of your brand communicates a compelling narrative.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Branding Service Section end here... */}

        {/* Search-Engine section start here... */}
        <section className="search-engine">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="search-engine-text">
                    <h4>
                      Maximizing Your Profits Through Our (Search Engine
                      Optimization) SEO Services.
                    </h4>
                    <p className="para-2">
                      Search engine optimization has quickly become an essential
                      strategy for reaching target audiences and driving results
                      in today's ever-evolving digital environment. At
                      iWebwiser, we specialize in SEO services and use systems
                      to optimize campaigns for maximum return. Our SEO approach
                      is data-driven and explicitly tailored to meet your
                      business goals. First, we conduct extensive keyword
                      research on terms related to your industry to optimize ad
                      campaigns to reach target audiences at the right time.
                      iWebwiser is a professional SEO services provider that
                      works with SEO specialists who specialize in different
                      aspects of SEO services. Regarding SEO, the most important
                      thing is how accurate and up-to-date an SEO manager is.
                      Awareness of the different Google algorithm updates and
                      perfecting SEO strategies based on the current algorithm
                      makes all the difference.
                    </p>
                    <p className="para-2">
                      Our experienced SEO professionals create ads explicitly
                      tailored to reach your target market with captivating ad
                      copy, attractive visuals, and conversion-driving landing
                      pages designed to drive conversion. Our goal? Not simply
                      driving traffic but increasing return on investment as
                      well.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 px-0">
                  <div className="search-engine-img">
                    <MyImage
                      src={props?.marketData?.image_4}
                      alt="Search-Engine"
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
        {/* Search-Engine section end here... */}

        {/* App Store Section start here... */}
        <section className="App-store">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                  <div className="app-store-img">
                    <MyImage
                      src={props?.marketData?.image_5}
                      alt="ASO"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                  <div className="app-store-text">
                    <h4>
                      Increase Your ROI with Our Pay Per Click Advertising
                      Services.
                    </h4>
                    <p className="para-2">
                      iWebwiser Pay Per Click advertising company has been
                      helping brands with customized PPC management services in
                      India and worldwide. We create PPC campaigns based on the
                      client's business needs and budget. We offer end-to-end
                      business solutions optimized and monitored by some of
                      India's highest-paid search marketing experts. We take
                      care of everything from writing copy to running paid
                      campaigns and optimizing them to measuring campaign
                      performance.
                    </p>
                    <p className="para-2">
                      We offer Pay-per-click advertising services to generate
                      targeted and relevant traffic to your business website and
                      ensure maximum return on investment. iWebwiser Pay Per
                      Click advertising specialists are experienced in
                      developing conversion-oriented Pay Per Click methods. Each
                      strategy is individually tailored to your business's
                      unique needs and objectives. We combine successful
                      pay-per-click management with excellent conversion rate
                      optimization, encouraging us to launch PPC campaigns that
                      achieve the best results. Our Pay-per-click experts work
                      with you to develop an advertising strategy that reflects
                      your brand and achieves your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* App Store Section end here... */}
      </Layout>
    </>
  );
};

export async function getStaticProps(ctx) {
  console.log("hggsg", ctx.query);

  const marketData = {
    image_1: "/assets/img/DigitalMarket.webp",
    image_2: "/assets/img/Digi-SMO.webp",
    image_3: "/assets/img/Brand-service.webp",
    image_4: "/assets/img/Search-Engine.webp",
    image_5: "/assets/img/ASO-Optimize.webp",
  };

  return {
    props: {
      marketData,
      scrollData:  null,
    },
  };
}

export default DigitalMarketing;
