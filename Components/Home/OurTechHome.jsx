import { useInView } from "framer-motion";
import { useRef } from "react";

export default function OurTechHome({ OurTechHome }) {
    const ref8 = useRef(null);
    const isInView27 = useInView(ref8, { once: true });
    return (
        <section className="ourTech-home bg-black" ref={ref8}>
            <div className="max-content-width" style={{
                transform: isInView27 ? "none" : "translateY(500px)",
                opacity: isInView27 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
            }}>
                <h3 className="sh text-white text-center">{OurTechHome?.heading_1}</h3>
                <p className="sd text-white text-center">{OurTechHome?.Paragraph}</p>
                <ul>
                    {OurTechHome?.TechSection?.map((item, i) => (
                        <li
                            key={i}
                            className="text-white"><span><img src={item?.Img} alt="" /></span>{item?.language}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
};
