(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{8371:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/healthcare-and-lifestyle",function(){return s(9872)}])},8753:function(e,t,s){"use strict";function i(e){let{src:t}=e;return"".concat(t)}s.r(t),s.d(t,{default:function(){return i}})},1345:function(e,t,s){"use strict";s.d(t,{V:function(){return n}});var i=s(5893),a=s(5675),l=s.n(a);let n=e=>{let{className:t,src:s,width:a,height:n,sizes:r,alt:c}=e;return(0,i.jsx)(l(),{className:t,src:s,alt:c,width:a,height:n,sizes:r})}},5677:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{noSSR:function(){return n},default:function(){return r}});let i=s(8754),a=(s(7294),i._(s(8976)));function l(e){return{default:(null==e?void 0:e.default)||e}}function n(e,t){return delete t.webpack,delete t.modules,e(t)}function r(e,t){let s=a.default,i={loading:e=>{let{error:t,isLoading:s,pastDelay:i}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i={...i,...e}),i={...i,...t};let r=i.loader;return(i.loadableGenerated&&(i={...i,...i.loadableGenerated},delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?s({...i,loader:()=>null!=r?r().then(l):Promise.resolve(l(()=>null))}):(delete i.webpack,delete i.modules,n(s,i))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return l}});let i=s(8754),a=i._(s(7294)),l=a.default.createContext(null)},8976:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let i=s(8754),a=i._(s(7294)),l=s(2254),n=[],r=[],c=!1;function o(e){let t=e(),s={loading:!0,loaded:null,error:null};return s.promise=t.then(e=>(s.loading=!1,s.loaded=e,e)).catch(e=>{throw s.loading=!1,s.error=e,e}),s}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function h(e){return function(e,t){let s=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),i=null;function n(){if(!i){let t=new d(e,s);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!c){let e=s.webpack?s.webpack():s.modules;e&&r.push(t=>{for(let s of e)if(t.includes(s))return n()})}function o(e,t){!function(){n();let e=a.default.useContext(l.LoadableContext);e&&Array.isArray(s.modules)&&s.modules.forEach(t=>{e(t)})}();let r=a.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),a.default.useMemo(()=>{var t;return r.loading||r.error?a.default.createElement(s.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:i.retry}):r.loaded?a.default.createElement((t=r.loaded)&&t.default?t.default:t,e):null},[e,r])}return o.preload=()=>n(),o.displayName="LoadableComponent",a.default.forwardRef(o)}(o,e)}function m(e,t){let s=[];for(;e.length;){let i=e.pop();s.push(i(t))}return Promise.all(s).then(()=>{if(e.length)return m(e,t)})}h.preloadAll=()=>new Promise((e,t)=>{m(n).then(e,t)}),h.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let s=()=>(c=!0,t());m(r,e).then(s,s)})),window.__NEXT_PRELOADREADY=h.preloadReady;let u=h},9872:function(e,t,s){"use strict";s.r(t);var i=s(5893),a=s(1345),l=s(9008),n=s.n(l),r=s(1664),c=s.n(r);s(7294);var o=s(5152),d=s.n(o);let h=d()(s.e(1372).then(s.bind(s,1372)),{loadableGenerated:{webpack:()=>[1372]}});t.default=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n(),{children:[(0,i.jsx)("title",{children:"Advanced Healthcare & Lifestyle IT Solutions | iWebwiser"}),(0,i.jsx)("meta",{name:"keywords",content:"iWebwiser, Healthcare & Lifestyle, Healthcare & Lifestyle IT Soltions, Healthcare Systems, Healthcare Digital Transformation"}),(0,i.jsx)("meta",{name:"description",content:"iWebwiser has deep knowledge and proven experience in healthcare IT services and it is designed for every segment of the healthcare & lifestyle industry."}),(0,i.jsx)("link",{rel:"canonical",href:"https://www.iwebwiser.com/healthcare-and-lifestyle"}),(0,i.jsx)("meta",{name:"robots",content:"index, follow"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@iWebwiser"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Advanced Healthcare & Lifestyle IT Solutions | iWebwiser"}),(0,i.jsx)("meta",{name:"twitter:site:id",content:"@iWebwiser"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@iWebwiser"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FofferHealthcare.webp&w=1920&q=75"}),(0,i.jsx)("meta",{name:"MobileOptimized",content:"width"}),(0,i.jsx)("meta",{name:"HandheldFriendly",content:"true"}),(0,i.jsx)("meta",{property:"og:title",content:"Advanced Healthcare & Lifestyle IT Solutions | iWebwiser"}),(0,i.jsx)("meta",{property:"og:url",content:"https://www.iwebwiser.com/healthcare-and-lifestyle"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:site_name",content:"iWebwiser"}),(0,i.jsx)("meta",{property:"og:image",content:"https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FofferHealthcare.webp&w=1920&q=75"}),(0,i.jsx)("meta",{property:"og:description",content:"iWebwiser has deep knowledge and proven experience in healthcare IT services and it is designed for every segment of the healthcare & lifestyle industry."})]}),(0,i.jsxs)(h,{children:[(0,i.jsx)("section",{className:"Industry-banner",children:(0,i.jsx)("div",{className:"max-content-width",children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsxs)("div",{className:"row align-items-start",children:[(0,i.jsxs)("div",{className:"col-12 col-lg-7 px-0",children:[(0,i.jsxs)("div",{className:"industry-navigate",children:[(0,i.jsx)(c(),{href:"/healthcare-and-lifestyle",as:"/healthcare-and-lifestyle",role:"button",className:"btn btn-navigate active",children:"Hospitality & Lifestyle"}),(0,i.jsx)(c(),{role:"button",href:"/e-learning-and-education",as:"/e-learning-and-education",className:"btn btn-navigate",children:"E-learning & Education"}),(0,i.jsx)(c(),{href:"/retail-ecommerce",role:"button",className:"btn btn-navigate",children:"Retail & eCommerce"}),(0,i.jsx)(c(),{href:"/real-estate",as:"/real-estate",role:"button",className:"btn btn-navigate",children:"Real Estate"}),(0,i.jsx)(c(),{href:"/tour-and-travel",as:"/tour-and-travel",role:"button",className:"btn btn-navigate",children:"Tour & Travels"})]}),(0,i.jsxs)("div",{className:"Banner-content",children:[(0,i.jsxs)("h4",{className:"title",children:["Our Digital Solutions For The"," ",(0,i.jsx)("span",{children:"Healthcare and Lifestyle Industry."})]}),(0,i.jsx)("p",{children:"iWebwiser, a reputable healthcare technology solutions and services provider, brings together its strong capabilities in application development and its extensive knowledge of the healthcare field to help you digitize your healthcare system. We create efficient, secure, scalable, and completely customized healthcare and lifestyle IT solutions that increase the quality of care for patients and lower the costs of operations."}),(0,i.jsx)("p",{children:"With the help of IT and IoT technologies, iWebwiser helps the healthcare and lifestyle industry with better services, increases customer satisfaction levels, and promotes sustainable growth in today's technologically driven environment. As a leading healthcare technology provider, we provide technical and operational solutions to diverse categories of clients across the healthcare spectrum. With our deep knowledge and proven experience in health IT consulting services, we have provided innovative healthcare and lifestyle IT solutions by leveraging the latest technologies, including digital transformation, mobility, big data, analytics, and cloud computing."}),(0,i.jsx)("p",{className:"fw-bold",children:"Get your digital transformation today by contacting iWebwiser."}),(0,i.jsx)(c(),{href:"/contact-us",as:"/contact-us",className:"btn btn-outline-dark",role:"button",children:"Contact Us Now"})]})]}),(0,i.jsx)("div",{className:"col-12 col-lg-5 px-0",children:(0,i.jsx)("div",{className:"healthcareImg",children:(0,i.jsx)(a.V,{src:"/assets/img/health&lifestyleBanner.webp",alt:"health&lifestyleBanner",width:0,height:0,sizes:"100vw"})})})]})})})}),(0,i.jsx)("section",{className:"segments-section",children:(0,i.jsx)("div",{className:"max-content-width",children:(0,i.jsxs)("div",{className:"container-fluid",children:[(0,i.jsx)("h4",{className:"title text-center",children:"Segments that We Serve"}),(0,i.jsx)("p",{className:"mx-auto text-center",children:"iWebwiser IT solutions are designed for every segment of the healthcare and lifestyle industry. We provide customized healthcare and lifestyle IT solutions to our clients according to their requirements."}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-12 col-md-4 px-0",children:(0,i.jsxs)("div",{className:"segment-card",children:[(0,i.jsx)("h4",{className:"title",children:"Healthcare Providers"}),(0,i.jsx)("p",{children:"Digital services can catalyze innovations for clinics, hospitals, and other medical providers."})]})}),(0,i.jsx)("div",{className:"col-12 col-md-4 px-0",children:(0,i.jsxs)("div",{className:"segment-card",children:[(0,i.jsx)("h4",{className:"title",children:"Pharma Companies"}),(0,i.jsx)("p",{children:"Effective CRM solutions and productivity suites to revolutionize your operations and business."})]})}),(0,i.jsx)("div",{className:"col-12 col-md-4 px-0",children:(0,i.jsxs)("div",{className:"segment-card border-0",children:[(0,i.jsx)("h4",{className:"title",children:"Healthcare Startups"}),(0,i.jsx)("p",{children:"Benefit from our expertise in the field with our flexible engagement model and competitive offers."})]})})]})]})})}),(0,i.jsx)("section",{className:"offers",children:(0,i.jsx)("div",{className:"max-content-width",children:(0,i.jsxs)("div",{className:"container-fluid",children:[(0,i.jsx)("h4",{className:"title",children:"Our Services"}),(0,i.jsx)("p",{className:"description",children:"Each segment is offered by us with equal commitment and attention. Take advantage of the exclusive services we offer to you."}),(0,i.jsxs)("div",{className:"row service-content",children:[(0,i.jsx)("div",{className:"col-12 col-md-4 px-0",children:(0,i.jsxs)("div",{className:"service",children:[(0,i.jsx)("h6",{className:"title",children:"Digital Transformation"}),(0,i.jsx)("p",{className:"desc",children:"Take advantage of the digital revolution's power to create more innovative solutions with the help of iWebwiser."})]})}),(0,i.jsx)("div",{className:"col-12 col-md-4 px-0",children:(0,i.jsxs)("div",{className:"service",children:[(0,i.jsx)("h6",{className:"title",children:"Application Development"}),(0,i.jsx)("p",{className:"desc",children:"Modernize your business applications to improve customer service and create fresh revenue sources."})]})}),(0,i.jsx)("div",{className:"col-12 col-md-4 px-0",children:(0,i.jsxs)("div",{className:"service",children:[(0,i.jsx)("h6",{className:"title",children:"Cloud Services Managed Cloud Services"}),(0,i.jsx)("p",{className:"desc",children:"We can help you migrate and manage your applications to the most advanced cloud platforms like AWS and Google Cloud."})]})}),(0,i.jsx)("div",{className:"col-12 col-md-4 px-0",children:(0,i.jsxs)("div",{className:"service",children:[(0,i.jsx)("h6",{className:"title",children:"Product Engineering"}),(0,i.jsx)("p",{className:"desc",children:"Develop your digital product using our engineering expertise using DevOps and a flexible approach to speedy time-to-market."})]})}),(0,i.jsx)("div",{className:"col-12 col-md-4 px-0",children:(0,i.jsxs)("div",{className:"service",children:[(0,i.jsx)("h6",{className:"title",children:"Experience Design"}),(0,i.jsx)("p",{className:"desc",children:"Improve user experience, increase customer reach, and distinguish your brand through user-friendly designs and advanced graphic designs."})]})}),(0,i.jsx)("div",{className:"col-12 col-md-4 px-0",children:(0,i.jsxs)("div",{className:"service",children:[(0,i.jsx)("h6",{className:"title",children:"Offshore Development Center"}),(0,i.jsx)("p",{className:"desc",children:"High-quality software development within a specific time frame and at a low development cost by iWebwiser's professional developers."})]})})]}),(0,i.jsx)("div",{className:"offer-link",children:(0,i.jsx)(c(),{role:"button",className:"btn btn-outline-dark",href:"/case-study-unlock-your-solutions",children:"Let’s Find Solutions With Us"})})]})})}),(0,i.jsx)("section",{className:"our-solution",children:(0,i.jsx)("div",{className:"max-content-width",children:(0,i.jsxs)("div",{className:"row mx-0 justify-content-between",children:[(0,i.jsx)("div",{className:"col-12 col-lg-6 px-0",children:(0,i.jsxs)("div",{className:"our-solution-content",children:[(0,i.jsx)("h4",{className:"title",children:"Our solutions"}),(0,i.jsx)("p",{className:"para",children:"Healthcare Technology Solutions For Improved Patient Care."}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"Clinic Management Systems."})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"Hospital Information System."})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"Health Insurance System."})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"Care Solutions."})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"Nursing Care System."})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"Healthcare CRM."})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"Patient Engagement."})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"Healthcare eCommerce."})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"Patient Tracking System."})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:"Electronic Medical Records."})})]})]})}),(0,i.jsx)("div",{className:"col-12 col-lg-3 px-0",children:(0,i.jsx)("div",{className:"ourSolutions",children:(0,i.jsx)("div",{className:"contentImg",children:(0,i.jsx)(a.V,{src:"/assets/img/ourSolution.webp",alt:"offerImg",width:0,height:0,sizes:"100vw"})})})})]})})}),(0,i.jsx)("section",{className:"Related",children:(0,i.jsx)("div",{className:"max-content-width",children:(0,i.jsxs)("div",{className:"container-fluid",children:[(0,i.jsxs)("h2",{className:"title",children:["Check Our Solutions For ",(0,i.jsx)("span",{children:"Hospitality & Lifestyle"})," ","Industry Solution."]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-12 col-md-4 px-lg-0",children:(0,i.jsxs)("div",{className:"Related-card",children:[(0,i.jsx)("div",{className:"Related-img",children:(0,i.jsx)(a.V,{src:"/assets/img/portfolio11.webp",alt:"RelatedImg",width:0,height:0,sizes:"100vw"})}),(0,i.jsx)("div",{className:"card-img-overlay",children:(0,i.jsx)("div",{className:"overlay-img",children:(0,i.jsx)(c(),{href:"/extraordinary-hospital-of-africa",as:"/extraordinary-hospital-of-africa",className:"stretched-link",children:(0,i.jsx)(a.V,{src:"/assets/img/EHOALogo.webp",alt:"RelatedImg",width:0,height:0,sizes:"100vw"})})})})]})}),(0,i.jsx)("div",{className:"col-12 col-md-4 px-lg-0",children:(0,i.jsxs)("div",{className:"Related-card",children:[(0,i.jsx)("div",{className:"Related-img",children:(0,i.jsx)(a.V,{src:"/assets/img/Related-section2.webp",alt:"RelatedImg",width:0,height:0,sizes:"100vw"})}),(0,i.jsx)("div",{className:"card-img-overlay",children:(0,i.jsx)("div",{className:"overlay-img",children:(0,i.jsx)(c(),{href:"/medi-fellows",className:"stretched-link",children:(0,i.jsx)(a.V,{src:"/assets/img/RelatedLogo2.webp",alt:"RelatedImg",width:0,height:0,sizes:"100vw"})})})})]})}),(0,i.jsx)("div",{className:"col-12 col-md-4 px-lg-0",children:(0,i.jsxs)("div",{className:"Related-card",children:[(0,i.jsx)("div",{className:"Related-img",children:(0,i.jsx)(a.V,{src:"/assets/img/Related-section.webp",alt:"RelatedImg",width:0,height:0,sizes:"100vw"})}),(0,i.jsx)("div",{className:"card-img-overlay",children:(0,i.jsx)("div",{className:"overlay-img",children:(0,i.jsx)(c(),{href:"/health-power",as:"/health-power",className:"stretched-link",children:(0,i.jsx)(a.V,{src:"/assets/img/RelatedLogo3.webp",alt:"RelatedImg",width:0,height:0,sizes:"100vw"})})})})]})})]})]})})})]})]})},5152:function(e,t,s){e.exports=s(5677)},9008:function(e,t,s){e.exports=s(2636)}},function(e){e.O(0,[1664,5675,9774,2888,179],function(){return e(e.s=8371)}),_N_E=e.O()}]);