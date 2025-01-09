import { motion, useInView } from "framer-motion";
export default function AboutHomesection({ props }) {
    return (
        <section className="about-home">
            <div className="max-content-width">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 75 },
                    }}
                    initial="hidden"
                    animate={"visible"}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="about-home-bg"
                >
                    <h4>{props?.heading_1}</h4>
                    <p>
                        {props?.heading_2}
                    </p>
                </motion.div>
            </div>
        </section>
    )
};
