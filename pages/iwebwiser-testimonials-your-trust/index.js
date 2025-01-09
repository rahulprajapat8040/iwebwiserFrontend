import Head from "next/head";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MyImage } from "@/Utility/HomeSliderData";
import { ApiUrl, ServerUrl } from "@/Utility/ApiUrl";
import { callApi } from "@/hooks/useapi";
const Layout = dynamic(import("@/Components/Common/Layout"));

const Testimonial = (props) => {
  const [feedbackdata, setFeedbackData] = useState([])
  console.log(feedbackdata)
  const fetchData = async () => {
    try {
      const res = await callApi(ApiUrl.getAllFeedback);
      const data = await res.data.feedbacks
      setFeedbackData(data)
      console.log(data);

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Voices of Success: Hear What Our Clients Say | iWebwiser</title>
        <meta name="keywords" content="e" />
        <meta
          name="description"
          content=" iWebwiser is a globally reliable company, trusted by thousands of business owners with their projects, and you can hear what our clients say about our work."
        />

        <link
          rel="canonical"
          href="https://www.iwebwiser.com/iwebwiser-testimonials-your-trust"
        />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content="Voices of Success: Hear What Our Clients Say | iWebwiser"
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FTestimonial-BG.webp&w=1920&q=75"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="Voices of Success: Hear What Our Clients Say | iWebwiser"
        />
        <meta
          property="og:url"
          content="https://www.iwebwiser.com/iwebwiser-testimonials-your-trust"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FTestimonial-BG.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content=" iWebwiser is a globally reliable company, trusted by thousands of business owners with their projects, and you can hear what our clients say about our work."
        />
      </Head>
      <Layout>
        {/* testimonial Banner section start here... */}
        <section className="testimonial-home">
          <div className="max-content-width">
            <div className="testimonial-home-bg">
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
                <h4>Our Trusted Clients!</h4>
              </motion.div>
            </div>
          </div>
        </section>
        {/* testimonial Banner section end here... */}

        {/* Testimonial of our Clients section start here... */}
        <section className="Testimonials">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-md-5 px-0">
                  <div className="testimonial-text">
                    <h4>
                      Discover Why We Are Preferred by Our Clients.
                    </h4>
                    <div className="testimonial-left">
                      <div className="testimonial-img">
                        <MyImage
                          src="/assets/img/Testimonial-BG.webp"
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="Testimonial-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-7 px-0">
                  <div className="testimonial-slide-content">
                    <div className="row mx-0">
                      <div className="col-12 col-md-6">
                        <div className="testimonial-slide-position">
                          <Slider
                            {...Testimonialsettings1}
                            className="Testimonial-slide-1"
                          >
                            {feedbackdata.map((feedback) => (
                              <div className="testimonial-card">
                                <div key={feedback.id} className="card-body">
                                  <p>
                                    {feedback.description}
                                  </p>
                                  <h5>{feedback.title}</h5>
                                  <h6>{feedback.sub_title}</h6>
                                </div>
                              </div>
                            ))}

                          </Slider>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 d-none d-md-block">
                        <div className="testimonial-slide-position">
                          <Slider
                            {...Testimonialsettings2}
                            className="Testimonial-slide-2"
                          >
                            {feedbackdata.map((feedback) => (
                              <div className="testimonial-card">
                                <div className="card-body">
                                  <p>
                                    {feedback.description}
                                  </p>
                                  <h5>{feedback.title}</h5>
                                  <h6>{feedback.sub_title}</h6>
                                </div>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial of our Clients section end here... */}
      </Layout>
    </>
  );
};

export default Testimonial;

var Testimonialsettings1 = {
  slidesToShow: 2.1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  swipe: true,
  swipeToSlide: true,
  draggable: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  touchMove: false,
  vertical: true,
  pauseOnHover: true,
  cssEase: "linear",
  adaptiveHeight: false,
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

var Testimonialsettings2 = {
  slidesToShow: 2,
  slidesToScroll: 1,
  draggable: true,
  arrows: false,
  dots: false,
  infinite: true,
  swipe: true,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  touchMove: false,
  vertical: true,
  pauseOnHover: true,
  cssEase: "linear",
  adaptiveHeight: false,
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

// export async function getStaticProps() {
//   const testimonialData = {
//     heading_1: "Our Trusted Clients!",
//     TestimonialSection: {
//       heading_1: "Discover Why We Are Preferred by Our Clients.",
//       testimonialImg: "/assets/img/Testimonial-BG.webp",
//       testimonialSlider_1: [
//         {
//           name: "Steele Parker",
//           position: "( Director ) Spark Business Technology",
//           Discreptions: "Partnering with IWebWiser has enabled us to focus on core competencies while expanding our market reach. Their professionalism and dedication make them indispensable to our success. In hindsight, I regret not engaging with them sooner; our decision to make them our permanent partner has been instrumental in our growth. I'm immensely grateful to the entire team at IWebWiser for their support and partnership. I wholeheartedly recommend them to any organization seeking exceptional outsourcing services."
//         },
//         {
//           name: " Dr Augusta Dorning, ",
//           position: "Managing Partner (EHOA)",
//           Discreptions: "Behind the scenes I have had support from great graphic and designers in the persons of Saul Basckin & Meenaski. Their patience with me was immeasurable and dispensed with many smiles.."
//         },
//         {
//           name: "Saul Basckin",
//           position: "( Director ) Appwise Pty Ltd",
//           Discreptions: "Our experience working with IWebwiser and their team has been nothing short of excellent. They demonstrated remarkable efficiency and possessed the necessary expertise to not only execute the development tasks but also offer valuable insights and advice throughout the project lifecycle. I wholeheartedly recommend IWebwiser as our trusted partner in delivering software solutions. Their commitment to speed, quality, and reliability has significantly contributed to the success of our projects. IWebwiser has become an integral part of our extended family, with their team making numerous visits to South Africa to foster our professional relationshi."
//         }
//       ],
//       testimonialSlider_2: [
//         {
//           name: "Vygantas Tugaudis",
//           position: "( Director ) TugOnn",
//           Discreptions: "My experience working with iWebWiser has been positive thus far. Their team has demonstrated professionalism and a deep understanding of my vision. Communication has been effective, and they have shown a willingness to accommodate my ideas and preferences throughout the design process. I am confident that this positive experience will continue as we progress to the development phase. Based on my experience, I highly recommend iWebWiser to other individuals and businesses seeking application and web development services. Their impressive work on the mobile application design, combined with their professionalism and adaptability, makes them a reliable partner for bringing ideas to life."
//         },
//         {
//           name: "Medifellows",
//           position: "Founder, CEO",
//           Discreptions: "Certificate of excellence has been provided by the CEO and CMO of Medifellows to the Director of iWebwiser, and assigned the post of CTO for Medifellows."
//         },
//         {
//           name: "Vygantas Tugaudis",
//           position: "( Director ) TugOnn",
//           Discreptions: "My experience working with iWebWiser has been positive thus far. Their team has demonstrated professionalism and a deep understanding of my vision. Communication has been effective, and they have shown a willingness to accommodate my ideas and preferences throughout the design process. I am confident that this positive experience will continue as we progress to the development phase. Based on my experience, I highly recommend iWebWiser to other individuals and businesses seeking application and web development services. Their impressive work on the mobile application design, combined with their professionalism and adaptability, makes them a reliable partner for bringing ideas to life."
//         },
//         {
//           name: "Medifellows",
//           position: "Founder, CEO",
//           Discreptions: "Certificate of excellence has been provided by the CEO and CMO of Medifellows to the Director of iWebwiser, and assigned the post of CTO for Medifellows."
//         }
//       ]
//     }
//   }

//   return {
//     props: {
//       testimonialData,
//     },
//   };
// }
