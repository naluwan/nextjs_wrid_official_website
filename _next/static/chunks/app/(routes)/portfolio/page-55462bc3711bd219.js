(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[795,208],{8351:function(e,t,l){Promise.resolve().then(l.bind(l,8999))},8999:function(e,t,l){"use strict";l.r(t);var n=l(7437),a=l(6691),s=l.n(a),r=l(2265),i=l(2476),d=l(1005),o=l(415),c=l.n(o);let u=c()(()=>l.e(636).then(l.bind(l,6636)),{loadableGenerated:{webpack:()=>[6636]},ssr:!1});t.default=()=>{let[e,t]=r.useState("all"),[l,a]=r.useState(null),[o,c]=r.useState(!1),f="all"===e?i.F:i.F.filter(t=>t.category===e),m=["all",...Array.from(new Set(i.F.map(e=>e.category)))];return(0,n.jsxs)("div",{className:"container mx-auto p-8",children:[(0,n.jsx)("h1",{className:"mb-4 text-3xl font-bold",children:"作品集"}),(0,n.jsxs)("div",{className:"mb-8 flex flex-col md:flex-row",children:[(0,n.jsx)("p",{children:"吾 亦以居者為中心發想"}),(0,n.jsx)("p",{className:"hidden md:block",children:"，"}),(0,n.jsx)("p",{children:"境 即是描摹故事的場域"})]}),(0,n.jsx)("div",{className:"mb-4",children:m.map(l=>(0,n.jsx)("button",{onClick:()=>{t(l),a(null)},className:"mr-4 rounded px-4 py-2 ".concat(e===l?"bg-blue-500 text-white":"bg-gray-200 text-gray-700"),children:"all"===l?"全部":"home"===l?"居住空間":"商業空間"},l))}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:f.sort((e,t)=>e.images.length-t.images.length).map(e=>(0,n.jsx)("div",{children:(0,n.jsx)("button",{onClick:()=>{a(e),c(!0)},children:(0,n.jsxs)("div",{className:"transform rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105",children:[(0,n.jsx)("h2",{className:"mb-2 text-xl font-bold",children:e.label}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-4",children:e.images.map(e=>(0,n.jsx)("div",{children:(0,n.jsx)(s(),{src:e.img,alt:e.name,width:400,height:300,priority:!0,className:"h-auto w-auto rounded-md"})},e.id))})]})})},e.id))}),(0,n.jsxs)(u,{open:o,onClose:()=>{c(!1)},children:[(0,n.jsx)("h1",{className:"text-center text-3xl tracking-widest",children:null==l?void 0:l.label}),(0,n.jsx)(d.Z,{collection:l,autoPlay:!1},null==l?void 0:l.id)]})]})}},1005:function(e,t,l){"use strict";l.d(t,{Z:function(){return Sildes_Slides}});var n=l(7437),a=l(2265),s=l(8278),r=l(8349),i=l(6691),d=l.n(i),o=l(9311),c=l(2339),slide_next=e=>{let{disabled:t}=e,l=(0,s.oc)();return(0,n.jsx)("button",{className:"absolute right-0 top-[45%] z-20 bg-transparent p-0 px-2",onClick:()=>l.slideNext(),disabled:!t,children:(0,n.jsx)(c.Z,{className:(0,o.cn)("h-10 w-10",t?"text-black":"text-slate-400/50")})})},u=l(266),slide_prev=e=>{let{disabled:t}=e,l=(0,s.oc)();return(0,n.jsx)("button",{className:"absolute left-0 top-[45%] z-20 bg-transparent p-0 px-2",onClick:()=>l.slidePrev(),disabled:!t,children:(0,n.jsx)(u.Z,{className:(0,o.cn)("h-10 w-10",t?"text-black":"text-slate-400/50")})})},Sildes_Slides=e=>{let{collection:t,autoPlay:l}=e,[i,c]=a.useState(!0),[u,f]=a.useState(!1),[m,x]=a.useState(1);return a.useEffect(()=>{null!==t&&c(m<(null==t?void 0:t.images.length)),f(m>1)},[m,t]),(0,n.jsxs)(s.tq,{modules:[r.W_,r.tl,r.s5,r.pt,r.xW],slidesPerView:1,pagination:{type:l?"bullets":"fraction",clickable:l},initialSlide:0,autoplay:l&&{delay:5e3},effect:"fade",onSlideChange:e=>x(e.activeIndex+1),children:[t&&t.images.map(e=>(0,n.jsx)(s.o5,{children:(0,n.jsx)(d(),{src:e.img,alt:e.name,width:300,height:200,className:(0,o.cn)("h-full max-h-[570px] w-full object-contain")})},"".concat(e.name,"-slide"))),!l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(slide_next,{disabled:i}),(0,n.jsx)(slide_prev,{disabled:u})]})]})}},415:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return dynamic}});let n=l(1024);l(2265);let a=n._(l(54));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function dynamic(e,t){let l=a.default,n={loading:e=>{let{error:t,isLoading:l,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e),Object.assign(n,t);let s=n.loader;return l({...n,loader:()=>null!=s?s().then(convertModule):Promise.resolve(convertModule(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3388:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{suspense:function(){return suspense},NoSSR:function(){return NoSSR}}),l(1024),l(2265);let n=l(4922);function suspense(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function NoSSR(e){let{children:t}=e;return t}},54:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _default}});let n=l(1024),a=n._(l(2265)),s=l(3388),_default=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function LoadableComponent(e){let l=t.loading,n=a.default.createElement(l,{isLoading:!0,pastDelay:!0,error:null}),r=t.ssr?a.default.Fragment:s.NoSSR,i=t.lazy;return a.default.createElement(a.default.Suspense,{fallback:n},a.default.createElement(r,null,a.default.createElement(i,e)))}return t.lazy=a.default.lazy(t.loader),LoadableComponent.displayName="LoadableComponent",LoadableComponent}}},function(e){e.O(0,[625,44,103,971,864,744],function(){return e(e.s=8351)}),_N_E=e.O()}]);