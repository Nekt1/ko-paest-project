(function(){"use strict";var e={7569:function(e,t,n){var s=n(9242),i=n(3396);const a={class:"navbar navbar-expand-md navbar-dark bg-danger"},o={class:"container-fluid"},r=(0,i._)("a",{class:"navbar-brand",href:"#"},[(0,i._)("i",{class:"fa-solid fa-candy-cane"}),(0,i.Uk)(" KO PAĒST?")],-1),l=(0,i._)("button",{class:"navbar-toggler border-white",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,i._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav ms-auto mb-2 mb-md-0"},u={class:"nav-item"},p=(0,i.Uk)("Home"),m={class:"nav-item"},f=(0,i.Uk)("Sign Up"),b={class:"nav-item"},h=(0,i.Uk)("Log In"),g={class:"nav-item"},v=(0,i.Uk)("Profile");function y(e,t){const n=(0,i.up)("router-link"),s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",a,[(0,i._)("div",o,[r,l,(0,i._)("div",c,[(0,i._)("ul",d,[(0,i._)("li",u,[(0,i.Wm)(n,{to:"/",class:"nav-link text-white"},{default:(0,i.w5)((()=>[p])),_:1})]),(0,i._)("li",m,[(0,i.Wm)(n,{to:"/signup",class:"nav-link"},{default:(0,i.w5)((()=>[f])),_:1})]),(0,i._)("li",b,[(0,i.Wm)(n,{to:"/login",class:"nav-link"},{default:(0,i.w5)((()=>[h])),_:1})]),(0,i._)("li",g,[(0,i.Wm)(n,{to:"/profile",class:"nav-link"},{default:(0,i.w5)((()=>[v])),_:1})])])])])]),(0,i.Wm)(s)],64)}var _=n(89);const w={},k=(0,_.Z)(w,[["render",y]]);var x=k,M=n(678),j=n(7139),C=n.p+"img/ko-paest-logo.b8b862eb.jpg";const I={class:"home container mt-4"},S={class:"border border-danger rounded-2 px-3 pb-5 pt-3"},E=(0,i._)("img",{class:"d-block img-fluid mx-auto",src:C},null,-1),D={class:"row"},O={class:"mb-3 col"},R=(0,i._)("label",{for:"searchMode",class:"form-label fw-bold"},"Choose your search mode:",-1),A=(0,i._)("option",{value:"ingredients"},"Search by ingredients",-1),P=(0,i._)("option",{value:"nutrients"},"Search by calories",-1),K=(0,i._)("option",{value:"name"},"Search by recipe name",-1),U=[A,P,K],q={key:0,class:"mb-3"},$={for:"apiInput",class:"form-label fw-bold"},T={key:0},F={key:1},z={class:"input-group"},H=["placeholder"],L={key:1,class:"mb-3"},N=(0,i._)("label",{for:"caloriesInput",class:"form-label fw-bold"},"Enter the amount of calories:",-1),V={class:"d-flex"},W={class:"input-group"},Y=(0,i._)("span",{class:"input-group-text rounded-0"},"Min",-1),B={class:"input-group"},Z=(0,i._)("span",{class:"input-group-text rounded-0"},"Max",-1),X={class:"mb-3 col"},G=(0,i._)("label",{for:"searchAmount",class:"form-label fw-bold"},"Choose the amount of recipes to search:",-1),J=(0,i._)("option",{value:"10"},"10",-1),Q=(0,i._)("option",{value:"25"},"25",-1),ee=(0,i._)("option",{value:"50"},"50",-1),te=(0,i._)("option",{value:"100"},"100",-1),ne=[J,Q,ee,te],se={class:"d-flex justify-content-between"},ie=(0,i._)("i",{class:"fa-solid fa-magnifying-glass"},null,-1),ae=(0,i.Uk)(" Search"),oe=[ie,ae],re=(0,i._)("i",{class:"fa-solid fa-dice"},null,-1),le=(0,i.Uk)(" Surprise me!"),ce=[re,le],de={key:0,class:"mt-5 px-4"},ue={class:"d-flex row"},pe={class:"row g-0"},me={class:"d-flex align-items-center col-6 col-md-12"},fe=["src"],be={class:"col-6 col-md-12 card-body p-0"},he={class:"card-title px-2 my-2"},ge={key:0,class:"card-text my-2"},ve=["onClick"],ye={key:1,class:"mt-5"},_e=(0,i._)("p",{class:"display-5 text-center fw-bold"},"Sorry, no recipes were found. Could you try searching for something else?",-1),we=[_e],ke={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},xe={class:"modal-dialog"},Me={class:"modal-content"},je={id:"pdf-content"},Ce={class:"modal-header"},Ie={class:"modal-title fst-italic fs-4",id:"exampleModalLabel"},Se=(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Ee={key:0,class:"modal-body"},De=(0,i._)("i",{class:"fa-solid fa-carrot"},null,-1),Oe=(0,i._)("span",{class:"fw-bold"}," Required ingredients:",-1),Re=(0,i._)("i",{class:"fa-solid fa-kitchen-set"},null,-1),Ae=(0,i._)("span",{class:"fw-bold"}," Required equipment:",-1),Pe={class:"d-flex align-items-center"},Ke={class:"display-5 me-3 fst-italic"},Ue={key:1,class:"modal-body"},qe={class:"modal-footer"},$e=(0,i._)("button",{type:"button",class:"btn btn-primary"},"Save to profile",-1);function Te(e,t,n,a,o,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",I,[(0,i._)("form",S,[E,(0,i._)("div",D,[(0,i._)("div",O,[R,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.searchMode=e),class:"form-select","aria-label":"Select the search mode",title:"Choose the mode to search the recipes",id:"searchMode",onChange:t[1]||(t[1]=e=>this.apiInput="")},U,544),[[s.bM,o.searchMode]])])]),"ingredients"===o.searchMode||"name"===o.searchMode?((0,i.wg)(),(0,i.iD)("div",q,[(0,i._)("label",$,["ingredients"===o.searchMode?((0,i.wg)(),(0,i.iD)("span",T,"Enter your products:")):(0,i.kq)("",!0),"name"===o.searchMode?((0,i.wg)(),(0,i.iD)("span",F,"Enter the name of recipe:")):(0,i.kq)("",!0)]),(0,i._)("div",z,[(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",id:"apiInput","onUpdate:modelValue":t[2]||(t[2]=e=>o.apiInput=e),placeholder:r.placeholder},null,8,H),[[s.nr,o.apiInput]]),(0,i._)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon",onClick:t[3]||(t[3]=e=>this.apiInput="")},"X")])])):(0,i.kq)("",!0),"nutrients"===o.searchMode?((0,i.wg)(),(0,i.iD)("div",L,[N,(0,i._)("div",V,[(0,i._)("div",W,[Y,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control rounded-0",id:"nutrientsMin","onUpdate:modelValue":t[4]||(t[4]=e=>o.nutrientsMin=e)},null,512),[[s.nr,o.nutrientsMin]]),(0,i._)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon",onClick:t[5]||(t[5]=e=>this.nutrientsMin="")},"X")]),(0,i._)("div",B,[Z,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control rounded-0",id:"nutrientsMax","onUpdate:modelValue":t[6]||(t[6]=e=>o.nutrientsMax=e)},null,512),[[s.nr,o.nutrientsMax]]),(0,i._)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon",onClick:t[7]||(t[7]=e=>this.nutrientsMax="")},"X")])])])):(0,i.kq)("",!0),(0,i._)("div",X,[G,(0,i.wy)((0,i._)("select",{class:"form-select","onUpdate:modelValue":t[8]||(t[8]=e=>o.searchAmount=e),"aria-label":"Select the amount",title:"Choose how many recipes to search",id:"searchAmount"},ne,512),[[s.bM,o.searchAmount]])]),(0,i._)("div",se,[(0,i._)("button",{type:"submit",class:"btn btn-danger",onClick:t[9]||(t[9]=(...e)=>r.sendInput&&r.sendInput(...e))},oe),(0,i._)("button",{type:"submit",class:"btn btn-danger ms-2",onClick:t[10]||(t[10]=(...e)=>r.getRandomRecipes&&r.getRandomRecipes(...e))},ce)])]),o.isFetched&&this.recipes.length>1?((0,i.wg)(),(0,i.iD)("div",de,[(0,i._)("div",ue,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.recipes,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,class:"card text-center px-0 col-md-4 mb-2"},[(0,i._)("div",pe,[(0,i._)("div",me,[(0,i._)("img",{src:e.image,alt:"recipe-picture",class:"card-img-top"},null,8,fe)]),(0,i._)("div",be,[(0,i._)("p",he,(0,j.zw)(e.title),1),"nutrients"===o.searchMode?((0,i.wg)(),(0,i.iD)("p",ge,"Calories: "+(0,j.zw)(e.calories),1)):(0,i.kq)("",!0),(0,i._)("button",{class:"btn btn-outline-danger mt-2 mb-3",onClick:t=>r.getInstructions(e.id,e.title),"data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Instructions",8,ve)])])])))),128))])])):(0,i.kq)("",!0),o.isFetched&&1===this.recipes.length?((0,i.wg)(),(0,i.iD)("div",ye,we)):(0,i.kq)("",!0)]),(0,i._)("div",ke,[(0,i._)("div",xe,[(0,i._)("div",Me,[(0,i._)("div",je,[(0,i._)("div",Ce,[(0,i._)("h5",Ie,(0,j.zw)(this.selectedRecipeTitle),1),Se]),this.selectedRecipe?((0,i.wg)(),(0,i.iD)("div",Ee,[(0,i._)("p",null,[De,Oe,(0,i.Uk)(" "+(0,j.zw)(r.combineIngredients(this.selectedRecipe.steps))+".",1)]),(0,i._)("p",null,[Re,Ae,(0,i.Uk)(" "+(0,j.zw)(r.combineEquipment(this.selectedRecipe.steps))+".",1)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.selectedRecipe.steps,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i._)("p",Pe,[(0,i._)("span",Ke,(0,j.zw)(e.number),1),(0,i.Uk)((0,j.zw)(e.step),1)])])))),128))])):((0,i.wg)(),(0,i.iD)("div",Ue,"Sorry, we couldn't display your recipe instructions. Maybe you could try another one?"))]),(0,i._)("div",qe,[$e,(0,i._)("button",{type:"button",class:"btn btn-danger",onClick:t[11]||(t[11]=e=>r.generatePDF())},"Download as PDF")])])])])],64)}n(6699);var Fe=n(6265),ze=n.n(Fe),He=n(8577),Le=n.n(He),Ne={name:"HomeView",components:{},computed:{placeholder(){return"ingredients"===this.searchMode?"Separate producs with a comma":"name"===this.searchMode?"Enter the name of your recipe":""}},data(){return{apiInput:"",apiKey:"5f297dfffa5544a0b4f15ea398cfb4a7",info:null,isFetched:!1,searchAmount:10,recipes:[],selectedRecipe:"",selectedRecipeTitle:"",searchMode:"ingredients",nutrientsMin:0,nutrientsMax:0}},methods:{sendInput:function(){if("ingredients"===this.searchMode){const e=this.apiInput.split(", "),t=e.join(",+");ze().get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${t}&number=${this.searchAmount}&apiKey=${this.apiKey}`).then((e=>{this.info=e.data,this.recipes=this.info,this.isFetched=!0,0===this.recipes.length&&this.recipes.push("Sorry, no recipes found.")}))}else"nutrients"===this.searchMode?ze().get(`https://api.spoonacular.com/recipes/findByNutrients?minCalories=${this.nutrientsMin}&maxCalories=${this.nutrientsMax}&number=${this.searchAmount}&apiKey=${this.apiKey}`).then((e=>{this.recipes=e.data,this.isFetched=!0,0===this.recipes.length&&this.recipes.push("Sorry, no recipes found.")})):"name"===this.searchMode&&ze().get(`https://api.spoonacular.com/recipes/complexSearch?query=${this.apiInput}&number=${this.searchAmount}&apiKey=${this.apiKey}`).then((e=>{this.recipes=e.data.results,this.isFetched=!0,0===this.recipes.length&&this.recipes.push("Sorry, no recipes found.")}))},getInstructions(e,t){ze().get(`https://api.spoonacular.com/recipes/${e}/analyzedInstructions?apiKey=${this.apiKey}`).then((e=>{this.selectedRecipe=e.data,this.selectedRecipeTitle=t,this.selectedRecipe=this.selectedRecipe[0]}))},combineIngredients(e){if(null==e)return;const t=[];return e.forEach((e=>{e.ingredients.forEach((e=>{t.includes(e.name)||t.push(e.name)}))})),t.join(", ")},combineEquipment(e){if(null==e)return;const t=[];return e.forEach((e=>{e.equipment.forEach((e=>{t.includes(e.name)||t.push(e.name)}))})),t.join(", ")},getRandomRecipes(){this.searchMode="ingredients",this.apiInput="",ze().get(`https://api.spoonacular.com/recipes/random?number=${this.searchAmount}&apiKey=${this.apiKey}`).then((e=>{this.recipes=e.data.recipes,this.isFetched=!0}))},generatePDF(){const e=document.getElementById("pdf-content"),t={filename:`${this.selectedRecipeTitle}-recipe`};Le()().set(t).from(e).save()}}};const Ve=(0,_.Z)(Ne,[["render",Te]]);var We=Ve,Ye=n.p+"img/profile-picture.66a85560.png";const Be={class:"d-flex flex-column flex-sm-row justify-content-between my-2 mt-4",id:"profile-page"},Ze=(0,i.uE)('<div class="d-flex flex-column border-1 shadow-sm p-2 me-2 mb-3"><img src="'+Ye+'" alt="" class="d-block img-fluid"><ul class="list-group list-group-flush my-2"><li class="list-group-item"><span class="fw-bold">Name:</span> Artjoms</li><li class="list-group-item"><span class="fw-bold">Surname:</span> Kazmirčuks</li><li class="list-group-item">Hey, Artjoms Kazmirčuks!</li><li class="list-group-item"><span class="fw-bold">E-mail:</span> artjoms@kazmircuks.lv</li></ul><button class="btn btn-outline-danger mb-2" type="button">Change profile picture</button><button class="btn btn-outline-danger mb-2" type="button">Change password</button></div><div class="d-flex flex-column border-1 flex-fill shadow-sm px-3"><p class="display-4 text-danger">Your saved recipes</p><div class="card mb-2"><div class="row"><div class="col-4"><img src="https://spoonacular.com/recipeImages/640352-312x231" alt="" class="img-fluid me-2"></div><div class="col-8 d-flex flex-column justify-content-evenly align-items-center"><p class="lead my-0">Cranberry Apple Crisp</p><button type="button" class="btn btn-danger d-inline-block">Details</button></div></div></div><div class="card mb-2"><div class="row"><div class="col-4"><img src="https://spoonacular.com/recipeImages/632572-312x231.jpg" alt="" class="img-fluid me-2"></div><div class="col-8 d-flex flex-column justify-content-evenly align-items-center"><p class="lead my-0">Apple Pie</p><button type="button" class="btn btn-danger d-inline-block">Details</button></div></div></div><div class="card mb-2"><div class="row"><div class="col-4"><img src="https://spoonacular.com/recipeImages/632471-312x231.jpg" alt="" class="img-fluid me-2"></div><div class="col-8 d-flex flex-column justify-content-evenly align-items-center"><p class="lead my-0">Apple and Walnut Cake</p><button type="button" class="btn btn-danger d-inline-block">Details</button></div></div></div></div>',2),Xe=[Ze];function Ge(e,t){return(0,i.wg)(),(0,i.iD)("div",Be,Xe)}const Je={},Qe=(0,_.Z)(Je,[["render",Ge]]);var et=Qe;const tt={class:"container"},nt=(0,i.uE)('<form class="mx-auto my-4 p-4 border border-danger rounded-3"><h2 class="mb-2 display-4 text-danger">Log In</h2><div class="mb-2"><label for="exampleInputEmail1" class="form-label">Email address</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div><div class="mb-2"><label for="exampleInputPassword1" class="form-label">Password</label><input type="password" class="form-control" id="exampleInputPassword1"></div><button type="submit" class="btn btn-outline-danger">Enter</button></form>',1),st=[nt];function it(e,t){return(0,i.wg)(),(0,i.iD)("div",tt,st)}const at={},ot=(0,_.Z)(at,[["render",it]]);var rt=ot;const lt=[{path:"/",name:"home",component:We},{path:"/signup",name:"signup",component:()=>n.e(443).then(n.bind(n,4819))},{path:"/profile",name:"profile",component:et},{path:"/login",name:"login",component:rt}],ct=(0,M.p7)({history:(0,M.r5)(),routes:lt});var dt=ct;n(8052);(0,s.ri)(x).use(dt).mount("#app")}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,a){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],i=e[d][1],a=e[d][2];for(var r=!0,l=0;l<s.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(r=!1,a<o&&(o=a));if(r){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(s,i){if(1&i&&(s=this(s)),8&i)return s;if("object"===typeof s&&s){if(4&i&&s.__esModule)return s;if(16&i&&"function"===typeof s.then)return s}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var r=2&i&&s;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){o[e]=function(){return s[e]}}));return o["default"]=function(){return s},n.d(a,o),a}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,s){return n.f[s](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{443:"4f747cd9",617:"c2b65ff7",902:"2a347d78"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ko-paest-project:";n.l=function(s,i,a,o){if(e[s])e[s].push(i);else{var r,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==s||u.getAttribute("data-webpack")==t+a){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+a),r.src=s),e[s]=[i];var p=function(t,n){r.onerror=r.onload=null,clearTimeout(m);var i=e[s];if(delete e[s],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/ko-paest-project/"}(),function(){var e={143:0};n.f.j=function(t,s){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)s.push(i[2]);else{var a=new Promise((function(n,s){i=e[t]=[n,s]}));s.push(i[2]=a);var o=n.p+n.u(t),r=new Error,l=function(s){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;r.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",r.name="ChunkLoadError",r.type=a,r.request=o,i[1](r)}};n.l(o,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,a,o=s[0],r=s[1],l=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var d=l(n)}for(t&&t(s);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},s=self["webpackChunkko_paest_project"]=self["webpackChunkko_paest_project"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(7569)}));s=n.O(s)})();
//# sourceMappingURL=app.12a13188.js.map