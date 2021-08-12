"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[785],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8836:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},Highlight:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"tokens",title:"Tokens"},s=void 0,l={unversionedId:"Api/tokens",id:"Api/tokens",isDocsHomePage:!1,title:"Tokens",description:"<span",source:"@site/docs/Api/04-Tokens.md",sourceDirName:"Api",slug:"/Api/tokens",permalink:"/checkout-sdk-node/Api/tokens",version:"current",sidebarPosition:4,frontMatter:{id:"tokens",title:"Tokens"},sidebar:"tutorialSidebar",previous:{title:"Hosted Payments",permalink:"/checkout-sdk-node/Api/hosted-payments"},next:{title:"Sources",permalink:"/checkout-sdk-node/Api/sources"}},p=[{value:'Request a token for <Highlight color="#25c2a0">Apple Pay</Highlight>',id:"request-a-token-for-apple-pay",children:[]},{value:'Request a token for <Highlight color="#25c2a0">Google Pay</Highlight>',id:"request-a-token-for-google-pay",children:[]},{value:'Request a token for <Highlight color="#25c2a0">raw card details</Highlight>',id:"request-a-token-for-raw-card-details",children:[]}],u=function(e){var t=e.children,n=e.color;return(0,a.kt)("span",{style:{color:n,padding:"0.2rem"}},t)},d={toc:p,Highlight:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can find a list of request body parameters and possible outcomes ",(0,a.kt)("a",{parentName:"p",href:"https://api-reference.checkout.com/#tag/Tokens"},"here"),"."),(0,a.kt)("p",null,"The SDK will infer the type of the payload, if not provided."),(0,a.kt)("h2",{id:"request-a-token-for-apple-pay"},"Request a token for ",(0,a.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Apple Pay")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const token = await cko.tokens.request({\n    // type:\"applepay\" is inferred\n    token_data: {\n        version: 'EC_v1',\n        data: 'XXX',\n        signature: 'XXX',\n        header: {\n            ephemeralPublicKey: 'XXX',\n            publicKeyHash: 'XXX',\n            transactionId: 'XXX'\n        }\n    }\n});\n")),(0,a.kt)("h2",{id:"request-a-token-for-google-pay"},"Request a token for ",(0,a.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Google Pay")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const token = await cko.tokens.request({\n    // type:\"googlepay\" is inferred\n    token_data: {\n        protocolVersion: 'EC_v1',\n        signature: 'XXX',\n        signedMessage: 'XXX'\n    }\n});\n")),(0,a.kt)("h2",{id:"request-a-token-for-raw-card-details"},"Request a token for ",(0,a.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"raw card details")),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you do not have SEQ-D level of PCI Compliance, this interaction can only be done in the test environment in case you want to unit test your code and you need a token to subsequently do a payment. In the production environment you need to use a solution like ",(0,a.kt)("strong",{parentName:"p"},"Checkout.Frames")," to generate the token for you."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const token = await cko.tokens.request({\n    // type:\"card\" is inferred\n    number: '4242424242424242',\n    expiry_month: '6',\n    expiry_year: '2028',\n    cvv: '100'\n});\n")))}f.isMDXComponent=!0}}]);