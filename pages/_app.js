import "@/styles/Bootstrap5.3_css/bootstrap.css";
import "@/public/assets/slick-1.8.1/slick/slick.css";
// import "@/public/assets/slick-1.8.1/slick/slick-theme.css";
import "@/styles/Iwebwiser.css";
import "@/styles/Responsive.css";
// import '@/public/assets/slick-1.8.1/slick/slick'
// import '@/public/assets/js/Iwebwiser'
// import '@/public/assets/js/new'
import { ToastContainer } from "material-react-toastify";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { Router } from "next/router";
import "material-react-toastify/dist/ReactToastify.css";

export default function NewApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [Router.events]);
  return (
    <>
       <Loading />
    <div id="mainNextDiv">
      {loading ? <Loading /> : <Component {...pageProps} />}
      <ToastContainer
        autoClose={2000}
        hideProgressBar
        closeOnClick
        rtl={false}
      />
    </div>
    </>
  );
}
