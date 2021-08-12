"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[837],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3281:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},Highlight:function(){return d},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={id:"sources",title:"Sources"},s=void 0,l={unversionedId:"Api/sources",id:"Api/sources",isDocsHomePage:!1,title:"Sources",description:"<span",source:"@site/docs/Api/05-Sources.md",sourceDirName:"Api",slug:"/Api/sources",permalink:"/checkout-sdk-node/Api/sources",version:"current",sidebarPosition:5,frontMatter:{id:"sources",title:"Sources"},sidebar:"tutorialSidebar",previous:{title:"Tokens",permalink:"/checkout-sdk-node/Api/tokens"},next:{title:"Instruments",permalink:"/checkout-sdk-node/Api/instruments"}},u=[{value:'Add a <Highlight color="#25c2a0">SEPA source</Highlight>',id:"add-a-sepa-source",children:[]},{value:'Add a <Highlight color="#25c2a0">ACH source</Highlight>',id:"add-a-ach-source",children:[]}],d=function(e){var n=e.children,t=e.color;return(0,o.kt)("span",{style:{color:t,padding:"0.2rem"}},n)},p={toc:u,Highlight:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can find a list of request body parameters and possible outcomes ",(0,o.kt)("a",{parentName:"p",href:"https://api-reference.checkout.com/#tag/Sources"},"here"),"."),(0,o.kt)("p",null,"The SDK will infer the type of the source, if not provided."),(0,o.kt)("h2",{id:"add-a-sepa-source"},"Add a ",(0,o.kt)(d,{color:"#25c2a0",mdxType:"Highlight"},"SEPA source")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"SEPA is not enabled by default, so please let your account manager know if you want to use it."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const source = await cko.sources.add({\n    // type:\"sepa\" is inferred\n    reference: 'X-080957-N34',\n    source_data: {\n        first_name: 'Sophie',\n        last_name: 'Bonneville',\n        account_iban: 'DE25100100101234567893',\n        bic: 'PBNKDEFFXXX',\n        billing_descriptor: 'Thanks for shopping',\n        mandate_type: 'recurring'\n    },\n    billing_address: {\n        address_line1: '101 Avenue de Gaulle',\n        city: 'Paris',\n        zip: '75013',\n        country: 'FR'\n    },\n    phone: {\n        country_code: '+33',\n        number: '6 78 91 01 11'\n    },\n    customer: {\n        email: 'sophie.bonneville@ckomail.com'\n    }\n});\n")),(0,o.kt)("h2",{id:"add-a-ach-source"},"Add a ",(0,o.kt)(d,{color:"#25c2a0",mdxType:"Highlight"},"ACH source")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"ACH is not enabled by default, so please let your account manager know if you want to use it."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const source = await cko.sources.add({\n    // type:\"ach\" is inferred\n    billing_address: {\n        address_line1: 'Wayne Plaza 1',\n        address_line2: null,\n        city: 'Gotham City',\n        state: null,\n        zip: '12345',\n        country: 'US'\n    },\n    source_data: {\n        account_holder_name: 'Bruce Wayne',\n        account_type: 'Checking',\n        account_number: '0123456789',\n        routing_number: '211370545',\n        billing_descriptor: 'ACH Demo',\n        company_name: null\n    }\n});\n")))}m.isMDXComponent=!0}}]);