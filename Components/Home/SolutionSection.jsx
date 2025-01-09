import { MyImage } from "@/Utility/HomeSliderData";
import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const SolutionSection = ({ SolutionSection }) => {
  // console.log(SolutionSection)
  const ref7 = useRef(null);
  // const isInView25 = useInView(ref7, { once: true });
  const isInView26 = useInView(ref7, { once: true });
  const isInView27 = useInView(ref7, { once: true });
  const isInView28 = useInView(ref7, { once: true });
  const isInView29 = useInView(ref7, { once: true });

  return (
    <section className="solutions overflow-hidden">
      <div className="max-content-width">
        <div ref={ref7} className="">
          <div
            style={{
              transform: isInView26 ? "none" : "translateY(-100%)",
              opacity: isInView26 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
            }}
            className="solution-content text-center"
          >
            <h4 className="sh">{SolutionSection?.heading_1}</h4>
            <p className="sd">{SolutionSection?.Paragraph}</p>
          </div>
          <div className="items">
            {SolutionSection?.SolutionCarditem_1?.slice(0, 3).map((item, index) => (
              <React.Fragment key={index}>
                <div
                  style={{
                    transform: isInView27 ? "none" : "translateY(-100px)",
                    opacity: isInView27 ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                  }}
                  className="solution-card"
                >
                  <div className="solution-card-img">
                    <img src={item?.Img} alt="Digital Transformations" />
                  </div>
                  <div className="card-body">
                    <Link
                      href={item.blogLink}
                      as={"/medi-fellows"}
                      className="stretched-link text-decoration-none"
                    >
                      <h5>{item?.heading}</h5>
                      <h4>{item?.Paragraphinner}</h4>
                    </Link>
                  </div>
                </div>
              </React.Fragment>
            ))}
            {/* <div
              style={{
                transform: isInView27 ? "none" : "translateY(-100px)",
                opacity: isInView27 ? 1 : 0,
                transition:
                  "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
              }}
              className="solution-card"
            >
              <div className="solution-card-img">
                <img
                  src={SolutionSection?.SolutionCarditem_1?.Img}
                  alt="Digital Transformations"
                />
              </div>
              <div className="card-body">
                <Link
                  href="/medi-fellows"
                  as={"/medi-fellows"}
                  className="stretched-link text-decoration-none"
                >
                  <h5>{SolutionSection?.SolutionCarditem_1?.heading}</h5>
                  <h4>{SolutionSection?.SolutionCarditem_1?.Paragraphinner}</h4>
                </Link>
              </div>
            </div> */}
            {/* <div
              style={{
                transform: isInView28 ? "none" : "translateY(-100px)",
                opacity: isInView28 ? 1 : 0,
                transition:
                  "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1s",
              }}
              className="solution-card"
            >
              <div className="solution-card-img">
                <img
                  src={SolutionSection?.SolutionCarditem_2?.Img}
                  alt="Digital Products"
                />
              </div>
              <div className="card-body">
                <Link
                  href="/medi-fellows"
                  as={"/medi-fellows"}
                  className="stretched-link text-decoration-none"
                >
                  <h5>{SolutionSection?.SolutionCarditem_2?.heading}</h5>
                  <h4>{SolutionSection?.SolutionCarditem_2?.Paragraphinner}</h4>
                </Link>
              </div>
            </div>
            <div
              style={{
                transform: isInView29 ? "none" : "translateY(-100px)",
                opacity: isInView29 ? 1 : 0,
                transition:
                  "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.2s",
              }}
              className="solution-card"
            >
              <div className="solution-card-img">
                <img
                  src={SolutionSection?.SolutionCarditem_3?.Img}
                  alt="Digital eCommerce"
                />
              </div>
              <div className="card-body">
                <Link
                  href="/medi-fellows"
                  as={"/medi-fellows"}
                  className="stretched-link text-decoration-none"
                >
                  <h5>{SolutionSection?.SolutionCarditem_3?.heading}</h5>
                  <h4>
                    {" "}
                    {SolutionSection?.SolutionCarditem_3?.Paragraphinner}
                  </h4>
                </Link>
              </div>
            </div> */}
          </div>
          <div className=" text-center">
            <Link
              href={"/our-solutions"}
              as={"/our-solutions"}
              role="button"
              className="btn btn-outline-dark"
            >
              Explore All Solutions{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
