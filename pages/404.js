import { MyImage } from "@/Utility/HomeSliderData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error = (props) => {
  return (
    <>
      {/* Error-404 Section start here... */}
      <section className="Error-404">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 d-none d-md-block">
              <div className="Error-img">
                <MyImage
                  src={props?.data?.image_1}
                  alt="Error-Layer"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 px-0">
              <div className="Error-text">
                <h5>Page not found</h5>
                <h4>404</h4>
                <h3>Out of nothing, something.</h3>
                <p>
                  You can find (just about) anything on Medium — apparently even
                  a page that doesn’t exist. Maybe these stories about finding
                  what you didn’t know you were looking for will take you
                  somewhere new?
                </p>
                <Link href="/" className="btn btn-outline-dark">
                  GO TO HOME PAGE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Error-404 Section end here... */}
    </>
  );
};

export async function getStaticProps() {
  const data = {
    image_1: "/assets/img/Error-layer.webp",
  };
  return {
    props: {
      data,
    },
  };
}

export default Error;
