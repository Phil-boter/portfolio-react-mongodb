(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{36:function(e,t,n){},54:function(e,t,n){},59:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(19),r=n.n(a),i=n(22),s=n(6),o=n(38),l=n.n(o),j=n(39),u=n(7),d=n(4),b=n(16);function h(){var e=Object(b.a)(document.querySelectorAll("h1")),t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(Object(b.a)(e.target.querySelectorAll("span")).forEach((function(e,t){setTimeout((function(){e.classList.add("active")}),10*t)})),e.target.children[0].classList.add("active"))}))}),{root:null,rootMargin:"-10%",threshold:0});e.forEach((function(e){var n="";e.children[0].innerText.split("").map((function(e){return n+=""===e?"<span class='gap'></span>":"<span>".concat(e,"</span>")})),e.innerHTML=n,t.observe(e)}))}n(54);var p=n(0);function O(e){var t=e.initialState;return Object(c.useEffect)((function(){h()}),[]),Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)(u.b,{to:"/login",className:"login-logo",children:"A"}),Object(p.jsxs)("div",{className:"intro-text",children:[Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:t.header})}),t.header2?Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:t.header2})}):Object(p.jsx)(p.Fragment,{})]})]})}n(59);function f(e){var t=e.initialState;return Object(c.useEffect)((function(){console.log("useEffect running"),function(){var e=Object(b.a)(document.querySelectorAll("li"));console.log("listItems",e);var t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(console.log("isIntersecting"),Object(b.a)(e.target.querySelectorAll("span")).forEach((function(e,t){setTimeout((function(){e.classList.add("active")}),5*t)})),e.target.children[0].classList.add("active"))}))}),{root:null,rootMargin:"-10%",threshold:0});e.forEach((function(e){var n="",c=e.children[0].innerText.split("");console.log("itemText",c),c.map((function(e){return n+=""===e?"<span class='gap'></span>":"<span>".concat(e,"</span>")})),e.innerHTML=n,t.observe(e)}))}()}),[]),Object(p.jsx)("div",{className:"link-container ",children:Object(p.jsx)("ul",{className:"link-list",children:t.links.map((function(e){return Object(p.jsx)(u.b,{to:"".concat(e.page),children:Object(p.jsx)("li",{children:Object(p.jsx)("span",{children:e.text})})},e.id)}))})})}function x(e){var t=e.initialState;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"page2 intro-text",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:t.sectionHeader})})})})}function m(){var e={header:"Philipp",header2:"dawid",sectionHeader:"welcome",links:[{id:0,text:"Projects",page:"/projects"},{id:1,text:"about",page:"/about"},{id:2,text:"Contact",page:"/contact"}]};return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{initialState:e}),Object(p.jsx)(f,{initialState:e}),Object(p.jsxs)("section",{className:"section",children:[Object(p.jsx)(x,{initialState:e}),Object(p.jsx)("p",{children:"to my Portfolio"}),Object(p.jsx)("img",{id:"main-image",src:"/assets/tour640.jpg",alt:""})]})]})}function g(e){var t=e.initialState;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("section",{className:"section about",children:[Object(p.jsx)(x,{initialState:t}),Object(p.jsxs)("article",{children:["I am a junior full stack web developer with a background in foodindustry and automotive service. I began my professional career with an apprenticeship as a brewer, where I subsequently also completed my master's degree at the Technical University of Berlin.",Object(p.jsx)("br",{}),"After that I worked for the ARWE Group, until then europe's largest company in automotive service, as team leader and later on as quality manager.",Object(p.jsx)("br",{}),"When the group went bankrupt during the Corona crisis, I was now able to consistently realise my long-held wish for a reorientation. To realise my long-cherished wish I had already gained my first experience of coding at CodeCademy.com and was sure that coding would be my future."," ",Object(p.jsx)("br",{}),"When I was offered the chance to attend a bootcamp at Spiced Academy to become a full stack web developer, I took it.",Object(p.jsx)("br",{}),"In this intensive 12 week course I dived into the depths of JavaScript. At Spiced Academy I built my first full stack web applications using third party APIs, frontend frameworks like React.js and Vue.js and backend like Express. So please have a look at some of my code on",Object(p.jsx)("a",{className:"link-github",href:"https://github.com/Phil-boter",target:"_blank",rel:"noreferrer",children:"Github"}),"."]})]})})}function v(){var e={header:"about",header2:"",sectionHeader:"about",links:[{id:0,text:"Home",page:"/"},{id:1,text:"Projects",page:"/projects"},{id:2,text:"Contact",page:"/contact"}]};return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{initialState:e}),Object(p.jsx)(f,{initialState:e}),Object(p.jsx)(g,{initialState:e})]})}function y(e){var t=e.initialState;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("section",{className:"section",children:[Object(p.jsx)(x,{initialState:t}),Object(p.jsxs)("article",{children:["Find my code and my latest projects on"," ",Object(p.jsx)("a",{className:"link-github",href:"https://github.com/Phil-boter",target:"_blank",rel:"noreferrer",children:"Github"})," ",". If you are interested in my educational background and professional experience visit my"," ",Object(p.jsx)("a",{className:"link-linkedIn",href:"https://www.linkedin.com/in/philipp-dawid-759793206/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})," ","profile or download my"," ",Object(p.jsx)("a",{href:"/assets/CV-ENG.pdf",download:"CV Philipp Dawid",target:"_blank",rel:"noreferrer",className:"link-cv",children:"CV"})," ",". Interested in working with me? Feel free to"," ",Object(p.jsx)("a",{class:"link-mailto",href:"mailto:philipp_dawid@web.de",children:"reach out"}),"."]})]})})}function w(){var e={header:"contact",header2:"",sectionHeader:"contact",links:[{id:0,text:"Home",page:"/"},{id:1,text:"Projects",page:"/projects"},{id:2,text:"About",page:"/about"}]};return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{initialState:e}),Object(p.jsx)(f,{initialState:e}),Object(p.jsx)(y,{initialState:e})]})}var k=n(5),N=n.n(k),S=n(40),C=n(13),E=n(21),T=n.n(E),I=T.a.create({xsrfCookieName:"securetoken",xsrfHeaderName:"csrf-token"});function P(){return(P=Object(C.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("actions getProjects"),e.prev=1,e.next=4,I.get("/api/projects");case 4:if(200!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",{type:"GET_PROJECTS",data:t.data});case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function F(){return(F=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("action newProject"),console.log("action newProject",t),e.prev=2,e.next=5,I.post("/api/projects",t);case 5:return e.next=7,alert("project upload successfull");case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",{type:"GET_ERROR",error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function _(){return(_=Object(C.a)(N.a.mark((function e(t,n){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,n),e.prev=1,e.next=4,I.post("/api/auth",{email:t,password:n});case 4:if(200!==(c=e.sent).status){e.next=7;break}return e.abrupt("return",{type:"GET_LOGIN",admin:c.data});case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{type:"GET_ERROR",error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function D(){return(D=Object(C.a)(N.a.mark((function e(t,n,c,a){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.post("/api/admin",{first_name:t,last_name:n,email:c,password:a});case 3:if(200!==(r=e.sent).status){e.next=6;break}return e.abrupt("return",{type:"GET_REGISTRATION",admin:r.admin});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),console.log("error in registration"),e.abrupt("return",{type:"GET_ERROR",error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function R(){return(R=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.get("/api/auth/logout");case 3:200===e.sent.status&&(console.log("replace / "),window.location.replace("/")),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log("error in logout"),e.abrupt("return",{type:"GET_ERROR",error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}n(36);function G(e){var t=e.project,n=e.index;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("section",{className:"project-inner-section",children:[Object(p.jsxs)("div",{className:"article-main-header",children:[Object(p.jsx)("h1",{className:"header1 article-header",children:Object(p.jsx)("span",{children:t.title})}),t.title_second?Object(p.jsx)("h1",{className:"header1 article-header title2",children:Object(p.jsx)("span",{children:t.title_second})}):Object(p.jsx)(p.Fragment,{})]}),Object(p.jsxs)("article",{children:[Object(p.jsx)("div",{className:"article-image-container",children:Object(p.jsx)("img",{className:"article-image",id:"article-image",src:t.image,alt:""})}),Object(p.jsx)(u.b,{to:"/singleProject/".concat(t._id),className:"toggle-link",children:Object(p.jsx)("label",{className:"toggle-button",children:"Click for more Information"})})]})]},n)})}function L(e){var t=e.initialState,n=Object(s.b)(),a=Object(s.c)((function(e){return e.data}));function r(){return(r=Object(C.a)(N.a.mark((function e(){var t,n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("shrink")}))},t=Object(S.a)(document.querySelectorAll("img")),console.log(t),n=new IntersectionObserver(c),t.forEach((function(e){n.observe(e)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log("projects in selector",a),Object(c.useEffect)((function(){n(function(){return P.apply(this,arguments)}()),function(){r.apply(this,arguments)}()}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("section",{className:"project-section",id:"project-section",children:a&&a.map((function(e,n){return Object(p.jsx)(G,{project:e,initialState:t},n)}))})})}function A(){var e={header:"Projects",header2:"",sectionHeader:"projects",links:[{id:0,text:"Home",page:"/"},{id:1,text:"About",page:"/about"},{id:2,text:"Contact",page:"/contact"}]};return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{initialState:e}),Object(p.jsx)(f,{initialState:e}),Object(p.jsx)(L,{initialState:e})]})}var H=n(3);function q(e){var t=e.projectId;console.log("id",t);var n=Object(c.useState)(),a=Object(H.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)("project"),o=Object(H.a)(s,2),l=o[0],j=o[1],u=Object(c.useState)(""),d=Object(H.a)(u,2),b=d[0],O=d[1],x=Object(c.useState)(!1),m=Object(H.a)(x,2),g=m[0],v=m[1];function y(){return(y=Object(C.a)(N.a.mark((function e(t){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("axios id",t),e.prev=1,e.next=4,T.a.get("/api/projects/".concat(t));case 4:return n=e.sent,c=n.data,console.log("data in singleProject",c),e.next=9,c.map((function(e){return i(e),j(e.title),O(e.title_second),h()}));case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",v(!0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(e){y.apply(this,arguments)}(t),window.scrollTo(0,0)}),[t]),Object(p.jsxs)(p.Fragment,{children:[g&&Object(p.jsx)("h1",{children:"Sorry! something went wrong..."}),Object(p.jsx)("header",{className:"header",children:Object(p.jsxs)("div",{className:"intro-text",children:[r&&Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:l})}),b?Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:b})}):Object(p.jsx)(p.Fragment,{})]})}),Object(p.jsx)(f,{initialState:{sectionHeader:"projects",links:[{id:0,text:"Home",page:"/"},{id:1,text:"Projects",page:"/projects"}]}}),r&&Object(p.jsxs)("section",{className:"section single",children:[Object(p.jsxs)("div",{className:"article-main-header",children:[Object(p.jsx)("h1",{className:"header1 article-header",children:Object(p.jsx)("span",{children:l})}),r.title_second?Object(p.jsx)("h1",{className:"header1 article-header title2",children:Object(p.jsx)("span",{children:r.title_second})}):Object(p.jsx)(p.Fragment,{})]}),Object(p.jsxs)("article",{children:[Object(p.jsx)("div",{className:"article-image-container",children:Object(p.jsx)("img",{className:"article-image modal-image",id:"article-image",src:r.image,alt:""})}),Object(p.jsxs)("div",{className:"article-content description",children:[Object(p.jsx)("h4",{className:"article-headline",children:"Description:"}),Object(p.jsx)("p",{className:"article-body",children:r.description})]}),Object(p.jsxs)("div",{className:"article-content description",children:[Object(p.jsx)("h4",{className:"article-headline",children:"Technologies:"}),Object(p.jsx)("p",{className:"article-body",children:r.technology})]}),Object(p.jsxs)("div",{className:"article-content",children:[Object(p.jsx)("h4",{className:"article-headline",children:"Find code on:"}),Object(p.jsx)("a",{className:"article-body",href:"project.link",target:"_blank",children:r.link})]}),r.host&&Object(p.jsxs)("div",{className:"article-content",children:[Object(p.jsx)("h4",{className:"article-headline",children:"Explore on:"}),Object(p.jsx)("a",{className:"article-body",href:"project.real",target:"_blank",children:r.host})]})]})]})]})}function J(){var e=Object(s.b)(),t=Object(d.f)(),n=Object(s.c)((function(e){return console.log("state",e),e.admin})),a=Object(s.c)((function(e){return e.error})),r=Object(c.useState)(""),i=Object(H.a)(r,2),o=i[0],l=i[1],j=Object(c.useState)(""),b=Object(H.a)(j,2),h=b[0],O=b[1],f=Object(c.useState)("Login"),x=Object(H.a)(f,2),m=x[0],g=x[1];Object(c.useEffect)((function(){return n?(g("Manage Projects"),t.push("/manageProjects")):void 0}),[n]);return Object(p.jsxs)("div",{className:"admin-container",children:[Object(p.jsx)(u.b,{to:"/",className:"login-logo",children:"b"}),Object(p.jsx)("div",{className:"log-header"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("div",{className:"restaurant-input-container",children:Object(p.jsx)("input",{className:"recipedata-input",type:"text",name:"email",autoComplete:"email",placeholder:"Email",onChange:function(e){return function(e){e.preventDefault(),l(e.target.value)}(e)}})}),Object(p.jsx)("div",{className:"restaurant-input-container",children:Object(p.jsx)("input",{className:"recipedata-input",type:"password",name:"password",placeholder:"Password",autoComplete:"current-password",onChange:function(e){return function(e){e.preventDefault(),O(e.target.value)}(e)}})})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{disabled:(o.length,h.length<1),className:"toggle-button login",onClick:function(){return e(function(e,t){return _.apply(this,arguments)}(o,h))},children:m})}),a&&Object(p.jsx)("h1",{children:a.response.data.msg})]})}var M=function(){return Object(p.jsx)(J,{})};function W(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.error})),n=Object(c.useState)(""),a=Object(H.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),l=Object(H.a)(o,2),j=l[0],u=l[1],d=Object(c.useState)(""),b=Object(H.a)(d,2),h=b[0],O=b[1],f=Object(c.useState)(""),x=Object(H.a)(f,2),m=x[0],g=x[1],v=Object(c.useState)(!0),y=Object(H.a)(v,2),w=y[0],k=y[1],N=function(t){t.preventDefault(),e(function(e,t,n,c){return D.apply(this,arguments)}(r,j,m,h))};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{children:[w?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{onClick:function(){k(!1)},className:"toggle-button login",children:"Create a new administrator"})}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){return k(!0)},className:"toggle-button login",children:"Close Input"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"first",placeholder:"First name",onChange:function(e){return function(e){e.preventDefault(),i(e.target.value)}(e)}})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"last",placeholder:"Last name",onChange:function(e){return function(e){e.preventDefault(),u(e.target.value)}(e)}})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"email",placeholder:"Email",onChange:function(e){return function(e){e.preventDefault(),g(e.target.value)}(e)}})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:function(e){return function(e){e.preventDefault(),O(e.target.value)}(e)}})})]})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{disabled:(r.length,j.length,m.length,h.length<1),className:"toggle-button login",onClick:function(e){return N(e)},children:"Create"})})]}),t&&Object(p.jsx)("h1",{children:t.response.data.msg})]})})}function V(e){e.state;var t=Object(s.b)(),n=Object(c.useState)(""),a=Object(H.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),l=Object(H.a)(o,2),j=l[0],u=l[1],d=Object(c.useState)(""),b=Object(H.a)(d,2),h=b[0],O=b[1],f=Object(c.useState)(""),x=Object(H.a)(f,2),m=x[0],g=x[1],v=Object(c.useState)(""),y=Object(H.a)(v,2),w=y[0],k=y[1],N=Object(c.useState)(""),S=Object(H.a)(N,2),C=S[0],E=S[1],T=Object(c.useState)(""),I=Object(H.a)(T,2),P=I[0],_=I[1],D=Object(c.useState)(),R=Object(H.a)(D,2),G=R[0],L=R[1],A=Object(c.useState)(!0),q=Object(H.a)(A,2),J=q[0],M=q[1],W=function(e){e.preventDefault();var n=new FormData;n.append("title",r),n.append("title_second",j),n.append("description",h),n.append("technology",m),n.append("link",w),n.append("image",C),n.append("host",P),n.append("file",G),t(function(e){return F.apply(this,arguments)}(n))};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"",children:J?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("button",{onClick:function(e){return function(e){e.preventDefault(),M(!1)}(e)},className:"toggle-button login",children:[" ","Create a new Project"]})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(e){return M(e,!0)},className:"toggle-button login",children:"Close Input"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"title",placeholder:"Title",onChange:function(e){return function(e){e.preventDefault(),i(e.target.value)}(e)}})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"title_second",placeholder:"Second Title",onChange:function(e){return function(e){e.preventDefault(),u(e.target.value)}(e)}})}),Object(p.jsx)("div",{children:Object(p.jsx)("textarea",{type:"text",name:"description",placeholder:"Description",onChange:function(e){return function(e){e.preventDefault(),O(e.target.value)}(e)}})}),Object(p.jsx)("div",{children:Object(p.jsx)("textarea",{type:"technology",name:"technology",placeholder:"Used Technology",onChange:function(e){return function(e){e.preventDefault(),g(e.target.value)}(e)}})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"link",placeholder:"Link",onChange:function(e){return function(e){e.preventDefault(),k(e.target.value)}(e)}})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"image",placeholder:"url for image",onChange:function(e){return function(e){e.preventDefault(),E(e.target.value)}(e)}})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"host",placeholder:"link for hosting page",onChange:function(e){return function(e){e.preventDefault(),_(e.target.value)}(e)}})}),Object(p.jsx)("input",{type:"file",accept:"image/*",name:"image-upload",placeholder:"url for image",onChange:function(e){return function(e){e.preventDefault(),console.log("file",e.target.files[0]),L(e.target.files[0])}(e)}}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{disabled:(r.length,h.length,m.length,w.length,C.length<1),className:"toggle-button login",onClick:function(e){return W(e)},children:"Upload"})})]})]})})})})}function B(){var e=Object(s.b)(),t=function(t){t.preventDefault(),e(function(){return R.apply(this,arguments)}())};return Object(p.jsxs)("div",{className:"link-container admin",children:[Object(p.jsx)(u.b,{to:"/projects",children:"Projects"}),Object(p.jsx)(u.b,{to:"/contact",children:"Contact"}),Object(p.jsx)(u.b,{to:"/about",children:"About"}),Object(p.jsx)(u.b,{onClick:function(e){return t(e)},children:"Logout"})]})}n(79);function U(){return console.log("manage porjects"),Object(p.jsxs)("div",{className:"admin-container",children:[Object(p.jsx)(B,{}),Object(p.jsx)("h1",{className:"admin-header",children:"Create new Admin"}),Object(p.jsx)(W,{}),Object(p.jsx)("h1",{className:"admin-header",children:"Create Project"}),Object(p.jsx)(V,{})]})}n(80),n(81);function Y(e){var t=Object(s.c)((function(e){return e.admin}));return Object(c.useEffect)((function(){window.addEventListener("scroll",(function(){this.scrollY>this.innerHeight/2.1?document.body.classList.add("bg-active"):document.body.classList.remove("bg-active")}))}),[]),Object(p.jsxs)(u.a,{children:[Object(p.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(m,{})}}),Object(p.jsx)(d.b,{path:"/about",render:function(){return Object(p.jsx)(v,{})}}),Object(p.jsx)(d.b,{path:"/contact",render:function(){return Object(p.jsx)(w,{})}}),Object(p.jsx)(d.b,{path:"/projects",render:function(){return Object(p.jsx)(A,{})}}),Object(p.jsx)(d.b,{path:"/singleProject/:id",render:function(e){return Object(p.jsx)(q,{projectId:e.match.params.id})}}),Object(p.jsx)(d.b,{path:"/login",render:function(){return Object(p.jsx)(M,{})}}),t?Object(p.jsx)(d.b,{path:"/manageProjects",render:function(){return Object(p.jsx)(U,{})}}):Object(p.jsx)(d.a,{to:"/"})]})}var z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},K=n(14);n(82);var Q=Object(i.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return console.log("reducer running",typeof t.type),"GET_PROJECTS"===t.type&&(e=Object(K.a)(Object(K.a)({},e),{},{data:t.data})),"POST_NEWPROJECT"===t.type&&(e=Object(K.a)(Object(K.a)({},e),{},{data:t.data})),"GET_LOGIN"===t.type&&(console.log("reducer",t.admin),e=Object(K.a)(Object(K.a)({},e),{},{admin:t.admin})),"GET_REGISTRATION"===t.type&&(e=Object(K.a)(Object(K.a)({},e),{},{admin:t.admin})),"GET_ERROR"===t.type&&(console.log("reducer error",t.error),e=Object(K.a)(Object(K.a)({},e),{},{error:t.error})),e}),Object(j.composeWithDevTools)(Object(i.applyMiddleware)(l.a))),X=Object(p.jsx)(s.a,{store:Q,children:Object(p.jsx)(Y,{})});r.a.render(X,document.getElementById("root")),z()}},[[83,1,2]]]);
//# sourceMappingURL=main.6bc9d74f.chunk.js.map