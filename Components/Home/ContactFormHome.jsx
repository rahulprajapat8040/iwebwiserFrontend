import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";

const ConsultantForm = dynamic(import("@/Components/Common/ConsultantForm"));
export default function ContactFormHome() {
    const ref10 = useRef(null);
    const isInView19 = useInView(ref10, { once: true });
    const isInView20 = useInView(ref10, { once: true });
    const isInView21 = useInView(ref10, { once: true });
    return (
        <section className="contact-home" ref={ref10}>
            <div className="max-content-width">
                <div style={{
                    transform: isInView19 ? "none" : "translateX(-500px)",
                    opacity: isInView19 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
                }}>
                    <h3 className="sh">Speak With Our Experts and Get Customized Solutions That Meet Your Business Needs and Goals.</h3>
                    <p className="sd">With our user-friendly approach, we make technology accessible and easy to use. We understand that every business is unique, and our team of experts will work closely with you to understand your specific needs and challenge</p>
                    <div className="hchecksec">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="tailored-advice" />
                            <label class="form-check-label" htmlFor="tailored-advice">
                                Tailored Advice Just for You
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="industry-experts" />
                            <label class="form-check-label" htmlFor="industry-experts">
                                Speak with Industry Experts
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="transparency" />
                            <label class="form-check-label" htmlFor="transparency">
                                100% Confidential and Transparency
                            </label>
                        </div>
                    </div>
                    <div className="emsec">
                        <h5 className="rchs">Reach out to us</h5>
                        <div className="d-flex align-items-center"><img src="/assets/img/email-icon.svg" alt="" /> <a href="mailto:Support@iwebwiser.com">Support@iwebwiser.com</a></div>
                    </div>
                </div>
                {/* <form>
                        <div className="mb-3 mb-lg-5">
                            <input
                                type="text"
                                className="form-control"
                                id="MessageName"
                                placeholder="Your Name *"
                            />
                            <p className="mb-0 text-danger">
                            </p>
                        </div>
                        <div className="mb-3 mb-lg-5">
                            <input
                                type="email"
                                className="form-control"
                                id="MessageEmail"
                                placeholder="Email Address *"
                            />
                            <p className="mb-0 text-danger">
                            </p>
                        </div>
                        <div className="mb-3 mb-lg-5">
                            <input
                                type="number"
                                className="form-control"
                                id="PhoneInput"
                                placeholder="Phone Number *"
                            />
                        </div>
                        <div className="mb-3 mb-lg-5">
                            <input
                                type="text"
                                className="form-control"
                                id="CompanyInput"
                                placeholder="Company"
                            />
                        </div>
                        <div className="mb-3 mb-lg-5">
                            <textarea
                                className="form-control"
                                placeholder="Message *"
                                id="MessageTextarea"
                            ></textarea>
                            <p className="mb-0 text-danger">
                            </p>
                        </div>
                        <div className="Submit-form-btn">
                            <button className="btn btn-outline-dark" type="submit">
                                Book  a free consultant
                            </button>
                        </div>
                    </form> */}
                <ConsultantForm type={'home'} isInView={isInView20} />
            </div>
            <div class="text-center" style={{
                transform: isInView21 ? "none" : "translateY(500px)",
                opacity: isInView21 ? 1 : 0,
                transition:
                    "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
            }}><a class="btn btn-outline-dark" role="button" href="#">Schedule a Free Call Now!</a></div>
        </section>
    )
};
