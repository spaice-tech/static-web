(this["webpackJsonpspaice-web"]=this["webpackJsonpspaice-web"]||[]).push([[0],{100:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/matteo.d8189fb3.jpg"},101:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/guillem.8b5cb9d8.jpg"},102:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/lasalle.5fa91350.png"},103:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/imprsis.0db4b52e.png"},104:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/nicholas.bc1579f4.jpg"},105:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/ethz.6a08eb57.png"},106:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/ronald.a50530cf.png"},107:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/oxford.23b3a95f.png"},108:function(e,t,i){},109:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),c=i(7),r=i(9),n=i(48),o=i(2),l=i(4),d=i(0),b=["component","layout"],j=function(e){var t=e.component,i=e.layout,s=Object(l.a)(e,b);return i=void 0===i?function(e){return Object(d.jsx)(d.Fragment,{children:e.children})}:i,Object(d.jsx)(c.a,Object(o.a)(Object(o.a)({},s),{},{render:function(e){return Object(d.jsx)(i,{children:Object(d.jsx)(t,Object(o.a)({},e))})}}))},m=i(22),h=i(5),u=i.n(h),v=i(41),O=a.a.forwardRef((function(e,t){var i=Object(s.useState)(window.innerHeight),a=Object(m.a)(i,2),c=a[0],r=a[1],n=Object(s.useState)([]),o=Object(m.a)(n,2),l=o[0],b=o[1],j=function(){return l.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!j())for(var e=function(){var e=l[t],i=e.getAttribute("data-reveal-delay"),s=e.getAttribute("data-reveal-offset")?e.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=c-t})(e.getAttribute("data-reveal-container")?e.closest(e.getAttribute("data-reveal-container")):e,s)&&!e.classList.contains("is-revealed")&&(i&&0!==i?setTimeout((function(){e.classList.add("is-revealed")}),i):e.classList.add("is-revealed"))},t=0;t<l.length;t++)e()};Object(s.useImperativeHandle)(t,(function(){return{init:function(){b(document.querySelectorAll("[class*=reveal-]"))}}})),Object(s.useEffect)((function(){"undefined"!==typeof l&&l.length>0&&(j()||(window.addEventListener("scroll",O),window.addEventListener("resize",p)),h())}),[l]);var u=function(){j()&&(window.removeEventListener("scroll",O),window.removeEventListener("resize",p))},O=Object(v.throttle)((function(){u(),h()}),30),p=Object(v.throttle)((function(){r(window.innerHeight)}),30);return Object(s.useEffect)((function(){u(),h()}),[c]),Object(d.jsx)(d.Fragment,{children:e.children()})}));O.propTypes={children:u.a.func.isRequired};var p=O,f=i(33),x=i(3),g=i.n(x),N=i(10),D=["className","src","width","height","alt"],w=function(e){var t=e.className,i=e.src,a=e.width,c=e.height,r=e.alt,n=Object(l.a)(e,D),b=Object(s.useState)(!1),j=Object(m.a)(b,2),h=j[0],u=j[1],v=Object(s.useRef)(null);Object(s.useEffect)((function(){O(v.current)}),[]);var O=function(e){var t,i,s=document.createElement("img");h||(e.style.display="none",e.before(s),s.src=(t=e.getAttribute("width")||0,i=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(i,'"%3E%3C/svg%3E')),s.width=e.getAttribute("width"),s.height=e.getAttribute("height"),s.style.opacity="0",e.className&&s.classList.add(e.className),s.remove(),e.style.display="")};return Object(d.jsx)("img",Object(o.a)(Object(o.a)({},n),{},{ref:v,className:t,src:i,width:a,height:c,alt:r,onLoad:function(){u(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var C=w,y=["className"],k=function(e){var t=e.className,s=Object(l.a)(e,y),a=g()("brand",t);return Object(d.jsx)("div",Object(o.a)(Object(o.a)({},s),{},{className:a,children:Object(d.jsx)("h1",{className:"m-0",children:Object(d.jsx)(N.a,{to:"/",children:Object(d.jsx)(C,{src:i(74).default,alt:"SPAICE",height:48,width:128})})})}))},B=i(6),E=["className","navPosition","hideNav","hideLogo","hideSignin","hideNews","hideAbout","bottomOuterDivider","bottomDivider"],L=function(e){var t=e.className,i=e.navPosition,a=e.hideNav,c=e.hideLogo,r=e.hideSignin,n=e.hideNews,b=e.hideAbout,j=e.bottomOuterDivider,h=e.bottomDivider,u=Object(l.a)(e,E),v=Object(s.useState)(!1),O=Object(m.a)(v,2),p=O[0],f=O[1],x=Object(s.useRef)(null),D=Object(s.useRef)(null);Object(s.useEffect)((function(){return p&&w(),document.addEventListener("keydown",y),document.addEventListener("click",L),function(){document.removeEventListener("keydown",y),document.removeEventListener("click",L),C()}}));var w=function(){document.body.classList.add("off-nav-is-active"),x.current.style.maxHeight=x.current.scrollHeight+"px",f(!0)},C=function(){document.body.classList.remove("off-nav-is-active"),x.current&&(x.current.style.maxHeight=null),f(!1)},y=function(e){p&&27===e.keyCode&&C()},L=function(e){x.current&&p&&!x.current.contains(e.target)&&e.target!==D.current&&C()},T=g()("site-header",j&&"has-bottom-divider",t),P=Object(B.b)().t;return Object(d.jsx)("header",Object(o.a)(Object(o.a)({},u),{},{className:T,children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:g()(!c&&"site-header-inner",c&&"site-header-inner-nologo",h&&"has-bottom-divider"),children:[!c&&Object(d.jsx)(k,{}),!a&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("button",{ref:D,className:"header-nav-toggle",onClick:p?C:w,children:[Object(d.jsx)("span",{className:"screen-reader",children:"Menu"}),Object(d.jsx)("span",{className:"hamburger",children:Object(d.jsx)("span",{className:"hamburger-inner"})})]}),Object(d.jsx)("nav",{ref:x,className:g()("header-nav",p&&"is-active"),children:Object(d.jsxs)("div",{className:"header-nav-inner",children:[Object(d.jsxs)("ul",{className:g()("list-reset text-xs",i&&"header-nav-".concat(i)),children:[!b&&Object(d.jsx)("li",{children:Object(d.jsx)(N.a,{to:"/about",onClick:C,children:P("header.about")})}),!n&&Object(d.jsx)("li",{children:Object(d.jsx)(N.a,{to:"/news",onClick:C,children:P("header.news")})})]}),!r&&Object(d.jsx)("ul",{className:"list-reset header-nav-right",children:Object(d.jsx)("li",{children:Object(d.jsx)(N.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:C,children:"Sign up"})})})]})})]})]})})}))};L.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var T=L,P=["className","tag","color","size","loading","wide","wideMobile","disabled"],S=function(e){var t=e.className,i=e.tag,s=e.color,a=e.size,c=e.loading,r=e.wide,n=e.wideMobile,b=e.disabled,j=Object(l.a)(e,P),m=g()("button",s&&"button-".concat(s),a&&"button-".concat(a),c&&"is-loading",r&&"button-block",n&&"button-wide-mobile",t),h=i;return Object(d.jsx)(h,Object(o.a)(Object(o.a)({},j),{},{className:m,disabled:b}))};S.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var A=S,F=["className"],M=function(e){var t=e.className,i=Object(l.a)(e,F),s=g()("footer-nav",t),a=Object(B.b)().t;return Object(d.jsx)("nav",Object(o.a)(Object(o.a)({},i),{},{className:s,children:Object(d.jsxs)("ul",{className:"list-reset",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:a("cta.email"),children:"Contact"})}),Object(d.jsx)("li",{children:Object(d.jsx)(N.a,{to:"/about",children:"About us"})})]})}))},H=["className"],z=function(e){var t=e.className,i=Object(l.a)(e,H),s=g()("footer-social",t);return Object(d.jsx)("div",Object(o.a)(Object(o.a)({},i),{},{className:s,children:Object(d.jsxs)("ul",{className:"list-reset",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://facebook.com/",children:Object(d.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:"Facebook"}),Object(d.jsx)("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})]})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://twitter.com/",children:Object(d.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:"Twitter"}),Object(d.jsx)("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})]})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://google.com/",children:Object(d.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:"Instagram"}),Object(d.jsxs)("g",{children:[Object(d.jsx)("circle",{cx:"12.145",cy:"3.892",r:"1"}),Object(d.jsx)("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),Object(d.jsx)("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})]})]})})})]})}))},R=["className","topOuterDivider","topDivider"],_=function(e){var t=e.className,i=e.topOuterDivider,s=e.topDivider,a=Object(l.a)(e,R),c=g()("site-footer center-content-mobile",i&&"has-top-divider",t);return Object(d.jsx)("footer",Object(o.a)(Object(o.a)({},a),{},{className:c,children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:g()("site-footer-inner",s&&"has-top-divider"),children:[Object(d.jsxs)("div",{className:"footer-top space-between text-xxs",children:[Object(d.jsx)(k,{}),Object(d.jsx)(z,{})]}),Object(d.jsx)("div",{className:"footer-bottom align-center text-xxs",children:Object(d.jsx)(M,{})})]})})}))};_.defaultProps={topOuterDivider:!1,topDivider:!1};var V=_,I=function(e){var t=e.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{class:"stars1"}),Object(d.jsx)("div",{class:"stars2"}),Object(d.jsx)(T,{navPosition:"center",className:"reveal-from-bottom",hideSignin:!0,hideNews:!0}),Object(d.jsx)("main",{className:"site-content",children:t}),Object(d.jsx)(V,{})]})},W=function(e){var t=e.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{class:"stars1"}),Object(d.jsx)("div",{class:"stars2"}),Object(d.jsx)(T,{navPosition:"center",className:"reveal-from-bottom",hideLogo:!1,hideSignin:!0}),Object(d.jsx)("main",{className:"site-content",children:t}),Object(d.jsx)(V,{})]})},q=function(e){var t=e.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{class:"stars1"}),Object(d.jsx)("div",{class:"stars2"}),Object(d.jsx)(T,{navPosition:"center",className:"reveal-from-bottom",hideSignin:!0,hideAbout:!0}),Object(d.jsx)("main",{className:"site-content",children:t}),Object(d.jsx)(V,{})]})},G={types:{topOuterDivider:u.a.bool,bottomOuterDivider:u.a.bool,topDivider:u.a.bool,bottomDivider:u.a.bool,hasBgColor:u.a.bool,invertColor:u.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},J={types:Object(o.a)({},G.types),defaults:Object(o.a)({},G.defaults)},K={types:Object(o.a)(Object(o.a)({},G.types),{},{invertMobile:u.a.bool,invertDesktop:u.a.bool,alignTop:u.a.bool,imageFill:u.a.bool}),defaults:Object(o.a)(Object(o.a)({},G.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},U={types:Object(o.a)(Object(o.a)({},G.types),{},{pushLeft:u.a.bool}),defaults:Object(o.a)(Object(o.a)({},G.defaults),{},{pushLeft:!1})},$=i(53),Q=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill","torchCanvas"],X=Object(o.a)({},J.defaults),Y=function(e){var t=e.className,i=e.topOuterDivider,s=e.bottomOuterDivider,a=(e.topDivider,e.bottomDivider,e.hasBgColor),c=e.invertColor,r=(e.invertMobile,e.invertDesktop,e.alignTop,e.imageFill,e.torchCanvas,Object(l.a)(e,Q)),n=g()("hero section bottom-content-desktop background-space-debris pb-32 full-height",i&&"has-top-divider",s&&"has-bottom-divider",a&&"has-bg-color",c&&"invert-color",t),b=Object(B.b)().t;return Object(d.jsx)("section",Object(o.a)(Object(o.a)({},r),{},{className:n,children:Object(d.jsxs)("div",{className:"container full-height bottom-content-desktop bottom-content-mobile",children:[Object(d.jsx)("h3",{className:"m-0 slogan pr-128 mb-8 shadow-text","data-reveal-delay":"400",children:b("hero.slogan")}),Object(d.jsx)($.Link,{to:"features",className:"button mt-16",smooth:!0,spy:!0,children:b("hero.learn")})]})}))};Y.defaultProps=X;var Z=Y,ee=["className","data","link","children","tag"],te=function(e){var t=e.className,i=e.data,s=e.link,a=e.children,c=e.tag,r=Object(l.a)(e,ee),n=g()("section-header",t),b=c;return Object(d.jsx)(d.Fragment,{children:(i.title||i.paragraph)&&Object(d.jsx)("div",Object(o.a)(Object(o.a)({},r),{},{className:n,id:"section-header mb-0",children:Object(d.jsxs)("div",{className:"container",children:[a,i.title&&Object(d.jsx)(b,{className:g()("mt-0",i.paragraph?"mb-16":"mb-0"),children:i.title}),i.paragraph&&!s&&Object(d.jsx)("p",{className:"m-0 text-large text-color-high",children:i.paragraph}),i.paragraph&&s&&Object(d.jsx)(N.a,{className:"m-0 text-large  button",to:s,children:i.paragraph})]})}))})};te.defaultProps={children:null,tag:"h2"};var ie=te,se=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],ae=Object(o.a)({},U.defaults),ce=function(e){var t=e.className,s=e.topOuterDivider,a=e.bottomOuterDivider,c=e.topDivider,r=e.bottomDivider,n=e.hasBgColor,b=e.invertColor,j=e.pushLeft,m=Object(l.a)(e,se),h=g()("features-tiles section",s&&"has-top-divider",a&&"has-bottom-divider",n&&"has-bg-color",b&&"invert-color",t),u=g()("features-tiles-inner section-inner",c&&"has-top-divider",r&&"has-bottom-divider","pb-0"),v=g()("tiles-wrap center-content",j&&"push-left"),O=Object(B.b)().t,p=function(e,t,i){return Object(d.jsx)("div",{className:"tiles-item reveal-from-bottom",children:Object(d.jsxs)("div",{className:"tiles-item-inner",children:[Object(d.jsx)("div",{className:"features-tiles-item-header"}),Object(d.jsxs)("div",{className:"features-tiles-item-content",children:[Object(d.jsx)("h4",{className:"mt-0 mb-8 text-color-primary-1",children:t}),Object(d.jsx)("p",{className:"m-0 text-sm",children:i})]})]})})};return Object(d.jsx)("section",Object(o.a)(Object(o.a)({},m),{},{className:h,children:Object(d.jsx)("div",{className:"container",id:"features",children:Object(d.jsxs)("div",{className:u,children:[Object(d.jsxs)("div",{className:v,children:[p(i(89).default,O("tiles.rangeSteelsTitle"),O("tiles.rangeSteelsDescription")),p(i(90).default,O("tiles.varietyTechnologiesTitle"),O("tiles.varietyTechnologiesDescription")),p(i(91).default,O("tiles.experienceTitle"),O("tiles.experienceDescription"))]}),Object(d.jsx)(ie,{data:{title:O("tiles.headerDebrisRemoval"),paragraph:O("tiles.paragraphDebrisRemoval")},className:"center-content"})]})})}))};ce.defaultProps=ae;var re=ce,ne=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],oe=Object(o.a)({},K.defaults),le=function(e){var t=e.className,s=e.topOuterDivider,a=e.bottomOuterDivider,c=e.topDivider,r=e.bottomDivider,n=e.hasBgColor,b=e.invertColor,j=e.invertMobile,m=e.invertDesktop,h=e.alignTop,u=e.imageFill,v=Object(l.a)(e,ne),O=g()("features-split section",s&&"has-top-divider",a&&"has-bottom-divider",n&&"has-bg-color",b&&"invert-color",t),p=g()("features-split-inner section-inner",c&&"has-top-divider",r&&"has-bottom-divider"),f=g()("split-wrap",j&&"invert-mobile",m&&"invert-desktop",h&&"align-top"),x=Object(B.b)().t;return Object(d.jsx)("section",Object(o.a)(Object(o.a)({},v),{},{className:O,children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:p,children:Object(d.jsx)("div",{className:f,children:Object(d.jsxs)("div",{className:"split-item-large",children:[Object(d.jsxs)("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item-large",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"mt-0 mb-12 p-0",children:x("values.header")}),Object(d.jsx)("p",{className:"mt-8",children:x("values.paragraph")})]}),Object(d.jsxs)("div",{className:"mb-64",children:[Object(d.jsx)("p",{className:"text-large",children:x("values.teamHeader")}),Object(d.jsx)(N.a,{to:"/about",className:"button",children:x("values.meetTeam")})]})]}),Object(d.jsx)("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",u&&"split-item-image-fill"),"data-reveal-container":".split-item-large",children:Object(d.jsx)(C,{src:i(92).default,alt:"SPAICE values",width:528,height:396})})]})})})})}))};le.defaultProps=oe;var de=le,be=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],je=Object(o.a)({},K.defaults),me=function(e){var t=e.className,s=e.topOuterDivider,a=e.bottomOuterDivider,c=e.topDivider,r=e.bottomDivider,n=e.hasBgColor,b=e.invertColor,j=e.invertMobile,m=e.invertDesktop,h=e.alignTop,u=e.imageFill,v=Object(l.a)(e,be),O=g()("features-split section",s&&"has-top-divider",a&&"has-bottom-divider",n&&"has-bg-color",b&&"invert-color",t),p=g()("features-split-inner section-inner",c&&"has-top-divider",r&&"has-bottom-divider"),f=g()("split-wrap",j&&"invert-mobile",m&&"invert-desktop",h&&"align-top"),x=Object(B.b)().t,N=function(e,t,i,s){return Object(d.jsxs)("div",{className:"split-item",children:[Object(d.jsxs)("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item",children:[Object(d.jsx)("div",{className:"text-xxs text-color-primary-3 fw-600 tt-u mb-8",children:e}),Object(d.jsx)("h3",{className:"mt-0 mb-12",children:i}),Object(d.jsx)("p",{className:"m-0",children:s})]}),Object(d.jsx)("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",u&&"split-item-image-fill"),"data-reveal-container":".split-item",children:Object(d.jsx)(C,{src:t,alt:i,width:528,height:396})})]})},D=function(e,t,i,s){return Object(d.jsxs)("div",{className:"split-item",children:[Object(d.jsxs)("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item",children:[Object(d.jsx)("div",{className:"text-xxs text-color-primary-3 fw-600 tt-u mb-8",children:e}),Object(d.jsx)("h3",{className:"mt-0 mb-12",children:i}),Object(d.jsx)("p",{className:"m-0",children:s})]}),Object(d.jsx)("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",u&&"split-item-image-fill"),"data-reveal-container":".split-item",children:Object(d.jsx)(C,{src:t,alt:i,width:528,height:396})})]})};return Object(d.jsx)("section",Object(o.a)(Object(o.a)({},v),{},{className:O,children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:p,children:Object(d.jsxs)("div",{className:f,children:[N(x("products.poseEstimation"),i(93).default,x("products.poseEstimationHeader"),x("products.poseEstimationDescription")),D(x("products.navigation"),i(94).default,x("products.navigationHeader"),x("products.navigationDescription")),N(x("products.docking"),i(95).default,x("products.dockingHeader"),x("products.dockingDescription")),D(x("products.onBoard"),i(96).default,x("products.onBoardHeader"),x("products.onBoardDescription"))]})})})}))};me.defaultProps=je;var he=me,ue=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],ve=Object(o.a)({},U.defaults),Oe=function(e){var t=e.className,s=e.topOuterDivider,a=e.bottomOuterDivider,c=e.topDivider,r=e.bottomDivider,n=e.hasBgColor,b=e.invertColor,j=e.pushLeft,m=Object(l.a)(e,ue),h=g()("features-tiles section mb-32",s&&"has-top-divider",a&&"has-bottom-divider",n&&"has-bg-color",b&&"invert-color",t),u=g()("features-tiles-inner section-inner shadow-text",c&&"has-top-divider",r&&"has-bottom-divider","pb-0"),v=g()("tiles-wrap center-content",j&&"push-left"),O=Object(B.b)().t,p=function(e,t,i){return Object(d.jsx)("div",{className:"tiles-item reveal-from-bottom",children:Object(d.jsxs)("div",{className:"tiles-item-inner",children:[Object(d.jsx)("div",{className:"features-tiles-item-header",children:Object(d.jsx)("div",{className:"features-tiles-item-image mb-16",children:Object(d.jsx)("div",{className:"m-16",children:Object(d.jsx)(C,{src:e,alt:t,width:48,height:48})})})}),Object(d.jsxs)("div",{className:"features-tiles-item-content",children:[Object(d.jsx)("h4",{className:"mt-0 mb-8",children:t}),Object(d.jsx)("p",{className:"m-0 text-sm",children:i})]})]})})};return Object(d.jsx)("section",Object(o.a)(Object(o.a)({},m),{},{className:h,children:Object(d.jsx)("div",{className:"container",id:"features",children:Object(d.jsx)("div",{className:u,children:Object(d.jsxs)("div",{className:v,children:[p(i(97).default,O("businessTechVision.technology"),O("businessTechVision.technologyParagraph")),p(i(98).default,O("businessTechVision.business"),O("businessTechVision.businessParagraph")),p(i(99).default,O("businessTechVision.vision"),O("businessTechVision.visionParagraph"))]})})})}))};Oe.defaultProps=ve;var pe=Oe,fe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],xe=Object(o.a)(Object(o.a)({},J.defaults),{},{split:!1}),ge=function(e){var t=e.className,i=e.topOuterDivider,s=e.bottomOuterDivider,a=e.topDivider,c=e.bottomDivider,r=e.hasBgColor,n=e.invertColor,b=e.split,j=Object(l.a)(e,fe),m=g()("cta section center-content-mobile reveal-from-bottom",i&&"has-top-divider",s&&"has-bottom-divider",r&&"has-bg-color",n&&"invert-color",t),h=g()("cta-inner section-inner",a&&"has-top-divider",c&&"has-bottom-divider",b&&"cta-split"),u=Object(B.b)().t,v={title:u("testimonial.header"),paragraph:u("testimonial.paragraph")};return Object(d.jsx)("section",Object(o.a)(Object(o.a)({},j),{},{className:m,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(ie,{data:v,className:"center-content",link:"news"}),Object(d.jsxs)("div",{className:h,children:[Object(d.jsxs)("div",{className:"cta-slogan",children:[Object(d.jsx)("p",{className:"m-0 text-header",children:u("cta.header")}),Object(d.jsx)("p",{className:"m-0 text-color-high",children:u("cta.paragraph")})]}),Object(d.jsx)("div",{className:"cta-action",children:Object(d.jsxs)(A,{tag:"a",className:"button-contact",wideMobile:!0,href:u("cta.email"),children:[u("cta.contact"),Object(d.jsx)("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})})]})})]})]})}))};ge.defaultProps=xe;var Ne=ge,De=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Z,{invertMobile:!0,topDivider:!0,imageFill:!0}),Object(d.jsx)(pe,{topDivider:!0}),Object(d.jsx)(re,{topDivider:!0}),Object(d.jsx)(he,{invertMobile:!0,topDivider:!0,imageFill:!0}),Object(d.jsx)(de,{invertMobile:!0,topDivider:!0,imageFill:!0}),Object(d.jsx)(Ne,{split:!0})]})},we=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],Ce=Object(o.a)(Object(o.a)({},J.defaults),{},{split:!1}),ye=function(e){var t=e.className,i=e.topOuterDivider,s=e.bottomOuterDivider,a=e.topDivider,c=e.bottomDivider,r=e.hasBgColor,n=e.invertColor,b=(e.split,Object(l.a)(e,we)),j=g()("cta section center-content-mobile reveal-from-bottom",i&&"has-top-divider",s&&"has-bottom-divider",r&&"has-bg-color",n&&"invert-color",t),m=g()("cta-inner section-inner",a&&"has-top-divider",c&&"has-bottom-divider"),h=Object(B.b)().t,u=function(e,t){return Object(d.jsx)("div",{className:"mt-32",children:Object(d.jsx)("div",{className:m,children:Object(d.jsxs)("div",{className:"cta-slogan",children:[Object(d.jsx)("p",{className:"m-0 text-header",children:e}),Object(d.jsx)("p",{className:"m-0 text-color-high",children:t})]})})})};return Object(d.jsxs)("section",Object(o.a)(Object(o.a)({},b),{},{className:j,children:[Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("p",{className:"h2",children:"News"})}),Object(d.jsxs)("div",{className:"container mt-32",children:[u(h("news.news1.title"),h("news.news1.description")),u(h("news.news2.title"),h("news.news2.description"))]})]}))};ye.defaultProps=Ce;var ke=ye,Be=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(ke,{})})},Ee=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],Le=Object(o.a)({},U.defaults),Te=function(e){var t=e.className,s=e.topOuterDivider,a=e.bottomOuterDivider,c=e.topDivider,r=e.bottomDivider,n=e.hasBgColor,b=e.invertColor,j=e.pushLeft,m=Object(l.a)(e,Ee),h=g()("testimonial section",s&&"has-top-divider",a&&"has-bottom-divider",n&&"has-bg-color",b&&"invert-color",t),u=g()("testimonial-inner section-inner",c&&"has-top-divider",r&&"has-bottom-divider"),v=g()("tiles-wrap",j&&"push-left"),O=Object(B.b)().t,p=function(e,t,i,s,a){return Object(d.jsxs)("div",{className:"tiles-item-inner",children:[Object(d.jsx)(C,{className:"profile",src:e,alt:t,width:400,height:400}),Object(d.jsxs)("div",{className:"testimonial-item-footer text-xs mt-0 mb-0 has-bottom-divider",children:[Object(d.jsxs)("span",{className:"text-color-high h5",children:[" ",t]}),Object(d.jsx)("span",{className:"text-color-low",children:" / "}),Object(d.jsxs)("div",{className:"text-color-primary-3 h5 p-0 m-0 ta-r-desktop",children:[" ",i," "]})]}),s]})},f=function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"text-large pt-8 mt-16 team-background",children:e.map((function(e){return Object(d.jsx)("p",{className:"text-sm mb-0",children:e})}))}),Object(d.jsx)("div",{className:"row-images pt-8",children:t.map((function(t,i){var s=g()(i>=2&&"flex-image",i<2&&"flex-image-grow");return Object(d.jsx)(C,{src:t,alt:e[i],className:s})}))})]})};return Object(d.jsx)("section",Object(o.a)(Object(o.a)({},m),{},{className:h,children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:u,children:[Object(d.jsx)("p",{className:"text-header ta-c",children:O("team.header")}),Object(d.jsxs)("div",{className:v,children:[Object(d.jsx)("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200",children:p(i(100).default,"Matteo Cuccorese","Chief Executive Officer",f([O("team.matteoBackground")],[i(47).default,i(39).default]))}),Object(d.jsx)("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200",children:p(i(101).default,"Guillem Garrof\xe9","Chief Technical Officer",f([O("team.guillemBackground")],[i(102).default,i(39).default,i(103).default]))}),Object(d.jsx)("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200",children:p(i(104).default,"Nicholas Argenziano","Chief AI Scientist",f([O("team.nicholasBackground")],[i(47).default,i(105).default]))})]}),Object(d.jsx)("p",{className:"text-header ta-c pt-32",children:O("team.advisory")}),Object(d.jsx)("div",{className:v,children:Object(d.jsx)("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200",children:p(i(106).default,"Ronald Clark","",f([O("team.ronaldBackground")],[i(107).default,i(39).default]))})})]})})}))};Te.defaultProps=Le;var Pe=Te,Se=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(Pe,{})})};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GA_CODE);var Ae=function(){var e=Object(s.useRef)(),t=Object(c.f)();return Object(s.useEffect)((function(){var i=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(i)}),[t]),Object(d.jsx)(p,{ref:e,children:function(){return Object(d.jsxs)(c.c,{children:[Object(d.jsx)(j,{exact:!0,path:"/",component:De,layout:W}),Object(d.jsx)(j,{exact:!0,path:"/news",component:Be,layout:I}),Object(d.jsx)(j,{exact:!0,path:"/about",component:Se,layout:q})]})}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(108);var Fe=i(57),Me=i(54),He=i(55);Fe.a.use(B.a).use(Me.a).use(He.a).init({debug:!0,fallbackLng:"en"});var ze=Object(r.a)();Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(c.b,{history:ze,children:Object(d.jsx)(Ae,{children:Object(d.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"SpAIce",description:""})})})})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/imperial_college.7f294d18.png"},47:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/unina_1.b2e2868d.png"},74:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/logo.9510f1ee.svg"},89:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/satellite.3a7bf8c5.png"},90:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/break.0db004e8.png"},91:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/exponential.07d77c63.png"},92:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/SPAICE_values.9dd99665.svg"},93:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/pose_estimation.7cd24dd2.png"},94:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/navigation.e2560919.png"},95:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/docking.fa77cf2e.jpg"},96:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/robot-manipulation.cc3b2e1b.jpeg"},97:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/technology.7820e317.svg"},98:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/business.72d34ed3.svg"},99:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/view.9d1a7826.svg"}},[[109,1,2]]]);
//# sourceMappingURL=main.2bc20a75.chunk.js.map