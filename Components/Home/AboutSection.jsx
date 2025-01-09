import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const AboutSection = ({ AboutSection }) => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  return (
    <>
      {/* About/Counters Section start here... */}
      <section className="About-counter">
        <div className="max-content-width">
          <div className="abcontent">
            <div ref={ref1} className="">
              {/* Aboutus content start here... */}
              <div
                className="about-left"
                style={{
                  transform: isInView1 ? "none" : "translateY(-200px)",
                  opacity: isInView1 ? 1 : 0,
                  transition:
                    "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
                }}
              >
                <h3 className="sh">{AboutSection?.heading_1}</h3>
                <p>
                  {AboutSection?.Paragraph}
                </p>
                <div className="">
                  <Link
                    href={"/contact-us"}
                    as={"/contact-us"}
                    className="btn btn-outline-dark"
                    role="button"
                  >
                    {AboutSection?.contactBtn}
                  </Link>
                </div>
              </div>
            </div>

            <div ref={ref2} className="img-box"
            >
              <div
                className="h-100"
                style={{
                  transform: isInView2 ? "none" : "translateY(200px)",
                  opacity: isInView2 ? 1 : 0,
                  transition:
                    "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
                }}
              >
                <img src={AboutSection?.AboutSectionImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About/Counters Section end here... */}
    </>
  );
};

export default AboutSection;
