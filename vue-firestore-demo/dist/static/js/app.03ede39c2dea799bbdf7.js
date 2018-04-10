webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n=a("Sazm"),s=a.n(n),o={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},methods:{logout:function(){var e=this;s.a.auth().signOut().then(function(){e.$router.push("/login")})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("div",{staticClass:"nav-wrapper green"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e._v("Employee Manager")]),e._v(" "),a("ul",{staticClass:"right"},[a("li",[a("router-link",{attrs:{to:"/"}},[e._v("Dashboard")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),e._v(" "),a("li",[a("button",{staticClass:"btn black",on:{click:e.logout}},[e._v("Logout")])])])],1)])])},staticRenderFns:[]},r={name:"app",components:{Navbar:a("VU/8")(o,l,!1,null,null,null).exports}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},d=a("VU/8")(r,p,!1,null,null,null).exports,u=a("/ocq"),c=(a("3VHS"),s.a.initializeApp({apiKey:"AIzaSyBG5c_jy6KtSZWGXbw3KDM0iesPYdRImo4",authDomain:"vuefs-prod-464d4.firebaseapp.com",databaseURL:"https://vuefs-prod-464d4.firebaseio.com",projectId:"vuefs-prod-464d4",storageBucket:"vuefs-prod-464d4.appspot.com",messagingSenderId:"816398327863"}).firestore()),m={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;c.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(a)})})}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v("\n      "+e._s(t.employee_id)+":"+e._s(t.name)+"\n\n      "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees")])])}]},_=a("VU/8")(m,v,!1,null,null,null).exports,f={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){c.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-employee"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.name))])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Employee ID#:"+e._s(e.employee_id))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))])]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),a("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},y=a("VU/8")(f,h,!1,null,null,null).exports,g={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;c.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){return e.$router.push("/")}).catch(function(e){return console.log(e)})}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v("New Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",[e._v("Employee ID#")])]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Name")])]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",[e._v("Department")])]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",[e._v("Position")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},C=a("VU/8")(g,w,!1,null,null,null).exports,b={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){c.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){return e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-employee"}},[a("h3",[e._v("Edit Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",disabled:"",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},E=a("VU/8")(b,x,!1,null,null,null).exports,k={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;s.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){alert("You are logged in as  "+e.email+"."),t.$router.push("/")}).catch(function(e){return alert(e.message)}),e.preventDefault()}}},P={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel green white-text center"},[a("h3",[e._v("Login")]),e._v(" "),a("form",[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:e.login}},[e._v("Login")])])])])])])])},staticRenderFns:[]},$=a("VU/8")(k,P,!1,null,null,null).exports,q={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;s.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){alert("Account created for "+e.email+"."),t.$router.push("/")}).catch(function(e){return alert(e.message)}),e.preventDefault()}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"register card-panel grey lighten-4 black-text center"},[a("h3",[e._v("Register")]),e._v(" "),a("form",[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:e.register}},[e._v("Register")])])])])])])])},staticRenderFns:[]},D=a("VU/8")(q,N,!1,null,null,null).exports;i.a.use(u.a);var R=new u.a({routes:[{path:"/",name:"dashboard",component:_,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:$,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:D,meta:{requiresGuest:!0}},{path:"/new",name:"new-employee",component:C,meta:{requiresAuth:!0}},{path:"/edit/:employee_id",name:"edit-employee",component:E,meta:{requiresAuth:!0}},{path:"/:employee_id",name:"view-employee",component:y,meta:{requiresAuth:!0}}]});R.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?s.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&s.a.auth().currentUser?a({path:"/",query:{redirect:e.fullPath}}):a()});var A=R;i.a.config.productionTip=!1,new i.a({el:"#app",router:A,template:"<App/>",components:{App:d}})}},["NHnr"]);
//# sourceMappingURL=app.03ede39c2dea799bbdf7.js.map