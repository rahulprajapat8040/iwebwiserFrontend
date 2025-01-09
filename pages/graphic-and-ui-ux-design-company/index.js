import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Layout = dynamic(import("@/Components/Common/Layout"));

const Design = (props) => {
  return (
    <>
      <Head>
        <title>
          Top UI UX Designers - iWebwiser | Graphic & Animation Designs
        </title>
        <meta name="keywords" content="iWebwiser, UI UX Design, Top UI UX Designers, Responsive Web Design, Graphic Design, Animation design" />
        <meta
          name="description"
          content=" iWebwiser's top UI UX designers provide the best quality graphic and animation designs that are not only aesthetic but responsive to your target customers."
        />

        <link rel="canonical" href="https://www.iwebwiser.com/graphic-and-ui-ux-design-company" />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta name="twitter:title" content="Top UI UX Designers - iWebwiser | Graphic & Animation Designs" />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta name="twitter:image" content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FDesign-calc.webp&w=1920&q=75" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta property="og:title" content="Top UI UX Designers - iWebwiser | Graphic & Animation Designs" />
        <meta property="og:url" content="https://www.iwebwiser.com/graphic-and-ui-ux-design-company" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta property="og:image" content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FDesign-calc.webp&w=1920&q=75" />
        <meta property="og:description" content="iWebwiser's top UI UX designers provide the best quality graphic and animation designs that are not only aesthetic but responsive to your target customers." />
      </Head>
      <Layout>
        {/* Design-Banner Section start here... */}
        <section className="ExploreDesign-home">
          <div className="max-content-width">
            <div className="Design-home-bg">
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
                <h4>
                  Interactive Graphic Design Services Unleashing Creativity.
                </h4>
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
                className="Design-img d-none"
              >
                <MyImage
                  src={props?.designData?.image_1}
                  className="w-100"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Design-Banner Section end here... */}

        {/* Page Breadcrumb Navigation section start here... */}
        <div className="page-navigation">
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
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        <span>Designs</span>
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

        {/* UI-Designer section start here... */}
        <section className="UI-Design">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="UI-Img">
                <MyImage
                  src="/assets/img/Design-calc.webp"
                  alt="Design-calc"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <div className="UI-text">
                <h4>
                  UI Design that Showcases Your Brand's True Identity & Leaves Lasting User Experience.
                </h4>

                <p className="para-2">
                  iWebwiser recognizes the importance of user interface design in determining the digital product's user experience (UX). Our top UI UX designers excel in aesthetics and understanding user behavior so they can design the best user interface designs. Working collaboratively, they develop strategies with intuitive features for an enhanced User Experience. Design can evoke emotions, communicate brand messages, and drive conversions. Our best user interface design process begins with in-depth research on your target audience, industry trends, and unique business objectives. This provides the foundation for creating designs that resonate with users while meeting their needs.

                </p>
                <p className="para-2">
                  Our top UI UX designers in India use industry-leading design tools and techniques to craft visually appealing interfaces representing your brand identity. Every element, from colors and fonts to icons, images, and layout, is carefully considered to provide users with an enjoyable experience. Realizing the importance of designing an engaging user experience goes far beyond aesthetics; usability and functionality also play an integral part. We aim to craft intuitive interfaces that seamlessly guide customers through digital products for an enjoyable user journey.

                </p>
              </div>
            </div>
          </div>
        </section>
        {/* UI-Designer section end here... */}

        {/* UX-Designer section start here... */}
        <section className="UX-Design">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row justify-content-center justify-content-lg-start align-items-center">
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                  <div className="UX-text">
                    <h4>

                      Excellent User Experience Design Services Creating Memorable User Experiences.

                    </h4>
                    <p className="para-2">
                      With our User Experience design services, we enjoy creating unforgettable user experiences. Our talented team of top UI UX designers understands the significance of user-centered design, striving to craft interfaces that delight and engage users at every turn.
                      With our User Experience design services, we enjoy creating unforgettable user experiences. Our talented team of designers understands the significance of user-centered design, striving to craft interfaces that delight and engage users at every turn.

                    </p>
                    <p className="para-2">
                      Our UX design approach is based on collaborative and iterative design, and our participatory mindset, coupled with our open communication approach, is how we always work. The key to success is data-driven user insights, clearly defined goals, and strong validation. By blending creativity and technical expertise, we aim to elevate your brand and leave an enduring impression on your target audience. Partner with us to unlock the full potential of digital products while creating unforgettable user experiences that contribute to success and customer loyalty.

                    </p>
                    {/* <p className="para-2">
                      By blending creativity and technical expertise, we aim to
                      elevate your brand and leave an enduring impression on
                      your target audience. Partner with us to unlock the full
                      potential of digital products while creating unforgettable
                      user experiences that contribute to success and customer
                      loyalty.
                    </p> */}
                  </div>
                </div>
                <div className="col-12 col-md-7 col-lg-6 px-0 order-1 order-lg-2">
                  <div className="UX-Img">
                    <MyImage
                      src="/assets/img/ux-design.webp"
                      alt="UX-Design"
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
        {/* UX-Designer section end here... */}

        {/* Responsive Design Section start here... */}
        <section className="Responsive-Design">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row justify-content-center justify-content-lg-start align-items-center">
                <div className="col-12 col-md-7 col-lg-6 px-0">
                  <div className="Responsive-Img">
                    <MyImage
                      src="/assets/img/responsive-design.webp"
                      alt="Responsive-Design"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="Responsive-text">
                    <h4>
                      Optimizing User Experience Through Responsive Web Design Services.{" "}
                    </h4>
                    <p className="fw-bold para-2">
                      Research shows that responsive web design attracts more customers to any business.
                    </p>
                    <p className="para-2">
                      Responsive web design services are an integral part of today's digital Era, as more users access websites via smartphones, tablets, and multiple screen resolutions, including desktop computers with various solutions, making iWebwiser's goal of offering customers an enjoyable user journey across devices ever more critical. Our expert web designers and developers specialize in responsive web design, creating layouts that adapt automatically depending on screen size and orientation. When scaling up for larger screens, we take a mobile-first approach, ensuring your website stays visually pleasing while remaining user-friendly across devices.
                    </p>
                    <p className="para-2">
                      Impress your visitors with iWebwiser's responsive web design services. Great graphics, better accessibility, and a mobile-centric approach mean your visitors will be more interested and likely to use your services than your competitors. We offer advanced graphic designs and the latest responsive web design services and technologies to transform your website into an effective sales tool to help your business grow.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Responsive Design Section end here... */}

        {/* Graphic Design Section start here... */}
        <section className="Graphic-Design">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 order-2 order-lg-1">
                  <div className="Graphic-text">
                    <h4>
                      Spectacular Graphic Design Services to Attract More Customers for Your Business.
                    </h4>

                    <p className="para-2">
                      Get graphic design, prints, animations, videos, and more. Whether you need exceptional illustrations, stunning print designs, or compelling digital marketing assets, iWebwiser's top graphic designers in India can make it happen. iWebwiser graphic designers have been providing graphic design services for more than five years. iWebwiser is a leading graphic design company that offers reasonable pricing, artistic design, and a complete advertising package to get your graphic designs noticed, seen, and distributed worldwide. Whether you're looking for a spectacular new logo, Photoshop design, or more, a brilliant community of designers at iWebwiser's mind-blowing graphic design services can make it happen.

                    </p>
                    <p className="para-2">
                      Graphic designs are ideal for effectively engaging your customers and can highlight your key messages artistically and clearly. Creative, sophisticated, and eye-catching graphics captivate customers and immediately capture their attention. Increase your design efficiency today. Our comprehensive graphic design services adapt and take your needs into account. We have experienced top graphic designers in India who create impressive, impactful designs that attract your target audience.

                    </p>
                  </div>
                </div>
                <div className="col-12 order-1 order-lg-2">
                  <div className="Graphic-Img">
                    <MyImage
                      src="/assets/img/graphic-design.webp"
                      alt="Design-calc"
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
        {/* Graphic Design Section end here... */}

        {/* Animation Design Section start here... */}
        <section className="Animation-Design">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row justify-content-center justify-content-lg-start align-items-center">
                <div className="col-12 col-md-7 col-lg-5 px-0">
                  <div className="Animation-Img">
                    <MyImage
                      src="/assets/img/animation-design.webp"
                      alt="Animation-Design"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="Animation-text">
                    <h4>
                      Groundbreaking Animation Design Services Bringing Life to Your Creativity Ideas.
                    </h4>
                    <p className="para-2">
                      Since the Internet is huge and billions of users visit it daily, promoting a business here means advertising to a wide audience. Our animation design services in India present your idea through visual means. We provide comprehensive graphic and animation design services for a large or small company using the best techniques and a group of talented designers who together increase the quality of your business. Whether your business needs a small update or a complete branding overhaul, the team of animation designers will do everything possible to make your website unique.
                    </p>
                    <p className="para-2">
                      If you are looking for the best animation design services in India, we have top graphic designers and animation designers who are well-versed in the right colour combination, perfect logo, required typography, and other elements to make your website look great. With this in mind, iWebwiser strives to create something unique for you and your brand.
                    </p>
                    <p className="fw-bold para-2">
                      Now, it's time to revitalize your brand with the help of our animation designs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Animation Design Section end here... */}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const designData = {
    image_1: "/assets/img/design-banner-ice.webp",
    image_2:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/Design-calc.png",
    image_3:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/ux-design.png",
    image_4:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/responsive-design.png",
    image_5:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/Graphic-Design.png",
    image_6:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/Animation-design-2.png",
  };

  return {
    props: {
      designData,
    },
  };
}

export default Design;
