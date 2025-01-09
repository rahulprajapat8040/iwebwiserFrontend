import Layout from "@/Components/Common/Layout";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const MobileApp = (props) => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const mainControls2 = useAnimation();
  const slideControls2 = useAnimation();

  useEffect(() => {
    if (isInView3) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView3]);

  useEffect(() => {
    if (isInView2) {
      mainControls2.start("visible");
      slideControls2.start("visible");
    }
  }, [isInView2]);

  return (
    <>
      <Head>
        <title>
          Android & IOS App Development Company | iWebwiser
        </title>
        <meta name="keywords" content="iWebwiser, Android App Development, IOS App Development, Ecommerce App Development, React Native, Flutter" />
        <meta
          name="description"
          content="iWebwiser | Best android ios, flutter, react native web and app development company in india. Get high quality and featured app for your business.iWebwiser is the best android app development company that offers android & iOS app development services along with flutter and React native development."
        />

        <link
          rel="canonical"
          href="https://www.iwebwiser.com/mobile-app-development-company"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta name="twitter:title" content="Android & IOS App Development Company | iWebwiser" />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta name="twitter:image" content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fnative-app.webp&w=1920&q=75" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Android & IOS App Development Company | iWebwiser" />
        <meta property="og:url" content="https://www.iwebwiser.com/mobile-app-development-company" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta property="og:image" content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fnative-app.webp&w=1920&q=75" />
        <meta property="og:description" content="iWebwiser is the best android app development company that offers android & iOS app development services along with flutter and React native development." />

      </Head>
      <Layout>
        {/* Design Banner section start here... */}
        <section className="Design-Home">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="Design-Home-bg">
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
                      <h4>Mobile App Development</h4>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Design Banner section end here... */}

        {/* Page Breadcrumb Navigation section start here... */}
        <div className="page-navigation mobile-app-bread">
          <div className="max-content-width">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        <span>Mobile app Development</span>
                      </li>
                      <li className="breadcrumb-item">
                        <Link href={"/graphic-and-ui-ux-design-company"}>
                          Designs
                        </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link href={"/digital-marketing-services-company"}>
                          Digital Marketing
                        </Link>
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

        {/* Design Service Home Banner section start here... */}
        <section className="Design-home-content">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row position-relative">
                <div className="col-12 col-md-12 col-lg-7 order-2 order-lg-1">
                  {/* Design Banner content start here... */}
                  <div className="Design-banner-content">
                    <h5>Best Android App Development Company</h5>

                    <p>
                      iWebwiser, the best Android app development company,
                      offers powerful Android apps that contribute to the
                      success of various businesses. We work with many clients,
                      from industry leaders and global brands to small and
                      medium-sized businesses and venture-backed startups. We
                      aim to solve complex problems and create sustainable
                      competitive advantages for our clients through a
                      customized approach that combines technical expertise and
                      deep industry knowledge. Creating highly personalized,
                      market-proven mobile experiences with best-in-class return
                      value requires a "smart and digital" approach to making
                      progress. Our best Android app development company helps
                      develop scalable, robust, cleanly coded apps that best fit
                      the budget. Are you looking for the Best Android app
                      development company? iWebwiser is a team of experienced
                      developers offering creative and imaginative Android app
                      development services. We have a proven track record in
                      developing custom and enterprise-specific technology
                      applications.
                    </p>
                    <p className="fw-bold">Let's create top-notch android apps with our mobile app development company.
                    </p>
                  </div>
                  {/* Design Banner content end here... */}
                </div>
                <div ref={ref1} className="col-12 col-md-12 order-1 order-lg-2">
                  {/* Banner image start here... */}
                  <motion.div
                    className="banner-img"
                    style={{
                      transform: isInView1 ? "none" : "translateY(100px)",
                      opacity: isInView1 ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
                    }}
                  >
                    <MyImage
                      src="/assets/img/Mobileapp1.webp"
                      alt="DesignBanner"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </motion.div>
                  {/* Banner image end here... */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Design Service Home Banner section end here... */}

        {/* Problem Solve section start here... */}
        <section className="ios-company">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row justify-content-center text-center">
                <div className="col-12">
                  <h4>Our High-End Android App Development Services. </h4>
                </div>
                <div className="col-12">
                  <p>
                    We are a mobile-based best Android app development company focused on developing high-quality Android apps. Our development teams are proficient in many technologies. They are experts in combining innovative designs with the latest app development tools. We assist you in creating B2B or consumer-facing apps for various digital platforms such as desktop, mobile, web smartwatch, VR, and AR. Whether you need standalone, native, web-based or database-driven applications, we offer high-quality Android app development services. At iWebwiser, we can help your business meet the ever-changing market demands.

                    Since thousands of Android apps are in the market, you need the best Android app development company to launch your Android app as an MVP or a full-fledged product. By adding the WOW element, we create apps that people love to see again and again. We take you beyond the boundaries of excellence and our Android app development services accept nothing less.

                  </p>
                  {/* <p>
                  We assist global brands to design and create top-quality digital products, which allow users to experience seamless experiences on the latest mobile and desktop platforms.

                  </p> */}
                </div>
              </div>

              {/* Development section of Ios with Images start here... */}
              <div className="row Develop-ios">
                <div className="col-12 col-md-12 col-lg-8">
                  <motion.div className="Development-img">
                    <MyImage
                      src="/assets/img/Mobileapp2.webp"
                      alt="DesignBanner"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </motion.div>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                  <div ref={ref2} className="Develop-text">
                    <motion.div
                      className="position-relative"
                      variants={{
                        hidden: { opacity: 0, y: 200 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls2}
                      transition={{ duration: 0.8, delay: 0.25 }}
                    >
                      <h4> India's Top iOS App Development Services.  </h4>
                      <motion.div
                        variants={{
                          hidden: { left: 0 },
                          visible: { left: "100%" },
                        }}
                        initial="hidden"
                        animate={slideControls2}
                        transition={{ duration: 0.8, ease: "easeIn" }}
                        style={{
                          position: "absolute",
                          top: 4,
                          bottom: 4,
                          left: 0,
                          right: 0,
                          background: "rgb(49 141 169)",
                          zIndex: 20,
                        }}
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
              {/* Development section of Ios with Images end here... */}
              <div className="row justify-content-center text-center">
                <div className="col-12">
                  <h4>IOS App Development Services For All Apple Platforms. </h4>
                </div>
                <div className="col-12">
                  <p>
                    Over the past five years, iWebwiser has pioneered iOS application development, serving broad clients, from small businesses to established companies. Our solutions solve problems in business and help facilitate efficient decision-making through custom IOS app development services for devices. With the help of our expertise in iOS development, develop a compelling, visually captivating, and engaging application that improves your company's standing in a highly competitive marketplace. iWebwiser offers a broad array of iOS application development services that satisfy the different needs that are part of this Apple ecosystem. Our skilled team of iOS application developers can help guide your app from its initial concept to the final launch on various devices, including iPhones, iPads, Apple Watches, and Apple TVs.

                    iWebwiser is a leading iOS app development company with decades of experience developing iOS apps for startups, SMBs, and large enterprises. Whatever your business needs, our top developers can develop and deliver beautiful, scalable IOS apps, no matter their complexity, using industry-specific iOS app development services.

                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Problem Solve section start here... */}

        {/* Quality Service section start here...  */}
        <section className="quality-service">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-5 px-lg-0 order-2 order-lg-1">
                  <div ref={ref3} className="quality-text ">
                    <motion.div
                      className="position-relative"
                      variants={{
                        hidden: { opacity: 0, y: 200 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.8, delay: 0.25 }}
                    >
                      <h4>
                        Empowering Your Business Through Custom iOS Application
                        Development.
                      </h4>
                      <motion.div
                        variants={{
                          hidden: { left: 0 },
                          visible: { left: "100%" },
                        }}
                        initial="hidden"
                        animate={slideControls}
                        transition={{ duration: 0.8, ease: "easeIn" }}
                        style={{
                          position: "absolute",
                          top: 4,
                          bottom: 4,
                          left: 0,
                          right: 0,
                          background: "#000000c7",
                          zIndex: 20,
                        }}
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="col-12 col-lg-7 px-lg-0 order-1 order-lg-2">
                  <div className="quality-img">
                    <MyImage
                      src="/assets/img/Mobileapp3.webp"
                      alt="QualityService"
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
        {/* Quality Service section end here...  */}

        {/* Reliable IOS section start here... */}
        <section className="Reliable-IOS">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row justify-content-center text-lg-center align-items-center">
                <div className="col-12">
                  <div className="reliable-head">
                    <h4>Top Custom iOS App Development Company in India.</h4>
                  </div>
                </div>
                <div className="col-12">
                  <div className="reliable-text">
                    <p>
                      iWebwiser harnesses the most recent Apple technologies to build innovative iOS applications. Our team leverages the potential of Swift, CoreML, CreateML, and more to provide enhanced code completion and interactive previews using Xcode. We excel at crafting an intuitive and readable API because of the innovations in Swift, software integrations, customized modules, and custom-designed features that improve performance, aesthetics, and your overall experience. We are an end-to-end iOS app development company offering iOS app development services from concept to implementation. Our team of iOS app developers, designers, and programmers build apps focusing on functional design, user experience, and codebase performance.

                      We attach great importance to transparent communication and close cooperation with our customers. We work closely with you to understand your needs, preferences, and audience to ensure the final app meets your expectations. Our agile development methodologies and attention to detail will ensure your app is delivered on time and runs smoothly on iOS devices. As a trusted iOS custom app development company, we're driven by a passion for innovation and a commitment to our customer's success.

                    </p>
                    {/* <p>
                      we attach great importance to transparent communication
                      and close cooperation with our customers. We work closely
                      with you to understand your needs, preferences, and
                      audience to ensure the final app meets your
                      expectations.Our agile development methodologies and
                      attention to detail ensure your app is delivered on time
                      and runs smoothly on iOS devices. As a trusted iOS app
                      development company, we're driven by a passion for
                      innovation and a commitment to our customer's success.
                    </p> */}
                    {/* <p>
                      Together we can create an iOS app that sets you apart from
                      the competition, engages your users, and fuels the growth
                      and success of your business in India. With our experience
                      in iOS app development, we strive to support Indian
                      businesses with best-in-class mobile solutions.
                    </p> */}
                  </div>
                </div>
                <div className="col-12">
                  {/* <div className="platform-app">
                    <h5>
                      Unleashing the Potential of Cross-Platform Development
                    </h5>
                    <p>
                      We specialize in Unleashing the potential of
                      cross-platform development to help businesses expand their
                      digital reach and enhance their presence online. Our
                      experience developing adaptable and user-friendly apps
                      enables our clients to seamlessly deploy their
                      applications across various platforms. Our talented
                      developers leverage cross-platform technologies to develop
                      robust and user-friendly apps running smoothly on various
                      devices and operating systems. Utilizing the advantages of
                      cross-platform development, we help businesses save time,
                      effort, and resources while providing users with a
                      consistent user experience. When you partner with us at
                      iWebwiser, you can unleash its full potential to expand
                      your business horizons.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Reliable IOS section end here... */}

        {/* Development Facility section start here... */}
        <section className="development-facility">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 col-lg-6 order-2 order-lg-1">
                  <div className="development-text">
                    <h5 className="title">
                      <br />
                      Top-notch Ecommerce App Development Services.
                    </h5>
                    <p>
                      We are one of India's leading e-commerce app development companies and believe that innovation differentiates us from our competitors. Our team of the best ecommerce app developers are passionate about providing ecommerce app development services, and this passion is the fuel they need to gain continuous knowledge about the ecommerce industry. An eCommerce application that supports your website is now necessary for any retail business wanting to expand its customer base or reach them at any time of the day. Being one of the best eCommerce app development services providers in India, we can assure you that the ecommerce app you get will be of unmatched quality.

                      iWebwiser, your online digital catalyst, is a team of master craftsmen who develop exceptional mobile ecommerce solutions. Our online store solution can help you optimize your business efficiency across the entire value chain by making your business more responsive to customer needs. As a leading ecommerce app development services company, iWebeiser has your back with the following cutting-edge online store management software solutions.

                    </p>
                    {/* <p>
                      We build apps capable of handling large product
                      catalogues, heavy user traffic, and complex transactions
                      without compromising speed or functionality. We ensure
                      fast loading times, smooth navigation, and reliable
                      performance even during peak usage through efficient code
                      optimization, streamlined database structures, and
                      effective caching mechanisms. Security is of most
                      importance to us. We implement industry-leading security
                      protocols to protect customer data, integrate secure
                      payment gateways, and adhere to compliance standards. Our
                      e-commerce apps are designed to create a secure
                      transaction environment, mitigating the risk of data
                      breaches and safeguarding sensitive information. We
                      understand the value of third-party integrations in
                      e-commerce apps. From payment gateways to shipping
                      providers and analytics platforms, we seamlessly
                      incorporate these services to enhance functionality,
                      streamline operations, and gain valuable insights into
                      customer behaviour.
                    </p> */}
                    <Link
                      href={"/our-portfolio"}
                      as={"/our-portfolio"}
                      className="btn btn-outline-dark"
                      role="button"
                    >
                      Explore projects
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 order-1 order-lg-2">
                  <div className="Development-img ms-auto">
                    <Image
                      src="/assets/img/app-facility.webp"
                      alt="Development"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                    {/* <div className="overlay-text">
                      <h5>E-COMMERCE</h5>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Development Facility section end here... */}

        {/* Ecommerce app section start here... */}
        <section className="ecommerce-app d-none">
          <div className="max-content-width">
            <div className="container-fluid">
              <h4 className="title">Our E-commerce projects</h4>
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="ecommerce-app-card">
                    <Link href="/" className="stretched-link">
                      <MyImage
                        src="/assets/img/appProject1.webp"
                        alt="IOS-APP"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="ecommerce-app-card">
                    <Link href="/" className="stretched-link">
                      <MyImage
                        src="/assets/img/appProject2.webp"
                        alt="IOS-APP"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="ecommerce-app-card">
                    <Link href="/" className="stretched-link">
                      <MyImage
                        src="/assets/img/appProject3.webp"
                        alt="IOS-APP"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Ecommerce app section end here... */}

        {/* Flutter app Development section start here... */}
        <section className="development-facility flutter flutter-one">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 col-lg-6">
                  <div className="Development-img">
                    <MyImage
                      src="/assets/img/flutter-app.webp"
                      alt="flutter-app"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                    {/* <div className="overlay-text">
                        <h5>FLUTTER</h5>
                      </div> */}
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                  <div className="development-text">
                    <h5 className="title">
                      Leading Flutter App Development Company.
                    </h5>
                    <p>
                      We are the leading Flutter app development company that has delivered several successful apps for global businesses. You get the best Flutter app solutions with our advanced Flutter app development services. Flutter is an open source for web and mobile applications supporting iOS and Android platforms. With Flutter, we help create dynamic, feature-rich mobile, web, and desktop apps with a single code base. With an experienced team of top Flutter app developers, we are always ready to create engaging and spontaneous iOS and Android apps. As the best Flutter app development company, we offer end-to-end development services to build Android and iOS apps in record time while maintaining a single code base. Put your business at the forefront with the power of next-generation Flutter mobile apps with us. Our top flutter app developers believe in providing solutions your customers love and helping your business grow.

                    </p>
                    {/* <p>
                      Flutter app development is all about performance. Thanks
                      to its robust architecture, users benefit from fast
                      rendering and smooth animation without lag or stuttering.
                      Our developers use efficient algorithms, optimize code for
                      maximum speed, use Hot Reload, and use Flutter's Hot
                      Reload feature to quickly iterate and tune our app's
                      performance to create smooth, high-performing apps.
                      Flutter is an attractive solution because it can give
                      users a native experience.
                    </p> */}
                    <Link
                      href={"/our-portfolio"}
                      as={"/our-portfolio"}
                      className="btn btn-outline-dark"
                      role="button"
                    >
                      Explore projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Flutter app Development section end here... */}

        {/* Flutter app section start here... */}
        <section className="ecommerce-app d-none">
          <div className="max-content-width">
            <div className="container-fluid">
              <h4 className="title">Our Flutter projects</h4>
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="ecommerce-app-card">
                    <Link href="/" className="stretched-link">
                      <MyImage
                        src="/assets/img/appProject1.webp"
                        alt="IOS-APP"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="ecommerce-app-card">
                    <Link href="/" className="stretched-link">
                      <MyImage
                        src="/assets/img/appProject2.webp"
                        alt="IOS-APP"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="ecommerce-app-card">
                    <Link href="/" className="stretched-link">
                      <MyImage
                        src="/assets/img/appProject3.webp"
                        alt="IOS-APP"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Flutter app section end here... */}

        {/* Trust-Worthy React Native app section start here... */}
        <section className="development-facility react-native-development">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 col-lg-6 order-2 order-lg-1">
                  <div className="development-text">
                    <h5 className="title">
                      Top React Native App Development Company.
                    </h5>
                    <p>
                      iWebwiser is an internationally recognized top react native app development company with over decades of experience working with businesses across various sectors. We offer the best talent, technical expertise, and competitive pricing to enable our clients to operate efficiently and increase productivity. Our experience in React Native allows us to use a single code base and create multiple platform-specific applications with a shorter development cycle. We turn your ideas into reality. Whether you have discovered a problem that needs solving or have an idea to generate a revolutionary digital application that will solve all your problems, we offer the best reactive native development solutions. Our goal is to make your project a success from the beginning.

                      Stay ahead of the competition with powerful, scalable, and custom React native development. React Native development company iWebwiser specializes in creating successful business applications. We develop cutting-edge mobile app solutions that scale your business using native app development services. Simply share your visualization with us, we will make this a reality with a team of react experts and analysts.

                    </p>
                    {/* <p>
                      Performance is of utmost importance in React Native app
                      development. The framework's architecture ensures
                      native-like performance with fast rendering times, smooth
                      animations, and responsive interactions. Our developers
                      utilize hardware acceleration technologies and employ
                      efficient algorithms to produce high-performing apps that
                      exceed modern mobile users' expectations. React Native's
                      power lies in its ability to deliver a native-like
                      experience. Our developers utilize platform-specific
                      components and APIs to ensure the app seamlessly
                      integrates with underlying operating systems, offering
                      users a familiar yet immersive experience. From navigation
                      patterns and gestures to platform features like platform
                      notifications or features unique to React Native, React
                      Native apps offer users a native feel and functionality.
                    </p> */}
                    <Link
                      href={"contact-us"}
                      as={"/contact-us"}
                      className="btn btn-outline-dark"
                      role="button"
                    >
                      Build your next React Native app with us!

                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 order-1 order-lg-2">
                  <div className="Development-img ms-auto">
                    <MyImage
                      src="/assets/img/React-native.webp"
                      alt="flutter-app"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                    {/* <div className="overlay-text">
                        <h5>REACT NATIVE</h5>
                      </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trust-Worthy React Native app section end here... */}

        {/* React-Native All Project start here... */}
        <section className="ecommerce-app d-none">
          <div className="max-content-width">
            <div className="container-fluid">
              <h4 className="title">Our React native projects</h4>
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="ecommerce-app-card">
                    <Link href="/" className="stretched-link">
                      <MyImage
                        src="/assets/img/appProject1.webp"
                        alt="IOS-APP"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="ecommerce-app-card">
                    <Link href="/" className="stretched-link">
                      <MyImage
                        src="/assets/img/appProject2.webp"
                        alt="IOS-APP"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="ecommerce-app-card">
                    <Link href="/" className="stretched-link">
                      <MyImage
                        src="/assets/img/appProject3.webp"
                        alt="IOS-APP"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* React-Native All Project end here... */}

        {/* App Development start here... */}
        <div className="native-head">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row justify-content-center text-center">
                <div className="col-12">
                  <h4 className="title native-title">
                    Native App Development Company in India.
                  </h4>
                </div>
                <div className="col-12 col-lg-11">
                  <p>
                    Native mobile application development has become often used
                    for in-app gaming. So, a lot of care should be taken when
                    selecting this type of service. As a Native application
                    development company, we can understand your requirements and
                    budget. We are the most prominent native app development
                    company with the knowledge to assist your business grow and
                    reach new levels. The native application development
                    solutions include the development of native Android and
                    Windows apps. With these mobile native apps, we offer
                    fantastic features, such as Beacon Technology , multitasking
                    3D Touch, and numerous other features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* App Development end here... */}

        {/* Native App section start here... */}
        <section className="development-facility flutter">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 col-lg-6">
                  <div className="Development-img">
                    <MyImage
                      src="/assets/img/native-app.webp"
                      alt="native-app"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                    {/* <div className="overlay-text">
                        <h5>FLUTTER</h5>
                      </div> */}
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                  <div className="development-text">
                    <h5 className="title">
                      Top-Notch Native App Development Services in India.
                    </h5>
                    <p>
                      Native app development is making a mobile application
                      designed on a single platform. The app is created with
                      software and programming languages specific to a
                      particular platform. For instance, you can develop a
                      native Android application using Java, Kotlin, and iOS
                      applications using Swift and Objective C. Our Android
                      application design services include the best and most
                      flexible native mobile app development. We also provide
                      iOS native app development for our customers. iOS is among
                      the most popular operating systems to develop iPhone
                      native apps. It is a well-known brand name with excellent
                      performance, a simple user interface, and high security.
                    </p>
                    {/* <p>
                      With a deep understanding of the latest technologies and
                      industry best practices, our team creates innovative and
                      easy-to-use native apps that drive business growth.
                      Whether you're a start-up or an established business, we
                      work closely with you to understand your vision and goals
                      and implement solutions that align with them. Our goal is
                      to provide world-class native app development services
                      that exceed your expectations. We strive to be your
                      trusted partner on the digital journey, providing you with
                      the tools and support you need to thrive in the highly
                      competitive app marketplace. Let us help you bring your
                      app idea to life and make a significant impact in your
                      industry with our timely and outstanding native app
                      development services in India.{" "}
                    </p> */}
                    <Link
                      href={"/our-portfolio"}
                      as={"/our-portfolio"}
                      className="btn btn-outline-dark"
                      role="button"
                    >
                      Explore projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Native App section end here... */}

        {/* React-Native All Project start here... */}
        <section className="ecommerce-app d-none">
          <div className="max-content-width">
            <div className="container-fluid">
              <h4 className="title">Our Native projects</h4>
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="ecommerce-app-card">
                    <Link href="/" className="stretched-link">
                      <MyImage
                        src="/assets/img/appProject1.webp"
                        alt="IOS-APP"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="ecommerce-app-card">
                    <Link href="/" className="stretched-link">
                      <MyImage
                        src="/assets/img/appProject2.webp"
                        alt="IOS-APP"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="ecommerce-app-card">
                    <Link href="/" className="stretched-link">
                      <MyImage
                        src="/assets/img/appProject3.webp"
                        alt="IOS-APP"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* React-Native All Project end here... */}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const appData = {
    image_1:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/Design-banner.png",
    image_2:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/Design-mobile-ios.png",
    image_3:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/quality-service.png",
    image_5:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/ios-app (3).png",
    image_6:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/ios-app (2).png",
    image_7:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/ios-app (1).png",
    image_8:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/flutter-app.png",
    image_9:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/React-native.png",
    image_10:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/native-app.png",
    image_11:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/magento.png",
    image_12:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/woo-commerce.png",
    image_13:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/shopify.png",
  };
  return {
    props: {
      appData,
    },
  };
}

export default MobileApp;
