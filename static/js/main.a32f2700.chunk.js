(this.webpackJsonpcorona_tracker=this.webpackJsonpcorona_tracker||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=(a(102),a(37)),s=a.n(l),i=a(65),u=a(17),d=a(238),m=a(239),f=a(240),v=(a(104),a(232)),p=a(236),h=a(237),b=a(66),E=a.n(b);var g=function(e){return e.total?r.a.createElement(v.a,{className:"infobox"},r.a.createElement(p.a,null,r.a.createElement(h.a,{className:"infobox_title",color:"textSecondary"},null===e||void 0===e?void 0:e.title),r.a.createElement("h2",{className:"infobox_cases"},r.a.createElement(E.a,{start:0,end:null===e||void 0===e?void 0:e.cases,duration:2.5,seperator:","})),r.a.createElement(h.a,{className:"infobox_total",color:"textSecondary"},r.a.createElement(E.a,{start:0,end:null===e||void 0===e?void 0:e.total,duration:2.5,seperator:","})," ","Total"))):"loading"},y=(a(110),a(243)),j=a(244),O=a(91),x=a(49),w=a.n(x),C=a(241),N=a(242),_={cases:{hex:"#CC0134",rgb:"rgb(204,16,52)",half_op:"rgba(204,16,52,0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125,21,29)",half_op:"rgba(126,21,29,0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251,60,67)",half_op:"rgba(252,60,67,0.5)",multiplier:2e3}},k=function(e){var t=Object(O.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t};var S=function(e){var t=e.countries,a=e.center,n=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(y.a,{center:a,zoom:n},r.a.createElement(j.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href = "http://osm.org/copyright">\r OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(C.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:_[t].hex,fillColor:_[t].hex,radius:Math.sqrt(e[t])*_[t].multiplier},r.a.createElement(N.a,null,r.a.createElement("h1",null,"Total ",t," :",e.cases)))}))}(t)))};a(111);var I=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,a))})))},D=a(89);var M=function(e){var t=e.casesType,a=void 0===t?"cases":t;Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=d(e);s(t)}))}),[a]);var c=Object(n.useState)({}),o=Object(u.a)(c,2),l=o[0],s=o[1],i={legend:{display:!1},elements:{point:{raduis:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return w()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return w()(e).format("0a")}}}]}},d=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=[];for(var r in e.cases){if(t){var c={x:r,y:e[a][r]-t};n.push(c)}t=e[a][r]}return n};return r.a.createElement("div",null,l.length>0&&r.a.createElement(D.a,{options:i,data:{datasets:[{backgroundColor:"rgba(204,16,15,0.5)",borderColor:"black",data:l}]}}))};a(205);var R=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("worldwide"),l=Object(u.a)(o,2),h=l[0],b=l[1],E=Object(n.useState)({}),y=Object(u.a)(E,2),j=y[0],O=y[1],x=Object(n.useState)([]),w=Object(u.a)(x,2),C=w[0],N=w[1],_=Object(n.useState)({lat:34,lng:-40}),D=Object(u.a)(_,2),R=D[0],T=D[1],z=Object(n.useState)(3),A=Object(u.a)(z,2),W=A[0],B=A[1],J=Object(n.useState)([]),L=Object(u.a)(J,2),Y=L[0],q=L[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){O(e)})),function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=k(e);N(a),q(e),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var F=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh./v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){O(e),b(a),console.log(e),T([e.countryInfo.lat,e.countryInfo.long]),B(5)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app_left"},r.a.createElement("div",{className:"app_header"},r.a.createElement("h1",null,"COVID 19 TRACKER"),r.a.createElement(d.a,{className:"app_dropdown"},r.a.createElement(m.a,{onChange:F,variant:"outlined",value:h},r.a.createElement(f.a,{value:"worldwide"},"World Wide"),a.map((function(e){return r.a.createElement(f.a,{key:e.name,value:e.value},e.name)}))))),r.a.createElement("div",{className:"app_stats"},r.a.createElement(g,{title:"Coronavirus Cases",total:null===j||void 0===j?void 0:j.cases,cases:j.todayCases}),console.log(j.cases),r.a.createElement(g,{title:"Recovered",total:j.recovered,cases:j.todayRecovered}),r.a.createElement(g,{title:"Deaths",total:j.deaths,cases:j.todayDeaths}),r.a.createElement(g,{title:"Tests",total:null===j||void 0===j?void 0:j.tests,cases:null===j||void 0===j?void 0:j.testsPerOneMillion})),r.a.createElement(S,{countries:Y,center:R,zoom:W})),r.a.createElement(v.a,{className:"app_right"},r.a.createElement(p.a,null,r.a.createElement("h1",null,"Live Cases By Country"),r.a.createElement(I,{countries:C}),r.a.createElement("h1",null,"Worldwide New Cases"),r.a.createElement(M,null))))};o.a.render(r.a.createElement(R,null),document.getElementById("root"))},97:function(e,t,a){e.exports=a(206)}},[[97,1,2]]]);
//# sourceMappingURL=main.a32f2700.chunk.js.map