(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1031],{1915:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/iwebwiser-testimonials-your-trust",function(){return l(2831)}])},8753:function(e,t,l){"use strict";function i(e){let{src:t}=e;return"".concat(t)}l.r(t),l.d(t,{default:function(){return i}})},3260:function(e,t,l){"use strict";l.d(t,{l:function(){return s},n:function(){return i}});let i="http://213.210.21.175:8001/api/v1",s={nav_bar:"".concat(i,"/nav/getNavBar"),getBanner:"".concat(i,"/banner/getAllBanner"),getAllService:"".concat(i,"/service/getAllService?showAll=true"),getAllSubService:"".concat(i,"/subService/getAllSubService?showAll=true"),getAllCaseStudy:"".concat(i,"/caseStudy/getAllCaseStudy?showAll=true"),getCaseStudyBySlug:"".concat(i,"/caseStudy/getCaseStudyBySlug"),getCaseIndusty:"".concat(i,"/caseStudy/getCaseIndusty"),getAllIndustry:"".concat(i,"/industry/getAllIndustry?showAll=true"),getIndustryDetailBySlug:"".concat(i,"/industryPage/getIndustryPageBySlug"),getAllCertificate:"".concat(i,"/certificate/getAllCertificate?showAll=true"),getAllOurClient:"".concat(i,"/ourClient/getAllOurClient?showAll=true"),getAlltechnology:"".concat(i,"/technology/getAlltechnology?showAll=true"),getAllBlog:"".concat(i,"/blog/getAllBlog?showAll=true"),getAllFeedback:"".concat(i,"/feedback/getAllFeedback?showAll=true"),getActivesocialMedia:"".concat(i,"/socialMedia/getActiveSocialMedia"),getAllHeader:"".concat(i,"/header/getAllHeader"),getBranchByPageId:"".concat(i,"/branch/getBranchByPageId"),getAllServiceFaq:"".concat(i,"/serviceFaq/getAllServiceFaq?showAll=true"),getServiceDetailBySlug:"".concat(i,"/serviceDetail/getServicedetailBySlug"),getField:"".concat(i,"/field/getAllField"),getFieldBySlug:"".concat(i,"/field/getFieldBySlug"),getAllSteps:"".concat(i,"/steps/getAllSteps")}},1345:function(e,t,l){"use strict";l.d(t,{V:function(){return n}});var i=l(5893),s=l(5675),a=l.n(s);let n=e=>{let{className:t,src:l,width:s,height:n,sizes:r,alt:o}=e;return(0,i.jsx)(a(),{className:t,src:l,alt:o,width:s,height:n,sizes:r})}},757:function(e,t,l){"use strict";l.d(t,{t:function(){return s}});var i=l(7066);let s=async(e,t)=>{try{let l=await (0,i.Z)(e,{headers:{"Content-Type":(null==t?void 0:t.multipart)===!0?"multipart/form-data":"application/json"},...(null==t?void 0:t.multipart)===!0&&{onUploadProgress:t.progressEvent},method:(null==t?void 0:t.method)||"GET",data:(null==t?void 0:t.data)&&(null==t?void 0:t.multipart)===!0?null==t?void 0:t.data:(null==t?void 0:t.data)?JSON.stringify(null==t?void 0:t.data):void 0});if(!l.statusText&&200!=l.status)throw Error(l.data.message);return l.data}catch(e){return console.log("error",e),e}finally{}}},5677:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{noSSR:function(){return n},default:function(){return r}});let i=l(8754),s=(l(7294),i._(l(8976)));function a(e){return{default:(null==e?void 0:e.default)||e}}function n(e,t){return delete t.webpack,delete t.modules,e(t)}function r(e,t){let l=s.default,i={loading:e=>{let{error:t,isLoading:l,pastDelay:i}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i={...i,...e}),i={...i,...t};let r=i.loader;return(i.loadableGenerated&&(i={...i,...i.loadableGenerated},delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?l({...i,loader:()=>null!=r?r().then(a):Promise.resolve(a(()=>null))}):(delete i.webpack,delete i.modules,n(l,i))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return a}});let i=l(8754),s=i._(l(7294)),a=s.default.createContext(null)},8976:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let i=l(8754),s=i._(l(7294)),a=l(2254),n=[],r=[],o=!1;function c(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),i=null;function n(){if(!i){let t=new d(e,l);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!o){let e=l.webpack?l.webpack():l.modules;e&&r.push(t=>{for(let l of e)if(t.includes(l))return n()})}function c(e,t){!function(){n();let e=s.default.useContext(a.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let r=s.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return s.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),s.default.useMemo(()=>{var t;return r.loading||r.error?s.default.createElement(l.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:i.retry}):r.loaded?s.default.createElement((t=r.loaded)&&t.default?t.default:t,e):null},[e,r])}return c.preload=()=>n(),c.displayName="LoadableComponent",s.default.forwardRef(c)}(c,e)}function h(e,t){let l=[];for(;e.length;){let i=e.pop();l.push(i(t))}return Promise.all(l).then(()=>{if(e.length)return h(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{h(n).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let l=()=>(o=!0,t());h(r,e).then(l,l)})),window.__NEXT_PRELOADREADY=u.preloadReady;let m=u},2831:function(e,t,l){"use strict";l.r(t);var i=l(5893),s=l(9008),a=l.n(s),n=l(7294),r=l(6066),o=l(5152),c=l.n(o),d=l(7740),u=l(1345),h=l(3260),m=l(757);let p=c()(l.e(1372).then(l.bind(l,1372)),{loadableGenerated:{webpack:()=>[1372]}});t.default=e=>{let[t,l]=(0,n.useState)([]);console.log(t);let s=async()=>{try{let e=await (0,m.t)(h.l.getAllFeedback),t=await e.data.feedbacks;l(t),console.log(t)}catch(e){console.log(e)}};return(0,n.useEffect)(()=>{s()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"Voices of Success: Hear What Our Clients Say | iWebwiser"}),(0,i.jsx)("meta",{name:"keywords",content:"e"}),(0,i.jsx)("meta",{name:"description",content:" iWebwiser is a globally reliable company, trusted by thousands of business owners with their projects, and you can hear what our clients say about our work."}),(0,i.jsx)("link",{rel:"canonical",href:"https://www.iwebwiser.com/iwebwiser-testimonials-your-trust"}),(0,i.jsx)("meta",{name:"robots",content:"index, follow"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@iWebwiser"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Voices of Success: Hear What Our Clients Say | iWebwiser"}),(0,i.jsx)("meta",{name:"twitter:site:id",content:"@iWebwiser"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@iWebwiser"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FTestimonial-BG.webp&w=1920&q=75"}),(0,i.jsx)("meta",{name:"MobileOptimized",content:"width"}),(0,i.jsx)("meta",{name:"HandheldFriendly",content:"true"}),(0,i.jsx)("meta",{property:"og:title",content:"Voices of Success: Hear What Our Clients Say | iWebwiser"}),(0,i.jsx)("meta",{property:"og:url",content:"https://www.iwebwiser.com/iwebwiser-testimonials-your-trust"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:site_name",content:"iWebwiser"}),(0,i.jsx)("meta",{property:"og:image",content:"https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2FTestimonial-BG.webp&w=1920&q=75"}),(0,i.jsx)("meta",{property:"og:description",content:" iWebwiser is a globally reliable company, trusted by thousands of business owners with their projects, and you can hear what our clients say about our work."})]}),(0,i.jsxs)(p,{children:[(0,i.jsx)("section",{className:"testimonial-home",children:(0,i.jsx)("div",{className:"max-content-width",children:(0,i.jsx)("div",{className:"testimonial-home-bg",children:(0,i.jsx)(d.E.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0},exit:{opacity:0,y:75}},initial:"hidden",animate:"visible",transition:{duration:.6,delay:.8},children:(0,i.jsx)("h4",{children:"Our Trusted Clients!"})})})})}),(0,i.jsx)("section",{className:"Testimonials",children:(0,i.jsx)("div",{className:"max-content-width",children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-12 col-md-5 px-0",children:(0,i.jsxs)("div",{className:"testimonial-text",children:[(0,i.jsx)("h4",{children:"Discover Why We Are Preferred by Our Clients."}),(0,i.jsx)("div",{className:"testimonial-left",children:(0,i.jsx)("div",{className:"testimonial-img",children:(0,i.jsx)(u.V,{src:"/assets/img/Testimonial-BG.webp",width:0,height:0,sizes:"100vw",alt:"Testimonial-img"})})})]})}),(0,i.jsx)("div",{className:"col-12 col-md-7 px-0",children:(0,i.jsx)("div",{className:"testimonial-slide-content",children:(0,i.jsxs)("div",{className:"row mx-0",children:[(0,i.jsx)("div",{className:"col-12 col-md-6",children:(0,i.jsx)("div",{className:"testimonial-slide-position",children:(0,i.jsx)(r.Z,{...g,className:"Testimonial-slide-1",children:t.map(e=>(0,i.jsx)("div",{className:"testimonial-card",children:(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsx)("p",{children:e.description}),(0,i.jsx)("h5",{children:e.title}),(0,i.jsx)("h6",{children:e.sub_title})]},e.id)}))})})}),(0,i.jsx)("div",{className:"col-12 col-md-6 d-none d-md-block",children:(0,i.jsx)("div",{className:"testimonial-slide-position",children:(0,i.jsx)(r.Z,{...f,className:"Testimonial-slide-2",children:t.map(e=>(0,i.jsx)("div",{className:"testimonial-card",children:(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsx)("p",{children:e.description}),(0,i.jsx)("h5",{children:e.title}),(0,i.jsx)("h6",{children:e.sub_title})]})}))})})})]})})})]})})})})]})]})};var g={slidesToShow:2.1,slidesToScroll:1,arrows:!1,dots:!1,infinite:!0,swipe:!0,swipeToSlide:!0,draggable:!0,autoplay:!0,autoplaySpeed:0,speed:8e3,touchMove:!1,vertical:!0,pauseOnHover:!0,cssEase:"linear",adaptiveHeight:!1,responsive:[{breakpoint:768,settings:{arrows:!1,slidesToShow:1}},{breakpoint:480,settings:{arrows:!1,slidesToShow:1}}]},f={slidesToShow:2,slidesToScroll:1,draggable:!0,arrows:!1,dots:!1,infinite:!0,swipe:!0,swipeToSlide:!0,autoplay:!0,autoplaySpeed:0,speed:8e3,touchMove:!1,vertical:!0,pauseOnHover:!0,cssEase:"linear",adaptiveHeight:!1,responsive:[{breakpoint:768,settings:{arrows:!1,slidesToShow:1}},{breakpoint:480,settings:{arrows:!1,slidesToShow:1}}]}},5152:function(e,t,l){e.exports=l(5677)},9008:function(e,t,l){e.exports=l(2636)},5487:function(e,t,l){"use strict";l.d(t,{K:function(){return s},k:function(){return a}});var i=l(1662);let s=i.Z,a=i.Z},1662:function(e,t,l){"use strict";l.d(t,{Z:function(){return i}});let i=e=>e}},function(e){e.O(0,[5675,7740,7066,6066,9774,2888,179],function(){return e(e.s=1915)}),_N_E=e.O()}]);