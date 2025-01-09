import Layout from "@/Components/Common/Layout";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactForm } from "@/api/ApiHelper";
import { toast } from "material-react-toastify";
import { motion } from "framer-motion";

const ReachUs = (props) => {
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.classList.add("show");
    modalRef.current.style.display = "block";
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modalRef.current.style.display = "none";
    modalRef.current.classList.remove("show");
    document.body.classList.remove("modal-open");
  };
  useEffect(() => {
    const modalElement = modalRef.current;
    modalElement.addEventListener("hidden.bs.modal", closeModal);

    return () => {
      modalElement.removeEventListener("hidden.bs.modal", closeModal);
    };
  }, []);
  const handleContactForm = (data) => {
    setLoader(true);
    sendContactForm(data).then((response) => {
      if (response.status == true) {
        setLoader(false);
        reset({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        openModal();
      } else {
        setLoader(false);
        console.log("err");
      }
    });
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Contact Us - iWebwiser | Your Ideas and Our Technology</title>
          <meta
            name="keywords"
            content="Contact iWebwiser, Web Development Services, Mobile App Development Services, Web Design Services, Digital Marketing Services"
          />
          <meta
            name="description"
            content="Let's collaborate your ideas with our technology to achieve your business goal. Contact our experienced team of people and get the finest solutions and services."
          />
          <meta itemprop="name" content="iWebwiser" />
          <meta
            itemprop="description"
            content="iWebwiser | leading IT company for web, app and software development in india | we have solutions to your problem and support to your business."
          />
          <meta
            itemprop="image"
            content="https://www.iwebwiser.com/assets/img/Logo.svg"
          />
          <link rel="canonical" href="https://www.iwebwiser.com/contact-us" />
          <meta name="robots" content="index, follow" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iWebwiser" />
          <meta
            name="twitter:title"
            content="Contact Us - iWebwiser | Your Ideas and Our Technology"
          />
          <meta name="twitter:site:id" content="@iWebwiser" />
          <meta name="twitter:creator" content="@iWebwiser" />
          <meta
            name="twitter:image"
            content="https://www.iwebwiser.com/assets/img/Logo.svg"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />

          <meta
            property="og:title"
            content="Contact Us - iWebwiser | Your Ideas and Our Technology"
          />
          <meta
            property="og:url"
            content="https://www.iwebwiser.com/contact-us"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="iWebwiser" />
          <meta
            property="og:image"
            content="https://www.iwebwiser.com/assets/img/Logo.svg"
          />
          <meta
            property="og:description"
            content="Let's collaborate your ideas with our technology to achieve your business goal. Contact our experienced team of people and get the finest solutions and services."
          />
        </Head>

        {/* ReachUs Contact Section start here... */}
        <section className="ReachUs-contact">
          <div className="max-content-width">
            <div className="container-fluid">
              <div className="ReachUs-title">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 75 },
                  }}
                  initial="hidden"
                  animate={"visible"}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="ReachUs-Home-bg"
                >
                  <h4 className="title">
                    Say Hello, We Would Love To Hear From You.
                  </h4>
                </motion.div>
                <div className="d-flex align-items-center justify-content-start  justify-content-sm-evenly flex-wrap gap-2">
                  <a
                    href="mailto:Support@iwebwiser.com"
                    className="Contact-btn"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="23"
                        viewBox="0 0 33 23"
                        fill="none"
                      >
                        <path
                          d="M27.7034 22.6701H5.25811C4.07742 22.6687 2.94548 22.199 2.1106 21.3642C1.27572 20.5293 0.806074 19.3973 0.804688 18.2166V4.78301C0.806074 3.60232 1.27572 2.47038 2.1106 1.6355C2.94548 0.80062 4.07742 0.330976 5.25811 0.32959H27.7034C28.8841 0.330976 30.016 0.80062 30.8509 1.6355C31.6858 2.47038 32.1554 3.60232 32.1568 4.78301V18.2166C32.1554 19.3973 31.6858 20.5293 30.8509 21.3642C30.016 22.199 28.8841 22.6687 27.7034 22.6701ZM5.25811 1.90139C4.49386 1.90139 3.7609 2.20499 3.22049 2.7454C2.68008 3.28581 2.37648 4.01876 2.37648 4.78301V18.2166C2.37648 18.9809 2.68008 19.7138 3.22049 20.2543C3.7609 20.7947 4.49386 21.0983 5.25811 21.0983H27.7034C28.4676 21.0983 29.2006 20.7947 29.741 20.2543C30.2814 19.7138 30.585 18.9809 30.585 18.2166V4.78301C30.585 4.01876 30.2814 3.28581 29.741 2.7454C29.2006 2.20499 28.4676 1.90139 27.7034 1.90139H5.25811Z"
                          fill="black"
                        />
                        <path
                          d="M16.4826 14.6852C15.5131 14.6867 14.5695 14.3722 13.7948 13.7892L1.56099 4.5366C1.47455 4.47593 1.40123 4.39847 1.34539 4.30884C1.28956 4.2192 1.25236 4.11924 1.23603 4.01491C1.21969 3.91058 1.22454 3.80403 1.2503 3.70161C1.27606 3.5992 1.3222 3.50303 1.38595 3.41885C1.44971 3.33467 1.52977 3.26419 1.62137 3.21164C1.71297 3.15909 1.81421 3.12554 1.91907 3.11299C2.02392 3.10044 2.13023 3.10915 2.23164 3.1386C2.33305 3.16805 2.42748 3.21764 2.50931 3.2844L14.7431 12.5475C15.2455 12.9225 15.8556 13.1252 16.4826 13.1252C17.1095 13.1252 17.7196 12.9225 18.222 12.5475L30.4558 3.2844C30.5377 3.21764 30.6321 3.16805 30.7335 3.1386C30.8349 3.10915 30.9412 3.10044 31.0461 3.11299C31.1509 3.12554 31.2522 3.15909 31.3438 3.21164C31.4354 3.26419 31.5154 3.33467 31.5792 3.41885C31.643 3.50303 31.6891 3.5992 31.7149 3.70161C31.7406 3.80403 31.7455 3.91058 31.7291 4.01491C31.7128 4.11924 31.6756 4.2192 31.6198 4.30884C31.5639 4.39847 31.4906 4.47593 31.4042 4.5366L19.1703 13.7892C18.3957 14.3722 17.4521 14.6867 16.4826 14.6852Z"
                          fill="black"
                        />
                        <path
                          d="M1.90424 20.4799C1.74485 20.4801 1.58915 20.4319 1.45781 20.3415C1.32647 20.2512 1.22569 20.1231 1.16885 19.9742C1.11201 19.8253 1.1018 19.6626 1.13957 19.5078C1.17733 19.3529 1.26129 19.2132 1.38031 19.1072L11.0207 10.5094C11.1763 10.3705 11.3807 10.299 11.5891 10.3108C11.7974 10.3226 11.9924 10.4167 12.1314 10.5723C12.2704 10.7279 12.3418 10.9324 12.33 11.1407C12.3182 11.349 12.2242 11.5441 12.0685 11.683L2.42817 20.2808C2.28501 20.411 2.09778 20.4822 1.90424 20.4799ZM31.0663 20.4799C30.8728 20.4822 30.6855 20.411 30.5424 20.2808L20.902 11.683C20.7464 11.5441 20.6523 11.349 20.6405 11.1407C20.6288 10.9324 20.7002 10.7279 20.8392 10.5723C20.9781 10.4167 21.1732 10.3226 21.3815 10.3108C21.5898 10.299 21.7943 10.3705 21.9499 10.5094L31.585 19.1072C31.704 19.2132 31.788 19.3529 31.8257 19.5078C31.8635 19.6626 31.8533 19.8253 31.7965 19.9742C31.7396 20.1231 31.6388 20.2512 31.5075 20.3415C31.3762 20.4319 31.2205 20.4801 31.0611 20.4799H31.0663Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    Support@iwebwiser.com
                  </a>
                  <a
                    target="blank"
                    href="https://www.google.co.in/maps/place/iWebwiser/@27.9965284,73.3342086,20.61z/data=!4m6!3m5!1s0x393fe7d975c3538d:0x108caced74d7c3d0!8m2!3d27.996572!4d73.3345353!16s%2Fg%2F11qnt9m05y?entry=ttu"
                    className="Contact-btn"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="31"
                        viewBox="0 0 25 31"
                        fill="none"
                      >
                        <path
                          d="M12.1719 30.5852C12.4183 30.5838 12.6569 30.4991 12.8491 30.3449C13.2642 29.9735 24.1875 21.1693 24.1875 12.0156C24.1875 8.82888 22.9216 5.77266 20.6682 3.5193C18.4148 1.26593 15.3586 0 12.1719 0C8.98513 0 5.92891 1.26593 3.67555 3.5193C1.42218 5.77266 0.15625 8.82888 0.15625 12.0156C0.15625 21.1693 11.0795 29.9735 11.4946 30.3449C11.6868 30.4991 11.9255 30.5838 12.1719 30.5852ZM2.34091 12.0156C2.34091 9.40829 3.37667 6.90775 5.22033 5.06408C7.064 3.22042 9.56454 2.18466 12.1719 2.18466C14.7792 2.18466 17.2798 3.22042 19.1234 5.06408C20.9671 6.90775 22.0028 9.40829 22.0028 12.0156C22.0028 18.8973 14.4985 26.0084 12.1719 28.0619C9.84521 26.0084 2.34091 18.8973 2.34091 12.0156Z"
                          fill="black"
                        />
                        <path
                          d="M17.6342 12.0154C17.6342 10.9352 17.3139 9.8792 16.7138 8.98103C16.1137 8.08287 15.2607 7.38284 14.2627 6.96946C13.2647 6.55608 12.1665 6.44792 11.1071 6.65866C10.0476 6.8694 9.07445 7.38957 8.31062 8.15339C7.5468 8.91722 7.02662 9.89039 6.81588 10.9498C6.60515 12.0093 6.7133 13.1075 7.12668 14.1054C7.54006 15.1034 8.2401 15.9564 9.13826 16.5566C10.0364 17.1567 11.0924 17.477 12.1726 17.477C13.6211 17.477 15.0103 16.9016 16.0346 15.8773C17.0588 14.8531 17.6342 13.4639 17.6342 12.0154ZM8.8956 12.0154C8.8956 11.3672 9.08779 10.7337 9.44787 10.1948C9.80795 9.65587 10.3197 9.23585 10.9185 8.98782C11.5173 8.73979 12.1762 8.6749 12.8119 8.80134C13.4476 8.92778 14.0315 9.23989 14.4898 9.69818C14.9481 10.1565 15.2602 10.7404 15.3866 11.3761C15.5131 12.0117 15.4482 12.6706 15.2001 13.2694C14.9521 13.8682 14.5321 14.38 13.9932 14.7401C13.4543 15.1002 12.8207 15.2924 12.1726 15.2924C11.3035 15.2924 10.47 14.9471 9.85541 14.3325C9.24085 13.718 8.8956 12.8845 8.8956 12.0154Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    1-B-10 First Floor Pawan Puri Bikaner, Rajasthan
                  </a>
                </div>
              </div>
              <div className="row align-items-center justify-content-evenly">
                <div className="col-12 col-md-5">
                  <form onSubmit={handleSubmit(handleContactForm)}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="MessageName"
                        placeholder="Name"
                        {...register("name", {
                          required: "Field is required",
                        })}
                      />
                      <p className="form-error">
                        {errors?.name && (
                          <i className="fas fa-exclamation-circle me-2"></i>
                        )}
                        {errors?.name?.message}
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="MessageEmail"
                        placeholder="Email"
                        {...register("email", {
                          required: "Field is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      <p className="form-error">
                        {errors?.email && (
                          <i className="fas fa-exclamation-circle me-2"></i>
                        )}
                        {errors?.email?.message}
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        id="PhoneInput"
                        {...register("phone", {
                          pattern: {
                            value: /^\d{8,}$/,
                            message: `Please fill valid phone no`,
                          },
                          required: "Field is required",
                        })}
                        placeholder="+91-989898989"
                      />
                      <p className="form-error">
                        {errors?.phone && (
                          <i className="fas fa-exclamation-circle me-2"></i>
                        )}
                        {errors?.phone?.message}
                      </p>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="How can we Help?"
                        id="MessageTextarea"
                        {...register("message", {
                          required: "Field is required",
                        })}
                      ></textarea>
                      <p className="form-error textarea-error">
                        {errors?.message && (
                          <i className="fas fa-exclamation-circle me-2"></i>
                        )}
                        {errors?.message?.message}
                      </p>
                    </div>
                    <div className="Submit-form-btn">
                      <button
                        className="btn btn-outline-dark w-50 "
                        type="submit"
                      >
                        {loader == true ? (
                          <span className="spinner-border spinner-border-sm"></span>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-md-5 col-lg-6">
                  <div className="ReachUs-img"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ReachUs Contact Section end here... */}

        {/* ReachUs By Mail Section start here... */}
        <section className="ReachUs-Mail">
          <div className="container">
            <div className="mail-Reach">
              <h4>
                Join our team to work in a collaborative atmosphere, take
                advantage of growth opportunities, and be recognized for your
                efforts.
              </h4>
              <Link
                className="btn btn-outline-dark bg-white"
                role="button"
                href={"mailto:Support@iwebwiser.com"}
              >
                Support@iwebwiser.com
              </Link>
            </div>
          </div>
        </section>
        {/* ReachUs By Mail Section end here... */}
      </Layout>

      {/* After Filling form Thank you message popup start here... */}
      <div
        className="modal fade thankyou-modal"
        id="thankyouModal"
        tabIndex={-1}
        aria-labelledby="thankyouModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close d-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <h4 className="title">Thank you!</h4>
              <p>
                Our team will contact you shortly to address all your inquiries.
              </p>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-bs-dismiss="modal"
                  onClick={() => closeModal()}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* After Filling form Thank you message popup end here... */}
    </>
  );
};

export async function getStaticProps() {
  const reachUsData = {
    video_1: "/assets/img/ReachUs.mp4",
    image_1: "/assets/img/ContactMSG.webp",
    image_2: "/assets/img/ContactNo.webp",
    image_3: "/assets/img/ContactLoc.webp",
  };
  return {
    props: {
      reachUsData,
    },
  };
}

export default ReachUs;
