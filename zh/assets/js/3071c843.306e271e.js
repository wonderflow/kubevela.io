(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[747],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return p},kt:function(){return u}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return a?t.createElement(b,s(s({ref:n},p),{},{components:a})):t.createElement(b,s({ref:n},p))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79135:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var t=a(22122),r=a(19756),o=(a(67294),a(3905)),s={title:"Crossplane"},i={unversionedId:"platform-engineers/crossplane",id:"platform-engineers/crossplane",isDocsHomePage:!1,title:"Crossplane",description:"In this documentation, we will use Alibaba Cloud's RDS (Relational Database Service), and Alibaba Cloud's OSS (Object Storage System) as examples to show how to enable cloud services as part of the application deployment.",source:"@site/docs/platform-engineers/crossplane.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/crossplane",permalink:"/zh/docs/next/platform-engineers/crossplane",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/crossplane.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1621426051,formattedLastUpdatedAt:"2021/5/19",frontMatter:{title:"Crossplane"},sidebar:"docs",previous:{title:"Terraform",permalink:"/zh/docs/next/platform-engineers/terraform"},next:{title:"\u5982\u4f55\u5b9a\u4e49",permalink:"/zh/docs/next/platform-engineers/cue/trait"}},l=[{value:"Prepare Crossplane",id:"prepare-crossplane",children:[]},{value:"Register <code>alibaba-rds</code> Component",id:"register-alibaba-rds-component",children:[]},{value:"Register <code>alibaba-oss</code> Component",id:"register-alibaba-oss-component",children:[]}],c={toc:l};function p(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this documentation, we will use Alibaba Cloud's RDS (Relational Database Service), and Alibaba Cloud's OSS (Object Storage System) as examples to show how to enable cloud services as part of the application deployment."),(0,o.kt)("p",null,"These cloud services are provided by Crossplane."),(0,o.kt)("h2",{id:"prepare-crossplane"},"Prepare Crossplane"),(0,o.kt)("details",null,"Please Refer to [Installation](https://github.com/crossplane/provider-alibaba/releases/tag/v0.5.0) to install Crossplane Alibaba provider v0.5.0.",(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you'd like to configure any other Crossplane providers, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://crossplane.io/docs/v1.1/getting-started/install-configure.html#select-a-getting-started-configuration"},"Crossplane Select a Getting Started Configuration"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl crossplane install provider crossplane/provider-alibaba:v0.5.0\n\n# Note the xxx and yyy here is your own AccessKey and SecretKey to the cloud resources.\n$ kubectl create secret generic alibaba-account-creds -n crossplane-system --from-literal=accessKeyId=xxx --from-literal=accessKeySecret=yyy\n\n$ kubectl apply -f provider.yaml\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"provider.yaml")," is as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: crossplane-system\n\n---\napiVersion: alibaba.crossplane.io/v1alpha1\nkind: ProviderConfig\nmetadata:\n  name: default\nspec:\n  credentials:\n    source: Secret\n    secretRef:\n      namespace: crossplane-system\n      name: alibaba-account-creds\n      key: credentials\n  region: cn-beijing\n"))),(0,o.kt)("h2",{id:"register-alibaba-rds-component"},"Register ",(0,o.kt)("inlineCode",{parentName:"h2"},"alibaba-rds")," Component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-rds\n  namespace: vela-system\n  annotations:\n    definition.oam.dev/description: "Alibaba Cloud RDS Resource"\nspec:\n  workload:\n    definition:\n      apiVersion: database.alibaba.crossplane.io/v1alpha1\n      kind: RDSInstance\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "database.alibaba.crossplane.io/v1alpha1"\n            kind:       "RDSInstance"\n            spec: {\n                forProvider: {\n                    engine:                parameter.engine\n                    engineVersion:         parameter.engineVersion\n                    dbInstanceClass:       parameter.instanceClass\n                    dbInstanceStorageInGB: 20\n                    securityIPList:        "0.0.0.0/0"\n                    masterUsername:        parameter.username\n                }\n                writeConnectionSecretToRef: {\n                    namespace: context.namespace\n                    name:      parameter.secretName\n                }\n                providerConfigRef: {\n                    name: "default"\n                }\n                deletionPolicy: "Delete"\n            }\n        }\n        parameter: {\n            // +usage=RDS engine\n            engine: *"mysql" | string\n            // +usage=The version of RDS engine\n            engineVersion: *"8.0" | string\n            // +usage=The instance class for the RDS\n            instanceClass: *"rds.mysql.c1.large" | string\n            // +usage=RDS username\n            username: string\n            // +usage=Secret name which RDS connection will write to\n            secretName: string\n        }\n\n\n')),(0,o.kt)("h2",{id:"register-alibaba-oss-component"},"Register ",(0,o.kt)("inlineCode",{parentName:"h2"},"alibaba-oss")," Component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-oss\n  namespace: vela-system\n  annotations:\n    definition.oam.dev/description: "Alibaba Cloud RDS Resource"\nspec:\n  workload:\n    definition:\n      apiVersion: oss.alibaba.crossplane.io/v1alpha1\n      kind: Bucket\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "oss.alibaba.crossplane.io/v1alpha1"\n            kind:       "Bucket"\n            spec: {\n                name:               parameter.name\n                acl:                parameter.acl\n                storageClass:       parameter.storageClass\n                dataRedundancyType: parameter.dataRedundancyType\n                writeConnectionSecretToRef: {\n                    namespace: context.namespace\n                    name:      parameter.secretName\n                }\n                providerConfigRef: {\n                    name: "default"\n                }\n                deletionPolicy: "Delete"\n            }\n        }\n        parameter: {\n            // +usage=OSS bucket name\n            name: string\n            // +usage=The access control list of the OSS bucket\n            acl: *"private" | string\n            // +usage=The storage type of OSS bucket\n            storageClass: *"Standard" | string\n            // +usage=The data Redundancy type of OSS bucket\n            dataRedundancyType: *"LRS" | string\n            // +usage=Secret name which RDS connection will write to\n            secretName: string\n        }\n\n')))}p.isMDXComponent=!0}}]);