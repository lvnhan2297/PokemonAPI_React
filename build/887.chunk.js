(self.webpackChunkapp_3=self.webpackChunkapp_3||[]).push([[887],{3887:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var n=a(7294),o=a(7703),s=a(4312),m=a(3138);function r(e,t,a,n,o,s,m){try{var r=e[s](m),c=r.value}catch(e){return void a(e)}r.done?t(c):Promise.resolve(c).then(n,o)}var c=function(e){return{type:s.Do,payload:{namePoke:e}}},l=function(e,t){return{type:s.Nq,payload:{namePoke:e,fetchedData:t}}},i=function(e,t){return function(){var a,n=(a=regeneratorRuntime.mark((function a(n){var o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,n(c(t));case 3:return a.next=5,(0,m.r)(e);case 5:return o=a.sent,a.next=8,n(l(t,o));case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log("fetchData error",a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})),function(){var e=this,t=arguments;return new Promise((function(n,o){var s=a.apply(e,t);function m(e){r(s,n,o,m,c,"next",e)}function c(e){r(s,n,o,m,c,"throw",e)}m(void 0)}))});return function(e){return n.apply(this,arguments)}}()},p=a(6272),u=a(9839),k=a(3727);const f=(0,o.$j)((function(e){return{detailPokemons:e.collectionPokeDetail}}),{fetchApiDetailPoke:i})((function(e){var t=e.api_evolution_poke,a=e.namePoke,o=e.fetchApiDetailPoke,s=e.detailPokemons;return(0,n.useEffect)((function(){var e=t.replace("-species","");o(e,a)}),[a,t]),n.createElement(n.Fragment,null,s[a]&&s[a].pokemons?n.createElement(k.rU,{to:"/pokemon/".concat(s[a].pokemons.id,"/").concat(a)},s[a].pokemons.sprites&&s[a].pokemons.sprites.versions&&s[a].pokemons.sprites.versions["generation-v"]&&n.createElement("img",{src:s[a].pokemons.sprites.versions["generation-v"]["black-white"].animated.front_default||s[a].pokemons.sprites.front_default})):n.createElement(u.Z,{loading:!0}))})),d=(0,o.$j)((function(e){return{detailPokemons:e.collectionPokeDetail}}),{fetchApiDetailPoke:i})((function(e){var t=e.pokemons,a=e.fetchApiDetailPoke,o=e.detailPokemons;return(0,n.useEffect)((function(){if(t.species){var e=t.species.url;a(e,t.name)}}),[a,t.species]),n.createElement(n.Fragment,null,o[t.name]&&n.createElement("div",{className:"columns detail-poke-init"},n.createElement("div",{className:"pokemon column"},n.createElement("div",{className:"card has-text-weight-bold has-text-white card--blastoise"},n.createElement("div",{className:"title"},"Info ",t.name,o[t.name].pokemons.sprites&&o[t.name].pokemons.sprites.versions&&o[t.name].pokemons.sprites.versions["generation-v"]&&n.createElement("img",{src:o[t.name].pokemons.sprites.versions["generation-v"]["black-white"].animated.front_default||o[t.name].pokemons.sprites.front_default})),n.createElement("div",{className:"content-info-detail-poke"},n.createElement("div",{className:"info-detail-poke-item"},n.createElement("div",{className:"cate-info"},"color:",o[t.name].pokemons.color&&n.createElement("span",{className:"value-cate-info"},n.createElement(k.rU,{to:"/pokemon-color/".concat(o[t.name].pokemons.color.url.split("/")[o[t.name].pokemons.color.url.split("/").length-2]),style:{color:"".concat(o[t.name].pokemons.color.name)}},o[t.name].pokemons.color.name))),n.createElement("div",{className:"cate-info"},"exp:",n.createElement("span",{className:"value-cate-info",style:{color:"#64fc64"}},t.base_experience," xp")),n.createElement("div",{className:"cate-info"},"egg groups:",o[t.name].pokemons.egg_groups&&n.createElement("span",{className:"value-cate-info"},o[t.name].pokemons.egg_groups.map((function(e,t){return n.createElement(k.rU,{key:t,to:e.url},0!==t&&", ",e.name)})))),n.createElement("div",{className:"cate-info"},"habitat:",o[t.name].pokemons.habitat?n.createElement("span",{className:"value-cate-info"},n.createElement(k.rU,{to:o[t.name].pokemons.habitat.url},o[t.name].pokemons.habitat.name.replace("-"," ")),("cave"===o[t.name].pokemons.habitat.name?"🕳️":"forest"===o[t.name].pokemons.habitat.name&&"🌲")||"grassland"===o[t.name].pokemons.habitat.name&&"🌿"||"rare"===o[t.name].pokemons.habitat.name&&"💫"||"rough-terrain"===o[t.name].pokemons.habitat.name&&"🎢"||"sea"===o[t.name].pokemons.habitat.name&&"🌊"||"urban"===o[t.name].pokemons.habitat.name&&"🏰"||"waters-edge"===o[t.name].pokemons.habitat.name&&"🏖️"||"mountain"===o[t.name].pokemons.habitat.name&&"⛰️"):n.createElement("span",{className:"value-cate-info"},"❔")),n.createElement("div",{className:"cate-info"},"hatching eggs time:",n.createElement("span",{className:"value-cate-info"},o[t.name].pokemons.hatch_counter," Day")),n.createElement("div",{className:"cate-info"},"evolution:",n.createElement("span",{className:"value-cate-info"},o[t.name].pokemons.evolves_from_species&&null!==o[t.name].pokemons.evolves_from_species?n.createElement(f,{namePoke:o[t.name].pokemons.evolves_from_species.name,api_evolution_poke:o[t.name].pokemons.evolves_from_species.url}):" 🥚"))))))))})),v=(0,o.$j)((function(e){return{detailPokemons:e.collectionPokeDetail}}),{fetchApiDetailPoke:i})((function(e){var t=e.fetchApiDetailPoke,a=e.detailPokemons,o=window.location.pathname,s=o.split("/")[o.split("/").length-1],m=o.split("/")[o.split("/").length-2];return(0,n.useEffect)((function(){var e="".concat(p.Dd,"/").concat(m);t(e,s)}),[t,s]),n.createElement(n.Fragment,null,a[s]&&n.createElement("div",{className:"container-detail-poke"},n.createElement("div",{className:"columns"},n.createElement("div",{className:"pokemon column"},n.createElement("div",{className:"card has-text-weight-bold has-text-white card--blastoise"},n.createElement("div",{className:"card-image"},n.createElement("div",{className:"card-image-container"},a[s].pokemons.sprites&&a[s].pokemons.sprites.other&&n.createElement("img",{src:a[s].pokemons.sprites.other.dream_world.front_default||a[s].pokemons.sprites.other["official-artwork"].front_default}))),n.createElement("div",{className:"card-content has-text-centered"},n.createElement("div",{className:"main"},n.createElement("div",{className:"title has-text-white"},a[s].pokemons.name),n.createElement("div",{className:"group-info-poke"},a[s].pokemons.stats&&a[s].pokemons.stats.map((function(e,t){return n.createElement("div",{className:"item-info-poke",key:t},e.stat.name," : ",e.base_stat,n.createElement("div",{className:"hp",style:{width:"".concat(e.base_stat,"px")}}))})))),n.createElement("div",{className:"stats columns"},n.createElement("div",{className:"column has-text-centered"},a[s].pokemons.types&&a[s].pokemons.types.map((function(e){return("fire"===e.type.name?"🔥":"grass"===e.type.name&&"🌳")||"poison"===e.type.name&&"☠️"||"flying"===e.type.name&&"✈️"||"bug"===e.type.name&&"🐞"||"fighting"===e.type.name&&"⚔️"||"ground"===e.type.name&&"⛰️"||"rock"===e.type.name&&"🗿"||"ghost"===e.type.name&&"👻"||"steel"===e.type.name&&"🔪"||"electric"===e.type.name&&"⚡"||"psychic"===e.type.name&&"🔮"||"ice"===e.type.name&&"❄️"||"dragon"===e.type.name&&"🐉"||"dark"===e.type.name&&"⚫"||"fairy"===e.type.name&&"🧚🏻‍♀️"||"unknown"===e.type.name&&"❔"||"normal"===e.type.name&&"😐"||"shadow"===e.type.name&&"👥"||"water"===e.type.name&&"💧"||"❔"})),n.createElement("br",null),n.createElement("span",{className:"tag"},"Type")),n.createElement("div",{className:"column has-text-centered center-column"},n.createElement("span",{className:"color-white"},a[s].pokemons.weight," lbs"),n.createElement("br",null),n.createElement("span",{className:"tag"},"Weight")),n.createElement("div",{className:"column has-text-centered"},n.createElement("span",{className:"color-white"},a[s].pokemons.height," m"),n.createElement("br",null),n.createElement("span",{className:"tag"},"Height"))))))),n.createElement(d,a[s])),a[s]&&n.createElement(u.Z,{loading:a[s].loading}))}))}}]);