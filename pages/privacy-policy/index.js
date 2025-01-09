import Layout from "@/Components/Common/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = (props) => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="keywords" content="Securing Trust: Our Privacy & Policy | iWebwiser" />
        <meta name="description" content="iWebwiser has got your back when it comes to privacy. Read our easy-to-understand privacy policy and find out the rules we apply to keep your data secure." />
        <link rel="canonical" href="https://www.iwebwiser.com/privacy-policy"/> 
        <meta name="robots" content="index, follow"/>
      </Head>
      <Layout>
        {/* Privacy&Policy-Home-section start here... */}
        <section className="experties-home">
          <div className="max-content-width">
            <div className="experties-home-bg">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 75 },
                }}
                initial="hidden"
                animate={"visible"}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4>Privacy &amp; Policy</h4>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Privacy&Policy-Home-section end here... */}

        {/* Privacy & Policy content start here... */}
        <section className="policy-content">
          <div className="max-content-width">
            <p className="para-1">
              Welcome to our iWebwiser. If you continue to browse and use this
              website, you are agreeing to comply with and be bound by the
              following terms and conditions of use, which together with our
              privacy policy govern iWebwiser Ltd’s relationship with you in
              relation to this website. If you disagree with any part of these
              terms and conditions, please do not use our website.
            </p>
            <ul className="main-list">
              <li>
                <p>
                  iWebwiser understands that your privacy is important to you
                  and that you care about how your information is used and
                  shared online. We will only collect and use information in
                  ways that are useful to you and in a manner consistent with
                  your rights and Our obligations under the law.
                </p>
              </li>
              <li>
                <p>
                  This Notice applies to Our use of any and all data collected
                  by us in relation to your use of Our Site. Please read this
                  Privacy Notice carefully and ensure that you understand it.
                  Your acceptance of Our Privacy Notice is deemed to occur upon
                  your first use of Our Site AND/OR You will be required to read
                  and accept this Privacy Notice when signing up for an Account
                  or giving confirmation for your data to be used. If you do not
                  accept and agree with this Privacy Notice, you must stop using
                  Our Site immediately.
                </p>
                <ul className="short-list">
                  <li>
                    <h5>Definitions and Interpretation</h5>
                    <ul className="small-list">
                      <li>
                        <p>
                          In this Notice the following terms shall have the
                          following meanings:“Account”
                        </p>
                      </li>
                      <li>
                        <p>
                          means an account required to access and/or use certain
                          areas and features of Our Site, such as the DSProjects
                          online project management system;“Cookie”
                        </p>
                      </li>
                      <li>
                        <p>
                          means a small text file placed on your computer or
                          device by Our Site when you visit certain parts of Our
                          Site and/or when you use certain features of Our Site
                        </p>
                      </li>
                      <li>
                        <p>
                          Details of the Cookies used by Our Site are set out in
                          section 12, below;“Our Site”
                        </p>
                      </li>
                      <li>
                        <p>
                          means this website,
                          <Link
                            target="blank"
                            className="btn btn-link"
                            role="button"
                            href={"https://iwebwiser.com/"}
                          >
                            www.iWebwiser.com
                          </Link>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>Information About Us</h5>
                    <ul className="small-list">
                      <li>
                        <p>
                          Our Site, www.iWebwiser.com, is owned by iWebwiser
                          Ltd, a limited company registered in India under
                          Companies Act, 1956, whose registered address is 1-B
                          10, PAWANPURI, BIKANER, INDIA.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>Scope – What Does This Notice Cover?</h5>
                    <ul className="small-list">
                      <li>
                        <p>
                          This Privacy Notice applies only to your use of Our
                          Site. This will apply to all iWebwiser Group websites
                          also as referred to below. It does not extend to any
                          websites that are linked to from Our Site (whether We
                          provide those links or whether they are shared by
                          other users). We have no control over how your data is
                          collected, stored or used by other websites and We
                          advise you to check the privacy Notices of any such
                          websites before providing any data to them.
                        </p>
                        <p>
                          This Privacy Notice will only apply to
                          www.iWebwiser.com. The Notice does not extend to cover
                          any site linked to or from this site. We would
                          strongly advise you to check if, how and why your data
                          may be collected and /or stored by them.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>What Data Do We Collect?</h5>
                    <ul className="small-list">
                      <li>
                        <p>
                          Data collected from the site will be done
                          automatically (please see section on use of cookies),
                          whilst other data will only be collected if you
                          voluntarily submit it or opt in for it to be used (an
                          example of this would be our Security Updates). To
                          keep you informed we may collect some or all of the
                          following data:
                        </p>
                        <ul className="small-short">
                          <li>
                            <p>Name</p>
                          </li>
                          <li>
                            <p>Email Address</p>
                          </li>
                          <li>
                            <p>Business/Company Name</p>
                          </li>
                          <li>
                            <p>Contact Phone Number</p>
                          </li>
                          <li>
                            <p>Project Details</p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>How Do We Use Your Data?</h5>
                    <ul className="small-list">
                      <li>
                        <p>
                          All personal data is stored securely in accordance
                          with the principles of the General Data Protection
                          Regulation (GDPR) as approved by the EU Parliament on
                          14 April 2016 and enforced from 25 May 2018. For more
                          details on security see section 6, below.
                        </p>
                      </li>
                      <li>
                        <p>
                          We use your data to provide the best possible service
                          to you. This includes:
                        </p>
                      </li>
                      <li>
                        <p>
                          Keeping you up to date on the progress of the enquiry
                          you made to us;
                        </p>
                      </li>
                      <li>
                        <p>
                          Keeping you up to date on services relating to this
                          enquiry (such as Security Patches, core technology (eg
                          PHP version) updates, newer plugins etc.)
                        </p>
                      </li>
                      <li>
                        <p>
                          Marketing that we feel is relevant to both your known
                          technologies (that we may have worked on) and industry
                        </p>
                      </li>
                      <li>
                        <p>Supplying Our services to you</p>
                      </li>
                      <li>
                        <p>
                          Personalising and tailoring Our products and services
                          for you
                        </p>
                      </li>
                      <li>
                        <p>
                          Supplying news on offers and discounts that may be
                          available from time to time
                        </p>
                      </li>
                      <li>
                        <p>
                          Supplying you with email newsletters that you have
                          subscribed to (you may unsubscribe or opt-out at any
                          time).
                        </p>
                      </li>
                      <li>
                        <p>
                          Analysing your use of Our Site and gathering feedback
                          to enable Us to continually improve Our Site and your
                          user experience.
                        </p>
                      </li>
                      <li>
                        <p>
                          11. With your permission and/or were permitted by law,
                          we may also use your data for marketing purposes which
                          may include contacting you by email AND/OR telephone
                          AND/OR text message AND/OR post with information, news
                          and offers on Our products AND/OR services. We will
                          not, however, send you any unsolicited marketing or
                          spam and will take all reasonable steps to ensure that
                          We fully protect your rights and comply with Our
                          obligations under the Data Protection Act 1998 and the
                          Privacy and Electronic Communications (EC Directive)
                          Regulations 2003, as amended in 2004, 2011 and 2015.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>How and Where Do We Store Your Data?</h5>
                    <ul className="small-list">
                      <li>
                        <p>
                          We only keep your data for as long as We need to in
                          order to use it as described above in section 5,
                          and/or for as long as We have your permission to keep
                          it. You can request to review, edit or delete your
                          data at any time.
                        </p>
                      </li>
                      <li>
                        <p>
                          We value data security very seriously and to protect
                          your data we have put in place several physical and
                          electronic measures to safeguard data collected by the
                          site whilst you are visiting.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>Do We Share Your Data?</h5>
                    <ul className="small-list">
                      <li>
                        <p>
                          We may share your data with members of iWebwiser
                          Group. This includes allTeam’s and all iWebwiser
                          branches, We take your security seriously so will be
                          making every reasonable effort to ensure that if data
                          needs to be shared with any third party, that the data
                          will be handled safely, securely and in accordance
                          with your rights.
                        </p>
                      </li>
                      <li>
                        <p>
                          We may compile statistics about the use of Our Site
                          including data on traffic, usage patterns, user
                          numbers, sales and other information. All such data
                          will be anonymised and will not include any personally
                          identifying information. We may from time to time
                          share such data with third parties such as prospective
                          investors, affiliates, partners and advertisers. Data
                          will only be shared and used within the bounds of the
                          law.
                        </p>
                      </li>
                      <li>
                        <p>
                          In certain circumstances We may be legally required to
                          share certain data held by Us, which may include your
                          personal information, for example, where We are
                          involved in legal proceedings, where We are complying
                          with the requirements of legislation, a court order,
                          or a governmental authority. We do not require any
                          further approval from you in order to share your data
                          in such circumstances and will comply as required with
                          any legally binding request that is made of INDIA.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>What Happens If Our Business Changes Hands?</h5>
                    <ul className="small-list">
                      <li>
                        <p>
                          It is possible that we could expand or reduce Our
                          business and this may involve the sale and/or the
                          transfer of control of all or part of Our business.
                          Data provided by users will, where it is relevant to
                          any part of Our business so transferred, be
                          transferred along with that part and the new owner or
                          newly controlling party will, under the terms of this
                          Privacy Notice, be permitted to use the data for the
                          purposes for which it was originally collected by Us.
                        </p>
                      </li>
                      <li>
                        <p>
                          In the event that any of your data is to be
                          transferred in such a manner, you will not be
                          contacted in advance and informed of the changes.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>How Can You Control Your Data?</h5>
                    <ul className="small-list">
                      <li>
                        <p>
                          When your information is submitted through the site
                          you may be given options on how to control or restrict
                          your data. Our stated aim is to give you control over
                          how we can use your data for direct marketing purposes
                          (this includes the ability to opt out of receiving
                          emails by the links provided).
                        </p>
                      </li>
                      <li>
                        <p>
                          You may also wish to sign up to one or more of the
                          preference services operating in the INDIA : The
                          Telephone Preference Service (“the TPS”), the
                          Corporate Telephone Preference Service (“the CTPS”),
                          and the Mailing Preference Service (“the MPS”). These
                          may help to prevent you receiving unsolicited
                          marketing. Please note, however, that these services
                          will not prevent you from receiving marketing
                          communications that you have approved to receiving.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>Your Right to With hold Information</h5>
                    <ul className="small-list">
                      <li>
                        <p>
                          Most areas of the site are accessible without the need
                          to submit any information at all. However some areas
                          of the site will be username and password protected
                          and will require you to submit data.
                        </p>
                      </li>
                      <li>
                        <p>
                          You may restrict your internet browser’s use of
                          Cookies. For more information, see section 12.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>How Can You Access Your Data? </h5>
                    <p>
                      You have the legal right to ask for a copy of any of your
                      personal data held by us. To access, edit or delete your
                      data please contact the links provided or email to
                      <Link
                        className="btn btn-link"
                        role="button"
                        href={"mailto:iWebwiserinfo@gmail.com"}
                      >
                        info@iWebwiser.com
                      </Link>
                    </p>
                  </li>
                  <li>
                    <h5>What Cookies Do We Use and What For?</h5>
                    <p>
                      Our Site may place and access certain first party Cookies
                      on your computer or device. First party Cookies are those
                      placed directly by Us and are used only by Us. We use
                      Cookies to facilitate and improve your experience of Our
                      Site and to provide and improve Our products and services.
                      By using Our Site you may also receive certain third party
                      Cookies on your computer or device. Third party Cookies
                      are those placed by websites, services, and/or parties
                      other than Us. We use third party Cookies on Our Site for
                      analytics services. Our Site uses analytics services
                      provided by Google Analytics, which also use Cookies.
                      Website analytics refers to a set of tools used to collect
                      and analyse usage statistics, enabling Us to better
                      understand how people use Our Site.
                    </p>
                  </li>
                  <li>
                    <h5>Contacting Us </h5>
                    <p>
                      If you have any questions about Our Site or this Privacy
                      Notice, please contact Us by email at
                      <Link
                        className="btn btn-link"
                        role="button"
                        href={"mailto:iWebwiserinfo@gmail.com"}
                      >
                        info@iWebwiser.com.
                      </Link>
                      Please ensure that your query is clear, particularly if it
                      is a request for information about the data We hold about
                      you (as under section 11, above).
                    </p>
                  </li>
                  <li>
                    <h5>What Cookies Do We Use and What For? </h5>
                    <p>
                      We may change this Privacy Notice as we may deem necessary
                      from time to time, or as may be required by law. Any
                      changes will be immediately posted on Our Site and you
                      will be deemed to have accepted the terms of the Privacy
                      Notice on your first use of Our Site following the
                      alterations. We recommend that you check this page
                      regularly to keep up-to-date.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        {/* Privacy & Policy content end here... */}
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
