(this["webpackJsonpmenu-app"]=this["webpackJsonpmenu-app"]||[]).push([[0],{11:function(e,t,i){"use strict";i.r(t);var a=i(1),r=i(3),c=i.n(r),n=(i(9),i(4)),o=i(0),s=function(e){return Object(o.jsxs)("div",{className:"btn-container",children:[Object(o.jsx)("button",{type:"button",className:"filter-btn",onClick:function(){return e.filter("")},children:"all"}),Object(o.jsx)("button",{type:"button",className:"filter-btn",onClick:function(){return e.filter("breakfast")},children:"breakfast"}),Object(o.jsx)("button",{type:"button",className:"filter-btn",onClick:function(){return e.filter("lunch")},children:"lunch"}),Object(o.jsx)("button",{type:"button",className:"filter-btn",onClick:function(){return e.filter("shakes")},children:"shakes"})]})},l=function(e){var t=e.food;return Object(o.jsxs)("article",{className:"menu-item",children:[Object(o.jsx)("img",{src:t.image,alt:t.name,className:"photo"}),Object(o.jsxs)("div",{className:"item-info",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h4",{children:t.name}),Object(o.jsx)("h4",{className:"price",children:t.price})]}),Object(o.jsx)("p",{className:"item-text",children:t.description})]})]})},f=[{id:1,name:"Blackberry and Strawberry Pancakes",price:"$15",category:"breakfast",description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",image:"https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80"},{id:2,name:"Big Burger with Fries",price:"$15",category:"lunch",description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",image:"https://images.unsplash.com/photo-1515467705959-1142c6a92b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80"},{id:3,name:"Strawberry Milkshake",price:"$15",category:"shakes",description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",image:"https://images.unsplash.com/photo-1589734575451-8ddc34c5752b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=770&q=80"},{id:4,name:"Country Delight",price:"$15",category:"breakfast",description:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",image:"https://images.unsplash.com/photo-1554266066-6fd2ab1c859b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"},{id:5,name:"Burger Attack",price:"$15",category:"lunch",description:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",image:"https://images.unsplash.com/photo-1551782450-17144efb9c50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},{id:6,name:"Oreo Dream",price:"$15",category:"shakes",description:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",image:"https://images.unsplash.com/photo-1590373927063-cb2d69209a8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{id:7,name:"Bacon Overflow",price:"$15",category:"breakfast",description:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",image:"https://images.unsplash.com/photo-1561758033-7e924f619b47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{id:8,name:"American Classic",price:"$15",category:"lunch",description:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",image:"https://images.unsplash.com/photo-1591336277932-f0579b75992b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"},{id:7,name:"Quarantine Buddy",price:"$15",category:"shakes",description:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",image:"https://images.unsplash.com/photo-1619397166882-370d90522ef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"}],b=function(){var e=Object(a.useState)(f),t=Object(n.a)(e,2),i=t[0],r=t[1];return Object(o.jsx)("main",{children:Object(o.jsxs)("section",{className:"menu section",children:[Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{children:"our menu"}),Object(o.jsx)("div",{className:"underline"})]}),Object(o.jsx)(s,{filter:function(e){if(""!==e){var t=f.filter((function(t){return t.category===e}));r(t)}else r(f)}}),Object(o.jsx)("div",{className:"section-center",children:i.map((function(e){return Object(o.jsx)(l,{food:e})}))})]})})};c.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))},9:function(e,t,i){}},[[11,1,2]]]);
//# sourceMappingURL=main.3c85946a.chunk.js.map