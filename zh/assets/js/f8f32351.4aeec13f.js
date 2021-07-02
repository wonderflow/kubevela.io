(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7987],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21211:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=t(22122),i=t(19756),a=(t(67294),t(3905)),o={title:"Service Binding"},s={unversionedId:"end-user/traits/service-binding",id:"version-v1.1/end-user/traits/service-binding",isDocsHomePage:!1,title:"Description",description:"Service binding trait will bind data from Kubernetes Secret to the application container's ENV.",source:"@site/versioned_docs/version-v1.1/end-user/traits/service-binding.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/service-binding",permalink:"/zh/docs/end-user/traits/service-binding",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/traits/service-binding.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1624242441,formattedLastUpdatedAt:"2021/6/21",frontMatter:{title:"Service Binding"},sidebar:"version-v1.1/docs",previous:{title:"Cloud Volumes",permalink:"/zh/docs/end-user/traits/volumes"},next:{title:"Want More?",permalink:"/zh/docs/end-user/traits/more"}},c=[{value:"Sample",id:"sample",children:[]},{value:"Specification",id:"specification",children:[]}],p={toc:c};function l(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Service binding trait will bind data from Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret")," to the application container's ENV. "),(0,a.kt)("h2",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn\n                key: password                                     # 1) If the env name is different from secret key, secret key has to be set.\n              endpoint:\n                secret: db-conn                                   # 2) If the env name is the same as the secret key, secret key can be omitted.\n              username:\n                secret: db-conn\n\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        name: sample-db\n        engine: mysql\n        engineVersion: "8.0"\n        instanceClass: rds.mysql.c1.large\n        username: oamtest\n        secretName: db-conn\n\n')),(0,a.kt)("p",null,"For more detailed samples, please reference to ",(0,a.kt)("a",{parentName:"p",href:"../components/cloud-services"},"cloud resource")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+-------------+------------------------------------------------+------------------+----------+---------+\n|    NAME     |                  DESCRIPTION                   |       TYPE       | REQUIRED | DEFAULT |\n+-------------+------------------------------------------------+------------------+----------+---------+\n| envMappings | The mapping of environment variables to secret | map[string]{...} | true     |         |\n+-------------+------------------------------------------------+------------------+----------+---------+\n")))}l.isMDXComponent=!0}}]);