(self.webpackChunkapp_3=self.webpackChunkapp_3||[]).push([[356],{9835:(e,t,n)=>{"use strict";n.d(t,{jL:()=>i,jx:()=>s});var r=n(4312),a=n(3138);function c(e,t,n,r,a,c,o){try{var u=e[c](o),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function u(e){c(o,r,a,u,l,"next",e)}function l(e){c(o,r,a,u,l,"throw",e)}u(void 0)}))}}var u=function(e){return{type:r.Ub,payload:{getDataBy:e}}},l=function(e,t,n){return{type:r.Fb,payload:{fetchedData:e,nextUrl:t,getDataBy:n}}},i=function(e,t){return function(){var n=o(regeneratorRuntime.mark((function n(r){var c,o,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r(u(t));case 3:return n.next=5,(0,a.r)(e);case 5:return c=n.sent,o=c.next,i=c.results,n.next=9,r(l(i,o,t));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("fetchData error",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},s=function(e,t){return function(){var n=o(regeneratorRuntime.mark((function n(r){var c,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r(u(t));case 3:return n.next=5,(0,a.r)(e);case 5:return c=n.sent,o=c.pokemon_species,n.next=9,r(l(o,null,t));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("fetchData error",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}},973:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7294),a=n(3727),c=n(6272),o=function(e){return e.split("/")[e.split("/").length-2]},u=function(e){return"".concat(c.S7,"/versions/generation-v/black-white/animated/").concat(e,".gif")},l=function(e){return"".concat(c.S7,"/").concat(e,".png")},i=function(e){return"".concat(c.S7,"/other/official-artwork/").concat(e,".png")};const s=function(e){var t=e.name,n=e.url;return r.createElement(r.Fragment,null,r.createElement("div",{className:"poke-card"},r.createElement("div",{className:"poke-card__inner"},r.createElement("div",{className:"poke-card__artwork",style:{backgroundImage:"url(".concat(i(o(n)),")")},onMouseOver:function(e){return e.target.style.backgroundImage="url(".concat(function(e){return"".concat(c.S7,"/other/dream-world/").concat(e,".svg")}(o(n)),")")},onMouseOut:function(e){return e.target.style.backgroundImage="url(".concat(i(o(n)),")")}}),r.createElement("div",{className:"poke-card__body row"},r.createElement("div",{className:"poke-card__avatar",style:{backgroundImage:"url(".concat(u(o(n))||l(o(n)),")")}}),r.createElement("div",{className:"poke-card__details"},r.createElement(a.rU,{className:"poke-card__title",to:{pathname:"/pokemon/"+o(n)+"/"+t},title:t},t),r.createElement("a",{className:"poke-card__username",href:"#",title:"Pokemon API"},"Pokemon API")))),r.createElement("div",{className:"poke-card__mobile-event",role:"button"})))}},8356:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(7294),a=n(7703),c=n(9835),o=n(9839),u=n(5697),l=n.n(u),i=n(6272),s=n(973);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p={collectionPokes:l().object.isRequired,fetchApiPoke:l().func.isRequired},m=function(e){var t=e.fetchApiPoke,n=e.collectionPokes,a="all",c="".concat(i.Dd,"?limit=24");return(0,r.useEffect)((function(){!Object.keys(n).includes(a)&&t(c,a)}),[]),(0,r.useEffect)((function(){var e=document.getElementById("nav").clientHeight,r=function(){n.all&&Math.ceil(window.innerHeight+window.scrollY)==document.body.offsetHeight+(57==e?100:150)&&setTimeout((function(){return t(n.all.nextUrl,a)}))};return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}),[t,n,a]),r.createElement(r.Fragment,null,r.createElement("div",{className:"row"},n.all&&n.all.pokemons.map((function(e,t){return r.createElement(s.Z,f({key:t},e))}))),n.all&&r.createElement(o.Z,{loading:n.all.loading}))};m.propTypes=p;const d=(0,a.$j)((function(e){return{collectionPokes:e.collectionPokes}}),{fetchApiPoke:c.jL})(m)}}]);