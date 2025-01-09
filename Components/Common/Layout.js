import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import dynamic from "next/dynamic";

const Header = dynamic(import("./Header"));
const Footer = dynamic(import("./Footer"));


const Layout = ({ children, data }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <>
      <main className="main-container">
        <Header  />

        {children}

        <Footer />
      </main>
    </>
  );
};

export default Layout;
