import { useInView } from "framer-motion";
import React, { useRef } from "react";

const OurClients = ({ FeedbackSection }) => {
  // console.log(FeedbackSection);
  const ref8 = useRef(null);
  const isInView27 = useInView(ref8, { once: true });

  return (
    <section className="client-feedback" ref={ref8}>
      <div className="max-content-width" style={{
                transform: isInView27 ? "none" : "translateY(500px)",
                opacity: isInView27 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
            }}>
        <div className="feedvds">
          {/* Client Feedback Video section cards start here... */}
          {FeedbackSection?.FeedbackData?.slice(0,2).map((feedback, index) => (
            <div className={feedback.className}>
              <div className="feedback-video">
                <video autoPlay loop muted playsInline data-wf-ignore="true">
                  <source src={feedback.Video} type="video/mp4" />
                </video>
                <img className="playbtn" src="/assets/img/playbtn.png" alt="" />
              </div>
              <div className="card-img-overlay">
                <div className="overlay-text">
                  <h4>{feedback.title}</h4>
                  <p>{feedback.sub_title} </p>
                </div>
              </div>
            </div>
          ))}

          {/* Client Feedback Video section cards end here... */}
        </div>
        <div className="feedback-text">
          <h3 className="sh">Our clients feedbacks</h3>
          <p className="sd">
            We value the feedback and experiences of our clients. We take pride
            in providing exceptional IT solutions and services that exceed
            expectations. Don't just take our word for it let our clients' words
            speak for themselves. We are delighted to share the positive
            testimonials and reviews we have received from our valued customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
