(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8835],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33514:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var a=t(22122),o=t(19756),r=(t(67294),t(3905)),i={title:"How-to"},l={unversionedId:"platform-engineers/helm/component",id:"version-v1.1/platform-engineers/helm/component",isDocsHomePage:!1,title:"How-to",description:"In this section, it will introduce how to declare Helm charts as components via ComponentDefinition.",source:"@site/versioned_docs/version-v1.1/platform-engineers/helm/component.md",sourceDirName:"platform-engineers/helm",slug:"/platform-engineers/helm/component",permalink:"/zh/docs/platform-engineers/helm/component",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/helm/component.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1624242441,formattedLastUpdatedAt:"2021/6/21",frontMatter:{title:"How-to"},sidebar:"version-v1.1/docs",previous:{title:"Learning CUE",permalink:"/zh/docs/platform-engineers/cue/basic"},next:{title:"Attach Traits",permalink:"/zh/docs/platform-engineers/helm/trait"}},p=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Declare <code>ComponentDefinition</code>",id:"declare-componentdefinition",children:[]},{value:"Declare an <code>Application</code>",id:"declare-an-application",children:[]}],c={toc:p};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, it will introduce how to declare Helm charts as components via ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentDefinition"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before reading this part, please make sure you've learned ",(0,r.kt)("a",{parentName:"p",href:"../definition-and-templates"},"the definition and template concepts"),".")),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure you have enabled Helm support in the ",(0,r.kt)("a",{parentName:"li",href:"../../install#4-enable-helm-support"},"installation guide"),".")),(0,r.kt)("h2",{id:"declare-componentdefinition"},"Declare ",(0,r.kt)("inlineCode",{parentName:"h2"},"ComponentDefinition")),(0,r.kt)("p",null,"Here is an example ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," about how to use Helm as schematic module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webapp-chart\n  annotations:\n    definition.oam.dev/description: helm chart for webapp\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    helm:\n      release:\n        chart:\n          spec:\n            chart: "podinfo"\n            version: "5.1.4"\n      repository:\n        url: "http://oam.dev/catalog/"\n')),(0,r.kt)("p",null,"In detail:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".spec.workload")," is required to indicate the workload type of this Helm based component. Please also check for ",(0,r.kt)("a",{parentName:"li",href:"known-issues?id=workload-type-indicator"},"known limitations")," if you have multiple workloads packaged in one chart."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".spec.schematic.helm")," contains information of Helm ",(0,r.kt)("inlineCode",{parentName:"li"},"release")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"repository")," which leverages ",(0,r.kt)("inlineCode",{parentName:"li"},"fluxcd/flux2"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"i.e. the spec of ",(0,r.kt)("inlineCode",{parentName:"li"},"release")," aligns with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fluxcd/helm-controller/blob/main/docs/api/helmrelease.md"},(0,r.kt)("inlineCode",{parentName:"a"},"HelmReleaseSpec"))," and spec of ",(0,r.kt)("inlineCode",{parentName:"li"},"repository")," aligns with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fluxcd/source-controller/blob/main/docs/api/source.md#source.toolkit.fluxcd.io/v1beta1.HelmRepository"},(0,r.kt)("inlineCode",{parentName:"a"},"HelmRepositorySpec")),".")))),(0,r.kt)("h2",{id:"declare-an-application"},"Declare an ",(0,r.kt)("inlineCode",{parentName:"h2"},"Application")),(0,r.kt)("p",null,"Here is an example ",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: demo-podinfo \n      type: webapp-chart \n      properties: \n        image:\n          tag: "5.1.2"\n')),(0,r.kt)("p",null,"The component ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," is exactly the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/captainroy-hy/podinfo/blob/master/charts/podinfo/values.yaml"},"overlay values")," of the Helm chart."),(0,r.kt)("p",null,"Deploy the application and after several minutes (it may take time to fetch Helm chart), you can check the Helm release is installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm ls -A\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"myapp-demo-podinfo  default   1   2021-03-05 02:02:18.692317102 +0000 UTC deployed  podinfo-5.1.4     5.1.4\n")),(0,r.kt)("p",null,"Check the workload defined in the chart has been created successfully."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME                     READY   UP-TO-DATE   AVAILABLE   AGE\nmyapp-demo-podinfo   1/1     1            1           66m\n")),(0,r.kt)("p",null,"Check the values (",(0,r.kt)("inlineCode",{parentName:"p"},"image.tag = 5.1.2"),") from application's ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," are assigned to the chart."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment myapp-demo-podinfo -o json | jq '.spec.template.spec.containers[0].image'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'"ghcr.io/stefanprodan/podinfo:5.1.2"\n')))}s.isMDXComponent=!0}}]);