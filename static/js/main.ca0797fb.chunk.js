(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,a,r){e.exports=r.p+"static/media/preloader.217785e6.gif"},44:function(e,a,r){e.exports=r(75)},53:function(e,a,r){},55:function(e,a,r){},75:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),o=r(13),c=r.n(o),l=r(11),s=r(15),i=r(33),u=r(34),d=(r(53),r(35)),p=r(36),h=r(42),m=r(37),f=r(43),g=r(9),E=r(2),F=Object(E.a)(),b=function(e){var a=e.styleToText;return n.a.createElement("div",{className:""},n.a.createElement("p",{className:"text-under-searchfield text-center",style:a},"\u0424\u0440\u0430\u0437\u0430 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f GitHub"))},S=function(e){var a=e.onFocusChange,r=e.styleToSearchField,t=e.onValueChange,o=e.onBlurChange,c=e.progressBar,l=e.defaultValueForSearch;return n.a.createElement("div",{className:"searchField-wrapper",style:r},n.a.createElement("input",{onFocus:a,onBlur:o,onChange:t,defaultValue:l,onKeyPress:t,className:"searchField text-center",type:"search",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f GitHub"}),n.a.createElement("div",{className:"test",style:c}))},v=function(e){var a=e.isDisabled,r=e.onClick;return n.a.createElement("div",{className:"button-wrapper flex-center"},n.a.createElement("input",{id:"buttonID",className:"button",type:"button",disabled:a,value:"\u041d\u0430\u0439\u0442\u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438",onClick:r}))},y=r(18),C=function(e){var a=e.isDisabledButton,r=e.defaultValueForSearch,t=e.handleButtonClick,o=e.handleSearchFieldFocus,c=e.handleSearchFieldBlur,l=e.handleSearchFieldChange,s=e.line,i=e.textUnderSearchFieldColor,u=e.progressBar;return n.a.createElement("div",{className:"app-grid-wrapper"},n.a.createElement("div",{className:"content content-position flex-center column-flex-direction"},n.a.createElement(b,{styleToText:{color:i}}),n.a.createElement(S,{className:"",onBlurChange:c,onFocusChange:o,onValueChange:l,defaultValueForSearch:r,styleToSearchField:{borderBottom:s},progressBar:{width:u}}),n.a.createElement(y.a,{to:"/results",style:{textDecoration:"none"}},n.a.createElement(v,{isDisabled:a,onClick:t}))))},B=r(39),R=r.n(B),w=function(){return n.a.createElement("div",{className:"preloader-wrapper flex-center"},n.a.createElement("img",{src:R.a,alt:"preloader"}))},k=function(e){e.id;var a=e.name,r=e.avatarURL,t=e.linkToRepo;return n.a.createElement("div",{className:"Repo-wrapper flex-center"},n.a.createElement("img",{className:"avatar",src:r,alt:"avatar"}),n.a.createElement("p",{className:""},a),n.a.createElement("a",{className:"link-to-repo",href:t,target:"_blank",rel:"noopener noreferrer"}," \u2192 "))},x=function(e){var a=e.repos,r=e.currentRequest;return"facebook"===r&&(r=""),n.a.createElement("div",null,n.a.createElement("h1",null,'Search repositories like "',r,'"'),a.map(function(e,r){return n.a.createElement(k,{key:a[r].id,id:a[r].id,name:a[r].name,avatarURL:a[r].owner.avatar_url,linkToRepo:a[r].html_url})}))},N=(r(55),"FETCH_REPOS_PENDING"),O="FETCH_REPOS_SUCCESS",_="FETCH_REPOS_ERROR",j=r(22),L=r.n(j),D=r(40),U=r(41),P=r.n(U).a.create({baseURL:"https://api.github.com/",timeout:3e4});P.defaults.headers.post["Content-Type"]="application/json",P.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),P.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)});var H=P,V={repos:{getRepos:function(){var e=Object(D.a)(L.a.mark(function e(a){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.get("search/repositories?q=".concat(a));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.warn("catch :: repos :: getRepos",e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(a){return e.apply(this,arguments)}}()}},T=function(e){return function(e,a){return e({type:N,payload:!0}),V.repos.getRepos(a().changeSearchBlockReducer.searchFieldValue).then(function(a){return e({type:O,payload:a})},function(a){return e({type:_,payload:a})})}};var A=function(e){function a(){return Object(d.a)(this,a),Object(h.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.repos,r=e.searchFieldValue,t=e.isDisabledButton,o=e.isShowPreloader,c=e.isLoaded,l=e.line,s=e.textUnderSearchFieldColor,i=e.progressBar,u=e.buttonClick,d=e.searchFieldFocus,p=e.searchFieldBlur,h=e.searchFieldChange;return n.a.createElement("div",{className:"App"},n.a.createElement(g.b,{history:F},n.a.createElement(g.a,{path:"/",exact:!0,render:function(){return n.a.createElement(C,{isDisabledButton:t,handleSearchFieldBlur:p,handleSearchFieldFocus:d,handleSearchFieldChange:h,handleButtonClick:u,defaultValueForSearch:r,line:l,textUnderSearchFieldColor:s,progressBar:i})}}),n.a.createElement(g.a,{path:"/results",exact:!0,render:function(){return o||!c?n.a.createElement("div",{className:"app-grid-wrapper"},n.a.createElement("div",{className:"content-position flex-center column-flex-direction"},n.a.createElement(w,null))):n.a.createElement("div",{className:"app-grid-wrapper2"},n.a.createElement(x,{repos:a,currentRequest:r}))}})))}}]),a}(t.Component),I=Object(s.b)(function(e){return{repos:e.changeSearchBlockReducer.repos,searchFieldValue:e.changeSearchBlockReducer.searchFieldValue,isDisabledButton:e.changeSearchBlockReducer.isDisabledButton,isShowPreloader:e.changeSearchBlockReducer.isShowPreloader,isLoaded:e.changeSearchBlockReducer.isLoaded,line:e.styleReducer.line,textUnderSearchFieldColor:e.styleReducer.textUnderSearchFieldColor,progressBar:e.styleReducer.progressBar}},function(e){return{buttonClick:function(a){return e(T())},searchFieldFocus:function(a){return e({type:"SEARCH_FIELD_FOCUS",payload:{line:"1px solid rgba(96, 64, 176, 1)",textUnderSearchFieldColor:"rgba(96, 64, 176, 1)",progressBar:"100%"}})},searchFieldBlur:function(a){return e({type:"SEARCH_FIELD_BLUR",payload:{line:"1px solid rgba(66, 66, 66, 0.4)",textUnderSearchFieldColor:"rgba(66, 66, 66, 0.4)",progressBar:"0%"}})},searchFieldChange:function(a){return e(function(e){return"Enter"===e.key&&e.target.value?(F.push("/results"),T()):{type:"CHANGE_SEARCH_FIELD",payload:e}}(a))}}})(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=r(10),q={searchFieldValue:"",isDisabledButton:!0,isShowPreloader:!0,repos:[],isLoaded:!1},J={line:"",textUnderSearchFieldColor:"",progressBar:"0%"},W=Object(l.c)({changeSearchBlockReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CHANGE_SEARCH_FIELD":return Object(G.a)({},e,{searchFieldValue:a.payload.target.value,isDisabledButton:!a.payload.target.value});case N:return Object(G.a)({},e,{isShowPreloader:a.payload,isLoaded:!a.payload});case O:if(200===a.payload.status&&a.payload.data.items.length)return Object(G.a)({},e,{isShowPreloader:!1,repos:a.payload.data.items,isLoaded:!0});break;case _:return console.warn("something goes wrong",a.payload),Object(G.a)({},e,{isShowPreloader:!0,isLoaded:!1});default:return e}},styleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"SEARCH_FIELD_FOCUS":case"SEARCH_FIELD_BLUR":return Object(G.a)({},e,a.payload);default:return e}}}),K=Object(i.createLogger)(),$=Object(l.d)(W,Object(l.a)(u.a,K));c.a.render(n.a.createElement(s.a,{store:$},n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.ca0797fb.chunk.js.map