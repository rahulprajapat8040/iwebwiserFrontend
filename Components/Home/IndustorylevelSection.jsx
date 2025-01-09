import { MyImage } from "@/Utility/HomeSliderData";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Slider from "react-slick";
import React, { useRef, useState } from "react";

const IndustorylevelSection = (props) => {
  const [filterData, setFilterData] = useState(props?.sliderData);
  const [filterValue, setFilterValue] = useState("All");

  const ref8 = useRef(null);
  const isInView27 = useInView(ref8, { once: true });
  const isInView28 = useInView(ref8, { once: true });

  const handleShortData = (type) => {
    setFilterValue(type);
    if (type == "All") {
      setFilterData(props?.sliderData);
    } else {
      const data = props?.sliderData.filter((e) => e?.serviceType == type);
      setFilterData(data);
    }
  };
  return (
    <section className="industry-level overflow-x-hidden">
      <div className="max-content-width">
        <div ref={ref8} className="row align-items-center">
          {/* left Nav-tabs start here... */}
          <div className="col-12 col-lg-6  ">
            <motion.div
              style={{
                transform: isInView27 ? "none" : "translateX(100%)",
                opacity: isInView27 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
              }}
              className="industry-tabs"
            >
              <h4>Industry level</h4>
              <p>
                We, at iWebwiser know that good is just not enough. We deliver
                and partner with only the extraordinary. We understand the
                importance of staying ahead in the ever-changing IT industry at
                iWebwiser.
              </p>
              {/* All Tabs start here... */}
              <div className="all-tabs">
                <a
                  href="javascript:void(0)"
                  className={
                    filterValue == "Healthcare & Lifestyle"
                      ? "btn active"
                      : "btn active"
                  }
                  role="button"
                  onClick={() => handleShortData("Healthcare & Lifestyle")}
                >
                  Healthcare & Lifestyle
                </a>
                <a
                  href="javascript:void(0)"
                  className={
                    filterValue == "Retail & eCommerce" ? "btn active" : "btn"
                  }
                  role="button"
                  onClick={() => handleShortData("Retail & eCommerce")}
                >
                  Retail & eCommerce
                </a>
                <a
                  href="javascript:void(0)"
                  className={
                    filterValue == "E-Learning System" ? "btn active" : "btn"
                  }
                  role="button"
                  onClick={() => handleShortData("E-Learning System")}
                >
                  E-Learning System
                </a>
                <a
                  href="javascript:void(0)"
                  className={
                    filterValue == "Tour & Travels" ? "btn active" : "btn"
                  }
                  role="button"
                  onClick={() => handleShortData("Tour & Travels")}
                >
                  Tour & Travels
                </a>
                <a
                  href="javascript:void(0)"
                  className={
                    filterValue == "Real Estate" ? "btn active" : "btn"
                  }
                  role="button"
                  onClick={() => handleShortData("Real Estate")}
                >
                  Real Estate
                </a>
                {/* <a
              href="javascript:void(0)"
              className={filterValue == "All" ? "btn active" : "btn"}
              role="button"
              onClick={() => handleShortData("All")}
            >
              All
            </a> */}
              </div>
              {/* All Tabs end here... */}
            </motion.div>
          </div>
          {/* left Nav-tabs end here... */}
          {/* Right Industry-level slider start here... */}
          <div className="col-12 col-lg-6 ">
            <Slider
              style={{
                transform: isInView28 ? "none" : "translateY(-100%)",
                opacity: isInView28 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
              }}
              {...settings1}
              className="industry-level-slide"
            >
              {/* Content-1 start here... */}
              {filterData?.map((item, key) => (
                <div className="slider-content" key={key}>
                  <div className="slider-bg-img">
                    {item.imageType == "Image" ? (
                      <MyImage
                        className="w-100"
                        src={item?.serviceImage}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt={item.alt}
                      />
                    ) : (
                      <video className="w-100" autoPlay muted loop>
                        <source src={item?.serviceImage} type="video/mp4" />
                      </video>
                    )}
                  </div>
                  <div className="card-img-overlay">
                    <h6>{item?.serviceType}</h6>
                    <p>{item?.serviceDescription}</p>
                    <Link
                      href={`${item?.link}`}
                      as={`${item?.as}`}
                      className="btn"
                      role="button"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              ))}
              {/* Content-1 end here... */}
            </Slider>
          </div>
          {/* Right Industry-level slider end here... */}
        </div>
      </div>
    </section>
  );
};

export default IndustorylevelSection;

var settings1 = {
  slidesToShow: 1,
  arrows: false,
  dots: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
