import { sendContactForm } from "@/api/ApiHelper";
import { toast } from "material-react-toastify";
import Link from "next/link";
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { Offcanvas, OffcanvasBody } from "reactstrap";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { motion, useAnimate, stagger } from "framer-motion";
import { MyImage } from "@/Utility/HomeSliderData";
import { ApiUrl, ServerUrl } from "@/Utility/ApiUrl";
import { callApi } from "@/hooks/useapi";

const Header = ({ data }) => {
  const [loadScript, setLoadScript] = useState(true);
  const [show, setShow] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show1, setShow1] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [previousMenu, setPreviousMenu] = useState("");
  const [HeaderData, setHeaderData] = useState([]);
  const [caseStudyData, setCaseStudyData] = useState([]);
  const [industryData, setIndustryData] = useState([]);
  // console.log(HeaderData)

  const fetchData = async () => {
    try {
      const res = await callApi(ApiUrl.getField);
      const caseRes = await callApi(ApiUrl.getCaseIndusty);
      const industryRes = await callApi(ApiUrl.getAllIndustry);
      const data = await res.data;
      setHeaderData(data);
      setCaseStudyData(caseRes.data);
      setIndustryData(industryRes.data.industryData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderSubheaders = (subheaders) => (
    <div className="Drop-menu">
      <div className="drop-menu-content">
        <ul className="list-unstyled">
          {subheaders.map((subheader) => (
            <li key={subheader.id}>
              <Link
                className="btn btn-link"
                role="button"
                href={subheader.link}
                as={subheader.link}
              >
                {subheader.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderExpertiseMegaMenu = (subheaders) => {
    const subheadersWithMenuHeaders = subheaders.filter(
      (subheader) => subheader.menuHeaders && subheader.menuHeaders.length > 0
    );
    const subheadersWithoutMenuHeaders = subheaders.filter(
      (subheader) =>
        !subheader.menuHeaders || subheader.menuHeaders.length === 0
    );

    return (
      <div className="Mega-menu">
        <div className="mega-menu-content mb-5">
          <div className="title-content">
            <h4 className="title">Expertise</h4>
            <p className="desc">
              iWebwiser's professional developers provide top-quality design &
              development services along with prime support services & IT
              solutions to grow your business.
            </p>
            <Link
              className="btn btn-link"
              role="button"
              href="/app-web-software-design-development-services"
              as="/app-web-software-design-development-services"
            >
              Show all expertise
            </Link>
          </div>
          <div className="our-expertise">
            {subheadersWithoutMenuHeaders.map((subheader) => (
              <div className="card" key={subheader.id}>
                <Link
                  className="subcatlink"
                  role="button"
                  href={subheader.link}
                  as={subheader.link}
                >
                  {subheader.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mega-menu-content">
          <div className="title-content">
            <h4 className="title">Services</h4>
            <ul className="megacategories">
              <li>
                <Link href="/mobile-app-development-company">
                  Mobile app development
                </Link>
              </li>
              <li>
                <Link href="/best-web-development-company">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/retail-ecommerce">E-commerce Development</Link>
              </li>
              <li>
                <Link href="/services-details">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services-details">Bespoke Development</Link>
              </li>
              <li>
                <Link href="/services-details">CRM Solutions</Link>
              </li>
            </ul>
            <Link
              className="btn btn-link"
              role="button"
              href="/app-web-software-design-development-services"
              as="/app-web-software-design-development-services"
            >
              Show all services
            </Link>
          </div>
          <div className="our-expertise">
            {subheadersWithMenuHeaders.map((subheader) => (
              <div className="card" key={subheader.id}>
                <div className="subcards">
                  <a href="#" className="subcatlink">
                    {subheader.title}
                  </a>
                  <ul className="subcategoriesnew">
                    {subheader.menuHeaders.map((menuHeader) => (
                      <li key={menuHeader.id}>
                        <Link href={menuHeader.link}>{menuHeader.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderIndustryMenu = (subheaders) => (
    <div className="Mega-menu">
      <div className="mega-menu-content">
        <div className="title-content">
          <h4 className="title">Industry level</h4>
          <ul className="megacategories">
            <li>
              <Link href="/mobile-app-development-company">
                Mobile app development
              </Link>
            </li>
            <li>
              <Link href="/best-web-development-company">
                Website Development
              </Link>
            </li>
            <li>
              <Link href="/retail-ecommerce">E-commerce Development</Link>
            </li>
            <li>
              <Link href="/services-details">Custom Software Development</Link>
            </li>
            <li>
              <Link href="/services-details">Bespoke Development</Link>
            </li>
            <li>
              <Link href="/services-details">CRM Solutions</Link>
            </li>
          </ul>
          <Link
            className="btn btn-link"
            role="button"
            href={"/e-learning-and-education"}
            as={"/e-learning-and-education"}
          >
            Show all industry
          </Link>
        </div>
        <div className="our-expertise">
          {subheaders.map((subheader) => (
            <div className="card" key={subheader.id}>
              <div className="subcards">
                <Link
                  className="subcatlink"
                  role="button"
                  href={subheader.link}
                  as={subheader.link}
                >
                  {subheader.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCaseStudyMenu = (subheaders) => (
    <div className="Mega-menu">
      <div className="mega-menu-content">
        <div className="title-content">
          <h4 className="title">Case study</h4>
          <p className="desc">
            Craft your success journey with iWebwiser look how closely we work
            with our client to unlock tailored solutions to expand our client's
            business globally.
          </p>
          <Link
            className="btn btn-link"
            role="button"
            href={"/case-study-unlock-your-solutions"}
            as={"/case-study-unlock-your-solutions"}
          >
            Show all Case study
          </Link>
        </div>
        <div className="our-expertise">
          {subheaders.map((subheader) => (
            <div className="card" key={subheader.id}>
              <div className="subcards">
                <Link
                  className="subcatlink"
                  role="button"
                  href={subheader.link}
                  as={subheader.link}
                >
                  {subheader.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  const renderMenuItem = (item) => {
    if (!item.subheaders || item.subheaders.length === 0) {
      return (
        <li className="nav-item" key={item.id}>
          <Link className="nav-link" role="button" href={item.link}>
            {item.title}
          </Link>
        </li>
      );
    }

    switch (item.title.toLowerCase()) {
      // case "home":
      //   return (
      //     <li className="nav-item" key={item.id}>
      //       <Link className="nav-link" role="button" href={item.link || "/"}>
      //         Home
      //       </Link>
      //     </li>
      //   );
      case "company":
        return (
          <li className="nav-item menu-hover position-relative" key={item.id}>
            <Link
              prefetch={true}
              className="nav-link"
              role="button"
              href={"javascript:void(0);"}
              as={"javascript:void(0);"}
            >
              Company
              <span className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                >
                  <path
                    d="M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
            {renderSubheaders(item.subheaders)}
          </li>
        );
      case "expertise / services":
        return (
          <li className="nav-item menu-hover" key={item.id}>
            <Link
              className="nav-link"
              role="button"
              href="javascript:void(0);"
              as="javascript:void(0);"
            >
              Expertise / Services
              <span className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                >
                  <path
                    d="M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
            {renderExpertiseMegaMenu(item.subheaders)}
          </li>
        );
      case "industry":
        return (
          <li className="nav-item menu-hover" key={item.id}>
            <Link
              className="nav-link"
              role="button"
              href="javascript:void(0);"
              as="javascript:void(0);"
            >
              Industry
              <span className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                >
                  <path
                    d="M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
            {renderIndustryMenu(item.subheaders)}
          </li>
        );
      case "case study":
        return (
          <li className="nav-item menu-hover" key={item.id}>
            <Link
              className="nav-link"
              role="button"
              href="javascript:void(0);"
              as="javascript:void(0);"
            >
              Case study
              <span className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                >
                  <path
                    d="M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
            {renderCaseStudyMenu(item.subheaders)}
          </li>
        );
      // case "Reach us":
      //   return (
      //     <li className="nav-item" key={item.id}>
      //       <Link
      //         className="nav-link"
      //         role="button"
      //         href={"/contact-us"}
      //         as={"/contact-us"}
      //       >
      //         Reach us
      //       </Link>
      //     </li>
      //   );
      default:
        return null;
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  const Expertise = [
    {
      name: "Design and development",
      path: "/software-design-and-development-company",
      as: "/software-design-and-development-company",
    },
    {
      name: "Strategic Marketing",
      path: "/strategic-marketing",
      as: "/strategic-marketing",
    },
    {
      name: "Support services",
      path: "/support-and-services",
      as: "/support-and-services",
    },
    { name: "Solutions", path: "/our-solutions", as: "/our-solutions" },
  ];

  const Company = [
    // { name: "About us", path: "/about-us", as: "/about-us" },
    { name: "Our Company", path: "/our-company", as: "/our-company" },
    {
      name: "Partnership & Certifications",
      path: "/partnership",
      as: "/partnership",
    },
    { name: "Career", path: "/career", as: "/career" },
  ];

  const Industrylevel = [
    {
      name: "E-Learning & Education",
      path: "/e-learning-and-education",
      as: "/e-learning-and-education",
    },
    {
      name: "Healthcare & Lifestyle",
      path: "/healthcare-and-lifestyle",
      as: "/healthcare-and-lifestyle",
    },
    { name: "RealEstate", path: "/real-estate", as: "/real-estate" },
    {
      name: "Tour & Travels",
      path: "/tour-and-travel",
      as: "/tour-and-travel",
    },
    {
      name: "Retail & eCommerce",
      path: "/retail-ecommerce",
      as: "/retail-ecommerce",
    },
  ];

  const Services = [
    {
      name: "Mobile app development",
      path: "/mobile-app-development-company",
      as: "/mobile-app-development-company",
    },
    {
      name: "Designs",
      path: "/graphic-and-ui-ux-design-company",
      as: "/graphic-and-ui-ux-design-company",
    },
    {
      name: "Digital Marketing",
      path: "/digital-marketing-services-company",
      as: "/digital-marketing-services-company",
    },
    {
      name: "Web development",
      path: "/best-web-development-company",
      as: "/best-web-development-company",
    },
    {
      name: "Blockchain development",
      path: "/blockchain-development-services",
      as: "/blockchain-development-services",
    },
  ];

  const SuccessStory = [
    { name: "Portfolio", path: "/our-portfolio", as: "/our-portfolio" },
    {
      name: "Case study",
      path: "/case-study-unlock-your-solutions",
      as: "/case-study-unlock-your-solutions",
    },
    {
      name: "Testimonials",
      path: "/iwebwiser-testimonials-your-trust",
      as: "/iwebwiser-testimonials-your-trust",
    },
  ];

  const toggle = () => {
    if (show1 == true) {
      setShow1(false);
    }
    setShow(!show);
    // console.log("fdsdffdf");
  };
  const toggle1 = () => {
    setShow1(!show1);
    // console.log("11111111111");
  };
  const toggleModal = () => {
    setShowModal(!showModal);
    // console.log("11111111111");
  };

  useEffect(() => {
    document.getElementById("headerTogglebtn").classList.add("hideMenu");
    const script = document.createElement("script");
    const script1 = document.createElement("script");
    // const script2 = document.createElement("script");
    // const script3 = document.createElement("script");
    // const link3 = document.createElement("link");

    script.src = `./assets/slick-1.8.1/slick/slick.js`;
    script.async = true;
    script1.src = `./assets/js/Iwebwiser.js`;
    script1.async = true;
    // script2.src type="text/javascript" = `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js`;
    // script2.async = true;
    // script3.src type="text/javascript" = `https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.min.js`;
    // script3.async = true;
    // link3.src = `https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.css`;
    // link3.async = true;

    document.body.appendChild(script);
    document.body.appendChild(script1);
    // document.body.appendChild(script2);
    // document.body.appendChild(script3);
    // document.head.appendChild(link3);

    return () => {
      if (loadScript) {
        document.body.removeChild(script);
        document.body.removeChild(script1);
        // document.body.removeChild(script2);
        // document.body.removeChild(script3);
        // document.head.removeChild(link3);
        setLoadScript(false);
      }
    };
  }, []);

  const Handletoggle = (e) => {
    if (show1 && previousMenu !== e) {
      document.getElementById(`${previousMenu}`).classList.toggle("active");
    } else {
      toggle1();
    }

    switch (e) {
      case "Expertise":
        setMenuData({
          type: "expertise",
          data: HeaderData
        });
        document.getElementById("Expertise").classList.toggle("active");
        break;
      case "Industry":
        setMenuData({
          type: "industry",
          data: industryData
        });
        document.getElementById("Industry").classList.toggle("active");
        break;
      case "CaseStudy":
        setMenuData({
          type: "casestudy",
          data: caseStudyData?.filter(item => item.caseStudies?.length > 0)
        });
        document.getElementById("CaseStudy").classList.toggle("active");
        break;
      case "Company":
        setMenuData({
          type: "company",
          data: [
            { name: "Our Company", path: "/our-company" },
            { name: "Partnership & Certifications", path: "/partnership" },
            { name: "Testimonials", path: "/iwebwiser-testimonials-your-trust" },
            { name: "Portfolio", path: "/our-portfolio" },
          ]
        });
        document.getElementById("Company").classList.toggle("active");
        break;
    }
    setPreviousMenu(e);
  };

  const handleLinkCheck = (e) => {
    if (e == location.pathname) {
      setShow(!show);
      setShow1(false);
    }
  };

  const handleContactForm = (data) => {
    setLoading(true);
    sendContactForm(data).then((response) => {
      if (response.status == true) {
        setLoading(false);
        reset({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        toggleModal();
        toast.success("Thankyou I will reach soon");
      } else {
        setLoading(false);
        console.log("err");
      }
    });
  };

  const Path = (props) => (
    <path
      fill="#ffffff"
      strokeWidth="2"
      stroke="#ffffff"
      strokeLinecap="round"
      // width={"18px"}
      // height={"18px"}
      {...props}
    />
  );

  const renderMobileSubMenu = () => {
    switch (menuData?.type) {
      case "expertise":
        return (
          <>
            <div className="submenu-section">
              <h4>Expertise</h4>
              <ul className="list-unstyled header-submenu-list">
                {HeaderData?.map((item) => (
                  <li className="submenu-item" key={item.id}>
                    <Link
                      className="submenu-link"
                      href={`/expertise/${item?.slug || ""}`}
                      onClick={() => {
                        setShow(false);
                        setShow1(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="submenu-section">
              <h4>Services</h4>
              <ul className="list-unstyled header-submenu-list">
                {HeaderData?.map((item) =>
                  item.services?.map((service) => (
                    <li className="submenu-item" key={service.id}>
                      <Link
                        className="submenu-link"
                        href={`/services-details/${service?.service_detail?.slug || ""}`}
                        onClick={() => {
                          setShow(false);
                          setShow1(false);
                        }}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </>
        );
      case "industry":
        return (
          <ul className="list-unstyled header-submenu-list">
            {industryData?.map((item) => (
              <li className="submenu-item" key={item.id}>
                <Link
                  className="submenu-link"
                  href={`/our-industries/${item?.industry_page?.slug || ""}`}
                  onClick={() => {
                    setShow(false);
                    setShow1(false);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        );
      case "casestudy":
        return (
          <ul className="list-unstyled header-submenu-list">
            {caseStudyData?.filter(item => item.caseStudies?.length > 0)
              .map((item) => (
                <li className="submenu-item" key={item.id}>
                  <Link
                    className="submenu-link"
                    href={`/case-study/${item.caseStudies[0]?.slug || ""}`}
                    onClick={() => {
                      setShow(false);
                      setShow1(false);
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Header content start here... */}
      <header className="Header fixed-top" id="navbar">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
            exit: { opacity: 0, y: -100 },
          }}
          initial="hidden"
          animate={"visible"}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-content-width"
        >
          {/* Navbar container start here... */}
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" href={"/"}>
                <img src="/assets/img/Logo.svg" alt="Logo" />
              </Link>
              <button
                id="headerTogglebtn"
                className={
                  show
                    ? "btn Menu-navbar-toggler toggler-open"
                    : "btn Menu-navbar-toggler"
                }
                type="button"
                onClick={toggle}
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg viewBox="0 0 32 32">
                  <path
                    class="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path class="line" d="M7 16 27 16"></path>
                </svg>
                Menu
              </button>
              {/* Navbar links start here... */}
              <div className="header-nav" id="headerNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" role="button" href={"/"}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item menu-hover position-relative">
                    <Link
                      prefetch={true}
                      className="nav-link"
                      role="button"
                      href={"javascript:void(0);"}
                      as={"javascript:void(0);"}
                    >
                      Company
                      <span className="nav-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="9"
                          viewBox="0 0 15 9"
                          fill="none"
                        >
                          <path
                            d="M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </Link>

                    <div className="Drop-menu">
                      <div className="drop-menu-content">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="btn btn-link"
                              role="button"
                              href={"/our-company"}
                              as={"/our-company"}
                            >
                              Our Company
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="btn btn-link"
                              role="button"
                              href={"/partnership"}
                              as={"/partnership"}
                            >
                              Partnership & Certifications
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="btn btn-link"
                              role="button"
                              href={"/iwebwiser-testimonials-your-trust"}
                              as={"/iwebwiser-testimonials-your-trust"}
                            >
                              Testimonials
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="btn btn-link"
                              role="button"
                              href={"/iwebwiser-testimonials-your-trust"}
                              as={"/iwebwiser-testimonials-your-trust"}
                            >
                              Portfolio
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item menu-hover">
                    <Link
                      className="nav-link"
                      role="button"
                      href={"javascript:void(0);"}
                      as={"javascript:void(0);"}
                    >
                      Expertise / Services
                      <span className="nav-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="9"
                          viewBox="0 0 15 9"
                          fill="none"
                        >
                          <path
                            d="M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </Link>

                    <div className="Mega-menu">
                      <div className="mega-menu-content mb-5">
                        <div className="title-content">
                          <h4 className="title">Experties</h4>
                          <p className="desc">
                            iWebwiser's professional developers provide
                            top-quality design & development services along with
                            prime support services & IT solutions to grow your
                            business.
                          </p>
                          <Link
                            className="btn btn-link"
                            role="button"
                            href={
                              "/app-web-software-design-development-services"
                            }
                            as={"/app-web-software-design-development-services"}
                          >
                            Show all expertise
                          </Link>
                        </div>
                        <div className="our-expertise">
                          {/* <div className="card">

                            <Link
                              className="subcatlink"
                              role="button"
                              href={"/strategic-marketing"}
                              as={"/strategic-marketing"}
                            >
                              Digital Marketing Services
                            </Link>
                          </div>
                          <div className="card">

                            <Link
                              className="subcatlink"
                              role="button"
                              href={"/software-design-and-development-company"}
                              as={"/software-design-and-development-company"}
                            >
                              Design & Development
                            </Link>
                          </div>

                          <div className="card">

                            <Link
                              className="subcatlink"
                              role="button"
                              href={"/support-and-services"}
                              as={"/support-and-services"}
                            >
                              Support Service
                            </Link>
                          </div>
                          <div className="card">

                            <Link
                              className="subcatlink"
                              role="button"
                              href={"/our-solutions"}
                              as={"/our-solutions"}
                            >
                              Solutions & Service
                            </Link>
                          </div> */}
                          {HeaderData?.map((item) => {
                            return (
                              <div className="card" key={item.id}>
                                <Link
                                  className="subcatlink"
                                  // role="button"
                                  href={`/expertise/${item?.slug || ""}`}
                                  as={`/expertise/${item?.slug || ""}`}
                                >
                                  {item.title}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="mega-menu-content">
                        <div className="title-content">
                          <h4 className="title">Services</h4>
                          <ul className="megacategories">
                            {HeaderData?.map((item) => {
                              return (
                                <li>
                                  {item?.services?.slice(0, 5).map((megaMenu) => (
                                    <li key={item?.id}>
                                      <Link
                                        // role="button"
                                        href={
                                          `services-details/${megaMenu?.service_detail?.slug}` ||
                                          "/"
                                        }
                                        as={megaMenu.link}
                                      >
                                        {megaMenu.title}
                                      </Link>
                                    </li>
                                  ))}
                                </li>
                              );
                            })}
                          </ul>
                          <Link
                            className="btn btn-link"
                            role="button"
                            href={
                              "/app-web-software-design-development-services"
                            }
                            as={"/app-web-software-design-development-services"}
                          >
                            Show all services
                          </Link>
                        </div>
                        {/* <div className="our-expertise">
                          <div className="card">
                            <div className="subcards">
                              <a href="#" className="subcatlink">
                                Design development
                              </a>
                              <ul className="subcategoriesnew">
                                <li>
                                  <Link href="/services-details">
                                    Mobile app development
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details">
                                    Website Development
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details">
                                    UI & UX Figma Design
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card">
                            <div className="subcards">
                              <a href="#" className="subcatlink">
                                Digital marketing
                              </a>
                              <ul className="subcategoriesnew">
                                <li>
                                  <Link href="/services-details">
                                    SEO Service
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details">
                                    SMM Service
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details">
                                    Paid Media
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details">
                                    Email Marketing
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="card">
                            <div className="subcards">
                              <a href="#" className="subcatlink">
                                Custom software solution
                              </a>
                              <ul className="subcategoriesnew">
                                <li>
                                  <Link href="/services-details">
                                    Mobile app development
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details">Designs</Link>
                                </li>
                                <li>
                                  <Link href="/services-details">
                                    Digital Marketing
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details">
                                    Software Development
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card">
                            <div className="subcards">
                              <a href="#" className="subcatlink">
                                Support Services
                              </a>
                              <ul className="subcategoriesnew">
                                <li>
                                  <Link href="/services-details">
                                    Mobile app development
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details">Designs</Link>
                                </li>
                                <li>
                                  <Link href="/services-details">
                                    Digital Marketing
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details">
                                    Software Development
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div> */}
                        <div className="our-expertise">
                          {HeaderData?.map((item) => {
                            return (
                              <div className="card" key={item.id}>
                                <div className="subcards">
                                  <a
                                    className="subcatlink"
                                    // role="button"
                                    href={"#"}
                                  >
                                    {item.title}
                                  </a>
                                  <ul className="subcategoriesnew">
                                    {item?.services?.map((megaMenu) => (
                                      <li key={item?.id}>
                                        <Link
                                          // role="button"
                                          href={
                                            `services-details/${megaMenu?.service_detail?.slug}` ||
                                            "/"
                                          }
                                          as={megaMenu.link}
                                        >
                                          {megaMenu.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item menu-hover">
                    <Link
                      className="nav-link"
                      role="button"
                      href={"javascript:void(0);"}
                      as={"javascript:void(0);"}
                    >
                      Industry
                      <span className="nav-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="9"
                          viewBox="0 0 15 9"
                          fill="none"
                        >
                          <path
                            d="M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </Link>

                    <div className="Mega-menu">
                      <div className="mega-menu-content">
                        <div className="title-content">
                          <h4 className="title">Industry level</h4>
                          <ul className="megacategories">
                                          {HeaderData?.map((item) => {
                              return (
                                <li>
                                  {item?.services?.slice(0, 5).map((megaMenu) => (
                                    <li key={item?.id}>
                                      <Link
                                        // role="button"
                                        href={
                                          `services-details/${megaMenu?.service_detail?.slug}` ||
                                          "/"
                                        }
                                        as={megaMenu.link}
                                      >
                                        {megaMenu.title}
                                      </Link>
                                    </li>
                                  ))}
                                </li>
                              );
                            })}
                          </ul>
                          <Link
                            className="btn btn-link"
                            role="button"
                            href={"/our-industries"}
                            as={"/our-industries"}
                          >
                            Show all industry
                          </Link>
                        </div>
                        <div className="our-expertise">
                          {industryData?.map((item) => {
                            return (
                              <div className="card" key={item.id}>
                                <div className="subcards">
                                  <Link
                                    className="subcatlink"
                                    // role="button"
                                    href={`/our-industries/${item?.industry_page?.slug}`}
                                    as={`/our-industries/${item?.industry_page?.slug}`}
                                  >
                                    {item.title}
                                  </Link>
                                </div>
                              </div>
                            );
                          })}

                          {/* <div className="card">
                            <div className="subcards">
                              <a href="#" className="subcatlink">
                                healthcare
                              </a>
                            </div>
                          </div>
                          <div className="card">
                            <div className="subcards">
                              <a href="#" className="subcatlink">
                                Education
                              </a>
                            </div>
                          </div>
                          <div className="card">
                            <div className="subcards">
                              <a href="#" className="subcatlink">
                                E-commerce
                              </a>
                            </div>
                          </div>
                          <div className="card">
                            <div className="subcards">
                              <a href="#" className="subcatlink">
                                Real-estate
                              </a>
                            </div>
                          </div>
                          <div className="card">
                            <div className="subcards">
                              <a href="#" className="subcatlink">
                                logistics
                              </a>
                            </div>
                          </div>
                          <div className="card">
                            <div className="subcards">
                              <a href="#" className="subcatlink">
                                Chatbot and AI
                              </a>
                            </div>
                          </div>
                          <div className="card">
                            <div className="subcards">
                              <a href="#" className="subcatlink">
                                Entertainment and Social Media
                              </a>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item menu-hover">
                    <Link
                      className="nav-link"
                      role="button"
                      href={"javascript:void(0);"}
                      as={"javascript:void(0);"}
                    >
                      Case study
                      <span className="nav-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="9"
                          viewBox="0 0 15 9"
                          fill="none"
                        >
                          <path
                            d="M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </Link>

                    <div className="Mega-menu">
                      <div className="mega-menu-content">
                        <div className="title-content">
                          <h4 className="title">Case study</h4>
                          <p className="desc">
                            Craft your success journey with iWebwiser look how
                            closely we work with our client to unlock tailored
                            solutions to expand our client's business globally.
                          </p>
                          <Link
                            className="btn btn-link"
                            role="button"
                            href={"/case-study-unlock-your-solutions"}
                            as={"/case-study-unlock-your-solutions"}
                          >
                            Show all Case study
                          </Link>
                        </div>
                        <div className="our-expertise">
                          {caseStudyData
                            ?.filter(
                              (item) =>
                                item.caseStudies && item.caseStudies.length > 0
                            )
                            .map((item, index) => {
                              // Pick a random case study
                              const randomCaseStudy =
                                item.caseStudies[
                                  Math.floor(
                                    Math.random() * item.caseStudies.length
                                  )
                                ];

                              return (
                                <div className="card" key={index}>
                                  <div className="subcards">
                                    <Link
                                      href={
                                        randomCaseStudy?.slug
                                          ? `/case-study/${randomCaseStudy.slug}`
                                          : "#"
                                      }
                                      className="subcatlink"
                                    >
                                      {item?.title}
                                    </Link>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      role="button"
                      href={"/contact-us"}
                      as={"/contact-us"}
                    >
                      Reach us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn nav-link join-team"
                      role="button"
                      href={"/career"}
                      as={"/career"}
                    >
                      Career With Us
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Navbar links end here... */}
            </div>
          </nav>
          {/* Navbar container end here... */}
        </motion.div>
      </header>
      {/* contact pop-up start here... */}
      {/* contact pop-up button start here... */}
      <button type="button" className="btn btn-contact" onClick={toggleModal}>
        <span>
          <i className="fas fa-headset"></i>
        </span>
      </button>
      {/* contact pop-up button end here... */}
      {/* contact pop-up Modal start here... */}
      <Modal
        isOpen={showModal}
        centered
        toggle={toggleModal}
        className={"contact-modal"}
        style={{ zIndex: 1300 }}
      >
        <ModalHeader toggle={toggleModal}>Let us chat with you</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(handleContactForm)}>
            <div className="contact-form">
              <div className="contact-field">
                <label for="NameInput" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="NameInput"
                  placeholder="John Doe"
                  {...register("name", {
                    required: "Field is required",
                  })}
                />
                <p className="mb-0 text-danger">{errors?.name?.message}</p>
              </div>
              <div className="contact-field">
                <label for="EmailInput" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  {...register("email", {
                    required: "Field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="JohnDoe@gmail.com"
                />
                <p className="mb-0 text-danger">{errors?.email?.message}</p>
              </div>
              <div className="contact-field">
                <label for="PhoneInput" className="form-label">
                  Phone
                </label>
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
                <p className="mb-0 text-danger">{errors?.phone?.message}</p>
              </div>
              <div className="contact-field">
                <label for="TextInput" className="form-label">
                  How can we Help ?
                </label>
                <textarea
                  className="form-control"
                  id="TextInput"
                  rows="3"
                  {...register("message", {
                    required: "Field is required",
                  })}
                  placeholder="Anything at all..."
                ></textarea>
                <p className="mb-0 text-danger">{errors?.message?.message}</p>
              </div>
            </div>
            <div className="modal-footer-btn">
              <button type="submit" className="btn btn-submit">
                {loading == true ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
      {/* contact pop-up Modal end here... */}
      {/* contact pop-up end here... */}
      {/* Header content end here... */}
      {/* Header Menu Offcanvas start here... */}
      <Offcanvas className="Header-menubar" direction="start" isOpen={show}>
        {/* <OffcanvasHeader toggle={() => toggle()}>
              Avaiable Slots for doctors
            </OffcanvasHeader> */}
        <OffcanvasBody className="header-menu-content">
          <ul className="list-unstyled">
            <li className="list-item">
              <Link
                href={"/"}
                as={"/"}
                className="btn btn-header-link"
                onClick={() => handleLinkCheck("/")}
              >
                <span>Home</span>
              </Link>
            </li>
            <li className="list-item dropdown" id="Company">
              <a
                className="btn btn-header-link"
                href="javascript:void(0)"
                onClick={() => Handletoggle("Company")}
              >
                <span>Company</span>
              </a>
            </li>
            <li className="list-item dropdown" id="Expertise">
              <a
                className="btn btn-header-link"
                role="button"
                onClick={() => Handletoggle("Expertise")}
              >
                <span>Expertise / Services</span>
              </a>
            </li>
            <li className="list-item dropdown" id="Industry">
              <a
                className="btn btn-header-link"
                href="javascript:void(0)"
                onClick={() => Handletoggle("Industry")}
              >
                <span>Industry</span>
              </a>
            </li>
            <li className="list-item dropdown" id="CaseStudy">
              <a
                className="btn btn-header-link"
                href="javascript:void(0)"
                onClick={() => Handletoggle("CaseStudy")}
              >
                <span>Case Study</span>
              </a>
            </li>
            <li className="list-item">
              <Link
                href={"/contact-us"}
                as={"/contact-us"}
                className="btn btn-header-link"
                onClick={() => handleLinkCheck("/contact-us")}
              >
                <span>Reach us</span>
              </Link>
            </li>
          </ul>
        </OffcanvasBody>
      </Offcanvas>
      {/* Header Menu Offcanvas end here... */}
      {/* Header Menu Offcanvas Submenu-cotent offcanvas start here... */}
      <div className={show1 ? "Header-Submenubar isOpen" : "Header-Submenubar"}>
        <div className="header-submenu-content">
          {renderMobileSubMenu()}
        </div>
      </div>
      {/* Header Menu Offcanvas Submenu-cotent offcanvas end here... */}
    </>
  );
};

export default Header;

// const Handletoggle = () => {
// setTimeout(() => {
//   document.getElementById("Menucontentoffcanvas").classList.add("show");
// }, 500);
// document.getElementById("sideToggle").classList.toggle("active");
// if ($("#sideToggle1").hasClass("active")) {
//   console.log("jhgfdfghjkl;lkjhvcvbnm,");
//   document.getElementById("sideToggle1").classList.toggle("active");
// }
// if ($("#Submenu-offcanvas-2").hasClass("show")) {
//   console.log("kjhgfghjklkjhggh");
//   document.getElementById("Submenu-offcanvas-2").classList.toggle("show");
// }
