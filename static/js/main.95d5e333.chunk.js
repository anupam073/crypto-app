(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{19:function(e,c,t){},20:function(e,c,t){},22:function(e,c,t){},41:function(e,c,t){},42:function(e,c,t){},43:function(e,c,t){"use strict";t.r(c);var s=t(2),n=t.n(s),a=t(13),r=t.n(a),i=(t(19),t(20),t.p+"static/media/logox.98f4d13f.png"),o=t(0);var l=function(){return Object(o.jsxs)("div",{className:"navbar-container",children:[Object(o.jsxs)("div",{className:"logo",children:[Object(o.jsx)("img",{src:i,alt:""}),Object(o.jsx)("h2",{children:"COINTRACKER"})]}),Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)("a",{href:"/start",children:"Home"}),Object(o.jsx)("a",{href:"/start",children:"Wallet"}),Object(o.jsx)("a",{href:"/start",children:"Help Desk"}),Object(o.jsx)("a",{href:"/start",children:"|"}),Object(o.jsx)("button",{className:"navbar-btn",children:"Contact with us!"})]})]})},j=(t(22),t.p+"static/media/hero-image.36c9ab10.png");var d=function(){return Object(o.jsxs)("div",{className:"hero-container",children:[Object(o.jsxs)("div",{className:"hero-title",children:[Object(o.jsxs)("h1",{children:["Blockchain-powered",Object(o.jsx)("br",{}),"products for HR"]}),Object(o.jsx)("p",{children:"Using blockchain to streamline global access to work and payments"})]}),Object(o.jsx)("div",{className:"hero-img",children:Object(o.jsx)("img",{src:j,alt:"hero"})})]})},b=t(4),h=t(14),m=t.n(h),p=(t(41),function(e){var c=e.name,t=e.price,s=e.volume,n=e.image,a=e.priceChange;return Object(o.jsxs)("div",{className:"coin-container",children:[Object(o.jsx)("div",{className:"top-section",children:Object(o.jsxs)("p",{className:"coin-marketcap",children:[Object(o.jsx)("span",{className:"volume",children:"Wolumen:"}),s.toLocaleString()]})}),Object(o.jsxs)("div",{className:"middle-section",children:[Object(o.jsx)("img",{src:n,alt:"crypto"}),Object(o.jsx)("h2",{children:c}),Object(o.jsx)("p",{children:a<0?Object(o.jsxs)("p",{className:"coin-percent red",children:[a.toFixed(2),"%"]}):Object(o.jsxs)("p",{className:"coin-percent green",children:[a.toFixed(2),"%"]})})]}),Object(o.jsx)("div",{className:"bottom-section",children:Object(o.jsxs)("p",{className:"coin-price",children:[Object(o.jsx)("span",{className:"price",children:"Cena:"})," $",t.toFixed(3)]})})]})});t(42);var O=function(){var e=Object(s.useState)(""),c=Object(b.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)([]),r=Object(b.a)(a,2),i=r[0],l=r[1];Object(s.useEffect)((function(){m.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false").then((function(e){l(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var j=i.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(o.jsxs)("div",{className:"coins-table-container",children:[Object(o.jsxs)("div",{className:"search-bar",children:[Object(o.jsx)("h2",{children:"Skaner akcji"}),Object(o.jsxs)("form",{children:["Znajd\u017a kryptowalut\u0119:",Object(o.jsx)("input",{className:"coin-input",type:"text",placeholder:"wpisz nazw\u0119...",onChange:function(e){n(e.target.value)}})]})]}),Object(o.jsx)("div",{className:"coins-table",children:Object(o.jsx)("div",{className:"coins-list",children:j.map((function(e){return Object(o.jsx)(p,{name:e.name,price:e.current_price,symbol:e.symbol,marketcap:e.total_volume,volume:e.market_cap,image:e.image,priceChange:e.price_change_percentage_24h},e.id)}))})})]})};var x=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(d,{}),Object(o.jsx)(O,{})]})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.95d5e333.chunk.js.map