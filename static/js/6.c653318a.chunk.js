(window["webpackJsonpdragalia-lost"]=window["webpackJsonpdragalia-lost"]||[]).push([[6],{155:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(0),c=a.n(r),l=a(33),i=a(135),u=a(54),o=a(13),s=a(8),m=function(e,t){switch(e){case"adventurer":return function(e){var t,a,n=e.ex,r=e.id,c=e.mana,l=e.rarity,i=o.i["adventurerSkill_".concat(c)];return t="5"===l||"100001_01"===r?"5_".concat(c):"rest_".concat(c),c>=40?a="40":c>=10&&(a="10"),i+o.a[t].reduce(function(t,a){return e[a]?t+e[a]:t},0)+(o.i["fs_".concat(a)]||0)+o.i["coAbility_".concat(l,"_").concat(n)]}(t);case"weapon":return function(e){var t="4"===e.unbind?"4":"0",a=e.skill?o.i["itemSkill_".concat(t)]:0;return e.abilities11+e.abilities21+a}(t);case"wyrmprint1":case"wyrmprint2":return"4"===(a=t).unbind?a.abilities13+a.abilities23+a.abilities33:a.unbind>="2"?a.abilities12+a.abilities22+a.abilities32:a.abilities11+a.abilities21+a.abilities31;case"dragon":return function(e){var t=10*e.bond;return"4"===e.unbind?e.abilities12+e.abilities22+t+o.i.itemSkill_4:e.abilities11+e.abilities21+t+o.i.itemSkill_0}(t);default:return 0}var a},d=function(e,t){var a=["Hp","Atk"][t],n=["50","45","40","30","20","10","0"].indexOf(e.mana);return[e["McFullBonus".concat(a,"5")],e["Plus".concat(a,"4")],e["Plus".concat(a,"3")],e["Plus".concat(a,"2")],e["Plus".concat(a,"1")],e["Plus".concat(a,"0")],0].slice(n).reduce(function(e,t){return e+t},0)},f=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t)return{hp:0,str:0,might:0,augHp:0,augStr:0,tHp:0,tStr:0,tMight:0};var n=t.curRarity,r=t.rarity,c=t.level,l=t.augHp,i=void 0===l?0:l,u=t.augStr,o=void 0===u?0:u;c=Number(c),i=Number(i),o=Number(o),"adventurer"===e&&(r=5);var f,b,v,p,g=Object(s.b)(e),h=Object(s.d)("".concat(g,"_").concat(r)),O=0,E=0;c===h?(O=t.MaxHp,E=t.MaxAtk):("adventurer"===e?(f=t["MinHp".concat(n)],b=t["MinAtk".concat(n)],v="MinHp5",p="MinAtk5"):(f=t.MinHp,b=t.MinAtk,v="MinHp",p="MinAtk"),1===c?(O=f,E=b):(O=f+(c-1)/(h-1)*(t.MaxHp-t[v]),E=b+(c-1)/(h-1)*(t.MaxAtk-t[p])));"adventurer"===e&&(O+=d(t,0),E+=d(t,1)),O=Object(s.a)(O),E=Object(s.a)(E),a&&(O=Object(s.a)(1.5*O+.5*i),E=Object(s.a)(1.5*E+.5*o));var j=O+i,y=E+o,k=m(e,t),w=O+E+k,x=j+y+k;return{hp:O,str:E,might:w,augHp:i,augStr:o,tHp:j,tStr:y,tMight:x}},b=function(e,t){for(var a=0,n=0,r=0;r<e.length;r+=1){var c=t[e[r]];if(c){var l=o.g[c.type][c.level];a+=l[0],n+=l[1]}}return{hp:a,str:n}},v=function(e,t){if(!e.adventurer)return null;for(var a={},n=e.adventurer,r=e.wyrmprint1,c=e.wyrmprint2,l=e.dragon,i=0,u=0,m=0,d=0,v=0,p=n.element,g=0;g<o.j.length;g+=1){var h=o.j[g],O=e[h],E=("weapon"===h||"dragon"===h)&&O&&p===O.element,j=f(h,O,E);i+=j.tHp,u+=j.tStr,m+=j.tMight,d+=j.augHp,v+=j.augStr,a[h]=j}a.augments={hp:d,str:v,might:d+v};var y=function(e,t,a){var n=t.adventurer,r=t.dragon,c=n.element,l=n.weapon,i=["adventurer_".concat(c),l],u=o.e.filter(function(e){return i.some(function(t){return e.includes(t)})}),m=b(u,a),d={hp:0,str:0};if(r){var f=o.e.filter(function(e){return e.includes("dragon_".concat(r.element))});d=b(f,a)}var v=e.adventurer.tHp*m.hp*.01,p=e.adventurer.tStr*m.str*.01,g=e.dragon.tHp*d.hp*.01,h=e.dragon.tStr*d.str*.01,O=Object(s.a)(v)+Object(s.a)(g),E=Object(s.a)(p)+Object(s.a)(h);return{hp:O,str:E,might:O+E}}(a,e,t);a.halidom=y;var k=0,w=0;if(l&&p===l.element){var x="4"===l.unbind?"2":"1";k=l["incHP".concat(x)],w=l["incSTR".concat(x)]}n.incSTR2&&n.mana>=n.STRLV2?w+=n.incSTR2:n.incSTR1&&n.mana>=n.STRLV1&&(w+=n.incSTR1),e.weapon&&e.weapon.incSTR&&p.includes(e.weapon.reqEle)&&(w+=e.weapon.incSTR);var S=0,H=0,P=!1,M=!1;if(r){var C=r.unbind,_=1;"4"===C?(_=3,P=!0):C>="2"&&(_=2),S+=r["incHP".concat(_)]||0,H+=r["incSTR".concat(_)]||0}if(c){var D=c.unbind,R=1;"4"===D?(R=3,M=!0):D>="2"&&(R=2),S+=c["incHP".concat(R)]||0,H+=c["incSTR".concat(R)]||0}S>8&&(S=8),!(H>20)||P&&M||(H=20),k+=S,w+=H;var A=i+y.hp,T=u+y.str,N=m+y.might,F=A*k*.01,I=T*w*.01;return a.ability={hp:Object(s.a)(F),str:Object(s.a)(I),might:0},A+=F,T+=I,a.total={hp:A,str:T,might:N},a},p=function(e,t){var a=e.adventurer,n=e.weapon,r=e.wyrmprint1,c=e.wyrmprint2,l=e.dragon,i=t.dungeon,u=t.str,s=t.multiplier,m=[],d=1*t.def+1*t.exDef;a.incDef2&&a.mana>=a.defLV2?(d+=a.incDef2,m.push("adventurer,def,".concat(a.incDef2))):a.incDef1&&a.mana>=a.defLv1&&(d+=a.incDef1,m.push("adventurer,def,".concat(a.incDef1))),n&&n.incDef&&a.element.includes(n.reqEle)&&(d+=n.incDef,m.push("weapon,def,".concat(n.incDef)));var f=0,b=0,v=0,p=0,g=o.n[i].element;if(r){var h=1;if("4"===r.unbind?h=3:r.unbind>="2"&&(h=2),r.incHP1){var O=r["incHP".concat(h)];f+=O,m.push("wyrmprint1,hp,".concat(O))}if(r.incDef1){var E=r["incDef".concat(h)];b+=E,m.push("wyrmprint1,def,".concat(E))}if(r.dungeon===i){var j=r["reduce".concat(h)];p+=j,m.push("wyrmprint1,reduce,".concat(j))}if(r.resEle===g){var y=r["incRes".concat(h)];v+=y,m.push("wyrmprint1,res,".concat(y))}}if(c){var k=1;if("4"===c.unbind?k=3:c.unbind>="2"&&(k=2),c.incHP1){var w=r["incHP".concat(k)];(f+=w)>8?m.push("wyrmprint2,hp,".concat(w," -> ").concat(8-f+w)):m.push("wyrmprint2,hp,".concat(w))}if(c.incDef1){var x=c["incDef".concat(k)];(b+=x)>20?(m.push("wyrmprint2,def,".concat(x," -> ").concat(20-b+x)),b=20):m.push("wyrmprint2,def,".concat(x))}if(c.dungeon===i){var S=c["reduce".concat(k)];(p+=S)>25?m.push("wyrmprint2,reduce,".concat(S," -> ").concat(25-p+S)):m.push("wyrmprint2,reduce,".concat(S))}if(c.resEle===g){var H=c["incRes".concat(k)];(v+=H)>15?m.push("wyrmprint2,res,".concat(H," -> ").concat(15-v+H)):m.push("wyrmprint2,res,".concat(H))}}var P=v;if((l||{}).resEle===g){var M=l.incRes;P+=M,m.push("dragon,res,".concat(M))}var C=1;a.element===o.d[g].da?C=.5:a.element===o.d[g].ad&&(C=1.5);var _=5/3*u*s*C*(1-.01*p)*(1-.01*P)/(a.DefCoef*(1+.01*d)),D=function(e){var t=Math.round(e);return Math.abs(e-t)<1e-5?t:Math.floor(e)};return{min:D(.95*_),max:D(1.05*_),arr:m}},g=a(11),h=a(3),O=["adventurer","weapon","wyrmprint1","wyrmprint2","dragon","augments","ability","halidom"];function E(e){var t=e.collapse,a=e.details,n=c.a.useContext(u.c).lang,l=Object(r.useMemo)(function(){return{body:Object(h.a)("body",{collapse:t}),footer:Object(h.a)("footer",{collapse:t})}},[t]),i=l.body,o=l.footer;return a?c.a.createElement("div",{id:"stats-table"},c.a.createElement("div",{className:"header"},c.a.createElement("span",null),c.a.createElement("span",null,"HP"),c.a.createElement("span",null,Object(s.k)("str",n)),c.a.createElement("span",null,Object(s.k)("might",n))),c.a.createElement("div",{className:i},O.map(function(e){var t=a[e],l=t.hp,i=t.str,u=t.might;return c.a.createElement(r.Fragment,{key:e},c.a.createElement("span",null,Object(s.k)(e,n)),c.a.createElement("span",null,l),c.a.createElement("span",null,i),c.a.createElement("span",null,u))})),c.a.createElement("div",{className:o},c.a.createElement("span",null,Object(s.k)("total",n)),c.a.createElement("span",null,Object(s.a)(a.total.hp)),c.a.createElement("span",null,Object(s.a)(a.total.str)),c.a.createElement("span",null,a.total.might))):null}E.defaultProps={collapse:!1};var j=c.a.memo(E),y=a(6);function k(e){var t=e.damageState,a=t.arr,n=t.hp,r=t.max,l=t.min,i=c.a.useContext(u.c).lang,o=c.a.useMemo(function(){return n>r?100:n<=l?0:100*(n-1-l)/(r-l)},[n,l,r]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"damage-bar",style:{background:"linear-gradient(120deg, green, #4ba946 ".concat(o,"%, #deb887 ").concat(o+5,"%, #be3223 , #800000)")}},"".concat(o.toFixed(2),"%")),c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",{style:{fontWeight:"bold"}},c.a.createElement("td",null,"HP "),c.a.createElement("td",null,"MIN"),c.a.createElement("td",null,"MAX")),c.a.createElement("tr",null,c.a.createElement("td",null,n),c.a.createElement("td",null,l),c.a.createElement("td",null,r)),a.map(function(e){var t=e.split(",");return c.a.createElement("tr",{key:"".concat(t[0],"_").concat(t[1])},c.a.createElement("td",null,Object(s.k)(t[0],i)),c.a.createElement("td",null,Object(s.k)(t[1],i)),c.a.createElement("td",null,Object(s.k)(t[2],i)))}))))}k.defaultProps={arr:[],hp:0,max:0,min:0};var w=c.a.memo(k);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(y.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var H=Object.keys(o.n),P=["exHp","exDef","hp","def"];var M=c.a.memo(function(e){var t=e.stats,a=e.totalHp,l=Object(r.useState)("hide"),i=Object(n.a)(l,2),m=(i[0],i[1]);Object(r.useEffect)(function(){setTimeout(function(){m(null)},250)},[]);var d=Object(r.useState)("hzd"),f=Object(n.a)(d,2),b=f[0],v=f[1],g=Object(r.useState)(!1),O=Object(n.a)(g,2),E=O[0],j=O[1],k=Object(r.useState)(""),x=Object(n.a)(k,2),M=x[0],C=x[1],_=Object(r.useState)(""),D=Object(n.a)(_,2),R=D[0],A=D[1];Object(r.useEffect)(function(){var e=o.n[b];C(e.str),A(e.multiplier)},[b]);var T=Object(r.useState)({exHp:"",exDef:"",hp:"",def:""}),N=Object(n.a)(T,2),F=N[0],I=N[1],K=function(e){var t=e.target,a=t.name,n=t.value;I(function(e){return S({},e,Object(y.a)({},a,n))})};Object(r.useEffect)(function(){if(t.adventurer){var e=t.adventurer,a=e.ex,n=e.rarity,r=e.weapon;if("Axe"===r||"Lance"===r){var c;"Axe"===r?c="exDef":"Lance"===r&&(c="exHp");var l=o.b["".concat(r,"_").concat(n)][a];if(l===F[c])return;I(function(e){return S({},e,Object(y.a)({},c,l))})}}},[t.adventurer]);var L=c.a.useMemo(function(){var e=F.exHp,n=F.exDef,r=F.def,c=p(t,{dungeon:b,str:M,multiplier:R,def:r,exDef:n});return S({hp:Object(s.a)(a*(1+.01*F.hp)*(1+.01*e))},c)},[t,a,b,M,R,F]),z=Object(h.a)("col-2","animated-collapse",{collapse:!E});return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-2"},c.a.createElement(u.m,{options:H,label:"dungeon",value:b,onChange:function(e){var t=e.target.value;v(t)}}),c.a.createElement(u.b,{checked:E,label:"setting",onChange:j})),c.a.createElement("div",{className:z},c.a.createElement(u.k,{label:"str",value:M,onChange:function(e){C(e.target.value)}}),c.a.createElement(u.k,{label:"multiplier",value:R,type:"float",onChange:function(e){A(e.target.value)}})),c.a.createElement("div",{className:"col-2"},P.map(function(e){return c.a.createElement(u.k,{key:e,adornment:"%",label:e,value:F[e],onChange:K})})),c.a.createElement(w,{damageState:L}))});var C={resetStats:g.d},_=Object(l.b)(function(e){return{stats:e.stats,halidom:e.halidom}},C)(function(e){var t=e.stats,a=e.halidom,r=e.setPanel,l=e.resetStats,o=c.a.useState(!0),s=Object(n.a)(o,2),m=s[0],d=s[1],f=c.a.useMemo(function(){return v(t,a)},[t,a]);return c.a.createElement("div",{id:"col1"},c.a.createElement("div",{className:"col-2"},c.a.createElement(u.b,{checked:m,disabled:!f,label:"CHECK",onChange:d}),c.a.createElement(i.a,{variant:"outlined",onClick:function(){r("stats"),l()}},"RESET")),c.a.createElement(j,{details:f,collapse:m}),t.adventurer&&m&&c.a.createElement(M,{stats:t,totalHp:f.total.hp}))}),D={mana_3:["30","20","10","0"],mana_4:["40","30","20","10","0"],mana_5:["50","45","40","30","20","10","0"],curRarity_3:["5","4","3"],curRarity_4:["5","4"],curRarity_5:["5"],rest:["4","3","2","1","0"]};var R=c.a.memo(function(e){var t=e.label,a=e.value,n=e.rarity,r=e.disabled,l=e.onChange,i=c.a.useMemo(function(){return"curRarity"===t||"mana"===t?D["".concat(t,"_").concat(n)]:"ex"===t||"unbind"===t?D.rest:[]},[t,n]);return c.a.createElement(u.m,{label:t,value:a,options:i,disabled:r,onChange:l})});var A={selectFocus:g.g,selectItem:g.h},T=Object(l.b)(function(e,t){var a=e.focused,n=e.stats,r=t.statsKey;return{scale:a===r&&!n[r]}},A)(function(e){var t=e.image,a=e.name,n=e.scale,r=e.statsKey,l=e.setPanel,i=e.selectFocus,o=e.selectItem,m=c.a.useContext(u.c).lang,d=Object(s.b)(r),f=a?a[m]:Object(s.k)(r,m),b=Object(h.a)("lg",{scale:n});return c.a.createElement("div",null,c.a.createElement(u.j,{field:d,image:t,size:b,tabIndex:"-1",onClick:function(){n||o(r),l("stats"),i(r),Object(s.j)(s.g.col3)}}),c.a.createElement("div",null,f))});function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach(function(t){Object(y.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var I={updateItem:g.j},K=Object(l.b)(null,I)(function(e){var t=e.statsKey,a=e.item,r=e.setPanel,l=e.updateItem,i=a||{},o=i.bond,m=i.curRarity,d=i.ex,f=i.level,b=i.mana,v=i.name,p=i.rarity,g=i.unbind,h=i.augHp,O=void 0===h?"":h,E=i.augStr,j=void 0===E?"":E,k=Object(s.c)(a,t),w=c.a.useState({bond:o,level:f,augHp:O,augStr:j}),x=Object(n.a)(w,2),S=x[0],H=x[1],P=function(e){var n=e.target,r=n.name,c=n.value,i=function(e,n){if(S[e]&&n===S[e])return null;if(!S[e]&&n===a[e])return null;var r,c=Object(y.a)({},e,n);switch(e){case"augHp":case"augStr":r=Object(s.d)("augments"),c[e]=n>r?r:n;break;case"level":var l="adventurer"===t?m:p;r=Object(s.d)("adventurer_".concat(l),g),c.level=n>r?r:n;break;case"curRarity":c=F({},c,{level:Object(s.d)("adventurer_".concat(n)),mana:Object(s.d)("mana".concat(n)),ex:"5"===n?"4":"0"});break;case"mana":c.ex="50"===n?"4":"0";break;case"ex":c.mana="45";break;case"unbind":var i=Object(s.b)(t);c.level=Object(s.d)("".concat(i,"_").concat(p),n);break;case"bond":r=Object(s.d)("bond"),c.bond=n>r?r:n}return c}(r,c);if(null!==i){var u={statsKey:t,updates:i};if(Object.prototype.hasOwnProperty.call(S,r)){var o,d=S["".concat(r,"Id")];clearTimeout(d),d=setTimeout(function(){"level"!==r&&"bond"!==r||""!==i[r]||(i[r]=1,H(F({},S,Object(y.a)({},r,1)))),l(u)},1e3),H(F({},S,(o={},Object(y.a)(o,"".concat(r,"Id"),d),Object(y.a)(o,r,i[r]),o)))}else i.level&&H(F({},S,{level:i.level})),l(u)}};return c.a.createElement("div",{className:"stats-field",ref:s.g[t]},c.a.createElement(T,{name:v,statsKey:t,image:k,setPanel:r}),a&&("adventurer"===t?c.a.createElement("div",null,c.a.createElement(R,{label:"mana",value:b,rarity:m,onChange:P}),c.a.createElement(R,{label:"ex",value:d,onChange:P}),c.a.createElement(u.k,{label:"augHp",value:S.augHp,onChange:P}),c.a.createElement(u.k,{label:"augStr",value:S.augStr,onChange:P}),c.a.createElement(u.k,{label:"level",value:S.level,onChange:P}),c.a.createElement(R,{label:"curRarity",value:m,rarity:p,onChange:P})):c.a.createElement("div",null,c.a.createElement(u.k,{label:"level",value:S.level,onChange:P}),c.a.createElement(R,{label:"unbind",value:g,onChange:P}),c.a.createElement(u.k,{label:"augHp",value:S.augHp,onChange:P}),c.a.createElement(u.k,{label:"augStr",value:S.augStr,onChange:P}),"dragon"===t&&c.a.createElement(u.k,{label:"bond",value:S.bond,onChange:P}))))});var L=Object(l.b)(function(e){return{stats:e.stats}})(function(e){var t=e.setPanel,a=e.stats,r=c.a.useState("adventurer"),l=Object(n.a)(r,2),i=l[0],u=l[1];return c.a.useEffect(function(){var e=(a.adventurer||{}).id;u(void 0===e?"adventurer":e)},[a.adventurer]),c.a.createElement("div",{id:"col2"},o.j.map(function(e){var n=a[e],r=(n||{}).id,l=void 0===r?e:r;return c.a.createElement(K,{key:"".concat(i,"_").concat(l),statsKey:e,item:n,setPanel:t})}))}),z=["del","refresh","save"];var V={loadHalidom:g.b},q=Object(l.b)(function(e){var t=e.stats,a=t.adventurer,n=t.dragon,r=e.halidom,c=a||{};return{element:c.element,weapon:c.weapon,dragonEle:(n||{}).element,halidom:r}},V)(function(e){var t,a=e.element,n=e.weapon,r=e.dragonEle,l=e.halidom,i=e.loadHalidom;if(!a)return null;t=a===r?[a,n]:r?["adventurer_".concat(a),n,"dragon_".concat(r)]:["adventurer_".concat(a),n];var m=o.e.filter(function(e){return t.some(function(t){return e.includes(t)})});return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.i,{btns:z,onClick:function(e){switch(e.currentTarget.name){case"del":Object(s.h)("halidom");break;case"refresh":i();break;case"save":Object(s.i)("halidom",l)}}}),c.a.createElement("div",null,m.map(function(e){return c.a.createElement(u.f,{key:e,itemKey:e})})))}),J=a(28),U=a(149),B={weapon:[""].concat(Object(J.a)(o.k)),element:[""].concat(Object(J.a)(o.c)),rarity:["","5","4","3"],type:["","Core","Void","Limited"]};var W={selectFilter:g.e,resetFilters:g.c},X=Object(l.b)(function(e){return{filters:e.filters}},W)(function(e){var t=e.fields,a=e.filters,n=e.search,r=e.setSearch,l=e.resetFilters,o=e.selectFilter,m=c.a.useContext(u.c).lang,d=c.a.useCallback(function(e){o(e.target)},[o]);return c.a.createElement("div",{id:"filter-stats"},t.map(function(e){return c.a.createElement(u.m,{key:e,label:e,value:a[e],options:B[e],onChange:d})}),c.a.createElement(U.a,{variant:"filled",value:n,label:Object(s.k)("search",m),InputProps:{spellCheck:!1},onChange:function(e){r(e.target.value)}}),c.a.createElement(i.a,{color:"secondary",variant:"contained",onClick:function(){r(""),l()}},"RESET"))}),G=a(154),Q=a(153);var Y={selectItem:g.h},Z=Object(l.b)(function(e){return{focused:e.focused}},Y)(function(e){var t=e.focused,a=e.index,n=e.style,r=e.data,l=r.cols,i=r.field,o=r.arr,m=e.selectItem,d=c.a.useContext(u.c).lang,f=o[a],b=f.name[d],v=Object(s.c)(f,i);return c.a.createElement("div",{style:n,className:"item-list"},c.a.createElement(u.j,{field:i,image:v,onClick:function(){m({statsKey:t,item:f}),Object(s.j)(s.g[t],!0)}}),c.a.createElement("span",{className:"name"},b),l.map(function(e){if("weapon"===e||"element"===e){var t="".concat(e,"_").concat(f[e]);return c.a.createElement(u.j,{key:e,size:"sm",field:"icon",image:t})}return c.a.createElement("span",{key:e},f[e])}))});var $=Object(l.b)(function(e){return{filters:e.filters}})(function(e){var t=e.field,a=e.fields,l=e.filters,i=e.search,s=c.a.useContext(u.c).lang,m=c.a.useState("hide"),d=Object(n.a)(m,2),f=d[0],b=d[1];Object(r.useEffect)(function(){setTimeout(function(){b(null)},250)},[]);var v=c.a.useMemo(function(){return{arr:Object.values(o.l[t]).filter(function(e){return a.every(function(t){return e[t].includes(l[t])})&&e.name[s].toUpperCase().includes(i.toUpperCase())}).sort(function(e,a){if(e.rarity>a.rarity)return-1;if(e.rarity<a.rarity)return 1;if(e.element){var n=[].concat(Object(J.a)(o.c),["None"]),r=n.indexOf(e.element),c=n.indexOf(a.element);if(r>c)return 1;if(r<c)return-1}if(e.weapon){var l=o.k.indexOf(e.weapon),i=o.k.indexOf(a.weapon);if(l>i)return 1;if(l<i)return-1}if("wyrmprint"===t){if(e.dungeon&&!a.dungeon)return-1;if(!e.dungeon&&a.dungeon)return 1;if(e.MaxAtk+e.MaxHp+e.abilities13+e.abilities23+e.abilities33>a.MaxAtk+a.MaxHp+a.abilities13+a.abilities23+a.abilities33)return-1;if(e.MaxAtk+e.MaxHp+e.abilities13+e.abilities23+e.abilities33<a.MaxAtk+a.MaxHp+a.abilities13+a.abilities23+a.abilities33)return 1}else{if(e.MaxAtk+e.MaxHp>a.MaxAtk+a.MaxHp)return-1;if(e.MaxAtk+e.MaxHp<a.MaxAtk+a.MaxHp)return 1}return e.id>a.id?1:e.id<a.id?-1:0}),cols:"weapon"===t?a.slice(0,-1):a,field:t}},[t,a,l,s,i]),p=c.a.useRef(null);return Object(r.useEffect)(function(){p.current&&p.current.scrollToItem(0)},[t,l]),c.a.createElement("div",{className:f},c.a.createElement(Q.a,null,function(e){var t=e.height,a=e.width;return c.a.createElement(G.b,{ref:p,height:t,width:a,itemSize:80,itemCount:v.arr.length,itemData:v},Z)}))}),ee={adventurer:["weapon","element","rarity"],weapon:["weapon","element","rarity","type"],wyrmprint:["rarity"],dragon:["element","rarity"]};var te=Object(l.b)(function(e){var t=e.focused;return{field:Object(s.b)(t)}})(function(e){var t=e.field,a=c.a.useState(""),r=Object(n.a)(a,2),l=r[0],i=r[1];return c.a.useEffect(function(){i("")},[t]),c.a.createElement(c.a.Fragment,null,c.a.createElement(X,{fields:ee[t],search:l,setSearch:i}),c.a.createElement($,{field:t,fields:ee[t],search:l}))}),ae=["stats","halidom"];var ne=c.a.memo(function(e){var t=e.panel,a=e.setPanel;return c.a.createElement("div",{id:"col3",ref:s.g.col3},c.a.createElement(u.l,{name:"panel",checked:t,btns:ae,onChange:a}),"stats"===t?c.a.createElement(te,null):c.a.createElement(q,null))});var re=function(){var e=c.a.useState("stats"),t=Object(n.a)(e,2),a=t[0],r=t[1];return c.a.createElement("main",{id:"stats"},c.a.createElement(_,{setPanel:r}),c.a.createElement(L,{setPanel:r}),c.a.createElement(ne,{panel:a,setPanel:r}))};t.default=re}}]);
//# sourceMappingURL=6.c653318a.chunk.js.map