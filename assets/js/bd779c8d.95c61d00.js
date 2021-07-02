(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4336],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37628:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var t=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"Terraform"},l={unversionedId:"platform-engineers/terraform",id:"version-v1.1/platform-engineers/terraform",isDocsHomePage:!1,title:"Terraform",description:"In this documentation, we will use Alibaba Cloud's RDS (Relational Database Service), and Alibaba Cloud's OSS (Object Storage System) as examples to show how to enable cloud services as part of the application deployment.",source:"@site/versioned_docs/version-v1.1/platform-engineers/terraform.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/terraform",permalink:"/docs/platform-engineers/terraform",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/terraform.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1624242441,formattedLastUpdatedAt:"6/21/2021",frontMatter:{title:"Terraform"},sidebar:"version-v1.1/docs",previous:{title:"Overview",permalink:"/docs/platform-engineers/cloud-services"},next:{title:"Crossplane",permalink:"/docs/platform-engineers/crossplane"}},s=[{value:"Prepare Terraform Controller",id:"prepare-terraform-controller",children:[{value:"Apply Provider Credentials",id:"apply-provider-credentials",children:[]},{value:"Register <code>alibaba-rds</code> Component",id:"register-alibaba-rds-component",children:[]},{value:"Register <code>alibaba-oss</code> Component",id:"register-alibaba-oss-component",children:[]}]}],c={toc:s};function p(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this documentation, we will use Alibaba Cloud's RDS (Relational Database Service), and Alibaba Cloud's OSS (Object Storage System) as examples to show how to enable cloud services as part of the application deployment."),(0,o.kt)("p",null,"These cloud services are provided by Terraform."),(0,o.kt)("h2",{id:"prepare-terraform-controller"},"Prepare Terraform Controller"),(0,o.kt)("details",null,(0,o.kt)("p",null,"Download the latest chart, like ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform-controller-chart-0.1.8.tgz"),", from the latest ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-controller/releases"},"releases list")," and install it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm install terraform-controller terraform-controller-0.1.8.tgz\nNAME: terraform-controller\nLAST DEPLOYED: Mon Apr 26 15:55:35 2021\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n")),(0,o.kt)("h3",{id:"apply-provider-credentials"},"Apply Provider Credentials"),(0,o.kt)("p",null,"By applying Terraform Provider credentials, Terraform controller can be authenticated to deploy and manage cloud resources."),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-controller/blob/master/getting-started.md"},"Terraform controller getting started")," on how to apply Provider for Alibaba Cloud or AWS.")),(0,o.kt)("h3",{id:"register-alibaba-rds-component"},"Register ",(0,o.kt)("inlineCode",{parentName:"h3"},"alibaba-rds")," Component"),(0,o.kt)("p",null,"Register ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/terraform/cloud-resource-provision-and-consume/ComponentDefinition-alibaba-rds.yaml"},"alibaba-rds")," to KubeVela."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-rds\n  annotations:\n    definition.oam.dev/description: Terraform configuration for Alibaba Cloud RDS object\n    type: terraform\nspec:\n  workload:\n    definition:\n      apiVersion: terraform.core.oam.dev/v1beta1\n      kind: Configuration\n  schematic:\n    terraform:\n      configuration: |\n        module "rds" {\n          source = "terraform-alicloud-modules/rds/alicloud"\n          engine = "MySQL"\n          engine_version = "8.0"\n          instance_type = "rds.mysql.c1.large"\n          instance_storage = "20"\n          instance_name = var.instance_name\n          account_name = var.account_name\n          password = var.password\n        }\n\n        output "DB_NAME" {\n          value = module.rds.this_db_instance_name\n        }\n        output "DB_USER" {\n          value = module.rds.this_db_database_account\n        }\n        output "DB_PORT" {\n          value = module.rds.this_db_instance_port\n        }\n        output "DB_HOST" {\n          value = module.rds.this_db_instance_connection_string\n        }\n        output "DB_PASSWORD" {\n          value = module.rds.this_db_instance_port\n        }\n\n        variable "instance_name" {\n          description = "RDS instance name"\n          type = string\n          default = "poc"\n        }\n\n        variable "account_name" {\n          description = "RDS instance user account name"\n          type = "string"\n          default = "oam"\n        }\n\n        variable "password" {\n          description = "RDS instance account password"\n          type = "string"\n          default = "Xyfff83jfewGGfaked"\n        }\n\n')),(0,o.kt)("h3",{id:"register-alibaba-oss-component"},"Register ",(0,o.kt)("inlineCode",{parentName:"h3"},"alibaba-oss")," Component"),(0,o.kt)("p",null,"Register ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/terraform/cloud-resource-provision-and-consume/ComponentDefinition-alibaba-oss.yaml"},"alibaba-oss")," to KubeVela."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-oss\n  annotations:\n    definition.oam.dev/description: Terraform configuration for Alibaba Cloud OSS object\n    type: terraform\nspec:\n  workload:\n    definition:\n      apiVersion: terraform.core.oam.dev/v1beta1\n      kind: Configuration\n  schematic:\n    terraform:\n      configuration: |\n        resource "alicloud_oss_bucket" "bucket-acl" {\n          bucket = var.bucket\n          acl = var.acl\n        }\n\n        output "BUCKET_NAME" {\n          value = "${alicloud_oss_bucket.bucket-acl.bucket}.${alicloud_oss_bucket.bucket-acl.extranet_endpoint}"\n        }\n\n        variable "bucket" {\n          description = "OSS bucket name"\n          default = "vela-website"\n          type = string\n        }\n\n        variable "acl" {\n          description = "OSS bucket ACL, supported \'private\', \'public-read\', \'public-read-write\'"\n          default = "private"\n          type = string\n        }\n\n\n')))}p.isMDXComponent=!0}}]);