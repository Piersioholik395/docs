"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9158],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8608:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var o=n(5443),a=n(3010),r=(n(9496),n(9613)),i=n(1629),c=n(6939),s=["components"],l={sidebar_position:5},p="Enable social sign-in",d={unversionedId:"docs/tutorials/get-started/enable-social-sign-in",id:"docs/tutorials/get-started/enable-social-sign-in",title:"Enable social sign-in",description:'In the "Get Started" tab, click the "Add" button on the right, and the browser will redirect to the "Connectors" -> "Social connectors" tab.',source:"@site/docs/docs/tutorials/get-started/enable-social-sign-in.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/enable-social-sign-in",permalink:"/docs/tutorials/get-started/enable-social-sign-in",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/get-started/enable-social-sign-in.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Enable SMS or email passcode sign-in",permalink:"/docs/tutorials/get-started/enable-passcode-sign-in"},next:{title:"Further readings",permalink:"/docs/tutorials/get-started/further-readings"}},u={},m=[{value:"Add a social connector",id:"add-a-social-connector",level:2},{value:"Configure social connector",id:"configure-social-connector",level:2},{value:"Enable connector in sign-in experience",id:"enable-connector-in-sign-in-experience",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],h={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enable-social-sign-in"},"Enable social sign-in"),(0,r.kt)("p",null,'In the "Get Started" tab, click the "Add" button on the right, and the browser will redirect to the "Connectors" -> "Social connectors" tab.'),(0,r.kt)(i.ZP,{mdxType:"ConnectorsIntro"}),(0,r.kt)("h2",{id:"add-a-social-connector"},"Add a social connector"),(0,r.kt)("p",null,'Click the "Add social connector" button to look for the connector you want. The opening modal shows the built-in connectors, which allow out-of-box usage:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Alipay")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connector-alipay"},"Web connector")," | ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connector-alipay-native"},"Native connector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Apple")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connector-apple"},"Universal connector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Facebook")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connector-facebook"},"Universal connector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GitHub")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connector-github"},"Universal connector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Google")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connector-google"},"Universal connector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WeChat")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connector-wechat"},"Web connector")," | ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connector-wechat-native"},"Native connector"))),(0,r.kt)(c.ZP,{mdxType:"ConnectorsWip"}),(0,r.kt)("h2",{id:"configure-social-connector"},"Configure social connector"),(0,r.kt)("p",null,"A full-screen page will guide you through setting things up correctly. Follow the steps below to finish the setup:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go through the README doc on the left, then follow the instructions inside."),(0,r.kt)("li",{parentName:"ol"},"Fill out the JSON that the connector needs in the editor on the right."),(0,r.kt)("li",{parentName:"ol"},'Click "Done" to finish.')),(0,r.kt)("h2",{id:"enable-connector-in-sign-in-experience"},"Enable connector in sign-in experience"),(0,r.kt)("p",null,'Switch to the "Sign-in Experience" tab by clicking the link in the very left section of the page, then click the "Sign-in Methods" tab.'),(0,r.kt)("p",null,'If you didn\'t add any other sign-in methods before, "Enable secondary sign-in" should be off. Turn it on, and check "Social sign-in".'),(0,r.kt)("p",null,'On the table that just showed up, look for the connector you just added in the left column, "Social connectors". Then click the plus icon on the right.'),(0,r.kt)("p",null,'You should see a logo representing the identity provider of the conncetor under the big "Sign In" button.'),(0,r.kt)("p",null,"If you have multiple social connectors in use (in the right column), you can drag and drop them to reorder."),(0,r.kt)("p",null,'Click "Save changes" to push the changes to go live.'),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Open the demo app again to try out the new sign-in method."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/customize-sie/configure-sign-in-methods"},"Configure sign-in methods")," for a complete picture of sign-in methods combinations."))),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-passcode-sign-in"},"Enable SMS or email passcode sign-in")," (in case you haven't tried)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/further-readings"},"Further readings"))))}g.isMDXComponent=!0},1629:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(5443),a=n(3010),r=(n(9496),n(9613)),i=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About connectors")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Connectors are the bridges between Logto and third-party services. We have three connector types: SMS, email, and social.",(0,r.kt)("br",null),"\nWhile Logto provides some built-in connectors, you can also implement your own. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/connectors/"},"Connectors")," to learn more."))))}s.isMDXComponent=!0},6939:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(5443),a=n(3010),r=(n(9496),n(9613)),i=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We're still working on more connectors! If you don't see the connector you want, follow ",(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/create-your-connector/"},"Create your connector")," to extend or file a ",(0,r.kt)("a",{parentName:"p",href:"#"},"Feature Request")," on GitHub."))))}s.isMDXComponent=!0}}]);