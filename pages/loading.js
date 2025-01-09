import React, { useEffect, useState } from "react";
const headings = [
  "Elevating Possibilities, Loading Dreams",
  "Connecting Innovation and Technology",
  "Building Tomorrow's Tech, Today",
  "Weaving Web Wonders, Loading Now",
  "Unleashing Digital Brilliance",
  "Crafting Code, Forging Progress",
  "Loading Pixels of Innovation",
  "Loading the Future of IT",
];
export default function Loading() {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const fadeDuration = 500; // in milliseconds
    const delayBetweenHeadings = 1000; // in milliseconds

    const timer = setTimeout(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, fadeDuration + delayBetweenHeadings);

    return () => clearTimeout(timer);
  }, [currentHeadingIndex]);

  return (
    // <div className="loadercontainer" style={{ width: "100%",
    //   height: "100vh",
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   position: "fixed",
    //   background: "#000000",
    //   zIndex: "99999999",
    //   overflow: "hidden"
    // }}
    // >
    //   <div  style={{
    //       border: "3px solid #0c0c0c",
    //       borderRadius: "50%",
    //       borderTop: "3px solid #ffffff",
    //       width: "30px",
    //       height: "30px",
    //       animation: "spin-anim 1.2s linear infinite",
    //       overflowX: "hidden",
    //       overflowY: "hidden"
    //   }}></div>
    //   <MobileView>
    //   <p className="loader-heading">
    //     <span
    //       className={`fade-heading head-visible`}
    //       style={{  color: "#ffffff",
    //         fontFamily: "Poppins",
    //         fontSize:   '20px',
    //         textAlign: 'center',
    //         fontStyle: "normal",
    //         fontWeight: "300",
    //         lineHeight: "135.5%",
    //         marginTop: "24px",
    //         display: "inline-block",
    //         opacity: 1,
    //         transition: "all 0.5s ease",
    //         overflowX: "hidden",
    //         overflowY: "hidden" }}
    //     >
    //       {headings[currentHeadingIndex]}
    //     </span>
    //   </p>
    //   </MobileView>
    //   <BrowserView>
    //   <p className="loader-heading">
    //     <span
    //       className={`fade-heading head-visible`}
    //       style={{  color: "#ffffff",
    //         fontFamily: "Poppins",
    //         fontSize:   '40px',
    //         textAlign: 'center',
    //         fontStyle: "normal",
    //         fontWeight: "300",
    //         lineHeight: "135.5%",
    //         marginTop: "24px",
    //         display: "inline-block",
    //         opacity: 1,
    //         transition: "all 0.5s ease",
    //         overflowX: "hidden",
    //         overflowY: "hidden" }}
    //     >
    //       {headings[currentHeadingIndex]}
    //     </span>
    //   </p>
    //   </BrowserView>
    // </div>


    <div className="loader-container">
    <div className="spinner"></div>
    <p className="loader-heading">
      <span
        className={`fade-heading head-visible`}
        style={{ color: "#ffffff" }}
      >
        {headings[currentHeadingIndex]}
      </span>
    </p>
  </div>
  );
}
