import { MyImage } from "@/Utility/HomeSliderData";
import { useInView, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
const Layout = dynamic(import("@/Components/Common/Layout"));
const ImageTable = dynamic(import("@/Components/Common/ImageTable"));
import { callApi } from "@/hooks/useapi";
import { ApiUrl, ServerUrl } from "@/Utility/ApiUrl";

export default function Partnership({ props }) {
  const [GuestImgMap, setGuestImgMap] = useState([]);
  const [GuestImgMap2, setGuestImgMap2] = useState([]);

  const [Rating, setRating] = useState([]);
  const [randomImages, setRandomImages] = useState([]);

  // console.log(Rating);
  // console.log(GuestImgMap);
  // console.log(GuestImgMap2);
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

  const classArray = [
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-bottom",
    "all-guest-content guest-border-right",
    "all-guest-content guest-border-right",
    "all-guest-content guest-border-right",
  ];

  const borderClasses = [
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-right-bottom",
    "all-guest-content guest-border-bottom",
    "all-guest-content guest-border-right",
  ];
  const fetchData = async () => {
    try {
      const res = await callApi(ServerUrl + ApiUrl.getAllOurClient);
      const data = res?.data.ourClients;

      const GuestImages = data?.slice(0, 9).map((clientImg, index) => ({
        GuestImg: clientImg.image,
        className: borderClasses[index % borderClasses.length],
      }));
      const GuestImages2 = data?.map((clientImg, index) => ({
        GuestImg: clientImg.image,
        className: classArray[index % classArray.length],
      }));

      setGuestImgMap(GuestImages);
      setGuestImgMap2(GuestImages2);
    } catch (err) {
      console.error("Error fetching client data:", err);
    }
  };
  const classes = [
    "all-guest-content guest-border-right",
    "all-guest-content guest-border-right",
    "all-guest-content",
  ];
  const fetchRating = async () => {
    try {
      const res = await callApi(ServerUrl + ApiUrl.getAllCertificate);
      const data = res?.data?.certificates;

      setRating(data);

      const randomSelection = getRandomImages(data, 3);
      setRandomImages(randomSelection);
    } catch (error) {
      console.error("Error fetching client data:", err);
    }
  };
  const getRandomImages = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  useEffect(() => {
    fetchData();
    fetchRating();
  }, []);

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
              <p>
                Certified Professionals to Manage Your Top-notch Web and App
                Development.
              </p>
            </motion.div>
          </div>
        </section>
        {/* About-Home-section end here... */}
        {/* Make-us-unique section start here... */}
        <section className="make-us-unique partnership">
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
                    <h4>We Have The Expertise To Deliver Great Solutions</h4>
                    <div className="row justify-content-between">
                      <div className="col-12 ">
                        <p>
                          Here at iWebwiser, we constantly tell ourselves that
                          we need to improve and enhance our knowledge. When our
                          hard work is recognized, we feel relieved and
                          confident that our aim to provide digital solutions is
                          moving in the direction we want it to.{" "}
                          <span className=" fw-bold">
                            Take a look at who we work with and the credentials
                            we have received.
                          </span>
                        </p>
                      </div>
                    </div>
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
        <section className="make-us-unique ayn-section" id="ayn-section">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12 col-lg-8 px-lg-0 order-2 order-lg-1">
                  <div className="make-us-text">
                    <h4>iWebwiser Expands to UK with aYn Partnership</h4>
                    <p>
                      iWebwiser is excited to partner with aYn to finally open
                      our UK office! This partnership lets us share our
                      expertise with businesses across the UK, perfectly fitting
                      with our goal of reaching a wider audience. Together with
                      aYn, we look forward to empowering businesses in the UK
                      with innovative solutions and tailored services.
                    </p>
                    <div className="text-center text-lg-start">
                      <a
                        className="btn btn-outline-dark"
                        role="button"
                        href="https://ayntech.org/"
                      >
                        MORE ABOUT AYN
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 px-lg-0 order-1 order-lg-2">
                  <div className="position-relative">
                    <span className="logo-bg">
                      {" "}
                      <MyImage
                        src="/assets/img/ayn-logo.webp"
                        alt="aYn logo"
                        width={0}
                        height={0}
                      />
                    </span>
                    <MyImage
                      src="/assets/img/ayn-bg.webp"
                      alt="Team working"
                      width={0}
                      height={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technical-experience section start here... */}
        <section className="Technical-experience d-none">
          <div className="max-content-width">
            <div className="container-fluid">
              <div ref={ref2} className="row align-items-center">
                <div className="col-12 col-lg-5 px-0 d-none">
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
                <div className="col-12 ">
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
                          Offices in India, USA, UK, South Africa, Saudi Arabia,
                          Hong Kong, Malaysia and Australia.
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
                        // style={{
                        //   transform: isInView8 ? "none" : "translateY(100px)",
                        //   opacity: isInView8 ? 1 : 0,
                        //   transition:
                        //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.6s",
                        // }}
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
                        // style={{
                        //   transform: isInView9 ? "none" : "translateY(100px)",
                        //   opacity: isInView9 ? 1 : 0,
                        //   transition:
                        //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.9s",
                        // }}
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
                        // style={{
                        //   transform: isInView10 ? "none" : "translateY(100px)",
                        //   opacity: isInView10 ? 1 : 0,
                        //   transition:
                        //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 2.2s",
                        // }}
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
        <section className="Health-care-advise d-none">
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
                          <span>consultant</span>
                        </h6>
                      </div>
                    </div>
                    <div className="left-content">
                      <h4 className="title">
                        Assisting health care organisations realise their
                        potential to offer the highest standards in delivery of
                        primary care.
                      </h4>
                      <p className="description">
                        Primary Care has repeatedly been shown to improve
                        quality of care and reduce the cost of care. Our team
                        can assist you in creating your organization and
                        reaching these goals.
                      </p>
                      <div className="text-start">
                        <Link
                          href={
                            "https://globalprimarycare.com/professor-alain-montegut"
                          }
                          as={
                            "https://globalprimarycare.com/professor-alain-montegut"
                          }
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
                      <source
                        src={"/assets/img/About-health-advise.mp4"}
                        type="video/mp4"
                      />
                    </video>
                    <div class="card-img-overlay">
                      <button
                        type="button"
                        class="btn btn-link card-title stretched-link"
                        onClick={handelVideo}
                      >
                        Alain J. Montegut
                      </button>
                      <p class="card-text">
                        MD FAAFP-
                        <span> Globalprimarycare</span>
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
        {/* Partnership section start here... */}
        <section className="trusted-guest ">
          <div className="max-content-width">
            <div className="container-fluid">
              <div ref={ref3} className="row">
                <div className="col-12 col-lg-6 px-0">
                  <div
                    className="trusted-guest-text partnership-text"
                  >
                    {/* <h5>Partnership</h5> */}
                    <h4>Partnership</h4>
                    <p>
                      Our capacity to deliver high-quality services to our
                      clients leads to continuous collaboration. Our ability to
                      introduce outstanding solutions to the market is greatly
                      strengthened by our strategic partnerships with leading
                      worldwide clients.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="All-guests">
                    <ImageTable data={GuestImgMap} />
                    {/* <ImageTable data={props?.aboutData?.GuestImgMap} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Partnership section end here... */}

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
                          src="/assets/img/global-primary-logo2.png"
                          alt="About-Health-logo"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </div>
                      {/* <div>
                        <h6 className="logo-title">
                          Global primary care
                          <span>consultant</span>
                        </h6>
                      </div> */}
                    </div>
                    <div className="left-content">
                      <h4 className="title">
                        International Family Medicine Leaders And Business
                        Executives
                      </h4>
                      <p className="description">
                        Assisting health care organisations in realising their
                        potential to offer the highest standards in the delivery
                        of primary care. It has repeatedly been shown to improve
                        the quality of care and reduce the cost of care.
                      </p>
                      <div className="text-start">
                        <Link
                          href={"https://globalprimarycare.com"}
                          as={"https://globalprimarycare.com"}
                          className="btn btn-outline-dark"
                          role="button"
                          target="_blank"
                        >
                          Mission & Vision of GPCC
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8 col-lg-6">
                  <div class="card health-card">
                    <video className="card-banner" autoPlay muted loop>
                      <source
                        src={"/assets/img/About-health-advise.mp4"}
                        type="video/mp4"
                      />
                    </video>
                    <div class="card-img-overlay">
                      <button
                        type="button"
                        class="btn btn-link card-title stretched-link"
                        onClick={handelVideo}
                      >
                        Alain J. Montegut
                      </button>
                      <p class="card-text">
                        MD FAAFP-
                        <span> Globalprimarycare</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* HealthCare Advise section end here... */}
        {/* Brands Trust Us section start here... */}
        <section className="trusted-guest ">
          <div className="max-content-width">
            <div className="container-fluid">
              <div ref={ref3} className="row flex-wrap-reverse">
                <div className="col-12 col-lg-6">
                  <div className="All-guests trusted-brands">
                    <ImageTable data={GuestImgMap2} />
                 
                    {/* <div className="all-guest-content guest-border-right-bottom">
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
                                        <div className="all-guest-content guest-border-right-bottom">
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
                                                        alt="Health Power"
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
                                            //   transform: isInView16 ? "none" : "translateY(-100px)",
                                            //   opacity: isInView16 ? 1 : 0,
                                            //   transition:
                                            //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.5s",
                                            // }}
                                            >
                                                <div className="guest-img">
                                                    <MyImage
                                                        src="/assets/img/client(5).webp"
                                                        alt="Afrad"
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
                                                        src="/assets/img/client(17).webp  "
                                                        alt="zidny"
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
                                            //   transform: isInView18 ? "none" : "translateY(-100px)",
                                            //   opacity: isInView18 ? 1 : 0,
                                            //   transition:
                                            //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.7s",
                                            // }}
                                            >
                                                <div className="guest-img">
                                                    <MyImage
                                                        src="/assets/img/clientZidni.webp"
                                                        alt="Anemia Tracker"
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
                                                        src="/assets/img/client(16).webp"
                                                        alt="Top Stay"
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
                                            //   transform: isInView17 ? "none" : "translateY(-100px)",
                                            //   opacity: isInView17 ? 1 : 0,
                                            //   transition:
                                            //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.6s",
                                            // }}
                                            >
                                                <div className="guest-img">
                                                    <MyImage
                                                        src="/assets/img/client(10).webp"
                                                        alt="Kivu noir"
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
                                            //   transform: isInView18 ? "none" : "translateY(-100px)",
                                            //   opacity: isInView18 ? 1 : 0,
                                            //   transition:
                                            //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.7s",
                                            // }}
                                            >
                                                <div className="guest-img">
                                                    <MyImage
                                                        src="/assets/img/client(12).webp"
                                                        alt="Zmbizi"
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
                                                        src="/assets/img/client(9).webp"
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
                                                        src="/assets/img/client(8).webp"
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
                                                        src="/assets/img/client(2).webp"
                                                        alt="GreenCentral"
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
                                                        alt="F&F"
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
                                            //   transform: isInView21 ? "none" : "translateY(-100px)",
                                            //   opacity: isInView21 ? 1 : 0,
                                            //   transition:
                                            //     "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 2s",
                                            // }}
                                            >
                                                <div className="guest-img">
                                                    <MyImage
                                                        src="/assets/img/client(6).webp"
                                                        alt="SYSCODE"
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
                                                        src="/assets/img/EHOALogo-about.webp"
                                                        alt="SYSCODE"
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                    />
                                                </div>
                                            </div>
                                        </div> */}
                  </div>
                </div>
                <div className="col-12 col-lg-6 px-0">
                  <div
                    className="trusted-guest-text partnership-text"
                  >
                    {/* <h5>Partnership</h5> */}
                    <h4>Brands Trust Us</h4>
                    <p>
                      iWebwiser has been delivering exceptional solutions for
                      international clients, ensuring timely and precise
                      solutions. Since 2016, iWebwiser has been creating
                      outstanding solutions for clients throughout the world. We
                      are proud to partner with reputed brands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Brands Trust Us section end here... */}

        {/* Accreditations section start here... */}
        <section className="trusted-guest ">
          <div className="max-content-width">
            <div className="container-fluid">
              <div ref={ref3} className="row">
                <div className="col-12 col-lg-6 px-0">
                  <div
                    className="trusted-guest-text partnership-text"
                  >
                    {/* <h5>Partnership</h5> */}
                    <h4>Certified By </h4>
                    <p>
                      Our digital team works hard to maintain accreditation
                      where necessary so that we can continue to produce
                      high-quality outcomes. We feel motivated to be recognized
                      for our accomplishments, and iWebwiser's team is proud of
                      its successful track record.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="All-guests trusted-by">
                    {randomImages?.slice(0, 3).map((certificate, index) => (
                      <div
                        key={certificate.id}
                        className={`all-guest-content ${classes[index % classes.length]}`}
                      >
                        <div>
                          <div className="guest-img opacity-100">
                            <MyImage
                              src={certificate.image}
                              alt={certificate.title}
                              width={0}
                              height={0}
                              sizes="100vw"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Accreditations section end here... */}

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
}
