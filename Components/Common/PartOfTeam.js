import Link from "next/link";
import React from "react";

const PartOfTeam = () => {
  return (
    <>
      {/* Become-A-part-of-Team section start here... */}
      <section className="part-of-team">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-7">
              <h4>Become a part of our team!</h4>
              <p>
                Help shape the future of technology while making a significant
                difference for businesses worldwide! Take the next step in your
                career journey today - join our iWebWiser family.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <Link
                href={"/career"}
                as={'/career'}
                role="button"
                className="btn btn-posting"
              >
                OUR JOB POSTING
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Become-A-part-of-Team section end here... */}
    </>
  );
};

export default PartOfTeam;
