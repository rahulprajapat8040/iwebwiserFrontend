import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";

const ConsultantForm = dynamic(import("@/Components/Common/ConsultantForm"));
export default function ContactFormSection() {
    const ref10 = useRef(null);
    const isInView19 = useInView(ref10, { once: true });
    const isInView20 = useInView(ref10, { once: true });
    // const isInView21 = useInView(ref10, { once: true });
    return (
        <section className="contact-home" ref={ref10}>
            <div className="max-content-width">
                <div style={{
                    transform: isInView19 ? "none" : "translateX(-500px)",
                    opacity: isInView19 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
                }}>
                    <h3 className="sh mb-5">Get Customized Solutions, Recommendations, and Estimates for Your Requirements.</h3>
                    <p className="sd mb-5">With our user-friendly approach, we make technology accessible and easy to use. We understand that every business is unique, and our team of experts will work closely with you to understand your specific needs and challenge</p>
                    <div className="emsec">
                        <h5 className="rchs">Reach out us at</h5>
                        <div className="d-flex align-items-center"><img src="/assets/img/email-icon.svg" alt="" /> <a href="mailto:Support@iwebwiser.com">Support@iwebwiser.com</a></div>
                    </div>
                </div>
                <div>
                    <ConsultantForm isInView={isInView20} />
                </div>
            </div>
        </section>
    )
};
