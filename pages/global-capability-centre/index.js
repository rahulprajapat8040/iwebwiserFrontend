import Layout from "@/Components/Common/Layout";
import PartOfTeam from "@/Components/Common/PartOfTeam";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const About = (props) => {
  const ref1 = useRef(null);
  const refVid = useRef(null);
  const refVidEle = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const [modal, setModal] = useState(false);
  const toggle = () => {
    if (modal) {
      refVid.current.pause();
    } else {
      setTimeout(() => {
        if (refVid.current) {
          refVid.current.play();
          document
            .getElementById("HealthCareModal")
            .parentElement.classList.add("healthCare-modal");
        }
      }, 400);
    }
    setModal(!modal);
  };
  // const isInView2 = useInView(ref1, { once: true });
  const isInView3 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView4 = useInView(ref2, { once: true });
  const isInView5 = useInView(ref2, { once: true });
  const isInView6 = useInView(ref2, { once: true });
  const isInView7 = useInView(ref2, { once: true });
  const isInView8 = useInView(ref2, { once: true });
  const isInView9 = useInView(ref2, { once: true });
  const isInView10 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView11 = useInView(ref3, { once: true });
  const isInView12 = useInView(ref3, { once: true });
  const isInView13 = useInView(ref3, { once: true });
  const isInView14 = useInView(ref3, { once: true });
  const isInView15 = useInView(ref3, { once: true });
  const isInView16 = useInView(ref3, { once: true });
  const isInView17 = useInView(ref3, { once: true });
  const isInView18 = useInView(ref3, { once: true });
  const isInView19 = useInView(ref3, { once: true });
  const isInView20 = useInView(ref3, { once: true });
  const isInView21 = useInView(ref3, { once: true });
  const isInView22 = useInView(ref3, { once: true });
  const isInView23 = useInView(ref3, { once: true });
  const isInView24 = useInView(ref3, { once: true });
  const isInView25 = useInView(ref3, { once: true });
  const isInView26 = useInView(ref3, { once: true });
  const isInView27 = useInView(ref3, { once: true });

  const handelVideo = () => {
    toggle();
  };

  return (
    <>
      <Head>
        <title>
          {" "}
          Give Growth & Transformation To Your Business | iWebwiser
        </title>
        <meta
          name="keywords"
          content="iWebwiser, Growth and Transformation, Global Company, Design and Development Services, IT Soultions"
        />
        <meta
          name="description"
          content="iWebwiser provides expert solutions & services according to your needs, which will result in the efficient growth and innovative transformation of your business."
        />
        <link rel="canonical" href="https://www.iwebwiser.com/about-us" />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta
          name="twitter:title"
          content="Give Growth & Transformation To Your Business | iWebwiser"
        />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta
          name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Funique1.webp&w=1920&q=75"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="Give Growth & Transformation To Your Business | iWebwiser"
        />
        <meta property="og:url" content="https://www.iwebwiser.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Funique1.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="iWebwiser provides expert solutions & services according to your needs, which will result in the efficient growth and innovative transformation of your business."
        />
      </Head>
      <Layout>
        {/* About-Home-section start here... */}
        <section className="global-capability">
          <div className="max-content-width d-flex justify-content-start align-items-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate={"visible"}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="global-capability-bg"
            >
              <h4>{props?.aboutData?.heading_1}</h4>
              <p>
                iWebwiser's Global Capability Centre (GCC) in Bikaner is
                designed for innovation and growth with a sustainable and
                advanced infrastructure.
              </p>
            </motion.div>
          </div>
        </section>
        {/* About-Home-section end here... */}
        {/* Make-us-unique section start here... */}
        <section className="make-us-unique d-none">
          <div className="max-content-width">
            <div className="container-fluid">
              <div ref={ref1} className="row align-items-center">
                <div className="col-12 ">
                  <div
                    style={{
                      transform: isInView1 ? "none" : "translateY(100px)",
                      opacity: isInView1 ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.2s",
                    }}
                    className="make-us-text"
                  >
                    <h4>{props?.aboutData?.heading_2}</h4>
                  </div>
                </div>
                <div className="col-12 col-lg-7 px-lg-0 d-none ">
                  <div
                    style={{
                      scale: isInView3 ? "1" : "0",
                      opacity: isInView3 ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 2s",
                    }}
                    className="make-us-unique-upper"
                  >
                    <MyImage
                      src="/assets/img/unique1.webp"
                      alt="we-understand-that-every-client-has-unique-needs-and-challenges"
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
        {/* Make-us-unique section end here... */}
        {/* Timeline section start here... */}
        <section className="timeline">
          <div className="max-content-width">
            <div className="container-fluid">
              <div ref={ref1} className="row align-items-center">
                <div className="col-12 ">
                  <div className="timeline-title-text">
                    <h4>
                      From <span> Garage to GCC:</span> A Timeline of Innovation
                      & Growth
                    </h4>
                  </div>
                </div>

                <div className="col-12">
                  <div className="main-timeline">
                    <div className="history d-flex">
                      <div className="history-detail">
                        <p className="year">2002</p>
                        <p className="title">Where it all Started</p>
                        <p className="desc">
                          The company was established with an office in Hove, UK
                          and a team of five developers based in Jaipur, India.
                        </p>
                      </div>
                      <div className="right-img"></div>
                    </div>
                    <div className="history even d-flex">
                      <div className="right-img even"></div>
                      <div className="history-detail even">
                        <p className="year">2002</p>
                        <p className="title">Where it all Started</p>
                        <p className="desc">
                          The company was established with an office in Hove, UK
                          and a team of five developers based in Jaipur, India.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Timeline section end here... */}
        {/* our workspace section end here... */}
        <section className="our-workspace">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h2>Innovation-driven Modern Workplace</h2>
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-lg-5">
                  <h3>Collaborative Lounge Areas</h3>
                  <p>
                    The building has several enjoyable lounge areas to encourage
                    invention and practical cooperation since we believe the
                    finest ideas come from working as a team.
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-lg-5">
                  <h3>High Tech Meeting Rooms</h3>
                  <p>
                    Our meeting rooms are equipped with high-definition displays
                    and crystal-clear audio systems for smooth conference and
                    presentation sessions. Comfortable chairs and technological
                    developments are available to staff members.
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-lg-5">
                  <h3>Blend Of Nature</h3>
                  <p>
                    The GCC places greenery near workstations and natural plants
                    around the building to provide a stress-free,
                    environmentally pleasant atmosphere that improves staff
                    productivity and well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* our workspace section end here... */}

        {/* closer look section start here... */}
        <section className="closer-look ">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row ">
                <div className="col-12 col-lg-5">
                  <h2>
                    Get a closer look of our incredible Global Capability Center
                  </h2>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="row justify-content-between">
                    <div className="col-2 p-0">
                      <div className="img-nav">
                        <div className="img-box">
                          {" "}
                          <MyImage
                            src="/assets/img/appProject1.webp"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                        <div className="img-box">
                          {" "}
                          <MyImage
                            src="/assets/img/appProject2 (1).webp"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                        <div className="img-box">
                          <MyImage
                            src="/assets/img/appProject2.webp"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                        <div className="img-box">
                          {" "}
                          <MyImage
                            src="/assets/img/appProject3.webp"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-9 p-0">
                      <div className="img-screen">
                        <div className="img-box">
                          {" "}
                          <MyImage
                            src="/assets/img/appProject1.webp"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                        <div className="img-box">
                          {" "}
                          <MyImage
                            src="/assets/img/appProject2 (1).webp"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                        <div className="img-box">
                          <MyImage
                            src="/assets/img/appProject2.webp"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                        <div className="img-box">
                          {" "}
                          <MyImage
                            src="/assets/img/appProject3.webp"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* closer look section end here... */}

        {/* client says section start here... */}
        <section className="client-says">
          <div className="max-content-width">
            <div className="container-fluid">
              <h2>Words From Our Trusted Clients</h2>
              <div className="client-words">
                <div className="card">
                  <div className="card-body">
                    <h3>Saul Basckin</h3>
                    <span>(Director) Appwise Pty Ltd</span>

                    <p>
                      Our experience working with iWebwiser and their team has
                      been nothing short of excellent. They demonstrated
                      remarkable efficiency and possessed the necessary
                      expertise to not only execute the development tasks but
                      also offer valuable insights and advice throughout the
                      project lifecycle.
                    </p>

                    <p>
                      I wholeheartedly recommend iWebwiser as our trusted
                      partner in delivering software solutions. Their commitment
                      to speed, quality, and reliability has significantly
                      contributed to the success of our projects. iWebwiser has
                      become an integral part of our extended family, with their
                      team making numerous visits to South Africa to foster our
                      professional relationship.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h3>Vygantas Tugaudis</h3>
                    <span>(Director) TugOnn</span>

                    <p>
                      My experience working with iWebwiser has been positive
                      thus far. Their team has demonstrated professionalism and
                      a deep understanding of my vision. Communication has been
                      effective, and they have shown a willingness to
                      accommodate my ideas and preferences throughout the design
                      process. This positive experience will continue as we
                      progress to the development phase.
                    </p>

                    <p>
                      Based on my experience, I highly recommend iWebwiser to
                      other individuals and businesses seeking application and
                      web development services. Their impressive work on mobile
                      application design, combined with their professionalism
                      and adaptability, makes them a reliable partner for
                      bringing ideas to life.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h3>Steele Parker</h3>
                    <span>(Director) Spark Business Technology</span>

                    <p>
                      Partnering with iWebwiser has enabled us to focus on core
                      competencies while expanding our market reach. Their
                      professionalism and dedication make them indispensable to
                      our success. In hindsight, I regret not engaging with them
                      sooner; our decision to make them our permanent partners
                      has been instrumental in our growth.
                    </p>
                    <p>
                      I'm immensely grateful to the entire iWebwiser team for
                      their support and partnership. I wholeheartedly recommend
                      them to any organization seeking exceptional outsourcing
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* client says section end here... */}

        {/* Our Video Section Modal start here... */}
        <div
          className="modal fade"
          id="VideoModal"
          tabIndex="-1"
          aria-labelledby="VideoModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="VideoModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Our Video Section Modal end here... */}
        {/* HealthCare Section Modal start here... */}
        <Modal
          isOpen={modal}
          centered
          toggle={toggle}
          className={`modal-lg`}
          id="HealthCareModal"
        >
          {/* <ModalHeader toggle={toggle}></ModalHeader> */}
          <ModalBody>
            <div>
              <video
                id="modalVideo"
                className="card-banner"
                controls
                ref={refVid}
              >
                <source
                  src={"/assets/img/About-health-advise.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="modal-content">
              <h4 className="title">Alain J. Montegut</h4>
              <p className="description">
                MD FAAFP-
                <span>Globalprimarycare</span>
              </p>
            </div>
          </ModalBody>
        </Modal>
        {/* <div class="modal healthCare-modal fade" id="HealthCareModal" tabindex="-1" aria-labelledby="HealthCareModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-body">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div>
                  <video id="modalVideo" className="card-banner" controls >
                    <source src={"/assets/img/About-health-advise.mp4"} type="video/mp4" />
                  </video>
                </div>
                <div className="modal-content">
                  <h4 className="title">
                    Alain J. Montegut
                  </h4>
                  <p className="description">
                    MD FAAFP-
                    <span>
                      Globalprimarycare
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* HealthCare Section Modal end here... */}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const aboutData = {
    heading_1: "Entering A New Era of Innovation & Creativity",
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
  };
  return {
    props: {
      aboutData,
    },
  };
}

export default About;
