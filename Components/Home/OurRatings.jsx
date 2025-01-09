import { useInView } from "framer-motion";
import { useRef } from "react";

export default function OurRatings({ OurRatings }) {
  // console.log(OurRatings);
  const ref7 = useRef(null);
  const isInView26 = useInView(ref7, { once: true });
  return (
    <section className="our-ratings-home bg-black" ref={ref7}>
      <div
        className="max-content-width"
        style={{
          transform: isInView26 ? "none" : "translateX(-500px)",
          opacity: isInView26 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s",
        }}
      >
        {/* <h3 className="text-white sh">{OurRatings?.heading_1}</h3> */}
        <ul>
          {OurRatings?.RatingImg?.slice(0, 4).map((item, i) => (
            <li key={i}>
              <img src={item} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
