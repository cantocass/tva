"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3075],{24217:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},96122:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},34185:function(e,t,n){n.d(t,{AQ:function(){return s},IT:function(){return P},P5:function(){return l},X:function(){return x},hp:function(){return L},uR:function(){return I},xD:function(){return N}});var a=n(45721);function s(e){return(0,a.useEffect)((()=>{function t(t){"Escape"===t.key&&(t.stopPropagation(),t.preventDefault(),e())}return window.addEventListener("keydown",t,!1),()=>{window.removeEventListener("keydown",t,!1)}}),[e]),null}function l(e){const t=(0,a.useRef)(null),n=(0,a.useCallback)((()=>{var e;const n=(null===(e=t.current)||void 0===e?void 0:e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))??[];return{firstItem:n[0],lastItem:n[n.length-1]}}),[t]),s=(0,a.useCallback)((e=>{const{activeElement:t}=document,{firstItem:a,lastItem:s}=n();"Tab"===e.key&&(e.shiftKey?t===a&&(e.preventDefault(),s.focus()):t===s&&(e.preventDefault(),a.focus()))}),[n]),l=(0,a.useCallback)((()=>{if(document.body.setAttribute("data-modal-open","true"),null!=t.current){const{firstItem:e}=n();document.activeElement!==e&&e.focus()}}),[n,t]);return(0,a.useEffect)((()=>{const t=e.current;return()=>{document.body.removeAttribute("data-modal-open"),null==t||t.focus()}}),[e]),{ref:t,setupFocusTrap:l,onKeyDown:s}}new Map;const r="setActive",o="setFocus",i="setRefList",c="setTabFocus";function d(e,t){e({type:c,idx:t})}function u(e){return e?0:-1}function p(e,t){switch(t.type){case r:return e.tabList.reduce(((e,n)=>{const a=n===t.id,s=`${n}:panel`;return{...e,tabs:{...e.tabs,[n]:{...e.tabs[n],"aria-selected":a,tabIndex:u(a)}},panels:{...e.panels,[s]:{...e.panels[s],"aria-hidden":!a,"aria-expanded":a,tabIndex:u(a)}}}}),e);case o:return e.tabList.reduce(((e,n,a)=>{const s=a===t.idx;return{...e,tabs:{...e.tabs,[n]:{...e.tabs[n],tabIndex:u(s)}}}}),e);case i:return{...e,refList:[...e.refList,t.el]};case c:return{...e,tabFocus:t.idx};default:throw new Error("Unable to update useTabs state due to an internal error.")}}var b={exports:{}},m={},v=a,f=Symbol.for("react.element"),h=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,k=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var a,s={},l=null,r=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(r=t.ref),t)g.call(t,a)&&!y.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:f,type:e,key:l,ref:r,props:s,_owner:k.current}}m.Fragment=h,m.jsx=T,m.jsxs=T,b.exports=m;const w=(0,a.createContext)({panelList:[],panels:{},tabList:[],tabFocus:-1,tabs:{},refList:[],dispatch:()=>null});function x(e){const{data:t}=e,n=(0,a.useMemo)((()=>t.reduce(((e,t,n)=>{const{id:a}=t,s=0===n,l=`${a}:panel`;return{...e,tabList:[...e.tabList,a],tabs:{...e.tabs,[a]:{"aria-selected":!!s,"aria-controls":l,id:a,label:t.label,role:"tab",tabIndex:s?0:-1}},panelList:[...e.panelList,l],panels:{...e.panels,[l]:{"aria-expanded":!!s,"aria-hidden":!s,"aria-labelledby":a,id:l,role:"tabpanel",tabIndex:s?0:-1}}}}),{panelList:[],panels:{},tabList:[],tabFocus:-1,tabs:{},refList:[],dispatch:()=>null})),[t]),[s,l]=(0,a.useReducer)(p,n),r=(0,a.useMemo)((()=>({...s,dispatch:l})),[s,l]);return b.exports.jsx(w.Provider,{value:r,children:e.children})}function L(){const{dispatch:e,refList:t,tabList:n,tabFocus:s}=(0,a.useContext)(w),l=(0,a.useCallback)((t=>{const a=t.key,l=n.length;if("ArrowRight"===a){const t=s+1;if(t>=l)return void d(e,0);d(e,t)}else if("ArrowLeft"===a){const t=s-1;if(t<0)return void d(e,l-1);d(e,t)}}),[e,n,s]);return(0,a.useEffect)((()=>{var n;s>=0&&(function(e,t){e({type:o,idx:t})}(e,s),null===(n=t[s])||void 0===n||n.focus())}),[e,t,s]),(0,a.useMemo)((()=>({onKeyDown:l,tabList:n})),[l,n])}function N(e){const t=(0,a.useRef)(null),{dispatch:n,tabList:s,tabs:l}=(0,a.useContext)(w),{onClick:o}={onClick:(null==(c=e)?void 0:c.onClick)??null};var c;const u=(0,a.useCallback)((e=>{const t=e.currentTarget.id;o&&o(t),function(e,t){e({type:r,id:t})}(n,t),d(n,s.indexOf(t))}),[n,o,s]);return(0,a.useEffect)((()=>{null!==t.current&&function(e,t){e({type:i,el:t})}(n,t.current)}),[n]),(0,a.useMemo)((()=>({onClick:u,ref:t,tabs:l})),[u,l])}function P(){const{panelList:e}=(0,a.useContext)(w);return(0,a.useMemo)((()=>({panelList:e})),[e])}function I(){const{panels:e}=(0,a.useContext)(w);return(0,a.useMemo)((()=>({panels:e})),[e])}},86906:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),s="base_M3w8",l="column_mb9C base_M3w8",r={alignItems:"center",column:!1,justifyContent:"space-between",textAlign:"center"};function o(e){var t;void 0===e&&(e=r);var n=e.column?l:s;return a.createElement("div",{className:n,style:{alignItems:e.alignItems,justifyContent:e.justifyContent,textAlign:null!=(t=e.textAlign)?t:"center"}},e.children)}},54288:function(e,t,n){n.d(t,{Z:function(){return I}});var a=n(60953),s=n(59005),l=n(45721),r=n(81371),o="button_sEkW",i="chakra_ow8e",c="chakraCircle_c8Xz",d="list_rMMG",u="listItem_bLPI",p="icon_nzIq",b="svelteBackground_c8BA",m="svelteOutline_tdvb",v=["className"],f=l.createElement("svg",{"aria-hidden":"true",className:p,focusable:"false",viewBox:"0 0 24 24"},l.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),h=l.createElement("svg",{"aria-hidden":"true",className:p,focusable:"false",viewBox:"0 0 1024 1024"},l.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),g=l.createElement("svg",{"aria-hidden":"true",className:""+p,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{className:m,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),l.createElement("path",{className:b,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var k={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:f,id:"source",href:"",label:"Show full source"},styled:{icon:h,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:l.createElement("svg",{"aria-hidden":"true",className:p+" "+i,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},l.createElement("rect",{className:c,width:"582",height:"582",rx:"291"}),l.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:l.createElement("svg",{"aria-hidden":"true",className:p,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:g,id:"svelte",label:"View Svelte"}}},y={size:"m",usage:"text"};function T(e){var t=k.results[e.techId],n=(0,r.Bb)(y).button.className,a="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return l.createElement("a",{"aria-label":t.label,className:n+" "+o,href:a,name:t.label,rel:"noopener noreferrer",target:"_blank",title:t.label},e.children)}function w(e){var t=e.techId,n=Object.assign({},(0,r.Bb)(y)).button,i=n.className,c=(0,s.Z)(n,v);return l.createElement("button",(0,a.Z)({className:i+" "+o,onClick:e.onToggleShow,title:k.results[t].label},c),l.createElement(x,{tabId:t}))}function x(e){return k.results[e.tabId].icon}function L(e){var t=e.techId;return l.createElement("li",{className:u},"source"===t?l.createElement(w,{onToggleShow:e.onToggleShow,techId:t}):l.createElement(T,{techId:t,href:e.sandboxList[t]},l.createElement(x,{tabId:t})))}function N(e){return l.createElement("ul",{className:d},k.items.map((function(t){return l.createElement(L,{key:t,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:t})})))}function P(e){var t=(0,l.useState)(!1),n=t[0],a=t[1];return l.createElement("div",null,l.createElement(N,{onToggleShow:function(){a((function(e){return!e}))},sandboxList:e.sandboxList}),n?e.fullCode:e.children)}var I=(0,l.memo)(P)},35053:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),s=n(81371),l=n(24217),r=n(96122);function o(e){var t=e.href,n=(0,s.j8)({href:t}),o=(0,s.L1)(n.iconOptions),i=t.includes("github")?l.Z:r.Z;return a.createElement("a",n.link,a.createElement(i,o),e.children)}},92338:function(e,t,n){var a=n(45721),s=n(81371),l=n(22534),r=Object.assign({React:a},a,{getIconProps:s.L1,PlaceholderIcon:l.Z});t.Z=r},94993:function(e,t,n){n.r(t),n.d(t,{assets:function(){return E},contentTitle:function(){return P},default:function(){return A},frontMatter:function(){return N},metadata:function(){return I},toc:function(){return C}});var a=n(60953),s=n(59005),l=n(45721),r=n(70167),o=n(81371),i=n(34185),c=n(86906),d=[{id:"1",label:"Tab 1",children:{id:"1:panel"}},{id:"2",label:"Tab 2",children:{id:"2:panel"}},{id:"3",label:"Tab 3",children:{id:"3:panel"}},{id:"4",label:"Tab 4",children:{id:"4:panel"}}],u=["tabs"],p=(0,o.o8)();function b(){return l.createElement("div",p.wrapper,l.createElement(m,null),l.createElement(f,null))}function m(){var e=(0,i.hp)(),t=e.onKeyDown,n=e.tabList;return l.createElement("div",(0,a.Z)({},p.tabList,{onKeyDown:t}),n.map((function(e){return l.createElement(v,{id:e,key:e})})))}function v(e){var t=(0,i.xD)(),n=t.tabs,r=(0,s.Z)(t,u),o=n[e.id];return l.createElement("button",(0,a.Z)({},p.tab,r,o),o.label)}function f(){var e=(0,i.IT)();return l.createElement("div",p.panelWrapper,e.panelList.map((function(e){return l.createElement(h,{id:e,key:e})})))}function h(e){var t=(0,i.uR)().panels[e.id];return l.createElement("div",(0,a.Z)({},p.tabPanel,t),t.id," Content")}var g=function(){return l.createElement(c.Z,null,l.createElement(i.X,{data:d},l.createElement(b,null)))},k=n(48921);function y(){return l.createElement(k.Z,null,"<div {...tabProps.wrapper}>\n  <div {...tabProps.tabList}>\n    <button {...tabProps.tab}>Tab 1</button>\n    <button {...tabProps.tab}>Tab 2</button>\n  </div>\n  <div {...tabProps.panelWrapper}>\n    <div {...tabProps.tabPanel}>\n      Panel 1 content\n    </div>\n\n    <div {...tabProps.tabPanel}>\n      Panel 2 content\n    </div>\n  </div>\n</div>")}function T(){return l.createElement(k.Z,null,"import { memo } from 'react'\nimport { getTabProps } from '@pluralsight/headless-styles'\nimport {\n  TabsProvider,\n  useTabList,\n  useTab,\n  usePanelList,\n  usePanel,\n} from '@pluralsight/react-utils'\n\nconst tabStyles = getTabProps()\n\nfunction TabsEl() {\n  return (\n    <div {...tabStyles.wrapper}>\n      <TabList />\n      <PanelList />\n    </div>\n  )\n}\n\nfunction TabList() {\n  const { onKeyDown, tabList } = useTabList()\n  return (\n    <div {...tabStyles.tabList} onKeyDown={onKeyDown}>\n      {tabList.map((tabId) => (\n        <Tab id={tabId} key={tabId} />\n      ))}\n    </div>\n  )\n}\n\nfunction Tab(props) {\n  const { tabs, ...tab } = useTab()\n  const data = tabs[props.id]\n\n  return (\n    <button {...tabStyles.tab} {...tab} {...data}>\n      {data.label}\n    </button>\n  )\n}\n\nfunction PanelList() {\n  const data = usePanelList()\n  return (\n    <div {...tabStyles.panelWrapper}>\n      {data.panelList.map((panelId) => (\n        <TabPanel id={panelId} key={panelId} />\n      ))}\n    </div>\n  )\n}\n\nfunction TabPanel(props) {\n  const { panels } = usePanel()\n  const data = panels[props.id]\n\n  return (\n    <div {...tabStyles.tabPanel} {...data}>\n      {data.id} Content\n    </div>\n  )\n}\n\nfunction Tabs(props) {\n  return (\n    <TabsProvider data={props.data}>\n      <TabsEl />\n    </TabsProvider>\n  )\n}\n\nexport default memo(Tabs)")}var w=n(35053),x=n(54288),L=["components"],N={tags:["Development","Packages","Components","Headless Styles","Tabs"]},P=void 0,I={unversionedId:"development/headless-styles/Tabs",id:"development/headless-styles/Tabs",title:"Tabs",description:"The getTabProps is used to alternate between views within the same context.",source:"@site/docs/development/headless-styles/Tabs.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/Tabs",permalink:"/docs/next/development/headless-styles/Tabs",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/headless-styles/Tabs.mdx",tags:[{label:"Development",permalink:"/docs/next/tags/development"},{label:"Packages",permalink:"/docs/next/tags/packages"},{label:"Components",permalink:"/docs/next/tags/components"},{label:"Headless Styles",permalink:"/docs/next/tags/headless-styles"},{label:"Tabs",permalink:"/docs/next/tags/tabs"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Tabs"]},sidebar:"development",previous:{title:"Switch",permalink:"/docs/next/development/headless-styles/Switch"},next:{title:"Tag",permalink:"/docs/next/development/headless-styles/Tag"}},E={},C=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Tabs",id:"basic-tabs",level:3},{value:"Tabs Hook",id:"tabs-hook",level:2},{value:"Accessibility",id:"accessibility",level:2},{value:"Keyboard Navigation and Focus Management",id:"keyboard-navigation-and-focus-management",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"TabOptions",id:"taboptions",level:3},{value:"Props",id:"props",level:2},{value:"TabsProps",id:"tabsprops",level:3},{value:"TabsJSProps",id:"tabsjsprops",level:3}],S={toc:C};function A(e){var t=e.components,n=(0,s.Z)(e,L);return(0,r.kt)("wrapper",(0,a.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getTabProps")," is used to alternate between views within the same context."),(0,r.kt)(w.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/Tab",mdxType:"ViewSourceLink"},"View source"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getTabProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This helper only controls the styling. If you would also like a helper to control the content management and accessibility of Tabs, check out the React Utils ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/development/react-utils/use-tabs"},"useTabs hooks"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic-tabs"},"Basic Tabs"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getTabProps")," helper provides styles and some baseline a11y props."),(0,r.kt)(g,{mdxType:"BasicTabs"}),(0,r.kt)(x.Z,{fullCode:(0,r.kt)(T,{mdxType:"BasicTabsFullPreview"}),sandboxList:{chakra:"basic-tabs-chakra-x8lzym",joy:"basic-tab-mui-0ghcsm",styled:"basic-tabs-css-in-js-sc-3jztc7",svelte:"basic-tabs-svelte-pg8d7u"},mdxType:"LiveExampleTabs"},(0,r.kt)(y,{mdxType:"BasicTabsPreview"})),(0,r.kt)("h2",{id:"tabs-hook"},"Tabs Hook"),(0,r.kt)("p",null,"To control the Tab active/display states, we provide a set of custom hooks in our ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/development/react-utils/use-tabs"},"React Utils Library")," which is designed with performance and component design in mind."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  TabProvider,\n  useTabList,\n  useTab,\n  usePanelList,\n  usePanel,\n} from '@pluralsight/react-utils'\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The useTabs custom hooks compliment the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTabProps")," helper to enhance your components further. Our packages are designed independantly so they can be combined together for more features when needed.")),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("p",null,"To create a relationship between the tabs and panels, we use the following attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"tab: {\n  'aria-controls': panelId,\n  'aria-selected': selectedTabId === tabId,\n  id: tabId,\n  tabIndex: focusedTabId === tabId ? 0 : -1,\n},\ntabPanel: {\n  'aria-labelledby': tabId,\n  'aria-hidden': selectedTabId !== tabId,\n  'aria-expanded': selectedTabId === tabId,\n  id: panelId,\n  tabIndex: selectedTabId === tabId ? 0 : -1,\n}\n\n")),(0,r.kt)("h3",{id:"keyboard-navigation-and-focus-management"},"Keyboard Navigation and Focus Management"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role#keyboard_interactions"},"Keyboard navigation"),"\nfor tabs involves using ",(0,r.kt)("kbd",null,"arrow")," keys to change focus and ",(0,r.kt)("kbd",null,"enter"),"/",(0,r.kt)("kbd",null,"space")," to activate the focused tab."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For tabs state and accessibility features, we provide a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/development/react-utils/use-tabs"},"React custom hook")," to manage this for you.")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getTabProps")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"options"),": ",(0,r.kt)("a",{parentName:"td",href:"#taboptions"},"TabOptions")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Get tab styles for CSS usage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getJSTabProps")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"options"),": ",(0,r.kt)("a",{parentName:"td",href:"#taboptions"},"TabOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,r.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"taboptions"},"TabOptions"),(0,r.kt)("p",null,"This interface is available as an ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface TabOptions {\n  tech?: 'svelte'\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { TabOptions } from '@pluralsight/headless-styles/types'\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"tabsprops"},"TabsProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TabsProps {\n  wrapper: {\n    className: string\n  }\n  tabList: {\n    className: string\n    role: 'tablist'\n  }\n  tab: {\n    'aria-selected': false\n    className: string\n    role: 'tab'\n    tabIndex: -1\n  }\n  panelWrapper: {}\n  tabPanel: {\n    'aria-expanded': true\n    'aria-hidden': false\n    className: string\n    role: 'tabpanel'\n  }\n}\n")),(0,r.kt)("h3",{id:"tabsjsprops"},"TabsJSProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TabsJSProps {\n  wrapper: {\n    cssProps: TemplateStringLiteralArray\n    styles: Record<string, unknown>\n  }\n  tabList: {\n    a11yProps: {\n      role: 'tablist'\n    }\n    cssProps: TemplateStringLiteralArray\n    styles: Record<string, unknown>\n  }\n  tab: {\n    a11yProps: {\n      'aria-selected': false\n      role: 'tab'\n      tabIndex: -1\n    }\n    cssProps: TemplateStringLiteralArray\n    styles: Record<string, unknown>\n  }\n  panelWrapper: {}\n  tabPanel: {\n    a11yProps: {\n      'aria-expanded': true\n      'aria-hidden': false\n      role: 'tabpanel'\n    }\n    cssProps: TemplateStringLiteralArray\n    styles: Record<string, unknown>\n  }\n}\n")))}A.isMDXComponent=!0}}]);