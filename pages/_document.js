// /* eslint-disable max-len */
// import Document, { Head, Html, Main, NextScript } from 'next/document';
// import React from 'react';

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return { ...initialProps };
//   }
//   render() {
//     return (
//       <Html>
//         <Head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
//           rel="stylesheet"
//         />
//     <link
//           rel="shortcut icon"
//           href="/assets/favicon-16x16.png"
//           sizes="16x16"
//         />

//      <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//           integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
//           crossorigin="anonymous"
//         />
//      {/* <link
//           href="https://unpkg.com/aos@2.3.1/dist/aos.css"
//           rel="stylesheet"
//         /> */}
//       <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.css"
//           integrity="sha512-4wfcoXlib1Aq0mUtsLLM74SZtmB73VHTafZAvxIp/Wk9u1PpIsrfmTvK0+yKetghCL8SHlZbMyEcV8Z21v42UQ=="
//           crossorigin="anonymous"
//           referrerPolicy="no-referrer"
//         />
//      <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.css"
//         ></link>
//      <link
//           rel="stylesheet"
//           href="/assets/loader.css"
//         ></link>
//       <script
//           type="text/javascript"
//           src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"
//         ></script>
//    {/* <script
//           type="text/javascript"
//           src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"
//         ></script> */}
//     <script src="/assets/slick-1.8.1/slick/slick.js"></script>
//       <script src="/assets/js/Bootstrap5.3_js/bootstrap.bundle.js"></script>
//       {/* <!-- SLick Slider Js script start here... --> */}

//      <script
//           src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/fontawesome.js"
//           integrity="sha512-AfBF4iETeZa9jnGpwNC2NywAQPQR2r+ibHrgT084mHDfqSss8U+/dz6gDKmc/htKWjYlT3uOSLTrhdk+PpiJ4A=="
//           crossorigin="anonymous"
//           referrerPolicy="no-referrer"
//         ></script>
//    {/* <script
//           nomodule
//           src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.6.0/polyfill.min.js"
//           crossorigin="anonymous"
//         ></script> */}
//         {/* <script
// type="text/javascript"
//           nomodule
//           src="https://polyfill.io/v3/polyfill.min.js?features=Object.assign%2CElement.prototype.append%2CNodeList.prototype.forEach%2CCustomEvent%2Csmoothscroll"
//           crossorigin="anonymous"
//         ></script> */}
//         {/* <!-- main script of this project --> */}
//          {/* <script type="text/javascript" src="/assets/js/Iwebwiser.js"></script>  */}

//         <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.min.js"></script>
//          {/* <script type="text/javascript" src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>  */}
//         <script type="text/javascript" src="/assets/js/new.js"></script>
//         </Head>
//         <body style={{ display: "block", overflowX: "hidden" }}>
//           <Main />
//           <NextScript />
//         </body>
//       </ Html>
//     );
//   }
// }

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="/assets/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.css"
          integrity="sha512-4wfcoXlib1Aq0mUtsLLM74SZtmB73VHTafZAvxIp/Wk9u1PpIsrfmTvK0+yKetghCL8SHlZbMyEcV8Z21v42UQ=="
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.css"
        ></link>
        <link rel="stylesheet" href="/assets/loader.css"></link>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"
        ></script>
        <script
          type="text/javascript"
          src="/assets/slick-1.8.1/slick/slick.js"
        ></script>
        <script
          type="text/javascript"
          src="/assets/js/Bootstrap5.3_js/bootstrap.bundle.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/fontawesome.js"
          integrity="sha512-AfBF4iETeZa9jnGpwNC2NywAQPQR2r+ibHrgT084mHDfqSss8U+/dz6gDKmc/htKWjYlT3uOSLTrhdk+PpiJ4A=="
          crossorigin="anonymous"
        ></script>
        {/* <script src="/assets/js/Iwebwiser.js"></script> */}

        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.min.js"
        ></script>
        <script src="
https://cdn.jsdelivr.net/npm/tsparticles-preset-confetti@2.12.0/tsparticles.preset.confetti.min.js
"></script>
        <script type="text/javascript" src="/assets/js/new.js"></script>

        <style>
          {`
         .loader-container {
          width: 100%;
          height: 100vh;
          min-height:100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: fixed;
          background: #000000;
          z-index: 99999999;
          overflow: hidden;
        }
        
        .spinner {
          border: 3px solid #0c0c0c;
          border-radius: 50%;
          border-top: 3px solid #ffffff;
          width: 30px;
          height: 30px;
          animation: spin-anim 1.2s linear infinite;
        }
        
        .loader-container p .fade-heading.head-visible {
          color: #ffffff;
          font-family: "Poppins";
          font-size: 32px;
          font-style: normal;
          font-weight: 300;
          line-height: 135.5%;
          margin-top: 24px;
          display: inline-block;
          opacity: 1;
          transition: all 0.5s ease;
          -webkit-transition: all 0.5s ease;
          -moz-transition: all 0.5s ease;
          -ms-transition: all 0.5s ease;
          -o-transition: all 0.5s ease;
        }
        
        @keyframes spin-anim {
          0% {
            transform: rotate(0deg);
          }
        
          80% {
            transform: rotate(360deg);
          }
        
          100% {
            transform: rotate(360deg);
          }
        }

          @media screen and (max-width: 1399px){

            .loader-container p .fade-heading.head-visible {
              font-size: 32px !important;
            }

          }

          @media screen and (max-width: 991px){

            .loader-container p .fade-heading.head-visible {
              font-size: 26px !important;
            }

          }

          @media screen and (max-width: 567px){

            .loader-container p .fade-heading.head-visible {
              font-size: 18px !important;
              text-align: center !important;
            
          }
        `}
        </style>
      </Head>
      <body style={{ display: "block", overflowX: "hidden" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
