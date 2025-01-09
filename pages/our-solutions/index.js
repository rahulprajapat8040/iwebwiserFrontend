import PartOfTeam from "@/Components/Common/PartOfTeam";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Layout = dynamic(import("@/Components/Common/Layout"));

const Solution = (props) => {
  return (
    <>
      <Head>
        <title>
          Our Products: Digital Transformation | IT Solitons & Services
        </title>
        <meta
          name="keywords"
          content="iWebwiser, IT Soltions and Services, custom LMS, Our Products, Digital Health Transformation, Ecommerce App Development"
        />
        <meta
          name="description"
          content="iWebwiser's IT solutions and services provide digital transformation in real estate, healthcare, learning management systems, transportation & logistics, etc."
        />

        <link rel="canonical" href="https://www.iwebwiser.com/our-solutions" />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content="Our Products: Digital Transformation | IT Solitons & Services "
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fsolution1.webp&w=1920&q=75"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="Our Products: Digital Transformation | IT Solitons & Services "
        />
        <meta
          property="og:url"
          content="https://www.iwebwiser.com/our-solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fsolution1.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="iWebwiser's IT solutions and services provide digital transformation in real estate, healthcare, learning management systems, transportation & logistics, etc."
        />
      </Head>
      <Layout>
        <>
          {/* Solutions-&-offerings-Home-section start here... */}
          <section className="solution-home">
            <div className="max-content-width">
              <div className="solution-home-bg">
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
                  <h4 className="text-center">IT Solutions & Services</h4>
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
                  className="solution-img"
                >
                  <MyImage
                    className="w-100 d-none"
                    src="/assets/img/solutions.webp"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </motion.div>
              </div>
            </div>
          </section>
          {/* Solutions-&-offerings-Home-section end here... */}

          {/* Page Breadcrumb Navigation section start here... */}
          <div className="page-navigation">
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
                      <span>Solution&Offerings</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* Page Breadcrumb Navigation section end here... */}

          {/* Customers Solutions section start here... */}
          <section className="customer-solution">
            <div className="max-content-width">
              <div className="container-fluid">
                <div className="row">
                  {/* CustomerSolution 1 content start here...  */}
                  <div className="col-12 col-lg-6">
                    <div className="customer-solution-img">
                      <MyImage
                        src="/assets/img/solution6.webp"
                        alt="solution-content-1"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="customer-solution-text">
                      <h4>
                        <span className="ps-3"> Ecommerce App </span>
                        Development Company in India.
                      </h4>
                      <p>
                        We, iWebwiser, the top ecommerce app development company
                        in India, understand the industry's changing market
                        trends and transform your business concepts into viable
                        solutions. With a significant shift in customer
                        purchasing behavior, we know the importance of a robust
                        mobile solution for every business. Whether it's a
                        startup idea or a mobile ecommerce app for your
                        brick-and-mortar business, we have intelligent solutions
                        to your complex business challenges. Whether you need
                        clothing variety, online grocery delivery, cosmetics
                        delivery, travel booking, or more, our innovative
                        approaches help businesses attract new customers, build
                        customer loyalty, and enable users to collaborate in
                        real-time with buyers worldwide. The best user
                        experience is our constant goal, and with our ecommerce
                        app developers, you can benefit from ecommerce software
                        that will keep your customers coming back for more.
                      </p>
                      <span className="solution-text-bold">
                        Create a solid ground for develop your eCommerce app
                        idea.
                      </span>
                      <Link
                        className="btn btn-outline-dark bg-white mt-lg-5 inline-block mt-4 lmt-lg-0"
                        role="button"
                        href={"/contact-us"}
                      >
                        Schedule a Call
                      </Link>
                    </div>
                  </div>
                  {/* CustomerSolution 1 content end here...  */}
                </div>
                <div className="row">
                  {/* CustomerSolution 2 content start here...  */}
                  <div className="col-12 col-lg-6 order-2 order-lg-1">
                    <div className="customer-solution-text">
                      <h4>
                        Custom LMS Boosting Technology For
                        <span className="ps-3">Education.</span>
                      </h4>
                      <p>
                        We develop a customized learning management System for
                        your organization's training and education needs. Custom
                        LMS development enables the creation of intuitive,
                        innovative and inspiring online educational solutions
                        with advanced feature integrations that increase student
                        engagement. Our user-friendly platform transforms the
                        way teachers interact in conversation with students.
                        Teachers can easily create engaging and engaging
                        learning experiences that grab students' interest
                        through our Interactive Learning Management Systems
                        (LMS) platform. Students can participate in the LMS
                        learning process, collaborate, and give feedback,
                        creating a welcoming and engaging learning environment.
                      </p>
                      <span className="solution-text-bold">
                        Set the Stage for Your Learning Management Systems (LMS)
                        Development.
                      </span>

                      <Link
                        className="btn btn-outline-dark bg-white mt-lg-5 mt-5"
                        role="button"
                        href={"/contact-us"}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 order-1 order-lg-2 mt-5 mt-lg-0">
                    <div className="customer-solution-img">
                      <MyImage
                        src="/assets/img/solution1.webp"
                        alt="solution-content-2"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                  {/* CustomerSolution 2 content end here...  */}
                </div>
                <div className="row">
                  {/* CustomerSolution 3 content start here...  */}
                  <div className="col-12 col-lg-6 mt-5 lmt-lg-0">
                    <div className="customer-solution-img">
                      <MyImage
                        src="/assets/img/solution2.webp"
                        alt="solution-content-3"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="customer-solution-text customer-solution-text-2">
                      <h4>
                        {" "}
                        Digitize Your World With
                        <span className="ps-3">Our Product </span>
                        Redefines Excellence.
                      </h4>
                      <p>
                        Begin a journey into the digital world with Health
                        Power. Health Power is an exceptional product that
                        redefines the standard. It is designed to make your life
                        more health-giving. Our product innovation is more than
                        an item; it's a journey beyond boundaries. Be part of
                        the future where your life can be improved through
                        seamless integration and the most cutting-edge
                        technology. Our product allows you to explore, design,
                        and share in ways you've never thought of before and set
                        new standards for what is possible in the digital realm.
                      </p>
                      {/* <span className="solution-text-bold">
                        Create a solid ground for develop your eCommerce app
                        idea.
                      </span> */}
                      <Link
                        className="btn btn-outline-dark bg-white mt-lg-5 mt-5"
                        role="button"
                        href={"/health-power"}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                  {/* CustomerSolution 3 content end here...  */}
                </div>
                <div className="row">
                  {/* CustomerSolution 4 content start here...  */}
                  <div className="col-12 col-lg-6 order-2 order-lg-1">
                    <div className="customer-solution-text customer-solution-text-2">
                      <h4>
                        <span className="ps-3">Digital Health</span>{" "}
                        Transformation through Our IT Solution.
                      </h4>
                      <p>
                        Resources for advancing the capabilities of digital
                        health transformation are required now more than ever
                        before. The challenges that health systems face today
                        are unprecedented, and they will likely influence and
                        strengthen efforts to build the digital infrastructure
                        across all digital health transformation systems to
                        improve performance. In these rapid changes, healthcare
                        facilities, hospitals, and other healthcare providers
                        worldwide are creating strategies to boost capabilities.
                      </p>
                      <span className="solution-text-bold">
                        With digital healthcare transformation providers in
                        India, iWebwiser has created practical frameworks,
                        models, and tools globally to help assess and drive the
                        transformation of healthcare systems.
                      </span>
                      <Link
                        className="btn btn-outline-dark bg-white mt-lg-5 mt-5 "
                        role="button"
                        href={"/medi-fellows"}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 order-1 order-lg-2 mt-5 mt-lg-0">
                    <div className="customer-solution-img">
                      <MyImage
                        src="/assets/img/solution3.webp"
                        alt="solution-content-4"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                  {/* CustomerSolution 4 content end here...  */}
                </div>
                <div className="row">
                  {/* CustomerSolution 5 content start here...  */}
                  <div className="col-12 col-lg-6 mt-5 lmt-lg-0">
                    <div className="customer-solution-img">
                      <MyImage
                        src="/assets/img/solution4.webp"
                        alt="solution-content-5"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="customer-solution-text">
                      <h4>
                        Digital Transformation in
                        <span className="ps-3">Real Estate </span>
                        With Our IT Solution.
                      </h4>
                      <p>
                        Change the way you conduct business by using our
                        innovative technology solutions. Transform property
                        transactions into a breeze, streamline managing, and
                        gain valuable insight by using our cloud-based solutions
                        for the real estate sector. Our real estate products are
                        on the cutting edge of the digital revolution within the
                        property industry. Our innovative technology speeds up
                        property transactions, facilitates maintenance, and
                        offers real estate professionals valuable information.
                        The real estate market is constantly changing, creating
                        new challenges for professionals working there. At
                        iWebwiser, we are aware of the challenges faced by real
                        estate professionals and provide customized solutions
                        that empower realtors to succeed in the modern world of
                        technology.
                      </p>
                      {/* <span className="solution-text-bold">
                        Create a solid ground for develop your eCommerce app
                        idea.
                      </span> */}
                      <Link
                        className="btn btn-outline-dark bg-white mt-lg-5 "
                        role="button"
                        href={"/real-estate"}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                  {/* CustomerSolution 5 content end here...  */}
                </div>
                <div className="row">
                  {/* CustomerSolution 6 content start here...  */}
                  <div className="col-12 col-lg-6 order-2 order-lg-1">
                    <div className="customer-solution-text">
                      <h4>
                        <span className="ps-3">
                          Transportation & Logistics :{" "}
                        </span>{" "}
                        Innovative IT Solutions.
                      </h4>
                      <p>
                        Technology has brought about a paradigm shift in the
                        transportation and logistics industry. Good customer
                        experience, loyalty and the desire to grow the business
                        have now become the core values of stakeholders.
                        iWebwiser technology enthusiasts provide transportation
                        & logistics IT solutions to accelerate asset utilization
                        and provide real-time visibility into various processes.
                        We have divided transportation & logistics IT solutions
                        into different segments, such as warehouse management,
                        fleet management, shipping management, contract and
                        freight management, and brokerage solutions. We drive
                        our logistics management solutions through mobility,
                        digital transformation and data analysis. With digital
                        transportation solutions, iWebwiser-connected businesses
                        now optimize service delivery, support inventory
                        management, improve field ticket accuracy, increase
                        customer satisfaction, improve field service visibility,
                        and increase revenue while increasing sales force
                        productivity.
                      </p>
                      <span className="solution-text-bold">
                        Contact us today and embark on a transformative journey
                        to success in the digital Transportation & Logistics
                        landscape.
                      </span>
                      <Link
                        className="btn btn-outline-dark bg-white mt-lg-5 mt-5"
                        role="button"
                        href={"/contact-us"}
                      >
                        Get Free Quote
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 order-1 order-lg-2 mt-5 lmt-lg-0">
                    <div className="customer-solution-img">
                      <MyImage
                        src="/assets/img/solution5.webp"
                        alt="solution-content-6"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                  {/* CustomerSolution 6 content end here...  */}
                </div>
              </div>
            </div>
          </section>
          {/* Customers Solutions section end here... */}
          {/* Become-A-part-of-Team section start here... */}
          <PartOfTeam />
          {/* Become-A-part-of-Team section end here... */}
        </>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const solutionData = {
    image_1: "/assets/img/solutions.webp",
    image_2: "/assets/img-content-1.webp",
    image_3: "/assets/img/solution-content-2.webp",
    image_4: "/assets/img/solution-content-3.webp",
    image_5: "/assets/img/solution-content-4.webp",
    image_6: "/assets/img/content-5.webp",
    image_7: "/assets/img/solution-content-6.webp",
  };
  return {
    props: {
      solutionData,
    },
  };
}

export default Solution;
