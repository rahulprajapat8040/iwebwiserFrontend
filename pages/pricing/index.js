import PartOfTeam from "@/Components/Common/PartOfTeam";
import { MyImage } from "@/Utility/HomeSliderData";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Layout = dynamic(import("@/Components/Common/Layout"));

const Pricing = (props) => {
  return (
    <>
      <Head>
        <title>
          Our Products: Digital Transformation | IT Solitons & Services
        </title>
        <meta
          Name="keywords"
          content="iWebwiser, IT Soltions and Services, custom LMS, Our Products, Digital Health Transformation, Ecommerce App Development"
        />
        <meta
          Name="description"
          content="iWebwiser's IT solutions and services provide digital transformation in real estate, healthcare, learning management systems, transportation & logistics, etc."
        />

        <link rel="canonical" href="https://www.iwebwiser.com/our-solutions" />
        <meta Name="robots" content="index, follow" />

        <meta Name="twitter:card" content="summary_large_image" />
        <meta Name="twitter:site" content="@iWebwiser" />
        <meta
          Name="twitter:title"
          content="Our Products: Digital Transformation | IT Solitons & Services "
        />
        <meta Name="twitter:site:id" content="@iWebwiser" />
        <meta Name="twitter:creator" content="@iWebwiser" />
        <meta
          Name="twitter:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fsolution1.webp&w=1920&q=75"
        />
        <meta Name="MobileOptimized" content="width" />
        <meta Name="HandheldFriendly" content="true" />

        <meta
          property="og:title"
          content="Our Products: Digital Transformation | IT Solitons & Services "
        />
        <meta
          property="og:url"
          content="https://www.iwebwiser.com/our-solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_Name" content="iWebwiser" />
        <meta
          property="og:image"
          content="https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Fsolution1.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="iWebwiser's IT solutions and services provide digital transformation in real estate, healthcare, learning management systems, transportation & logistics, etc."
        />
      </Head>
      <Layout>
        <>
          {/* Solutions-&-offerings-Home-section start here... */}
          <section className="solution-home">
            <div className="max-content-width">
              <div className="solution-home-bg">
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
                  <h4 className="text-center">Our Pricing</h4>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 1.5 },
                    visible: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 1.5 },
                  }}
                  initial="hidden"
                  animate={"visible"}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="solution-img"
                >
                  <MyImage
                    className="w-100 d-none"
                    src="/assets/img/solutions.webp"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </motion.div>
              </div>
            </div>
          </section>
          {/* Solutions-&-offerings-Home-section end here... */}

          {/* Page Breadcrumb Navigation section start here... */}
          <div className="page-navigation d-none">
            <div className="max-content-width">
              <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href={"/"}>Home</Link>
                    </li>

                    <li className="breadcrumb-item active" aria-current="page">
                      <span>Our Pricing</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* Page Breadcrumb Navigation section end here... */}

          {/* Customers Solutions section start here... */}
          <section className="our-pricing">
            <div className="pricing-header text-center">
              <h1 className="title">Pricing plan structure</h1>
              <p className="desc">
                So how much does it cost to build an app? Unfortunately there is
                no straight answer because every app is different. The
                popularly-accepted average internationally for an app is about
                $10,000 or $140,000. But we have built apps for just $5,000.
                There are several types of apps that we are frequently asked to
                quote on or build. Whilst every app has to be quoted for
                individually, below you will find some of the most common types
                of app with their requirements and approximate costs. Please
                note that these may exclude hosting and third party license
                costs if applicable.
              </p>
            </div>
            <div className="our-products-price container">
              <h1 className="sec-title">Basic website development</h1>
              <div className="row g-5">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="card product-card">
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Landing Page Design</li>
                        <li className="list-group-item">
                          Slider or Hero Image
                        </li>
                        <li className="list-group-item">5x Services Section</li>
                        <li className="list-group-item">
                          Social Media Integration
                        </li>
                        <li className="list-group-item">
                          Gallery / Testimonials
                        </li>
                        <li className="list-group-item">
                          Social notifications
                        </li>
                        <li className="list-group-item">
                          Interactive contact form
                        </li>
                      </ul>
                    </div>
                    <div className="card-header">
                      <h4 className="price-title">
                       <span className="">Once off</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="card product-card">
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          4 to 5 Page Website Design
                        </li>
                        <li className="list-group-item">Homepage Slider</li>
                        <li className="list-group-item">
                          Gallery / Testimonials
                        </li>
                        <li className="list-group-item">
                          Social Media Integration
                        </li>
                        <li className="list-group-item">
                          Social notifications
                        </li>
                        <li className="list-group-item">
                          Interactive contact form
                        </li>
                      </ul>
                    </div>
                    <div className="card-header">
                      <h4 className="price-title">
                       <span className=""> 1 Week</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="card product-card">
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">6 to 8 Page Design</li>
                        <li className="list-group-item">Home Page Slidere</li>
                        <li className="list-group-item">5x Services Section</li>
                        <li className="list-group-item">
                          Social Media Integration
                        </li>
                        <li className="list-group-item">
                          Gallery / Testimonials
                        </li>
                        <li className="list-group-item">
                          Social notifications
                        </li>
                        <li className="list-group-item">
                          Interactive contact form
                        </li>
                      </ul>
                    </div>
                    <div className="card-header">
                      <h4 className="price-title">
                        <span className="">1 Week</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="card product-card">
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          E-Commerce Online Store
                        </li>
                        <li className="list-group-item">
                          15 Preloaded Products
                        </li>
                        <li className="list-group-item">
                          Inventory &amp; Stock Management
                        </li>
                        <li className="list-group-item">
                          Invoicing &amp; Coupon System
                        </li>
                        <li className="list-group-item">
                          Payment &amp; Delivery Options
                        </li>
                      </ul>
                    </div>
                    <div className="card-header">
                      <h4 className="price-title">
                       <span className="">1 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="our-products-price container">
              <h1 className="sec-title">Customised White Label Solutions</h1>
              <div className="row g-5">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card product-card">
                    <div className="card-header">
                      <h4 className="price-title">Social media App</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Social authorisation,Analytics
                        </li>
                        <li className="list-group-item">
                          Feed, Post likes, Post creation
                        </li>
                        <li className="list-group-item">
                          Social notifications
                        </li>
                        <li className="list-group-item">
                          User profile, Search, Chat
                        </li>
                        <li className="list-group-item">
                          Push notification module
                        </li>
                        <li className="list-group-item">
                          CMS:&nbsp;Admin authorisation, management
                        </li>
                        <li className="list-group-item">
                          CMS:&nbsp;User management
                        </li>
                        <li className="list-group-item">
                          CMS:&nbsp;Reported user management
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <p className="blockquote-footer">
                        Development: Website, Mobile apps (iOS and Android),
                        Backend
                      </p>
                      <h4 className="price-title">
                       <span className="">6-8 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card product-card">
                    <div className="card-header">
                      <h4 className="price-title">Delivery App</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Customer App ( IOS &amp; android )
                        </li>
                        <li className="list-group-item">
                          Driver App ( IOS &amp; android )
                        </li>
                        <li className="list-group-item">
                          Store App ( IOS &amp; android )
                        </li>
                        <li className="list-group-item">
                          Point of sale terminal system (POS for android )
                        </li>
                        <li className="list-group-item">Customer web app</li>
                        <li className="list-group-item">
                          Store inventory system
                        </li>
                        <li className="list-group-item">
                          CMS: Admin authorisation, management
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <p className="blockquote-footer">
                        Development: Website, Mobile apps (iOS and Android),
                        Backend
                      </p>
                      <h4 className="price-title">
                        <span className="">1-6 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card product-card">
                    <div className="card-header">
                      <h4 className="price-title">Health Lifestyle App</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Simple registration and login to the application
                        </li>
                        <li className="list-group-item">Social integration</li>
                        <li className="list-group-item">
                          Access from any device
                        </li>
                        <li className="list-group-item">Push notifications</li>
                        <li className="list-group-item">
                          Best UX/UI and usability
                        </li>
                        <li className="list-group-item">The goal setting</li>
                        <li className="list-group-item">Tracking</li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <p className="blockquote-footer">
                        Development: Website, Mobile apps (iOS and Android),
                        Backend
                      </p>
                      <h4 className="price-title">
                       <span className="">1-2 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card product-card">
                    <div className="card-header">
                      <h4 className="price-title">Travel App</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Geolocation Tracking Services. Once a tourist reaches
                          their destination, they want to check in to a hotel or
                          relax in a cafe for a little while
                        </li>
                        <li className="list-group-item">Itinerary Generator</li>
                        <li className="list-group-item">Weather Forecasting</li>
                        <li className="list-group-item">Booking Services.</li>
                        <li className="list-group-item">
                          Social Media Sharing
                        </li>
                        <li className="list-group-item">
                          Reviews and Ratings.
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <p className="blockquote-footer">
                        Development: Website, Mobile apps (iOS and Android),
                        Backend
                      </p>
                      <h4 className="price-title">
                        <span className="">4 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card product-card">
                    <div className="card-header">
                      <h4 className="price-title">News App</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Categories</li>
                        <li className="list-group-item">Search and Filters</li>
                        <li className="list-group-item">Push Notifications</li>
                        <li className="list-group-item">Engagement Tools</li>
                        <li className="list-group-item">
                          Social Media Integration
                        </li>
                        <li className="list-group-item">
                          Registration and Personal Profiles
                        </li>
                        <li className="list-group-item">Personal Feed</li>
                        <li className="list-group-item">
                          Options to Interact With Content
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <p className="blockquote-footer">
                        Development: Website, Mobile apps (iOS and Android),
                        Backend
                      </p>
                      <h4 className="price-title">
                        <span className="">2 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card product-card">
                    <div className="card-header">
                      <h4 className="price-title">Sports App</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Activity tracking</li>
                        <li className="list-group-item">
                          Roster, league &amp; team management.
                        </li>
                        <li className="list-group-item">
                          Scoring, stats, news
                        </li>
                        <li className="list-group-item">Schedules</li>
                        <li className="list-group-item">
                          Bookings, tickets, merchandise
                        </li>
                        <li className="list-group-item">
                          Social media integration
                        </li>
                        <li className="list-group-item">
                          Relevant push notifications.
                        </li>
                        <li className="list-group-item">Communication tools</li>
                        <li className="list-group-item">Market Place</li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <p className="blockquote-footer">
                        Development: Website, Mobile apps (iOS and Android),
                        Backend
                      </p>
                      <h4 className="price-title">
                        <span className="">6-7 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card product-card">
                    <div className="card-header">
                      <h4 className="price-title">Navigation App</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Navigate </li>
                        <li className="list-group-item">Count distance</li>
                        <li className="list-group-item">
                          Display traffic info
                        </li>
                        <li className="list-group-item">
                          Direct both audibly and visually
                        </li>
                        <li className="list-group-item">
                          Optimize routing options
                        </li>
                        <li className="list-group-item">Parking finder</li>
                        <li className="list-group-item">Show facilities</li>
                        <li className="list-group-item">Forecast weather</li>
                        <li className="list-group-item">
                          Integrate with contacts
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <p className="blockquote-footer">
                        Development: Website, Mobile apps (iOS and Android),
                        Backend
                      </p>
                      <h4 className="price-title">
                        <span className="">2 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card product-card">
                    <div className="card-header">
                      <h4 className="price-title">Books App</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          An Intuitive List of Available Books. ...
                        </li>
                        <li className="list-group-item">
                          Support Different Formats. ...
                        </li>
                        <li className="list-group-item">
                          Store &amp; Sync Your Favorite Books. ...
                        </li>
                        <li className="list-group-item">
                          Multiple Platform Support. ...
                        </li>
                        <li className="list-group-item">
                          A Reader-Friendly Interface. ...
                        </li>
                        <li className="list-group-item">Reading Tools. ...</li>
                        <li className="list-group-item">
                          Gamification of Reading.
                        </li>
                        <li className="list-group-item">Social Integration</li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <p className="blockquote-footer">
                        Development: Website, Mobile apps (iOS and Android),
                        Backend
                      </p>
                      <h4 className="price-title">
                        <span className="">2.5 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card product-card">
                    <div className="card-header">
                      <h4 className="price-title">Photo &amp; Video App</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Allows to Make Professional Videos
                        </li>
                        <li className="list-group-item">
                          Add Effects, Music, Soundtracks &amp; Themes
                        </li>
                        <li className="list-group-item">
                          Trim, Crop and Controls of Audios &amp; Hues
                        </li>
                        <li className="list-group-item">
                          Save &amp; Share Videos
                        </li>
                        <li className="list-group-item">Push Notifications</li>
                        <li className="list-group-item">
                          Allows to Change Video Quality &amp; Mixing Videos
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <p className="blockquote-footer">
                        Development: Website, Mobile apps (iOS and Android),
                        Backend
                      </p>
                      <h4 className="price-title">
                       <span className="">4 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card product-card">
                    <div className="card-header">
                      <h4 className="price-title">Kids Learning App</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Speech/narration support, Appropriate leveling
                          customization
                        </li>
                        <li className="list-group-item">
                          Gamification features, Question and image-based
                          Quizzes
                        </li>
                        <li className="list-group-item">
                          Relevant learning tools, Storyline-based video
                        </li>
                        <li className="list-group-item">
                          Sports activities online challenges for offline
                          movement activities
                        </li>
                        <li className="list-group-item">
                          eBooks — online coloring books, audiobooks,Puzzles,
                          Art, drawing, singing, dancing, etc.
                        </li>
                        <li className="list-group-item">
                          Language learning tools with words identification,
                          audio listing, speech recognition to improve
                          pronunciation
                        </li>
                        <li className="list-group-item">
                          Science learning —teaching about the planetary system,
                          math, physics, history, etc. in fun and engaging ways
                        </li>
                        <li className="list-group-item">
                          Question and image-based Quizzes
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <p className="blockquote-footer">
                        Development: Website, Mobile apps (iOS and Android),
                        Backend
                      </p>
                      <h4 className="price-title">
                        <span className="">6-7 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card product-card">
                    <div className="card-header">
                      <h4 className="price-title">Tele-medicine App</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">All the Clinics</li>
                        <li className="list-group-item">
                          Register new clinics
                        </li>
                        <li className="list-group-item">
                          Manage doctors in the Clinics
                        </li>
                        <li className="list-group-item">
                          Check attendance of the doctors
                        </li>
                        <li className="list-group-item">
                          Check the Upcoming appointments
                        </li>
                        <li className="list-group-item">
                          Check the list of all the Patients
                        </li>
                        <li className="list-group-item">
                          Check the list of all the doctors Clinic wise and All
                          at once
                        </li>
                        <li className="list-group-item">
                          Check the symptoms of the patients
                        </li>
                        <li className="list-group-item">
                          Check the Prescriptions of the patients assigned by
                          the doctors
                        </li>
                        <li className="list-group-item">
                          Check the complete profile od all the doctors and
                          clinics
                        </li>
                        <li className="list-group-item">
                          Block and unblock the doctors and patients and Clinics
                        </li>
                        <li className="list-group-item">
                          Check the Payments and Accounts of complete and
                          Clinical wise system and earnings
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <p className="blockquote-footer">
                        Development: Website, Mobile apps (iOS and Android),
                        Backend
                      </p>
                      <h4 className="price-title">
                        <span className="">3-4 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card product-card">
                    <div className="card-header">
                      <h4 className="price-title">Music App</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Registration and&nbsp;Login Authentication
                        </li>
                        <li className="list-group-item">
                          Social media integrations
                        </li>
                        <li className="list-group-item">
                          Discovery (browsing)
                        </li>
                        <li className="list-group-item">Navigation</li>
                        <li className="list-group-item">
                          Music Categorization
                        </li>
                        <li className="list-group-item">Recommendations</li>
                        <li className="list-group-item">
                          Music Collections,Music Player
                        </li>
                        <li className="list-group-item">
                          Sharing via Bluetooth on multiple nearby devices
                        </li>
                        <li className="list-group-item">Push Notifications</li>
                        <li className="list-group-item">
                          Download/Save option – Offline access
                        </li>
                        <li className="list-group-item">
                          Pre-save option, Sharing options
                        </li>
                        <li className="list-group-item">
                          The ability to stream on smart home devices
                        </li>
                        <li className="list-group-item">
                          Lyrics, Voice Search and Commands
                        </li>
                        <li className="list-group-item">
                          Private Mode,Artists Profiles,Content Upload
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <p className="blockquote-footer">
                        Development: Website, Mobile apps (iOS and Android),
                        Backend
                      </p>
                      <h4 className="price-title">
                        <span className="">2-3 months</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="our-products-price container">
              <h1 className="sec-title">Customised Solutions</h1>
              <div className="row g-5">
                <div className="col-12">
                  <div className="card product-card">
                    <div className="card-footer d-flex flex-column flex-md-row justify-content-between align-items-lg-center">
                      <h4 className="price-title">Delivery System</h4>
                      <div className="py-4">
                        <p className="blockquote-footer">
                          Development: Website, Mobile apps (iOS and Android),
                          Backend
                        </p>
                        <h4 className="price-title">
                          (Fully customised)
                          <span className="">6-8 months</span>
                        </h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              Customer App ( IOS &amp; android )
                            </li>
                            <li className="list-group-item">
                              Driver App ( IOS &amp; android )
                            </li>
                            <li className="list-group-item">
                              Store App ( IOS &amp; android )
                            </li>
                            <li className="list-group-item">
                              Point of sale terminal system (POS for android )
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 col-lg-6">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              Customer web app
                            </li>
                            <li className="list-group-item">
                              Store inventory system
                            </li>
                            <li className="list-group-item">
                              Payment integration
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card product-card">
                    <div className="row w-100 g-0">
                      <div className="card-footer d-flex flex-column flex-md-row justify-content-between align-items-lg-center">
                        <h4 className="price-title">E-learning system</h4>
                        <div className="py-4">
                          <p className="blockquote-footer">
                            Development: Website, Mobile apps (iOS and Android),
                            Backend
                          </p>
                          <h4 className="price-title">
                            (Fully customised)
                            <span className="">6-8 months</span>
                          </h4>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 col-lg-6">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">
                                Trainees, instructor speaker
                              </li>
                              <li className="list-group-item">
                                Multiple Universities under one roof
                              </li>
                              <li className="list-group-item">
                                Diploma courses and certificate course with
                                credit hours
                              </li>
                              <li className="list-group-item">
                                Upcoming feature with white label of the
                              </li>
                              <li className="list-group-item">
                                Product for those who need their own product
                              </li>
                              <li className="list-group-item">
                                Chat system for group chat and one to one chat
                                with
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-lg-6">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">
                                Course review system, By reviewers before
                                publishing any course
                              </li>
                              <li className="list-group-item">
                                Event management system with multiple programs
                                in each events
                              </li>
                              <li className="list-group-item">
                                Attendance management system for each program
                                and inviting speakers for live lectures in
                                scheduled program
                              </li>
                              <li className="list-group-item">
                                document sharing and support system with chat
                                Module
                              </li>
                              <li className="list-group-item">
                                SSL security , data encryption with
                              </li>
                              <li className="list-group-item">
                                OAuth 2.0 and firewall security for main server
                              </li>
                              <li className="list-group-item">
                                AWS server and digital oscine server for
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card product-card">
                    <div className="card-footer d-flex flex-column flex-md-row justify-content-between align-items-lg-center">
                      <h4 className="price-title">
                        Inventory management system
                      </h4>
                      <div className="py-4">
                        <p className="blockquote-footer">
                          Development: Website, Mobile apps (iOS and Android),
                          Backend
                        </p>
                        <h4 className="price-title">
                          (Fully customised)
                          <span className="">4-5 months</span>
                        </h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              Inventory management
                            </li>
                            <li className="list-group-item">
                              Barcoding &amp; tagging
                            </li>
                            <li className="list-group-item">
                              Inventory tracking
                            </li>
                            <li className="list-group-item">Reporting tools</li>
                            <li className="list-group-item">
                              Inventory forecasting
                            </li>
                            <li className="list-group-item">
                              Inventory alerts
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 col-lg-6">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              Inventory security and backups
                            </li>
                            <li className="list-group-item">
                              IOT integrations
                            </li>
                            <li className="list-group-item">Mobile support</li>
                            <li className="list-group-item">
                              Stock returns handlings
                            </li>
                            <li className="list-group-item">
                              Billing &amp; stock management
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card product-card">
                    <div className="card-footer d-flex flex-column flex-md-row justify-content-between align-items-lg-center">
                      <h4 className="price-title">E-commerce system</h4>
                      <div className="py-4">
                        <p className="blockquote-footer">
                          Development: Website, Mobile apps (iOS and Android),
                          Backend
                        </p>
                        <h4 className="price-title">
                          (Fully customised)
                          <span className="">4-5 months</span>
                        </h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <ul className="list-group list-group-flush">
                            <h4>UNIQUE FEATURES:</h4>
                            <li className="list-group-item">
                              Integrated SEO, for promotional Website
                            </li>
                            <li className="list-group-item">
                              Turn-Key Solution
                            </li>
                            <li className="list-group-item">
                              Unlimited Listing Types
                            </li>
                            <li className="list-group-item">Fully-Automated</li>
                            <li className="list-group-item">
                              Email Management
                            </li>
                            <li className="list-group-item">
                              Payment Processing
                            </li>
                            <li className="list-group-item">
                              Each seller has a separate seller profile
                              page/screen &amp; can edit their profile page on
                              their own from Backend and partially from the
                              Mobile app also.
                            </li>
                            <li className="list-group-item">
                              Seller can add banner, shop logo custom and also
                              customize store as per any Color theme.
                            </li>
                            <li className="list-group-item">
                              Feedback and review system with interactive star
                              rating.
                            </li>
                            <li className="list-group-item">
                              Separate seller’s product collection.
                            </li>
                            <li className="list-group-item">
                              Admin can add commission based on category.
                            </li>
                            <li className="list-group-item">
                              Seller can do custom shipping.
                            </li>
                            <li className="list-group-item">
                              Automatic approval of products and partners
                              setting in the admin side.
                            </li>
                            <li className="list-group-item">
                              Seller will have own dashboard to manage orders.
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 col-lg-6">
                          <ul className="list-group list-group-flush">
                            <h4>MULTI-VENDOR:</h4>
                            <li className="list-group-item">
                              Seller can add Simple and Downloadable product.
                            </li>
                            <li className="list-group-item">
                              Admin can restrict the account menu options and
                              sequence.
                            </li>
                            <li className="list-group-item">
                              Admin can select the order status for the seller.
                              Only selected order status will be used by the
                              seller for changing their product order status.
                            </li>
                            <li className="list-group-item">
                              The admin can assign specific product categories
                              to sellers.
                            </li>
                            <li className="list-group-item">
                              The admin can pay to all sellers at once using
                              Mass Pay-out.
                            </li>
                            <li className="list-group-item">
                              The admin can preview the seller’s product.
                            </li>
                            <li className="list-group-item">
                              The sellers can add tax information from the
                              front-end.
                            </li>
                            <li className="list-group-item">
                              Customers can view the estimated date of the
                              delivery on the product page.
                            </li>
                            <li className="list-group-item">
                              Sellers can use Seller-Customer Switcher to hide
                              Marketplace menu.
                            </li>
                            <li className="list-group-item">
                              Admin can find total sale by each seller and the
                              admin income from any particular seller under
                              “Marketplace Income”.
                            </li>
                            <li className="list-group-item">
                              Admin can create template-based emails for
                              Marketplace which will be used, according to Admin
                              selection.
                            </li>
                            <li className="list-group-item">
                              Admin can track the seller’s income, total order,
                              total buyers, and latest order using dashboard
                              field under edit partner page.
                            </li>
                            <li className="list-group-item">
                              Admin/Seller can change order status of each
                              product.
                            </li>
                            <li className="list-group-item">
                              Admin/Seller can enter tracking number for each
                              product.
                            </li>
                            <li className="list-group-item">
                              The customer can check out with multiple seller’s
                              product at the same time
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Customers Solutions section end here... */}
          {/* Become-A-part-of-Team section start here... */}
          <PartOfTeam />
          {/* Become-A-part-of-Team section end here... */}
        </>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const solutionData = {
    image_1: "/assets/img/solutions.webp",
    image_2: "/assets/img-content-1.webp",
    image_3: "/assets/img/solution-content-2.webp",
    image_4: "/assets/img/solution-content-3.webp",
    image_5: "/assets/img/solution-content-4.webp",
    image_6: "/assets/img/content-5.webp",
    image_7: "/assets/img/solution-content-6.webp",
  };
  return {
    props: {
      solutionData,
    },
  };
}

export default Pricing;
