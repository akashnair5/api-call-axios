(this["webpackJsonpapi-call-axios"]=this["webpackJsonpapi-call-axios"]||[]).push([[0],{46:function(e,t,n){},67:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(22),a=n.n(s),r=(n(46),n(10)),l=n.n(r),o=n(23),d=n(29),j=n(24),h=n.n(j),b=n(25),u=n.n(b),O=(n(66),n(67),n(26)),x=n(27),v=n(31),m=n(30),p=n(88),f=n(0),g=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(O.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={},e.handleItemClick=function(t,n){var c=n.name;return e.setState({activeItem:c})},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this.state.activeItem;return Object(f.jsx)("div",{children:Object(f.jsxs)(p.a,{style:{backgrouncolor:"#d9d9d9",backgroundImage:"linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%)"},children:[Object(f.jsx)(p.a.Item,{name:"about",active:"About"===e,onClick:this.handleItemClick,children:"About"}),Object(f.jsx)(p.a.Item,{name:"quotes",active:"Quotes"===e,onClick:this.handleItemClick,children:"Quotes"}),Object(f.jsx)(p.a.Item,{name:"events",active:"Events"===e,onClick:this.handleItemClick,children:"Upcoming Events"})]})})}}]),n}(c.Component),w=function(){return Object(f.jsx)("div",{style:{textAlign:"center",padding:"30px",backgroundColor:"#000000",backgroundImage:"linear-gradient(315deg, #000000 0%, #414141 74%)"},children:Object(f.jsx)("h1",{style:{color:"white"},children:"COVID 19 TRACKER"})})},C=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.covid19india.org/data.json");case 2:t=e.sent,console.log(t.data.statewise),i(t.data.statewise);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(c.useEffect)((function(){u.a.init({duration:2e3})}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{}),Object(f.jsx)(g,{}),Object(f.jsxs)("div",{className:"total-container",children:[Object(f.jsx)("div",{className:"section",children:Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsx)("div",{className:"heading",children:Object(f.jsxs)("h1",{className:"head",children:[Object(f.jsx)("span",{className:"font-weight-bold"}),"INDIA COVID 19 TRACKER"]})}),Object(f.jsx)("div",{className:"table-responsive",children:Object(f.jsxs)("table",{className:"table table-hover",children:[Object(f.jsx)("thead",{className:"table-head",children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"State"}),Object(f.jsx)("th",{children:"Confirmed"}),Object(f.jsx)("th",{children:"Recovered"}),Object(f.jsx)("th",{children:"Deaths"}),Object(f.jsx)("th",{children:"Active"}),Object(f.jsx)("th",{children:"Last Updated Time"})]})}),Object(f.jsx)("tbody",{children:n.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.state}),Object(f.jsx)("td",{children:e.confirmed}),Object(f.jsx)("td",{children:e.recovered}),Object(f.jsx)("td",{children:e.deaths}),Object(f.jsx)("td",{children:e.active}),Object(f.jsx)("td",{children:e.lastupdatedtime})]},t)}))})]})})]})}),Object(f.jsx)("div",{className:"section",children:Object(f.jsxs)("div",{className:"content",children:[Object(f.jsxs)("p",{className:"para",children:[" ",Object(f.jsx)("b",{children:"Positive quotes to replace your negative thoughts."})," "]}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:"Once you replace negative thoughts with positive ones, you\u2019ll start having positive results \u2013Willie Nelson."}),Object(f.jsx)("li",{children:"Few things in the world are more powerful than a positive push. A smile.A world of optimism and hope.A \u2018you can do it when things are tough.-Richard M.DeVos."}),Object(f.jsx)("li",{children:"Live life to the fullest, focus on the positive-Matt Cameron."}),Object(f.jsx)("li",{children:"Always turn a negative situation into a positive situation \u2013Micheal Jordan."}),Object(f.jsx)("li",{children:"Your smile will give you a positive countenance that will make people feel comfortable around you.-Les Brown."})]})]})}),Object(f.jsx)("div",{className:"behind"})]})]})},I=(n(72),function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(C,{})})}),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};n(76);a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),k()}},[[77,1,2]]]);
//# sourceMappingURL=main.0078cef6.chunk.js.map