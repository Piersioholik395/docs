"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1873],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9753:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(5443),i=n(3010),r=(n(9496),n(9613)),o=n(3795),c=["components"],s={},l="\u914d\u7f6e\u767b\u5f55\u65b9\u5f0f",p={unversionedId:"docs/recipes/customize-sie/configure-sign-in-methods",id:"docs/recipes/customize-sie/configure-sign-in-methods",title:"\u914d\u7f6e\u767b\u5f55\u65b9\u5f0f",description:"\u7b80\u5316\u8d77\u89c1\uff0c\u867d\u7136\u6807\u9898\u4e2d\u53ea\u542b\u6709\u300c\u767b\u5f55\u300d\uff0c\u4f46\u8fd9\u4e9b\u65b9\u6cd5\u4e5f\u6307\u300c\u6ce8\u518c\u65b9\u5f0f\u300d\uff08\u5982\u9002\u7528\uff09\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/customize-sie/configure-sign-in-methods.mdx",sourceDirName:"docs/recipes/customize-sie",slug:"/docs/recipes/customize-sie/configure-sign-in-methods",permalink:"/zh-cn/docs/recipes/customize-sie/configure-sign-in-methods",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/customize-sie/configure-sign-in-methods.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u914d\u7f6e\u54c1\u724c",permalink:"/zh-cn/docs/recipes/customize-sie/configure-branding"},next:{title:"Terms of use and language",permalink:"/zh-cn/docs/recipes/customize-sie/tou-and-language"}},d={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u7528\u6237\u540d\u4e0e\u5bc6\u7801",id:"\u7528\u6237\u540d\u4e0e\u5bc6\u7801",level:3},{value:"\u624b\u673a\u53f7\u767b\u5f55",id:"\u624b\u673a\u53f7\u767b\u5f55",level:3},{value:"\u90ae\u7bb1\u767b\u5f55",id:"\u90ae\u7bb1\u767b\u5f55",level:3},{value:"\u793e\u4ea4\u767b\u5f55",id:"\u793e\u4ea4\u767b\u5f55",level:3},{value:"\u767b\u5f55\u65b9\u5f0f\u7c7b\u578b",id:"\u767b\u5f55\u65b9\u5f0f\u7c7b\u578b",level:2},{value:"\u4e3b\u8981\u767b\u5f55\u65b9\u5f0f",id:"\u4e3b\u8981\u767b\u5f55\u65b9\u5f0f",level:2},{value:"\u4e8c\u7ea7\u767b\u5f55\u65b9\u5f0f",id:"\u4e8c\u7ea7\u767b\u5f55\u65b9\u5f0f",level:2}],u={toc:m};function v(e){var t=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u914d\u7f6e\u767b\u5f55\u65b9\u5f0f"},"\u914d\u7f6e\u767b\u5f55\u65b9\u5f0f"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7b80\u5316\u8d77\u89c1\uff0c\u867d\u7136\u6807\u9898\u4e2d\u53ea\u542b\u6709\u300c\u767b\u5f55\u300d\uff0c\u4f46\u8fd9\u4e9b\u65b9\u6cd5\u4e5f\u6307\u300c\u6ce8\u518c\u65b9\u5f0f\u300d\uff08\u5982\u9002\u7528\uff09\u3002"))),(0,r.kt)(o.ZP,{mdxType:"SaveChanges"}),(0,r.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,r.kt)("h3",{id:"\u7528\u6237\u540d\u4e0e\u5bc6\u7801"},"\u7528\u6237\u540d\u4e0e\u5bc6\u7801"),(0,r.kt)("p",null,"\u4f20\u7edf\u4e14\u9ed8\u8ba4\u7684\u767b\u5f55\u65b9\u5f0f\u3002\u65e0\u9700\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"\u624b\u673a\u53f7\u767b\u5f55"},"\u624b\u673a\u53f7\u767b\u5f55"),(0,r.kt)("p",null,"Logto \u5c06\u53d1\u9001\u516d\u4f4d\u52a8\u6001\u9a8c\u8bc1\u7801\u5230\u7528\u6237\u7684\u624b\u673a\u53f7\u7528\u4e8e\u767b\u5f55\u3002\u8be5\u65b9\u5f0f\u65e0\u9700\u8bbe\u7f6e\u5bc6\u7801\uff0c\u5e76\u53d8\u5f97\u8d8a\u53d1\u6d41\u884c\u3002\u4f60\u9700\u8981 ",(0,r.kt)("a",{parentName:"p",href:"#"},"\u914d\u7f6e\u4e00\u4e2a\u77ed\u4fe1\u8fde\u63a5\u5668")," \u4ee5\u542f\u7528\u8be5\u767b\u5f55\u65b9\u5f0f\u3002"),(0,r.kt)("h3",{id:"\u90ae\u7bb1\u767b\u5f55"},"\u90ae\u7bb1\u767b\u5f55"),(0,r.kt)("p",null,"Logto \u5c06\u53d1\u9001\u516d\u4f4d\u52a8\u6001\u9a8c\u8bc1\u7801\u5230\u7528\u6237\u7684\u90ae\u7bb1\u7528\u4e8e\u767b\u5f55\u3002\u8be5\u65b9\u5f0f\u65e0\u9700\u8bbe\u7f6e\u5bc6\u7801\uff0c\u5e76\u53d8\u5f97\u8d8a\u53d1\u6d41\u884c\u3002\u4f60\u9700\u8981 ",(0,r.kt)("a",{parentName:"p",href:"#"},"\u914d\u7f6e\u4e00\u4e2a\u90ae\u4ef6\u8fde\u63a5\u5668")," \u4ee5\u542f\u7528\u8be5\u767b\u5f55\u65b9\u5f0f\u3002"),(0,r.kt)("h3",{id:"\u793e\u4ea4\u767b\u5f55"},"\u793e\u4ea4\u767b\u5f55"),(0,r.kt)("p",null,"\u4f7f\u7528\u4e00\u4e2a\u7b2c\u4e09\u65b9\u8eab\u4efd\u6e90\u8fdb\u884c\u767b\u5f55\uff0c\u4f8b\u5982\u5fae\u4fe1\u6216\u652f\u4ed8\u5b9d\u3002\u4f60\u9700\u8981 ",(0,r.kt)("a",{parentName:"p",href:"#"},"\u6dfb\u52a0\u81f3\u5c11\u4e00\u4e2a\u793e\u4ea4\u8fde\u63a5\u5668")," \u4ee5\u542f\u7528\u8be5\u767b\u5f55\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u793e\u4ea4\u767b\u5f55\u914d\u7f6e\u754c\u9762\u662f\u4e00\u4e2a\u4e24\u5217\u8868\u683c\u3002\u5de6\u5217\u4ee3\u8868\u4e86\u5df2\u6dfb\u52a0\u7684\u8fde\u63a5\u5668\uff0c\u53f3\u5217\u4e2d\u5219\u662f\u767b\u5f55\u4f53\u9a8c\u6b63\u5728\u4f7f\u7528\u7684\u8fde\u63a5\u5668\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u5728\u767b\u5f55\u4f53\u9a8c\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u8fde\u63a5\u5668\uff0c\u8bf7\u70b9\u6309\u300c+\u300d\u6309\u94ae\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u5728\u767b\u5f55\u4f53\u9a8c\u4e2d\u79fb\u9664\u4e00\u4e2a\u8fde\u63a5\u5668\uff0c\u8bf7\u70b9\u6309\u300c-\u300d\u6309\u94ae\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u53d8\u66f4\u4e00\u4e2a\u6b63\u5728\u4f7f\u7528\u4e2d\u7684\u8fde\u63a5\u5668\u4f4d\u7f6e\uff0c\u76f4\u63a5\u62d6\u62fd\u5373\u53ef\u3002")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5bf9\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"#"},"\u975e\u901a\u7528\u8fde\u63a5\u5668"),"\uff08\u4f8b\u5982\u5fae\u4fe1\uff09\uff0c\u5728\u540d\u5b57\u540e\u9762\u4f1a\u663e\u793a\u5e73\u53f0\u7684\u56fe\u6807\u3002"))),(0,r.kt)("h2",{id:"\u767b\u5f55\u65b9\u5f0f\u7c7b\u578b"},"\u767b\u5f55\u65b9\u5f0f\u7c7b\u578b"),(0,r.kt)("p",null,"Logto \u6709\u4e24\u79cd\u767b\u5f55\u65b9\u5f0f\u7c7b\u578b\uff1a\u4e3b\u8981\u767b\u5f55\u65b9\u5f0f\u548c\u4e8c\u7ea7\u767b\u5f55\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u987e\u540d\u601d\u4e49\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u4e3b\u8981\u767b\u5f55\u65b9\u5f0f")," \u662f\u4f60\u60f3\u5f3a\u8c03\u7684\u90a3\u4e2a\u65b9\u5f0f\u3002\u8fd9\u4e2a\u65b9\u5f0f\u7684\u6240\u6709\u4e1c\u897f\u90fd\u5927\u4e14\u7a81\u51fa\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u4e8c\u7ea7\u767b\u5f55\u65b9\u5f0f")," \u4f1a\u88ab\u7f6e\u4e8e\u6b21\u8981\u7684\u89c6\u89c9\u4f4d\u7f6e\uff0c\u5e76\u4e14\u7ec4\u4ef6\u4f1a\u53d8\u5c0f\uff0c\u4ee5\u653e\u4e0b\u66f4\u591a\u7684\u767b\u5f55\u65b9\u5f0f\u3002")),(0,r.kt)("h2",{id:"\u4e3b\u8981\u767b\u5f55\u65b9\u5f0f"},"\u4e3b\u8981\u767b\u5f55\u65b9\u5f0f"),(0,r.kt)("p",null,"\u6839\u636e\u4f60\u7684\u4e1a\u52a1\u548c\u73b0\u72b6\uff0c\u4f60\u4e5f\u8bb8\u60f3\u7528\u4e0d\u540c\u7684\u4e3b\u8981\u767b\u5f55\u65b9\u5f0f\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5185\u90e8\u7684\u5e94\u7528\uff0c\u53ea\u9700\u8981\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u767b\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u793e\u4ea4\u5e94\u7528\uff0c\u60f3\u7528\u793e\u4ea4\u767b\u5f55\u6765\u6253\u9020\u4e1d\u6ed1\u7684\u7528\u6237\u65c5\u7a0b\u3002")),(0,r.kt)("p",null,"\u4f7f\u7528\u4e0b\u62c9\u6846\u6765\u53d8\u66f4\u4e3b\u8981\u767b\u5f55\u65b9\u5f0f\uff0c\u5e76\u770b\u770b\u9884\u89c8\u4e2d\u6709\u4ec0\u4e48\u4e0d\u540c\u3002"),(0,r.kt)("h2",{id:"\u4e8c\u7ea7\u767b\u5f55\u65b9\u5f0f"},"\u4e8c\u7ea7\u767b\u5f55\u65b9\u5f0f"),(0,r.kt)("p",null,"Logto \u652f\u6301\u5728\u4e8c\u7ea7\u533a\u57df\u542f\u7528\u591a\u79cd\u767b\u5f55\u65b9\u5f0f\uff0c\u7ed9\u7528\u6237\u63d0\u4f9b\u7075\u6d3b\u7684\u767b\u5f55\u9009\u9879\u6216\u652f\u6301\u767b\u5f55\u65b9\u5f0f\u7684\u5e73\u6ed1\u8fc1\u79fb\u3002"),(0,r.kt)("p",null,"\u6253\u5f00 ",(0,r.kt)("em",{parentName:"p"},"\u542f\u7528\u4e8c\u7ea7\u767b\u5f55\u65b9\u5f0f")," \u5f00\u5173\u4ee5\u914d\u7f6e\u54ea\u4e9b\u767b\u5f55\u65b9\u5f0f\u9700\u8981\u542f\u7528\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f60\u65e0\u6cd5\u5c06\u4e00\u4e2a\u767b\u5f55\u65b9\u5f0f\u540c\u65f6\u8bbe\u7f6e\u4e3a\u4e3b\u8981\u548c\u6b21\u8981\u3002"))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8bf7\u8c28\u614e\u7981\u7528\u767b\u5f55\u65b9\u5f0f\uff01\u5982\u679c\u4f60\u7684\u7528\u6237\u6ca1\u6709\u4f7f\u7528\u8fc7\u4f59\u4e0b\u7684\u767b\u5f55\u65b9\u5f0f\uff0c\u4ed6\u4eec\u5c06\u4f1a\u65e0\u6cd5\u518d\u6b21\u767b\u5f55\u3002"))))}v.isMDXComponent=!0},3795:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(5443),i=n(3010),r=(n(9496),n(9613)),o=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u522b\u5fd8\u4e86\u70b9\u6309\u300c\u4fdd\u5b58\u53d8\u66f4\u300d\u6765\u4e0a\u7ebf\u4f60\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002"))))}s.isMDXComponent=!0}}]);