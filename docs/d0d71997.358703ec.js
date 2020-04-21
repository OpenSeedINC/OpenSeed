(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(6),c=(n(0),n(151)),o={id:"account",title:"Accounts",sidebar_label:"Accounts"},p={id:"core/account",title:"Accounts",description:"Current existing functions found in the OpenSeed_Account file. Not all these functions are finalized and there will be changes while we work toward our first release. However, these should represent most of the major features.",source:"@site/docs/core/account.md",permalink:"/OpenSeed/docs/core/account",editUrl:"https://github.com/Open-Orchard/OpenSeed/edit/master/website/docs/core/account.md",sidebar_label:"Accounts",sidebar:"someSidebar",previous:{title:"About OpenSeed Core",permalink:"/OpenSeed/docs/core/about"},next:{title:"Chat",permalink:"/OpenSeed/docs/core/chat"}},b=[],i={rightToc:b};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Current existing functions found in the OpenSeed_Account file. Not all these functions are finalized and there will be changes while we work toward our first release. However, these should represent most of the major features."),Object(c.b)("h1",{id:"general-account-functions"},"General Account Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Account Check"),":"),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"Checks user accounts returns true if correct.")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'example: \n{\n"act":"account_check",\n"devid":"",\n"appid":"",\n"accout":"",\n"passphrase":""\n}\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Create a User"),":"),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"Creates Account based on the included criteria ")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'example: \n{\n"act"="create_account"\n"devid"="",\n"appid"="",\n"account"="",\n"passphrase"="",\n"email"=""\n}\n')))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Create a Creator Account"),":"),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"Creates Developer account")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'example: \n{\n"act"="create_creator_account"\n"devid"="",\n"appid"="",\n"devName"="",\n"contactName"="",\n"contactEmail"="",\n"openseed"=""\n}\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Create App or Game"),":"),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"Creates Application and associates it with the developer.")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'example: \n{\n"act"="create_app"\n"devid"="",\n"appid"="",\n"appName"=""\n}\n')))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Create Profile"),":"),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"Creates the long form profile for users,developers, and applications. Called after the ids have been created.")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'example: \n{\n"act":"set_profile",\n"devid":"",\n"appid":"",\n"token":"",\n"data1":"",\n"data2":"",\n"data3":"",\n"data4":"",\n"data5":"",\n"type":""\n}\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"}," Add to History")," :"),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"Adds to the history record for the user")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'example:\n{\n"act":"update_history",\n"token":"",\n"type":"",\n"appPub":"",\n"data":""\n}\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Get History")," : "),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"Returns the history for a specific account. Optionally you may define a specific application and a total count.")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'example:\n{\n"act":"get_history",\n"devid":"",\n"appid":"",\n"account":"",\n"apprange":"",\n"count":""\n}\n')))),Object(c.b)("h1",{id:"hive-account-functions"},"Hive Account Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Send Payment (Hive)")," : "),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"Returns the history for a specific account. Optionally you may define a specific application and a total count.")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'example:\n{\n"act":"hive_send_payment",\n"devid":"",\n"appid":"",\n"account":"",\n"apprange":"",\n"count":""\n}\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Flush Keys (Hive)")," : "),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"Not needed for most operations as the deletion of keys is a part of every request that requires one. However, when OpenSeed creates an account for a user the keys are stored for fast access. This function can be used to remove the keys from our server.")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'example:\n{\n"act":"hive_flush_keys",\n"devid":"",\n"appid":"",\n"hiveaccount":"",\n}\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Get Account (Hive)"),":"),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"retrieves the users profile from hive node")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'example:\n{\n"act":"get_hive_account",\n"devid":"",\n"appid":"",\n"account":"",\n}\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Get Full Account (Hive)"),":"),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"retrieves all user info from hive node")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'example:\n{\n"act":"get_hive_account",\n"devid":"",\n"appid":"",\n"account":"",\n}\n')))))}l.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},u=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||c;return n?r.a.createElement(d,p({ref:t},i,{components:n})):r.a.createElement(d,p({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<c;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);