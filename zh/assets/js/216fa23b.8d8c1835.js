(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{121:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),i=(t(0),t(340)),o={title:"\u5982\u4f55\u5b9a\u4e49"},p={unversionedId:"cue/trait",id:"cue/trait",isDocsHomePage:!1,title:"\u5982\u4f55\u5b9a\u4e49",description:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5b9a\u4e49 Trait\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cue/trait.md",slug:"/cue/trait",permalink:"/zh/docs/next/cue/trait",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/cue/trait.md",version:"current",lastUpdatedBy:"leason",lastUpdatedAt:1619163923,formattedLastUpdatedAt:"4/23/2021",sidebar:"docs",previous:{title:"Terraform",permalink:"/zh/docs/next/platform-engineers/terraform"},next:{title:"Patch Traits",permalink:"/zh/docs/next/cue/patch-trait"}},c=[{value:"\u7b80\u5355 Trait",id:"\u7b80\u5355-trait",children:[]},{value:"\u4f7f\u7528 CUE \u6765\u6784\u5efa Trait",id:"\u4f7f\u7528-cue-\u6765\u6784\u5efa-trait",children:[]}],s={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5b9a\u4e49 Trait\u3002"),Object(i.b)("h2",{id:"\u7b80\u5355-trait"},"\u7b80\u5355 Trait"),Object(i.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u5730\u53c2\u8003\u73b0\u6709\u7684 Kubernetes API \u8d44\u6e90\u6765\u5b9a\u4e49 KubeVela \u4e2d\u7684 Trait\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  definitionRef:\n    name: ingresses.networking.k8s.io\n")),Object(i.b)("p",null,"\u8ba9\u6211\u4eec\u5c06\u6b64 Trait \u9644\u52a0\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," \u4e2d\u7684 Component \u5b9e\u4f8b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            rules:\n            - http:\n                paths:\n                - path: /testpath\n                  pathType: Prefix\n                  backend:\n                    service:\n                      name: test\n                      port:\n                        number: 80\n")),Object(i.b)("p",null,"\u6ce8\u610f\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6240\u5f15\u7528\u8d44\u6e90\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"spec")," \u4e2d\u7684\u6240\u6709\u5b57\u6bb5\u90fd\u5c06\u5411\u6700\u7ec8\u7528\u6237\u516c\u5f00\uff0c\u5e76\u4e14\u4e0d\u5141\u8bb8\u5c06\u4efb\u4f55\u5143\u6570\u636e\uff08\u4f8b\u5982 ",Object(i.b)("inlineCode",{parentName:"p"},"annotations")," \u7b49\uff09\u8bbe\u7f6e\u4e3a Trait \u7684\u5c5e\u6027\u3002 \u56e0\u6b64\uff0c\u5f53\u4f60\u5e0c\u671b\u5c06\u81ea\u5df1\u7684 CRD \u548c\u63a7\u5236\u5668\u4f5c\u4e3a Trait \u65f6\uff0c\u901a\u5e38\u4f7f\u7528\u6b64\u65b9\u6cd5\uff0c\u5e76\u4e14\u5b83\u4e0d\u4f9d\u8d56 ",Object(i.b)("inlineCode",{parentName:"p"},"annotations")," \u7b49\u4f5c\u4e3a\u8c03\u6574\u624b\u6bb5\u3002"),Object(i.b)("h2",{id:"\u4f7f\u7528-cue-\u6765\u6784\u5efa-trait"},"\u4f7f\u7528 CUE \u6765\u6784\u5efa Trait"),Object(i.b)("p",null,"\u4e5f\u63a8\u8350\u4f7f\u7528 CUE \u7684\u65b9\u5f0f\u6765\u5b9a\u4e49 Trait\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5b83\u5e26\u6709\u62bd\u8c61\uff0c\u4f60\u53ef\u4ee5\u5b8c\u5168\u7075\u6d3b\u5730\u6839\u636e\u9700\u8981\u6765\u6a21\u677f\u5316\u4efb\u4f55\u8d44\u6e90\u548c\u5b57\u6bb5\u3002\u8bf7\u6ce8\u610f\uff0cKubeVela \u8981\u6c42\u6240\u6709 Trait \u5fc5\u987b\u5728 CUE \u6a21\u677f\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"outputs")," \u90e8\u5206\uff08\u800c\u975e ",Object(i.b)("inlineCode",{parentName:"p"},"output")," \uff09\u4e2d\u5b9a\u4e49\uff0c\u683c\u5f0f\u5982\u4e0b\uff1a "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cue"},"outputs: <unique-name>: \n  <full template data>\n")),Object(i.b)("p",null,"\u4ee5\u4e0b\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"ingress")," \u7684 Trait \u793a\u4f8b\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  podDisruptive: false\n  schematic:\n    cue:\n      template: |\n        parameter: {\n            domain: string\n            http: [string]: int\n        }\n\n        // trait template can have multiple outputs in one trait\n        outputs: service: {\n            apiVersion: "v1"\n            kind:       "Service"\n            spec: {\n                selector:\n                    app: context.name\n                ports: [\n                    for k, v in parameter.http {\n                        port:       v\n                        targetPort: v\n                    },\n                ]\n            }\n        }\n\n        outputs: ingress: {\n            apiVersion: "networking.k8s.io/v1beta1"\n            kind:       "Ingress"\n            metadata:\n                name: context.name\n            spec: {\n                rules: [{\n                    host: parameter.domain\n                    http: {\n                        paths: [\n                            for k, v in parameter.http {\n                                path: k\n                                backend: {\n                                    serviceName: context.name\n                                    servicePort: v\n                                }\n                            },\n                        ]\n                    }\n                }]\n            }\n        }\n')),Object(i.b)("p",null,"\u8ba9\u6211\u4eec\u5c06\u6b64 Trait \u9644\u52a0\u5230",Object(i.b)("inlineCode",{parentName:"p"},"Application"),"\u4e2d\u7684 Component \u5b9e\u4f8b\u4e2d\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            domain: test.my.domain\n            http:\n              "/api": 8080\n')),Object(i.b)("p",null,"\u57fa\u4e8e CUE \u7684 Trait \u5b9a\u4e49\u8fd8\u53ef\u4ee5\u652f\u6301\u8bb8\u591a\u5176\u4ed6\u9ad8\u7ea7\u65b9\u6848\uff0c\u4f8b\u5982\u4fee\u8865\u548c\u6570\u636e\u4f20\u9012\u3002 \u5728\u63a5\u4e0b\u6765\u7684\u6587\u6863\u4e2d\u5c06\u5bf9\u5b83\u4eec\u8fdb\u884c\u8be6\u7ec6\u8bf4\u660e\u3002"))}l.isMDXComponent=!0},340:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return t?a.a.createElement(d,p(p({ref:n},s),{},{components:t})):a.a.createElement(d,p({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);