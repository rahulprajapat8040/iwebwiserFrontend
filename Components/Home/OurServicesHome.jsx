import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function OurServicesHome({ OurServicesHome }) {
    // console.log("our services data from",OurServicesHome)
    const ref6 = useRef(null);
    const isInView19 = useInView(ref6, { once: true });
    const isInView20 = useInView(ref6, { once: true });
    const isInView21 = useInView(ref6, { once: true });
    const isInView22 = useInView(ref6, { once: true });
    const isInView23 = useInView(ref6, { once: true });
    const isInView24 = useInView(ref6, { once: true });
    const isInView25 = useInView(ref6, { once: true });
    return (
        <section className="our-services-home" ref={ref6}>
            <div className="max-content-width">
                <div style={{
                    transform: isInView19 ? "none" : "translateX(-500px)",
                    opacity: isInView19 ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
                }}>
                    <h3 className="sh">{OurServicesHome?.heading_1}</h3>
                    <p className="sd">{OurServicesHome?.Paragraph}</p>
                </div>
                <div className="content">
                {OurServicesHome?.serviceData?.slice(0, 6).map((service, index) => (
                    <div className="inner-card"  key={index} style={{
                        transform: isInView20 ? "none" : "translateX(-100px)",
                        opacity: isInView20 ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                    }}>



                        <div className="inner-info">
                            <div className="abscon">
                                <div className="imgbx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                        <path d="M32.3158 1H4.68421C2.64948 1 1 2.64948 1 4.68421V32.3158C1 34.3505 2.64948 36 4.68421 36H32.3158C34.3505 36 36 34.3505 36 32.3158V4.68421C36 2.64948 34.3505 1 32.3158 1Z" fill="white" stroke="#0029FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 8.36841H36H1Z" fill="white" />
                                        <path d="M1 8.36841H36" stroke="#0029FF" stroke-linecap="square" />
                                        <path d="M4.68421 6.52637C5.70158 6.52637 6.52632 5.70164 6.52632 4.68427C6.52632 3.6669 5.70158 2.84216 4.68421 2.84216C3.66684 2.84216 2.84211 3.6669 2.84211 4.68427C2.84211 5.70164 3.66684 6.52637 4.68421 6.52637Z" fill="white" stroke="#0029FF" stroke-width="0.5" />
                                        <path d="M8.36842 6.52637C9.38579 6.52637 10.2105 5.70164 10.2105 4.68427C10.2105 3.6669 9.38579 2.84216 8.36842 2.84216C7.35105 2.84216 6.52632 3.6669 6.52632 4.68427C6.52632 5.70164 7.35105 6.52637 8.36842 6.52637Z" fill="white" stroke="#0029FF" stroke-width="0.5" />
                                        <path d="M12.0526 6.52637C13.07 6.52637 13.8947 5.70164 13.8947 4.68427C13.8947 3.6669 13.07 2.84216 12.0526 2.84216C11.0353 2.84216 10.2105 3.6669 10.2105 4.68427C10.2105 5.70164 11.0353 6.52637 12.0526 6.52637Z" fill="white" stroke="#0029FF" stroke-width="0.5" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0447 28.8158L11.8684 30.6395L14.6537 27.8542L15.2579 28.1821C15.6687 28.4031 16.1034 28.5837 16.5529 28.7163L17.2105 28.9134V32.3158H19.7895V28.9134L20.4471 28.7181C20.8966 28.5837 21.3313 28.405 21.7421 28.1821L22.3463 27.8542L25.1316 30.6395L26.9553 28.8158L24.17 26.0305L24.4979 25.4263C24.7201 25.0142 24.8991 24.5802 25.0321 24.1313L25.2292 23.4737H28.6316V20.8947H25.2292L25.0339 20.2371C24.9006 19.788 24.7209 19.354 24.4979 18.9421L24.17 18.3379L26.9553 15.5526L25.1316 13.7289L22.3463 16.5142L21.7421 16.1863C21.3301 15.9639 20.8961 15.7849 20.4471 15.6521L19.7895 15.455V12.0526H17.2105V15.455L16.5529 15.6502C16.1034 15.7847 15.6687 15.9634 15.2579 16.1863L14.6537 16.5142L11.8684 13.7289L10.0447 15.5526L12.83 18.3379L12.5021 18.9421C12.2797 19.3541 12.1007 19.7881 11.9679 20.2371L11.7708 20.8947H8.36842V23.4737H11.7708L11.9661 24.1313C12.1005 24.5808 12.2792 25.0155 12.5021 25.4263L12.83 26.0305L10.0447 28.8158Z" fill="white" stroke="#0029FF" />
                                        <path d="M18.5 25.4079C20.2804 25.4079 21.7237 23.9646 21.7237 22.1843C21.7237 20.4039 20.2804 18.9606 18.5 18.9606C16.7196 18.9606 15.2763 20.4039 15.2763 22.1843C15.2763 23.9646 16.7196 25.4079 18.5 25.4079Z" fill="white" stroke="#0029FF" />
                                    </svg>
                                </div>
                                <h5>{service?.title}</h5>
                                <p>{service?.description}</p>
                            </div>
                        </div>
                        
                    </div>

                    ))}


                    {/* <div className="inner-card" style={{
                        transform: isInView20 ? "none" : "translateX(-100px)",
                        opacity: isInView20 ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                    }}>
                        <div className="inner-info">
                            <div className="abscon">
                                <div className="imgbx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0526 7.94737V3.60526C27.0526 2.9143 26.7781 2.25165 26.2896 1.76306C25.801 1.27448 25.1383 1 24.4474 1H3.60526C2.9143 1 2.25165 1.27448 1.76306 1.76306C1.27448 2.25165 1 2.9143 1 3.60526V22.7105C1 23.4015 1.27448 24.0641 1.76306 24.5527C2.25165 25.0413 2.9143 25.3158 3.60526 25.3158H16.6316V10.5526C16.6316 9.86167 16.9061 9.19901 17.3946 8.71043C17.8832 8.22185 18.5459 7.94737 19.2368 7.94737H27.0526Z" fill="white" stroke="#0029FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34 16.6316V10.5527C34 9.86169 33.7255 9.19903 33.2369 8.71045C32.7484 8.22187 32.0857 7.94739 31.3947 7.94739H19.2369C18.5459 7.94739 17.8832 8.22187 17.3947 8.71045C16.9061 9.19903 16.6316 9.86169 16.6316 10.5527V29.6579C16.6316 30.3489 16.9061 31.0115 17.3947 31.5001C17.8832 31.9887 18.5459 32.2632 19.2369 32.2632H27.0526V19.2369C27.0526 18.5459 27.3271 17.8832 27.8157 17.3947C28.3043 16.9061 28.9669 16.6316 29.6579 16.6316H34Z" fill="white" stroke="#0029FF" />
                                        <path d="M34 16.6316H30.5263C28.6079 16.6316 27.0526 18.1868 27.0526 20.1053V30.5263C27.0526 32.4448 28.6079 34 30.5263 34H34C35.9185 34 37.4737 32.4448 37.4737 30.5263V20.1053C37.4737 18.1868 35.9185 16.6316 34 16.6316Z" fill="white" stroke="#0029FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 20.1052H16.6316H1ZM13.1579 25.3158V30.5263V25.3158Z" fill="white" />
                                        <path d="M1 20.1052H16.6316M13.1579 25.3158V30.5263" stroke="#0029FF" stroke-linecap="square" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.94736 30.5264H16.6316H7.94736Z" fill="white" />
                                        <path d="M7.94736 30.5264H16.6316" stroke="#0029FF" stroke-linecap="round" />
                                        <path d="M25.3158 30.5263C26.275 30.5263 27.0526 29.7487 27.0526 28.7895C27.0526 27.8302 26.275 27.0526 25.3158 27.0526C24.3566 27.0526 23.5789 27.8302 23.5789 28.7895C23.5789 29.7487 24.3566 30.5263 25.3158 30.5263Z" fill="white" stroke="#0029FF" />
                                        <path d="M32.2631 32.2631C33.2224 32.2631 34 31.4855 34 30.5263C34 29.567 33.2224 28.7894 32.2631 28.7894C31.3039 28.7894 30.5263 29.567 30.5263 30.5263C30.5263 31.4855 31.3039 32.2631 32.2631 32.2631Z" fill="white" stroke="#0029FF" />
                                    </svg>
                                </div>
                                <h5>Software Development</h5>
                                <p>In this era of technology, what is in trend is Android technology, Android technology and its apps are very much liked in the market. And in today's time</p>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="inner-card" style={{
                        transform: isInView20 ? "none" : "translateX(-100px)",
                        opacity: isInView20 ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                    }}>
                        <div className="inner-info">
                            <div className="abscon">
                                <div className="imgbx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0526 7.94737V3.60526C27.0526 2.9143 26.7781 2.25165 26.2896 1.76306C25.801 1.27448 25.1383 1 24.4474 1H3.60526C2.9143 1 2.25165 1.27448 1.76306 1.76306C1.27448 2.25165 1 2.9143 1 3.60526V22.7105C1 23.4015 1.27448 24.0641 1.76306 24.5527C2.25165 25.0413 2.9143 25.3158 3.60526 25.3158H16.6316V10.5526C16.6316 9.86167 16.9061 9.19901 17.3946 8.71043C17.8832 8.22185 18.5459 7.94737 19.2368 7.94737H27.0526Z" fill="white" stroke="#0029FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34 16.6316V10.5527C34 9.86169 33.7255 9.19903 33.2369 8.71045C32.7484 8.22187 32.0857 7.94739 31.3947 7.94739H19.2369C18.5459 7.94739 17.8832 8.22187 17.3947 8.71045C16.9061 9.19903 16.6316 9.86169 16.6316 10.5527V29.6579C16.6316 30.3489 16.9061 31.0115 17.3947 31.5001C17.8832 31.9887 18.5459 32.2632 19.2369 32.2632H27.0526V19.2369C27.0526 18.5459 27.3271 17.8832 27.8157 17.3947C28.3043 16.9061 28.9669 16.6316 29.6579 16.6316H34Z" fill="white" stroke="#0029FF" />
                                        <path d="M34 16.6316H30.5263C28.6079 16.6316 27.0526 18.1868 27.0526 20.1053V30.5263C27.0526 32.4448 28.6079 34 30.5263 34H34C35.9185 34 37.4737 32.4448 37.4737 30.5263V20.1053C37.4737 18.1868 35.9185 16.6316 34 16.6316Z" fill="white" stroke="#0029FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 20.1052H16.6316H1ZM13.1579 25.3158V30.5263V25.3158Z" fill="white" />
                                        <path d="M1 20.1052H16.6316M13.1579 25.3158V30.5263" stroke="#0029FF" stroke-linecap="square" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.94736 30.5264H16.6316H7.94736Z" fill="white" />
                                        <path d="M7.94736 30.5264H16.6316" stroke="#0029FF" stroke-linecap="round" />
                                        <path d="M25.3158 30.5263C26.275 30.5263 27.0526 29.7487 27.0526 28.7895C27.0526 27.8302 26.275 27.0526 25.3158 27.0526C24.3566 27.0526 23.5789 27.8302 23.5789 28.7895C23.5789 29.7487 24.3566 30.5263 25.3158 30.5263Z" fill="white" stroke="#0029FF" />
                                        <path d="M32.2631 32.2631C33.2224 32.2631 34 31.4855 34 30.5263C34 29.567 33.2224 28.7894 32.2631 28.7894C31.3039 28.7894 30.5263 29.567 30.5263 30.5263C30.5263 31.4855 31.3039 32.2631 32.2631 32.2631Z" fill="white" stroke="#0029FF" />
                                    </svg>
                                </div>
                                <h5>Software Development</h5>
                                <p>In this era of technology, what is in trend is Android technology, Android technology and its apps are very much liked in the market. And in today's time</p>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="inner-card" style={{
                        transform: isInView20 ? "none" : "translateX(-100px)",
                        opacity: isInView20 ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                    }}>
                        <div className="inner-info">
                            <div className="abscon">
                                <div className="imgbx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0526 7.94737V3.60526C27.0526 2.9143 26.7781 2.25165 26.2896 1.76306C25.801 1.27448 25.1383 1 24.4474 1H3.60526C2.9143 1 2.25165 1.27448 1.76306 1.76306C1.27448 2.25165 1 2.9143 1 3.60526V22.7105C1 23.4015 1.27448 24.0641 1.76306 24.5527C2.25165 25.0413 2.9143 25.3158 3.60526 25.3158H16.6316V10.5526C16.6316 9.86167 16.9061 9.19901 17.3946 8.71043C17.8832 8.22185 18.5459 7.94737 19.2368 7.94737H27.0526Z" fill="white" stroke="#0029FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34 16.6316V10.5527C34 9.86169 33.7255 9.19903 33.2369 8.71045C32.7484 8.22187 32.0857 7.94739 31.3947 7.94739H19.2369C18.5459 7.94739 17.8832 8.22187 17.3947 8.71045C16.9061 9.19903 16.6316 9.86169 16.6316 10.5527V29.6579C16.6316 30.3489 16.9061 31.0115 17.3947 31.5001C17.8832 31.9887 18.5459 32.2632 19.2369 32.2632H27.0526V19.2369C27.0526 18.5459 27.3271 17.8832 27.8157 17.3947C28.3043 16.9061 28.9669 16.6316 29.6579 16.6316H34Z" fill="white" stroke="#0029FF" />
                                        <path d="M34 16.6316H30.5263C28.6079 16.6316 27.0526 18.1868 27.0526 20.1053V30.5263C27.0526 32.4448 28.6079 34 30.5263 34H34C35.9185 34 37.4737 32.4448 37.4737 30.5263V20.1053C37.4737 18.1868 35.9185 16.6316 34 16.6316Z" fill="white" stroke="#0029FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 20.1052H16.6316H1ZM13.1579 25.3158V30.5263V25.3158Z" fill="white" />
                                        <path d="M1 20.1052H16.6316M13.1579 25.3158V30.5263" stroke="#0029FF" stroke-linecap="square" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.94736 30.5264H16.6316H7.94736Z" fill="white" />
                                        <path d="M7.94736 30.5264H16.6316" stroke="#0029FF" stroke-linecap="round" />
                                        <path d="M25.3158 30.5263C26.275 30.5263 27.0526 29.7487 27.0526 28.7895C27.0526 27.8302 26.275 27.0526 25.3158 27.0526C24.3566 27.0526 23.5789 27.8302 23.5789 28.7895C23.5789 29.7487 24.3566 30.5263 25.3158 30.5263Z" fill="white" stroke="#0029FF" />
                                        <path d="M32.2631 32.2631C33.2224 32.2631 34 31.4855 34 30.5263C34 29.567 33.2224 28.7894 32.2631 28.7894C31.3039 28.7894 30.5263 29.567 30.5263 30.5263C30.5263 31.4855 31.3039 32.2631 32.2631 32.2631Z" fill="white" stroke="#0029FF" />
                                    </svg>
                                </div>
                                <h5>Software Development</h5>
                                <p>In this era of technology, what is in trend is Android technology, Android technology and its apps are very much liked in the market. And in today's time</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="inner-card rdymanf" style={{
                        transform: isInView20 ? "none" : "translateX(-100px)",
                        opacity: isInView20 ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                    }}>
                        <div className="trnsbtmsc">
                            <h3 className="text-white">Ready to innovate and drive an impact?</h3>
                            <button className="btn btn-primary text-black">Partner with us</button>
                        </div>
                    </div>
                    {/* <div className="inner-card" style={{
                        transform: isInView20 ? "none" : "translateX(-100px)",
                        opacity: isInView20 ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                    }}>
                        <div className="inner-info">
                            <div className="abscon">
                                <div className="imgbx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0526 7.94737V3.60526C27.0526 2.9143 26.7781 2.25165 26.2896 1.76306C25.801 1.27448 25.1383 1 24.4474 1H3.60526C2.9143 1 2.25165 1.27448 1.76306 1.76306C1.27448 2.25165 1 2.9143 1 3.60526V22.7105C1 23.4015 1.27448 24.0641 1.76306 24.5527C2.25165 25.0413 2.9143 25.3158 3.60526 25.3158H16.6316V10.5526C16.6316 9.86167 16.9061 9.19901 17.3946 8.71043C17.8832 8.22185 18.5459 7.94737 19.2368 7.94737H27.0526Z" fill="white" stroke="#0029FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34 16.6316V10.5527C34 9.86169 33.7255 9.19903 33.2369 8.71045C32.7484 8.22187 32.0857 7.94739 31.3947 7.94739H19.2369C18.5459 7.94739 17.8832 8.22187 17.3947 8.71045C16.9061 9.19903 16.6316 9.86169 16.6316 10.5527V29.6579C16.6316 30.3489 16.9061 31.0115 17.3947 31.5001C17.8832 31.9887 18.5459 32.2632 19.2369 32.2632H27.0526V19.2369C27.0526 18.5459 27.3271 17.8832 27.8157 17.3947C28.3043 16.9061 28.9669 16.6316 29.6579 16.6316H34Z" fill="white" stroke="#0029FF" />
                                        <path d="M34 16.6316H30.5263C28.6079 16.6316 27.0526 18.1868 27.0526 20.1053V30.5263C27.0526 32.4448 28.6079 34 30.5263 34H34C35.9185 34 37.4737 32.4448 37.4737 30.5263V20.1053C37.4737 18.1868 35.9185 16.6316 34 16.6316Z" fill="white" stroke="#0029FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 20.1052H16.6316H1ZM13.1579 25.3158V30.5263V25.3158Z" fill="white" />
                                        <path d="M1 20.1052H16.6316M13.1579 25.3158V30.5263" stroke="#0029FF" stroke-linecap="square" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.94736 30.5264H16.6316H7.94736Z" fill="white" />
                                        <path d="M7.94736 30.5264H16.6316" stroke="#0029FF" stroke-linecap="round" />
                                        <path d="M25.3158 30.5263C26.275 30.5263 27.0526 29.7487 27.0526 28.7895C27.0526 27.8302 26.275 27.0526 25.3158 27.0526C24.3566 27.0526 23.5789 27.8302 23.5789 28.7895C23.5789 29.7487 24.3566 30.5263 25.3158 30.5263Z" fill="white" stroke="#0029FF" />
                                        <path d="M32.2631 32.2631C33.2224 32.2631 34 31.4855 34 30.5263C34 29.567 33.2224 28.7894 32.2631 28.7894C31.3039 28.7894 30.5263 29.567 30.5263 30.5263C30.5263 31.4855 31.3039 32.2631 32.2631 32.2631Z" fill="white" stroke="#0029FF" />
                                    </svg>
                                </div>
                                <h5>Software Development</h5>
                                <p>In this era of technology, what is in trend is Android technology, Android technology and its apps are very much liked in the market. And in today's time</p>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="inner-card" style={{
                        transform: isInView20 ? "none" : "translateX(-100px)",
                        opacity: isInView20 ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
                    }}>
                        <div className="inner-info">
                            <div className="abscon">
                                <div className="imgbx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0526 7.94737V3.60526C27.0526 2.9143 26.7781 2.25165 26.2896 1.76306C25.801 1.27448 25.1383 1 24.4474 1H3.60526C2.9143 1 2.25165 1.27448 1.76306 1.76306C1.27448 2.25165 1 2.9143 1 3.60526V22.7105C1 23.4015 1.27448 24.0641 1.76306 24.5527C2.25165 25.0413 2.9143 25.3158 3.60526 25.3158H16.6316V10.5526C16.6316 9.86167 16.9061 9.19901 17.3946 8.71043C17.8832 8.22185 18.5459 7.94737 19.2368 7.94737H27.0526Z" fill="white" stroke="#0029FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34 16.6316V10.5527C34 9.86169 33.7255 9.19903 33.2369 8.71045C32.7484 8.22187 32.0857 7.94739 31.3947 7.94739H19.2369C18.5459 7.94739 17.8832 8.22187 17.3947 8.71045C16.9061 9.19903 16.6316 9.86169 16.6316 10.5527V29.6579C16.6316 30.3489 16.9061 31.0115 17.3947 31.5001C17.8832 31.9887 18.5459 32.2632 19.2369 32.2632H27.0526V19.2369C27.0526 18.5459 27.3271 17.8832 27.8157 17.3947C28.3043 16.9061 28.9669 16.6316 29.6579 16.6316H34Z" fill="white" stroke="#0029FF" />
                                        <path d="M34 16.6316H30.5263C28.6079 16.6316 27.0526 18.1868 27.0526 20.1053V30.5263C27.0526 32.4448 28.6079 34 30.5263 34H34C35.9185 34 37.4737 32.4448 37.4737 30.5263V20.1053C37.4737 18.1868 35.9185 16.6316 34 16.6316Z" fill="white" stroke="#0029FF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 20.1052H16.6316H1ZM13.1579 25.3158V30.5263V25.3158Z" fill="white" />
                                        <path d="M1 20.1052H16.6316M13.1579 25.3158V30.5263" stroke="#0029FF" stroke-linecap="square" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.94736 30.5264H16.6316H7.94736Z" fill="white" />
                                        <path d="M7.94736 30.5264H16.6316" stroke="#0029FF" stroke-linecap="round" />
                                        <path d="M25.3158 30.5263C26.275 30.5263 27.0526 29.7487 27.0526 28.7895C27.0526 27.8302 26.275 27.0526 25.3158 27.0526C24.3566 27.0526 23.5789 27.8302 23.5789 28.7895C23.5789 29.7487 24.3566 30.5263 25.3158 30.5263Z" fill="white" stroke="#0029FF" />
                                        <path d="M32.2631 32.2631C33.2224 32.2631 34 31.4855 34 30.5263C34 29.567 33.2224 28.7894 32.2631 28.7894C31.3039 28.7894 30.5263 29.567 30.5263 30.5263C30.5263 31.4855 31.3039 32.2631 32.2631 32.2631Z" fill="white" stroke="#0029FF" />
                                    </svg>
                                </div>
                                <h5>Software Development</h5>
                                <p>In this era of technology, what is in trend is Android technology, Android technology and its apps are very much liked in the market. And in today's time</p>
                            </div>
                        </div>
                    </div> */}




                </div>
                <div className="servicesbg">
                    <div>
                        <h3>Create, Innovate, Promote <span><svg xmlns="http://www.w3.org/2000/svg" width="29" height="17" viewBox="0 0 29 17" fill="none"><path d="M0.617188 8.69545C0.617188 9.004 0.739759 9.29992 0.957939 9.5181C1.17612 9.73628 1.47203 9.85885 1.78058 9.85885H24.5669L19.5736 14.8521C19.3616 15.0716 19.2444 15.3654 19.247 15.6705C19.2497 15.9755 19.372 16.2673 19.5877 16.483C19.8034 16.6987 20.0952 16.8211 20.4003 16.8237C20.7053 16.8264 20.9992 16.7091 21.2186 16.4972L28.199 9.51681C28.3066 9.40978 28.3921 9.28253 28.4504 9.14237C28.5087 9.00221 28.5387 8.85191 28.5387 8.70011V8.69545C28.5387 8.54421 28.5084 8.39297 28.448 8.25104C28.39 8.10999 28.3045 7.98187 28.1967 7.87409L21.2163 0.893718C20.9969 0.681796 20.703 0.564532 20.3979 0.567183C20.0929 0.569833 19.8011 0.692186 19.5854 0.907889C19.3697 1.12359 19.2474 1.41539 19.2447 1.72043C19.2421 2.02546 19.3593 2.31934 19.5712 2.53876L24.5669 7.53206H1.78058C1.47203 7.53206 1.17612 7.65463 0.957939 7.87281C0.739759 8.09099 0.617188 8.3869 0.617188 8.69545Z" fill="black"></path></svg></span></h3>
                        <p>We build more than software.</p>
                    </div>
                    <Link className="srbgicon" href={"/support-and-services"}>Speak With Our Expert’s Today <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="17" viewBox="0 0 29 17" fill="none"><path d="M0.617188 8.69545C0.617188 9.004 0.739759 9.29992 0.957939 9.5181C1.17612 9.73628 1.47203 9.85885 1.78058 9.85885H24.5669L19.5736 14.8521C19.3616 15.0716 19.2444 15.3654 19.247 15.6705C19.2497 15.9755 19.372 16.2673 19.5877 16.483C19.8034 16.6987 20.0952 16.8211 20.4003 16.8237C20.7053 16.8264 20.9992 16.7091 21.2186 16.4972L28.199 9.51681C28.3066 9.40978 28.3921 9.28253 28.4504 9.14237C28.5087 9.00221 28.5387 8.85191 28.5387 8.70011V8.69545C28.5387 8.54421 28.5084 8.39297 28.448 8.25104C28.39 8.10999 28.3045 7.98187 28.1967 7.87409L21.2163 0.893718C20.9969 0.681796 20.703 0.564532 20.3979 0.567183C20.0929 0.569833 19.8011 0.692186 19.5854 0.907889C19.3697 1.12359 19.2474 1.41539 19.2447 1.72043C19.2421 2.02546 19.3593 2.31934 19.5712 2.53876L24.5669 7.53206H1.78058C1.47203 7.53206 1.17612 7.65463 0.957939 7.87281C0.739759 8.09099 0.617188 8.3869 0.617188 8.69545Z" fill="black"></path></svg>
                    </span></Link>
                </div>
            </div>
        </section>
    )
};
