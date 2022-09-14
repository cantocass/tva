"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8709],{75659:function(e,t,n){n.d(t,{Z:function(){return f}});var o=n(60953),a=n(20411),s=n(52976),l=n(75316),r="colorGroup_AYpI",i="labelcontainer_EC1G",m="label_LGml",p="list_zgT8",u="item_kpsV",d="swab_SijF",c="syntax_C4sE";function h(e){return a.createElement("p",{className:m},e.children)}function k(e){var t=l.X[e.sentiment],n=Object.keys(t);return a.createElement("section",{className:r},a.createElement("ul",{className:p},n.map((function(e){return a.createElement(g,(0,o.Z)({},t[e],{key:t[e].id}))}))))}function g(e){return a.createElement("li",{className:u},a.createElement("div",{className:d,style:{backgroundColor:s[e.jsName]}}),a.createElement("div",{className:i},a.createElement(h,null,a.createElement("span",{className:c},"CSS:")," ",e.cssName),a.createElement(h,null,a.createElement("span",{className:c},"SASS:")," ",e.sassName),a.createElement(h,null,a.createElement("span",{className:c},"JS:")," ",e.jsName)))}var f=function(e){return a.createElement("div",null,a.createElement(k,{sentiment:e.sentiment}))}},34923:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return k}});var o=n(60953),a=n(59005),s=(n(20411),n(70167)),l=n(99862),r=n(42242),i=n(75316),m=n(75659),p=["components"],u={tags:["Development","Packages","Tokens","Colors"],title:"Colors"},d=void 0,c={unversionedId:"development/tokens/colors",id:"development/tokens/colors",title:"Colors",description:"Installation",source:"@site/docs/development/tokens/colors.mdx",sourceDirName:"development/tokens",slug:"/development/tokens/colors",permalink:"/docs/next/development/tokens/colors",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/tokens/colors.mdx",tags:[{label:"Development",permalink:"/docs/next/tags/development"},{label:"Packages",permalink:"/docs/next/tags/packages"},{label:"Tokens",permalink:"/docs/next/tags/tokens"},{label:"Colors",permalink:"/docs/next/tags/colors"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Development","Packages","Tokens","Colors"],title:"Colors"},sidebar:"development",previous:{title:"Intro",permalink:"/docs/next/development/tokens/intro"},next:{title:"Intro",permalink:"/docs/next/development/headless-styles/intro"}},h={},k=[{value:"Installation",id:"installation",level:2},{value:"List of tokens",id:"list-of-tokens",level:2},{value:"Default",id:"default",level:3},{value:"Action",id:"action",level:3},{value:"Info",id:"info",level:3},{value:"Success",id:"success",level:3},{value:"Warning",id:"warning",level:3},{value:"Danger",id:"danger",level:3},{value:"Themes",id:"themes",level:2},{value:"Custom Theming",id:"custom-theming",level:2},{value:"CSS custom theming",id:"css-custom-theming",level:3},{value:"JS custom theming",id:"js-custom-theming",level:3},{value:"A note on custom tokens in CSS",id:"a-note-on-custom-tokens-in-css",level:2},{value:"SCSS tokens",id:"scss-tokens",level:3}],g={toc:k};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,s.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/design-tokens\n"))),(0,s.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/design-tokens\n")))),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"The ",(0,s.kt)("strong",{parentName:"p"},"headless-styles")," package uses the ",(0,s.kt)("strong",{parentName:"p"},"design-tokens")," package internall for both CSS or JS APIs. This means ",(0,s.kt)("strong",{parentName:"p"},"you do not need to install this package")," if you are using headless-styles.")),(0,s.kt)("h2",{id:"list-of-tokens"},"List of tokens"),(0,s.kt)("p",null,"These are the tokens we provide (i.e. a theme). Our ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/development/getting-started/installation#normalizecss"},"normalize setup")," comes with two themes: ",(0,s.kt)("strong",{parentName:"p"},"light")," and ",(0,s.kt)("strong",{parentName:"p"},"dark"),". For every theme, we overwrite the values shown in this list so the token names are the same for all themes."),(0,s.kt)("p",null,"The tokens are presented by ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/development/tokens/intro#naming-convention"},"sentiment"),"."),(0,s.kt)("h3",{id:"default"},"Default"),(0,s.kt)(m.Z,{sentiment:i.s[0],mdxType:"TokensColorMap"}),(0,s.kt)("h3",{id:"action"},"Action"),(0,s.kt)(m.Z,{sentiment:i.s[1],mdxType:"TokensColorMap"}),(0,s.kt)("h3",{id:"info"},"Info"),(0,s.kt)(m.Z,{sentiment:i.s[3],mdxType:"TokensColorMap"}),(0,s.kt)("h3",{id:"success"},"Success"),(0,s.kt)(m.Z,{sentiment:i.s[4],mdxType:"TokensColorMap"}),(0,s.kt)("h3",{id:"warning"},"Warning"),(0,s.kt)(m.Z,{sentiment:i.s[5],mdxType:"TokensColorMap"}),(0,s.kt)("h3",{id:"danger"},"Danger"),(0,s.kt)(m.Z,{sentiment:i.s[2],mdxType:"TokensColorMap"}),(0,s.kt)("h2",{id:"themes"},"Themes"),(0,s.kt)("p",null,"The design-tokens package comes with two themes: ",(0,s.kt)("strong",{parentName:"p"},"dark (default)")," and ",(0,s.kt)("strong",{parentName:"p"},"light"),"."),(0,s.kt)("p",null,'This website uses the "dark" and "light" themes.'),(0,s.kt)("p",null,"Themes are controlled by using an attribute on the ",(0,s.kt)("inlineCode",{parentName:"p"},"html")," tag of ",(0,s.kt)("inlineCode",{parentName:"p"},"data-theme"),' for a full page takeover (what we do on this site), or a CSS class of the theme name (i.e. "light", "dark") for component level control. The default token values that you will receive will be for the dark theme.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Data-theme attribute example"',title:'"Data-theme',attribute:!0,'example"':!0},'<html data-theme="dark"></html>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Class level example"',title:'"Class',level:!0,'example"':!0},'<SomeParent>\n  {/* only this component will be light-mode */}\n  <SomeChild className="light" />\n</SomeParent>\n')),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Themes ",(0,s.kt)("strong",{parentName:"p"},"depend on the normalize.css")," file to be used in your project. Check out our ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/development/getting-started/installation#normalizecss"},"getting started")," docs to learn how to add the normalize.css file to your project.")),(0,s.kt)("h2",{id:"custom-theming"},"Custom Theming"),(0,s.kt)("p",null,"Our semantic-token system allows for easily customizing the themes. Instead of adding new tokens, simply overwrite the tokens we provide in the list above. We default the ",(0,s.kt)("inlineCode",{parentName:"p"},":root"),' to use dark mode and only overwrite for any theme outside of that (i.e. "light", etc.).'),(0,s.kt)("h3",{id:"css-custom-theming"},"CSS custom theming"),(0,s.kt)("p",null,"In CSS all you need to do is to overwrite ",(0,s.kt)("a",{parentName:"p",href:"#list-of-tokens"},"the tokens")," you want to update in the ",(0,s.kt)("inlineCode",{parentName:"p"},":root")," CSS selector in your project."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Global CSS file for your project"',title:'"Global',CSS:!0,file:!0,for:!0,your:!0,'project"':!0},":root {\n  --ps-text: #fff;\n}\n")),(0,s.kt)("p",null,'To create your own light theme, you will need to do the exact same thing, except target our "light" selectors.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Global CSS file for your project"',title:'"Global',CSS:!0,file:!0,for:!0,your:!0,'project"':!0},"html[data-theme='light'],\n.light {\n  --ps-text: #000;\n}\n")),(0,s.kt)("h3",{id:"js-custom-theming"},"JS custom theming"),(0,s.kt)("p",null,"Due to the nature of our CSS-in-JS design in ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/intro"},"headless-styles"),", you can extend our components to use whichever custom theme solution you prefer with your chosen library (i.e. styled-components, emotion, etc.)."),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/Button#extending"},"Button example")," for more details."),(0,s.kt)("h2",{id:"a-note-on-custom-tokens-in-css"},"A note on custom tokens in CSS"),(0,s.kt)("p",null,"Because we limit tokens to our semantic color theme (which should provide you with anything you will more than likely ever need), your team may feel the need to extend and add additional variables to your project. In this scenario, for performance reasons, ",(0,s.kt)("strong",{parentName:"p"},"you should use static variables when you need a color/value not in the list"),". Once you pass 60 CSS tokens, additional tokens will start to negatively impact the performance of page loads."),(0,s.kt)("p",null,"There is enough data on the web now that proves it is more performant to use static values than repeat CSS properties."),(0,s.kt)("p",null,"This means that doing this..."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"padding-top: 1rem;\n")),(0,s.kt)("p",null,"Is much more performant than doing this 100 times in your code-base:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"padding-top: var(--padding-top);\n")),(0,s.kt)("p",null,"This is exactly why we limit our tokens at 60 in quantity and only using color values."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If your team would like to define a large number of tokens to make your code seem more valuable, ",(0,s.kt)("strong",{parentName:"p"},"we highly recommend the use of SCSS in your project which will produce the most performant outcome in this scenario."))),(0,s.kt)("h3",{id:"scss-tokens"},"SCSS tokens"),(0,s.kt)("p",null,"SCSS tokens differ from CSS variables in that they are pre-processed out of existence and into your code base. This means that when you use SCSS, there are no tokens that are stored in browser memory. This is a ",(0,s.kt)("strong",{parentName:"p"},"huge")," benefit because you can essentially create as many tokens as you want with ",(0,s.kt)("strong",{parentName:"p"},"no negative side effects to performance.")))}f.isMDXComponent=!0}}]);