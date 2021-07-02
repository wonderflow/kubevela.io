(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[1007],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return s}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),s=r,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11286:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=t(22122),r=t(19756),a=(t(67294),t(3905)),i={title:"Setting Up Deployment Environment"},l={unversionedId:"developers/config-enviroments",id:"version-v1.0/developers/config-enviroments",isDocsHomePage:!1,title:"Setting Up Deployment Environment",description:"A deployment environment is where you could configure the workspace, email for contact and domain for your applications globally.",source:"@site/versioned_docs/version-v1.0/developers/config-enviroments.md",sourceDirName:"developers",slug:"/developers/config-enviroments",permalink:"/docs/v1.0/developers/config-enviroments",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/config-enviroments.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1625208237,formattedLastUpdatedAt:"7/2/2021",frontMatter:{title:"Setting Up Deployment Environment"},sidebar:"version-v1.0/docs",previous:{title:"Learning Appfile",permalink:"/docs/v1.0/developers/learn-appfile"},next:{title:"Port Forwarding",permalink:"/docs/v1.0/developers/port-forward"}},p=[{value:"Create environment",id:"create-environment",children:[]},{value:"Check the deployment environment metadata",id:"check-the-deployment-environment-metadata",children:[]},{value:"Configure changes",id:"configure-changes",children:[]},{value:"Optional Configure Domain if you have public IP",id:"optional-configure-domain-if-you-have-public-ip",children:[{value:"Using domain in Appfile",id:"using-domain-in-appfile",children:[]}]}],c={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A deployment environment is where you could configure the workspace, email for contact and domain for your applications globally.\nA typical set of deployment environment is ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"staging"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"prod"),", etc."),(0,a.kt)("h2",{id:"create-environment"},"Create environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela env init demo --email my@email.com\nenvironment demo created, Namespace: default, Email: my@email.com\n")),(0,a.kt)("h2",{id:"check-the-deployment-environment-metadata"},"Check the deployment environment metadata"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela env ls\nNAME    CURRENT NAMESPACE   EMAIL                   DOMAIN\ndefault         default     \ndemo    *       default     my@email.com\n")),(0,a.kt)("p",null,"By default, the environment will use ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," namespace in K8s."),(0,a.kt)("h2",{id:"configure-changes"},"Configure changes"),(0,a.kt)("p",null,"You could change the config by executing the environment again."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela env init demo --namespace demo\nenvironment demo created, Namespace: demo, Email: my@email.com\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela env ls\nNAME    CURRENT NAMESPACE   EMAIL                   DOMAIN\ndefault         default     \ndemo    *       demo        my@email.com\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note that the created apps won't be affected, only newly created apps will use the updated info.")),(0,a.kt)("h2",{id:"optional-configure-domain-if-you-have-public-ip"},"[Optional]"," Configure Domain if you have public IP"),(0,a.kt)("p",null,"If your K8s cluster is provisioned by cloud provider and has public IP for ingress.\nYou could configure your domain in the environment, then you'll be able to visit\nyour app by this domain with an mTLS supported automatically."),(0,a.kt)("p",null,"For example, you could get the public IP from ingress service.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get svc -A | grep LoadBalancer\nNAME                         TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE\nnginx-ingress-lb             LoadBalancer   172.21.2.174    123.57.10.233   80:32740/TCP,443:32086/TCP   41d\n")),(0,a.kt)("p",null,"The fourth column is public IP. Configure 'A' record for your custom domain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*.your.domain => 123.57.10.233\n")),(0,a.kt)("p",null,"You could also use ",(0,a.kt)("inlineCode",{parentName:"p"},"123.57.10.233.xip.io")," as your domain, if you don't have a custom one.\n",(0,a.kt)("inlineCode",{parentName:"p"},"xip.io")," will automatically route to the prefix IP ",(0,a.kt)("inlineCode",{parentName:"p"},"123.57.10.233"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela env init demo --domain 123.57.10.233.xip.io\nenvironment demo updated, Namespace: demo, Email: my@email.com\n")),(0,a.kt)("h3",{id:"using-domain-in-appfile"},"Using domain in Appfile"),(0,a.kt)("p",null,"Since you now have domain configured globally in deployment environment, you don't need to specify the domain in route configuration anymore."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# in demo environment\nservcies:\n  express-server:\n    ...\n\n    route:\n      rules:\n        - path: /testapp\n          rewriteTarget: /\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl http://123.57.10.233.xip.io/testapp\nHello World\n")))}u.isMDXComponent=!0}}]);