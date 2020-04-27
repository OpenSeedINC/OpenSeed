(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(1),a=n(6),r=(n(0),n(154)),c={id:"godot_installation",title:"Installation",sidebar_label:"Installation"},i={id:"game/Godot/godot_installation",title:"Installation",description:":::note",source:"@site/docs/game/Godot/godot_installation.md",permalink:"/OpenSeed/docs/game/Godot/godot_installation",editUrl:"https://github.com/Open-Orchard/OpenSeed/edit/master/website/docs/game/Godot/godot_installation.md",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"About OpenSeed Game",permalink:"/OpenSeed/docs/game/about"},next:{title:"Godot Account Functions",permalink:"/OpenSeed/docs/game/Godot/godot_account"}},l=[{value:"Disclaimer",id:"disclaimer",children:[]},{value:"Install",id:"install",children:[]},{value:"Update",id:"update",children:[]}],d={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"All these documents are considered rough drafts and will change often."))),Object(r.b)("h2",{id:"disclaimer"},"Disclaimer"),Object(r.b)("p",null,"OpenSeed, OpenSeed-Godot, and the tools that we use beyond the scope of these documents are under heavy development. Breakages will happen frequently until we reach a stable state (~ Fall 2020) . Once we hit stable this disclaimer will be removed (and a new one will be added) "),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)("p",null,"First as with many opensource projects we will clone the OpenSeed-Godot repo into the root (top most) directory/folder of your game project. "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"git clone ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Open-Orchard/OpenSeed-Godot.git"}),"https://github.com/Open-Orchard/OpenSeed-Godot.git"))),Object(r.b)("p",null,"Once that completes you will need to add OpenSeed.tscn as a singleton to your project. To do this go to Project--\x3e Project Settings. You should be greated with a window similar to the one below."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://openseed.solutions:8689/img/low/project_settings.png",alt:"project settings"}))),Object(r.b)("p",null,"Now navigate to the AutoLoad tab shown below. There you will need to supply the path to the OpenSeed.tcsn found in the directory created after you ran git clone."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://openseed.solutions:8689/img/low/autoload.png",alt:"auto load"}))),Object(r.b)("p",null,'Once the path has been entered you can click "Add" to append it to the list of auto loaded nodes.'),Object(r.b)("p",null,'Last but not least be sure that "Singleton" is check as enabled to ensure the library loads as intended.'),Object(r.b)("p",null,"To access the Singleton in your project. It is recommended that you add something similar to this to each script. (We're using gdscript, but c# should be similar)"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'var OpenSeed \n\nfunc _ready():\n    OpenSeed = get_node("/root/OpenSeed")\n\n\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"All developers and application need a unique ID to use any OpenSeed service. If you are interested in getting one you may contact us at support@openorchard.io"))),Object(r.b)("h2",{id:"update"},"Update"),Object(r.b)("p",null,"Since we are using the github version of OpenSeed-Godot you can issue this command to get the newest version (assuming you are in the OpenSeed-Godot directory)"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"git pull")))}s.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,m=p["".concat(c,".").concat(u)]||p[u]||b[u]||r;return n?a.a.createElement(m,i({ref:t},d,{components:n})):a.a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<r;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);