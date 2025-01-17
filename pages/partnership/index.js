import dynamic from "next/dynamic";

const Partnership = dynamic(import("@/Components/Partnership/Partnership"));

const PartnershipPage = (props) => {
  return (
    <>
      <Partnership props={props}/>
    </>
  );
};

export async function getStaticProps() {
  const aboutData = {
    heading_1: "Partnership & Certifications",
    heading_2: "We have the expertise to deliver great solutions.",
    image_1: "/assets/img/unique.webp",
    image_2:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (5).png",
    image_3:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (16).png",
    image_4:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (3).png",
    image_5:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (7).png",
    image_6:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (4).png",
    image_7:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (9).png",
    image_8:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (8).png",
    image_9:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (10).png",
    image_10:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (13).png",
    image_11:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (6).png",
    image_12:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (2).png",
    image_13:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (1).png",
    image_14:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (14).png",
    image_15:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (15).png",
    image_16:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (11).png",
    image_17:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/guest (12).png",
    video_1:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/feedback-2.mov",
    video_2:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/feedback-1.mov",
    video_3:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/feedback-4.mov",
    video_4:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/feedback-3.mov",
    video_5:
      "https://iwebwisermain.s3.ap-south-1.amazonaws.com/assets/img/Home-Banner.mp4",

      GuestImgMap: [
        {GuestImg: '/assets/img/client(3).webp', className: 'all-guest-content guest-border-right-bottom'},
        {GuestImg: '/assets/img/client(4).webp', className: 'all-guest-content guest-border-right-bottom'},
        {GuestImg: '/assets/img/tugonn.png', className: 'all-guest-content guest-border-bottom '},
        {GuestImg: '/assets/img/client(5).webp', className: 'all-guest-content guest-border-right-bottom'},
        {GuestImg: '/assets/img/spark.png', className: "all-guest-content guest-border-right-bottom"},
        {GuestImg: '/assets/img/clientZidni.webp', className: 'all-guest-content guest-border-bottom'},
        {GuestImg: '/assets/img/client(1).webp', className: "all-guest-content guest-border-right"},
        {GuestImg: '/assets/img/gpcc.png', className: "all-guest-content guest-border-right"},
        {GuestImg: '/assets/img/client(6).webp', className: "all-guest-content" },
      ],
      TrustedBrands: [
        {GuestImg: '/assets/img/client(3).webp', className: 'all-guest-content guest-border-right-bottom'},
        {GuestImg: '/assets/img/client(4).webp', className: 'all-guest-content guest-border-right-bottom'},
        {GuestImg: '/assets/img/clientIshango.webp', className: 'all-guest-content guest-border-right-bottom'},
        {GuestImg: '/assets/img/client(5).webp', className: 'all-guest-content guest-border-bottom'},
        {GuestImg: '/assets/img/client(17).webp', className: 'all-guest-content guest-border-right-bottom'},
        {GuestImg: '/assets/img/clientZidni.webp', className: 'all-guest-content guest-border-right-bottom'},
        {GuestImg: '/assets/img/client(16).webp', className: 'all-guest-content guest-border-right-bottom'},
        {GuestImg: '/assets/img/client(10).webp', className: 'all-guest-content guest-border-bottom'},
        {GuestImg: '/assets/img/client(12).webp', className: 'all-guest-content guest-border-right-bottom'},
        {GuestImg: '/assets/img/client(9).webp', className: 'all-guest-content guest-border-right-bottom'},
        {GuestImg: '/assets/img/client(8).webp', className: 'all-guest-content guest-border-right-bottom'},
        {GuestImg: '/assets/img/client(2).webp', className: 'all-guest-content guest-border-bottom'},
        {GuestImg: '/assets/img/client(1).webp', className: 'all-guest-content guest-border-right'},
        {GuestImg: '/assets/img/clientPlayground.webp', className:'all-guest-content guest-border-right'},
        {GuestImg: '/assets/img/client(6).webp', className:'all-guest-content guest-border-right'},
        {GuestImg: '/assets/img/EHOALogo-about.webp', className:'all-guest-content'},
      ]
  };
  return {
    props: {
      aboutData,
    },
  };
}

export default PartnershipPage;
