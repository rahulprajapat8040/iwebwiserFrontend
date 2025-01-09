import React from "react";
import Layout from "@/Components/Common/Layout";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { MyImage } from "@/Utility/HomeSliderData";

const healthcare = () => {
  return (
    <>
      <Head>
        <title>
          {" "}
          Global Primary Care Consultants | Family Medicine leaders
        </title>
        <meta name="keywords" content="" />
        <meta
          name="description"
          content=" Global Primary Care Consultants is at the forefront of developing high primary care standards and assisting healthcare organizations in realizing their potential."
        />
        <meta name="robots" content="index, follow" />
        

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iWebwiser" />
        <meta name="twitter:title" content="Global Primary Care Consultants | Family Medicine leaders" />
        <meta name="twitter:site:id" content="@iWebwiser" />
        <meta name="twitter:creator" content="@iWebwiser" />
        <meta name="twitter:image" content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fstackholder.webp&w=1920&q=75" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />

        
        <meta property="og:title" content="Global Primary Care Consultants | Family Medicine leaders" />
        <meta property="og:url" content="https://www.iwebwiser.com/about-healthcare" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iWebwiser" />
        <meta property="og:image" content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fstackholder.webp&w=1920&q=75" />
        <meta property="og:description" content="Global Primary Care Consultants is at the forefront of developing high primary care standards and assisting healthcare organizations in realizing their potential." />
      </Head>
      <Layout>
        {/* About-HealthCare-banner start here... */}
        <section className="experties-home">
          <div className="max-content-width">
            <div className="experties-home-bg">
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
                <h4>The value of Primary care</h4>
              </motion.div>
            </div>
          </div>
        </section>
        {/* About-HealthCare-banner end here... */}

        {/* Mission & Vision section start here... */}
        <section className="mission-vision">
          <div className="max-content-width">
            <div className="container">
              <h4 className="title">
                Assisting health care organisations realise their potential to
                offer the highest standards in delivery of primary care.
              </h4>

              {/* Mission & Vision content start here... */}
              <div className="mission-vision-describe">
                <h4 className="title">Mission & Vision</h4>
                {/* Mission & Vision describe section start here... */}
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="left-content">
                      <p>
                        The mission of Global Primary Care Consultants is to
                        assist organizations to realize their potential in
                        offering the highest standards for the delivery of
                        primary care. Global Primary Care Consultants will work
                        with its partners to educate leaders and staff and
                        facilitate change Global Primary Care Consultants lead
                        in creating exacting standards of primary care. The
                        consultants achieve this goal through consultations,
                        education and facilitation in existing health care
                        organizations. Global Primary Care Consultants is
                        committed to:
                      </p>
                      <div className="text-center text-lg-start">
                        <Link
                          href={"https://globalprimarycare.com/"}
                          as={"https://globalprimarycare.com/"}
                          className="btn btn-outline-light"
                          role="button"
                          target="_blank"
                        >
                          The value of primary care
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="right-content">
                      <ul className="text-white">
                        <li>
                          <p>
                            Optimising the health of patients through the
                            development of high quality primary care
                            organizations;
                          </p>
                        </li>
                        <li>
                          <p>
                            Optimising the health of communities through the
                            integration of community and population health
                            strategies in its program development;
                          </p>
                        </li>
                        <li>
                          <p>
                            Providing resources to medical organisations who
                            desire to improve their health care delivery through
                            practice redesign, quality improvement and the
                            transformation of primary care;
                          </p>
                        </li>
                        <li>
                          <p>
                            Providing resources to medical universities and
                            health staff colleges in the training of medical
                            students, residents and staff in primary care.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Mission & Vision describe section end here... */}
              </div>
              {/* Mission & Vision content end here... */}
            </div>
          </div>
        </section>
        {/* Mission & Vision section end here... */}

        {/* HealthCare Stackholders section start here... */}
        <section className="stackholder">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-9">
                  <h4 className="title">
                    Health care system organizations and stakeholders
                  </h4>
                </div>
                <div className="col-12 col-lg-10">
                  <p className="description">
                    Health care system organizations and stakeholders, including
                    individual medical providers and physician groups,
                    ministries of health and governments, health insurance
                    payers and the communities in which they serve, struggle to
                    manage the clinical, operational, and financial encounters
                    that challenge them and impede their patients and consumers
                    in obtaining a highly satisfactory health care experience.
                    Health care leaders envision a future in which new business
                    and care delivery models, aided by digital technologies, may
                    help to solve today’s problems and to build a sustainable
                    foundation for health care that is affordable, provides
                    excellent patient experience, and delivers high quality
                    results. The medical organizations that can offer these
                    three deliverables will be the ones that will succeed and
                    prosper in the new era of “value-based care”. It is
                    recognized that the successful organizations that operate in
                    this environment have a highly functional and integrated
                    primary health care system.
                  </p>
                  <p className="description">
                    Global Primary Care Consultants assists its clients with
                    strategies to effectively rebalance their presence in the
                    evolving health care system in which they operate. They do
                    so through careful assessment of an organization and the
                    environment in which it operates. The consultants work with
                    their client to develop a blueprint that will lead their
                    organization through the desired change that will provide
                    patients with a highly functional primary health care system
                    at the center of all care to provide enhanced access,
                    comprehensiveness, continuity, coordination, prevention,
                    family and community orientation, and patient centeredness
                  </p>
                </div>
                <div className="col-12 col-lg-10">
                  <div className="stackholder-img">
                    <MyImage
                      src="/assets/img/stackholder.webp"
                      alt="Stackholder"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-10">
                  <p className="description">
                    In the development of new programs with their client, Global
                    Primary Care Consultants integrate primary care with
                    enhanced Community Medicine and Population Health to realize
                    the client’s goals. The consulting team works with the
                    client to assure that a Family Medicine Specialist will be
                    at the center of a vertically and horizontally integrated
                    health system that allows primary care to actively manage
                    and support patients at home and in the community as
                    individual patients and as part of populations. The client
                    will be advised on the use of the most up to date
                    technologies that will support virtual care and direct
                    communication between primary care and secondary and
                    tertiary care as well as all ancillary services.
                  </p>
                  <p className="description">
                    The principals of Global Primary Care Consultants have had
                    over 30 years of active leadership and consulting experience
                    for numerous health care organizations both in the United
                    States and around the globe. Founded in 2016 Global Primary
                    Care Consultants, LLC, was created to meet a growing demand
                    for high quality assistance in the development and
                    improvement of private, public and academic organizations as
                    they seek to integrate primary care into and evolve with
                    dynamic and contemporary health systems.
                    <br className="d-none d-lg-block" />
                    The company has regional offices in the Eastern
                    Mediterranean Region and in the Southeast Asian Region,
                    directed by Family Medicine leaders. This allows for rapid
                    onsite response for client inquiries. The consulting team is
                    comprised of health care executives in the fields of
                    organization and development, operations, finance, insurance
                    products, marketing, quality accreditation and ACO
                    operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* HealthCare Stackholders section end here... */}
      </Layout>
    </>
  );
};

export default healthcare;
