import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BannerSection = ({ BannerSection }) => {
  // console.log(BannerSection)
  return (
    <section className="home-section position-relative">
      <div className="max-content-width">
        {/* Home-Banner Content Text start here... */}
        <section className="home-banner-text">
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
            <h2 className="title">
              {BannerSection?.heading_1}
              <span>{BannerSection?.heading_2}</span>
            </h2>
            <div className="keyar">{BannerSection?.heading_3}</div>
            <ul className="categoriessec list-unstyled">
              {BannerSection?.developmentBtnBox?.map((item, i) => (
                <li key={i}>
                  <button>{item}</button>
                </li>
              ))}
            </ul>
            <div className="talkbtn text-center">
              <Link
                href={'/app-web-software-design-development-services'}
                as={"/app-web-software-design-development-services"}
                className="text-white"
              >
                {BannerSection?.ExploreBtn}
              </Link>
            </div>
            <div className="address-section"></div>
          </motion.div>
        </section>
        {/* Home-Banner Content Text end here... */}
      </div>
      <div className="bgvideoBanner">
        <motion.div className="home-bg position-relative h-100">
          <video className="home-banner-bg" autoPlay muted loop>
            <source src={BannerSection?.Section_video} type="video/mp4" />
          </video>
          <div className="overlay"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerSection;
