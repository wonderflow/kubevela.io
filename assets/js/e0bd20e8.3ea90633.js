(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{302:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(340)),i={title:"vela port-forward"},l={unversionedId:"cli/vela_port-forward",id:"version-v1.0/cli/vela_port-forward",isDocsHomePage:!1,title:"vela port-forward",description:"Forward local ports to services in an application",source:"@site/versioned_docs/version-v1.0/cli/vela_port-forward.md",slug:"/cli/vela_port-forward",permalink:"/docs/cli/vela_port-forward",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/cli/vela_port-forward.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1619772878,formattedLastUpdatedAt:"4/30/2021",sidebar:"version-v1.0/docs",previous:{title:"vela ls",permalink:"/docs/cli/vela_ls"},next:{title:"vela show",permalink:"/docs/cli/vela_show"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],p={toc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Forward local ports to services in an application"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"Forward local ports to services in an application"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"vela port-forward APP_NAME [flags]\n")),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"port-forward APP_NAME [options] [LOCAL_PORT:]REMOTE_PORT [...[LOCAL_PORT_N:]REMOTE_PORT_N]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"      --address strings                Addresses to listen on (comma separated). Only accepts IP addresses or localhost as a value. When localhost is supplied, vela will try to bind on both 127.0.0.1 and ::1 and will fail if neither of these addresses are available to bind. (default [localhost])\n  -h, --help                           help for port-forward\n      --pod-running-timeout duration   The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running (default 1m0s)\n      --route                          forward ports from route trait service\n")),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"vela"},"vela"),"\t - ")),Object(a.b)("h6",{id:"auto-generated-by-spf13cobra-on-20-mar-2021"},"Auto generated by spf13/cobra on 20-Mar-2021"))}s.isMDXComponent=!0},340:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),b=n,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return r?o.a.createElement(f,l(l({ref:t},p),{},{components:r})):o.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);