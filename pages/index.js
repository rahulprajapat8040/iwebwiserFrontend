import React , {useState, useEffect }from "react";
import dynamic from "next/dynamic";
import { sliderData } from "@/Utility/HomeSliderData";
import { ApiUrl } from "@/Utility/ApiUrl";
const Home = dynamic(import("@/Components/Home/Home"));

const DefaultPage = ({ data, sliderData }) => {
    const [isMounted, setIsMounted] = useState(false)
     useEffect(() => {
        setIsMounted(true)
    } , [])
    
    if (!isMounted) {
        return null
    }
  return (
    <>
      <Home data={data} sliderData={sliderData} />    
    </>
  );
};

export async function getStaticProps() {
  try {
    const [
      bannerRes,
      servicesRes, 
      caseStudyRes,
      certificateRes,
      clientRes,
      technologyRes,
      blogRes,
      feedbackRes
    ] = await Promise.all([
      fetch(`${ApiUrl.getBanner}`),
      fetch(`${ApiUrl.getAllService}`),
      fetch(`${ApiUrl.getAllCaseStudy}`),
      fetch(`${ApiUrl.getAllCertificate}`),
      fetch(`${ApiUrl.getAllOurClient}`),
      fetch(`${ApiUrl.getAlltechnology}`),
      fetch(`${ApiUrl.getAllBlog}`),
      fetch(`${ApiUrl.getAllFeedback}`)
    ]);

    const [
      bannerData,
      servicesData,
      caseStudyData,
      certificateData,
      clientData,
      technologyData,
      blogData,
      feedbackData
    ] = await Promise.all([
      bannerRes.json(),
      servicesRes.json(),
      caseStudyRes.json(),
      certificateRes.json(),
      clientRes.json(),
      technologyRes.json(),
      blogRes.json(),
      feedbackRes.json()
    ]);

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
        heading_1: bannerData?.data?.title || "",
        Section_video: bannerData?.data?.image || "",
        ExploreBtnLink: bannerData?.data?.button_link || "",
        developmentBtnBox: servicesData?.data?.services?.map(item => item.title) || [],
        ExploreBtn: 'Explore What We Offer'
      },
      AboutSection: {
        heading_1: 'WHO WE ARE',
        Paragraph: "We are a team of passionate and skilled professionals dedicated to delivering top-notch web and app development services, along with digital marketing initiatives. With our client-centric approach, we make technology accessible and easy to use. We understand that every business is unique, and our team of experts will collaborate with you to understand your specific needs and challenges. Our goal is to become your partner of choice in the constantly changing technological landscape.",
        contactBtn: 'Connect With Our Experts',
        AboutSectionImg: "/assets/img/who-we-are.png"
      },
      OurRatingSection: {
        heading_1: "Our Ratings",
        RatingImg: certificateData?.data?.certificates?.map(cert => cert.image) || []
      },
      GuestSection: {
        GuestImgMap: clientData?.data?.ourClients?.map((clientImg, index) => ({
          GuestImg: clientImg.image,
          className: borderClasses[index % borderClasses.length],
        })) || [],
        heading_1: "OUR CLIENTS & PARTNERS",
        heading_2: "Trusted by Startups, Small Businesses and Global Brands."
      },
      OurServicesHomeSection: {
        heading_1: "Our Services",
        Paragraph: "We are dedicated to delivering effective solutions to our clients, through which they can stand strongly in the competitive market and feel secure in the changing trends of the digital landscape.",
        serviceData: servicesData?.data?.services?.map(service => ({
          title: service.title || "",
          description: service.short_description?.replace(/<\/?[^>]+(>|$)/g, "") || "",
          slug: service.slug || "",
          image: service.image || ""
        })) || []
      },
      ProjectSection: {
        heading_1: "Our Client's Success Makes Us Proud",
        Paragraph: "Our Client's achievements reflect our hard work, dedication, and commitment to excellence and drive us to continuously push our limits.",
        InnerCard: caseStudyData?.data?.caseStudies?.map((caseStudy) => ({
          LogoImg: caseStudy.addCaseStudy?.image || "",
          heading: caseStudy.addCaseStudy?.productName || "",
          Img: caseStudy.addCaseStudy?.mainImage || "",
          Paragraphinner: caseStudy.addCaseStudy?.short_description || "",
          platformUsers: caseStudy.addCaseStudy?.platformUsers || "",
          downloads: caseStudy.addCaseStudy?.downloads || "",
          industryTitle: caseStudy?.industry?.title || ""
        })) || []
      },
      ServicesSection: {
        heading_1: "Explore Our Dynamic Service & Solutions",
        heading_2: "Digital Transformation, eCommerce & Products",
        ServiceItem_1: {
          heading: "Digital Transformation",
          Paragraphinner: "Boost Their Digital Capabilities To Transform Your Business.",
          Img: "/assets/img/DigitalTransformation2.webp"
        },
        ServiceItem_2: {
          heading: "Digital Product",
          Paragraphinner: "Reduce The Cost Of Ownership And Time To Market By Getting Our Products Perfectly Developed.",
          Img: "/assets/img/DigitalProducts2.webp"
        },
        ServiceItem_3: {
          heading: "Digital eCommerce",
          Paragraphinner: "With The Help Of Our Trusted Ecommerce Agency, Grow Your Business.",
          Img: "/assets/img/DigitalECommerce2.webp"
        }
      },
      OurHomeTechSection: {
        heading_1: "Our Technology and Stack",
        Paragraph: "Combining our team's years of expertise and the latest technologies to deliver innovative solutions.",
        TechSection: technologyData?.data?.technologys?.map(tech => ({
          Img: tech.image || "",
          language: tech.title || "",
        })) || []
      },
       HealthCareSection: {
        heading_1: "Assisting health care organisations realise their potential to offer the highest standards in delivery of primary care.",
        Paragraph: " Global Primary Care Consultants is to assist organisations to realise their potential in offering the highest standards for the delivery of primary care. Global Primary Care Consultants will work with its partners to educate leaders and staff and facilitate change.",
        Img: "/assets/img/Rectangle 2342.png",
        HealthList: [
          "Optimising the health of patients through the development of high quality primary care organizations;",
          "Optimising the health of communities through the integration of community and population health strategies in its program development;",
          "Providing resources to medical organisations who desire to improve their health care delivery through practice redesign, quality improvement and the transformation of primary care;",
          "Providing resources to medical universities and health staff colleges in the training of medical students,residents and staff in primary care."
        ]
      },
      SolutionSection: {
        heading_1: "Our Latest Blogs And Articles",
        Paragraph: "Stay informed with our latest blogs and articles, offering valuable insights, ideas, and industry news.",
        SolutionCarditem_1: blogData?.data?.blogs?.map(blog => ({
          Img: blog.image || "",
          heading: blog.title || "",
          Paragraphinner: blog.description || "",
          blogLink: blog.blog_link || ""
        })) || []
      },
      FeedbackSection: {
        FeedbackData: feedbackData?.data?.feedbacks?.map((feedback, index) => ({
          Video: feedback.image || "",
          title: feedback.title || "",
          sub_title: feedback.sub_title || "",
          description: feedback.description || "",
          className: transformClass[index % transformClass.length],
        })) || []
      }
    };

    return {
      props: {
        sliderData,
        data,
      },
      revalidate: 86400, // 24 hours
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        sliderData,
        data: {},
      },
      revalidate: 86400,
    };
  }
}

export default DefaultPage;

