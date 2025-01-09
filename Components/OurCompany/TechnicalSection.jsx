import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TechnicalSection({ props }) {
    const ref2 = useRef(null);
    const isInView4 = useInView(ref2, { once: true });
    const isInView5 = useInView(ref2, { once: true });
    const isInView6 = useInView(ref2, { once: true });
    const isInView7 = useInView(ref2, { once: true });
    const isInView8 = useInView(ref2, { once: true });
    const isInView9 = useInView(ref2, { once: true });
    const isInView10 = useInView(ref2, { once: true });
    return (
        <section className="Technical-experience">
            <div className="max-content-width">
                <div className="">
                    <div ref={ref2} className="content">
                        <div
                            style={{
                                transform: isInView4 ? "none" : "translateY(-100px)",
                                opacity: isInView4 ? 1 : 0,
                                transition:
                                    "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.6s",
                            }}
                            className="Technical-experience-text"
                        >
                            <h4>
                                {props?.heading_1}
                            </h4>
                        </div>
                        <div className="Technical-experience-data">
                            <div
                                style={{
                                    transform: isInView8 ? "none" : "translateY(100px)",
                                    opacity: isInView8 ? 1 : 0,
                                    transition:
                                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.6s",
                                }}

                            >
                                <div className="Technical-experience-card-box h-100 w-100">
                                    <div className="d-flex align-items-center">
                                        <h4 id="number7">{props?.innerCard_1?.heading_1}</h4>
                                        <h4>{props?.mark}</h4>
                                    </div>
                                    <h5>{props?.innerCard_1?.heading_3}</h5>
                                    <p>
                                        {props?.innerCard_1?.Paragraph}
                                    </p>
                                </div>
                            </div>
                            <div
                                style={{
                                    transform: isInView6 ? "none" : "translateY(100px)",
                                    opacity: isInView6 ? 1 : 0,
                                    transition:
                                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1s",
                                }}
                            >
                                <div className="Technical-experience-card-box h-100 w-100">
                                    <div className="d-flex align-items-center">
                                        <h4 id="number5">{props?.innerCard_2?.heading_1}</h4>
                                        <h4>{props?.mark}</h4>
                                    </div>
                                    <h5>{props?.innerCard_2?.heading_3}</h5>
                                    <p>
                                        {props?.innerCard_2?.Paragraph}
                                    </p>
                                </div>
                            </div>

                            <div
                                style={{
                                    transform: isInView10 ? "none" : "translateY(100px)",
                                    opacity: isInView10 ? 1 : 0,
                                    transition:
                                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 2.2s",
                                }}
                            >
                                <div className="Technical-experience-card-box h-100 w-100">
                                    <div className="d-flex align-items-center">
                                        <h4 id="number9">{props?.innerCard_3?.heading_1}</h4>
                                        <h4>{props?.mark}</h4>
                                    </div>
                                    <h5>{props?.innerCard_3?.heading_3}</h5>
                                    <p>
                                        {props?.innerCard_3?.Paragraph}
                                    </p>
                                </div>
                            </div>

                            <div
                                style={{
                                    transform: isInView7 ? "none" : "translateY(100px)",
                                    opacity: isInView7 ? 1 : 0,
                                    transition:
                                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.3s",
                                }}
                            >
                                <div className="Technical-experience-card-box h-100 w-100">
                                    <div className="d-flex align-items-center">
                                        <h4 id="number6">{props?.innerCard_4?.heading_1}</h4>
                                        <h4>{props?.mark}</h4>
                                    </div>
                                    <h5>{props?.innerCard_4?.heading_3}</h5>
                                    <p>
                                        {props?.innerCard_4?.Paragraph}
                                    </p>
                                </div>
                            </div>
                            <div
                                style={{
                                    transform: isInView5 ? "none" : "translateY(100px)",
                                    opacity: isInView5 ? 1 : 0,
                                    transition:
                                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                                }}
                            >
                                <div className="Technical-experience-card-box h-100 w-100">
                                    <div className="d-flex align-items-center">
                                        <h4 id="number4">{props?.innerCard_5?.heading_1}</h4>
                                        <h4>{props?.mark}</h4>
                                    </div>
                                    <h5>{props?.innerCard_5?.heading_3}</h5>
                                    <p>
                                        {props?.innerCard_5?.Paragraph}
                                    </p>
                                </div>
                            </div>

                            <div
                                style={{
                                    transform: isInView9 ? "none" : "translateY(100px)",
                                    opacity: isInView9 ? 1 : 0,
                                    transition:
                                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.9s",
                                }}
                            >
                                <div className="Technical-experience-card-box h-100 w-100">
                                    <div className="d-flex align-items-center">
                                        <h4 id="number8">{props?.innerCard_6?.heading_1}</h4>
                                        <h4>{props?.mark}</h4>
                                    </div>
                                    <h5>{props?.innerCard_6?.heading_3}</h5>
                                    <p>
                                        {props?.innerCard_6?.Paragraph}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
