import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import Layout from "@/Components/Common/Layout";
import Head from "next/head";
// const Layout = dynamic(import("@/Components/Common/Layout"));

const EHOAcaseDetail = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref1, { once: true });

  return (
    <>
      <Layout>
        <Head>
          <title>
            Case study | Extraordinary hospital of Africa - Healthcare System
          </title>
          <meta name="keywords" content="" />
          <meta
            name="description"
            content="Extraordinary Hospitals of Africa are a boutique consultancy based in South Africa. iWebwiser examines every aspect to evaluate the essence of your business."
          />
          <link
            rel="canonical"
            href="https://www.iwebwiser.com/extraordinary-hospital-of-africa"
          />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iWebwiser" />
          <meta
            name="twitter:title"
            content="Case study | Extraordinary hospital of Africa - Healthcare System"
          />
          <meta name="twitter:site:id" content="@iWebwiser" />
          <meta name="twitter:creator" content="@iWebwiser" />
          <meta
            name="twitter:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FEHOAabout.webp&w=1920&q=75"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />

          <meta
            property="og:title"
            content="Case study | Extraordinary hospital of Africa - Healthcare System"
          />
          <meta
            property="og:url"
            content="https://www.iwebwiser.com/extraordinary-hospital-of-africa"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="iWebwiser" />
          <meta
            property="og:image"
            content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FEHOAabout.webp&w=1920&q=75"
          />
          <meta
            property="og:description"
            content="Extraordinary Hospitals of Africa are a boutique consultancy based in South Africa. iWebwiser examines every aspect to evaluate the essence of your business."
          />
        </Head>
        {/* Case-Studies-Home-section start here... */}
        <section className="case-view-home">
          <div className="max-content-width">
            <div className="case-view-home-bg">
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
                <p>
                  Extraordinary Hospitals of Africa offers a range of services
                  tailored to your unique needs.
                </p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 1.5 },
                  visible: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 1.5 },
                }}
                initial="hidden"
                animate={"visible"}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="case-logo"
              >
                <MyImage
                  src="/assets/img/EHOALogo.webp"
                  alt="ViewCase-logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Case-Studies-Home-section end here... */}
        {/* Project Detail section start here... */}
        <section className="project-detail">
          <div className="max-content-width">
            <div className="container-fluid">
              {/* Case Detaill Breadcrumb Navigation section start here... */}
              <div className="project-navigation">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link
                        href={"/case-study-unlock-your-solutions"}
                        as={"/case-study-unlock-your-solutions"}
                      >
                        Case study
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <span>EHOA</span>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Case Detaill Breadcrumb Navigation section end here... */}
              <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                  <div className="project-detail-text">
                    <h5>Healthcare & Lifestyle</h5>
                    <h4>Extraordinary Hospital of Africa</h4>
                    <p>
                      Extraordinary Hospitals of Africa is a boutique
                      consultancy based in South Africa. My partners and I bring
                      more than 250 years of collective healthcare experience to
                      healthcare teams wishing to grow and excel.
                    </p>
                    <p>
                      We examine every aspect of your organization to evaluate
                      your business's essence, determine what holds you back,
                      and inspire your Team for your extraordinary future. We
                      align people with systems to provide the best patient
                      experience and health outcomes. We are a team of highly
                      experienced professionals passionate about creating
                      extraordinary hospitals and the healthcare systems that
                      support extraordinary hospitals. We offer an extensive
                      range of services tailored to your unique needs and
                      circumstances. Our support will enable you to sustain as
                      well as optimize your healthcare business especially if
                      you are considering international accreditation for your
                      facility.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="project-avaliblity">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <th>
                            <p>Client:</p>
                          </th>
                          <td>
                            <p>South Africa</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Industry:</p>
                          </th>
                          <td>
                            <p>healthcare & Lifestyle</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Language</p>
                          </th>
                          <td>
                            <p>English</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>Website</p>
                          </th>
                          <td>
                            <Link
                              href={
                                "https://extraordinaryhospitalsofafrica.com/"
                              }
                              target="_blank"
                              className="btn"
                            >
                              extraordinaryhospitalsofafrica.com
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Project Detail section end here... */}
        {/* Project Slide section start here... */}
        <motion.section
          ref={ref1}
          style={{
            transform: isInView1 ? "scaleY(1)" : "scaleY(0.4)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
          }}
          className="project-slide ehoa-about"
        >
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-11 px-0">
                <motion.div
                  className="project-slide-img"
                  style={{
                    transform: isInView2
                      ? "translateY(0px)"
                      : "translateY(100px)",
                    opacity: isInView2 ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.2s",
                  }}
                >
                  <MyImage
                    className="w-100"
                    src="/assets/img/EHOAabout.webp"
                    alt="about-case-view"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
        {/* Project Slide section end here... */}
        {/* System Features section start here... */}
        <section className="system-features">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                  <div className="feature-text">
                    <h4>System Features</h4>
                    <ul className="list-unstyled">
                      <li>
                        <p>Family Clinics Available for 24/7.</p>
                      </li>
                      <li>
                        <p>Dental Clinics, Physiotherapy Specialist for You.</p>
                      </li>
                      <li>
                        <p>Primary Surgical Procedures.</p>
                      </li>
                      <li>
                        <p>Laboratories With Advance Barcode Systems.</p>
                      </li>
                      <li>
                        <p>
                          Health Program Specialized In Physical Fitness And
                          Nutrition.
                        </p>
                      </li>
                      <li>
                        <p>Home Medical Care is Available Too.</p>
                      </li>
                      <li>
                        <p>
                          Training Courses In Health And Nutrition by
                          professionals.
                        </p>
                      </li>
                      <li>
                        <p>Transportation Means Suitable For Patients.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 order-1 order-lg-2">
                  <div className="feature-img">
                    <MyImage
                      className="w-100"
                      src="/assets/img/EHOAtach.webp"
                      alt="case-Featured"
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
        {/* System Features section end here... */}
        {/* Technology stack section start here... */}
        <section className="technology-stack d-none">
          <div className="max-content-width">
            <div className="container-fluid">
              <h4>Technology stack</h4>
              <div className="row">
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack-card">
                    <div className="technology-stack-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://aws.amazon.com/free/?trk=14a4002d-4936-4343-8211-b5a150ca592b&sc_channel=ps&ef_id=CjwKCAjw-vmkBhBMEiwAlrMeFwbibSOiLODJlRZqTDQ6EhShGoo-WdXw_1qiXoa3CzmjNgUUB2_RkBoCmecQAvD_BwE:G:s&s_kwcid=AL!4422!3!453325184782!e!!g!!aws!10712784856!111477279771"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (1).webp"
                          alt="technology-stack"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack-card">
                    <div className="technology-stack-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://nodejs.org/en"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (5).webp"
                          alt="technology-stack"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack-card">
                    <div className="technology-stack-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://react.dev/"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (4).webp"
                          alt="technology-stack"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack-card">
                    <div className="technology-stack-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://www.mysql.com/"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (3).webp"
                          alt="technology-stack"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="technology-stack-card">
                    <div className="technology-stack-img">
                      <a
                        className="btn stretched-link"
                        role="button"
                        href="https://laravel.com/"
                      >
                        <MyImage
                          src="/assets/img/Technology stack (2).webp"
                          alt="technology-stack"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technology stack section end here... */}
      </Layout>
    </>
  );
};

export default EHOAcaseDetail;
