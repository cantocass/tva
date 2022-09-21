"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3545],{70167:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(45721);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97484:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=a(60953),r=a(59005),o=(a(45721),a(70167)),i=["components"],s={sidebar_position:2,tags:["Development","Discover More","Versions","Version Strategy","Release frequency","Deprecation Policy"]},l="Versions",u={unversionedId:"development/discover-more/versions",id:"version-0.1.0-alpha/development/discover-more/versions",title:"Versions",description:"Learn how we approach versioning and releases for Pluralsight Design.",source:"@site/versioned_docs/version-0.1.0-alpha/development/discover-more/versions.md",sourceDirName:"development/discover-more",slug:"/development/discover-more/versions",permalink:"/docs/development/discover-more/versions",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.1.0-alpha/development/discover-more/versions.md",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Discover More",permalink:"/docs/tags/discover-more"},{label:"Versions",permalink:"/docs/tags/versions"},{label:"Version Strategy",permalink:"/docs/tags/version-strategy"},{label:"Release frequency",permalink:"/docs/tags/release-frequency"},{label:"Deprecation Policy",permalink:"/docs/tags/deprecation-policy"}],version:"0.1.0-alpha",lastUpdatedBy:"Casey Baggz",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Development","Discover More","Versions","Version Strategy","Release frequency","Deprecation Policy"]},sidebar:"development",previous:{title:"Roadmap",permalink:"/docs/development/discover-more/roadmap"},next:{title:"Contributing",permalink:"/docs/development/discover-more/contributing"}},p={},c=[{value:"Version strategy",id:"version-strategy",level:2},{value:"Release frequency",id:"release-frequency",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Commitment to Stability",id:"commitment-to-stability",level:2},{value:"Gradual Upgrades via Warnings",id:"gradual-upgrades-via-warnings",level:2},{value:"What Counts as a Breaking Change?",id:"what-counts-as-a-breaking-change",level:2},{value:"If a Minor Release Includes No New Features, Why Isn\u2019t It a Patch?",id:"if-a-minor-release-includes-no-new-features-why-isnt-it-a-patch",level:2}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"versions"},"Versions"),(0,o.kt)("p",null,"Learn how we approach versioning and releases for Pluralsight Design."),(0,o.kt)("h2",{id:"version-strategy"},"Version strategy"),(0,o.kt)("p",null,"Stability ensures that reusable components and libraries, tutorials, tools, and learned practices don't become obsolete unexpectedly. Stability is essential for the ecosystem around Pluralsight Design to thrive."),(0,o.kt)("p",null,"This page contains the practices we follow to provide you with a leading-edge library, balanced with stability, ensuring that future changes are always introduced in a predictable way."),(0,o.kt)("p",null,"Pluralsight Design follows ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning 2.0.0"),". Pluralsight Design version numbers have three parts ",(0,o.kt)("inlineCode",{parentName:"p"},"major.minor.patch"),". These numbers increase based on the level of change introduced in a release."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Major releases")," contain new features. Some developer assistance may be expected during the update although we strive to stay backwards compatible. When upgrading to a new major release, you may need to run update scripts, refactor code, run additional tests, and learn new APIs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Minor releases")," contain important new features. Minor releases are fully backwards-compatible; no developer assistance is expected during update, but you can optionally modify your apps and libraries to begin using new APIs, features, and capabilities that were added in the release."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Patch releases")," are low risk and contain mostly bugfixes. There may be very high level (unrecognizable) new features. No developer assistance is expected during and update.")),(0,o.kt)("h2",{id:"release-frequency"},"Release frequency"),(0,o.kt)("p",null,"A regular schedule of releases helps you plan and coordinate your updates with the continuing evolution of Pluralsight Design."),(0,o.kt)("p",null,"In general, you can expect the following release cycle:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"major")," release every 12 months."),(0,o.kt)("li",{parentName:"ul"},"1-3 ",(0,o.kt)("strong",{parentName:"li"},"minor")," releases for each major release."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"patch")," release anytime for urgent bugfixes.")),(0,o.kt)("p",null,"You can follow the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/milestones"},"milestones")," for a detailed review of what releases contain."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The development, releases, and timing of any features or functionality remains at the sole discretion of Pluralsight Design. The roadmap does not represent a commitment, obligation, or promise to deliver at any time.")),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("p",null,"Breaking changes are inconvenient for everyone, so we try to minimize the number of major releases to yearly or longer."),(0,o.kt)("p",null,"Instead, we release new features in minor versions. That means that minor releases are often more interesting and compelling than majors, despite their unassuming name."),(0,o.kt)("h2",{id:"commitment-to-stability"},"Commitment to Stability"),(0,o.kt)("p",null,"As we change the Design Suite over time, we try to minimize the effort required to take advantage of new features. When possible, we\u2019ll keep an older API working, even if that means putting it in a separate package."),(0,o.kt)("p",null,"That means we need to make it as easy as possible to upgrade to new versions of our packages; if we make large changes without a migration path, people will be stuck on old versions. We test these upgrade paths on Pluralsight itself \u2013 if our team of less than 10 people can update 50,000+ components alone, we hope the upgrade will be manageable for anyone using our packages. In many cases, we write automated scripts to upgrade component syntax, which we then include in the open-source release for everyone to use."),(0,o.kt)("h2",{id:"gradual-upgrades-via-warnings"},"Gradual Upgrades via Warnings"),(0,o.kt)("p",null,"Development builds of our packages include many helpful warnings. Whenever possible, we add warnings in preparation for future breaking changes. That way, if your app has no warnings on the latest release, it will be compatible with the next major release. This allows you to upgrade your apps one component (or whichever you use) at a time."),(0,o.kt)("p",null,"Development warnings won\u2019t affect the runtime behavior of your app. That way, you can feel confident that your app will behave the same way between the development and production builds \u2014 the only differences are that the production build won\u2019t log the warnings and that it is more efficient. (If you ever notice otherwise, please file an issue.)"),(0,o.kt)("h2",{id:"what-counts-as-a-breaking-change"},"What Counts as a Breaking Change?"),(0,o.kt)("p",null,"In general, we ",(0,o.kt)("em",{parentName:"p"},"don\u2019t")," bump the major version number for changes to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Development warnings.")," Since these don\u2019t affect production behavior, we may add new warnings or modify existing warnings in between major versions. In fact, this is what allows us to reliably warn about upcoming breaking changes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"APIs starting with unstable.")," These are provided as experimental features whose APIs we are not yet confident in. By releasing these with an ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable_")," prefix, we can iterate faster and get to a stable API sooner.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Alpha and canary versions of our packages.")," We provide alpha/next versions of our packages as a way to test new features early, but we need the flexibility to make changes based on what we learn in the alpha period. If you use these versions, note that APIs may change before the stable release.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Undocumented APIs and internal data structures.")," If you access internal property names like ",(0,o.kt)("inlineCode",{parentName:"p"},"SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"psInternalInstance$uk43rzhitjg"),", there is no warranty. You are on your own."))),(0,o.kt)("p",null,"This policy is designed to be pragmatic: certainly, we don\u2019t want to cause headaches for you. If we bumped the major version for all of these changes, we would end up releasing more major versions and ultimately causing more versioning pain for the community. It would also mean that we can\u2019t make progress in improving our packages as fast as we\u2019d like."),(0,o.kt)("p",null,"That said, if we expect that a change on this list will cause broad problems in the community, we will still do our best to provide a gradual migration path."),(0,o.kt)("h2",{id:"if-a-minor-release-includes-no-new-features-why-isnt-it-a-patch"},"If a Minor Release Includes No New Features, Why Isn\u2019t It a Patch?"),(0,o.kt)("p",null,"It\u2019s possible that a minor release will not include new features. This is allowed by semver, which states ",(0,o.kt)("strong",{parentName:"p"},"\u201d","[a minor version]"," MAY be incremented if substantial new functionality or improvements are introduced within the private code. It MAY include patch level changes.\u201d")),(0,o.kt)("p",null,"However, it does raise the question of why these releases aren\u2019t versioned as patches instead."),(0,o.kt)("p",null,"The answer is that any change to our packages (or other software) carries some risk of breaking in unexpected ways. Imagine a scenario where a patch release that fixes one bug accidentally introduces a different bug. This would not only be disruptive to developers, but also harm their confidence in future patch releases. It\u2019s especially regrettable if the original fix is for a bug that is rarely encountered in practice."),(0,o.kt)("p",null,"We have a pretty good track record for keeping our package releases free of bugs, but patch releases have an even higher bar for reliability because most developers assume they can be adopted without adverse consequences."),(0,o.kt)("p",null,"For these reasons, we reserve patch releases only for the most critical bugs and security vulnerabilities."),(0,o.kt)("p",null,"If a release includes non-essential changes \u2014 such as internal refactors, changes to implementation details, performance improvements, or minor bugfixes \u2014 we will bump the minor version even when there are no new features."))}m.isMDXComponent=!0}}]);