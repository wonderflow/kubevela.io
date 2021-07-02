(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8252],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38843:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l={title:"Learning Appfile"},p={unversionedId:"developers/learn-appfile",id:"version-v1.1/developers/learn-appfile",isDocsHomePage:!1,title:"Learning Appfile",description:"A sample Appfile is as below:",source:"@site/versioned_docs/version-v1.1/developers/learn-appfile.md",sourceDirName:"developers",slug:"/developers/learn-appfile",permalink:"/docs/developers/learn-appfile",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/learn-appfile.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1624242441,formattedLastUpdatedAt:"6/21/2021",frontMatter:{title:"Learning Appfile"},sidebar:"version-v1.1/docs",previous:{title:"Overview",permalink:"/docs/quick-start-appfile"},next:{title:"Setting Up Deployment Environment",permalink:"/docs/developers/config-enviroments"}},i=[{value:"Schema",id:"schema",children:[]},{value:"Example Workflow",id:"example-workflow",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"1. Download test app code",id:"1-download-test-app-code",children:[]},{value:"2. Deploy app in one command",id:"2-deploy-app-in-one-command",children:[]},{value:"Optional Configure another workload type",id:"optional-configure-another-workload-type",children:[]}]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],s={toc:i};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A sample ",(0,o.kt)("inlineCode",{parentName:"p"},"Appfile")," is as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n  frontend: # 1st service\n\n    image: oamdev/testapp:v1\n    build:\n      docker:\n        file: Dockerfile\n        context: .\n\n    cmd: ["node", "server.js"]\n    port: 8080\n\n    route: # trait\n      domain: example.com\n      rules:\n        - path: /testapp\n          rewriteTarget: /\n\n  backend: # 2nd service\n    type: task # workload type\n    image: perl \n    cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n')),(0,o.kt)("p",null,"Under the hood, ",(0,o.kt)("inlineCode",{parentName:"p"},"Appfile")," will build the image from source code, and then generate ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," resource with the image name."),(0,o.kt)("h2",{id:"schema"},"Schema"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Before learning about Appfile's detailed schema, we recommend you to get familiar with ",(0,o.kt)("a",{parentName:"p",href:"../concepts"},"core concepts")," in KubeVela.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: _app-name_\n\nservices:\n  _service-name_:\n    # If `build` section exists, this field will be used as the name to build image. Otherwise, KubeVela will try to pull the image with given name directly.\n    image: oamdev/testapp:v1\n\n    build:\n      docker:\n        file: _Dockerfile_path_ # relative path is supported, e.g. "./Dockerfile"\n        context: _build_context_path_ # relative path is supported, e.g. "."\n\n      push:\n        local: kind # optionally push to local KinD cluster instead of remote registry\n\n    type: webservice (default) | worker | task\n\n    # detailed configurations of workload\n    ... properties of the specified workload  ...\n\n    _trait_1_:\n      # properties of trait 1\n\n    _trait_2_:\n      # properties of trait 2\n\n    ... more traits and their properties ...\n  \n  _another_service_name_: # more services can be defined\n    ...\n  \n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To learn about how to set the properties of specific workload type or trait, please use ",(0,o.kt)("inlineCode",{parentName:"p"},"vela show <TYPE | TRAIT>"),".")),(0,o.kt)("h2",{id:"example-workflow"},"Example Workflow"),(0,o.kt)("p",null,"In the following workflow, we will build and deploy an example NodeJS app under ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/testapp"},"examples/testapp/"),"."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," installed on the host"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../install"},"KubeVela")," installed and configured")),(0,o.kt)("h3",{id:"1-download-test-app-code"},"1. Download test app code"),(0,o.kt)("p",null,"git clone and go to the testapp directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/oam-dev/kubevela.git\ncd kubevela/docs/examples/testapp\n")),(0,o.kt)("p",null,"The example contains NodeJS app code, Dockerfile to build the app."),(0,o.kt)("h3",{id:"2-deploy-app-in-one-command"},"2. Deploy app in one command"),(0,o.kt)("p",null,"In the directory there is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/testapp/vela.yaml"},"vela.yaml")," which follows Appfile format supported by Vela.\nWe are going to use it to build and deploy the app."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: please change ",(0,o.kt)("inlineCode",{parentName:"p"},"oamdev")," to your own registry account so you can push. Or, you could try the alternative approach in ",(0,o.kt)("inlineCode",{parentName:"p"},"Local testing without pushing image remotely")," section.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    image: oamdev/testapp:v1 # change this to your image\n")),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela up\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"Parsing vela.yaml ...\nLoading templates ...\n\nBuilding service (express-server)...\nSending build context to Docker daemon  71.68kB\nStep 1/10 : FROM mhart/alpine-node:12\n ---\x3e 9d88359808c3\n...\n\npushing image (oamdev/testapp:v1)...\n...\n\nRendering configs for service (express-server)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc express-server\n")),(0,o.kt)("p",null,"Check the status of the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela status testapp\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"  About:\n  \n    Name:       testapp\n    Namespace:  default\n    Created at: 2020-11-02 11:08:32.138484 +0800 CST\n    Updated at: 2020-11-02 11:08:32.138485 +0800 CST\n  \n  Services:\n  \n    - Name: express-server\n      Type: webservice\n      HEALTHY Ready: 1/1\n      Last Deployment:\n        Created at: 2020-11-02 11:08:33 +0800 CST\n        Updated at: 2020-11-02T11:08:32+08:00\n      Routes:\n\n")),(0,o.kt)("h4",{id:"alternative-local-testing-without-pushing-image-remotely"},"Alternative: Local testing without pushing image remotely"),(0,o.kt)("p",null,"If you have local ",(0,o.kt)("a",{parentName:"p",href:"../install"},"kind")," cluster running, you may try the local push option. No remote container registry is needed in this case."),(0,o.kt)("p",null,"Add local option to ",(0,o.kt)("inlineCode",{parentName:"p"},"build"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    build:\n      # push image into local kind cluster without remote transfer\n      push:\n        local: kind\n\n      docker:\n        file: Dockerfile\n        context: .\n")),(0,o.kt)("p",null,"Then deploy the app to kind:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela up\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"(Advanced) Check rendered manifests"),(0,o.kt)("p",null,"By default, Vela renders the final manifests in ",(0,o.kt)("inlineCode",{parentName:"p"},".vela/deploy.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: ApplicationConfiguration\nmetadata:\n  name: testapp\n  namespace: default\nspec:\n  components:\n  - componentName: express-server\n---\napiVersion: core.oam.dev/v1alpha2\nkind: Component\nmetadata:\n  name: express-server\n  namespace: default\nspec:\n  workload:\n    apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n      name: express-server\n    ...\n---\napiVersion: core.oam.dev/v1alpha2\nkind: HealthScope\nmetadata:\n  name: testapp-default-health\n  namespace: default\nspec:\n  ...\n"))),(0,o.kt)("h3",{id:"optional-configure-another-workload-type"},"[Optional]"," Configure another workload type"),(0,o.kt)("p",null,"By now we have deployed a ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"../end-user/components/webservice"},"Web Service")),", which is the default workload type in KubeVela. We can also add another service of ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"../end-user/components/task"},"Task"))," type in the same app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'services:\n  pi:\n    type: task\n    image: perl \n    cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n\n  express-server:\n    ...\n')),(0,o.kt)("p",null,"Then deploy Appfile again to update the application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela up\n")),(0,o.kt)("p",null,"Congratulations! You have just deployed an app using ",(0,o.kt)("inlineCode",{parentName:"p"},"Appfile"),"."),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"Play more with your app:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./check-logs"},"Check Application Logs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./exec-cmd"},"Execute Commands in Application Container")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./port-forward"},"Access Application via Route"))))}c.isMDXComponent=!0}}]);