import Layout from "@/Components/Common/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const TermsCondition = (props) => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="keywords" content="Service Agreement | Terms and Conditions - iWebwiser" />
        <meta name="description" content="Explore our terms & conditions to understand your rights and responsibilities. Stay informed about our service terms and how they impact our working efficiency." />
        <link rel="canonical" href="https://www.iwebwiser.com/terms-conditions"/> 
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
                <h4>Terms &amp; Condition</h4>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Privacy&Policy-Home-section end here... */}

        {/* Privacy & Policy content start here... */}
        <section className="policy-content">
          <div className="max-content-width">
            <ul className="main-list">
              <li>
                <p className="para-1">
                  The Head Office of iWebwiser Limited is located at 1-B-10,
                  Pawan Puri, Sardar Patel Colony, Bikaner, Rajasthan 334001,
                  INIDA. These terms and conditions apply to work done from any
                  office of iWebwiser Limited or of companies within the
                  iWebwiser group of companies.
                </p>
              </li>
              <li>
                <p>
                  The primary area of business for iWebwiser is (but not limited
                  to) providing design and development resources for Website
                  Publishing, designing, development and software application
                  development, mobile application development, IT Support
                  services, Hosting services, Quality Analysis (QA) and Digital
                  Media. iWebwiser also specialises in providing highly focused
                  E -marketing solutions such as Digital Marketing (SEO) Search
                  Engine Optimization, Pay Per Click (PPC), e-communication
                  strategy, Data Analysis, Reporting and research.{" "}
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
                <ul className="small-list">
                  <li>
                    <p>
                      iWebwiser undertake projects on a time and materials
                      basis.
                    </p>
                  </li>
                  <li>
                    <p>
                      All fees are estimated and exclusive of GST or any other
                      taxes as may be applicable,
                    </p>
                  </li>
                  <li>
                    <p>
                      Estimates are valid for 30 days from the date of issue.
                    </p>
                  </li>
                  <li>
                    <p>
                      Payment terms are based on prior weekly or monthly
                      bookings which are allocations of the developer resources.
                    </p>
                  </li>
                  <li>
                    <p>
                      The client is allocated dedicated resource(s) along with
                      the necessary functional support staff such as a Team
                      Leader or Project Manager if requested (based on the
                      service commissioned).
                    </p>
                  </li>
                  <li>
                    <p>
                      The resource(s) would be operating out of the Indian
                      office, unless the resource is operating onsite or from
                      our USA / South Africa / UK / UAE offices. The Indian
                      office operates Monday – Friday, 10 AM to 6:00 PM (India’s
                      time zone is GMT + 5:30 / BST +4.30). All the public
                      holidays are notified in advance and communicated by the
                      development team directly; the holidays are generally
                      compensated by working extra hours in the evenings, at
                      weekends or as per the agreed time schedule with the
                      client.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Quality of Service</h5>
                <ul className="small-list">
                  <li>
                    <p>
                      You deserve to have your work carried out to the highest
                      possible standard and in an understanding and timely
                      manner and we will always try and exceed your
                      expectations. We value quality very highly and look to
                      pass that on to our clients at every opportunity.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Our values are our commitment to you</h5>
                <ul className="small-list">
                  <li>
                    <p>
                      We will act with the utmost integrity, displaying
                      integrity, professional dedication and courtesy at all
                      times.
                    </p>
                  </li>
                  <li>
                    <p>
                      All correspondence such as emails and phone calls will be
                      dealt with promptly
                    </p>
                  </li>
                  <li>
                    <p>
                      We will provide you with an alternative contact if the
                      person you are looking for is unavailable.
                    </p>
                  </li>
                  <li>
                    <p>
                      We will give clear and concise information regarding your
                      enquiry and the associated estimate and also about the
                      project if you decide to place a booking.
                    </p>
                  </li>
                  <li>
                    <p>
                      We are also long standing members of the International
                      Association of Outsourcing Providers.
                    </p>
                  </li>
                  <li>
                    <p>We guarantee high-quality and cost-effective services</p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>How You Can Help</h5>
                <ul className="small-list">
                  <li>
                    <p>
                      Please make sure you give us clear instructions to allow
                      us to effectively provide an accurate estimate and work to
                      the best of our abilities on the project.
                    </p>
                  </li>
                  <li>
                    <p>
                      Reply promptly to communications. The developer is on a
                      dedicated basis, it is important he or she has tasks at
                      all times to avoid delays (any delays may increase the
                      time required to complete the project).
                    </p>
                  </li>
                  <li>
                    <p>
                      Please tell us if you are going to be away or unable to
                      respond to requests for information.
                    </p>
                  </li>
                  <li>
                    <p>
                      If you are dissatisfied with the service being provided
                      please tell us. We cannot resolve a problem we are unaware
                      of.
                    </p>
                  </li>
                  <li>
                    <p>
                      Please regularly check your Online Project Management
                      Area, iWebwiser Projects (DSP) area as well as emails. We
                      will be directing a good deal of your project
                      communications through both.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>What we will not do</h5>
                <ul className="small-list">
                  <li>
                    <p>
                      Work on a live server (unless specified).We will supply a
                      sandbox server for development (Digital Marketing (SEO)
                      work does take place on the live server)
                    </p>
                  </li>
                  <li>
                    <p>
                      Hold the only set of data; please give us test data or a
                      copy of the live DB
                    </p>
                  </li>
                  <li>
                    <p>
                      We will not fill the developers’ day; you are requested to
                      supply tasks at all times
                    </p>
                  </li>
                  <li>
                    <p>Tolerate abuse of staff members</p>
                  </li>
                  <li>
                    <p>
                      Contact end customers directly, projects are done in the
                      strictest confidence
                    </p>
                  </li>
                  <li>
                    <p>Outsource your work to a third party</p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Basis of Charging Fees</h5>
                <ul className="small-list">
                  <li>
                    <p>
                      Our “Dedicated” service is supplied on a “Time and
                      materials” based and sold in daily, weekly or monthly
                      blocks.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Acceptance of Services</h5>
                <ul className="small-list">
                  <li>
                    <p>
                      At various intervals throughout a project, you will be
                      asked to view, test and signoff certain sections. As a
                      project is a combination of these smaller sections we ask
                      this is done in a timely manner; delay in this process can
                      cause delay to the project as a whole and delay the
                      overall timeframe.
                    </p>
                  </li>
                  <li>
                    <p>
                      Once iWebwiser has fulfilled the obligated booking period
                      purchased or the project has been completed the project
                      shall be tested accordingly. If any failure to pass the
                      test results from a defect which is caused by an act of
                      omission of you, or by one of your subcontractors or
                      agents, the project will be deemed to have passed the test
                      notwithstanding such non-iWebwiser defect. We may provide
                      assistance reasonably requested by you in relation to
                      supplying a suitable remedy of any non-i5webwiser defect
                      by supplying additional services. These would be offered
                      at the current fees and prices.
                    </p>
                  </li>
                  <li>
                    <p>
                      Back-up: it is the client’s responsibility to ensure they
                      have a back-up of the work. We recommend taking back-ups
                      of the work at all stages (we recommend an automated
                      scheduled back-up, which can be set-up alongside any work
                      by our server technicians). Live servers, all development
                      work takes place “off-site” on a Sandbox environment
                      provided by us (Digital Marketing (SEO) work does take
                      place on the live server). On occasion, it may be
                      requested that development takes places on live servers
                      (time constraints, upon client request, licensing reasons
                      for example). This is done so at your own risk. We do not
                      take responsibility for any impact this may have to either
                      the live site or your ability to work. We strongly
                      recommend the use of a Sandbox server.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Our Invoices</h5>
                <ul className="small-list">
                  <li>
                    <p>
                      Payment of the advance / first invoice is an acceptance of
                      these terms and conditions.
                    </p>
                  </li>
                  <li>
                    <p>
                      The charges are calculated in accordance with iWebwiser
                      standard rates (which can be amended on one month’s prior
                      notice to you) as follows:
                    </p>
                    <ul className="short-list">
                      <li>
                        <p>
                          Weekly rates are calculated on the basis of an eight
                          (8) hour day, working a five (5) day week.
                        </p>
                      </li>
                      <li>
                        <p>
                          Daily rates are calculated on the basis of an eight
                          (8) hour day.
                        </p>
                      </li>
                      <li>
                        <p>
                          Bucket rates are calculated on the basis of 10, 20, 40
                          hours being held against your project, all of which
                          must be used within six (6) months of the time of
                          booking.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      All invoices must be paid in the currency in which they
                      are issued.
                    </p>
                  </li>
                  <li>
                    <p>
                      Our invoices are issued before we start the work and need
                      to be reconciled in order for the work to commence.
                    </p>
                  </li>
                  <li>
                    <p>
                      Your project may be put on hold temporarily whilst your
                      payment on invoices is outstanding and, in that event, we
                      reserve the right to remove project files from our
                      servers.
                    </p>
                  </li>
                  <li>
                    <p>
                      Unless otherwise stated all prices are exclusive of GST or
                      any other taxes as may be applicable, which shall where
                      applicable be charged by iWebwiser to you at the current
                      rate.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Limitation of Liability</h5>
                <ul className="small-list">
                  <li>
                    <p>
                      This sets out the entire financial liability of iWebwiser
                      (including any liability for acts or omissions of its
                      employees, agents or consultants) to you in respect of:
                      Any breach of these Terms & Conditions;
                    </p>
                    <ul className="short-list">
                      <li>
                        <p>
                          Any use made by you of the Service, the project or any
                          part of them, and
                        </p>
                      </li>
                      <li>
                        <p>
                          Any representation, statement or action contrary to
                          contract law or omission (including negligence)
                          arising under or in connection with these Terms &
                          Conditions.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      Nothing in these Terms & Conditions limits or excludes the
                      liability of iWebwiser for death or personal injury
                      resulting from negligence, or for fraud or fraudulent
                      misrepresentation by us.
                    </p>
                  </li>
                  <li>
                    <p>
                      Subject to paragraph 11(2) and 11(4) iWebwiser shall not
                      be liable for:
                    </p>
                    <ul className="short-list">
                      <li>
                        <p>Loss of Profits;</p>
                      </li>
                      <li>
                        <p>Loss of Business;</p>
                      </li>
                      <li>
                        <p>Depletion of goodwill and/or similar losses;</p>
                      </li>
                      <li>
                        <p>Loss of anticipated savings;</p>
                      </li>
                      <li>
                        <p>Loss or corruption of data or information, or;</p>
                      </li>
                      <li>
                        <p>
                          Any special, indirect, consequential or pure economic
                          loss, costs, damages, charges or expenses
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      iWebwiser’ total liability to you, whether in contract,
                      tort (including negligence), for breach of statutory duty,
                      or otherwise, arising under or in connection with these
                      Terms & Conditions shall be limited to the total charges
                      paid for the Services by you during the 12-month period
                      immediately before the date on which the cause of action
                      first arose, or if the cause of action arose during any
                      period before 12 months had elapsed from the date of our
                      first Invoice, during that shorter period.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Termination</h5>
                <ul className="small-list">
                  <li>
                    <p>
                      Without prejudice to any other rights or remedies which
                      iWebwiser may have we reserve the right to terminate the
                      project or services without liability to you if:
                    </p>
                    <ul className="short-list">
                      <li>
                        <p>
                          You fail to pay any amount due to us on the due date
                          for payment, and remain in default not less than 7
                          days after being notified in writing to make such
                          payment.
                        </p>
                      </li>
                      <li>
                        <p>
                          You commit a material breach of any of our other terms
                          and conditions of business, where the breach is
                          incapable of remedy, or (if the breach is capable of
                          remedy) you fail to remedy the breach within 14 days
                          after being notified in writing to do so.
                        </p>
                      </li>
                      <li>
                        <p>
                          You breach any of our terms and conditions of business
                          in such a manner as to reasonably justify the opinion
                          that your conduct is inconsistent with your having the
                          intention or ability to give effect to the terms of
                          the agreement between us.
                        </p>
                      </li>
                      <li>
                        <p>
                          You are made bankrupt, a winding-up order is made
                          against you or you become subject to any insolvency
                          procedure including administration, liquidation or a
                          voluntary arrangement with your creditors pursuant to
                          the Insolvency Act 1986 or other insolvency
                          legislation
                        </p>
                      </li>
                      <li>
                        <p>
                          During development the project becomes unworkable or
                          undeliverable, except where this arises from a fault
                          on iWebwiser’ part.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>On termination of the project for any reason</p>
                    <ul className="short-list">
                      <li>
                        <p>
                          You shall immediately pay to us all of iWebwiser
                          outstanding unpaid invoices and interest (if any), in
                          respect of services supplied but for which no invoice
                          has been submitted, we may submit an invoice, which
                          shall be payable immediately on receipt.
                        </p>
                      </li>
                      <li>
                        <p>
                          We reserve the right to apply interest at 8% above the
                          Bank of INDIA base rate per annum, calculated on a
                          daily basis on any ledger account or individual
                          invoice unpaid after thirty days from the date of the
                          invoice date. Alternatively, at our discretion we may
                          decide to apply the provisions of the Late Payment of
                          Commercial Debts (Interest) Act 1998.
                        </p>
                      </li>
                      <li>
                        <p>
                          All outstanding invoices subject to clause 12.2.2 will
                          be immediately due and payable, regardless of the date
                          of the invoice. In addition, you will be liable to pay
                          us any costs arising in the pursuance of recovery of
                          overdue invoices, howsoever incurred.
                        </p>
                      </li>
                      <li>
                        <p>
                          All licenses granted by iWebwiser under the project
                          shall terminate.
                        </p>
                      </li>
                      <li>
                        <p>
                          The accrued rights of iWebwiser and liabilities of you
                          as at termination shall not be affected.
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Warranty</h5>
                <ul className="small-list">
                  <li>
                    <p>
                      The Customer must notify iWebwiser in writing during the
                      30 day Warranty Period if the Customer identifies an error
                      in the code / system / program written by iWebwiser. Once
                      it has been agreed iWebwiser will correct any errors that
                      we made in the construction of the code / system / program
                      at no cost. Under no circumstances will a partial / full
                      refund will be acknowledged. iWebwiser reserves the right
                      to define a bug / error.
                    </p>
                  </li>
                  <li>
                    <p>iWebwiser will not be liable under the below clauses:</p>
                    <ul className="short-list">
                      <li>
                        <p>
                          If the error is not notified to the iWebwiser in
                          writing during the Warranty Period;
                        </p>
                      </li>
                      <li>
                        <p>
                          If the error cannot be verified or reproduced by
                          iWebwiser.
                        </p>
                      </li>
                      <li>
                        <p>
                          If and to the extent that the error is caused by
                          infringement by the Customer or involvement of
                          developer / freelancer / company not related to
                          iWebwiser.
                        </p>
                      </li>
                      <li>
                        <p>
                          If the software / programs / scripts (but not limited
                          to) was written or developed by a developer /
                          freelancer / company who is not related to iWebwiser
                          or is in partially finished state.
                        </p>
                      </li>
                      <li>
                        <p>
                          Due to a change in configuration of server / hosting
                          at customer end.
                        </p>
                      </li>
                      <li>
                        <p>
                          We make no warranties or representations that your
                          code / system / program will be commercially
                          profitable or succeed in any other intended purpose
                          you may have for it. These involve many factors beyond
                          our control.
                        </p>
                      </li>
                      <li>
                        <p>
                          Involvement of 3rd Party developer / freelancer /
                          company during or after completion of work (in such
                          cases we will need to be notified prior to project
                          commencement)
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      You will meet the cost of any time spent tracking bugs due
                      to data content uploaded by customer or 3rd Party which
                      subsequently causes problems or bugs.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  Use of Online Project Management Area, iWebwiser Projects
                  Disability Support Program (DSP)
                </h5>
                <ul className="small-list">
                  <li>
                    <p>
                      Access to DSP is granted on a temporary basis to aid in
                      the smooth running and administration of your project. We
                      may suspend, withdraw, discontinue or change all or any
                      part of DSP without notice. We will not be liable to you
                      if for any reason DSP is unavailable at any time or for
                      any period.
                    </p>
                  </li>
                  <li>
                    <p>
                      You are responsible for ensuring that all persons who
                      access DSP are aware of the terms and conditions and that
                      they comply with them.
                    </p>
                  </li>
                  <li>
                    <p>
                      If you are provided with a username and password as part
                      of our security procedures you must treat such information
                      as confidential and not disclose it to any third party.
                    </p>
                  </li>
                  <li>
                    <p>
                      We have the right to disable any username or password
                      whether chosen by yourself or allocated by us, if in our
                      reasonable opinion you have failed to comply with any of
                      the provisions of the terms of use.
                    </p>
                  </li>
                  <li>
                    <p>
                      We are the owner or the licensee of all intellectual
                      property rights associated with DSP and the material
                      published on it.
                    </p>
                  </li>
                  <li>
                    <p>
                      We do not guarantee that DSP will be secure or free from
                      bugs or viruses. You are responsible for configuring your
                      information technology, computer programmes and platform
                      in order to access DSP. We will not be liable for any loss
                      or damage caused by a virus, distributed denial-of-service
                      attack, or other technologically harmful material that may
                      infect and affect your computer equipment or platform
                      including data or other proprietary material due to your
                      use of DSP or your downloading of any content on it, or on
                      any website linked to it.
                    </p>
                  </li>
                  <li>
                    <p>
                      You must not misuse DSP by knowingly introducing viruses,
                      Trojans, worms or other harmful material which is
                      malicious or harmful to the technology being used. You
                      must not attempt to gain unauthorised access to DSP or the
                      server where it is hosted.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Intellectual Property Rights</h5>
                <ul className="small-list">
                  <li>
                    <p>
                      Subject to Clauses 15(4) and 15(5) below, each party
                      reserves all its proprietary rights in its Confidential
                      Information and no rights or obligations, other than those
                      expressly recited herein, are granted or to be implied. In
                      particular, no license is hereby granted directly or
                      indirectly under or in respect of any invention,
                      discovery, patent, copyright or any other intellectual
                      property right now or in the future held, made, obtained
                      or licensable by the Disclosing Party. The property in all
                      Confidential Information disclosed pursuant to an
                      agreement / contract / project shall, subject to any right
                      of any other owner, remain with the original owner /
                      party.
                    </p>
                  </li>
                  <li>
                    <p>
                      Use of Intellectual Property: Each party acknowledges that
                      the other party owns or licenses Intellectual Property
                      related to its or its affiliates’ existing businesses and
                      such Intellectual Property may be used and further
                      developed in the course of this Agreement. Each party
                      understands that the other party intends to continue to
                      develop and commercially exploit its own Intellectual
                      Property during and after the term of this Agreement.
                    </p>
                  </li>
                  <li>
                    <p>
                      Prior Intellectual Property Rights: All Intellectual
                      Property rights owned by a party as of the Effective Date
                      (“Prior IP”) shall remain the property of such party and
                      no licenses or other rights with respect to such
                      Intellectual Property are granted to the other party
                      except as expressly set forth in an agreement or a later
                      agreement. Each party shall have the burden of proof
                      concerning the Intellectual Property it claims as its
                      Prior IP
                    </p>
                  </li>
                  <li>
                    <p>
                      Developed Intellectual Property for clients: All right,
                      title and interest of every kind and nature, whether now
                      known or unknown, in and to any Intellectual Property
                      created, written, developed, furnished or produced by us
                      during the term of the agreement / project, whether alone
                      or jointly with others and whether or not during work
                      hours, that are within the scope of the agreement or any
                      applicable Statement of Work shall be the exclusive
                      property of the client (subject to the other conditions
                      and specifically the payment of all the dues). As used
                      herein, the term “Intellectual Property” shall include,
                      without limitation, any inventions, technological
                      innovations, discoveries, designs, formulae, know-how,
                      processes, patents, trademarks, service marks, copyrights,
                      computer software, ideas, creations, improvements to all
                      such property, and all recorded material defining,
                      describing or illustrating all such property, whether
                      written or not and whether stored in plain or in code
                      form.
                    </p>
                  </li>
                  <li>
                    <p>
                      iWebwiser understands that it shall have no right, title
                      or interest of any kind or nature in or to any item of
                      Intellectual Property, or in or to any results and/or
                      proceeds from any item of Intellectual Property created or
                      developed for the client (once final payment has been
                      received). iWebwiser agrees to assist the client, at the
                      client’s expense, to obtain patents, copyrights,
                      trademarks, service marks and similar protections in all
                      countries on any item of Intellectual Property, and agrees
                      to execute any and all documents necessary to obtain such
                      patents, copyrights trademarks, service marks and similar
                      protections in all foreign countries in the name of
                      client. iWebwiser further agree to assist the client or
                      its nominees in the performance of any lawful acts that
                      the client, at its discretion deems necessary to secure
                      proper patent, copyright, trademark, service mark and
                      other protection for any item of Intellectual Property or
                      Improvements thereon, and to vest in the client the entire
                      interest therein all countries.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Procedures for Resolving any problems</h5>
                <ul className="small-list">
                  <li>
                    <p>
                      We aim to give you a high quality and efficient service at
                      all times. However if at any time you are unhappy with the
                      service that you receive , including our invoices, please
                      raise your concern in the first place to:
                    </p>
                    <ul className="short-list">
                      <li>
                        <p>
                          Your Developer if working under Design & Development
                          Model A or Model D.
                        </p>
                      </li>
                      <li>
                        <p>
                          Your Project Manager if working under an appropriate
                          Model.
                        </p>
                      </li>
                      <li>
                        <p>
                          You are responsible for ensuring that all persons who
                          access DSP are aware of the terms and conditions and
                          that they comply with them.
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h5>No derogatory comments</h5>
                <p>
                  We work to a high standard and we value our business
                  reputation. In the unlikely event that you are dissatisfied
                  with any of our work, you should raise your concern as stated
                  in Clause 16 above. It is a condition of our contract with you
                  that you will not make any critical or derogatory comment
                  about iWebwiser to any third party, and you will not publish
                  any such comment, whether on a website, via the Internet or
                  otherwise. Any breach of this clause may result in legal
                  proceedings being issued against you.
                </p>
              </li>
              <li>
                <p>
                  The contract between iWebwiser and the Customer shall be
                  governed by and construed in accordance with the laws of
                  INDIA. Any dispute arising shall be subject to the exclusive
                  jurisdiction of the courts of INDIA.
                </p>
              </li>
              <li>
                <p>
                  These terms and conditions of business constitute the entire
                  agreement between us, and extinguish all previous agreements,
                  promises, warranties, representations and understandings
                  between us, whether written or oral.
                </p>
              </li>
              <li>
                <h5>Non-Compete Clause</h5>
                <p>
                  During the term of this Agreement, you will not, directly or
                  indirectly, solicit or do business with any Developer or
                  Employee (as defined below), or entice, induce or assist any
                  Developer or Employee to cease employment with iWebwiser (or
                  any member of the Group) or to become a Developer or Employee
                  of any other person or entity engaged in any competitive
                  activity. For purposes of this paragraph, a “Developer” means:
                  (i) any permanent Developer or Business Analyst, or any other
                  employee of any member of the Group with whom you had contact
                  (including contact with Confidential Information) as an
                  employee of iWebwiser during the twelve (12) consecutive
                  calendar months after termination of employment from iWebwiser
                  (or any member of the Group); or (ii) any Developer of any
                  member of the Group who during the twelve (12) consecutive
                  calendar months preceding their termination of employment from
                  iWebwiser has: (A) made or received a written proposal in
                  which they participated or to which they had access on behalf
                  of any member of the Group. An Employee means any individual
                  with a Contract of Employment (regardless of length) with
                  iWebwiser.
                </p>
                <ul className="short-list">
                  <li>
                    <p>
                      Commission work from our clients, or attempt to solicit
                      work from our clients.
                    </p>
                  </li>
                  <li>
                    <p>
                      Engage any of our developers or other employees in a
                      contract for services or a contract of employment (All our
                      developers have a clause in their contracts prohibiting
                      business relationships with our clients).
                    </p>
                  </li>
                  <li>
                    <p>
                      Commission work directly from any of our developers or
                      other employees, or attempt to do so.
                    </p>
                  </li>
                </ul>
                <ul className="small-list">
                  <li>
                    <p>
                      You must not do the following things either during your
                      business relationship with us or within twelve (12) months
                      of the end of that relationship:
                    </p>
                  </li>
                  <li>
                    <p>
                      As iWebwiser is an international business which operates
                      from different countries over a substantial part of the
                      world, and as information technology services are by their
                      nature international, the provisions of Clause 20.1 above
                      apply throughout the world.
                    </p>
                  </li>
                  <li>
                    <p>
                      Any breach of Clause 20.1 will result in a claim against
                      you for damages, which will include a claim for loss of
                      profit and any other loss or expense which we incur as a
                      result of your breach.
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

export default TermsCondition;
