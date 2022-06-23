"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[409],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return l}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),l=o,f=d["".concat(s,".").concat(l)]||d[l]||m[l]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function l(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8430:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return l}});var r=n(5443),o=n(3010),i=(n(9496),n(9613)),a=n(4229),c=n(3795),s=["components"],p={},u="\u914d\u7f6e\u54c1\u724c",m={unversionedId:"docs/recipes/customize-sie/configure-branding",id:"docs/recipes/customize-sie/configure-branding",title:"\u914d\u7f6e\u54c1\u724c",description:"\u6df1\u8272\u6a21\u5f0f",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/customize-sie/configure-branding.mdx",sourceDirName:"docs/recipes/customize-sie",slug:"/docs/recipes/customize-sie/configure-branding",permalink:"/zh-cn/docs/recipes/customize-sie/configure-branding",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/customize-sie/configure-branding.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83c\udfa8 \u81ea\u5b9a\u4e49\u767b\u5f55\u4f53\u9a8c",permalink:"/zh-cn/docs/recipes/customize-sie/"},next:{title:"\u914d\u7f6e\u767b\u5f55\u65b9\u5f0f",permalink:"/zh-cn/docs/recipes/customize-sie/configure-sign-in-methods"}},d={},l=[{value:"\u6df1\u8272\u6a21\u5f0f",id:"\u6df1\u8272\u6a21\u5f0f",level:2},{value:"\u54c1\u724c\u8272",id:"\u54c1\u724c\u8272",level:2},{value:"\u54c1\u724c\u533a\u57df",id:"\u54c1\u724c\u533a\u57df",level:2}],f={toc:l};function v(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u914d\u7f6e\u54c1\u724c"},"\u914d\u7f6e\u54c1\u724c"),(0,i.kt)(c.ZP,{mdxType:"SaveChanges"}),(0,i.kt)("h2",{id:"\u6df1\u8272\u6a21\u5f0f"},"\u6df1\u8272\u6a21\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u542f\u7528\u6df1\u8272\u6a21\u5f0f")," \u51b3\u5b9a\u4e86\u5f53 Logto \u68c0\u6d4b\u5230\u76f8\u5173\u7cfb\u7edf\u504f\u597d\u65f6\uff0c\u662f\u5426\u8ba9 UI \u6709\u4e00\u79cd\u300c\u6df1\u8272\u7684\u611f\u89c9\u300d\u3002"),(0,i.kt)("h2",{id:"\u54c1\u724c\u8272"},"\u54c1\u724c\u8272"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u54c1\u724c\u8272")," \u5c06\u5f71\u54cd\u7ec4\u4ef6\u7684\u4e3b\u8981\u989c\u8272\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u6309\u94ae\u3001\u94fe\u63a5\u7b49\u3002\u8bd5\u8bd5\u5c06 Logto \u84dd\u7d2b\u8272\u66ff\u6362\u6210\u4f60\u7684\u54c1\u724c\u8272\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u542f\u7528\u4e86\u6df1\u8272\u6a21\u5f0f\uff0c\u4f60\u5c06\u770b\u5230\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("em",{parentName:"p"},"\u54c1\u724c\u8272\uff08\u6df1\u8272\uff09")," \u7684\u989d\u5916\u8f93\u5165\u6846\u3002"),(0,i.kt)(a.ZP,{mdxType:"DarkModeNote"}),(0,i.kt)("h2",{id:"\u54c1\u724c\u533a\u57df"},"\u54c1\u724c\u533a\u57df"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u90e8\u5206\u6bd4\u8f83\u76f4\u63a5\u3002\u968f\u610f\u8c03\u6574\u4e00\u4e9b\u4e1c\u897f\u770b\u770b\u6709\u4ec0\u4e48\u53d8\u5316\u3002"))}v.isMDXComponent=!0},4229:function(e,t,n){n.d(t,{ZP:function(){return s}});var r=n(5443),o=n(3010),i=(n(9496),n(9613)),a=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\u300c\u54c1\u724c\u8272\uff08\u6df1\u8272\uff09\u300d\u4e0e\u539f\u6765\u7684\u300c\u54c1\u724c\u8272\u300d\u6709\u4e9b\u8bb8\u4e0d\u540c\u3002",(0,i.kt)("br",null),"\n\u56e0\u4e3a Logto \u521a\u521a\u8003\u8651\u5230\u4e86\u5728\u6d45\u8272\u548c\u6df1\u8272\u4e0b\u7684\u89c6\u89c9\u5dee\u5f02\uff0c\u5e76\u8ba1\u7b97\u51fa\u4e86\u6df1\u8272\u6a21\u5f0f\u4e13\u5c5e\u7684\u54c1\u724c\u8272\u3002\u5982\u679c\u4f60\u5bf9\u5b83\u4e0d\u6ee1\u610f\uff0c\u8bf7\u968f\u610f\u66ff\u6362\u3002"))))}s.isMDXComponent=!0},3795:function(e,t,n){n.d(t,{ZP:function(){return s}});var r=n(5443),o=n(3010),i=(n(9496),n(9613)),a=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u522b\u5fd8\u4e86\u70b9\u6309\u300c\u4fdd\u5b58\u53d8\u66f4\u300d\u6765\u4e0a\u7ebf\u4f60\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002"))))}s.isMDXComponent=!0}}]);