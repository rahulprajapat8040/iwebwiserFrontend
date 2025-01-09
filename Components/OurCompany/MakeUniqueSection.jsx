import { useInView } from "framer-motion";
import { useRef } from "react";
import { MyImage } from "@/Utility/HomeSliderData";


export default function MakeUniqueSection({ props }) {
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true });

    return (
        <section className="make-us-unique expand-your-horizons">
            <div className="max-content-width">
                <div className="container-fluid">
                    <div ref={ref1} className="row align-items-center">
                        <div className="col-12 ">
                            <div
                                style={{
                                    transform: isInView1 ? "none" : "translateY(100px)",
                                    opacity: isInView1 ? 1 : 0,
                                    transition:
                                        "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.2s",
                                }}
                                className="make-us-text"
                            >
                                <h4 className="mt-5 mt-lg-0">
                                    {props?.heading_1}
                                </h4>
                                <div className="row justify-content-between">
                                    {
                                        props?.Paragraph && props?.Paragraph?.map((item, i) => (
                                            <div key={i} className="col-12 col-lg-6">
                                                <p>
                                                    {item}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
