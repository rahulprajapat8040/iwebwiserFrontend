import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ConsultantForm({ type, isInView }) {
    return (
        <div style={{
            transform: isInView ? "none" : "translateX(500px)",
            opacity: isInView ? 1 : 0,
            transition:
                "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s",
        }}>
            <form>
                <div className="mb-3 mb-lg-5">
                    <input
                        type="text"
                        className="form-control"
                        id="MessageName"
                        placeholder="Your Name *"
                    />
                    <p className="mb-0 text-danger">
                    </p>
                </div>
                <div className="mb-3 mb-lg-5">
                    <input
                        type="email"
                        className="form-control"
                        id="MessageEmail"
                        placeholder="Email Address *"
                    />
                    <p className="mb-0 text-danger">
                    </p>
                </div>
                <div className="mb-3 mb-lg-5">
                    <input
                        type="number"
                        className="form-control"
                        id="PhoneInput"
                        placeholder="Phone NUmber *"
                    />
                </div>
                {type === 'home' && <div className="mb-3 mb-lg-5">
                    <input
                        type="text"
                        className="form-control"
                        id="CompanyInput"
                        placeholder="Company"
                    />
                </div>}
                <div className="mb-3 mb-lg-5">
                    <textarea
                        className="form-control"
                        placeholder={`${type === 'home' ? 'Message' : 'How can we Help?'}`}
                        id="MessageTextarea"
                    ></textarea>
                    <p className="mb-0 text-danger">
                    </p>
                </div>
                <div className="Submit-form-btn">
                    <button className="btn btn-outline-dark" type="submit">
                        Book  a free consultant
                    </button>
                </div>
            </form>
        </div>
    )
};
