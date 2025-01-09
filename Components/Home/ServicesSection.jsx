import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const ServicesSection = ({ ServicesSection }) => {
  const ref6 = useRef(null);
  const isInView9 = useInView(ref6, { once: true });
  const isInView10 = useInView(ref6, { once: true });
  const isInView11 = useInView(ref6, { once: true });
  const isInView12 = useInView(ref6, { once: true });
  const isInView13 = useInView(ref6, { once: true });
  const isInView14 = useInView(ref6, { once: true });
  const isInView15 = useInView(ref6, { once: true });
  return (
    <section ref={ref6} className="all-service overflow-hidden">
      <div className="max-content-width">
        <div
          style={{
            transform: isInView9 ? "none" : "translateX(500px)",
            opacity: isInView9 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
          }}
          className=""
        >
          <h6>{ServicesSection?.heading_1}</h6>
          <h3 className="sh">{ServicesSection?.heading_2}</h3>
        </div>
        <div className="content">
          <div className="item">
            <div
              style={{
                transform: isInView10 ? "none" : "translateX(-100px)",
                opacity: isInView10 ? 1 : 0,
                transition:
                  "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
              }}
              className="service-card"
            >
              <div className="service-card-img">
                <img
                  src={ServicesSection?.ServiceItem_1?.Img}
                  alt="Digital Transformations"
                />
              </div>
              <div className="card-body">
                <h4>{ServicesSection?.ServiceItem_1?.heading}</h4>
                <p>
                  {ServicesSection?.ServiceItem_1?.Paragraphinner}
                </p>
                <Link
                  href="/medi-fellows"
                  as={"/medi-fellows"}
                  className="stretched-link text-decoration-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="17"
                    viewBox="0 0 29 17"
                    fill="none"
                  >
                    <path
                      d="M0.617188 8.69545C0.617188 9.004 0.739759 9.29992 0.957939 9.5181C1.17612 9.73628 1.47203 9.85885 1.78058 9.85885H24.5669L19.5736 14.8521C19.3616 15.0716 19.2444 15.3654 19.247 15.6705C19.2497 15.9755 19.372 16.2673 19.5877 16.483C19.8034 16.6987 20.0952 16.8211 20.4003 16.8237C20.7053 16.8264 20.9992 16.7091 21.2186 16.4972L28.199 9.51681C28.3066 9.40978 28.3921 9.28253 28.4504 9.14237C28.5087 9.00221 28.5387 8.85191 28.5387 8.70011V8.69545C28.5387 8.54421 28.5084 8.39297 28.448 8.25104C28.39 8.10999 28.3045 7.98187 28.1967 7.87409L21.2163 0.893718C20.9969 0.681796 20.703 0.564532 20.3979 0.567183C20.0929 0.569833 19.8011 0.692186 19.5854 0.907889C19.3697 1.12359 19.2474 1.41539 19.2447 1.72043C19.2421 2.02546 19.3593 2.31934 19.5712 2.53876L24.5669 7.53206H1.78058C1.47203 7.53206 1.17612 7.65463 0.957939 7.87281C0.739759 8.09099 0.617188 8.3869 0.617188 8.69545Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              style={{
                transform: isInView11 ? "none" : "translateY(-100px)",
                opacity: isInView11 ? 1 : 0,
                transition:
                  "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
              }}
              className="service-card"
            >
              <div className="service-card-img">
                <img
                  src={ServicesSection?.ServiceItem_2?.Img}
                  alt="Digital Products"
                />
              </div>
              <div className="card-body">
                <h4>{ServicesSection?.ServiceItem_2?.heading}</h4>
                <p>
                  {ServicesSection?.ServiceItem_2?.Paragraphinner}
                </p>
                <Link
                  href="/floor-and-furnishing"
                  as={"/floor-and-furnishing"}
                  className="stretched-link text-decoration-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="17"
                    viewBox="0 0 29 17"
                    fill="none"
                  >
                    <path
                      d="M0.617188 8.69545C0.617188 9.004 0.739759 9.29992 0.957939 9.5181C1.17612 9.73628 1.47203 9.85885 1.78058 9.85885H24.5669L19.5736 14.8521C19.3616 15.0716 19.2444 15.3654 19.247 15.6705C19.2497 15.9755 19.372 16.2673 19.5877 16.483C19.8034 16.6987 20.0952 16.8211 20.4003 16.8237C20.7053 16.8264 20.9992 16.7091 21.2186 16.4972L28.199 9.51681C28.3066 9.40978 28.3921 9.28253 28.4504 9.14237C28.5087 9.00221 28.5387 8.85191 28.5387 8.70011V8.69545C28.5387 8.54421 28.5084 8.39297 28.448 8.25104C28.39 8.10999 28.3045 7.98187 28.1967 7.87409L21.2163 0.893718C20.9969 0.681796 20.703 0.564532 20.3979 0.567183C20.0929 0.569833 19.8011 0.692186 19.5854 0.907889C19.3697 1.12359 19.2474 1.41539 19.2447 1.72043C19.2421 2.02546 19.3593 2.31934 19.5712 2.53876L24.5669 7.53206H1.78058C1.47203 7.53206 1.17612 7.65463 0.957939 7.87281C0.739759 8.09099 0.617188 8.3869 0.617188 8.69545Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              style={{
                transform: isInView12 ? "none" : "translateX(100px)",
                opacity: isInView12 ? 1 : 0,
                transition:
                  "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
              }}
              className="service-card"
            >
              <div className="service-card-img">
                <img
                  src={ServicesSection?.ServiceItem_3?.Img}
                  alt="Digital eCommerce"
                />
              </div>
              <div className="card-body">
                <h4>{ServicesSection?.ServiceItem_3?.heading}</h4>
                <p>
                  {ServicesSection?.ServiceItem_3?.Paragraphinner}
                </p>
                <Link
                  href="/health-power"
                  as={"/health-power"}
                  className="stretched-link text-decoration-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="17"
                    viewBox="0 0 29 17"
                    fill="none"
                  >
                    <path
                      d="M0.617188 8.69545C0.617188 9.004 0.739759 9.29992 0.957939 9.5181C1.17612 9.73628 1.47203 9.85885 1.78058 9.85885H24.5669L19.5736 14.8521C19.3616 15.0716 19.2444 15.3654 19.247 15.6705C19.2497 15.9755 19.372 16.2673 19.5877 16.483C19.8034 16.6987 20.0952 16.8211 20.4003 16.8237C20.7053 16.8264 20.9992 16.7091 21.2186 16.4972L28.199 9.51681C28.3066 9.40978 28.3921 9.28253 28.4504 9.14237C28.5087 9.00221 28.5387 8.85191 28.5387 8.70011V8.69545C28.5387 8.54421 28.5084 8.39297 28.448 8.25104C28.39 8.10999 28.3045 7.98187 28.1967 7.87409L21.2163 0.893718C20.9969 0.681796 20.703 0.564532 20.3979 0.567183C20.0929 0.569833 19.8011 0.692186 19.5854 0.907889C19.3697 1.12359 19.2474 1.41539 19.2447 1.72043C19.2421 2.02546 19.3593 2.31934 19.5712 2.53876L24.5669 7.53206H1.78058C1.47203 7.53206 1.17612 7.65463 0.957939 7.87281C0.739759 8.09099 0.617188 8.3869 0.617188 8.69545Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
