"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7526],{7526:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),i=n(9215),s=n(7294);function l(e){var t;let{props:n}=e,l=(0,s.useRef)(null),o=(0,i.Y)(l,{once:!0});return(0,r.jsx)("section",{className:"our-mission bg-black position-relative",children:(0,r.jsx)("div",{className:"max-content-width",children:(0,r.jsxs)("div",{className:"content",ref:l,children:[(0,r.jsxs)("div",{className:"info",style:{transform:o?"none":"translateY(100px)",opacity:o?1:0,transition:"all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s"},children:[(0,r.jsxs)("h2",{className:"text-white sh",children:[null==n?void 0:n.heading_1," ",(0,r.jsx)("br",{}),(0,r.jsx)("span",{children:null==n?void 0:n.heading_2})]}),(null==n?void 0:n.Paragraph)&&(null==n?void 0:null===(t=n.Paragraph)||void 0===t?void 0:t.map((e,t)=>(0,r.jsx)("p",{className:"text-white",children:e},t)))]}),(0,r.jsx)("div",{className:"img-box bg-white h-100 w-100 rounded-2"})]})})})}},5487:function(e,t,n){n.d(t,{K:function(){return i},k:function(){return s}});var r=n(1662);let i=r.Z,s=r.Z},1662:function(e,t,n){n.d(t,{Z:function(){return r}});let r=e=>e},9215:function(e,t,n){n.d(t,{Y:function(){return l}});var r=n(7294),i=n(5487);let s={some:0,all:1};function l(e,{root:t,margin:n,amount:l,once:o=!1}={}){let[c,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||o&&c)return;let r={root:t&&t.current||void 0,margin:n,amount:l};return function(e,t,{root:n,margin:r,amount:l="some"}={}){let o=function(e,t,n){var r;if("string"==typeof e){let s=document;t&&((0,i.k)(!!t.current,"Scope provided, but no element detected."),s=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=s.querySelectorAll(e)),e=n[e]):e=s.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e),c=new WeakMap,a=new IntersectionObserver(e=>{e.forEach(e=>{let n=c.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);"function"==typeof n?c.set(e.target,n):a.unobserve(e.target)}else n&&(n(e),c.delete(e.target))}})},{root:n,rootMargin:r,threshold:"number"==typeof l?l:s[l]});return o.forEach(e=>a.observe(e)),()=>a.disconnect()}(e.current,()=>(a(!0),o?void 0:()=>a(!1)),r)},[t,e,n,o]),c}}}]);