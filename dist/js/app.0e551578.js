(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"0737":function(t,e,s){"use strict";s("82c1")},"2f39":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=s("2f62"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("mainmenu",{staticClass:"main-menu"}),s("div",{staticClass:"loaded-page"},[s("router-view")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-bar-container"},[s("ul",{staticClass:"menu"},[s("li",{staticClass:"list-item material-bubble"},[s("router-link",{staticClass:"menu-item",attrs:{to:"/",id:"menu1"}},[t._v("Logo")])],1),s("li",{staticClass:"list-item material-bubble"},[s("router-link",{staticClass:"menu-item",attrs:{to:"/",id:"menu2"}},[t._v("Home")])],1),s("li",{staticClass:"list-item material-bubble"},[s("router-link",{staticClass:"menu-item",attrs:{to:"/",id:"menu2"}},[t._v("Today")])],1),s("li",{staticClass:"list-item-search-bar"},[s("div",{staticClass:"search-bar"},[s("v-container",{staticClass:"grey"},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{staticClass:"search-field",attrs:{reverse:"",placeholder:"search",filled:"",rounded:"",dense:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendNewSearchTerm(t.thesearchterm)}},model:{value:t.thesearchterm,callback:function(e){t.thesearchterm=e},expression:"thesearchterm"}})],1)],1)],1)],1)]),s("li",{staticClass:"list-item"},[s("router-link",{staticClass:"menu-item",attrs:{to:"/"}},[s("font-awesome-icon",{attrs:{icon:"bell",pull:"left"}})],1)],1),s("li",{staticClass:"list-item"},[s("router-link",{staticClass:"menu-item",attrs:{to:"/"}},[s("font-awesome-icon",{attrs:{icon:"comment-dots",pull:"left"}})],1)],1),s("li",{staticClass:"list-item"},[s("router-link",{staticClass:"menu-item",attrs:{to:"/"}},[s("font-awesome-icon",{attrs:{icon:"user",pull:"left"}})],1)],1),s("li",{staticClass:"list-item"},[s("div",{staticClass:"menu-item",on:{click:function(e){t.isShow=!t.isShow}}},[s("font-awesome-icon",{attrs:{icon:"angle-down",pull:"left"}})],1),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"drop-down-menu",on:{click:function(e){t.isShow2=!t.isShow2}}},[s("li",[s("ul",[t._m(0),s("li",[s("v-container",{staticClass:"drop-down-menu-logo-container"},[s("v-row",{staticClass:"drop-down-menu-row",attrs:{"no-gutters":""}},[s("v-col",{attrs:{md:"4"}},[s("div",[s("p",[t._v("logo goes here")])])]),s("v-col",{attrs:{md:"8"}},[s("v-row",[s("div",[s("p",[t._v("other content here")])])]),s("v-row",[s("div",[s("p",[t._v("other content here")])])])],1)],1)],1)],1),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10)])])])])]),s("div",{staticClass:"list-item-search-bar-mobile"},[s("div",{staticClass:"search-bar"},[s("v-container",{staticClass:"grey"},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{staticClass:"search-field",attrs:{reverse:"",placeholder:"search",filled:"",rounded:"",dense:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendNewSearchTerm(t.thesearchterm)}},model:{value:t.thesearchterm,callback:function(e){t.thesearchterm=e},expression:"thesearchterm"}})],1)],1)],1)],1)])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"drop-down-menu-heading"},[t._v("Currently in")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"drop-down-menu-heading"},[t._v("Your Accounts")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"drop-down-menu-button"},[t._v("Add acount")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"drop-down-menu-button"},[t._v("Convert to business")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"drop-down-menu-heading"},[t._v("More options")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"drop-down-menu-button"},[t._v("Settings")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"drop-down-menu-button"},[t._v("Tune your home feed")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"drop-down-menu-button"},[t._v("Install the Windows app")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"drop-down-menu-button"},[t._v("Get Help")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"drop-down-menu-button"},[t._v("See terms and privacy")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"drop-down-menu-button"},[t._v("Log out")])])}],l=s("5530"),u=(s("99af"),{name:"mainmenu",data:function(){return{thesearchterm:"",isShow:!1,isShow2:!1}},computed:Object(l["a"])({},Object(n["c"])(["searchterm"])),watch:{searchterm:function(t,e){console.log("updating from ".concat(e," to ").concat(t)),this.changeSearchTerm(t)}},methods:Object(l["a"])(Object(l["a"])({},Object(n["b"])(["changeSearchTerm"])),{},{sendNewSearchTerm:function(t){this.thesearchterm="",this.changeSearchTerm(t),this.$router.push("/")}})}),d=u,m=(s("f04d"),s("2877")),h=Object(m["a"])(d,i,c,!1,null,"09e87e08",null),v=h.exports,f={name:"App",data:function(){return{}},components:{mainmenu:v}},p=f,g=(s("034f"),Object(m["a"])(p,o,r,!1,null,null,null)),_=g.exports,b=s("8c4f"),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("thesearchresults")],1)},w=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("stack",{attrs:{"column-min-width":300,"gutter-width":15,"gutter-height":15,"monitor-images-loaded":""},on:{scroll:t.scroll}},t._l(t.images,(function(e,a){return s("stack-item",{key:a,staticStyle:{transition:"transform 300ms"}},[s("a",[s("img",{staticClass:"images",attrs:{id:"image"+a,src:e.urls.small,alt:e.alt_description},on:{mouseover:function(e){return t.imgHovered(a)},mouseleave:function(e){return t.imgLeave(a)},click:function(e){return t.imgClicked(a)}}})])])})),1)],1)},k=[],S=(s("159b"),s("4de4"),s("a9e3"),s("a341")),O=s("bc3a"),x=s.n(O),E=s("1209"),j={name:"searchresults",data:function(){return{images:[],temparr:[],defaultsearchterm:"hockey",currentsearchterm:"",pagenum:"1",scrolledToBottom:!1}},components:{Stack:S["a"],StackItem:S["b"]},mounted:function(){this.scroll(),this.checkSearchterm()},computed:Object(l["a"])({},Object(n["c"])(["searchterm"])),watch:{searchterm:function(t,e){console.log("updating from ".concat(e," to ").concat(t)),this.searchUnsplash(t)}},methods:Object(l["a"])(Object(l["a"])({},Object(n["b"])(["changeFocusedImage"])),{},{checkSearchterm:function(){""==this.searchterm?(this.searchUnsplash(this.defaultsearchterm),this.currentsearchterm=this.defaultsearchterm):(this.searchUnsplash(this.searchterm),this.currentsearchterm=this.searchterm)},searchUnsplash:function(t){var e=this;x.a.get("/.netlify/functions/fetch-images?keyword=".concat(t,"&page=").concat(this.pagenum)).then((function(s){t!=e.currentsearchterm?(e.images=[],e.images=s.data.results):0==e.images.length?e.images=s.data.results:(Array.prototype.extend=function(t){t.forEach((function(t){this.push(t)}),this)},e.images.extend(s.data.results))})).catch((function(){e.images=[]}))},imgHovered:function(t){this.useHandCursor=!0,this.hoverAnim(t,.9)},imgLeave:function(t){this.hoverAnim(t,1,"reverse")},imgClicked:function(t){this.changeFocusedImage(this.images[t]),this.hoverAnim(t,1,"reverse"),this.$router.push("".concat(this.images[t].id))},hoverAnim:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=document.querySelector("#image"+t),n=document.getElementsByClassName("images");console.log("alltargets is: "+n),Object(E["default"])({targets:a,scale:{value:e,duration:700,direction:s,easing:"easeInOutBack"},update:function(t){if(null==s){for(var e=0;e<n.length;e++)n[e].style.filter="grayscale("+100*t.progress/100+"%)";a.style.filter="grayscale("+(t.progress+100-(t.progress+t.progress))+"%)"}else for(var o=0;o<n.length;o++)n[o].style.filter="grayscale("+(t.progress+100-(t.progress+t.progress))+"%)"}})},scroll:function(){var t=this;window.onscroll=function(){var e=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight;e&&t.reachedBottomOfPage()}},reachedBottomOfPage:function(){var t=Number(this.pagenum),e=t+1,s=String(e);this.pagenum=s,this.checkSearchterm()}})},T=j,$=(s("0737"),Object(m["a"])(T,y,k,!1,null,"6c0c669c",null)),A=$.exports,I={name:"Home",data:function(){return{}},components:{thesearchresults:A},methods:{methodHere:function(){}}},H=I,N=Object(m["a"])(H,C,w,!1,null,null,null),B=N.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"focuscard"},[s("v-container",{staticClass:"grey"},[s("v-row",{staticClass:"firstrow-main-image",attrs:{"no-gutters":""}},[s("v-col",[s("v-row",{staticClass:"box-container"},[s("v-col",{attrs:{md:"6",sm:"12"}},[t.image=={}?s("div",[s("p",[t._v("nothing yet")])]):s("div",[s("v-img",{staticClass:"hero-image",attrs:{id:t.image.id,src:t.image.urls.regular}})],1)]),s("v-col",{attrs:{md:"6",sm:"12"}},[s("div",{staticClass:"card-content"},[s("v-row",{staticClass:"card-container-menu"},[s("v-col",{attrs:{cols:"1"}},[s("router-link",{staticClass:"menu-item",attrs:{to:"/"}},[s("font-awesome-icon",{attrs:{icon:"ellipsis-h",pull:"left"}})],1)],1),s("v-col",{attrs:{cols:"1"}},[s("router-link",{staticClass:"menu-item",attrs:{to:"/"}},[s("font-awesome-icon",{attrs:{icon:"upload",pull:"left"}})],1)],1),s("v-col",{attrs:{cols:"3"}},[s("router-link",{staticClass:"menu-item",attrs:{to:"/"}},[s("font-awesome-icon",{attrs:{icon:"link",pull:"left"}})],1)],1),s("v-col",{staticClass:"second-last-column",attrs:{cols:"4"}},[s("div",{staticClass:"menu-item",on:{click:function(e){t.isShow=!t.isShow}}},[s("div",{staticClass:"drop-down-menu-button"},[s("p",{staticClass:"menu-text"},[t._v("currently in")]),s("font-awesome-icon",{attrs:{icon:"angle-down",pull:"left"}})],1)]),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"drop-down-menu focus-drop-down-menu",on:{click:function(e){t.isShow2=!t.isShow2}}},[s("li",[s("ul",[s("li",[s("p",{staticClass:"drop-down-menu-heading"},[t._v("Currently in")])]),s("li",[s("p",{staticClass:"drop-down-menu-title"},[t._v("Top Choices")])]),s("li",{staticClass:"drop-down-menu-content",on:{mouseover:function(e){return t.dothehover(1)},mouseout:function(e){t.seen1=!1}}},[s("div",{staticClass:"small-box"}),s("p",{staticClass:"text"},[t._v("Board A")]),t.seen1?s("router-link",{staticClass:"board-save-button",attrs:{to:"/",id:"save-button"}},[t._v("Save")]):t._e()],1),s("li",{staticClass:"drop-down-menu-content",on:{mouseover:function(e){return t.dothehover(2)},mouseout:function(e){t.seen2=!1}}},[s("div",{staticClass:"small-box"}),s("p",{staticClass:"text"},[t._v("Board B")]),t.seen2?s("router-link",{staticClass:"board-save-button",attrs:{to:"/",id:"save-button"}},[t._v("Save")]):t._e()],1),s("li",{staticClass:"drop-down-menu-content",on:{mouseover:function(e){return t.dothehover(3)},mouseout:function(e){t.seen3=!1}}},[s("div",{staticClass:"small-box"}),s("p",{staticClass:"text"},[t._v("Board C")]),t.seen3?s("router-link",{staticClass:"board-save-button",attrs:{to:"/",id:"save-button"}},[t._v("Save")]):t._e()],1),s("li",{staticClass:"drop-down-menu-content",on:{mouseover:function(e){return t.dothehover(4)},mouseout:function(e){t.seen4=!1}}},[s("div",{staticClass:"small-box"}),s("p",{staticClass:"text"},[t._v("Board D")]),t.seen4?s("router-link",{staticClass:"board-save-button",attrs:{to:"/",id:"save-button"}},[t._v("Save")]):t._e()],1)])])])]),s("v-col",{staticClass:"last-column",attrs:{cols:"3"}},[s("router-link",{staticClass:"menu-item",attrs:{to:"/",id:"save-button"}},[t._v("Save")])],1)],1),s("v-row",{staticClass:"card-container-title"},[s("v-col",{staticClass:"title1 card-heading-small",attrs:{cols:"12"}},[s("p",[t._v("Image ID:")])]),s("v-col",{staticClass:"body1",attrs:{cols:"12"}},[null!=t.image.id?s("div",[s("h4",[t._v(t._s(t.image.id))])]):s("div",[s("h4",[t._v("ID isn't available")])])]),s("v-col",{staticClass:"title2 card-heading-small",attrs:{cols:"12"}},[s("p",[t._v("Description:")])]),s("v-col",{staticClass:"body1",attrs:{cols:"12"}},[null!=t.image.description?s("div",[s("p",[t._v(t._s(t.image.description))])]):s("div",[s("p",[t._v("User didn't provide a description")])])]),s("v-col",{staticClass:"title2 card-heading-small",attrs:{cols:"12"}},[s("p",[t._v("Shot On:")])]),s("v-col",{staticClass:"body1",attrs:{cols:"12"}},[null!=t.image.created_at?s("div",[s("h4",[t._v(t._s(t.image.created_at))])]):s("div",[s("h4",[t._v("Creation date isn't available")])])]),s("v-col",{staticClass:"title2 card-heading-small",attrs:{cols:"12"}},[s("p",[t._v("By:")])]),s("v-col",{staticClass:"body1",attrs:{cols:"12"}},[null!=t.image.user.username?s("div",[s("p",[t._v(t._s(t.image.user.username))])]):s("div",[s("p",[t._v("User didn't provide user name")])])])],1),s("v-row",{staticClass:"card-container-link"},[s("v-col",{attrs:{xs:"12"}},[s("a",{attrs:{target:"_blank",href:""+t.image.links.html}},[t._v("source image")])])],1)],1)])],1)],1)],1),s("v-row",{staticClass:"secondrow-searchresults",attrs:{"no-gutters":""}},[s("v-col",[s("v-row",[s("v-col",[s("h3",[t._v("More Like This")])])],1),s("v-row",[s("v-col",[s("thesearchresults")],1)],1)],1)],1)],1)],1)},F=[],P={name:"focuscard",data:function(){return{image:{},isShow:!1,isShow2:!1,seen1:!1,seen2:!1,seen3:!1,seen4:!1}},components:{thesearchresults:A},mounted:function(){this.loadFocusedImage(this.focusedimageid)},computed:Object(l["a"])({},Object(n["c"])(["focusedimageid"])),watch:{focusedimageid:function(t,e){console.log("updating from ".concat(e," to ").concat(t)),this.loadFocusedImage(t)}},methods:{loadFocusedImage:function(t){this.image=t,0!=window.scrollY&&window.scroll({top:0,left:0,behavior:"smooth"})},dothehover:function(t){switch(t){case 1:this.seen1=!this.seen1;break;case 2:this.seen2=!this.seen2;break;case 3:this.seen3=!this.seen3;break;case 4:this.seen4=!this.seen4;break}}}},U=P,G=(s("8a85"),Object(m["a"])(U,M,F,!1,null,"46d9840e",null)),D=G.exports;a["default"].use(b["a"]);var L=[{path:"/",component:B},{path:"/:id",component:D}],R=new b["a"]({mode:"history",base:"/",routes:L}),Y=R,J=s("ce5b"),q=s.n(J),W=s("01e8"),z=s.n(W);s("bf40");a["default"].use(n["a"]);var K=new n["a"].Store({state:{searchterm:"",focusedimageid:{}},actions:{changeSearchTerm:function(t,e){var s=t.commit;s("CHANGE_SEARCH_TERM",e)},changeFocusedImage:function(t,e){var s=t.commit;console.log("vuex store - ACTION - changeFocusedImage id is: "+e),s("CHANGE_FOCUSED_IMAGE",e)}},mutations:{CHANGE_SEARCH_TERM:function(t,e){t.searchterm=e},CHANGE_FOCUSED_IMAGE:function(t,e){t.focusedimageid=e}}}),Q=s("ecee"),V=s("c074"),X=s("ad3d");s("aede");Q["c"].add(V["b"]),Q["c"].add(V["c"]),Q["c"].add(V["a"]),Q["c"].add(V["g"]),Q["c"].add(V["d"]),Q["c"].add(V["f"]),Q["c"].add(V["e"]),a["default"].component("font-awesome-icon",X["a"]),a["default"].config.productionTip=!1,a["default"].use(z.a),a["default"].use(q.a),a["default"].use(n["a"]),new a["default"]({router:Y,store:K,render:function(t){return t(_)}}).$mount("#app")},"82c1":function(t,e,s){},"85ec":function(t,e,s){},"8a85":function(t,e,s){"use strict";s("2f39")},"93ba":function(t,e,s){},aede:function(t,e,s){},f04d:function(t,e,s){"use strict";s("93ba")}});
//# sourceMappingURL=app.0e551578.js.map