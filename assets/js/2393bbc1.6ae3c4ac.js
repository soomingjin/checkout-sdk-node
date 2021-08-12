"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[446],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(m,a(a({ref:t},s),{},{components:n})):i.createElement(m,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4099:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},Highlight:function(){return p},default:function(){return h}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"initialize",title:"Initialize"},l=void 0,u={unversionedId:"Getting Started/initialize",id:"Getting Started/initialize",isDocsHomePage:!1,title:"Initialize",description:"<span",source:"@site/docs/Getting Started/03-Initialize.md",sourceDirName:"Getting Started",slug:"/Getting Started/initialize",permalink:"/checkout-sdk-node/Getting Started/initialize",version:"current",sidebarPosition:3,frontMatter:{id:"initialize",title:"Initialize"},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/checkout-sdk-node/Getting Started/install"},next:{title:"Environment",permalink:"/checkout-sdk-node/Getting Started/environment"}},s=[{value:"With environment variables",id:"with-environment-variables",children:[]},{value:"With your secret key",id:"with-your-secret-key",children:[]},{value:"With your secret &amp; public key &amp; config",id:"with-your-secret--public-key--config",children:[]},{value:"With a custom HTTP agent",id:"with-a-custom-http-agent",children:[]},{value:"Update config",id:"update-config",children:[]}],p=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:s,Highlight:p};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you use environment variables, the SDK will pick the keys up when they are set as ",(0,o.kt)(p,{color:"#a45200",mdxType:"Highlight"},"CKO_SECRET_KEY")," and ",(0,o.kt)(p,{color:"#a45200",mdxType:"Highlight"},"CKO_PUBLIC_KEY"),"."))),(0,o.kt)("h2",{id:"with-environment-variables"},"With environment variables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const cko = new Checkout();\n")),(0,o.kt)("h2",{id:"with-your-secret-key"},"With your secret key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const cko = new Checkout('sk_XXXX');\n")),(0,o.kt)("h2",{id:"with-your-secret--public-key--config"},"With your secret & public key & config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const cko = new Checkout('sk_XXXX', { pk: 'pk_XXX', timeout: 7000 });\n")),(0,o.kt)("h2",{id:"with-a-custom-http-agent"},"With a custom HTTP agent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const http = require('http');\nconst keepAliveAgent = new http.Agent({ keepAlive: true })\n\nconst cko = new Checkout('sk_XXXX', { agent: keepAliveAgent });\n")),(0,o.kt)("p",null,"For now only the request timeout and agent can be configured. Future configuration options will be added and will very likly be passed in a similar way."),(0,o.kt)("h2",{id:"update-config"},"Update config"),(0,o.kt)("p",null,"If at any point you need to update the API key used, you can update the SDK config like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const cko = new Checkout('sk_XXXX');\n...\ncko.config = {\n    sk: newSecretKey,\n    pk: newPublicKey,\n    host: \"https://myProxyExample.com\",\n    timeout: newTimeOut\n};\n")),(0,o.kt)("p",null,"The host will allow you to replace the base API URL with your own, if at any point you need this for testing purposes."),(0,o.kt)("p",null,"The SDK is using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/node-fetch/node-fetch"},"node-fetch")," as the HTTP client so if that means that it's easy to moch API responses with tolls like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nock/nock"},"nock"),"."))}h.isMDXComponent=!0}}]);