import React, { useEffect, useRef } from "react";
import { MyImage } from "@/Utility/HomeSliderData";
import confetti from "canvas-confetti";

const AynSection = (props) => {
  const duration = 5000; // Duration in milliseconds (5 seconds)
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 30,
    spread: 1000,
    ticks: 200,
    zIndex: 0,
    gravity: 1,
    shapes: ["circle", "square"],
    colors: ["#ff3333", "#0D41E1", "#FFDD00", "#FF0000", "#FFFF00"]
  };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Section is in view, triggering confetti");
            handleConfetti();
            observer.unobserve(entry.target); // To run confetti only once
          }
        });
      },
      { threshold: 0.8 } // Adjust as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleConfetti = () => {
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50; // Fixed particle count for better visual effect
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: 0, y: 0 }
      }));
      confetti(Object.assign({}, defaults, {
        particleCount,

        origin: { x: 0.5, y: 0 }
      }));
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: 1, y: 0 }
      }));
    }, 250); // Interval between confetti bursts
  };

  return (
    <section className="make-us-unique ayn-section" id="ayn-section" ref={sectionRef}>
      <div className="max-content-width">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 px-lg-0 order-2 order-lg-1">
              <div className="make-us-text">
                <h4>iWebwiser Expands to UK with aYn Partnership</h4>
                <p>
                  iWebwiser is excited to partner with aYn to finally open our UK office! This partnership lets us share our expertise with businesses across the UK, perfectly fitting with our goal of reaching a wider audience. Together with aYn, we look forward to empowering businesses in the UK with innovative solutions and tailored services.
                </p>
                <div className="text-center text-lg-start">
                  <a className="btn btn-outline-dark" role="button" href="https://ayntech.org/">MORE ABOUT AYN</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 px-lg-0 order-1 order-lg-2">
              <div className="position-relative">
                <span className="logo-bg"> <MyImage src="/assets/img/ayn-logo.webp" alt="aYn logo" width={0} height={0} /></span>
                <MyImage src="/assets/img/ayn-bg.webp" alt="Team working" width={0} height={0} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AynSection;

