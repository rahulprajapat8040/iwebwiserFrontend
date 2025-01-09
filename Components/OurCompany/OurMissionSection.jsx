import { useInView } from "framer-motion";
import { useRef } from "react";

export default function OurMissionSection({ props }) {
    const ref3 = useRef(null);
    const isInView2 = useInView(ref3, { once: true });
    return (
        <section className="our-mission bg-black position-relative">
            <div className="max-content-width">
                <div className="content" ref={ref3} >
                    <div className="info" style={{
                        transform: isInView2 ? "none" : "translateY(100px)",
                        opacity: isInView2 ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                    }}>
                        <h2 className="text-white sh">{props?.heading_1} <br /><span>{props?.heading_2}</span></h2>
                        {
                            props?.Paragraph && props?.Paragraph?.map((item, i) => (
                                <p key={i} className="text-white">
                                    {item}
                                </p>
                            ))
                        }
                    </div>
                    <div className="img-box bg-white h-100 w-100 rounded-2">
                        {/* <img src="" alt="" /> */}
                    </div>
                </div>
            </div>
        </section>
    )
};
