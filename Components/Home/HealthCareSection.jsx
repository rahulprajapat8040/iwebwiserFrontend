import React, { useRef } from "react";
// import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "framer-motion";

const HealthCareSection = ({ HealthCareSection }) => {
  const ref9 = useRef(null);
  const isInView19 = useInView(ref9, { once: true });
  const isInView20 = useInView(ref9, { once: true });
  const isInView21 = useInView(ref9, { once: true });
  return (
    <section className="health-care" ref={ref9}>
      <div className="max-content-width">
        <div className="container-fluid">
          <div style={{
            transform: isInView19 ? "none" : "translateX(-500px)",
            opacity: isInView19 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
          }}>
            <h4 className="title sub-h text-center">
              {HealthCareSection?.heading_1}
            </h4>
            <p className="text-center sd">
              {HealthCareSection?.Paragraph}
            </p>
          </div>
          <div className="contents">
            <div className="healthCare-img" style={{
              transform: isInView20 ? "none" : "translateX(-500px)",
              opacity: isInView20 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <img src={HealthCareSection?.Img} alt="" />
              {/* <video className="home-banner-bg" autoPlay muted loop>
                  <source
                    src={"/assets/img/healthCare_media.mp4"}
                    type="video/mp4"
                  />
                </video> */}
            </div>
            <div className="healthCare-content" style={{
              transform: isInView21 ? "none" : "translateX(500px)",
              opacity: isInView21 ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}>
              <ul className="">
                {
                  HealthCareSection?.HealthList?.map((item) => (
                    <li>
                      <p>
                        {item}
                      </p>
                    </li>
                  ))
                }

              </ul>
              <div class="text-center text-lg-start">
                <Link
                  href={"/about-healthcare"}
                  as={"/about-healthcare"}
                  className="btn btn-outline-dark"
                  role="button"
                >
                  MORE ABOUT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCareSection;
