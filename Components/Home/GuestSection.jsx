import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
const ImageTable = dynamic(import("@/Components/Common/ImageTable"));


const GuestSection = ({ GuestSection }) => {
  // console.log(GuestSection)
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });

  return (
    <section className="our-guest">
      <div className="max-content-width">
        <div ref={ref3} className="orgs1">
          <div
            className="guests"
            style={{
              transform: isInView3 ? "none" : "translateY(200px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
            }}
          >
            <ImageTable data={GuestSection?.GuestImgMap} />
            <div className="guest-content">
              <div className="guest-img"></div>
            </div>
          </div>
        </div>
        <div className="orgs2">
          <div className="about-guest text-end">
            <h5>{GuestSection?.heading_1}</h5>
            <h3>{GuestSection?.heading_2}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestSection;
