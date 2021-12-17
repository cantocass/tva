"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7293],{167:function(t,n,e){e.d(n,{Zo:function(){return c},kt:function(){return m}});var o=e(3289);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,o,a=function(t,n){if(null==t)return{};var e,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var l=o.createContext({}),p=function(t){var n=o.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},c=function(t){var n=p(t.components);return o.createElement(l.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(e),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return e?o.createElement(g,i(i({ref:n},c),{},{components:e})):o.createElement(g,i({ref:n},c))}));function m(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var p=2;p<r;p++)i[p]=e[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}d.displayName="MDXCreateElement"},7052:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=e(753),a=e(1242),r=(e(3289),e(167)),i=["components"],s={sidebar_position:2,tags:["Development","Packages","Components","Button"]},l={unversionedId:"development/packages/components/Button",id:"development/packages/components/Button",isDocsHomePage:!1,title:"Button",description:"This is unreleased documentation for TVA components package.",source:"@site/docs/development/packages/components/Button.md",sourceDirName:"development/packages/components",slug:"/development/packages/components/Button",permalink:"/tva/docs/development/packages/components/Button",editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/packages/components/Button.md",version:"current",lastUpdatedBy:"Casey Baggz",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Development","Packages","Components","Button"]},sidebar:"development",previous:{title:"Color",permalink:"/tva/docs/development/packages/tokens/color"},next:{title:"Icons",permalink:"/tva/docs/development/packages/icons/icons"}},p=[{value:"Basic Button",id:"basic-button",children:[]},{value:"getButtonProps",id:"getbuttonprops",children:[{value:"CSS in JS",id:"css-in-js",children:[]},{value:"Extending",id:"extending",children:[]}]},{value:"Buttons with icons and label",id:"buttons-with-icons-and-label",children:[]},{value:"Icon Button",id:"icon-button",children:[]},{value:"API",id:"api",children:[]}],c={toc:p};function u(t){var n=t.components,e=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is ",(0,r.kt)("strong",{parentName:"p"},"unreleased")," documentation for TVA ",(0,r.kt)("strong",{parentName:"p"},"components")," package."))),(0,r.kt)("p",null,"The Button is used to call attention, perform an action, or to nagivate."),(0,r.kt)("p",null,"Buttons communicate actions that users can take. In your UI, they are typically found in places like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modal windows"),(0,r.kt)("li",{parentName:"ul"},"Forms"),(0,r.kt)("li",{parentName:"ul"},"Skills Cards")),(0,r.kt)("h2",{id:"basic-button"},"Basic Button"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Options {\n  kind: 'default' || 'contained' || 'outlined'\n  size: 'xs' || 's' || 'm' || 'l'\n}\n\ngetButtonProps(options, js?: 'js'): ButtonProps\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," comes with three variants: text (default), contained, and outlined."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const tvaButtonProps = getButtonProps() // default\nconst tvaContainedButtonProps = getButtonProps({ kind: 'contained' })\nconst tvaOutlinedButtonProps = getButtonProps({ kind: 'outlined' })\n")),(0,r.kt)("h2",{id:"getbuttonprops"},"getButtonProps"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," prop-getter returns an Object that contains all the a11y attributes needed along with all the styles for you to use in any fashion you like - or easily extend/overwrite when needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  className: `tva-btn ${ourInternalStylesModule}`\n  type: 'button'\n}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are using ",(0,r.kt)("strong",{parentName:"p"},"Styled-Components"),', see "CSS in JS" section.'))),(0,r.kt)("h3",{id:"css-in-js"},"CSS in JS"),(0,r.kt)("p",null,"If you prefer to use CSS-in-JS, simply pass a second argument of ",(0,r.kt)("inlineCode",{parentName:"p"},"'js'")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"getButtonProps")," function. This will return a stringified version of the styles along with a ",(0,r.kt)("inlineCode",{parentName:"p"},"styles")," property for your choosing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  cssProps: `\n    color: var(--TBD)\n    background-color: var(--TBD)\n    ...\n  `,\n  styles: {\n    color: `${button.default.text.color.value}`,\n    backgroundColor: `${button.default.background.value}`\n    ...\n  },\n  type: 'button',\n}\n")),(0,r.kt)("h3",{id:"extending"},"Extending"),(0,r.kt)("p",null,"There are times you may need to make a slight adjustment to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," which is easy since we are giving you an Object. You can easily extend the Button in any way that you like."),(0,r.kt)("p",null,"Here is an example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"styled-components")," to extend a ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," for a Form."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=page/Login/components/SubmitButton.jsx",title:"page/Login/components/SubmitButton.jsx"},"import styled from 'styled-components'\nimport { getButtonProps } from '@pluralsight/tva-components'\n\nconst tvaBtnProps = getButtonProps('contained', 'js')\n\nconst Button = styled.button`\n  ...tvaBtnProps.cssProps,\n  color: '#bfbfbf' // some custom color\n`\n\nfunction SubmitButton(props) {\n  return <Button type=\"submit\">{props.children}</Button>\n}\n")),(0,r.kt)("h2",{id:"buttons-with-icons-and-label"},"Buttons with icons and label"),(0,r.kt)("p",null,"Our eyes/brain recognize logos more easily than plain text, so you might want to add icons to certain buttons to enhance the UX. For example, if you have a edit button you can label it with a ",(0,r.kt)("inlineCode",{parentName:"p"},"PencilIcon"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=components/EditButton.jsx",title:"components/EditButton.jsx"},"import { PencilIcon } from 'components/PencilIcon'\nimport { getButtonProps, getIconLabelProps } from '@pluralsight/tva-components'\n\nconst tvaButtonProps = getButtonProps({ kind: 'contained' })\nconst tvaIconLabelProps = getIconLabelProps()\n\nfunction EditButton(props) {\n  return (\n    <button {...props} {...tvaButtonProps}>\n      <PencilIcon {...tvaIconLabelProps} />\n      <p>Edit</p>\n    </button>\n  )\n}\n")),(0,r.kt)("h2",{id:"icon-button"},"Icon Button"),(0,r.kt)("p",null,'Icon buttons are commonly found in app bars, toolbars, or as an action such as "toggle".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=components/EditIconButton.jsx",title:"components/EditIconButton.jsx"},"import { PencilIcon } from 'components/PencilIcon'\nimport { getIconButtonProps } from '@pluralsight/tva-components'\n\nconst tvaEditIconBtnProps = getButtonProps('edit profile')\n\nfunction EditIconButton(props) {\n  return (\n    <button {...props} {...tvatvaEditIconBtnProps}>\n      <PencilIcon />\n    </button>\n  )\n}\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getButtonProps")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"options"),": ButtonOptions, ",(0,r.kt)("strong",{parentName:"td"},"js?"),": 'js'"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"kind"),": 'default', ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"size"),": 'm'"),(0,r.kt)("td",{parentName:"tr",align:null},"Get main button styles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getIconLabelProps")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Get button with icon and label styles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getButtonProps")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ariaLabel"),": string"),(0,r.kt)("td",{parentName:"tr",align:null},"'icon button'"),(0,r.kt)("td",{parentName:"tr",align:null},"Get icon button styles.")))))}u.isMDXComponent=!0}}]);