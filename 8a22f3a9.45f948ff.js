(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(6),o=(r(0),r(121)),c={id:"errors",title:"Error Handling"},i={id:"errors",title:"Error Handling",description:"The SDK is using promises, and you can handle errors similar to any other HTTP call.",source:"@site/docs/errors.md",permalink:"/checkout-sdk-node/errors",sidebar:"someSidebar",previous:{title:"Environment",permalink:"/checkout-sdk-node/environment"},next:{title:"Payments",permalink:"/checkout-sdk-node/payments"}},b=[{value:"SDK specific errors",id:"sdk-specific-errors",children:[]},{value:"How errors are determined",id:"how-errors-are-determined",children:[]}],l={rightToc:b};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The SDK is using promises, and you can handle errors similar to any other HTTP call."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const cko = new Checkout();\n\ntry {\n    // some async request made with the SDK\n    const action = await cko.payments.request({...});\n    ...\n} catch (error) {\n    switch (error.name) {\n        ...\n    }\n}\n")),Object(o.b)("h2",{id:"sdk-specific-errors"},"SDK specific errors"),Object(o.b)("p",null,"The errors follow the Checkout.com ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://api-reference.checkout.com/"}),"API Reference"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"error.name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"has response body"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AuthenticationError"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ActionNotAllowed"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UrlAlreadyRegistered"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NotFoundError"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ValidationError"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TooManyRequestsError"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BadGateway"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(o.b)("h2",{id:"how-errors-are-determined"},"How errors are determined"),Object(o.b)("p",null,"The errors above are triggered by status codes that do not fall in the 20X Status codes, or by validation issues. This means that statuses like a 202, 204 will not throw an exception"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It's important to understand that Declines, or 3D Secure responses do not throw an exception, since the status code associated with them is in the 20X range. In the Payments section you will see some examples of best practices when it comes to handling responses."))))}s.isMDXComponent=!0},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return r?a.a.createElement(m,i({ref:t},l,{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);