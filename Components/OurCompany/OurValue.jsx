import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function OurValue() {
    const ref3 = useRef(null);
    const isInView11 = useInView(ref3, { once: true });
    const isInView12 = useInView(ref3, { once: true });
    const isInView13 = useInView(ref3, { once: true });
    const isInView14 = useInView(ref3, { once: true });
    const isInView15 = useInView(ref3, { once: true });
    const isInView16 = useInView(ref3, { once: true });
    const isInView17 = useInView(ref3, { once: true });
    const isInView18 = useInView(ref3, { once: true });
    const isInView19 = useInView(ref3, { once: true });
    return (
        <section className="our-value" ref={ref3}>
            <div className="max-content-width">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12" style={{
                            transform: isInView11 ? "none" : "translateY(-100px)",
                            opacity: isInView11 ? 1 : 0,
                            transition:
                                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.6s",
                        }}>
                            <h2 className="sh mb-5">Why Trust Your Business with iWebwiser?</h2>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4" style={{
                            transform: isInView12 ? "none" : "translateY(100px)",
                            opacity: isInView12 ? 1 : 0,
                            transition:
                                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.6s",
                        }}>
                            <h3>Proven Track Record</h3>
                            <p>
                                With a track record of successful projects and satisfied
                                clients, iWebwiser has a consistent ability to deliver
                                results and exceed expectations, maintaining its reputation
                                as a trusted partner.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4" style={{
                            transform: isInView13 ? "none" : "translateY(100px)",
                            opacity: isInView13 ? 1 : 0,
                            transition:
                                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1s",
                        }}>
                            <h3>Customized Solutions</h3>
                            <p>
                                Unlike competitors, We adopt a highly tailored approach,
                                crafting solutions specifically designed to meet each
                                client's unique needs and objectives, ensuring maximum
                                satisfaction.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4" style={{
                            transform: isInView14 ? "none" : "translateY(100px)",
                            opacity: isInView14 ? 1 : 0,
                            transition:
                                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 2.2s",
                        }}>
                            <h3>Exceptional Expertise</h3>
                            <p>
                                iWebwiser has a team of experienced professionals with deep
                                expertise across various technologies, providing clients
                                with access to top developers to address even the most
                                complex challenges with proficiency.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4" style={{
                            transform: isInView15 ? "none" : "translateY(100px)",
                            opacity: isInView15 ? 1 : 0,
                            transition:
                                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.3s",
                        }}>
                            <h3>Client-Centric Focus</h3>
                            <p>
                                At iWebwiser, clients come first. Our client-centric
                                approach prioritizes understanding, addressing client
                                concerns, and developing long-term partnerships built on
                                trust, transparency, and mutual success.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4" style={{
                            transform: isInView16 ? "none" : "translateY(100px)",
                            opacity: isInView16 ? 1 : 0,
                            transition:
                                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                        }}>
                            <h3>Continuous Innovation</h3>
                            <p>
                                Our team constantly explores new technologies and
                                methodologies to enhance our offerings and stay ahead of
                                industry trends, providing clients competitive advantages.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4" style={{
                            transform: isInView17 ? "none" : "translateY(100px)",
                            opacity: isInView17 ? 1 : 0,
                            transition:
                                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.9s",
                        }}>
                            <h3>Robust Support and Maintenance</h3>
                            <p>
                                Beyond initial deployment, iWebwiser provides comprehensive
                                support and maintenance services, ensuring clients receive
                                ongoing assistance and guidance to optimize performance and
                                maximize ROI.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4" style={{
                            transform: isInView18 ? "none" : "translateY(100px)",
                            opacity: isInView18 ? 1 : 0,
                            transition:
                                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.7s",
                        }}>
                            <h3>Transparent Communication</h3>
                            <p>
                                iWebwiser maintains open and transparent communication,
                                keeping clients informed at every stage of the project
                                development process and developing trust, collaboration, and
                                alignment toward shared goals.
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-3" style={{
                        transform: isInView19 ? "none" : "translateY(100px)",
                        opacity: isInView19 ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 1.6s",
                    }}>
                        <Link href={'/app-web-software-design-development-services'} className="btn btn-outline-dark" role="button">See What We Can Do for You</Link>
                    </div>
                </div>
            </div>
        </section>
    )
};
