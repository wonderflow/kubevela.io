(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[360],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return v}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(t),v=o,d=u["".concat(c,".").concat(v)]||u[v]||p[v]||a;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9496:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i={title:"Web Service"},s={unversionedId:"end-user/components/webservice",id:"version-v1.1/end-user/components/webservice",isDocsHomePage:!1,title:"Web Service",description:"Description",source:"@site/versioned_docs/version-v1.1/end-user/components/webservice.md",sourceDirName:"end-user/components",slug:"/end-user/components/webservice",permalink:"/zh/docs/end-user/components/webservice",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/components/webservice.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1623737988,formattedLastUpdatedAt:"2021/6/15",frontMatter:{title:"Web Service"},sidebar:"version-v1.1/docs",previous:{title:"Application",permalink:"/zh/docs/end-user/application"},next:{title:"Task",permalink:"/zh/docs/end-user/components/task"}},c=[{value:"Description",id:"description",children:[]},{value:"Samples",id:"samples",children:[{value:"Declare Volumes",id:"declare-volumes",children:[]}]},{value:"Specification",id:"specification",children:[]}],m={toc:c};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers."),(0,a.kt)("h2",{id:"samples"},"Samples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: oamdev/testapp:v1\n        cmd: ["node", "server.js"]\n        port: 8080\n        cpu: "0.1"\n        env:\n          - name: FOO\n            value: bar\n          - name: FOO\n            valueFrom:\n              secretKeyRef:\n                name: bar\n                key: bar\n')),(0,a.kt)("h3",{id:"declare-volumes"},"Declare Volumes"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Web Service")," component exposes configurations for certain volume types including ",(0,a.kt)("inlineCode",{parentName:"p"},"PersistenVolumeClaim"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigMap"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"EmptyDir"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n        volumes:\n          - name: "my-pvc"    \n            mountPath: "/var/www/html1" \n            type: "pvc"     # PersistenVolumeClaim volume\n            claimName: "myclaim"\n          - name: "my-cm"    \n            mountPath: "/var/www/html2"\n            type: "configMap"    # ConfigMap volume (specifying items)\n            cmName: "myCmName"\n            items:\n              - key: "k1"\n                path: "./a1"\n              - key: "k2"\n                path: "./a2"\n          - name: "my-cm-noitems"\n            mountPath: "/var/www/html22"\n            type: "configMap"    # ConfigMap volume (not specifying items)\n            cmName: "myCmName2"\n          - name: "mysecret"\n            type: "secret"     # Secret volume\n            mountPath: "/var/www/html3"\n            secretName: "mysecret"\n          - name: "my-empty-dir"\n            type: "emptyDir"    # EmptyDir volume\n            mountPath: "/var/www/html4"\n')),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'# Properties\n+------------------+----------------------------------------------------------------------------------+-----------------------+----------+---------+\n|       NAME       |                                   DESCRIPTION                                    |         TYPE          | REQUIRED | DEFAULT |\n+------------------+----------------------------------------------------------------------------------+-----------------------+----------+---------+\n| cmd              | Commands to run in the container                                                 | []string              | false    |         |\n| env              | Define arguments by using environment variables                                  | [[]env](#env)         | false    |         |\n| addRevisionLabel |                                                                                  | bool                  | true     | false   |\n| image            | Which image would you like to use for your service                               | string                | true     |         |\n| port             | Which port do you want customer traffic sent to                                  | int                   | true     |      80 |\n| cpu              | Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core) | string                | false    |         |\n| volumes          | Declare volumes and volumeMounts                                                 | [[]volumes](#volumes) | false    |         |\n+------------------+----------------------------------------------------------------------------------+-----------------------+----------+---------+\n\n\n##### volumes\n+-----------+---------------------------------------------------------------------+--------+----------+---------+\n|   NAME    |                             DESCRIPTION                             |  TYPE  | REQUIRED | DEFAULT |\n+-----------+---------------------------------------------------------------------+--------+----------+---------+\n| name      |                                                                     | string | true     |         |\n| mountPath |                                                                     | string | true     |         |\n| type      | Specify volume type, options: "pvc","configMap","secret","emptyDir" | string | true     |         |\n+-----------+---------------------------------------------------------------------+--------+----------+---------+\n\n\n## env\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n|   NAME    |                        DESCRIPTION                        |          TYPE           | REQUIRED | DEFAULT |\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n| name      | Environment variable name                                 | string                  | true     |         |\n| value     | The value of the environment variable                     | string                  | false    |         |\n| valueFrom | Specifies a source the value of this var should come from | [valueFrom](#valueFrom) | false    |         |\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n\n\n### valueFrom\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n|     NAME     |                   DESCRIPTION                    |             TYPE              | REQUIRED | DEFAULT |\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n| secretKeyRef | Selects a key of a secret in the pod\'s namespace | [secretKeyRef](#secretKeyRef) | true     |         |\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n\n\n#### secretKeyRef\n+------+------------------------------------------------------------------+--------+----------+---------+\n| NAME |                           DESCRIPTION                            |  TYPE  | REQUIRED | DEFAULT |\n+------+------------------------------------------------------------------+--------+----------+---------+\n| name | The name of the secret in the pod\'s namespace to select from     | string | true     |         |\n| key  | The key of the secret to select from. Must be a valid secret key | string | true     |         |\n+------+------------------------------------------------------------------+--------+----------+---------+\n')))}l.isMDXComponent=!0}}]);