import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ApiUrl, ServerUrl } from "@/Utility/ApiUrl";
import { callApi } from "@/hooks/useapi";
const Footer = () => {
  const [FooterLink, setFooterLink] = useState([]);
  const [globalBranches, setGlobalBranches] = useState([]);
  const [IndiaBranches, setIndiaBranches] = useState([]);
  // console.log(FooterLink)
  // console.log(IndiaBranches);
  // console.log(globalBranches)

  const fetchData = async () => {
    try {
      const res = await callApi(ApiUrl.getActivesocialMedia);
      const data = await res.data;
      // console.log(data)

      const iconDetails = {
        linkedin: {
          className: "btn btn-socials Linkedin",
          spanClassName: "social-linkedin",
          iconClassName: "fab fa-linkedin-in",
          SocialName: "LinkedIn",
        },
        instagram: {
          className: "btn btn-socials instagram",
          spanClassName: "social-instagram",
          iconClassName: "fab fa-instagram",
          SocialName: "Instagram",
        },
        facebook: {
          className: "btn btn-socials facebook",
          spanClassName: "social-facebook",
          iconClassName: "fab fa-facebook-f",
          SocialName: "Facebook",
        },
        twitter: {
          className: "btn btn-socials twitter",
          spanClassName: "social-twitter",
          iconClassName: "fab fa-twitter",
          SocialName: "Twitter",
        },
        youtube: {
          className: "btn btn-socials youtube",
          spanClassName: "social-youtube",
          iconClassName: "fab fa-youtube",
          SocialName: "YouTube",
        },
      };

      const formattedData = data.map((item) => ({
        link: item.link,
        ...iconDetails[item.type],
      }));

      setFooterLink({ Links: formattedData });
    } catch (err) {
      console.log(err);
    }
  };

  const classes = [
    { headingClass: "footer-link", textClass: "footer-text footer-mb" },
    { headingClass: "footer-link", textClass: "footer-text footer-mb" },
    { headingClass: "footer-link", textClass: "footer-text footer-mb" },
    { headingClass: "footer-link", textClass: "footer-text" },
    { headingClass: "footer-link", textClass: "footer-text" },
  ];

  const pTagClasses = [
    "footer-text footer-mb",
    "footer-text footer-mb",
    "footer-text footer-mb",
    "footer-text",
    "footer-text",
  ];

  const fetchFooterData = async () => {
    try {
      const res = await callApi(ApiUrl.getBranchByPageId);
      const data = await res.data;
      setGlobalBranches(data.globalBranches);
      setIndiaBranches(data.localBranches);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    fetchFooterData();
  }, []);

  const d = new Date();
  const year = d.getFullYear().toString();

  return (
    <>
      {/* Footer start here... */}
      <footer className="footer">
        <div className="max-content-width">
          <div className="container-fluid">
            <div className="row">
              {/* social links start here... */}
              <div className="col-12 px-0 d-none d-lg-block">
                <div className="footer-section social-section">
                  <div className="row">
                    <div className="col-12 col-lg-2">
                      <h5 className="footer-title">Social Media</h5>
                    </div>
                    <div className="col-12 col-lg-10 d-flex justify-content-between">
                      <div className="social-icons">
                        {FooterLink?.Links?.map((item, index) => (
                          <a
                            key={index}
                            target="_blank"
                            href={item.link}
                            className={item.className}
                            role="button"
                          >
                            <span className={item.spanClassName}>
                              <i className={item.iconClassName} />
                            </span>
                            {item.SocialName}
                          </a>
                        ))}
                      </div>
                      {/* <div className="social-icons">
                        <a
                          target="blank"
                          href="https://www.linkedin.com/company/iwebwiser/"
                          role="button"
                          className="btn btn-socials Linkedin"
                        >
                          <span className="social-linkedin">
                            <i className="fab fa-linkedin-in" />
                          </span>
                          LinkedIn
                        </a>
                        <a
                          target="blank"
                          href="https://www.instagram.com/iwebwiserindia/"
                          role="button"
                          className="btn btn-socials instagram"
                        >
                          <span className="social-instagram">
                            <i className="fab fa-instagram" />
                          </span>
                          Instagram
                        </a>
                        <a
                          target="blank"
                          href="https://www.facebook.com/iwebwiserindia"
                          role="button"
                          className="btn btn-socials facebook"
                        >
                          <span className="social-facebook">
                            <i className="fab fa-facebook-f" />
                          </span>
                          Facebook
                        </a>
                        <a
                          target="blank"
                          href="https://twitter.com/iwebwiser"
                          role="button"
                          className="btn btn-socials twitter"
                        >
                          <span className="social-twitter">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                          </span>
                          Twitter
                        </a>
                      </div> */}

                      <div className="truseted-logo">
                        <img src="/assets/img/trusted-by.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* social links end here... */}
              {/* Globe Branches start here... */}
              <div className="col-12 px-0 d-none d-lg-block">
                <div className="footer-section">
                  <div className="row">
                    <div className="col-12 col-lg-2">
                      <h5 className="footer-title">
                        Globle
                        <br className="d-none d-lg-block" />
                        branches
                      </h5>
                    </div>
                    <div className="col-12 col-lg-10">
                      <div className="row">
                        {globalBranches.map((branch, index) => (
                          <div className="col-6 col-lg-3" key={branch.id}>
                            <h5 className="footer-link">{branch.title}</h5>
                            <p
                              className={
                                pTagClasses[index % pTagClasses.length]
                              }
                            >
                              {branch.address ? `${branch.address}, ` : ""}
                              {branch.city ? `${branch.city}, ` : ""}
                              {branch.state ? `${branch.state}, ` : ""}
                              {branch.zip_code ? `${branch.zip_code}, ` : ""}
                              {branch.country ? `${branch.country}` : ""}
                            </p>
                          </div>
                        ))}

                        <div className="col-6 mt-2 col-lg-3">
                          <h5 className="footer-link">AYN Tech Pvt. Ltd.</h5>
                          <p className="footer-text">London EC2A 4NE</p>
                          <p className="footer-text">Raj Kumar Bagari</p>
                          <p className="footer-text">Founder & CEO</p>
                          <a
                            className="btn footer-text p-0"
                            role="button"
                            href="mailto:support@ayntech.co.uk"
                          >
                            Email : support@ayntech.co.uk
                          </a>
                        </div>

                        <div className="col-6 mt-2 col-lg-3">
                          <h5 className="footer-link">iWebwiser Pvt. Ltd.</h5>
                          <p className="footer-text">Malaysia</p>
                          <p className="footer-text">Dr. Ghassan ALYafie</p>
                          <p className="footer-text">Technical Advisor</p>
                          <a
                            className="btn footer-text p-0"
                            role="button"
                            href="mailto:ghassanalyafie@gmail.com"
                          >
                            Email : ghassanalyafie@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-12 col-lg-2">
                      <h5 className="footer-title">
                        Globle
                        <br className="d-none d-lg-block" />
                        branches
                      </h5>
                    </div>
                    <div className="col-12 col-lg-10">
                      <div className="row">
                        <div className="col-6 col-lg-3">
                          <h5 className="footer-link">iWebwiser Pty. Ltd</h5>
                          <p className="footer-text footer-mb">
                            Number 18, 4009 Park, Boulevard, San Diego, USA, 92103
                          </p>
                        </div>
                        <div className="col-6 col-lg-3">
                          <h5 className="footer-link">ABM IT Solutions</h5>
                          <p className="footer-text footer-mb">
                            Washington DC, USA
                          </p>
                        </div>
                        <div className="col-6 col-lg-3">
                          <h5 className="footer-link">New Ways Pty. Ltd.</h5>
                          <p className="footer-text">United Kingdom</p>
                        </div>
                        <div className="col-6 col-lg-3">
                          <h5 className="footer-link">AYN Tech Pvt. Ltd.</h5>
                          <p className="footer-text">London EC2A 4NE</p>
                          <p className="footer-text">Raj Kumar Bagari</p>
                          <p className="footer-text">Founder & CEO</p>
                          <a
                            className="btn footer-text p-0"
                            role="button"
                            href="mailto:support@ayntech.co.uk"
                          >
                            Email : support@ayntech.co.uk
                          </a>
                        </div>
                        <div className="col-6 col-lg-3">
                          <h5 className="footer-link">Appwise Pty. Ltd.</h5>
                          <p className="footer-text footer-mb">
                            102, Stephen Dlamini Road, Musgrave, 4001 Durban,
                            South Africa
                          </p>
                        </div>
                        <div className="col-6 col-lg-3">
                          <h5 className="footer-link">
                            Digivisionary Pty. Ltd.
                          </h5>
                          <p className="footer-text">
                            Abdullah Fouad-Dammam, Housing, 31451, Dammam, Saudi
                            Arabia
                          </p>
                        </div>

                        <div className="col-6 col-lg-3">
                          <h5 className="footer-link">iWebwiser Pvt. Ltd.</h5>
                          <p className="footer-text">Malaysia</p>
                          <p className="footer-text">Dr. Ghassan ALYafie</p>
                          <p className="footer-text">Technical Advisor</p>
                          <a
                            className="btn footer-text p-0"
                            role="button"
                            href="mailto:ghassanalyafie@gmail.com"
                          >
                            Email : ghassanalyafie@gmail.com
                          </a>
                        </div>

                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* Globe Branches end here... */}
              {/* India Branches start here... */}
              <div className="col-12 px-0 d-none d-lg-block">
                <div className="footer-section">
                  <div className="row">
                    <div className="col-12 col-lg-2">
                      <h5 className="footer-title">
                        India
                        <br className="d-none d-lg-block" />
                        branches
                      </h5>
                    </div>
                    <div className="col-12 col-lg-10">
                      <div className="row">
                        {IndiaBranches.map((branch, index) => (
                          <div className="col-6 col-lg-3" key={branch.id}>
                            <h5 className="footer-link">{branch.title}</h5>
                            <p className="footer-text  footer-mb">
                              {branch.address ? `${branch.address}, ` : ""}
                              {branch.city ? `${branch.city}, ` : ""}
                              {branch.state ? `${branch.state}, ` : ""}
                              {branch.zip_code ? `${branch.zip_code}, ` : ""}
                              {branch.country ? `${branch.country}` : ""}
                            </p>
                          </div>
                        ))}
                        <div className="col-6 col-lg-3">
                          <h5 className="footer-link">iWebwiser Pvt. Ltd.</h5>
                          <p className="footer-text">Jaipur </p>
                          <h5 className="footer-link soon">Coming Soon...</h5>
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="col-6 col-lg-3">
                          <h5 className="footer-link">iWebwiser Pvt. Ltd.</h5>
                          <p className="footer-text  footer-mb">
                            1-B-10 First Floor Pawan Puri Bikaner, Rajasthan,
                            India.
                          </p>
                        </div>
                        <div className="col-6 col-lg-3">
                          <h5 className="footer-link">iWebwiser Pvt. Ltd.</h5>
                          <p className="footer-text  footer-mb">
                            Tilak Nagar, Ratangarh 331022 Churu, Rajasthan,
                            India.
                          </p>
                        </div>
                        <div className="col-6 col-lg-3">
                          <h5 className="footer-link">iWebwiser Pvt. Ltd.</h5>
                          <p className="footer-text  footer-mb">
                            3rd Floor, Plot Number 359, PU4, 453551, Indore,
                            Madhya - Pradesh, India.
                          </p>
                        </div>
                        <div className="col-6 col-lg-3">
                          <h5 className="footer-link">iWebwiser Pvt. Ltd.</h5>
                          <p className="footer-text">Jaipur </p>
                          <h5 className="footer-link soon">Coming Soon...</h5>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* India Branches end here... */}

              {/* Footer sm Screen start here... */}
              <div className="footer-sm d-block d-lg-none">
                <div className="footer-sm-content">
                  {/* First Slide for footer-sm start here... */}
                  <button
                    className="btn title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Social media
                    <span>
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </button>
                  <div className="collapse show" id="collapseOne">
                    <div className="card">
                      <ul className="social-icons list-unstyled">
                        {FooterLink?.Links?.slice(0, 4).map((item, index) => (
                          <li key={index}>
                            <a
                              target="blank"
                              href={item.link}
                              className={item.className}
                              role="button"
                            >
                              <span className={item.spanClassName}>
                                <i className={item.iconClassName} />
                              </span>
                              {item.SocialName}
                            </a>
                          </li>
                        ))}
                      </ul>
                      {/* <ul className="social-icons list-unstyled">
                        <li>
                          <a
                            target="blank"
                            href="https://www.linkedin.com/company/iwebwiser/"
                            role="button"
                            className="btn btn-socials Linkedin"
                          >
                            <span className="social-linkedin">
                              <i className="fab fa-linkedin-in" />
                            </span>
                            LinkedIn
                          </a>
                        </li>
                        <li>
                          <a
                            target="blank"
                            href="https://www.instagram.com/iwebwiserindia/"
                            role="button"
                            className="btn btn-socials instagram"
                          >
                            <span className="social-instagram">
                              <i className="fab fa-instagram" />
                            </span>
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a
                            target="blank"
                            href="https://www.facebook.com/iwebwiserindia"
                            role="button"
                            className="btn btn-socials facebook"
                          >
                            <span className="social-facebook">
                              <i className="fab fa-facebook-f" />
                            </span>
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a
                            target="blank"
                            href="https://twitter.com/iwebwiser"
                            role="button"
                            className="btn btn-socials twitter"
                          >
                            <span className="social-twitter">
                              <i className="fab fa-twitter" />
                            </span>
                            Twitter
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                  {/* First Slide for footer-sm end here... */}

                  {/* Second Slide for footer-sm start here... */}
                  <button
                    className="btn title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Globle branches
                    <span>
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </button>
                  <div className="collapse" id="collapseTwo">
                    <div className="card">
                      <ul className="address-content list-unstyled">
                        {globalBranches.map((branch, index) => (
                          <li key={branch.id}>
                            <h5
                              className={
                                classes[index % classes.length].headingClass
                              }
                            >
                              {branch.title}
                            </h5>
                            <p
                              className={
                                classes[index % classes.length].textClass
                              }
                            >
                              {branch.address ? `${branch.address}, ` : ""}
                              {branch.city ? `${branch.city}, ` : ""}
                              {branch.state ? `${branch.state}, ` : ""}
                              {branch.zip_code ? `${branch.zip_code}, ` : ""}
                              {branch.country ? `${branch.country}` : ""}
                            </p>
                          </li>
                        ))}

                        <li>
                          <h5 className="footer-link">iWebwiser Pvt. Ltd.</h5>
                          <p className="footer-text mb-2">Malaysia</p>
                          <p className="footer-text mb-2">
                            Dr. Ghassan ALYafie
                          </p>
                          <p className="footer-text mb-2">Technical Advisor</p>
                          <a
                            className="btn footer-text p-0"
                            role="button"
                            href="mailto:ghassanalyafie@gmail.com"
                          >
                            Email : ghassanalyafie@gmail.com
                          </a>
                        </li>
                        <li>
                          <h5 className="footer-link">AYN Tech Pvt. Ltd.</h5>
                          <p className="footer-text mb-2">London EC2A 4NE</p>
                          <p className="footer-text mb-2">Raj Kumar Bagari</p>
                          <p className="footer-text mb-2">Founder & CEO</p>
                          <a
                            className="btn footer-text p-0"
                            role="button"
                            href="mailto:support@ayntech.co.uk"
                          >
                            Email : support@ayntech.co.uk
                          </a>
                        </li>
                      </ul>
                      {/* <ul className="address-content list-unstyled">
                        <li>
                          <h5 className="footer-link">iWebwiser Pty. Ltd.</h5>
                          <p className="footer-text footer-mb">
                            Number 18, 4009 Park, Boulevard, San Diego, 92103,
                            USA
                          </p>
                        </li>
                        <li>
                          <h5 className="footer-link">ABM IT Solutions</h5>
                          <p className="footer-text footer-mb">
                            Washington DC, USA
                          </p>
                        </li>
                        <li>
                          <h5 className="footer-link">iWebwiser Pty. Ltd.</h5>
                          <p className="footer-text footer-mb">
                            102, Stephen Dlamini Road, Musgrave, 4001 Durban,
                            South Africa
                          </p>
                        </li>
                        <li>
                          <h5 className="footer-link">
                            Digivisionary Pty. Ltd.
                          </h5>
                          <p className="footer-text">
                            Abdullah Fouad-Dammam, Housing, 31451, Dammam, Saudi
                            Arabia
                          </p>
                        </li>
                        <li>
                          <h5 className="footer-link">New Ways Pty. Ltd.</h5>
                          <p className="footer-text">United Kingdom</p>
                        </li>
                        <li>
                          <h5 className="footer-link">iWebwiser Pvt. Ltd.</h5>
                          <p className="footer-text mb-2">Malaysia</p>
                          <p className="footer-text mb-2">
                            Dr. Ghassan ALYafie
                          </p>
                          <p className="footer-text mb-2">Technical Advisor</p>
                          <a
                            className="btn footer-text p-0"
                            role="button"
                            href="mailto:ghassanalyafie@gmail.com"
                          >
                            Email : ghassanalyafie@gmail.com
                          </a>
                        </li>
                        <li>
                          <h5 className="footer-link">AYN Tech Pvt. Ltd.</h5>
                          <p className="footer-text mb-2">London EC2A 4NE</p>
                          <p className="footer-text mb-2">
                            Raj Kumar Bagari
                          </p>
                          <p className="footer-text mb-2">Founder & CEO</p>
                          <a
                            className="btn footer-text p-0"
                            role="button"
                            href="mailto:support@ayntech.co.uk"
                          >
                            Email : support@ayntech.co.uk
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                  {/* Second Slide for footer-sm end here... */}

                  {/* Third Slide for footer-sm start here... */}
                  <button
                    className="btn title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThird"
                    aria-expanded="false"
                    aria-controls="collapseThird"
                  >
                    India branches
                    <span>
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </button>
                  <div className="collapse" id="collapseThird">
                    <div className="card">
                      <ul className="address-content list-unstyled">
                        {IndiaBranches.map((branch, index) => (
                          <li key={branch.id}>
                            <h5 className="footer-link">{branch.title}</h5>
                            <p className="footer-text footer-mb">
                              {branch.address ? `${branch.address}, ` : ""}
                              {branch.city ? `${branch.city}, ` : ""}
                              {branch.state ? `${branch.state}, ` : ""}
                              {branch.zip_code ? `${branch.zip_code}, ` : ""}
                              {branch.country ? `${branch.country}` : ""}
                            </p>
                          </li>
                        ))}
                      </ul>
                      {/* <ul className="address-content list-unstyled">
                        <li>
                          <h5 className="footer-link">iWebwiser Pvt. Ltd.</h5>
                          <p className="footer-text footer-mb">
                            1-B-10 First Floor Pawan Puri Bikaner, Rajasthan,
                            India.
                          </p>
                        </li>
                        <li>
                          <h5 className="footer-link">iWebwiser Pvt. Ltd.</h5>
                          <p className="footer-text footer-mb">
                            Tilak Nagar, Ratangarh 331022 Churu, Rajasthan,
                            India.
                          </p>
                        </li>
                        <li>
                          <h5 className="footer-link">iWebwiser Pvt. Ltd.</h5>
                          <p className="footer-text footer-mb">
                            3rd Floor, Plot Number 359, PU4, 453551, Indore,
                            Madhya - Pradesh, India.
                          </p>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                  {/* Third Slide for footer-sm end here... */}
                </div>
                <div className="footer-logo d-none">
                  <div className="footer-logo-img">
                    <img src="/assets/img/Logo.svg" alt="Logo" />
                  </div>
                  <h5>Iwebwiser</h5>
                </div>
              </div>
              {/* Footer sm Screen end here... */}

              {/* Footer-Bottom links start here... */}
              <div className="col-12 px-0">
                <div className="footer-section">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-5">
                      <h5 className="footer-title">
                        © Copyright iWebwiser {year} .
                      </h5>
                    </div>
                    <div className="col-12 col-lg-7 d-none d-lg-block">
                      <ul className="list-unstyled">
                        <li className="bottom-item d-none">
                          <Link
                            href={"/graphic-and-ui-ux-design-company"}
                            as={"/graphic-and-ui-ux-design-company"}
                            className="btn footer-bottom-btn"
                          >
                            Services
                          </Link>
                        </li>
                        {/* <li className="bottom-item">
                          <Link
                            href={"/about-us"}
                            as={"/about-us"}
                            className="btn footer-bottom-btn"
                          >
                            About us
                          </Link>
                        </li> */}
                        <li className="bottom-item">
                          <Link
                            href={"/pricing"}
                            as={"/pricing"}
                            className="btn footer-bottom-btn"
                          >
                            Our pricing
                          </Link>
                        </li>
                        <li className="bottom-item d-none">
                          <Link
                            href={"/e-learning-and-education"}
                            as={"/e-learning-and-education"}
                            className="btn footer-bottom-btn"
                          >
                            Industry
                          </Link>
                        </li>
                        <li className="bottom-item d-none">
                          <Link
                            href={"/case-study-unlock-your-solutions"}
                            as={"/case-study-unlock-your-solutions"}
                            className="btn footer-bottom-btn"
                          >
                            Case study
                          </Link>
                        </li>
                        <li className="bottom-item">
                          <Link
                            href={"/career"}
                            as={"/career"}
                            className="btn footer-bottom-btn"
                          >
                            Career
                          </Link>
                        </li>
                        <li className="bottom-item">
                          <Link
                            href={"/our-portfolio"}
                            as={"/our-portfolio"}
                            className="btn footer-bottom-btn"
                          >
                            Success story
                          </Link>
                        </li>
                        <li className="bottom-item">
                          <Link
                            href={"/privacy-policy"}
                            as={"/privacy-policy"}
                            className="btn footer-bottom-btn"
                          >
                            Privacy policy
                          </Link>
                        </li>
                        <li className="bottom-item">
                          <Link
                            href={"/terms-conditions"}
                            as={"/terms-conditions"}
                            className="btn footer-bottom-btn"
                          >
                            Terms of use
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer-Bottom links end here... */}
            </div>
          </div>
        </div>
      </footer>
      {/* Footer end here... */}
    </>
  );
};

export default Footer;
