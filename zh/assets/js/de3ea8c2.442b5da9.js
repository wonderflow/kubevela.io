(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7002],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return i},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),h=c(t),d=r,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||o;return t?a.createElement(m,l(l({ref:n},i),{},{components:t})):a.createElement(m,l({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=h;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},82585:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return i}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),l={title:"Define Application Health Probe"},s={unversionedId:"end-user/scopes/health",id:"version-v1.0/end-user/scopes/health",isDocsHomePage:!1,title:"Define Application Health Probe",description:"In this documentation, we will show how to define health probe for application",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/end-user/scopes/health.md",sourceDirName:"end-user/scopes",slug:"/end-user/scopes/health",permalink:"/zh/docs/v1.0/end-user/scopes/health",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/scopes/health.md",version:"v1.0",lastUpdatedBy:"guoxudong",lastUpdatedAt:1622708793,formattedLastUpdatedAt:"2021/6/3",frontMatter:{title:"Define Application Health Probe"},sidebar:"version-v1.0/docs",previous:{title:"Rollout Plan",permalink:"/zh/docs/v1.0/end-user/scopes/rollout-plan"},next:{title:"Dry-Run / Live-Diff",permalink:"/zh/docs/v1.0/end-user/debug"}},p=[],c={toc:p};function i(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this documentation, we will show how to define health probe for application"),(0,o.kt)("p",null,"1.Create health scope instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: HealthScope\nmetadata:\n  name: health-check\n  namespace: default\nspec:\n  probe-interval: 60\n  workloadRefs:\n  - apiVersion: apps/v1\n    kind: Deployment\n    name: express-server\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create an application with the health scope")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8080 # change port\n        cpu: 0.5 # add requests cpu units\n      scopes:\n        healthscopes.core.oam.dev: health-check\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Check app status, will see health scope in ",(0,o.kt)("inlineCode",{parentName:"li"},"status.service.scopes"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get app vela-app -o yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app\n...\nstatus:\n...\n  services:\n   - healthy: true\n     name: express-server\n     scopes:\n       - apiVersion: core.oam.dev/v1alpha2\n         kind: HealthScope\n         name: health-check\n")),(0,o.kt)("p",null,"4.Check health scope status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get healthscope health-check -o yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: HealthScope\nmetadata:\n  name: health-check\n...\nspec:\n  probe-interval: 60\n  workloadRefs:\n    - apiVersion: apps/v1\n      kind: Deployment\n      name: express-server\nstatus:\n  healthConditions:\n    - componentName: express-server\n      diagnosis: 'Ready:1/1 '\n      healthStatus: HEALTHY\n      targetWorkload:\n        apiVersion: apps/v1\n        kind: Deployment\n        name: express-server\n  scopeHealthCondition:\n    healthStatus: HEALTHY\n    healthyWorkloads: 1\n    total: 1\n")))}i.isMDXComponent=!0}}]);