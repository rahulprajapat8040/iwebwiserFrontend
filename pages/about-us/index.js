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
  const [modal, setModal] = useState(false)
  const toggle = () => {
    if (modal) {
      refVid.current.pause();
    } else {
      setTimeout(() => {
        if (refVid.current) {
          refVid.current.play();
          document.getElementById("HealthCareModal").parentElement.classList.add("healthCare-modal");
        }
      }, 400)
    }
    setModal(!modal)
  }
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
    toggle()
  }

  return (
    <>
      <Head>
        <title> Give Growth & Transformation To Your Business | iWebwiser</title>
        <meta name="keywords" content="iWebwiser, Growth and Transformation, Global Company, Design and Development Services, IT Soultions" />
        <meta name="description" content="iWebwiser provides expert solutions & services according to your needs, which will result in the efficient growth and innovative transformation of your business." />
        <link rel="canonical" href="https://www.iwebwiser.com/about-us" />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta name="twitter:title" content="Give Growth & Transformation To Your Business | iWebwiser" />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta name="twitter:image" content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Funique1.webp&w=1920&q=75" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        <meta property="og:title" content="Give Growth & Transformation To Your Business | iWebwiser" />
        <meta property="og:url" content="https://www.iwebwiser.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta property="og:image" content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Funique1.webp&w=1920&q=75" />
        <meta property="og:description" content="iWebwiser provides expert solutions & services according to your needs, which will result in the efficient growth and innovative transformation of your business." />
      </Head>
      <Layout>
        {/* About-Home-section start here... */}
        <section className="about-home">
          <div className="max-content-width">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate={"visible"}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="about-home-bg"
            >
              <h4>{props?.aboutData?.heading_1}</h4>
            </motion.div>
          </div>
        </section>
        {/* About-Home-section end here... */}
        {/* Make-us-unique section start here... */}
        <section className="make-us-unique">
          <div className="max-content-width">
            <div className="container-fluid">
              <div ref={ref1} className="row align-items-center">
                <div className="col-12 col-lg-5">
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
                    <p>
                      If you're a start-up seeking to grow or an established
                      business, We're here to assist you in expanding your
                      possibilities. Since our humble beginnings in 2018, we've
                      developed into a global company and have expanded to every
                      corner of the world. We're pleased to offer all-inclusive
                      web-based design and development services. With our unique
                      array of offshore and onshore services, we're capable of
                      tailoring our expertise to meet the needs of our clients.
                      Being aware of the needs of our clients as well as the
                      evolving digital market has allowed us to expand year
                      after year. For Fintech, Healthcare, Retail, Travel and
                      many more, chances are that we have a good understanding
                      of your sector already.
                    </p>
                    <div className="text-center text-lg-start">
                      <Link
                        href={"/contact-us"}
                        as={"/contact-us"}
                        className="btn btn-outline-dark"
                        role="button"
                      >
                        Contact Us Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7 px-lg-0 d-none d-lg-block">
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
        {/* Technical-experience section start here... */}
        <section className="Technical-experience">
          <div className="max-content-width">
            <div className="container-fluid">
              <div ref={ref2} className="row align-items-center">
                <div className="col-12 col-lg-5 px-0">
                  <div
                    style={{
                      transform: isInView4 ? "none" : "translateY(-100px)",
                      opacity: isInView4 ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.6s",
                    }}
                    className="Technical-experience-text"
                  >
                    <h4>
                      Every success shows our energetic workforce and
                      collaborative work culture.
                    </h4>
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="Technical-experience-data row">
                    <div className="col-6 px-0">
                      <div
                        style={{
                          transform: isInView5 ? "none" : "translateY(100px)",
                          opacity: isInView5 ? 1 : 0,
                          transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                        }}
                        className="Technical-experience-card-box tech-card-1"
                      >
                        <div className="d-flex align-items-center">
                          <h4 id="number4">8</h4>
                        </div>
                        <h5>Branches Worldwide</h5>
                        <p>
                          Offices in India, USA, UK, South Africa,
                          Saudi Arabia, Hong Kong, Malaysia and Australia.
                        </p>
                      </div>
                    </div>
                    <div className="col-6 px-0">
                      <div
                        style={{
                          transform: isInView6 ? "none" : "translateY(100px)",
                          opacity: isInView6 ? 1 : 0,
                          transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1s",
                        }}
                        className="Technical-experience-card-box tech-card-2"
                      >
                        <div className="d-flex align-items-center">
                          <h4 id="number5">100</h4>
                          <h4>+</h4>
                        </div>
                        <h5>Expert Technical Team</h5>
                        <p>
                          Developers, Designers, Analysts, Digital Marketing
                          Experts, Interns/Apprentices. We’ve got skilled
                          experts to cover all areas.
                        </p>
                      </div>
                    </div>
                    <div className="col-6 px-0">
                      <div
                        style={{
                          transform: isInView7 ? "none" : "translateY(100px)",
                          opacity: isInView7 ? 1 : 0,
                          transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.3s",
                        }}
                        className="Technical-experience-card-box tech-card-3"
                      >
                        <div className="d-flex align-items-center">
                          <h4 id="number6">400</h4>
                          <h4>+</h4>
                        </div>
                        <h5>Happy Clients</h5>
                        <p>
                          Our clients are spread across the globe and
                          consistently return to continue working with us.
                        </p>
                      </div>
                    </div>
                    <div className="col-6 px-0">
                      <div
                        style={{
                          transform: isInView8 ? "none" : "translateY(100px)",
                          opacity: isInView8 ? 1 : 0,
                          transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.6s",
                        }}
                        className="Technical-experience-card-box tech-card-4"
                      >
                        <div className="d-flex align-items-center">
                          <h4 id="number7">5</h4>
                          <h4>+</h4>
                        </div>
                        <h5>Years of Experience</h5>
                        <p>
                          We’ve learnt a lot over that time and enjoy using that
                          knowledge to benefit our clients.
                        </p>
                      </div>
                    </div>
                    <div className="col-6 px-0">
                      <div
                        style={{
                          transform: isInView9 ? "none" : "translateY(100px)",
                          opacity: isInView9 ? 1 : 0,
                          transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.9s",
                        }}
                        className="Technical-experience-card-box tech-card-5"
                      >
                        <div className="d-flex align-items-center">
                          <h4 id="number8">3</h4>
                          <h4>+</h4>
                        </div>
                        <h5>Development Centres</h5>
                        <p>
                          Our modern dedicated development centres are Bikaner,
                          Indore, Ratangarh
                        </p>
                      </div>
                    </div>
                    <div className="col-6 px-0">
                      <div
                        style={{
                          transform: isInView10 ? "none" : "translateY(100px)",
                          opacity: isInView10 ? 1 : 0,
                          transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 2.2s",
                        }}
                        className="Technical-experience-card-box tech-card-6"
                      >
                        <div className="d-flex align-items-center">
                          <h4 id="number9">600</h4>
                          <h4>+</h4>
                        </div>
                        <h5>Successful Projects</h5>
                        <p>
                          We have worked on a huge number of digital projects
                          for wide range of industries. Let’s add yours
                          project...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technical-experience section end here... */}
        {/* HealthCare Advise section start here... */}
        <section className="Health-care-advise">
          <div className="max-content-width">
            <h4 className="main-title">Our HealthCare Partner</h4>
            <div className="container-fluid">
              <div className="row justify-content-center align-items-start">
                <div className="col-12 col-lg-6">
                  <div className="content">
                    <div className="advise-logo-content">
                      <div className="logo">
                        <MyImage
                          src="/assets/img/About-Health-logo.svg"
                          alt="About-Health-logo"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </div>
                      <div>
                        <h6 className="logo-title">
                          Global primary care
                          <span>
                            consultant
                          </span>
                        </h6>
                      </div>
                    </div>
                    <div className="left-content">
                      <h4 className="title">
                        Assisting health care organisations realise their potential to offer the highest standards in delivery of
                        primary care.
                      </h4>
                      <p className="description">
                        Primary Care has repeatedly been shown to improve quality of care and reduce the cost of care. Our team can assist you in creating your organization and reaching these goals.
                      </p>
                      <div className="text-start">
                        <Link
                          href={"https://globalprimarycare.com/professor-alain-montegut"}
                          as={"https://globalprimarycare.com/professor-alain-montegut"}
                          className="btn btn-outline-dark"
                          role="button"
                          target="_blank"
                        >
                          The value of primary care
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8 col-lg-6">
                  <div class="card health-card">
                    <video className="card-banner" autoPlay muted loop>
                      <source src={"/assets/img/About-health-advise.mp4"} type="video/mp4" />
                    </video>
                    <div class="card-img-overlay">
                      <button type="button" class="btn btn-link card-title stretched-link" onClick={handelVideo}>
                        Alain J. Montegut
                      </button>
                      <p class="card-text">MD FAAFP-
                        <span>{" "}Globalprimarycare</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* HealthCare Advise section end here... */}
        {/* Clients-Feedback section start here... */}
        <section className="client-feedback d-none">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-8 order-2 order-lg-1">
                  {/* Client Feedback Video section cards start here... */}
                  <div className="row justify-content-evenly">
                    <div className="col-6 col-md-5">
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
                              src={props?.aboutData?.video_1}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <div className="card-img-overlay">
                          <div className="overlay-text">
                            <h4>Pauline Erdman I</h4>
                            <p>CEO &amp; Founder - Durban</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-5">
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
                              src={props?.aboutData?.video_2}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <div className="card-img-overlay">
                          <div className="overlay-text">
                            <h4>Gene Anderson</h4>
                            <p>CEO &amp; Founder - Durban</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-5">
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
                              src={props?.aboutData?.video_3}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <div className="card-img-overlay">
                          <div className="overlay-text">
                            <h4>Cindy Senger</h4>
                            <p>CEO &amp; Founder - Durban</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-5">
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
                              src={props?.aboutData?.video_4}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <div className="card-img-overlay">
                          <div className="overlay-text">
                            <h4>Christina Kessler</h4>
                            <p>CEO &amp; Founder - Durban</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Client Feedback Video section cards end here... */}
                </div>
                <div className="col-12 col-lg-4 order-1 order-lg-2">
                  <div className="feedback-text">
                    <h4>Words from Our Clients</h4>
                    <p>
                      We value the feedback and experiences of our clients. We
                      take pride in providing exceptional IT solutions and
                      services that exceed expectations. Don't just take our
                      word for it let our clients' words speak for themselves.
                      We are delighted to share the positive testimonials and
                      reviews we have received from our valued customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-bg-text scrollTextX-3">
            <h3 className="">CLIENTS FEEDBACKS</h3>
          </div>
        </section>
        {/* Clients-Feedback section end here... */}
        {/* Our All Trusted Guests section start here... */}
        <section className="trusted-guest">
          <div className="max-content-width">
            <div className="container-fluid">
              <div ref={ref3} className="row">
                <div className="col-12 col-lg-4 px-0">
                  <div
                    style={{
                      transform: isInView11 ? "none" : "translateX(-100px)",
                      opacity: isInView11 ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                    }}
                    className="trusted-guest-text"
                  >
                    <h5>OUR TRUSTED CLIENTS</h5>
                    <h4>
                      Innovative IT Solutions for Your Unique Success Journey.
                    </h4>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="All-guests">
                    <div className="all-guest-content guest-border-right-bottom">
                      <div
                      // style={{
                      //   transform: isInView12 ? "none" : "translateY(-100px)",
                      //   opacity: isInView12 ? 1 : 0,
                      //   transition:
                      //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1s",
                      // }}
                      >
                        <div className="guest-img">
                          <MyImage
                            src="/assets/img/client(3).webp"
                            alt="appwise"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="all-guest-content guest-border-right-bottom">
                      <div
                      // style={{
                      //   transform: isInView13 ? "none" : "translateY(-100px)",
                      //   opacity: isInView13 ? 1 : 0,
                      //   transition:
                      //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.2s",
                      // }}
                      >
                        <div className="guest-img">
                          <MyImage
                            src="/assets/img/client(4).webp"
                            alt="zidni-academy"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="all-guest-content guest-border-bottom">
                      <div
                      // style={{
                      //   transform: isInView14 ? "none" : "translateY(-100px)",
                      //   opacity: isInView14 ? 1 : 0,
                      //   transition:
                      //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.3s",
                      // }}
                      >
                        <div className="guest-img">
                          <MyImage
                            src="/assets/img/clientIshango.webp"
                            alt="green-central-brown-goods-delivery-space"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="all-guest-content guest-border-right-bottom">
                      <div
                      // style={{
                      //   transform: isInView16 ? "none" : "translateY(-100px)",
                      //   opacity: isInView16 ? 1 : 0,
                      //   transition:
                      //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.5s",
                      // }}
                      >
                        <div className="guest-img">
                          <MyImage
                            src="/assets/img/client(5).webp"
                            alt="medi-fellows-a-digital-platform-for-the-medical-community"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="all-guest-content guest-border-right-bottom">
                      <div
                      // style={{
                      //   transform: isInView17 ? "none" : "translateY(-100px)",
                      //   opacity: isInView17 ? 1 : 0,
                      //   transition:
                      //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.6s",
                      // }}
                      >
                        <div className="guest-img">
                          <MyImage
                            src="/assets/img/clientUnderArmour.webp"
                            alt="uitify"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="all-guest-content guest-border-bottom">
                      <div
                      // style={{
                      //   transform: isInView18 ? "none" : "translateY(-100px)",
                      //   opacity: isInView18 ? 1 : 0,
                      //   transition:
                      //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.7s",
                      // }}
                      >
                        <div className="guest-img">
                          <MyImage
                            src="/assets/img/clientZidni.webp"
                            alt="a-growing-community-of-like-minded-golfer"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="all-guest-content guest-border-right">
                      <div
                      // style={{
                      //   transform: isInView20 ? "none" : "translateY(-100px)",
                      //   opacity: isInView20 ? 1 : 0,
                      //   transition:
                      //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.9s",
                      // }}
                      >
                        <div className="guest-img">
                          <MyImage
                            src="/assets/img/client(1).webp"
                            alt="ishango-e-college-will-empower-you-to-take-control-of-your-career"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="all-guest-content guest-border-right">
                      <div
                      // style={{
                      //   transform: isInView21 ? "none" : "translateY(-100px)",
                      //   opacity: isInView21 ? 1 : 0,
                      //   transition:
                      //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 2s",
                      // }}
                      >
                        <div className="guest-img">
                          <MyImage
                            src="/assets/img/clientPlayground.webp"
                            alt="saudi-health-power-is-a-large-group-of-family-doctors-and-their-healthcare-team"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="all-guest-content">
                      <div
                      // style={{
                      //   transform: isInView22 ? "none" : "translateY(-100px)",
                      //   opacity: isInView22 ? 1 : 0,
                      //   transition:
                      //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 2.1s",
                      // }}
                      >
                        <div className="guest-img">
                          <MyImage
                            src="/assets/img/client(6).webp"
                            alt="floor-and-furnishing-home-furnishing-brand"
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
        {/* Our All Trusted Guests section end here... */}
        {/* Our Videos section start here... */}
        <section className="our-video d-none">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <h4>Client Journeys Sharing with iWebwiser</h4>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <button
                    type="button"
                    className="btn px-0 our-video-btn w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#VideoModal"
                  >
                    <video className="our-video-bg" autoPlay muted loop>
                      <source src={"/assets/img/About-health-advise.mp4"} type="video/mp4" />
                    </video>
                  </button>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <button
                    type="button"
                    className="btn px-0 our-video-btn w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#VideoModal"
                  >
                    <video className="our-video-bg" autoPlay muted loop>
                      <source src={"/assets/img/About-health-advise.mp4"} type="video/mp4" />
                    </video>
                  </button>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <button
                    type="button"
                    className="btn px-0 our-video-btn w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#VideoModal"
                  >
                    <video className="our-video-bg" autoPlay muted loop>
                      <source src={"/assets/img/About-health-advise.mp4"} type="video/mp4" />
                    </video>
                  </button>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <button
                    type="button"
                    className="btn px-0 our-video-btn w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#VideoModal"
                  >
                    <video className="our-video-bg" autoPlay muted loop>
                      <source src={"/assets/img/About-health-advise.mp4"} type="video/mp4" />
                    </video>
                  </button>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <button
                    type="button"
                    className="btn px-0 our-video-btn w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#VideoModal"
                  >
                    <video className="our-video-bg" autoPlay muted loop>
                      <source src={"/assets/img/About-health-advise.mp4"} type="video/mp4" />
                    </video>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Videos section end here... */}
        {/* Become-A-part-of-Team section start here... */}
        <PartOfTeam />
        {/* Become-A-part-of-Team section end here... */}
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

        <Modal isOpen={modal} centered toggle={toggle} className={`modal-lg`} id="HealthCareModal">
          {/* <ModalHeader toggle={toggle}></ModalHeader> */}
          <ModalBody>
            <div>
              <video id="modalVideo" className="card-banner" controls ref={refVid}>
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
    heading_1: "We Are iWebwiser",
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
