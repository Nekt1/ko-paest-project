(function(){"use strict";var e={1611:function(e,t,s){var n=s(9242),a=s(65),i=s(3396),o=s(7139);const r={class:"navbar navbar-expand-md navbar-dark bg-danger"},l={class:"container-fluid"},c=(0,i._)("a",{class:"navbar-brand",href:"#"},[(0,i._)("i",{class:"fa-solid fa-utensils"}),(0,i.Uk)(" KO PAĒST?")],-1),d=(0,i._)("button",{class:"navbar-toggler border-white",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,i._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarSupportedContent"},p={class:"navbar-nav ms-auto mb-2 mb-md-0"},m={class:"nav-item"},f=(0,i.Uk)("Home"),h={class:"nav-item"},b=(0,i.Uk)("Sign Up"),g={class:"nav-item"},y=(0,i.Uk)("Log In"),_={class:"nav-item"},v=(0,i.Uk)("Profile");function w(e,t,s,n,a,w){const k=(0,i.up)("router-link"),x=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",r,[(0,i._)("div",l,[c,d,(0,i._)("div",u,[(0,i._)("ul",p,[(0,i._)("li",m,[(0,i.Wm)(k,{to:"/",class:(0,o.C_)(["nav-link",{active:"home"===e.$route.name}])},{default:(0,i.w5)((()=>[f])),_:1},8,["class"])]),(0,i._)("li",h,[0===Object.keys(this.$store.state.user).length?((0,i.wg)(),(0,i.j4)(k,{key:0,to:"/signup",class:(0,o.C_)(["nav-link",{active:"signup"===e.$route.name}])},{default:(0,i.w5)((()=>[b])),_:1},8,["class"])):(0,i.kq)("",!0)]),(0,i._)("li",g,[0===Object.keys(this.$store.state.user).length?((0,i.wg)(),(0,i.j4)(k,{key:0,to:"/login",class:(0,o.C_)(["nav-link",{active:"login"===e.$route.name}])},{default:(0,i.w5)((()=>[y])),_:1},8,["class"])):(0,i.kq)("",!0)]),(0,i._)("li",_,[0!==Object.keys(this.$store.state.user).length?((0,i.wg)(),(0,i.j4)(k,{key:0,to:"/profile",class:(0,o.C_)(["nav-link",{active:"profile"===e.$route.name}])},{default:(0,i.w5)((()=>[v])),_:1},8,["class"])):(0,i.kq)("",!0)])])])])]),(0,i.Wm)(x)],64)}var k={beforeCreate(){this.$store.commit("initialiseUser")}},x=s(89);const M=(0,x.Z)(k,[["render",w]]);var I=M,R=s(678),C=s.p+"img/ko-paest-logo.b8b862eb.jpg";const S={class:"home container mt-4"},D={class:"border border-danger rounded-2 px-3 pb-5 pt-3"},j=(0,i._)("img",{class:"d-block img-fluid mx-auto",src:C},null,-1),U={class:"row"},$={class:"mb-3 col"},q=(0,i._)("label",{for:"searchMode",class:"form-label fw-bold"},"Choose your search mode:",-1),E=(0,i._)("option",{value:"ingredients"},"Search by ingredients",-1),O=(0,i._)("option",{value:"nutrients"},"Search by calories",-1),P=(0,i._)("option",{value:"name"},"Search by recipe name",-1),T=[E,O,P],z={key:0,class:"mb-3"},K={for:"apiInput",class:"form-label fw-bold"},A={key:0},F={key:1},N={class:"input-group"},H=["placeholder"],V={key:1,class:"mb-3"},Y=(0,i._)("label",{for:"caloriesInput",class:"form-label fw-bold"},"Enter the amount of calories:",-1),L={class:"d-flex"},B={class:"input-group"},Z=(0,i._)("span",{class:"input-group-text rounded-0"},"Min",-1),J={class:"input-group"},W=(0,i._)("span",{class:"input-group-text rounded-0"},"Max",-1),G={class:"mb-3 col"},X=(0,i._)("label",{for:"searchAmount",class:"form-label fw-bold"},"Choose the amount of recipes to search:",-1),Q=(0,i._)("option",{value:"10"},"10",-1),ee=(0,i._)("option",{value:"25"},"25",-1),te=(0,i._)("option",{value:"50"},"50",-1),se=(0,i._)("option",{value:"100"},"100",-1),ne=[Q,ee,te,se],ae={class:"d-flex justify-content-between"},ie=(0,i._)("i",{class:"fa-solid fa-magnifying-glass"},null,-1),oe=(0,i.Uk)(" Search"),re=[ie,oe],le=(0,i._)("i",{class:"fa-solid fa-dice"},null,-1),ce=(0,i.Uk)(" Surprise me!"),de=[le,ce],ue={key:0,class:"mt-5 px-4"},pe={class:"d-flex row"},me={class:"row g-0"},fe={class:"d-flex align-items-center col-6 col-md-12"},he=["src"],be={class:"col-6 col-md-12 card-body p-0"},ge={class:"card-title px-2 my-2"},ye={key:0,class:"card-text my-2"},_e=["onClick"],ve={key:1,class:"mt-5"},we=(0,i._)("p",{class:"display-5 text-center fw-bold"},"Sorry, no recipes were found. Could you try searching for something else?",-1),ke=[we],xe={class:"modal fade",id:"recipeModal",tabindex:"-1","aria-labelledby":"recipeModal","aria-hidden":"true"},Me={class:"modal-dialog"},Ie={class:"modal-content"},Re={id:"pdf-content"},Ce={class:"modal-header"},Se={class:"modal-title fst-italic fs-4",id:"exampleModalLabel"},De=(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),je={key:0,class:"modal-body"},Ue=(0,i._)("i",{class:"fa-solid fa-carrot"},null,-1),$e=(0,i._)("span",{class:"fw-bold"}," Required ingredients:",-1),qe=(0,i._)("i",{class:"fa-solid fa-kitchen-set"},null,-1),Ee=(0,i._)("span",{class:"fw-bold"}," Required equipment:",-1),Oe={class:"d-flex align-items-center"},Pe={class:"display-5 me-3 fst-italic"},Te={key:1,class:"modal-body"},ze={class:"modal-footer"};function Ke(e,t,s,a,r,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",S,[(0,i._)("form",D,[j,(0,i._)("div",U,[(0,i._)("div",$,[q,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.searchMode=e),class:"form-select","aria-label":"Select the search mode",title:"Choose the mode to search the recipes",id:"searchMode",onChange:t[1]||(t[1]=e=>l.clearSearch())},T,544),[[n.bM,r.searchMode]])])]),"ingredients"===r.searchMode||"name"===r.searchMode?((0,i.wg)(),(0,i.iD)("div",z,[(0,i._)("label",K,["ingredients"===r.searchMode?((0,i.wg)(),(0,i.iD)("span",A,"Enter your products:")):(0,i.kq)("",!0),"name"===r.searchMode?((0,i.wg)(),(0,i.iD)("span",F,"Enter the name of recipe:")):(0,i.kq)("",!0)]),(0,i._)("div",N,[(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",id:"apiInput","onUpdate:modelValue":t[2]||(t[2]=e=>r.apiInput=e),placeholder:l.placeholder},null,8,H),[[n.nr,r.apiInput]]),(0,i._)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon",onClick:t[3]||(t[3]=e=>this.apiInput="")},"X")])])):(0,i.kq)("",!0),"nutrients"===r.searchMode?((0,i.wg)(),(0,i.iD)("div",V,[Y,(0,i._)("div",L,[(0,i._)("div",B,[Z,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control rounded-0",id:"nutrientsMin","onUpdate:modelValue":t[4]||(t[4]=e=>r.nutrientsMin=e)},null,512),[[n.nr,r.nutrientsMin]]),(0,i._)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon",onClick:t[5]||(t[5]=e=>this.nutrientsMin="")},"X")]),(0,i._)("div",J,[W,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control rounded-0",id:"nutrientsMax","onUpdate:modelValue":t[6]||(t[6]=e=>r.nutrientsMax=e)},null,512),[[n.nr,r.nutrientsMax]]),(0,i._)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon",onClick:t[7]||(t[7]=e=>this.nutrientsMax="")},"X")])])])):(0,i.kq)("",!0),(0,i._)("div",G,[X,(0,i.wy)((0,i._)("select",{class:"form-select","onUpdate:modelValue":t[8]||(t[8]=e=>r.searchAmount=e),"aria-label":"Select the amount",title:"Choose how many recipes to search",id:"searchAmount"},ne,512),[[n.bM,r.searchAmount]])]),(0,i._)("div",ae,[(0,i._)("button",{type:"button",class:"btn btn-danger",onClick:t[9]||(t[9]=(...e)=>l.sendInput&&l.sendInput(...e))},re),(0,i._)("button",{type:"button",class:"btn btn-danger ms-2",onClick:t[10]||(t[10]=(...e)=>l.getRandomRecipes&&l.getRandomRecipes(...e))},de)])]),r.isFetched&&this.recipes.length>1?((0,i.wg)(),(0,i.iD)("div",ue,[(0,i._)("div",pe,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.recipes,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,class:"card text-center px-0 col-md-4 mb-2 pb-2"},[(0,i._)("div",me,[(0,i._)("div",fe,[(0,i._)("img",{src:e.image,alt:"recipe-picture",class:"card-img-top"},null,8,he)]),(0,i._)("div",be,[(0,i._)("p",ge,(0,o.zw)(e.title),1),"nutrients"===r.searchMode?((0,i.wg)(),(0,i.iD)("p",ye,"Calories: "+(0,o.zw)(e.calories),1)):(0,i.kq)("",!0),(0,i._)("button",{class:"btn btn-outline-danger mt-2 mb-3",onClick:t=>l.getInstructions(e.id,e.title,e.image),"data-bs-toggle":"modal","data-bs-target":"#recipeModal"},"Instructions",8,_e)])])])))),128))])])):(0,i.kq)("",!0),r.isFetched&&1===this.recipes.length?((0,i.wg)(),(0,i.iD)("div",ve,ke)):(0,i.kq)("",!0)]),(0,i._)("div",xe,[(0,i._)("div",Me,[(0,i._)("div",Ie,[(0,i._)("div",Re,[(0,i._)("div",Ce,[(0,i._)("h5",Se,(0,o.zw)(this.selectedRecipeTitle),1),De]),this.selectedRecipe?((0,i.wg)(),(0,i.iD)("div",je,[(0,i._)("p",null,[Ue,$e,(0,i.Uk)(" "+(0,o.zw)(l.combineIngredients(this.selectedRecipe.steps))+".",1)]),(0,i._)("p",null,[qe,Ee,(0,i.Uk)(" "+(0,o.zw)(l.combineEquipment(this.selectedRecipe.steps))+".",1)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.selectedRecipe.steps,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i._)("p",Oe,[(0,i._)("span",Pe,(0,o.zw)(e.number),1),(0,i.Uk)((0,o.zw)(e.step),1)])])))),128))])):((0,i.wg)(),(0,i.iD)("div",Te,"Sorry, we couldn't display your recipe instructions. Maybe you could try another one?"))]),(0,i._)("div",ze,[(0,i._)("button",{onClick:t[11]||(t[11]=e=>l.saveToProfile()),type:"button",class:(0,o.C_)(["btn btn-primary",{disabled:0===Object.keys(this.$store.state.user).length}])},"Save to profile",2),(0,i._)("button",{type:"button",class:"btn btn-danger",onClick:t[12]||(t[12]=e=>l.generatePDF())},"Download as PDF")])])])])],64)}s(6699);var Ae=s(6265),Fe=s.n(Ae),Ne=s(8577),He=s.n(Ne),Ve={name:"HomeView",components:{},computed:{placeholder(){return"ingredients"===this.searchMode?"Separate producs with a comma":"name"===this.searchMode?"Enter the name of your recipe":""}},data(){return{apiInput:"",apiKey:"5f297dfffa5544a0b4f15ea398cfb4a7",info:null,isFetched:!1,searchAmount:10,recipes:[],selectedRecipe:"",selectedRecipeTitle:"",selectedRecipeID:"",selectedRecipeIMG:"",searchMode:"ingredients",nutrientsMin:0,nutrientsMax:0}},methods:{sendInput:function(){if("ingredients"===this.searchMode){const e=this.apiInput.split(", "),t=e.join(",+");Fe().get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${t}&number=${this.searchAmount}&apiKey=${this.apiKey}`).then((e=>{this.info=e.data,this.recipes=this.info,this.isFetched=!0,0===this.recipes.length&&this.recipes.push("Sorry, no recipes found.")}))}else"nutrients"===this.searchMode?Fe().get(`https://api.spoonacular.com/recipes/findByNutrients?minCalories=${this.nutrientsMin}&maxCalories=${this.nutrientsMax}&number=${this.searchAmount}&apiKey=${this.apiKey}`).then((e=>{this.recipes=e.data,this.isFetched=!0,0===this.recipes.length&&this.recipes.push("Sorry, no recipes found.")})):"name"===this.searchMode&&Fe().get(`https://api.spoonacular.com/recipes/complexSearch?query=${this.apiInput}&number=${this.searchAmount}&apiKey=${this.apiKey}`).then((e=>{this.recipes=e.data.results,this.isFetched=!0,0===this.recipes.length&&this.recipes.push("Sorry, no recipes found.")}))},getInstructions(e,t,s){Fe().get(`https://api.spoonacular.com/recipes/${e}/analyzedInstructions?apiKey=${this.apiKey}`).then((n=>{this.selectedRecipe=n.data,this.selectedRecipeTitle=t,this.selectedRecipeID=e,this.selectedRecipeIMG=s,this.selectedRecipe=this.selectedRecipe[0]}))},combineIngredients(e){if(null==e)return;const t=[];return e.forEach((e=>{e.ingredients.forEach((e=>{t.includes(e.name)||t.push(e.name)}))})),t.join(", ")},combineEquipment(e){if(null==e)return;const t=[];return e.forEach((e=>{e.equipment.forEach((e=>{t.includes(e.name)||t.push(e.name)}))})),t.join(", ")},getRandomRecipes(){this.searchMode="ingredients",this.apiInput="",Fe().get(`https://api.spoonacular.com/recipes/random?number=${this.searchAmount}&apiKey=${this.apiKey}`).then((e=>{this.recipes=e.data.recipes,this.isFetched=!0}))},generatePDF(){const e=document.getElementById("pdf-content"),t={filename:`${this.selectedRecipeTitle}-recipe`};He()().set(t).from(e).save()},async saveToProfile(){await Fe().post("https://fathomless-meadow-35990.herokuapp.com/saveRecipe",{remote_id:this.selectedRecipeID,title:this.selectedRecipeTitle,image_url:this.selectedRecipeIMG,user_id:this.$store.state.user.id}).then((function(e){return e.data})).catch((e=>e))},clearSearch(){this.apiInput="",this.recipes=""}}};const Ye=(0,x.Z)(Ve,[["render",Ke]]);var Le=Ye,Be=s.p+"img/profile-picture.66a85560.png";const Ze={class:"d-flex flex-column flex-sm-row justify-content-between my-2 mt-4",id:"profile-page"},Je={class:"d-flex flex-column border-1 shadow-sm p-2 me-2 mb-3"},We=(0,i._)("img",{src:Be,alt:"",class:"d-block img-fluid"},null,-1),Ge={class:"list-group list-group-flush my-2"},Xe={class:"list-group-item"},Qe={class:"list-group-item"},et=(0,i._)("span",{class:"fw-bold"},"E-mail:",-1),tt={class:"d-flex flex-column"},st=(0,i._)("button",{class:"btn btn-outline-danger mb-2",type:"button"},"Change profile picture (Temporarily unavailable)",-1),nt=(0,i._)("button",{class:"btn btn-outline-danger mb-2",type:"button"},"Change password (Temporarily unavailable)",-1),at={class:"d-flex flex-column border-1 flex-fill shadow-sm px-3"},it=(0,i._)("p",{class:"display-4 text-danger"},"Your saved recipes",-1),ot={class:"card mb-2"},rt={class:"row"},lt={class:"col-4"},ct=["src"],dt={class:"col-8 d-flex flex-column justify-content-evenly align-items-center"},ut={class:"lead my-0"},pt={class:"d-flex"},mt=["onClick"],ft=["onClick"],ht={class:"modal fade",id:"profileRecipeModal",tabindex:"-1","aria-labelledby":"profileRecipeModal","aria-hidden":"true"},bt={class:"modal-dialog"},gt={class:"modal-content"},yt={id:"pdf-content"},_t={class:"modal-header"},vt={class:"modal-title fst-italic fs-4",id:"exampleModalLabel"},wt=(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),kt={key:0,class:"modal-body"},xt=(0,i._)("i",{class:"fa-solid fa-carrot"},null,-1),Mt=(0,i._)("span",{class:"fw-bold"}," Required ingredients:",-1),It=(0,i._)("i",{class:"fa-solid fa-kitchen-set"},null,-1),Rt=(0,i._)("span",{class:"fw-bold"}," Required equipment:",-1),Ct={class:"d-flex align-items-center"},St={class:"display-5 me-3 fst-italic"},Dt={key:1,class:"modal-body"},jt={class:"modal-footer"};function Ut(e,t,s,n,a,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",Ze,[(0,i._)("div",Je,[We,(0,i._)("ul",Ge,[(0,i._)("li",Xe,"Hey, "+(0,o.zw)(this.$store.state.user.name)+" "+(0,o.zw)(this.$store.state.user.surname)+"!",1),(0,i._)("li",Qe,[et,(0,i.Uk)(" "+(0,o.zw)(this.$store.state.user.email),1)])]),(0,i._)("div",tt,[(0,i._)("button",{class:"btn btn-outline-danger mb-2",type:"button",onClick:t[0]||(t[0]=(...e)=>r.exitProfile&&r.exitProfile(...e))},"Exit profile"),st,nt])]),(0,i._)("div",at,[it,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.recipes,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"card mb-2",key:e.num},[(0,i._)("div",ot,[(0,i._)("div",rt,[(0,i._)("div",lt,[(0,i._)("img",{src:e.image_url,alt:"",class:"img-fluid me-2"},null,8,ct)]),(0,i._)("div",dt,[(0,i._)("p",ut,(0,o.zw)(e.title),1),(0,i._)("div",pt,[(0,i._)("button",{type:"button",class:"btn btn-danger d-inline-block me-2","data-bs-toggle":"modal","data-bs-target":"#profileRecipeModal",onClick:t=>r.getInstructions(e.remote_id,e.title,e.image_url)},"Details",8,mt),(0,i._)("button",{type:"button",class:"btn btn-danger d-inline-block",onClick:t=>r.removeRecipe(e.remote_id)},"Remove recipe",8,ft)])])])])])))),128))])]),(0,i._)("div",ht,[(0,i._)("div",bt,[(0,i._)("div",gt,[(0,i._)("div",yt,[(0,i._)("div",_t,[(0,i._)("h5",vt,(0,o.zw)(this.selectedRecipeTitle),1),wt]),this.selectedRecipe?((0,i.wg)(),(0,i.iD)("div",kt,[(0,i._)("p",null,[xt,Mt,(0,i.Uk)(" "+(0,o.zw)(r.combineIngredients(this.selectedRecipe.steps))+".",1)]),(0,i._)("p",null,[It,Rt,(0,i.Uk)(" "+(0,o.zw)(r.combineEquipment(this.selectedRecipe.steps))+".",1)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.selectedRecipe.steps,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i._)("p",Ct,[(0,i._)("span",St,(0,o.zw)(e.number),1),(0,i.Uk)((0,o.zw)(e.step),1)])])))),128))])):((0,i.wg)(),(0,i.iD)("div",Dt,"Sorry, we couldn't display your recipe instructions. Maybe you could try another one?"))]),(0,i._)("div",jt,[(0,i._)("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=e=>r.generatePDF())},"Download as PDF")])])])])],64)}var $t={data(){return{recipes:"",selectedRecipe:"",selectedRecipeTitle:"",apiKey:"5f297dfffa5544a0b4f15ea398cfb4a7"}},async beforeCreate(){const e=await Fe().get(`https://fathomless-meadow-35990.herokuapp.com/${this.$store.state.user.id}/getRecipes`).then((function(e){return e.data}));this.recipes=e},methods:{exitProfile(){this.$store.commit("setUser",{}),this.$router.push({path:"/"})},getInstructions(e,t){Fe().get(`https://api.spoonacular.com/recipes/${e}/analyzedInstructions?apiKey=${this.apiKey}`).then((e=>{this.selectedRecipe=e.data,this.selectedRecipe=this.selectedRecipe[0],this.selectedRecipeTitle=t}))},generatePDF(){const e=document.getElementById("pdf-content"),t={filename:`${this.selectedRecipeTitle}-recipe`};He()().set(t).from(e).save()},combineIngredients(e){if(null==e)return;const t=[];return e.forEach((e=>{e.ingredients.forEach((e=>{t.includes(e.name)||t.push(e.name)}))})),t.join(", ")},combineEquipment(e){if(null==e)return;const t=[];return e.forEach((e=>{e.equipment.forEach((e=>{t.includes(e.name)||t.push(e.name)}))})),t.join(", ")},removeRecipe(e){const t=this.recipes.findIndex((t=>t.remote_id===e));this.recipes.splice(t,1),Fe().post("https://fathomless-meadow-35990.herokuapp.com/deleteRecipe",{recipe_id:e,user_id:this.$store.state.user.id}).then((function(e){})).catch((e=>{console.log(e)}))}}};const qt=(0,x.Z)($t,[["render",Ut]]);var Et=qt;const Ot={class:"container"},Pt=(0,i._)("h2",{class:"mb-2 display-4 text-danger"},"Log In",-1),Tt={class:"mb-2"},zt=(0,i._)("label",{for:"emailInput",class:"form-label"},"Email address",-1),Kt={class:"mb-4"},At=(0,i._)("label",{for:"passwordInput",class:"form-label"},"Password",-1),Ft={class:"d-flex justify-content-between align-items-center"},Nt=(0,i._)("button",{type:"submit",class:"btn btn-outline-danger"},"Enter",-1),Ht={key:0,class:"lead text-danger m-0"},Vt={class:"lead text-center"},Yt=(0,i.Uk)("Not registered? "),Lt=(0,i.Uk)("Create an account");function Bt(e,t,s,a,r,l){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",Ot,[(0,i._)("form",{onSubmit:t[2]||(t[2]=(...e)=>l.onSubmit&&l.onSubmit(...e)),class:"mx-auto my-4 p-4 border border-danger rounded-3"},[Pt,(0,i._)("div",Tt,[zt,(0,i.wy)((0,i._)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e),class:"form-control",id:"emailInput","aria-describedby":"emailHelp"},null,512),[[n.nr,r.email]])]),(0,i._)("div",Kt,[At,(0,i.wy)((0,i._)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e),class:"form-control",id:"passwordInput"},null,512),[[n.nr,r.password]])]),(0,i._)("div",Ft,[Nt,this.errorMessage?((0,i.wg)(),(0,i.iD)("p",Ht,(0,o.zw)(this.errorMessage),1)):(0,i.kq)("",!0)])],32),(0,i._)("p",Vt,[Yt,(0,i.Wm)(c,{to:"/signup",class:"link-danger"},{default:(0,i.w5)((()=>[Lt])),_:1})])])}var Zt={data(){return{email:"",password:"",userData:{},errorMessage:""}},methods:{async onSubmit(e){e.preventDefault(),this.errorMessage="";const t=await Fe().post("https://fathomless-meadow-35990.herokuapp.com/signin",{email:this.email,password:this.password}).then((function(e){return e.data})).catch((e=>e));"message"in t?this.errorMessage=JSON.parse(t.request.response).message:(this.$store.commit("setUser",t),this.$router.push({path:"/profile"}))}}};const Jt=(0,x.Z)(Zt,[["render",Bt]]);var Wt=Jt;const Gt={class:"container"},Xt=(0,i._)("h2",{class:"mb-2 display-4 text-danger"},"Sign Up",-1),Qt={class:"mb-2"},es=(0,i._)("label",{for:"exampleInputName",class:"form-label"},"Name",-1),ts={class:"mb-2"},ss=(0,i._)("label",{for:"exampleInputSurname",class:"form-label"},"Surname",-1),ns={class:"mb-2"},as=(0,i._)("label",{for:"exampleInputEmail1",class:"form-label"},"Email address",-1),is={class:"mb-4"},os=(0,i._)("label",{for:"registrationPasswordInput",class:"form-label"},"Password",-1),rs={class:"d-flex justify-content-between align-items-center"},ls=(0,i._)("button",{type:"submit",class:"btn btn-outline-danger"},"Submit",-1),cs={key:0,class:"lead text-danger m-0 ms-2 text-center"},ds={class:"lead text-center"},us=(0,i.Uk)("Already have an account? "),ps=(0,i.Uk)("Log in");function ms(e,t,s,a,r,l){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",Gt,[(0,i._)("form",{onSubmit:t[4]||(t[4]=(...e)=>l.registerUser&&l.registerUser(...e)),class:"my-4 mx-auto border border-1 border-danger p-4 rounded-3"},[Xt,(0,i._)("div",Qt,[es,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",id:"exampleInputName",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>r.name=e)},null,512),[[n.nr,r.name]])]),(0,i._)("div",ts,[ss,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",id:"exampleInputLastName",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>r.surname=e)},null,512),[[n.nr,r.surname]])]),(0,i._)("div",ns,[as,(0,i.wy)((0,i._)("input",{type:"email",class:"form-control",id:"exampleInputEmail","aria-describedby":"emailHelp",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>r.email=e)},null,512),[[n.nr,r.email]])]),(0,i._)("div",is,[os,(0,i.wy)((0,i._)("input",{type:"password",class:"form-control",id:"registrationPasswordInput",required:"","onUpdate:modelValue":t[3]||(t[3]=e=>r.password=e),minlength:"8",placeholder:"Minimum 8 characters"},null,512),[[n.nr,r.password]])]),(0,i._)("div",rs,[ls,this.outputMessage?((0,i.wg)(),(0,i.iD)("p",cs,(0,o.zw)(this.outputMessage),1)):(0,i.kq)("",!0)])],32),(0,i._)("p",ds,[us,(0,i.Wm)(c,{to:"login",class:"link-danger"},{default:(0,i.w5)((()=>[ps])),_:1})])])}var fs={data(){return{email:"",password:"",name:"",surname:"",outputMessage:""}},methods:{async registerUser(e){e.preventDefault(),this.outputMessage="";const t=await Fe().post("https://fathomless-meadow-35990.herokuapp.com/signup",{name:this.name,surname:this.surname,email:this.email,password:this.password}).then((function(e){return e.data})).catch((e=>e));"code"in t&&(this.outputMessage=JSON.parse(t.request.response).message),t.successful&&(this.outputMessage="The registration was successful. You can now log in from the login page.")}}};const hs=(0,x.Z)(fs,[["render",ms]]);var bs=hs;const gs=[{path:"/",name:"home",component:Le},{path:"/signup",name:"signup",component:bs},{path:"/profile",name:"profile",component:Et},{path:"/login",name:"login",component:Wt}],ys=(0,R.p7)({history:(0,R.r5)(),routes:gs});var _s=ys;s(8052);const vs=(0,a.MT)({state:{user:{}},mutations:{initialiseUser(e){if(localStorage.getItem("user")){const t=JSON.parse(localStorage.getItem("user"));e.user=t}},setUser(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(e.user))}}});(0,n.ri)(I).use(_s).use(vs).mount("#app")}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,n,a,i){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],i=e[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(s.O).every((function(e){return s.O[e](n[l])}))?n.splice(l--,1):(r=!1,i<o&&(o=i));if(r){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,a,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};s.t=function(n,a){if(1&a&&(n=this(n)),8&a)return n;if("object"===typeof n&&n){if(4&a&&n.__esModule)return n;if(16&a&&"function"===typeof n.then)return n}var i=Object.create(null);s.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var r=2&a&&n;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){o[e]=function(){return n[e]}}));return o["default"]=function(){return n},s.d(i,o),i}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,n){return s.f[n](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+"."+{617:"c2b65ff7",902:"2a347d78"}[e]+".js"}}(),function(){s.miniCssF=function(e){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ko-paest-project:";s.l=function(n,a,i,o){if(e[n])e[n].push(a);else{var r,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",t+i),r.src=n),e[n]=[a];var p=function(t,s){r.onerror=r.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(s)})),t)return t(s)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/ko-paest-project/"}(),function(){var e={143:0};s.f.j=function(t,n){var a=s.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((function(s,n){a=e[t]=[s,n]}));n.push(a[2]=i);var o=s.p+s.u(t),r=new Error,l=function(n){if(s.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",r.name="ChunkLoadError",r.type=i,r.request=o,a[1](r)}};s.l(o,l,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,o=n[0],r=n[1],l=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(l)var d=l(s)}for(t&&t(n);c<o.length;c++)i=o[c],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(d)},n=self["webpackChunkko_paest_project"]=self["webpackChunkko_paest_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(1611)}));n=s.O(n)})();
//# sourceMappingURL=app.a8307ec8.js.map