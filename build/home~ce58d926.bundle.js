(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0VEO":function(e,t,n){e.exports=n.p+"0.bundle.worker.js"},"1Nrx":function(e,t,n){var r=n("LboF"),a=n("usnk");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},"7a9B":function(e,t,n){var r=n("LboF"),a=n("yt4Z");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},UmoI:function(e,t,n){var r=n("LboF"),a=n("yA1t");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},bfV8:function(e,t,n){"use strict";n.r(t);var r=n("cDcd"),a=n.n(r),i=n("oncg"),o=n("ufU5"),l=n("w0S+"),c=(n("1Nrx"),function(e){var t=e.title,n=e.children;return a.a.createElement("div",{className:"info-box"},a.a.createElement("h3",null,t),n)}),s=n("jWRA"),u=n("Kvkj"),d=n.p+"ecfed5f6bafe4b0d34d657c504146eb8.png";n("UmoI"),t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"title"},a.a.createElement("img",{src:d,alt:"Webrix logo",loading:"lazy"}),a.a.createElement("h2",null,"Powerful building blocks for React-based web applications"),a.a.createElement("div",{className:"actions"},a.a.createElement(u.a,null,a.a.createElement(i.Link,null,"Get Started")),a.a.createElement(u.a,{type:u.a.Types.SECONDARY},a.a.createElement(i.Link,{to:s.a.path},"Documentation")))),a.a.createElement(o.a,null),a.a.createElement(u.b,null,a.a.createElement("section",null,a.a.createElement(c,{title:"Amazing"},a.a.createElement("p",null,a.a.createElement(l.a,{words:20})),a.a.createElement("p",null,a.a.createElement(l.a,{words:50}))),a.a.createElement(c,{title:"Awesome"},a.a.createElement("p",null,a.a.createElement(l.a,{words:20})),a.a.createElement("p",null,a.a.createElement(l.a,{words:50}))),a.a.createElement(c,{title:"Incredible"},a.a.createElement("p",null,a.a.createElement(l.a,{words:20})),a.a.createElement("p",null,a.a.createElement(l.a,{words:50}))))))}},ufU5:function(e,t,n){"use strict";(function(e){var r=n("cDcd"),a=n.n(r),i=n("Kvkj"),o=(n("7a9B"),function(e){return"OffscreenCanvas"in window&&"transferControlToOffscreen"in e});t.a=function(){var t=Object(r.useRef)(),l=Object(r.useRef)(),c=Object(r.useRef)(new Worker(e,void 0)),s=Object(r.useCallback)((function(){if(o(t.current)){var e=t.current,n=e.clientWidth,r=e.clientHeight;c.current.postMessage({type:"resize",size:{width:n,height:r}})}else l.current.resize()}),[c.current]);return Object(r.useEffect)((function(){if(o(t.current)){t.current.width=t.current.clientWidth,t.current.height=t.current.clientHeight;var e=t.current.transferControlToOffscreen();c.current.postMessage({type:"canvas",canvas:e},[e])}else Promise.all([n.e(29),n.e(8),n.e(15),n.e(23),n.e(10),n.e(19),n.e(11),n.e(16),n.e(26),n.e(14),n.e(20),n.e(9),n.e(13),n.e(6),n.e(28),n.e(5),n.e(21),n.e(12),n.e(7),n.e(27),n.e(24),n.e(25),n.e(22),n.e(18),n.e(17),n.e(30),n.e(36)]).then(n.bind(null,"4dGD")).then((function(e){var n=e.Engine;l.current=new n(t.current)}));return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s),c.current.terminate()}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("canvas",{id:"scene",ref:t}),a.a.createElement(i.c,null))}}).call(this,n("0VEO"))},usnk:function(e,t,n){(t=n("JPst")(!1)).push([e.i,".info-box{margin:0 20px}.info-box h3{font-weight:100;letter-spacing:2px;text-transform:uppercase;font-size:2em;margin:0 0 10px}\n",""]),e.exports=t},"w0S+":function(e,t,n){"use strict";n("cDcd");var r="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",a=r.split(" ");t.a=function(e){for(var t=e.words,n="",i=0;i<t/a.length-1;i++)n+=r+" ";return n+=a.slice(0,t%a.length).join(" ")}},yA1t:function(e,t,n){(t=n("JPst")(!1)).push([e.i,"#route-home{position:relative;background-color:#fff;padding-top:0}#route-home .title{position:absolute;top:50vh;left:50%;color:white;transform:translate(-50%, -50%);display:flex;flex-direction:column;align-items:center}@media screen and (max-width: 768px){#route-home .title img{width:300px}}#route-home .title h2{font-weight:normal;font-size:1em;text-align:center;margin:0;text-shadow:0 0 16px #162447}#route-home .title .actions{margin-top:15px;display:flex;justify-content:center}#route-home .title .actions .button+.button{margin-left:10px;color:#fff}#route-home section{display:flex;padding:30px 0}@media screen and (max-width: 768px){#route-home section{flex-direction:column}}\n",""]),e.exports=t},yt4Z:function(e,t,n){(t=n("JPst")(!1)).push([e.i,"#route-home #scene{width:100%;height:110vh;background-color:#223870;pointer-events:none;user-select:none}#route-home .divider{width:100%;position:absolute;height:10vh;top:100vh;left:0}#route-home .divider path{fill:#fff}\n",""]),e.exports=t}}]);