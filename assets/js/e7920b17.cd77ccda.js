(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5025],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94401:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"Roadmap"},l={unversionedId:"roadmap/2021-06-roadmap",id:"version-v1.1/roadmap/2021-06-roadmap",isDocsHomePage:!1,title:"Roadmap",description:"Date: 2021-04-01 to 2021-06-30",source:"@site/versioned_docs/version-v1.1/roadmap/2021-06-roadmap.md",sourceDirName:"roadmap",slug:"/roadmap/2021-06-roadmap",permalink:"/docs/roadmap/2021-06-roadmap",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/roadmap/2021-06-roadmap.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1624242441,formattedLastUpdatedAt:"6/21/2021",frontMatter:{title:"Roadmap"}},p=[{value:"Core Platform",id:"core-platform",children:[]},{value:"User Experience",id:"user-experience",children:[]},{value:"Third-party integrations",id:"third-party-integrations",children:[]}],c={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Date: 2021-04-01 to 2021-06-30"),(0,a.kt)("h2",{id:"core-platform"},"Core Platform"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Implement Application serverside Kustomize and Workflow."),(0,a.kt)("li",{parentName:"ol"},"KubeVela as a control plane.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Application Controller deploy resources directly to remote clusters and instead of using AppContext"),(0,a.kt)("li",{parentName:"ul"},"AppRollout should be able to work in runtime cluster or rollout remote cluster resources"))),(0,a.kt)("li",{parentName:"ol"},"Multi-cluster and Multi-environment support, applications can deploy in different environments which\ncontains different clusters with different strategies."),(0,a.kt)("li",{parentName:"ol"},"Better Helm and Kustomize support, users can deploy a helm chart or a git repo directly without any more effort."),(0,a.kt)("li",{parentName:"ol"},"Support built-in Application monitoring."),(0,a.kt)("li",{parentName:"ol"},"Support more rollout strategies.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"blue-green"),(0,a.kt)("li",{parentName:"ul"},"traffic management rollout"),(0,a.kt)("li",{parentName:"ul"},"canary"),(0,a.kt)("li",{parentName:"ul"},"A/B"))),(0,a.kt)("li",{parentName:"ol"},"Support a general CUE controller which can glue more than K8s CRDs, it should support more protocol such as restful API,\ngo function call, etc."),(0,a.kt)("li",{parentName:"ol"},"Discoverable capability registries with more back integrations(file server/github/OSS).")),(0,a.kt)("h2",{id:"user-experience"},"User Experience"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Develop tools and CI integration."),(0,a.kt)("li",{parentName:"ol"},"Refine our docs and website.")),(0,a.kt)("h2",{id:"third-party-integrations"},"Third-party integrations"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Integrate with Open Cluster Management."),(0,a.kt)("li",{parentName:"ol"},"Integrate with Flux CD"),(0,a.kt)("li",{parentName:"ol"},"Integrate with Dapr to enable end-to-end microservice application development and deployment workflow."),(0,a.kt)("li",{parentName:"ol"},"Integrate with Tilt for local development.")))}u.isMDXComponent=!0}}]);