import React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import OurClients from "./OurClients";
const Layout = dynamic(import("@/Components/Common/Layout"));
const AboutSection = dynamic(import("@/Components/Home/AboutSection"));
const GuestSection = dynamic(import("@/Components/Home/GuestSection"));
const ProjectsSection = dynamic(import("@/Components/Home/ProjectsSection"));
const IndustorylevelSection = dynamic(
  import("@/Components/Home/IndustorylevelSection")
);

const HealthCareSection = dynamic(
  import("@/Components/Home/HealthCareSection")
);
const SolutionSection = dynamic(import("@/Components/Home/SolutionSection"));
const ServicesSection = dynamic(import("@/Components/Home/ServicesSection"));
const BannerSection = dynamic(import("@/Components/Home/BannerSection"));
const AynSection = dynamic(import("@/Components/Home/AynSection"));
const OurServicesHome = dynamic(import("@/Components/Home/OurServicesHome"));
const OurRatings = dynamic(import("@/Components/Home/OurRatings"));
const OurTechHome = dynamic(import("@/Components/Home/OurTechHome"));
const ContactFormHome = dynamic(import("@/Components/Home/ContactFormHome"));
const Home = (props) => {
  return (
    <div>
      <Head>
        <title>
          iWebwiser | Digital Transformation from Best Solutions | India
        </title>
        <meta name="keywords" content="" />
        <meta
          name="description"
          content=" iWebwiser | Best Digital Transformation services in India which offer you every possible IT solutions for your problems and support to raise/grow your business. | India."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iwebwiser" />
        <meta
          name="twitter:title"
          content="iWebwiser - Digital Transformation form Best Solutions in India"
        />
        <meta name="twitter:site:id" content="@iwebwiser" />
        <meta name="twitter:creator" content="@iwebwiser" />
        <meta
          name="twitter:image"
          content="https://iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FmedifellowAbout.webp&w=1920&q=75"
        />
        <meta name="Generator" content="Adobe Experience Manager" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="iWebwiser - Digital Transformation form Best Solutions in India"
        />
        <meta property="og:url" content="https://www.iwebwiser.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/assets/img/Logo.svg"
        />
        <meta
          property="og:description"
          content="Best Digital Transformation services in India which offer you every possible IT solutions for your problems and support to raise/grow your business in India."
        />

        <link rel="canonical" href="https://www.iwebwiser.com/" />

        <script>
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WJGFLCGV');
        `}
        </script>
      </Head>
      <Layout data={props?.data}>
        {/* Home Banner Section start here... */}
        <BannerSection BannerSection={props?.data?.BannerSections} />
        {/* Home Banner Section end here... */}

        {/* About Section start here... */}
        {/* <AboutSection AboutSection={props?.data?.AboutSection} /> */}
        {/* About Section end here... */}

        {/* our rating section start here... */}
        <OurRatings OurRatings={props?.data?.OurRatingSection} />
        {/* our rating section start here... */}

        {/* Transforming business section start here */}
        <section className="transform-business">
          <div className="max-content-width">
            <div className="tpbr">
              <h3>
                Transforming Businesses with Technology That Transcends
                Geographies and Platforms
              </h3>
              <p>
                At iWebwiser, we aim to empower businesses worldwide with
                innovative digital solutions that drive growth, efficiency, and
                success. We are committed to delivering exceptional value to our
                clients by providing cutting-edge technology. We aim to be a
                trusted partner, guiding businesses through digital
                transformation.
              </p>
            </div>
            <ul className="translist">
              <li>
                <h5>Proven Track Record:</h5>
                <p>
                  With a track record of successful projects and satisfied
                  clients, iWebwiser has a consistent ability to deliver results
                  and exceed expectations, maintaining its reputation as a
                  trusted partner.
                </p>
              </li>
              <li>
                <h5>Proven Track Record:</h5>
                <p>
                  With a track record of successful projects and satisfied
                  clients, iWebwiser has a consistent ability to deliver results
                  and exceed expectations, maintaining its reputation as a
                  trusted partner.
                </p>
              </li>
              <li>
                <h5>Proven Track Record:</h5>
                <p>
                  With a track record of successful projects and satisfied
                  clients, iWebwiser has a consistent ability to deliver results
                  and exceed expectations, maintaining its reputation as a
                  trusted partner.
                </p>
              </li>
              <li>
                <h5>Proven Track Record:</h5>
                <p>
                  With a track record of successful projects and satisfied
                  clients, iWebwiser has a consistent ability to deliver results
                  and exceed expectations, maintaining its reputation as a
                  trusted partner.
                </p>
              </li>
              <li>
                <h5>Proven Track Record:</h5>
                <p>
                  With a track record of successful projects and satisfied
                  clients, iWebwiser has a consistent ability to deliver results
                  and exceed expectations, maintaining its reputation as a
                  trusted partner.
                </p>
              </li>
              <li>
                <h5>Proven Track Record:</h5>
                <p>
                  With a track record of successful projects and satisfied
                  clients, iWebwiser has a consistent ability to deliver results
                  and exceed expectations, maintaining its reputation as a
                  trusted partner.
                </p>
              </li>
              <li>
                <h5>Proven Track Record:</h5>
                <p>
                  With a track record of successful projects and satisfied
                  clients, iWebwiser has a consistent ability to deliver results
                  and exceed expectations, maintaining its reputation as a
                  trusted partner.
                </p>
              </li>
              <li>
                <div className="trnsbtmsc">
                  <h3 className="text-white">
                    Ready to innovate and drive an impact?
                  </h3>
                  <button className="btn btn-primary text-white">
                    Partner with us
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* Transforming business section end here */}

        {/* Our Projects section start here... */}
        <ProjectsSection ProjectsSection={props?.data?.ProjectSection} />
        {/* Our Projects section end here... */}

        {/* Our-Services-home */}
        <OurServicesHome
          OurServicesHome={props?.data?.OurServicesHomeSection}
        />

        {/* Our Guest section start here... */}
        <GuestSection GuestSection={props?.data?.GuestSection} />
        {/* Our Guest section end here... */}

        {/* Our Client feedback section start here... */}

        <OurClients  FeedbackSection={props?.data?.FeedbackSection}/>

        {/* Our Client feedback section ends here... */}

        {/* <section className="client-feedback">
          <div className="max-content-width">
            <div className="feedvds">
              Client Feedback Video section cards start here...
              <div className="feedback-card transform-card">
                <div className="feedback-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    data-wf-ignore="true"
                  >
                    <source
                      src="/assets/img/feedback-1.mov"
                      type="video/mp4"
                    />
                  </video>
                  <img className="playbtn" src="/assets/img/playbtn.png" alt="" />
                </div>
                <div className="card-img-overlay">
                  <div className="overlay-text">
                    <h4>Cindy Senger</h4>
                    <p>CEO &amp; Founder - Durban</p>
                  </div>
                </div>
              </div>
              <div className="feedback-card">
                <div className="feedback-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    data-wf-ignore="true"
                  >
                    <source
                      src="/assets/img/feedback-3.mov"
                      type="video/mp4"
                    />
                  </video>
                  <img className="playbtn" src="/assets/img/playbtn.png" alt="" />
                </div>
                <div className="card-img-overlay">
                  <div className="overlay-text">
                    <h4>Christina Kessler</h4>
                    <p>CEO &amp; Founder - Durban</p>
                  </div>
                </div>
              </div>
              Client Feedback Video section cards end here...
            </div>
            <div className="feedback-text">
              <h3 className="sh">Our clients feedbacks</h3>
              <p className="sd">
                We value the feedback and experiences of our clients. We
                take pride in providing exceptional IT solutions and
                services that exceed expectations. Don't just take our
                word for it let our clients' words speak for themselves.
                We are delighted to share the positive testimonials and
                reviews we have received from our valued customers.
              </p>
            </div>
          </div>
        </section> */}
        
        {/* OurTech-home */}
        <OurTechHome OurTechHome={props?.data?.OurHomeTechSection} />
        {/*  */}

        {/* All Services section start here... */}
        <ServicesSection ServicesSection={props?.data?.ServicesSection} />
        {/* All Services section end here... */}

        {/* Industory-level section start here... */}
        {/* <IndustorylevelSection sliderData={props?.sliderData} /> */}
        {/* Industory-level section end here... */}
        {/* HealthCare section start here... */}
        <HealthCareSection HealthCareSection={props?.data?.HealthCareSection} />
        {/* HealthCare section end here... */}
        {/* Solution & offering section start here... */}
        <SolutionSection SolutionSection={props?.data?.SolutionSection} />
        {/* Solution & offering section end here... */}

        {/* contact section start here... */}
        <ContactFormHome />
        {/* contact section start here... */}
      </Layout>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WJGFLCGV"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </div>
  );
};

export default Home;

var settings2 = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
  dots: false,
  infinite: true,
  swipe: true,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  pauseOnHover: true,
  cssEase: "linear",
  // centerMode: true,
  // centerPadding: "60px",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
