import Image from "next/image";

export const sliderData = [
  {
    serviceType: "Real Estate",
    serviceDescription:
      "With iWebwiser Advanced Real State Software Development, you can revolutionize your online business.",
    serviceImage: "/assets/img/offerRealEstate.webp",
    imageType: "Image",
    link: "/real-estate",
    as: '/real-estate',
    alt: 'revolutionise-your-online-real-estate-business'
  },
  {
    serviceType: "E-Learning System",
    serviceDescription:
      "With the cutting-edge e-learning system iWebwiser, you can unlock knowledge and empower learning.",
    serviceImage: "/assets/img/offerEducation.webp",
    imageType: "Image",
    link: "/e-learning-and-education",
    as: '/e-learning-and-education',
    alt: 'unleashing-the-rhythm-and-E-Learning System-arab-board'
  },
  {
    serviceType: "Healthcare & Lifestyle",
    serviceDescription:
      "Create a better ecosystem of pharmaceutical products, technology, and healthcare to keep people safe and healthy.",
    serviceImage: "/assets/img/health&lifestyleBanner.webp",
    imageType: "Image",
    link: "/healthcare-and-lifestyle",
    as: '/healthcare-and-lifestyle',
    alt: 'build-a-better-ecosystem-of-healthcare-to-keep-people-safe-and-well'
  },
  {
    serviceType: "Retail & eCommerce",
    serviceDescription:
      "Our eCommerce Developers Will Help You Create Your eCommerce Store.",
    serviceImage: "/assets/img/offerInsurance.webp",
    imageType: "Image",
    link: "/retail-ecommerce",
    as: '/retail-ecommerce',
    alt: 'safeguarding-your-future'
  },
  {
    serviceType: "Tour & Travels",
    serviceDescription:
      "Explore Our Tour & Travels IT Solutions to find your next Adventure.",
    serviceImage: "/assets/img/tour&travelBanner.webp",
    imageType: "Image",
    link: "/tour-and-travel",
    as: '/tour-and-travel',
    alt: 'unlock-knowledge-and-empower-learning'
  },
];

export const MyImage = ({ className, src, width, height, sizes, alt }) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
    />
  );
};
