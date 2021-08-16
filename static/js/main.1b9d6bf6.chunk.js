(this.webpackJsonpwhats_to_eat_react=this.webpackJsonpwhats_to_eat_react||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(9),r=a.n(i),c=a(12),o=a(14),l=a(15),u=a(19),d=a(18),h=(a(67),a(16)),b=(a(68),a.p+"static/media/my_logo.a73b85aa.jpg"),j=a(7),m=a(60),g=a.n(m),p=a(78),v=a(79),O="https://whatstoeat-backend.herokuapp.com/",f=a.n(v).a.create({baseURL:O,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"application/json",accept:"application/json"}});f.interceptors.response.use((function(e){return e}),function(){var e=Object(p.a)(g.a.mark((function e(t){var a,n,s,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.config,"undefined"!==typeof t.response){e.next=4;break}return alert("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||a.url!==O+"/api/token/refresh/"){e.next=7;break}return window.location.href="/login/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=23;break}if(!(n=localStorage.getItem("refresh_token"))){e.next=21;break}if(s=JSON.parse(atob(n.split(".")[1])),i=Math.ceil(Date.now()/1e3),console.log(s.exp),!(s.exp>i)){e.next=17;break}return e.abrupt("return",f.post("api/token/refresh/",{refresh:n}).then((function(e){return localStorage.setItem("access_token",e.data.access),localStorage.setItem("refresh_token",e.data.refresh),f.defaults.headers.Authorization="JWT "+e.data.access,a.headers.Authorization="JWT "+e.data.access,console.log("front user ",e.data.id),f(a)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",s.exp,i),window.location.href="/login/";case 19:e.next=23;break;case 21:console.log("Refresh token not available."),window.location.href="/login/";case 23:return e.abrupt("return",Promise.reject(t));case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var x,y,C=f,k=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getAll",value:function(){return C.get("/restaurants")}},{key:"get",value:function(e){return C.get("/restaurants/".concat(e))}},{key:"create",value:function(e){return C.post("/restaurants",e)}},{key:"update",value:function(e,t){return C.put("/restaurants/".concat(e),t)}},{key:"delete",value:function(e){return C.delete("/restaurants/".concat(e))}},{key:"findByCity",value:function(e){return C.get("/restaurants?city=".concat(e))}},{key:"getAllCities",value:function(){return C.get("/restaurants/city")}},{key:"createCuisine",value:function(e){return C.post("/api/cuisine/",e)}},{key:"getAllCuisines",value:function(){return C.get("/api/cuisine/")}},{key:"getCuisine",value:function(e){return C.get("api/cuisine/".concat(e))}},{key:"getRestaurants",value:function(e){return C.get("/cuisines/".concat(e))}}]),e}()),N=(a(58),a(1)),S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({selectedOption:e.target.value},(function(){return console.log("Option selected: ",e)}))},n.onChangeSearchCity=n.onChangeSearchCity.bind(Object(j.a)(n)),n.retrieveRestaurants=n.retrieveRestaurants.bind(Object(j.a)(n)),n.refreshList=n.refreshList.bind(Object(j.a)(n)),n.setActiveRestaurant=n.setActiveRestaurant.bind(Object(j.a)(n)),n.searchCity=n.searchCity.bind(Object(j.a)(n)),n.retrieveCities=n.retrieveCities.bind(Object(j.a)(n)),n.handleChange=n.handleChange.bind(Object(j.a)(n)),n.state={user:localStorage.getItem("id"),restaurants:[],currentRestaurant:null,currentIndex:-1,searchCity:"",cities:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveRestaurants(),this.retrieveCities()}},{key:"onChangeSearchCity",value:function(e){var t=e.target.value;this.setState({searchCity:t})}},{key:"retrieveRestaurants",value:function(){var e=this;console.log("*&*&*&*&* ",this.state.user),k.getAll().then((function(t){e.setState({restaurants:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveRestaurants(),this.setState({currentRestaurant:null,currentIndex:-1})}},{key:"setActiveRestaurant",value:function(e,t){this.setState({currentRestaurant:e,currentIndex:t}),console.log("res current index ",this.state.currentIndex)}},{key:"searchCity",value:function(e){var t=this;k.findByCity(this.state.selectedOption).then((function(e){t.setState({restaurants:e.data,currentRestaurant:null}),console.log("search city",e.data)})).catch((function(e){console.log(e)})),e.preventDefault()}},{key:"retrieveCities",value:function(){var e=this;k.getAllCities().then((function(t){e.setState({cities:t.data,selectedOption:t.data[0].city})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.restaurants,n=t.currentRestaurant,s=t.currentIndex;return Object(N.jsx)("div",{className:"bg",children:Object(N.jsxs)("div",{className:"card",children:[Object(N.jsxs)("div",{className:"col-md-8",children:[Object(N.jsx)("h5",{children:"Restaurants by City"}),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("form",{onSubmit:this.searchCity,children:[Object(N.jsx)("select",{className:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",value:this.state.selectedOption,onChange:this.handleChange,children:this.state.cities.map((function(e,t){return Object(N.jsx)("option",{value:e.city,children:e.city},t)}))}),Object(N.jsx)("button",{className:"submitBtn",type:"submit",value:"Submit",children:"Submit"})]})})]}),Object(N.jsxs)("div",{className:"col-md-8",children:[Object(N.jsx)("h4",{children:"Restaurant List"}),Object(N.jsx)("ul",{className:"list-group",children:a&&a.map((function(t,a){return Object(N.jsx)("li",{className:"list-group-item "+(a===s?"active":""),onClick:function(){return e.setActiveRestaurant(t,a)},children:t.name},a)}))})]}),Object(N.jsx)("div",{className:"col=md-6",children:n?Object(N.jsxs)("div",{children:[Object(N.jsx)("h4",{children:"Restaurant"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{children:Object(N.jsx)("strong",{children:"Name:"})})," ",n.name]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{children:Object(N.jsx)("strong",{children:"Website:"})})," ",Object(N.jsx)("a",{target:"_blank",href:n.website,children:n.website})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{children:Object(N.jsx)("strong",{children:"Address:"})})," ",n.address]}),Object(N.jsxs)("ul",{children:[Object(N.jsx)("label",{children:Object(N.jsx)("strong",{children:"Cuisines:"})}),n.cuisine.map((function(e){return Object(N.jsx)("li",{children:e.type},e.id)}))]}),Object(N.jsx)(c.b,{to:"/restaurants/"+n.id,className:"btn btn-outline-primary btn-sm",children:"Edit"})]}):Object(N.jsxs)("div",{children:[Object(N.jsx)("br",{}),Object(N.jsx)("p",{children:"Please click on a Restaurant..."})]})})]})})}}]),a}(n.Component),w=a(20),R=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeName=n.onChangeName.bind(Object(j.a)(n)),n.onChangeWebsite=n.onChangeWebsite.bind(Object(j.a)(n)),n.onChangeAddress=n.onChangeAddress.bind(Object(j.a)(n)),n.onChangeCity=n.onChangeCity.bind(Object(j.a)(n)),n.getRestaurant=n.getRestaurant.bind(Object(j.a)(n)),n.updateRestaurant=n.updateRestaurant.bind(Object(j.a)(n)),n.deleteRestaurant=n.deleteRestaurant.bind(Object(j.a)(n)),n.retrieveCuisines=n.retrieveCuisines.bind(Object(j.a)(n)),n.setCuisine=n.setCuisine.bind(Object(j.a)(n)),n.handleChange=n.handleChange.bind(Object(j.a)(n)),n.state={currentRestaurant:{id:null,name:"",website:"",address:"",city:"",cuisine:""},cuisines:[],message:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getRestaurant(this.props.match.params.id),this.retrieveCuisines()}},{key:"onChangeName",value:function(e){var t=e.target.value;this.setState((function(e){return{currentRestaurant:Object(w.a)(Object(w.a)({},e.currentRestaurant),{},{name:t})}}))}},{key:"onChangeWebsite",value:function(e){var t=e.target.value;this.setState((function(e){return{currentRestaurant:Object(w.a)(Object(w.a)({},e.currentRestaurant),{},{website:t})}}))}},{key:"onChangeAddress",value:function(e){var t=e.target.value;this.setState((function(e){return{currentRestaurant:Object(w.a)(Object(w.a)({},e.currentRestaurant),{},{address:t})}}))}},{key:"onChangeCity",value:function(e){var t=e.target.value;this.setState((function(e){return{currentRestaurant:Object(w.a)(Object(w.a)({},e.currentRestaurant),{},{city:t})}}))}},{key:"getRestaurant",value:function(e){var t=this;k.get(e).then((function(e){t.setState({currentRestaurant:e.data}),console.log("get restaurant ",e.data),console.log(t.state.currentRestaurant),console.log(t.state.currentRestaurant.cuisine)})).catch((function(e){console.log(e)}))}},{key:"updateRestaurant",value:function(){var e=this;k.update(this.state.currentRestaurant.id,this.state.currentRestaurant).then((function(t){console.log(t.data),e.setState({message:"The restaurant was update successfully!"})})).catch((function(e){console.log(e)}))}},{key:"deleteRestaurant",value:function(){var e=this;k.delete(this.state.currentRestaurant.id).then((function(t){console.log(t.data),e.props.history.push("/restaurants")})).catch((function(e){console.log(e)}))}},{key:"retrieveCuisines",value:function(){var e=this;k.getAllCuisines().then((function(t){e.setState({cuisines:t.data}),console.log("retrieve cuisines ",t.data)})).catch((function(e){console.log(e)}))}},{key:"setCuisine",value:function(e,t){console.log("set cuisine ",e),this.setState({cuisine:e,currentIndex:t})}},{key:"handleChange",value:function(e){var t={id:this.state.currentRestaurant.id,name:this.state.currentRestaurant.name,website:this.state.currentRestaurant.website,address:this.state.currentRestaurant.address,city:this.state.currentRestaurant.city,cuisine:e.target.value};console.log("event target ",e.target.value),this.setState({currentRestaurant:t}),e.preventDefault()}},{key:"render",value:function(){var e=this.state.currentRestaurant;return Object(N.jsx)("div",{children:e?Object(N.jsxs)("div",{className:"edit-form",children:[Object(N.jsx)("h4",{children:"Restaurant"}),Object(N.jsxs)("form",{children:[Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"name",children:"Name"}),Object(N.jsx)("input",{type:"text",className:"form-control",id:"name",value:e.name,onChange:this.onChangeName})]}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"website",children:"Website"}),Object(N.jsx)("input",{type:"text",className:"form-control",id:"website",value:e.website,onChange:this.onChangeWebsite,name:"website"})]}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"address",children:"Address"}),Object(N.jsx)("input",{type:"address",className:"form-control",id:"address",value:e.address,onChange:this.onChangeAddress})]}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"city",children:"City"}),Object(N.jsx)("input",{type:"text",className:"form-control",id:"city",value:e.city,onChange:this.onChangeCity,name:"city"})]})]}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("label",{htmlFor:"city",children:"Add Cuisine"}),Object(N.jsx)("form",{children:Object(N.jsx)("select",{className:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",value:this.state.cuisine,onChange:this.handleChange,children:this.state.cuisines.map((function(e){return Object(N.jsx)("option",{value:e.id,children:e.type},e.id)}))})})]}),Object(N.jsx)("button",{type:"submit",className:"btn btn-outline-dark btn-sm",onClick:this.updateRestaurant,children:"Update"}),Object(N.jsx)("button",{type:"submit",className:"btn btn-outline-dark btn-sm",onClick:this.deleteRestaurant,children:"Delete"}),Object(N.jsx)("p",{children:this.state.message})]}):Object(N.jsxs)("div",{children:[Object(N.jsx)("br",{}),Object(N.jsx)("p",{children:"Click on a Restaurant"})]})})}}]),a}(n.Component),_=a(40),I=a(91),A=a(41),M=A.a.div(x||(x=Object(_.a)(["\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 20px;\n    text-align:center;\n"]))),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onPlaceChanged=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props,t=e.map,a=e.addplace,s=n.autoComplete.getPlace();console.log("place ",s),console.log("contact ",s.website),s.geometry&&(s.geometry.viewport?t.fitBounds(s.geometry.viewport):(t.setCenter(s.geometry.location),t.setZoom(17)),a(s),n.searchInput.blur())},n.clearSearchBox=n.clearSearchBox.bind(Object(j.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.map,a=e.mapApi,n={fields:["name","url","website","address_components","geometry"],types:["establishment"]};this.autoComplete=new a.places.Autocomplete(this.searchInput,n),this.autoComplete.addListener("place_changed",this.onPlaceChanged),this.autoComplete.bindTo("bounds",t)}},{key:"componentWillUnmount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.mapApi;t.event.clearInstanceListeners(this.searchInput)}},{key:"clearSearchBox",value:function(){this.searchInput.value=""}},{key:"render",value:function(){var e=this;return Object(N.jsx)(M,{children:Object(N.jsx)("input",{className:"search-input",ref:function(t){e.searchInput=t},type:"text",onFocus:this.clearSearchBox,placeholder:"Enter a location"})})}}]),a}(n.Component),T=A.a.div(y||(y=Object(_.a)(["\n    position: absolute;\n    width: 38px;\n    height: 37px;\n    background-image: url(https://icon-library.com/images/pin-icon-png/pin-icon-png-9.jpg);\n    background-size: contain;\n    background-repeat: no-repeat;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -webkit-transform: translate(-50%,-50%);\n    -ms-transform: translate(-50%,-50%);\n    transform: translate(-50%,-50%);\n    cursor: grab;\n"]))),W=function(e){var t=e.text,a=e.onClick;return Object(N.jsx)(T,{alt:t,onClick:a})};W.defaultProps={onClick:null};var z,D=W,B=a(177),P=A.a.main(z||(z=Object(_.a)(["\n    width: 100%;\n    height: 100%;\n"]))),U=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={mapApiLoaded:!1,mapInstance:null,mapApi:null,geoCoder:null,user:localStorage.getItem("id"),places:[],restaurant_name:"",website:"",center:[],zoom:9,address:"",city:"",state:"",draggable:!0,lat:null,lng:null,submitted:!1},n.onMarkerInteraction=function(e,t,a){n.setState({draggable:!1,lat:a.lat,lng:a.lng})},n.onMarkerInteractionMouseUp=function(e,t,a){n.setState({draggable:!0}),n._generateAddress()},n._onChange=function(e){var t=e.center,a=e.zoom;n.setState({center:t,zoom:a})},n._onClick=function(e){n.setState({lat:e.lat,lng:e.lng})},n.apiHasLoaded=function(e,t){n.setState({mapApiLoaded:!0,mapInstance:e,mapApi:t}),n._generateAddress()},n.addPlace=function(e){console.log("addPlace ",e),n.setState({places:[e],restaurant_name:e.name,website:e.website,lat:e.geometry.location.lat(),lng:e.geometry.location.lng()}),n._generateAddress()},n.getCity=function(e){for(var t=0;t<e.length;t++)if(e[t].types[0])for(var a=0;a<e[t].types.length;a++)if("sublocality_level_1"===e[t].types[a]||"locality"===e[t].types[a])return e[t].long_name},n.getState=function(e){for(var t=0;t<e.length;t++)for(var a=0;a<e.length;a++)if(e[a].types[0]&&"administrative_area_level_1"===e[a].types[0])return e[a].long_name},n.saveRestaurant=n.saveRestaurant.bind(Object(j.a)(n)),n.newRestaurant=n.newRestaurant.bind(Object(j.a)(n)),n}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.setState({center:[47.608013,-122.335167],lat:47.608013,lng:-122.335167})}},{key:"saveRestaurant",value:function(){var e=this,t={user:this.state.user,name:this.state.restaurant_name,website:this.state.website,address:this.state.address,city:this.state.city};console.log("potato ",t),k.create(t).then((function(t){e.setState({id:t.data.id,name:t.data.name,website:t.data.website,address:t.data.address,city:t.data.city,user:e.state.user,submitted:!0}),console.log("saveRestaurant ",e.state.submitted),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"newRestaurant",value:function(){this.setState({id:null,user:this.state.user,name:"",website:"",address:"",city:"",submitted:!1}),console.log("newRestaurant ",this.submitted)}},{key:"_generateAddress",value:function(){var e=this;(new this.state.mapApi.Geocoder).geocode({location:{lat:this.state.lat,lng:this.state.lng}},(function(t,a){if(console.log(t),console.log(a),"OK"===a)if(t[0]){e.zoom=12;var n=t[0].address_components,s=e.getCity(n),i=e.getState(n);e.setState({address:t[0].formatted_address,city:s,state:i})}else window.alert("No results found");else window.alert("Geocoder failed due to: "+a)}))}},{key:"render",value:function(){var e=this,t=this.state,a=(t.places,t.mapApiLoaded),n=t.mapInstance,s=t.mapApi;return Object(N.jsxs)(P,{children:[a&&Object(N.jsxs)("div",{children:[Object(N.jsx)("h4",{className:"text-center",children:"Restaurant Search"}),Object(N.jsx)(L,{className:"auto-complete",map:n,mapApi:s,addplace:this.addPlace})]}),Object(N.jsx)(I.a,{center:this.state.center,zoom:this.state.zoom,draggable:this.state.draggable,onChange:this._onChange,onChildMouseDown:this.onMarkerInteraction,onChildMouseUp:this.onMarkerInteractionMouseUp,onChildMouseMove:this.onMarkerInteraction,onChildClick:function(){return console.log("child click")},onClick:this._onClick,bootstrapURLKeys:{key:"".concat("AIzaSyBaOc-kpmUetfkxEQc60qXzA_p4FZvOmUY"),libraries:["places","geometry"]},yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var a=t.map,n=t.maps;return e.apiHasLoaded(a,n)},children:Object(N.jsx)(D,{text:this.state.address,lat:this.state.lat,lng:this.state.lng})}),Object(N.jsx)("div",{className:"descriptions",children:Object(N.jsxs)(B.b,{bordered:!0,children:[Object(N.jsx)(B.b.Item,{label:"Restaurant",children:this.state.restaurant_name}),Object(N.jsx)("br",{}),Object(N.jsx)(B.b.Item,{label:"Address",children:this.state.address})]})}),Object(N.jsx)("div",{className:"submit-form",children:this.state.submitted?Object(N.jsxs)("div",{children:[Object(N.jsx)("h4",{children:"You submitted successfully!"}),Object(N.jsx)("button",{className:"btn btn-success",onClick:this.newRestaurant,children:"Add"})]}):Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:this.saveRestaurant,className:"btn btn-success",children:"Submit"})})})]})}}]),a}(n.Component),F=a(171),J=a(172),E=a(134),q=a(169),G=a(166),H=a(173),K=a(178),V=Object(G.a)((function(e){return{appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},link:{margin:e.spacing(1,1.5)},toolbarTitle:{flexGrow:1}}}));var Y=function(){var e=V();return Object(N.jsxs)(s.a.Fragment,{children:[Object(N.jsx)(q.a,{}),Object(N.jsx)(F.a,{position:"static",color:"default",elevation:0,className:e.appBar,children:Object(N.jsxs)(J.a,{className:e.toolbar,children:[Object(N.jsx)(E.a,{variant:"h6",color:"inherit",noWrap:!0,className:e.toolbarTitle,children:Object(N.jsx)(H.a,{component:c.c,to:"/",underline:"none",color:"textPrimary",className:"nav-link h5 link-secondary",children:Object(N.jsx)("img",{src:b,alt:"Logo"})})}),Object(N.jsx)("nav",{children:Object(N.jsx)(H.a,{color:"textPrimary",href:"#",className:e.link,component:c.c,to:"/register",children:"Register"})}),Object(N.jsx)(K.a,{href:"#",color:"primary",variant:"outlined",className:e.link,component:c.c,to:"/login",children:"Login"}),Object(N.jsx)(K.a,{href:"#",color:"primary",variant:"outlined",className:e.link,component:c.c,to:"/logout",children:"Logout"})]})})]})},Z=a(39),Q=a(52),X=a(179),$=a(176),ee=a(175),te=a(174),ae=Object(G.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function ne(){var e=Object(h.f)(),t=Object.freeze({email:"",user_name:"",password:""}),a=Object(n.useState)(t),s=Object(Q.a)(a,2),i=s[0],r=s[1],o=function(e){r(Object(w.a)(Object(w.a)({},i),{},Object(Z.a)({},e.target.name,e.target.value.trim())))},l=ae();return Object(N.jsxs)(te.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(q.a,{}),Object(N.jsxs)("div",{className:l.paper,children:[Object(N.jsx)(X.a,{className:l.avatar}),Object(N.jsx)(E.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(N.jsxs)("form",{className:l.form,noValidate:!0,children:[Object(N.jsxs)(ee.a,{container:!0,spacing:2,children:[Object(N.jsx)(ee.a,{item:!0,xs:12,children:Object(N.jsx)($.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:o})}),Object(N.jsx)(ee.a,{item:!0,xs:12,children:Object(N.jsx)($.a,{variant:"outlined",required:!0,fullWidth:!0,id:"user_name",label:"Username",name:"user_name",autoComplete:"user_name",onChange:o})}),Object(N.jsx)(ee.a,{item:!0,xs:12,children:Object(N.jsx)($.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:o})})]}),Object(N.jsx)(K.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:l.submit,onClick:function(t){t.preventDefault(),console.log(i),C.post("/api/user/register/",{email:i.email,user_name:i.user_name,password:i.password}).then((function(t){e.push("/login"),console.log(t),console.log(t.data)}))},children:"Sign Up"}),Object(N.jsx)(ee.a,{container:!0,justify:"flex-end",children:Object(N.jsx)(ee.a,{item:!0,children:Object(N.jsx)(c.b,{href:"#",variant:"body2",to:"/login",children:"Already have an account? Sign in"})})})]})]})]})}var se=Object(G.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ie(){var e=Object(h.f)(),t=Object.freeze({user_name:"",password:""}),a=Object(n.useState)(t),s=Object(Q.a)(a,2),i=s[0],r=s[1],o=function(e){r(Object(w.a)(Object(w.a)({},i),{},Object(Z.a)({},e.target.name,e.target.value.trim())))},l=se();return Object(N.jsx)(te.a,{children:Object(N.jsx)("div",{className:"app",children:Object(N.jsxs)("div",{className:"card-login",children:[Object(N.jsx)(X.a,{className:l.avatar}),Object(N.jsx)(E.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(N.jsxs)("form",{className:l.form,noValidate:!0,children:[Object(N.jsx)($.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"user_name",label:"User Name",name:"user_name",autoComplete:"user_name",autoFocus:!0,onChange:o}),Object(N.jsx)($.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:o}),Object(N.jsx)(K.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:l.submit,onClick:function(t){t.preventDefault(),C.post("/api/token/",{user_name:i.user_name,password:i.password}).then((function(t){localStorage.setItem("access_token",t.data.access),localStorage.setItem("refresh_token",t.data.refresh),localStorage.setItem("id",t.data.id),localStorage.setItem("user_name",t.data.user_name),localStorage.setItem("user",JSON.stringify(t.data)),C.defaults.headers.Authorization="JWT "+localStorage.getItem("access_token"),e.push("/"),console.log(t.data)}))},children:"Sign In"}),Object(N.jsxs)(ee.a,{container:!0,children:[Object(N.jsx)(ee.a,{item:!0,xs:!0,children:Object(N.jsx)(c.b,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(N.jsx)(ee.a,{item:!0,children:Object(N.jsx)(c.b,{href:"#",variant:"body2",to:"/register",children:"Don't have an account? Sign Up"})})]})]})]})})})}function re(){var e=Object(h.f)();return Object(n.useEffect)((function(){C.post("/api/user/logout/blacklist/",{refresh_token:localStorage.getItem("refresh_token")}),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("id"),localStorage.removeItem("user_name"),localStorage.removeItem("user"),C.defaults.headers.Authorization=null,e.push("/login")})),Object(N.jsx)("div",{children:"Logout"})}Object(G.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var ce=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({selectedOption:e.target.value},(function(){return console.log("Option selected: ",e)}))},n.onChangeSearchCity=n.onChangeSearchCity.bind(Object(j.a)(n)),n.retrieveRestaurants=n.retrieveRestaurants.bind(Object(j.a)(n)),n.searchCity=n.searchCity.bind(Object(j.a)(n)),n.retrieveCities=n.retrieveCities.bind(Object(j.a)(n)),n.retrieveCuisines=n.retrieveCuisines.bind(Object(j.a)(n)),n.handleChange=n.handleChange.bind(Object(j.a)(n)),n.state={user:localStorage.getItem("id"),restaurants:[],currentRestaurant:null,currentIndex:-1,searchCity:"",cities:[],random_restaurant:"",cuisines:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveCities(),this.retrieveCuisines()}},{key:"onChangeSearchCity",value:function(e){var t=e.target.value;this.setState({searchCity:t})}},{key:"retrieveRestaurants",value:function(){var e=this;console.log("*&*&*&*&* ",this.state.user),k.getAll().then((function(t){e.setState({restaurants:t.data,random_restaurant:t.data[Math.floor(Math.random()*t.data.length)]}),console.log(t.data),console.log("random restaurant ",t.data[Math.floor(Math.random()*t.data.length)])})).catch((function(e){console.log(e)}))}},{key:"searchCity",value:function(e){var t=this;k.findByCity(this.state.selectedOption).then((function(e){t.setState({restaurants:e.data,currentRestaurant:null,random_restaurant:e.data[Math.floor(Math.random()*e.data.length)]}),console.log("search city",e.data)})).catch((function(e){console.log(e)})),e.preventDefault()}},{key:"retrieveCities",value:function(){var e=this;k.getAllCities().then((function(t){e.setState({cities:t.data,selectedOption:t.data[0].city})})).catch((function(e){console.log(e)}))}},{key:"retrieveCuisines",value:function(){var e=this;k.getAllCuisines().then((function(t){e.setState({cuisines:t.data}),console.log("cuisines ",t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(N.jsx)("div",{className:"app",children:Object(N.jsxs)("div",{className:"hm-card",children:[Object(N.jsx)("h1",{className:"heading",children:Object(N.jsx)("a",{target:"_blank",href:this.state.random_restaurant.website,children:this.state.random_restaurant.name})}),Object(N.jsxs)("div",{className:"col-md-8",children:[Object(N.jsx)(K.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:this.retrieveRestaurants,children:"Surprise Me"}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("h5",{children:"Surprise by Location"}),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("form",{onSubmit:this.searchCity,children:[Object(N.jsx)("select",{className:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",value:this.state.selectedOption,onChange:this.handleChange,children:this.state.cities.map((function(e,t){return Object(N.jsx)("option",{value:e.city,children:e.city},t)}))}),Object(N.jsx)("button",{className:"submitBtn",type:"submit",value:"Submit",children:"Submit"})]})})]})]})})}}]),a}(n.Component),oe=(n.Component,function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).retrieveCuisines=n.retrieveCuisines.bind(Object(j.a)(n)),n.refreshList=n.refreshList.bind(Object(j.a)(n)),n.setActiveCuisine=n.setActiveCuisine.bind(Object(j.a)(n)),n.getCuisineRestaurants=n.getCuisineRestaurants.bind(Object(j.a)(n)),n.state={cuisines:[],currentCuisine:null,currentIndex:-1,restaurants:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveCuisines()}},{key:"retrieveCuisines",value:function(){var e=this;k.getAllCuisines().then((function(t){e.setState({cuisines:t.data}),console.log("retrieveCuisines ",t.data),console.log(e.state.cuisines)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveCuisines(),this.setState({currentCuisine:null,currentIndex:-1})}},{key:"setActiveCuisine",value:function(e,t){this.setState({currentCuisine:e,currentIndex:t}),this.getCuisineRestaurants(this.state.currentIndex)}},{key:"getCuisineRestaurants",value:function(e){var t=this;k.getRestaurants(e).then((function(e){t.setState({restaurants:e.data}),console.log("cuisine restaurant data ",e.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.cuisines,n=t.currentCuisine,s=t.currentIndex;return Object(N.jsx)("div",{className:"bg",children:Object(N.jsx)("div",{className:"card",children:Object(N.jsx)("div",{className:"rowC",children:Object(N.jsxs)("div",{className:"list row",children:[Object(N.jsxs)("div",{className:"col-md-8",children:[Object(N.jsx)("h4",{children:"Cuisine List"}),Object(N.jsx)("ul",{className:"list-group",children:a&&a.map((function(t,a){return Object(N.jsx)("li",{className:"list-group-item "+(a===s?"active":""),onClick:function(){return e.setActiveCuisine(t,a)},children:t.type},a)}))})]}),Object(N.jsx)("div",{className:"col-md-6",children:n?Object(N.jsxs)("div",{children:[Object(N.jsx)("h4",{children:"Cuisine"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{children:Object(N.jsx)("strong",{children:"Type:"})})," ",n.type]}),Object(N.jsxs)("ul",{children:[Object(N.jsx)("label",{children:Object(N.jsx)("strong",{children:"Restaurants:"})}),n.restaurants.map((function(e){return Object(N.jsx)("li",{children:e},e)}))]}),Object(N.jsx)(c.b,{to:"api/cuisine/"+n.id,className:"btn btn-outline-primary btn-sm",children:"Edit"}),Object(N.jsx)(c.b,{to:"/cuisines/"+n.id,className:"btn btn-outline-primary btn-sm",children:"Try This"})]}):Object(N.jsxs)("div",{children:[Object(N.jsx)("br",{}),Object(N.jsx)("p",{children:"Please click on a Category..."})]})})]})})})})}}]),a}(n.Component)),le=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeType=n.onChangeType.bind(Object(j.a)(n)),n.getCuisine=n.getCuisine.bind(Object(j.a)(n)),n.retrieveCuisines=n.retrieveCuisines.bind(Object(j.a)(n)),n.setCuisine=n.setCuisine.bind(Object(j.a)(n)),n.getCuisineRestaurants=n.getCuisineRestaurants.bind(Object(j.a)(n)),n.state={currentCuisine:{id:null,type:""},restaurants:[],message:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getCuisine(this.props.match.params.id),this.retrieveCuisines()}},{key:"onChangeType",value:function(e){var t=e.target.value;this.setState((function(e){return{currentCuisine:Object(w.a)(Object(w.a)({},e.currentCuisine),{},{type:t})}}))}},{key:"getCuisine",value:function(e){var t=this;k.getCuisine(e).then((function(e){t.setState({currentCuisine:e.data}),console.log(t.state.restaurants)})).catch((function(e){console.log(e)})),this.getCuisineRestaurants(e)}},{key:"getCuisineRestaurants",value:function(e){var t=this;k.getRestaurants(e).then((function(e){t.setState({restaurants:e.data}),console.log("get restaurant ",e.data),console.log(t.state.restaurants)})).catch((function(e){console.log(e)}))}},{key:"retrieveCuisines",value:function(){var e=this;k.getAllCuisines().then((function(t){e.setState({cuisines:t.data}),console.log("retrieve cuisines ",t.data)})).catch((function(e){console.log(e)}))}},{key:"setCuisine",value:function(e,t){console.log("set cuisine ",e),this.setState({cuisine:e,currentIndex:t})}},{key:"render",value:function(){var e=this.state.currentCuisine;return Object(N.jsx)("div",{children:e?Object(N.jsxs)("div",{className:"edit-form",children:[Object(N.jsx)("h4",{children:"Cuisine"}),Object(N.jsx)("form",{children:Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"name",children:"Type"}),Object(N.jsx)("input",{type:"text",className:"form-control",id:"name",value:e.type,onChange:this.onChangeType})]})}),Object(N.jsxs)("ul",{children:[Object(N.jsx)("label",{children:Object(N.jsx)("strong",{children:"Cuisines:"})}),this.state.restaurants.map((function(e){return Object(N.jsx)("li",{children:e.name},e.id)}))]}),Object(N.jsx)("p",{children:this.state.message})]}):Object(N.jsxs)("div",{children:[Object(N.jsx)("br",{}),Object(N.jsx)("p",{children:"Click on a Restaurant"})]})})}}]),a}(n.Component);a.p;var ue=function(e){return Object(h.g)(),localStorage.getItem("access_token")?Object(N.jsx)("div",{className:"navigation",children:Object(N.jsx)("nav",{id:"topnav",className:"navbar navbar-expand navbar-light",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(N.jsx)("li",{class:"nav-item ".concat("/login"===window.location.pathname?"active":""),children:Object(N.jsx)(c.c,{className:"nav-link h5 link-secondary",to:"/logout",children:"Logout"})})})})})}):Object(N.jsx)("div",{className:"navigation",children:Object(N.jsx)("nav",{id:"topnav",className:"navbar navbar-expand navbar-light",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsx)("div",{children:Object(N.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(N.jsx)("li",{className:"nav-item ".concat("/login"===window.location.pathname?"active":""),children:Object(N.jsx)(c.c,{className:"nav-link h5 link-secondary",to:"/login",children:"Login"})}),Object(N.jsx)("li",{class:"nav-item ".concat("/register"===window.location.pathname?"active":""),children:Object(N.jsx)(c.c,{className:"nav-link h5 link-secondary",to:"/register",children:"Register"})})]})})})})})},de=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(Y,{}),Object(N.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(N.jsxs)("ul",{className:"nav flex-row",children:[Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(c.c,{className:"nav-link h5 link-secondary",to:"/restaurants",children:Object(N.jsx)("span",{className:"ml-2",children:"Restaurants"})})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(c.c,{className:"nav-link h5 link-secondary",to:"/add",children:Object(N.jsx)("span",{className:"ml-2",children:"Add Restaurant"})})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(c.c,{className:"nav-link h5 link-secondary",to:"/cuisine",children:Object(N.jsx)("span",{className:"ml-auto",children:"Cuisines"})})})]}),Object(N.jsx)(ue,{})]}),Object(N.jsx)("div",{children:Object(N.jsxs)(h.c,{children:[Object(N.jsx)(h.a,{path:"/register",component:ne}),Object(N.jsx)(h.a,{path:"/login/",component:ie}),Object(N.jsx)(h.a,{path:"/logout",component:re}),Object(N.jsx)(h.a,{exact:!0,path:"/",component:ce}),Object(N.jsx)(h.a,{exact:!0,path:"/restaurants",component:S}),Object(N.jsx)(h.a,{path:"/restaurants/:id",component:R}),Object(N.jsxs)("div",{className:"main-wrapper",children:[Object(N.jsx)(h.a,{exact:!0,path:"/add",component:U}),Object(N.jsx)(h.a,{path:"/cuisine",component:oe}),Object(N.jsx)(h.a,{path:"/cuisines/:id",component:le})]})]})})]})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(131);r.a.render(Object(N.jsx)(c.a,{children:Object(N.jsx)(de,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,a){},67:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.1b9d6bf6.chunk.js.map