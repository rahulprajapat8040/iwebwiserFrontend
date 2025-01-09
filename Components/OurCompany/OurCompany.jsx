import Head from "next/head";
import React, { useRef, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import dynamic from "next/dynamic";
const AboutHomesection = dynamic(import("@/Components/OurCompany/AboutHomesection"));
const MakeUniqueSection = dynamic(import("@/Components/OurCompany/MakeUniqueSection"));
const OurMissionSection = dynamic(import("@/Components/OurCompany/OurMissionSection"));
const TechnicalSection = dynamic(import("@/Components/OurCompany/TechnicalSection"));
const OurValue = dynamic(import("@/Components/OurCompany/OurValue"));
const ContactFormSection = dynamic(import("@/Components/OurCompany/ContactFormSection"));
const Layout = dynamic(import("@/Components/Common/Layout"));

export default function OurCompany({ props }) {
    const refVid = useRef(null);
    const refVidEle = useRef(null);
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
                {/* <section className="about-home">
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
                                We love developing apps, websites and digital platforms-you name it ,we’ve
                                probably done it numerous times,and that’s how we bring our experience
                                and expertise to the table!

                            </p>
                        </motion.div>
                    </div>
                </section> */}
                <AboutHomesection props={props?.OurCompanyData?.AboutHomeSectionData} />

                {/* About-Home-section end here... */}

                {/* Make-us-unique section start here... */}
                <MakeUniqueSection props={props?.OurCompanyData?.MakeUniqueSectionData} />
                {/* Make-us-unique section end here... */}


                {/* our mission section end here... */}
                <OurMissionSection props={props?.OurCompanyData?.OurMissionSectionData} />
                {/* our mission section end here... */}
                {/* Technical-experience section start here... */}
                <TechnicalSection props={props?.OurCompanyData?.TechnicalSectionData} />
                {/* Technical-experience section end here... */}

                {/* our value section end here... */}
                <OurValue />
                {/* our value section end here... */}
                {/* contact section start here... */}
                <ContactFormSection />
                {/* contact section start here... */}
                {/* Our Videos section start here... */}
                <section className="our-video">
                    <div className="max-content-width">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 mb-5">
                                    <h3 className="sh">Our Videos</h3>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <button
                                        type="button"
                                        className="btn px-0 our-video-btn w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#VideoModal"
                                    >
                                        <video
                                            id="modalVideo"
                                            className="card-banner"
                                            controls
                                            ref={refVid}
                                            autoPlay
                                            muted
                                        >
                                            <source
                                                src={"/assets/img/About-health-advise.mp4"}
                                                type="video/mp4"
                                            />
                                        </video>
                                    </button>
                                    <div className="text-center">New branch opening ceremony </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <button
                                        type="button"
                                        className="btn px-0 our-video-btn w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#VideoModal"
                                    >
                                        <video className="our-video-bg" autoPlay muted loop>
                                            <source
                                                src={"/assets/img/About-health-advise.mp4"}
                                                type="video/mp4"
                                            />
                                        </video>
                                    </button>
                                    <div className="text-center">South Africa office visit for</div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <button
                                        type="button"
                                        className="btn px-0 our-video-btn w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#VideoModal"
                                    >
                                        <video className="our-video-bg" autoPlay muted loop>
                                            <source
                                                src={"/assets/img/About-health-advise.mp4"}
                                                type="video/mp4"
                                            />
                                        </video>
                                    </button>
                                    <div className="text-center">Amman visit for zid</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Our Videos section end here... */}

                {/* Become-A-part-of-Team section start here... */}
                {/* <PartOfTeam /> */}
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
                            <div className="modal-body">
                                <div>
                                    <video
                                        id="modalVideo"
                                        className="card-banner"
                                        controls
                                        ref={refVid}
                                        autoPlay
                                        muted
                                    >
                                        <source
                                            src={"/assets/img/About-health-advise.mp4"}
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                                <div className="modal-title">
                                    <h4 className="title">Alain J. Montegut</h4>
                                    <p className="description">
                                        MD FAAFP-
                                        <span>Globalprimarycare</span>
                                    </p>
                                </div>
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
    )
};
