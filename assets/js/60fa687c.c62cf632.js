"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4613],{33589:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(20411),l=t(88795),o="tabItem_YI6x";function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:t},n)}},23871:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(60953),l=t(20411),o=t(88795),r=t(99170),i=t(87159),s=t(16090),c=t(13915),u="tabList__Fu4",p="tabItem_LBMY";function m(e){var n,t,r=e.lazy,m=e.block,d=e.defaultValue,v=e.values,g=e.groupId,h=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=v?v:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.l)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var I=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:f[0].props.value;if(null!==I&&!b.some((function(e){return e.value===I})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+I+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),y=w.tabGroupChoices,x=w.setTabGroupChoices,N=(0,l.useState)(I),E=N[0],z=N[1],T=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var L=y[g];null!=L&&L!==E&&b.some((function(e){return e.value===L}))&&z(L)}var Z=function(e){var n=e.currentTarget,t=T.indexOf(n),a=b[t].value;a!==E&&(S(n),z(a),null!=g&&x(g,String(a)))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,l=T.indexOf(e.currentTarget)+1;t=null!=(a=T[l])?a:T[0];break;case"ArrowLeft":var o,r=T.indexOf(e.currentTarget)-1;t=null!=(o=T[r])?o:T[T.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},h)},b.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:Z,onClick:Z},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),r?(0,l.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(n)},e))}},63374:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(20411),l="base_M3w8",o="column_mb9C base_M3w8",r={alignItems:"center",column:!1,textAlign:"center"};function i(e){var n;void 0===e&&(e=r);var t=e.column?o:l;return a.createElement("div",{className:t,style:{alignItems:e.alignItems,textAlign:null!=(n=e.textAlign)?n:"center"}},e.children)}},89199:function(e,n,t){var a=t(20411),l=t(51790),o=t(85826),r=t(63374),i=(0,l.L)();n.Z=function(){return a.createElement(r.Z,null,a.createElement(o.jJm,i),a.createElement(o.dTc,i),a.createElement(o.o1U,i),a.createElement(o.o_L,i),a.createElement(o.NeF,i))}},40239:function(e,n,t){t.d(n,{x:function(){return r},z:function(){return o}});var a=t(20411),l=t(79164);function o(){return a.createElement(l.Z,null,"<MenuIcon {...getIconProps()} />")}function r(){return a.createElement(l.Z,null,"import { MenuIcon } from '@pluralsight/icons'\nimport { getIconProps } from '@pluralsight/headless-styles'\n\nexport default function NavMenuIcon() {\n  return (\n    <MenuIcon {...getIconProps()} />\n  )\n}")}},96498:function(e,n,t){var a=t(20411),l=t(51790),o=t(85826),r=t(63374),i=(0,l.L)({size:"s"}),s=(0,l.L)(),c=(0,l.L)({size:"l"});n.Z=function(){return a.createElement(r.Z,null,a.createElement(o.r7p,i),a.createElement(o.r7p,s),a.createElement(o.r7p,c))}},80581:function(e,n,t){t.d(n,{N:function(){return r},r:function(){return o}});var a=t(20411),l=t(79164);function o(){return a.createElement(l.Z,null,"<StarIcon {...getIconProps({ size: 's' })} />\n<StarIcon {...getIconProps({ size: 'm' })} />\n<StarIcon {...getIconProps({ size: 'l' })} />")}function r(){return a.createElement(l.Z,null,"import { StarIcon } from '@pluralsight/icons'\nimport { getIconProps } from '@pluralsight/headless-styles'\n\nexport default function IconsSizes() {\n  return (\n    <div>\n      <StarIcon {...getIconProps({ size: 's' })} />\n      <StarIcon {...getIconProps({ size: 'm' })} />\n      <StarIcon {...getIconProps({ size: 'l' })} />\n    </div>\n  );\n}")}},78534:function(e,n,t){t.d(n,{Z:function(){return z}});var a=t(60953),l=t(59005),o=t(20411),r=t(93131),i="button_sEkW",s="chakra_ow8e",c="chakraCircle_c8Xz",u="list_rMMG",p="listItem_bLPI",m="icon_nzIq",d="svelteBackground_c8BA",v="svelteOutline_tdvb",g=["className"],h=o.createElement("svg",{"aria-hidden":"true",className:m,focusable:"false",viewBox:"0 0 24 24"},o.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),f=o.createElement("svg",{"aria-hidden":"true",className:m,focusable:"false",viewBox:"0 0 1024 1024"},o.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),b=o.createElement("svg",{"aria-hidden":"true",className:""+m,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{className:v,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),o.createElement("path",{className:d,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var k={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:h,id:"source",href:"",label:"Show full source"},styled:{icon:f,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:o.createElement("svg",{"aria-hidden":"true",className:m+" "+s,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},o.createElement("rect",{className:c,width:"582",height:"582",rx:"291"}),o.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:o.createElement("svg",{"aria-hidden":"true",className:m,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:b,id:"svelte",label:"View Svelte"}}};function I(e){var n=k.results[e.techId],t=(0,r.getButtonProps)({size:"xs"}).className,a="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return o.createElement("a",{"aria-label":n.label,className:t+" "+i,href:a,name:n.label,rel:"noopener noreferrer",target:"_blank",title:n.label},e.children)}function w(e){var n=e.techId,t=Object.assign({},(0,r.getButtonProps)({size:"xs"})),s=t.className,c=(0,l.Z)(t,g);return o.createElement("button",(0,a.Z)({className:s+" "+i,onClick:e.onToggleShow,title:k.results[n].label},c),o.createElement(y,{tabId:n}))}function y(e){return k.results[e.tabId].icon}function x(e){var n=e.techId;return o.createElement("li",{className:p},"source"===n?o.createElement(w,{onToggleShow:e.onToggleShow,techId:n}):o.createElement(I,{techId:n,href:e.sandboxList[n]},o.createElement(y,{tabId:n})))}function N(e){return o.createElement("ul",{className:u},k.items.map((function(n){return o.createElement(x,{key:n,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:n})})))}function E(e){var n=(0,o.useState)(!1),t=n[0],a=n[1];return o.createElement("div",null,o.createElement(N,{onToggleShow:function(){a((function(e){return!e}))},sandboxList:e.sandboxList}),t?e.fullCode:e.children)}var z=(0,o.memo)(E)},95777:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(20411),l=t(93131),o=t(51790),r=t(85826),i="icon_t5Zl",s="npmIcon_uVGz icon_t5Zl",c="link_GZb0";var u=a.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 576 512",focusable:"false",height:"2rem",width:"2rem",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"})),p=(0,l.getButtonProps)({kind:"weak",size:"s"}).className,m=(0,o.L)({size:"s"});function d(e){var n="github"===e.icon,t=n?i:s,l=n?a.createElement(r.ETn,m):u;return a.createElement("a",{className:p+" "+c,href:e.href,rel:"noopener",target:"_blank"},a.createElement("span",{className:t},l)," ",e.children)}},11135:function(e,n,t){t.r(n),t.d(n,{assets:function(){return S},contentTitle:function(){return z},default:function(){return C},frontMatter:function(){return E},metadata:function(){return T},toc:function(){return L}});var a=t(60953),l=t(59005),o=t(20411),r=t(70167),i=t(23871),s=t(33589),c=t(78534),u=t(89199),p=t(40239),m=t(96498),d=t(80581),v=t(23244),g=t(51790),h=t(85826),f=t(63374),b=(0,v.LU)({kind:"strong"}),k=b.button,I=b.iconOptions,w=(0,g.L)(I);var y=function(){return o.createElement(f.Z,null,o.createElement("button",k,o.createElement(h.Ncx,w),"Icon matches font color"))};var x=t(95777),N=["components"],E={sidebar_position:2,tags:["Development","Usage","Icons","Web"]},z="Usage (Web)",T={unversionedId:"development/icons/usage",id:"development/icons/usage",title:"Usage (Web)",description:"This is experimental documentation for Pluralsight Design icons package.",source:"@site/docs/development/icons/usage.mdx",sourceDirName:"development/icons",slug:"/development/icons/usage",permalink:"/docs/development/icons/usage",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/icons/usage.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Usage",permalink:"/docs/tags/usage"},{label:"Icons",permalink:"/docs/tags/icons"},{label:"Web",permalink:"/docs/tags/web"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Development","Usage","Icons","Web"]},sidebar:"development",previous:{title:"Intro",permalink:"/docs/development/icons/intro"},next:{title:"Usage (Mobile)",permalink:"/docs/development/icons/usage_mobile"}},S={},L=[{value:"Import",id:"import",level:2},{value:"React",id:"react",level:3},{value:"Svelte",id:"svelte",level:3},{value:"SVG",id:"svg",level:3},{value:"Typescript and pathed imports",id:"typescript-and-pathed-imports",level:3},{value:"Usage",id:"usage",level:2},{value:"Basic example",id:"basic-example",level:3},{value:"Data URI",id:"data-uri",level:3},{value:"Icon colors",id:"icon-colors",level:3},{value:"Icon sizes",id:"icon-sizes",level:3},{value:"Icon size guide",id:"icon-size-guide",level:2}],Z={toc:L};function C(e){var n=e.components,t=(0,l.Z)(e,N);return(0,r.kt)("wrapper",(0,a.Z)({},Z,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usage-web"},"Usage (Web)"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is ",(0,r.kt)("strong",{parentName:"p"},"experimental")," documentation for Pluralsight Design ",(0,r.kt)("strong",{parentName:"p"},"icons")," package.")),(0,r.kt)("p",null,"The Icons package provides inline SVG icons as ready-to-use components for popular frameworks as well as SVG files and data URIs."),(0,r.kt)(x.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/icons",mdxType:"ViewSourceLink"},"View source"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"We export React components by default, which can be imported by name from the package root."),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { MenuIcon } from '@pluralsight/icons'\n")),(0,r.kt)("h3",{id:"svelte"},"Svelte"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { MenuIcon } from '@pluralsight/icons/svelte'\n")),(0,r.kt)("h3",{id:"svg"},"SVG"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import menuSvg from '@pluralsight/icons/svg/navigation/menu.svg'\n")),(0,r.kt)("h3",{id:"typescript-and-pathed-imports"},"Typescript and pathed imports"),(0,r.kt)("p",null,"To use pathed imports (those other than ",(0,r.kt)("inlineCode",{parentName:"p"},"@pluralsight/icons"),")\nwith Typescript you will need to set\n",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#moduleResolution"},"moduleResolution")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"nodenext")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "compilerOptions": {\n    "moduleResolution": "nodenext"\n  }\n}\n')),(0,r.kt)("p",null,"If you are unable to upgrade or use these settings, you can reference the build files directly."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"React",value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import MenuIcon from '@pluralsight/icons/build/react/navigation/MenuIcon.js'\n"))),(0,r.kt)(s.Z,{label:"Svelte",value:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import MenuIcon from '@pluralsight/icons/build/svelte/navigation/MenuIcon.svelte'\n"))),(0,r.kt)(s.Z,{label:"SVG",value:"svg",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import menuSvg from '@pluralsight/icons/build/svg/navigation/menu.svg'\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If your bundler does not support tree shaking, please see our notes on ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/icons/intro#bundlers-without-tree-shaking"},"minimizing bundle size"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic-example"},"Basic example"),(0,r.kt)("p",null,"Icons are provided as either SVG or component exports based on your choosing."),(0,r.kt)(u.Z,{mdxType:"BasicIcon"}),(0,r.kt)(c.Z,{fullCode:(0,r.kt)(p.x,{mdxType:"BasicIconFullPreview"}),sandboxList:{chakra:"basic-icons-chakra-vnew2e",joy:"basic-icons-mui-q0ww53",styled:"basic-icon-css-in-js-sc-rk9wxq",svelte:"basic-icons-svelte-r0dtoj"},mdxType:"LiveExampleTabs"},(0,r.kt)(p.z,{mdxType:"BasicIconPreview"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The components provided from this library only contain an svg element to allow for\nmaximum flexibility. Additional attributes, such as sizing, will be provided by\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/Icon"},"headless-styles")," package, which can also be applied to custom icons.")),(0,r.kt)("h3",{id:"data-uri"},"Data URI"),(0,r.kt)("p",null,"If you need to embed an icon in an ",(0,r.kt)("inlineCode",{parentName:"p"},"img")," tag or using for a CSS property value, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getIconString")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example using an img src value"',title:'"Example',using:!0,an:!0,img:!0,src:!0,'value"':!0},"import { getIconString } from '@pluralsight/icons/string'\n\nfunction MenuIcon(props) {\n  return (\n    // highlight-next-line\n    <img alt=\"menu icon\" src={getIconString('MenuIcon', props.color)} />\n  )\n}\n")),(0,r.kt)("p",null,"Here is an example using ",(0,r.kt)("inlineCode",{parentName:"p"},"getIconString")," as a CSS value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example using a CSS property value"',title:'"Example',using:!0,a:!0,CSS:!0,property:!0,'value"':!0},"import { getIconString } from '@pluralsight/icons/string'\n\nfunction MenuIcon(props) {\n  return (\n    <span\n      aria-label=\"menu icon\"\n      style={{\n        /* highlight-next-line */\n        backgroundImage: `url(\"${getIconString('MenuIcon', props.color)}\")`,\n        display: 'inline-block',\n        height: '1rem',\n        width: '1rem',\n      }}\n    ></span>\n  )\n}\n")),(0,r.kt)("h3",{id:"icon-colors"},"Icon colors"),(0,r.kt)("p",null,"By default the icons are monochromatic and will inherit the ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," of their parent.\nThis ensures the icon color matches its context by default and facilitates\ntheming while still allowing for control over the icon's color directly."),(0,r.kt)(y,{mdxType:"IconColor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<button\n  style={{\n    backgroundColor: 'var(--ps-background-weak)',\n    borderRadius: '6px',\n    color: 'var(--ps-text)',\n  }}\n>\n  <PlaceholderIcon {...getIconProps()} />\n  Icon matches font color\n</button>\n")),(0,r.kt)("h3",{id:"icon-sizes"},"Icon sizes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Icons")," come in three size variants: s, m (default), l."),(0,r.kt)(m.Z,{mdxType:"IconSizes"}),(0,r.kt)(c.Z,{fullCode:(0,r.kt)(d.N,{mdxType:"IconSizesFullPreview"}),sandboxList:{chakra:"basic-icons-chakra-vnew2e",joy:"basic-icons-mui-q0ww53",styled:"basic-icon-css-in-js-sc-rk9wxq",svelte:"basic-icons-svelte-r0dtoj"},mdxType:"LiveExampleTabs"},(0,r.kt)(d.r,{mdxType:"IconSizesPreview"})),(0,r.kt)("h2",{id:"icon-size-guide"},"Icon size guide"),(0,r.kt)("p",null,"We have defined four standard sizes for icons. This sizing should be applied using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/Icon#icon-sizes"},"headless-styles")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example interface - does not exist in types"',title:'"Example',interface:!0,"-":!0,does:!0,not:!0,exist:!0,in:!0,'types"':!0},"interface IconSizeGuide {\n  s: {\n    height: '1rem'\n    width: '1rem'\n  }\n  m: {\n    height: '1.25rem'\n    width: '1.25rem'\n  }\n  l: {\n    height: '1.5rem'\n    width: '1.5rem'\n  }\n}\n")))}C.isMDXComponent=!0}}]);