(this["webpackJsonppersonal-projects"]=this["webpackJsonppersonal-projects"]||[]).push([[0],Array(25).concat([function(e,a,t){e.exports=t.p+"static/media/drum-kit.eae0deb3.jpg"},function(e,a,t){e.exports=t.p+"static/media/clock.c91b7e3b.jpg"},function(e,a,t){e.exports=t.p+"static/media/js30_day3.02a4be8f.png"},function(e,a,t){e.exports=t.p+"static/media/js30_day4.f4fc89b4.png"},function(e,a,t){e.exports=t.p+"static/media/js30_day5.30255535.png"},function(e,a,t){e.exports=t.p+"static/media/js30_day6.6e9e9301.png"},function(e,a,t){e.exports=t.p+"static/media/js30_day7.1cf593f0.png"},function(e,a,t){e.exports=t.p+"static/media/js30_day8.eed26a2f.png"},,function(e,a,t){e.exports=t.p+"static/media/clap.a6e86dd7.wav"},function(e,a,t){e.exports=t.p+"static/media/boom.550be808.wav"},function(e,a,t){e.exports=t.p+"static/media/hihat.4ba39e07.wav"},function(e,a,t){e.exports=t.p+"static/media/kick.4dd58595.wav"},function(e,a,t){e.exports=t.p+"static/media/openhat.a62db465.wav"},function(e,a,t){e.exports=t.p+"static/media/ride.b0d70ec5.wav"},function(e,a,t){e.exports=t.p+"static/media/snare.80c4129b.wav"},function(e,a,t){e.exports=t.p+"static/media/tink.75f727ec.wav"},function(e,a,t){e.exports=t.p+"static/media/tom.572ed39d.wav"},function(e,a,t){e.exports=t.p+"static/media/mt_hoffmann2.ae4e5eee.JPG"},function(e,a,t){e.exports=t(60)},,,,,function(e,a,t){},function(e,a,t){},,,function(e,a,t){},,,function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),l=t.n(c),o=t(8),i=(t(49),t(50),t(2)),s=t(4),m=t(7),u=(t(53),function(){return r.a.createElement("header",null,r.a.createElement(o.b,{to:"/javascript30"},"Project Playground"),r.a.createElement("nav",null))}),d=t(25),p=t.n(d),f=t(26),E=t.n(f),h=t(27),v=t.n(h),y=t(28),g=t.n(y),k=t(29),b=t.n(k),w=t(30),N=t.n(w),j=t(31),x=t.n(j),S=t(32),B=t.n(S),L=(t(56),t(10)),C=t(33),T=function(e){var a=e.img,t=e.altText,n=e.title,c=e.path;return r.a.createElement("article",{className:"card-container"},r.a.createElement("picture",{className:"js30-day-card"},r.a.createElement("img",{src:a,alt:t})),r.a.createElement("div",{className:"js30-day-card card-content"},r.a.createElement("div",{className:"flex-row-between"},r.a.createElement("h2",null,n),r.a.createElement(L.a,{icon:C.a})),r.a.createElement(o.b,{to:c,className:"button"},"View")))},D=function(){var e=function(e){e.currentTarget.querySelector(".card-content").classList.add("slide-in")},a=function(e){e.stopPropagation(),e.currentTarget.parentElement.classList.remove("slide-in")};return Object(n.useEffect)((function(){document.title="JavaScript30 | Ben Rose";var t=document.querySelectorAll(".card-container");t.forEach((function(a){return a.addEventListener("click",e)}));var n=document.querySelectorAll(".card-container .flex-row-between");return n.forEach((function(e){return e.addEventListener("click",a)})),function(){t.forEach((function(a){return a.removeEventListener("click",e)})),n.forEach((function(e){return e.removeEventListener("click",a)}))}})),r.a.createElement("div",{className:"content-container-grid"},r.a.createElement("h1",null,"JavaScript30"),r.a.createElement("p",null,"The below projects are my take on the 30 vanilla JavaScript exercises in the",r.a.createElement("a",{href:"https://javascript30.com/",target:"_blank",rel:"noopener noreferrer"}," JavaScript30 course"),"."),r.a.createElement("section",{className:"flex-wrap-container"},r.a.createElement(T,{img:p.a,altText:"drum set",title:"Day 1: Drum Kit",path:"/javascript30/1"}),r.a.createElement(T,{img:E.a,altText:"css clock",title:"Day 2: CSS + JS Clock",path:"/javascript30/2"}),r.a.createElement(T,{img:v.a,altText:"screenshot of filters for image",title:"Day 3: Playing with CSS Variables and JS",path:"/javascript30/3"}),r.a.createElement(T,{img:g.a,altText:"screenshot of javascript reduce method",title:"Day 4: Array Cardio Day 1",path:"/javascript30/4"}),r.a.createElement(T,{img:b.a,altText:"screenshot of flex image gallery",title:"Day 5: Flex Panels Image Gallery",path:"/javascript30/5"}),r.a.createElement(T,{img:N.a,altText:"screenshot of ajax typeahead",title:"Day 6: AJAX Type Ahead",path:"/javascript30/6"}),r.a.createElement(T,{img:x.a,altText:"screenshot of javascript array methods",title:"Day 7: Array Cardio Day 2",path:"/javascript30/7"}),r.a.createElement(T,{img:B.a,altText:"screenshot of HTML5 Canvas",title:"Day 8: Fun with HTML5 Canvas",path:"/javascript30/8"})))},A=t(34),I=t.n(A),J=t(35),H=t.n(J),O=t(36),q=t.n(O),F=t(37),M=t.n(F),P=t(38),G=t.n(P),W=t(39),R=t.n(W),_=t(40),Y=t.n(_),K=t(41),z=t.n(K),X=t(42),V=t.n(X),U=function(){var e=function(e){var a,t;e.keyCode?(a=document.querySelector('audio[data-key="'.concat(e.keyCode,'"]')),t=document.querySelector('.key[data-key="'.concat(e.keyCode,'"]'))):"key"===e.currentTarget.className&&(a=document.querySelector('audio[data-key="'.concat(e.currentTarget.dataset.key,'"]')),t=e.currentTarget),a&&(a.currentTime=0,a.play(),t.classList.add("emphasized"))},a=function(e){"transform"===e.propertyName&&e.target.classList.remove("emphasized")};return Object(n.useEffect)((function(){window.addEventListener("keydown",e),document.querySelector(".keys").addEventListener("transitionend",a);var t=document.querySelectorAll(".key");return t.forEach((function(a){return a.addEventListener("click",e)})),function(){window.removeEventListener("keydown",e),t.forEach((function(a){return a.removeEventListener("click",e)}))}})),r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",null,"Day 1: Drum Kit"),r.a.createElement("div",{className:"keys"},r.a.createElement("div",{"data-key":"65",className:"key"},r.a.createElement("kbd",null,"A"),r.a.createElement("span",{className:"sound"},"clap")),r.a.createElement("div",{"data-key":"83",className:"key"},r.a.createElement("kbd",null,"S"),r.a.createElement("span",{className:"sound"},"hihat")),r.a.createElement("div",{"data-key":"68",className:"key"},r.a.createElement("kbd",null,"D"),r.a.createElement("span",{className:"sound"},"kick")),r.a.createElement("div",{"data-key":"70",className:"key"},r.a.createElement("kbd",null,"F"),r.a.createElement("span",{className:"sound"},"openhat")),r.a.createElement("div",{"data-key":"71",className:"key"},r.a.createElement("kbd",null,"G"),r.a.createElement("span",{className:"sound"},"boom")),r.a.createElement("div",{"data-key":"72",className:"key"},r.a.createElement("kbd",null,"H"),r.a.createElement("span",{className:"sound"},"ride")),r.a.createElement("div",{"data-key":"74",className:"key"},r.a.createElement("kbd",null,"J"),r.a.createElement("span",{className:"sound"},"snare")),r.a.createElement("div",{"data-key":"75",className:"key"},r.a.createElement("kbd",null,"K"),r.a.createElement("span",{className:"sound"},"tom")),r.a.createElement("div",{"data-key":"76",className:"key"},r.a.createElement("kbd",null,"L"),r.a.createElement("span",{className:"sound"},"tink"))),r.a.createElement("audio",{"data-key":"65",src:I.a}),r.a.createElement("audio",{"data-key":"83",src:q.a}),r.a.createElement("audio",{"data-key":"68",src:M.a}),r.a.createElement("audio",{"data-key":"70",src:G.a}),r.a.createElement("audio",{"data-key":"71",src:H.a}),r.a.createElement("audio",{"data-key":"72",src:R.a}),r.a.createElement("audio",{"data-key":"74",src:Y.a}),r.a.createElement("audio",{"data-key":"75",src:V.a}),r.a.createElement("audio",{"data-key":"76",src:z.a}))},$=function(){return Object(n.useEffect)((function(){var e=document.querySelector(".second-hand"),a=document.querySelector(".min-hand"),t=document.querySelector(".hour-hand");setInterval((function(){return function(e,a,t){var n=new Date,r=n.getSeconds()/60*360+90;e.style.transition=90===r?"none":"",e.style.transform="rotate(".concat(r,"deg)");var c=n.getMinutes()/60*360+90;a.style.transition=90===c?"none":"",a.style.transform="rotate(".concat(c,"deg)");var l=n.getHours()/12*360+90;t.style.transition=90===l?"none":"",t.style.transform="rotate(".concat(l,"deg)")}(e,a,t)}),1e3)})),r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",null,"Day 2: CSS + JS Clock"),r.a.createElement("div",{className:"clock"},r.a.createElement("div",{className:"clock-face"},r.a.createElement("div",{className:"hand hour-hand"}),r.a.createElement("div",{className:"hand min-hand"}),r.a.createElement("div",{className:"hand second-hand"}))))},Q=t(16),Z=t(43),ee=t.n(Z),ae=function(){var e=Object(n.useState)(10),a=Object(Q.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(10),o=Object(Q.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)("#7105BE"),u=Object(Q.a)(m,2),d=u[0],p=u[1],f=function(e){var a=e.target.dataset.sizing||"";document.documentElement.style.setProperty("--".concat(e.target.name),e.target.value+a)};return Object(n.useEffect)((function(){var e=document.querySelectorAll(".controls input");e.forEach((function(e){return e.addEventListener("change",f)})),e.forEach((function(e){return e.addEventListener("mousemove",f)}))})),r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",null,"Update CSS Variables with ",r.a.createElement("span",{className:"hl"},"JS")),r.a.createElement("div",{className:"controls"},r.a.createElement("label",{htmlFor:"spacing"},"Spacing:"),r.a.createElement("input",{id:"spacing",type:"range",name:"spacing",min:"10",max:"200",value:t,"data-sizing":"px",onChange:function(e){return c(e.target.value)}}),r.a.createElement("label",{htmlFor:"blur"},"Blur:"),r.a.createElement("input",{id:"blur",type:"range",name:"blur",min:"0",max:"25",value:i,"data-sizing":"px",onChange:function(e){return s(e.target.value)}}),r.a.createElement("label",{htmlFor:"base"},"Base Color:"),r.a.createElement("input",{id:"base",type:"color",name:"base",value:d,onChange:function(e){return p(e.target.value)}})),r.a.createElement("picture",{className:"css-variable-img"},r.a.createElement("img",{src:ee.a,alt:"view of Half Dome from Mt Hoffman in Yosemite National Park"})))},te=function(){var e=[{first:"Albert",last:"Einstein",year:1879,passed:1955},{first:"Isaac",last:"Newton",year:1643,passed:1727},{first:"Galileo",last:"Galilei",year:1564,passed:1642},{first:"Marie",last:"Curie",year:1867,passed:1934},{first:"Johannes",last:"Kepler",year:1571,passed:1630},{first:"Nicolaus",last:"Copernicus",year:1473,passed:1543},{first:"Max",last:"Planck",year:1858,passed:1947},{first:"Katherine",last:"Blodgett",year:1898,passed:1979},{first:"Ada",last:"Lovelace",year:1815,passed:1852},{first:"Sarah E.",last:"Goode",year:1855,passed:1905},{first:"Lise",last:"Meitner",year:1878,passed:1968},{first:"Hanna",last:"Hammarstr\xf6m",year:1829,passed:1909}],a=["car","car","truck","truck","bike","walk","car","van","bike","walk","car","van","car","truck"].reduce((function(e,a){return e[a]||(e[a]=0),e[a]++,e}),{});return r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",null,"Psst: have a look at the JavaScript Console"),console.log("1. Filter the list of inventors for those who were born in the 1500's"),console.table(e.filter((function(e){return e.year>=1500&&e.year<1600}))),console.log("2. Give us an array of the inventors first and last names"),console.log(e.map((function(e){return"".concat(e.first," ").concat(e.last)}))),console.log("3. Sort the inventors by birthdate, oldest to youngest"),console.table(e.slice(0).sort((function(e,a){return e.year-a.year}))),console.log("4. How many years did all the inventors live all together?"),console.log(e.reduce((function(e,a){return e+(a.passed-a.year)}),0)),console.log("5. Sort the inventors by years lived"),console.table(e.slice(0).sort((function(e,a){return e.passed-e.year-(a.passed-a.year)}))),console.log("6. Sort the people alphabetically by last name"),console.log(["Beck, Glenn","Becker, Carl","Beckett, Samuel","Beddoes, Mick","Beecher, Henry","Beethoven, Ludwig","Begin, Menachem","Belloc, Hilaire","Bellow, Saul","Benchley, Robert","Benenson, Peter","Ben-Gurion, David","Benjamin, Walter","Benn, Tony","Bennington, Chester","Benson, Leana","Bent, Silas","Bentsen, Lloyd","Berger, Ric","Bergman, Ingmar","Berio, Luciano","Berle, Milton","Berlin, Irving","Berne, Eric","Bernhard, Sandra","Berra, Yogi","Berry, Halle","Berry, Wendell","Bethea, Erin","Bevan, Aneurin","Bevel, Ken","Biden, Joseph","Bierce, Ambrose","Biko, Steve","Billings, Josh","Biondo, Frank","Birrell, Augustine","Black, Elk","Blair, Robert","Blair, Tony","Blake, William"].sort((function(e,a){return e-a}))),console.log("7. Sum up the instances of each of these"),console.log(a))},ne=function(){var e=function(e){e.currentTarget.classList.toggle("open")},a=function(e){e.propertyName.includes("flex")&&e.currentTarget.classList.toggle("open-active")};return Object(n.useEffect)((function(){var t=document.querySelectorAll(".panel");t.forEach((function(a){return a.addEventListener("click",e)})),t.forEach((function(e){return e.addEventListener("transitionend",a)}))})),r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",null,"Flex Panels Image Gallery"),r.a.createElement("section",{className:"panels"},r.a.createElement("div",{className:"panel panel1"},r.a.createElement("p",null,"Hey"),r.a.createElement("p",null,"Let's"),r.a.createElement("p",null,"Dance")),r.a.createElement("div",{className:"panel panel2"},r.a.createElement("p",null,"Give"),r.a.createElement("p",null,"Take"),r.a.createElement("p",null,"Receive")),r.a.createElement("div",{className:"panel panel3"},r.a.createElement("p",null,"Experience"),r.a.createElement("p",null,"It"),r.a.createElement("p",null,"Today")),r.a.createElement("div",{className:"panel panel4"},r.a.createElement("p",null,"Give"),r.a.createElement("p",null,"All"),r.a.createElement("p",null,"You can")),r.a.createElement("div",{className:"panel panel5"},r.a.createElement("p",null,"Life"),r.a.createElement("p",null,"In"),r.a.createElement("p",null,"Motion"))))},re=t(12),ce=function(){var e=[];fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json").then((function(a){return a.json().then((function(a){return e.push.apply(e,Object(re.a)(a))}))}));var a=function(a,t){var n=a.currentTarget.value,r=function(e,a){return a.filter((function(a){var t=new RegExp(e,"gi");return a.city.match(t)||a.state.match(t)}))}(n,e).map((function(e){var a=new RegExp(n,"gi"),t=e.city.replace(a,'<span class="hl">'.concat(n,"</span>")),r=e.state.replace(a,'<span class="hl">'.concat(n,"</span>"));return'\n        <li>\n          <span class="name">'.concat(t,", ").concat(r,'</span>\n          <span class="population">').concat(e.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),"</span>\n        </li>\n      ")})).join("");t.innerHTML=r};return Object(n.useEffect)((function(){var e=document.querySelector(".search"),t=document.querySelector(".suggestions");e.addEventListener("change",(function(e){return a(e,t)})),e.addEventListener("keyup",(function(e){return a(e,t)}))})),r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",null,"Type Ahead"),r.a.createElement("form",{className:"search-form"},r.a.createElement("input",{type:"text",className:"search",placeholder:"City or State","aria-label":"city/state text search"}),r.a.createElement("ul",{className:"suggestions"},r.a.createElement("li",null,"Filter for a city"),r.a.createElement("li",null,"or a state"))))},le=function(){var e,a=[{name:"Wes",year:1988},{name:"Kait",year:1986},{name:"Irv",year:1970},{name:"Lux",year:2015}],t=[{text:"Love this!",id:523423},{text:"Super good",id:823423},{text:"You are the best",id:2039842},{text:"Ramen is my fav food ever",id:123523},{text:"Nice Nice Nice!",id:542328}],n=a.some((function(e){return(new Date).getFullYear()-e.year>=19})),c=a.every((function(e){return(new Date).getFullYear()-e.year>=19})),l=function(e){return t.findIndex((function(a){return a.id===e}))};return r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",null,"Psst: have a look at the JavaScript Console"),console.log("1. Is at least one person 19 or older?"),console.log({hasAdults:n}),console.log("2. Is everyone 19 or older?"),console.log({allAdults:c}),console.log("3. find the comment with the ID of 823423"),console.log((e=823423,t.find((function(a){return a.id===e})))),console.log("5. Find the comment with this ID"),console.log(l(823423)),console.log("6. delete the comment with the ID of 823423"),console.table(function(e){var a=l(e);return[].concat(Object(re.a)(t.slice(0,a)),Object(re.a)(t.slice(a+1)))}(823423)))},oe=function(){return Object(n.useEffect)((function(){var e=document.querySelector("#draw"),a=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight-230,a.lineJoin="round",a.lineCap="round",a.lineWidth=60;var t=!1,n=0,r=0,c=0,l=!0;e.addEventListener("mousedown",(function(e){t=!0;var a=[e.offsetX,e.offsetY];n=a[0],r=a[1]})),e.addEventListener("mousemove",(function(e){if(t){a.strokeStyle="hsl(".concat(c,", 100%, 50%)"),a.beginPath(),a.moveTo(n,r),a.lineTo(e.offsetX,e.offsetY),a.stroke();var o=[e.offsetX,e.offsetY];n=o[0],r=o[1],++c>=360&&(c=0),(a.lineWidth>=100||a.lineWidth<=1)&&(l=!l),l?a.lineWidth++:a.lineWidth--}})),e.addEventListener("mouseup",(function(){return t=!1})),e.addEventListener("mouseout",(function(){return t=!1})),document.getElementById("canvas-reset").addEventListener("click",(function(t){t.preventDefault(),a.clearRect(0,0,e.width,e.height)}))})),r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",null,"Fun with HTML5 Canvas"),r.a.createElement("div",{className:"flex-row-between canvas-header"},r.a.createElement("p",null,"Click and drag in the box below to draw!"),r.a.createElement("button",{id:"canvas-reset",className:"button"},"Reset")),r.a.createElement("canvas",{id:"draw",width:"800",height:"500"}))},ie=t(15),se=function(){return r.a.createElement("footer",{className:"flex-row-between"},r.a.createElement("p",null,"\xa9 Benjamin Rose, 2020"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/benrose207",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Icon",onClick:function(){return m.a.event({category:"click",action:"github",label:"footer"})}},r.a.createElement(L.a,{icon:ie.b}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/benjamin-rose-483549124/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn Icon",onClick:function(){return m.a.event({category:"click",action:"linkedin",label:"footer"})}},r.a.createElement(L.a,{icon:ie.c}))),r.a.createElement("li",null,r.a.createElement("a",{href:"hhttps://angel.co/benjamin-rose-2",target:"_blank",rel:"noopener noreferrer","aria-label":"Angellist Icon",onClick:function(){return m.a.event({category:"click",action:"angellist",label:"footer"})}},r.a.createElement(L.a,{icon:ie.a})))))},me=function(){var e=Object(s.a)();return m.a.initialize("UA-175985833-4"),m.a.pageview(window.location.pathname+window.location.hash.slice(1)+window.location.search),e.listen((function(e){m.a.pageview(e.pathname+e.hash.slice(1)+e.search)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement(u,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/javascript30",component:D}),r.a.createElement(i.a,{path:"/javascript30/1",component:U}),r.a.createElement(i.a,{path:"/javascript30/2",component:$}),r.a.createElement(i.a,{path:"/javascript30/3",component:ae}),r.a.createElement(i.a,{path:"/javascript30/4",component:te}),r.a.createElement(i.a,{path:"/javascript30/5",component:ne}),r.a.createElement(i.a,{path:"/javascript30/6",component:ce}),r.a.createElement(i.a,{path:"/javascript30/7",component:le}),r.a.createElement(i.a,{path:"/javascript30/8",component:oe}))),r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[44,1,2]]]);
//# sourceMappingURL=main.86621b69.chunk.js.map