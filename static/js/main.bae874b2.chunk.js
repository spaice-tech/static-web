(this["webpackJsonpspaice-web"]=this["webpackJsonpspaice-web"]||[]).push([[0],{100:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/lasalle.5fa91350.png"},101:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/imprsis.0db4b52e.png"},102:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/nicholas.bc1579f4.jpg"},103:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/ethz.6a08eb57.png"},104:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/ronald.a50530cf.png"},105:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/oxford.23b3a95f.png"},106:function(e,t,i){},107:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),c=i(9),r=i(10),n=i(48),o=i(7),l=i(2),d=i(4),b=i(0),j=["component","layout"],m=function(e){var t=e.component,i=e.layout,s=Object(d.a)(e,j);return i=void 0===i?function(e){return Object(b.jsx)(b.Fragment,{children:e.children})}:i,Object(b.jsx)(o.a,Object(l.a)(Object(l.a)({},s),{},{render:function(e){return Object(b.jsx)(i,{children:Object(b.jsx)(t,Object(l.a)({},e))})}}))},h=i(19),u=i(5),v=i.n(u),O=i(41),p=a.a.forwardRef((function(e,t){var i=Object(s.useState)(window.innerHeight),a=Object(h.a)(i,2),c=a[0],r=a[1],n=Object(s.useState)([]),o=Object(h.a)(n,2),l=o[0],d=o[1],j=function(){return l.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},m=function(){if(!j())for(var e=function(){var e=l[t],i=e.getAttribute("data-reveal-delay"),s=e.getAttribute("data-reveal-offset")?e.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=c-t})(e.getAttribute("data-reveal-container")?e.closest(e.getAttribute("data-reveal-container")):e,s)&&!e.classList.contains("is-revealed")&&(i&&0!==i?setTimeout((function(){e.classList.add("is-revealed")}),i):e.classList.add("is-revealed"))},t=0;t<l.length;t++)e()};Object(s.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(s.useEffect)((function(){"undefined"!==typeof l&&l.length>0&&(j()||(window.addEventListener("scroll",v),window.addEventListener("resize",p)),m())}),[l]);var u=function(){j()&&(window.removeEventListener("scroll",v),window.removeEventListener("resize",p))},v=Object(O.throttle)((function(){u(),m()}),30),p=Object(O.throttle)((function(){r(window.innerHeight)}),30);return Object(s.useEffect)((function(){u(),m()}),[c]),Object(b.jsx)(b.Fragment,{children:e.children()})}));p.propTypes={children:v.a.func.isRequired};var f=p;var x=Object(o.g)((function(e){var t=e.history,i=e.children;return Object(s.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),Object(b.jsx)(s.Fragment,{children:i})})),g=i(33),N=i(3),w=i.n(N),D=["className","src","width","height","alt"],C=function(e){var t=e.className,i=e.src,a=e.width,c=e.height,r=e.alt,n=Object(d.a)(e,D),o=Object(s.useState)(!1),j=Object(h.a)(o,2),m=j[0],u=j[1],v=Object(s.useRef)(null);Object(s.useEffect)((function(){O(v.current)}),[]);var O=function(e){var t,i,s=document.createElement("img");m||(e.style.display="none",e.before(s),s.src=(t=e.getAttribute("width")||0,i=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(i,'"%3E%3C/svg%3E')),s.width=e.getAttribute("width"),s.height=e.getAttribute("height"),s.style.opacity="0",e.className&&s.classList.add(e.className),s.remove(),e.style.display="")};return Object(b.jsx)("img",Object(l.a)(Object(l.a)({},n),{},{ref:v,className:t,src:i,width:a,height:c,alt:r,onLoad:function(){u(!0)}}))};C.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var y=C,k=["className"],E=function(e){var t=e.className,s=Object(d.a)(e,k),a=w()("brand",t);return Object(b.jsx)("div",Object(l.a)(Object(l.a)({},s),{},{className:a,children:Object(b.jsx)("h1",{className:"m-0",children:Object(b.jsx)(c.b,{to:"/",children:Object(b.jsx)(y,{src:i(74).default,alt:"SPAICE",height:48,width:128})})})}))},L=i(6),S=["className","navPosition","hideNav","hideLogo","hideSignin","hideNews","hideAbout","bottomOuterDivider","bottomDivider"],T=function(e){var t=e.className,i=e.navPosition,a=e.hideNav,r=e.hideLogo,n=e.hideSignin,o=e.hideNews,j=e.hideAbout,m=e.bottomOuterDivider,u=e.bottomDivider,v=Object(d.a)(e,S),O=Object(s.useState)(!1),p=Object(h.a)(O,2),f=p[0],x=p[1],g=Object(s.useRef)(null),N=Object(s.useRef)(null);Object(s.useEffect)((function(){return f&&D(),document.addEventListener("keydown",y),document.addEventListener("click",k),function(){document.removeEventListener("keydown",y),document.removeEventListener("click",k),C()}}));var D=function(){document.body.classList.add("off-nav-is-active"),g.current.style.maxHeight=g.current.scrollHeight+"px",x(!0)},C=function(){document.body.classList.remove("off-nav-is-active"),g.current&&(g.current.style.maxHeight=null),x(!1)},y=function(e){f&&27===e.keyCode&&C()},k=function(e){g.current&&f&&!g.current.contains(e.target)&&e.target!==N.current&&C()},T=w()("site-header",m&&"has-bottom-divider",t),P=Object(L.b)().t;return Object(b.jsx)("header",Object(l.a)(Object(l.a)({},v),{},{className:T,children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:w()(!r&&"site-header-inner",r&&"site-header-inner-nologo",u&&"has-bottom-divider"),children:[!r&&Object(b.jsx)(E,{}),!a&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("button",{ref:N,className:"header-nav-toggle",onClick:f?C:D,children:[Object(b.jsx)("span",{className:"screen-reader",children:"Menu"}),Object(b.jsx)("span",{className:"hamburger",children:Object(b.jsx)("span",{className:"hamburger-inner"})})]}),Object(b.jsx)("nav",{ref:g,className:w()("header-nav",f&&"is-active"),children:Object(b.jsxs)("div",{className:"header-nav-inner",children:[Object(b.jsxs)("ul",{className:w()("list-reset text-xs",i&&"header-nav-".concat(i)),children:[!j&&Object(b.jsx)("li",{children:Object(b.jsx)(c.b,{to:"/about",onClick:C,children:P("header.about")})}),!o&&Object(b.jsx)("li",{children:Object(b.jsx)(c.b,{to:"/news",onClick:C,children:P("header.news")})})]}),!n&&Object(b.jsx)("ul",{className:"list-reset header-nav-right",children:Object(b.jsx)("li",{children:Object(b.jsx)(c.b,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:C,children:"Sign up"})})})]})})]})]})})}))};T.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var P=T,B=["className"],A=function(e){var t=e.className,i=Object(d.a)(e,B),s=w()("footer-nav",t),a=Object(L.b)().t;return Object(b.jsx)("nav",Object(l.a)(Object(l.a)({},i),{},{className:s,children:Object(b.jsxs)("ul",{className:"list-reset",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:a("cta.email"),children:"Contact"})}),Object(b.jsx)("li",{children:Object(b.jsx)(c.b,{to:"/about",children:"About us"})})]})}))},F=["className"],H=function(e){var t=e.className,i=Object(d.a)(e,F),s=w()("footer-social",t);return Object(b.jsx)("div",Object(l.a)(Object(l.a)({},i),{},{className:s,children:Object(b.jsxs)("ul",{className:"list-reset",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://facebook.com/",children:Object(b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("title",{children:"Facebook"}),Object(b.jsx)("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://twitter.com/",children:Object(b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("title",{children:"Twitter"}),Object(b.jsx)("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://google.com/",children:Object(b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("title",{children:"Instagram"}),Object(b.jsxs)("g",{children:[Object(b.jsx)("circle",{cx:"12.145",cy:"3.892",r:"1"}),Object(b.jsx)("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),Object(b.jsx)("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})]})]})})})]})}))},M=["className","topOuterDivider","topDivider"],z=function(e){var t=e.className,i=e.topOuterDivider,s=e.topDivider,a=Object(d.a)(e,M),c=w()("site-footer center-content-mobile",i&&"has-top-divider",t);return Object(b.jsx)("footer",Object(l.a)(Object(l.a)({},a),{},{className:c,children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:w()("site-footer-inner",s&&"has-top-divider"),children:[Object(b.jsxs)("div",{className:"footer-top space-between text-xxs",children:[Object(b.jsx)(E,{}),Object(b.jsx)(H,{})]}),Object(b.jsx)("div",{className:"footer-bottom align-center text-xxs",children:Object(b.jsx)(A,{})})]})})}))};z.defaultProps={topOuterDivider:!1,topDivider:!1};var _=z,R=function(e){var t=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{class:"stars1"}),Object(b.jsx)("div",{class:"stars2"}),Object(b.jsx)(P,{navPosition:"center",className:"reveal-from-bottom",hideSignin:!0,hideNews:!0}),Object(b.jsx)("main",{className:"site-content",children:t}),Object(b.jsx)(_,{})]})},I=function(e){var t=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{class:"stars1"}),Object(b.jsx)("div",{class:"stars2"}),Object(b.jsx)(P,{navPosition:"center",className:"reveal-from-bottom",hideLogo:!1,hideSignin:!0}),Object(b.jsx)("main",{className:"site-content",children:t}),Object(b.jsx)(_,{})]})},V=function(e){var t=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{class:"stars1"}),Object(b.jsx)("div",{class:"stars2"}),Object(b.jsx)(P,{navPosition:"center",className:"reveal-from-bottom",hideSignin:!0,hideAbout:!0}),Object(b.jsx)("main",{className:"site-content",children:t}),Object(b.jsx)(_,{})]})},W={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},q={types:Object(l.a)({},W.types),defaults:Object(l.a)({},W.defaults)},G={types:Object(l.a)(Object(l.a)({},W.types),{},{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(l.a)(Object(l.a)({},W.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},J={types:Object(l.a)(Object(l.a)({},W.types),{},{pushLeft:v.a.bool}),defaults:Object(l.a)(Object(l.a)({},W.defaults),{},{pushLeft:!1})},K=i(53),U=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill","torchCanvas"],$=Object(l.a)({},q.defaults),Q=function(e){var t=e.className,i=e.topOuterDivider,s=e.bottomOuterDivider,a=(e.topDivider,e.bottomDivider,e.hasBgColor),c=e.invertColor,r=(e.invertMobile,e.invertDesktop,e.alignTop,e.imageFill,e.torchCanvas,Object(d.a)(e,U)),n=w()("hero section bottom-content-desktop background-space-debris pb-32 full-height",i&&"has-top-divider",s&&"has-bottom-divider",a&&"has-bg-color",c&&"invert-color",t),o=Object(L.b)().t;return Object(b.jsx)("section",Object(l.a)(Object(l.a)({},r),{},{className:n,children:Object(b.jsxs)("div",{className:"container full-height bottom-content-desktop bottom-content-mobile",children:[Object(b.jsx)("h3",{className:"m-0 slogan pr-128 mb-8 shadow-text","data-reveal-delay":"400",children:o("hero.slogan")}),Object(b.jsx)(K.Link,{to:"features",className:"button mt-16",smooth:!0,spy:!0,children:o("hero.learn")})]})}))};Q.defaultProps=$;var X=Q,Y=["className","data","link","children","tag","stretch"],Z=function(e){var t=e.className,i=e.data,s=e.link,a=e.children,r=e.tag,n=e.stretch,o=Object(d.a)(e,Y),j=w()("section-header",t),m=w()(n&&"container-stretch",!n&&"container"),h=r;return Object(b.jsx)(b.Fragment,{children:(i.title||i.paragraph)&&Object(b.jsx)("div",Object(l.a)(Object(l.a)({},o),{},{className:j,id:"section-header mb-0",children:Object(b.jsxs)("div",{className:m,children:[a,i.title&&Object(b.jsx)(h,{className:w()("mt-0",i.paragraph?"mb-16":"mb-0"),children:i.title}),i.paragraph&&!s&&Object(b.jsx)("p",{className:"m-0 text-large text-color-high",children:i.paragraph}),i.paragraph&&s&&Object(b.jsx)(c.b,{className:"m-0 text-large button",to:s,children:i.paragraph})]})}))})};Z.defaultProps={children:null,tag:"h2"};var ee=Z,te=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],ie=Object(l.a)({},J.defaults),se=function(e){var t=e.className,i=e.topOuterDivider,s=e.bottomOuterDivider,a=e.topDivider,c=e.bottomDivider,r=e.hasBgColor,n=e.invertColor,o=e.pushLeft,j=Object(d.a)(e,te),m=w()("features-tiles section",i&&"has-top-divider",s&&"has-bottom-divider",r&&"has-bg-color",n&&"invert-color",t),h=w()("features-tiles-inner section-inner full-height-tiles center-content-desktop",a&&"has-top-divider",c&&"has-bottom-divider","pb-0"),u=w()("tiles-wrap",o&&"push-left"),v=Object(L.b)().t,O=function(e,t){return Object(b.jsx)("div",{className:"tiles-numbers-item pr-32 pl-32 mt-32 reveal-from-bottom",children:Object(b.jsx)("div",{className:"tiles-item-inner",children:Object(b.jsxs)("div",{className:"features-tiles-item-content has-top-divider-thick",children:[Object(b.jsx)("p",{className:"mt-8 mb-0 text-tile",children:e}),Object(b.jsx)("h3",{className:"pl-32 mt-0 mb-8 text-color-primary-1",children:t})]})})})};return Object(b.jsx)("section",Object(l.a)(Object(l.a)({},j),{},{className:m,children:Object(b.jsx)("div",{className:"container-stretch",id:"features",children:Object(b.jsxs)("div",{className:h,children:[Object(b.jsx)(ee,{data:{title:v("tiles.headerDebrisRemoval"),paragraph:v("tiles.paragraphDebrisRemoval")},stretch:!0}),Object(b.jsxs)("div",{className:u,children:[O(v("tiles.satellitesLaunchedTitle"),v("tiles.satellitesLaunchedNum")),O(v("tiles.inactiveSatellitesTitle"),v("tiles.inactiveSatellitesNum")),O(v("tiles.launchesDecadeTitle"),v("tiles.launchesDecadeNum")),O(v("tiles.avgLifeTitle"),v("tiles.avgLifeNum")),O(v("tiles.totalDebrisTitle"),v("tiles.totalDebrisNum")),O(v("tiles.trackableDebrisTitle"),v("tiles.trackableDebrisNum"))]})]})})}))};se.defaultProps=ie;var ae=se;function ce(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var re=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],ne=Object(l.a)({},G.defaults),oe=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,j=e.hasBgColor,m=e.invertColor,u=(e.invertMobile,e.invertDesktop,e.alignTop,e.imageFill,Object(d.a)(e,re)),v=w()("features-split section",a&&"has-top-divider",r&&"has-bottom-divider",j&&"has-bg-color",m&&"invert-color",t),O=w()("features-split-inner section-inner",n&&"has-top-divider",o&&"has-bottom-divider"),p=Object(L.b)().t,f=function(){var e=Object(s.useState)(ce()),t=Object(h.a)(e,2),i=t[0],a=t[1];return Object(s.useEffect)((function(){function e(){a(ce())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i}(),x=(f.height,f.width);return Object(b.jsx)("section",Object(l.a)(Object(l.a)({},u),{},{className:v,children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:O,children:[Object(b.jsx)("h3",{className:"mt-0 mb-12 p-0",children:p("values.header")}),Object(b.jsx)("p",{className:"mt-8",children:p("values.paragraph")}),Object(b.jsx)("div",{className:"center-content pt-32",children:Object(b.jsx)(y,{src:i(x>640?89:90).default,alt:"SPAICE values",width:"100%"})}),Object(b.jsxs)("div",{className:"mt-32 mb-64",children:[Object(b.jsx)("p",{className:"text-large",children:p("values.teamHeader")}),Object(b.jsx)(c.b,{to:"/about",className:"button",children:p("values.meetTeam")})]})]})})}))};oe.defaultProps=ne;var le=oe,de=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],be=Object(l.a)({},G.defaults),je=function(e){var t=e.className,s=e.topOuterDivider,a=e.bottomOuterDivider,c=e.topDivider,r=e.bottomDivider,n=e.hasBgColor,o=e.invertColor,j=e.invertMobile,m=e.invertDesktop,h=e.alignTop,u=e.imageFill,v=Object(d.a)(e,de),O=w()("features-split section",s&&"has-top-divider",a&&"has-bottom-divider",n&&"has-bg-color",o&&"invert-color",t),p=w()("features-split-inner section-inner",c&&"has-top-divider",r&&"has-bottom-divider"),f=w()("split-wrap",j&&"invert-mobile",m&&"invert-desktop",h&&"align-top"),x=Object(L.b)().t,g=function(e,t,i,s){return Object(b.jsxs)("div",{className:"split-item",children:[Object(b.jsxs)("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item",children:[Object(b.jsx)("div",{className:"text-xxs text-color-primary-3 fw-600 tt-u mb-8",children:e}),Object(b.jsx)("h3",{className:"mt-0 mb-12",children:i}),Object(b.jsx)("p",{className:"m-0",children:s})]}),Object(b.jsx)("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",u&&"split-item-image-fill"),"data-reveal-container":".split-item",children:Object(b.jsx)(y,{src:t,alt:i,width:528,height:396})})]})},N=function(e,t,i,s){return Object(b.jsxs)("div",{className:"split-item",children:[Object(b.jsxs)("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item",children:[Object(b.jsx)("div",{className:"text-xxs text-color-primary-3 fw-600 tt-u mb-8",children:e}),Object(b.jsx)("h3",{className:"mt-0 mb-12",children:i}),Object(b.jsx)("p",{className:"m-0",children:s})]}),Object(b.jsx)("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",u&&"split-item-image-fill"),"data-reveal-container":".split-item",children:Object(b.jsx)(y,{src:t,alt:i,width:528,height:396})})]})};return Object(b.jsx)("section",Object(l.a)(Object(l.a)({},v),{},{className:O,children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:p,children:Object(b.jsxs)("div",{className:f,children:[g(x("products.poseEstimation"),i(91).default,x("products.poseEstimationHeader"),x("products.poseEstimationDescription")),N(x("products.navigation"),i(92).default,x("products.navigationHeader"),x("products.navigationDescription")),g(x("products.docking"),i(93).default,x("products.dockingHeader"),x("products.dockingDescription")),N(x("products.onBoard"),i(94).default,x("products.onBoardHeader"),x("products.onBoardDescription"))]})})})}))};je.defaultProps=be;var me=je,he=(i.p,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),ue=Object(l.a)({},J.defaults),ve=function(e){var t=e.className,s=e.topOuterDivider,a=e.bottomOuterDivider,c=e.topDivider,r=e.bottomDivider,n=e.hasBgColor,o=e.invertColor,j=e.pushLeft,m=Object(d.a)(e,he),h=w()("features-tiles section mb-32",s&&"has-top-divider",a&&"has-bottom-divider",n&&"has-bg-color",o&&"invert-color",t),u=w()("features-tiles-inner section-inner shadow-text",c&&"has-top-divider",r&&"has-bottom-divider","pb-0"),v=w()("tiles-wrap center-content",j&&"push-left"),O=Object(L.b)().t,p=function(e,t,i){return Object(b.jsx)("div",{className:"tiles-item reveal-from-bottom",children:Object(b.jsxs)("div",{className:"tiles-item-inner",children:[Object(b.jsx)("div",{className:"features-tiles-item-header",children:Object(b.jsx)("div",{className:"features-tiles-item-image mb-16",children:Object(b.jsx)("div",{className:"m-16",children:Object(b.jsx)(y,{src:e,alt:t,width:48,height:48})})})}),Object(b.jsxs)("div",{className:"features-tiles-item-content",children:[Object(b.jsx)("h4",{className:"mt-0 mb-8",children:t}),Object(b.jsx)("p",{className:"m-0 text-sm",children:i})]})]})})};return Object(b.jsx)("section",Object(l.a)(Object(l.a)({},m),{},{className:h,children:Object(b.jsx)("div",{className:"container-stretch",id:"features",children:Object(b.jsx)("div",{className:u,children:Object(b.jsxs)("div",{className:v,children:[p(i(95).default,O("businessTechVision.technology"),O("businessTechVision.technologyParagraph")),p(i(96).default,O("businessTechVision.business"),O("businessTechVision.businessParagraph")),p(i(97).default,O("businessTechVision.vision"),O("businessTechVision.visionParagraph"))]})})})}))};ve.defaultProps=ue;var Oe=ve,pe=["className","tag","color","size","loading","wide","wideMobile","disabled"],fe=function(e){var t=e.className,i=e.tag,s=e.color,a=e.size,c=e.loading,r=e.wide,n=e.wideMobile,o=e.disabled,j=Object(d.a)(e,pe),m=w()("button",s&&"button-".concat(s),a&&"button-".concat(a),c&&"is-loading",r&&"button-block",n&&"button-wide-mobile",t),h=i;return Object(b.jsx)(h,Object(l.a)(Object(l.a)({},j),{},{className:m,disabled:o}))};fe.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var xe=fe,ge=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],Ne=Object(l.a)(Object(l.a)({},q.defaults),{},{split:!1}),we=function(e){var t=e.className,i=e.topOuterDivider,s=e.bottomOuterDivider,a=e.topDivider,c=e.bottomDivider,r=e.hasBgColor,n=e.invertColor,o=e.split,j=Object(d.a)(e,ge),m=w()("cta section center-content-mobile reveal-from-bottom",i&&"has-top-divider",s&&"has-bottom-divider",r&&"has-bg-color",n&&"invert-color",t),h=w()("cta-inner section-inner",a&&"has-top-divider",c&&"has-bottom-divider",o&&"cta-split"),u=Object(L.b)().t,v={title:u("testimonial.header"),paragraph:u("testimonial.paragraph")};return Object(b.jsx)("section",Object(l.a)(Object(l.a)({},j),{},{className:m,children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(ee,{data:v,className:"center-content",link:"news"}),Object(b.jsxs)("div",{className:h,children:[Object(b.jsxs)("div",{className:"cta-slogan",children:[Object(b.jsx)("p",{className:"m-0 text-header",children:u("cta.header")}),Object(b.jsx)("p",{className:"m-0 text-color-high",children:u("cta.paragraph")})]}),Object(b.jsx)("div",{className:"cta-action",children:Object(b.jsxs)(xe,{tag:"a",className:"button-contact",wideMobile:!0,href:u("cta.email"),children:[u("cta.contact"),Object(b.jsx)("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})})]})})]})]})}))};we.defaultProps=Ne;var De=we,Ce=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(X,{invertMobile:!0,topDivider:!0,imageFill:!0}),Object(b.jsx)(ae,{topDivider:!0}),Object(b.jsx)(Oe,{topDivider:!0}),Object(b.jsx)(me,{invertMobile:!0,topDivider:!0,imageFill:!0}),Object(b.jsx)(le,{invertMobile:!0,topDivider:!0,imageFill:!0}),Object(b.jsx)(De,{split:!0})]})},ye=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],ke=Object(l.a)(Object(l.a)({},q.defaults),{},{split:!1}),Ee=function(e){var t=e.className,i=e.topOuterDivider,s=e.bottomOuterDivider,a=e.topDivider,c=e.bottomDivider,r=e.hasBgColor,n=e.invertColor,o=(e.split,Object(d.a)(e,ye)),j=w()("cta section center-content-mobile reveal-from-bottom",i&&"has-top-divider",s&&"has-bottom-divider",r&&"has-bg-color",n&&"invert-color",t),m=w()("cta-inner section-inner",a&&"has-top-divider",c&&"has-bottom-divider"),h=Object(L.b)().t,u=function(e,t){return Object(b.jsx)("div",{className:"mt-32",children:Object(b.jsx)("div",{className:m,children:Object(b.jsxs)("div",{className:"cta-slogan",children:[Object(b.jsx)("p",{className:"m-0 text-header",children:e}),Object(b.jsx)("p",{className:"m-0 text-color-high",children:t})]})})})};return Object(b.jsxs)("section",Object(l.a)(Object(l.a)({},o),{},{className:j,children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("p",{className:"h2",children:"News"})}),Object(b.jsxs)("div",{className:"container mt-32",children:[u(h("news.news1.title"),h("news.news1.description")),u(h("news.news2.title"),h("news.news2.description"))]})]}))};Ee.defaultProps=ke;var Le=Ee,Se=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Le,{})})},Te=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],Pe=Object(l.a)({},J.defaults),Be=function(e){var t=e.className,s=e.topOuterDivider,a=e.bottomOuterDivider,c=e.topDivider,r=e.bottomDivider,n=e.hasBgColor,o=e.invertColor,j=e.pushLeft,m=Object(d.a)(e,Te),h=w()("testimonial section",s&&"has-top-divider",a&&"has-bottom-divider",n&&"has-bg-color",o&&"invert-color",t),u=w()("testimonial-inner section-inner",c&&"has-top-divider",r&&"has-bottom-divider"),v=w()("tiles-wrap",j&&"push-left"),O=Object(L.b)().t,p=function(e,t,i,s,a){return Object(b.jsxs)("div",{className:"tiles-item-inner",children:[Object(b.jsx)(y,{className:"profile",src:e,alt:t,width:400,height:400}),Object(b.jsxs)("div",{className:"testimonial-item-footer text-xs mt-0 mb-0 has-bottom-divider",children:[Object(b.jsxs)("span",{className:"text-color-high h5",children:[" ",t]}),Object(b.jsx)("span",{className:"text-color-low",children:" / "}),Object(b.jsxs)("div",{className:"text-color-primary-3 h5 p-0 m-0 ta-r-desktop",children:[" ",i," "]})]}),s]})},f=function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"text-large pt-8 mt-16 team-background",children:e.map((function(e){return Object(b.jsx)("p",{className:"text-sm mb-0",children:e})}))}),Object(b.jsx)("div",{className:"row-images pt-8",children:t.map((function(t,i){var s=w()(i>=2&&"flex-image",i<2&&"flex-image-grow");return Object(b.jsx)(y,{src:t,alt:e[i],className:s})}))})]})};return Object(b.jsx)("section",Object(l.a)(Object(l.a)({},m),{},{className:h,children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:u,children:[Object(b.jsx)("p",{className:"text-header ta-c",children:O("team.header")}),Object(b.jsxs)("div",{className:v,children:[Object(b.jsx)("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200",children:p(i(98).default,"Matteo Cuccorese","Chief Executive Officer",f([O("team.matteoBackground")],[i(47).default,i(39).default]))}),Object(b.jsx)("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200",children:p(i(99).default,"Guillem Garrof\xe9","Chief Technical Officer",f([O("team.guillemBackground")],[i(100).default,i(39).default,i(101).default]))}),Object(b.jsx)("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200",children:p(i(102).default,"Nicholas Argenziano","Chief AI Scientist",f([O("team.nicholasBackground")],[i(47).default,i(103).default]))})]}),Object(b.jsx)("p",{className:"text-header ta-c pt-32",children:O("team.advisory")}),Object(b.jsx)("div",{className:v,children:Object(b.jsx)("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200",children:p(i(104).default,"Ronald Clark","",f([O("team.ronaldBackground")],[i(105).default,i(39).default]))})})]})})}))};Be.defaultProps=Pe;var Ae=Be,Fe=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Ae,{})})};g.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GA_CODE);var He=function(){var e=Object(s.useRef)(),t=Object(o.f)();return Object(s.useEffect)((function(){var i=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){g.a.set({page:e}),g.a.pageview(e)}(i)}),[t]),Object(b.jsx)(f,{ref:e,children:function(){return Object(b.jsx)(x,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(m,{exact:!0,path:"/",component:Ce,layout:I}),Object(b.jsx)(m,{exact:!0,path:"/news",component:Se,layout:R}),Object(b.jsx)(m,{exact:!0,path:"/about",component:Fe,layout:V})]})})}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(106);var Me=i(57),ze=i(54),_e=i(55);Me.a.use(L.a).use(ze.a).use(_e.a).init({debug:!0,fallbackLng:"en"});var Re=Object(r.a)();Object(n.createRoot)(document.getElementById("root")).render(Object(b.jsx)(c.a,{history:Re,children:Object(b.jsx)(He,{children:Object(b.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"SPAICE",description:"SPAICE is a Software-as-a-Service provider that tackles navigation in space. They cover the whole pipeline, from target detection (satellite/debris) to docking operations, including tracking and fully autonomous navigation and control. SPAICE's approach is based on AI and Computer Vision."})})})})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/imperial_college.7f294d18.png"},47:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/unina_1.b2e2868d.png"},74:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/logo.1426b38e.png"},89:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/SPAICE_values.413ea471.svg"},90:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/SPAICE_values_mobile.f6f33e3f.png"},91:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/pose_estimation.7cd24dd2.png"},92:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/navigation.e2560919.png"},93:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/docking.fa77cf2e.jpg"},94:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/robot-manipulation.cc3b2e1b.jpeg"},95:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/technology.fb2b19cc.png"},96:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/business.85e48292.png"},97:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/view.f380a365.png"},98:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/matteo.e54ae2af.jpg"},99:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/guillem.8b5cb9d8.jpg"}},[[107,1,2]]]);
//# sourceMappingURL=main.bae874b2.chunk.js.map