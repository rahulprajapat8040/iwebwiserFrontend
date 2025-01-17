const OurCompany = dynamic(import("@/Components/OurCompany/OurCompany"),{ ssr: false });
import dynamic from "next/dynamic";
const About = (props) => {
  return (
    <>
      <OurCompany props={props}/>
    </>
  );
};


export default About;

export async function getStaticProps() {
  const OurCompanyData = {
    AboutHomeSectionData: {
      heading_1: "We Are iWebwiser",
      heading_2:
        "We love developing apps, websites and digital platforms-you name it ,we’ve probably done it numerous times,and that’s how we bring our experience and expertise to the table!",
    },
    MakeUniqueSectionData: {
      heading_1: " Whether it's transforming your digital strategy, enhancing it with cutting-edge technology, or driving innovation through analytics, we're here to propel your business forward.",
      Paragraph: ["We are digital innovators committed to challenging outdated concepts, creating new paths, and empowering businesses to adapt and grow at an unparalleled pace with our digital solutions.", 
        "Since our humble beginning in 2016, we have grown as an international brand, reaching all corners of the world. To meet our clients' needs, we customize our expertise by providing comprehensive development and marketing services. Our ability to adapt to the changing digital world and meet our clients' needs has enabled us to succeed year after year."]
    },
    OurMissionSectionData: {
      heading_1: "Our Mission",
      heading_2: "& Vision",
      Paragraph: [" At iWebwiser, we aim to empower businesses worldwide with innovative digital solutions that drive growth, efficiency, and success. We are committed to delivering exceptional value to our clients by providing cutting-edge technology. We aim to be a trusted partner, guiding businesses through digital transformation.",
         " Our vision at iWebwiser is to be a globally recognized leader in digital consulting, known for our innovative solutions, unwavering commitment to client success, and ethical business practices. By delivering impactful results and building long-lasting partnerships, we aim to make a positive and lasting impact on the businesses we serve and our communities."]
    },
    TechnicalSectionData:{
      heading_1: " Every success shows our energetic workforce and collaborative work culture.",
      mark: '+',
      innerCard_1:{
        heading_1: "15",
        heading_3: "Years of Experience",
        Paragraph: " We've learned much over that time and enjoy using that knowledge to benefit our clients."
      },
      innerCard_2:{
        heading_1: "50",
        heading_3: "Expert Workforce",
        Paragraph: "Developers, Designers, Analysts, Marketing Experts, and Interns/Apprentices—we have skilled experts in all areas."
      },
      innerCard_3:{
        heading_1: "150",
        heading_3: "Successful Projects",
        Paragraph: " We have worked on a large number of digital projects for a wide range of industries. Let's add yours."
      },
      innerCard_4:{
        heading_1: "100",
        heading_3: "Happy Customers",
        Paragraph: " Our clients are spread across the globe and consistently return to continue working with us."
      },
      innerCard_5:{
        heading_1: "8",
        heading_3: "Global Presence",
        Paragraph: "There are offices in the USA, UK, South Africa, Saudi Arabia, Hong Kong, Malaysia, Australia, and India."
      },
      innerCard_6:{
        heading_1: "3",
        heading_3: "Development Headquarters",
        Paragraph: "Our modern dedicated development centers are Bikaner, Indore, and Ratangarh."
      },
    }


    // image_1: "/assets/img/unique.webp",
    // image_2:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (5).png",
    // image_3:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (16).png",
    // image_4:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (3).png",
    // image_5:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (7).png",
    // image_6:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (4).png",
    // image_7:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (9).png",
    // image_8:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (8).png",
    // image_9:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (10).png",
    // image_10:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (13).png",
    // image_11:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (6).png",
    // image_12:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (2).png",
    // image_13:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (1).png",
    // image_14:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (14).png",
    // image_15:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (15).png",
    // image_16:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (11).png",
    // image_17:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (12).png",
    // video_1:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/feedback-2.mov",
    // video_2:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/feedback-1.mov",
    // video_3:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/feedback-4.mov",
    // video_4:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/feedback-3.mov",
    // video_5:
    //   "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/Home-Banner.mp4",
  };
  return {
    props: {
      OurCompanyData,
    },
  };
}


