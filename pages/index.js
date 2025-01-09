import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { sliderData } from "@/Utility/HomeSliderData";
import { callApi } from "@/hooks/useapi";
import { ApiUrl, ServerUrl } from "@/Utility/ApiUrl";
import { FormFeedback } from "reactstrap";
const Home = dynamic(import("@/Components/Home/Home"));
const Footer = dynamic(import("@/Components/Common/Footer"));

// import { useInView } from "react-intersection-observer";

const DefaultPage = (props) => {
  // console.log(props);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <>
      <Home data={props.data} sliderData={props.sliderData} />
    </>
  );
};

export default DefaultPage;

export async function getStaticProps() {
  let navData = [];
  let BannerApiData = [];
  let getAllServiceAPiData = [];
  let getAllCaseStudyApiData = [];
  let getAllCertificateApiData = [];
  let getAllOurClientApiData = [];
  let getAlltechnologyApiData = [];
  let getAllBlogApiData = [];
  let getAllFeedbackApiData = [];

  try {
    const [
      navRes,
      bannerRes,
      allserviceRes,
      AllCaseStudyRes,
      getAllCertificateRes,
      getAllOurClientRes,
      getAlltechnologyRes,
      getAllBlogRes,
      getAllFeedbackRes,
    ] = await Promise.all([
      // callApi(ApiUrl.nav_bar),
      callApi(`${ApiUrl.getBanner}`),
      callApi(`${ApiUrl.getAllService}`),
      callApi(`${ApiUrl.getAllCaseStudy}`),
      callApi(`${ApiUrl.getAllCertificate}`),
      callApi(`${ApiUrl.getAllOurClient}`),
      callApi(`${ApiUrl.getAlltechnology}`),
      callApi(`${ApiUrl.getAllBlog}`),
      callApi(`${ApiUrl.getAllFeedback}`),
    ]);

    navData = navRes?.data || [];
    BannerApiData = bannerRes?.data || null;
    getAllServiceAPiData = allserviceRes?.data?.services || null;
    getAllCaseStudyApiData = AllCaseStudyRes?.data?.caseStudies || null;
    getAllCertificateApiData = getAllCertificateRes?.data?.certificates || null;
    getAllOurClientApiData = getAllOurClientRes?.data?.ourClients || null;
    getAlltechnologyApiData = getAlltechnologyRes?.data?.technologys || null;
    getAllBlogApiData = getAllBlogRes?.data?.blogs || null;
    getAllFeedbackApiData = getAllFeedbackRes?.data?.feedbacks || null;
  } catch (err) {
    console.log(err);
  }

  const borderClasses = [
    "guest-content guest-border-right-bottom",
    "guest-content guest-border-right-bottom",
    "guest-content guest-border-bottom",
    "guest-content guest-border-right-bottom",
    "guest-content guest-border-right-bottom",
    "guest-content guest-border-bottom",
    "guest-content guest-border-right-bottom",
    "guest-content guest-border-right-bottom",
    "guest-content guest-border-bottom",
    "guest-content guest-border-right",
  ];

  const transformClass = ["feedback-card transform-card", "feedback-card"];

  const data = {
    BannerSections: {
      heading_1: BannerApiData?.title || null,
      Section_video: BannerApiData?.image || null,
      ExploreBtnLink: BannerApiData?.button_link || null,
      developmentBtnBox:
        getAllServiceAPiData?.map((item) => item.title) || null,
      ExploreBtn: "Explore What We Offer",
    },
    AboutSection: {
      heading_1: "WHO WE ARE",
      Paragraph:
        " We are a team of passionate and skilled professionals dedicated to delivering top-notch web and app development services, along with digital marketing initiatives. With our client-centric approach, we make technology accessible and easy to use. We understand that every business is unique, and our team of experts will collaborate with you to understand your specific needs and challenges. Our goal is to become your partner of choice in the constantly changing technological landscape.",
      contactBtn: "Connect With Our Experts",
      AboutSectionImg: "/assets/img/who-we-are.png",
    },
    OurRatingSection: {
      heading_1: "Our Ratings",
      RatingImg:
        getAllCertificateApiData?.map((certImage) => certImage.image) || null,
    },
    GuestSection: {
      GuestImgMap: (getAllOurClientApiData || []).map((clientImg, index) => ({
        GuestImg: clientImg.image,
        className: borderClasses[index % borderClasses.length],
      })),
      heading_1: "OUR CLIENTS & PARTNERS",
      heading_2: "Trusted by Startups, Small Businesses and Global Brands.",
    },
    OurServicesHomeSection: {
      heading_1: "Our Services",
      Paragraph:
        "We are dedicated to delivering effective solutions to our clients, through which they can stand strongly in the competitive market and feel secure in the changing trends of the digital landscape.",
      serviceData:
        getAllServiceAPiData?.map((service) => {
          const cleanDescription = service.short_description.replace(
            /<\/?[^>]+(>|$)/g,
            ""
          );
          return {
            title: service.title,
            description: cleanDescription,
          };
        }) || null,
    },
    ProjectSection: {
      heading_1: "Our Client’s Success Makes Us Proud",
      Paragraph:
        "Our Client’s achievements reflect our hard work, dedication, and commitment to excellence and drive us to continuously push our limits.",
      InnerCard:
        getAllCaseStudyApiData?.map((caseStudy) => ({
          LogoImg: caseStudy.addCaseStudy.image,
          heading: caseStudy.addCaseStudy.productName,
          Img: caseStudy.impact.image,
          Paragraphinner: caseStudy.addCaseStudy.short_description,
          platformUsers: caseStudy.addCaseStudy.platformUsers,
          downloads: caseStudy.addCaseStudy.downloads,
          industryTitle: caseStudy?.industry?.title,
        })) || null,
    },
    ServicesSection: {
      heading_1: "Explore Our Dynamic Service & Solutions",
      heading_2: "Digital Transformation, eCommerce & Products",
      ServiceItem_1: {
        heading: "Digital Transformation",
        Paragraphinner:
          "Boost Their Digital Capabilities To Transform Your Business.",
        Img: "/assets/img/DigitalTransformation2.webp",
      },
      ServiceItem_2: {
        heading: "Digital Product",
        Paragraphinner:
          "Reduce The Cost Of Ownership And Time To Market By Getting Our Products Perfectly Developed.",
        Img: "/assets/img/DigitalProducts2.webp",
      },
      ServiceItem_3: {
        heading: "Digital eCommerce",
        Paragraphinner:
          "With The Help Of Our Trusted Ecommerce Agency, Grow Your Business.",
        Img: "/assets/img/DigitalECommerce2.webp",
      },
    },
    OurHomeTechSection: {
      heading_1: "Our Technology and Stack",
      Paragraph:
        "Combining our team's years of expertise and the latest technologies to deliver innovative solutions.",
      TechSection:
        getAlltechnologyApiData?.map((tech) => {
          return {
            Img: tech.image,
            language: tech.title,
          };
        }) || null,
    },
    HealthCareSection: {
      heading_1:
        "Assisting health care organisations realise their potential to offer the highest standards in delivery of primary care.",
      Paragraph:
        " Global Primary Care Consultants is to assist organisations to realise their potential in offering the highest standards for the delivery of primary care. Global Primary Care Consultants will work with its partners to educate leaders and staff and facilitate change.",
      Img: "/assets/img/Rectangle 2342.png",
      HealthList: [
        "Optimising the health of patients through the development of high quality primary care organizations;",
        "Optimising the health of communities through the integration of community and population health strategies in its program development;",
        "Providing resources to medical organisations who desire to improve their health care delivery through practice redesign, quality improvement and the transformation of primary care;",
        "Providing resources to medical universities and health staff colleges in the training of medical students,residents and staff in primary care.",
      ],
    },
    SolutionSection: {
      heading_1: "Our Latest Blogs And Articles",
      Paragraph:
        "Stay informed with our latest blogs and articles, offering valuable insights, ideas, and industry news.",
      SolutionCarditem_1:
        getAllBlogApiData?.map((blog) => ({
          Img: blog.image,
          heading: blog.title,
          Paragraphinner: blog.description,
          blogLink: blog.blog_link,
        })) || null,
    },
    FeedbackSection: {
      FeedbackData:
        getAllFeedbackApiData?.map((feedback, index) => ({
          Video: feedback.image,
          title: feedback.title,
          sub_title: feedback.sub_title,
          description: feedback.description,
          className: transformClass[index % transformClass.length],
        })) || null,
    },
  };

  return {
    props: {
      sliderData,
      data: { ...data, navData: navData || [] },
    },
  };
}
