import { MyImage } from "@/Utility/HomeSliderData";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectsSection = ({ ProjectsSection }) => {
  // console.log(ProjectsSection)
  const ref5 = useRef(null);
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref5, { once: true });
  const isInView7 = useInView(ref5, { once: true });
  const isInView8 = useInView(ref5, { once: true });
  const isInView16 = useInView(ref5, { once: true });
  const isInView17 = useInView(ref5, { once: true });
  const isInView18 = useInView(ref5, { once: true });
  return (
    <>
      <section className="out-prosec" ref={ref5}>
        <div className="max-content-width">
          <div
            style={{
              transform: isInView5 ? "none" : "translateX(500px)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
            }}
          >
            <h3 className="sh">{ProjectsSection?.heading_1}</h3>
            <p className="sd">{ProjectsSection?.Paragraph}</p>
          </div>
          <div className="content pb-3 pb-lg-5">
            {ProjectsSection?.InnerCard?.map((card, index) => (
              <React.Fragment key={index}>
                <div
                  className="inner-card"
                  style={{
                    transform: isInView6 ? "none" : "translateX(-100px)",
                    opacity: isInView6 ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                  }}
                >
                  <img src={card.Img} alt={card.heading} />
                  <div className="inner-info">
                    <span className="flag-icon">
                      {/* <img src={ProjectsSection?.InnerCard_1?.FlagImg} alt="" /> */}
                    </span>
                    <div className="abscon">
                      <img src={card.LogoImg} alt="" />
                      <h4>{card.heading}</h4>
                      <p>{ProjectsSection?.InnerCard_1?.Paragraphinner}</p>
                    </div>
                  </div>
                </div>
                <div className="rght">
                  <div class="imgbx">
                    <img src={card.LogoImg} alt="" />
                  </div>
                  <h4>{card.industryTitle}</h4>
                  <p class="description" dangerouslySetInnerHTML={{ __html: card.Paragraphinner }}></p>
                  <div class="stats">
                    <div class="stat">
                      <h3>Users</h3>
                      <p>{card.platformUsers} Users</p>
                    </div>
                    <div class="stat">
                      <h3>Downloads</h3>
                      <p>{card.downloads}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* <div className="content pb-3 pb-lg-5">
            <div className="inner-card" style={{
              transform: isInView6 ? "none" : "translateX(-100px)",
              opacity: isInView6 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={ProjectsSection?.InnerCard_1?.Img} alt="" />
              <div className="inner-info">
                <span className="flag-icon"><img src={ProjectsSection?.InnerCard_1?.FlagImg} alt="" /></span>
                <div className="abscon">
                  <img src='./assets/img/medifellowswhite.png' alt="" />
                  <h4>{ProjectsSection?.InnerCard_1?.heading}</h4>
                  <p>{ProjectsSection?.InnerCard_1?.Paragraphinner}</p>
                </div>
              </div>
            </div>
            <div className="rght">
              <div class="imgbx">
                <img src={ProjectsSection?.InnerCard_1?.LogoImg} alt="" />
              </div>
              <h4>Healthcare IT Solutions</h4>
              <p class="description">
                MediFellows is a new social media platform that helps  doctors stay connected with other medical professionals. It  provides a digital platform for the medical community that  offers easy access, credible content, and productive  interaction within the industry.
              </p>
              <div class="stats">
                <div class="stat">
                  <h3>Users</h3>
                  <p>10K Users</p>
                </div>
                <div class="stat">
                  <h3>Downloads</h3>
                  <p>300k</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="content d-none">
            <div className="inner-card" style={{
              transform: isInView7 ? "none" : "translateY(-100px)",
              opacity: isInView7 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={ProjectsSection?.InnerCard_2?.Img} alt="" />
              <div className="inner-info">
                <span className="flag-icon"><img src={ProjectsSection?.InnerCard_2?.FlagImg} alt="" /></span>
                <div className="abscon">
                  <img src={ProjectsSection?.InnerCard_2?.LogoImg} alt="" />
                  <h4>{ProjectsSection?.InnerCard_2?.heading}</h4>
                  <p>{ProjectsSection?.InnerCard_2?.Paragraphinner}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content d-none">
            <div className="inner-card" style={{
              transform: isInView8 ? "none" : "translateX(100px)",
              opacity: isInView8 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={ProjectsSection?.InnerCard_3?.Img} alt="" />
              <div className="inner-info">
                <span className="flag-icon"><img src={ProjectsSection?.InnerCard_3?.FlagImg} alt="" /></span>
                <div className="abscon">
                  <img src={ProjectsSection?.InnerCard_3?.LogoImg} alt="" />
                  <h4>{ProjectsSection?.InnerCard_3?.heading}</h4>
                  <p>{ProjectsSection?.InnerCard_3?.Paragraphinner}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content d-none">
            <div className="inner-card" style={{
              transform: isInView16 ? "none" : "translateY(-100px)",
              opacity: isInView16 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={ProjectsSection?.InnerCard_4?.Img} alt="" />
              <div className="inner-info">
                <span className="flag-icon"><img src={ProjectsSection?.InnerCard_4?.FlagImg} alt="" /></span>
                <div className="abscon">
                  <img src={ProjectsSection?.InnerCard_4?.LogoImg} alt="" />
                  <h4>{ProjectsSection?.InnerCard_4?.heading}</h4>
                  <p>{ProjectsSection?.InnerCard_4?.Paragraphinner}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content d-none">
            <div className="inner-card" style={{
              transform: isInView17 ? "none" : "translateX(100px)",
              opacity: isInView17 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={ProjectsSection?.InnerCard_5?.Img} alt="" />
              <div className="inner-info">
                <span className="flag-icon"><img src={ProjectsSection?.InnerCard_5?.FlagImg} alt="" /></span>
                <div className="abscon">
                  <img src={ProjectsSection?.InnerCard_5?.LogoImg} alt="" />
                  <h4>{ProjectsSection?.InnerCard_5?.heading}</h4>
                  <p>{ProjectsSection?.InnerCard_5?.Paragraphinner}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content d-none">
            <div className="inner-card" style={{
              transform: isInView18 ? "none" : "translateY(-100px)",
              opacity: isInView18 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={ProjectsSection?.InnerCard_6?.Img} alt="" />
              <div className="inner-info">
                <span className="flag-icon"><img src={ProjectsSection?.InnerCard_6?.FlagImg} alt="" /></span>
                <div className="abscon">
                  <img src={ProjectsSection?.InnerCard_6?.LogoImg} alt="" />
                  <h4>{ProjectsSection?.InnerCard_6?.heading}.</h4>
                  <p>{ProjectsSection?.InnerCard_6?.Paragraphinner}</p>
                </div>
              </div>
            </div>
          </div> */}

          <div class="text-center mt-lg-5 mt-3">
            <Link
              class="btn btn-outline-dark"
              role="button"
              href="/case-study-unlock-your-solutions"
            >
              OUR STORIES/PORTFOLIO
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
