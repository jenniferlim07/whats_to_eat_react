(this.webpackJsonpwhats_to_eat_react=this.webpackJsonpwhats_to_eat_react||[]).push([[0],{116:function(e,t,a){},152:function(e,t,a){},478:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),r=a.n(i),c=a(15),o=a(13),l=a(14),u=a(18),d=a(17),h=(a(152),a(16)),b=(a(253),a.p,a(7)),j=a(102),m=a.n(j),p=a(218),g=a(219),v="https://whatstoeat-backend.herokuapp.com/",O=a.n(g).a.create({baseURL:v,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"application/json",accept:"application/json"}});O.interceptors.response.use((function(e){return e}),function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,s,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.config,"undefined"!==typeof t.response){e.next=4;break}return alert("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||a.url!==v+"/api/token/refresh/"){e.next=7;break}return window.location.href="/login/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=23;break}if(!(n=localStorage.getItem("refresh_token"))){e.next=21;break}if(s=JSON.parse(atob(n.split(".")[1])),i=Math.ceil(Date.now()/1e3),console.log(s.exp),!(s.exp>i)){e.next=17;break}return e.abrupt("return",O.post("api/token/refresh/",{refresh:n}).then((function(e){return localStorage.setItem("access_token",e.data.access),localStorage.setItem("refresh_token",e.data.refresh),O.defaults.headers.Authorization="JWT "+e.data.access,a.headers.Authorization="JWT "+e.data.access,console.log("front user ",e.data.id),O(a)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",s.exp,i),window.location.href="/login/";case 19:e.next=23;break;case 21:console.log("Refresh token not available."),window.location.href="/login/";case 23:return e.abrupt("return",Promise.reject(t));case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var f,x,y=O,C=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getAll",value:function(){return y.get("/restaurants")}},{key:"get",value:function(e){return y.get("/restaurants/".concat(e))}},{key:"create",value:function(e){return y.post("/restaurants",e)}},{key:"update",value:function(e,t){return y.put("/restaurants/".concat(e),t)}},{key:"delete",value:function(e){return y.delete("/restaurants/".concat(e))}},{key:"findByCity",value:function(e){return y.get("/restaurants?city=".concat(e))}},{key:"getAllCities",value:function(){return y.get("/restaurants/city")}},{key:"createCuisine",value:function(e){return y.post("/api/cuisine/",e)}},{key:"getAllCuisines",value:function(){return y.get("/api/cuisine/")}}]),e}()),k=(a(116),a(1)),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({selectedOption:e.target.value},(function(){return console.log("Option selected: ",e)}))},n.onChangeSearchCity=n.onChangeSearchCity.bind(Object(b.a)(n)),n.retrieveRestaurants=n.retrieveRestaurants.bind(Object(b.a)(n)),n.refreshList=n.refreshList.bind(Object(b.a)(n)),n.setActiveRestaurant=n.setActiveRestaurant.bind(Object(b.a)(n)),n.searchCity=n.searchCity.bind(Object(b.a)(n)),n.retrieveCities=n.retrieveCities.bind(Object(b.a)(n)),n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.state={user:localStorage.getItem("id"),restaurants:[],currentRestaurant:null,currentIndex:-1,searchCity:"",cities:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveRestaurants(),this.retrieveCities()}},{key:"onChangeSearchCity",value:function(e){var t=e.target.value;this.setState({searchCity:t})}},{key:"retrieveRestaurants",value:function(){var e=this;console.log("*&*&*&*&* ",this.state.user),C.getAll().then((function(t){e.setState({restaurants:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveRestaurants(),this.setState({currentRestaurant:null,currentIndex:-1})}},{key:"setActiveRestaurant",value:function(e,t){this.setState({currentRestaurant:e,currentIndex:t})}},{key:"searchCity",value:function(e){var t=this;C.findByCity(this.state.selectedOption).then((function(e){t.setState({restaurants:e.data,currentRestaurant:null}),console.log("search city",e.data)})).catch((function(e){console.log(e)})),e.preventDefault()}},{key:"retrieveCities",value:function(){var e=this;C.getAllCities().then((function(t){e.setState({cities:t.data,selectedOption:t.data[0].city})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.restaurants,n=t.currentRestaurant,s=t.currentIndex;return Object(k.jsx)("div",{className:"bg",children:Object(k.jsx)("div",{className:"card",children:Object(k.jsxs)("div",{className:"list row",children:[Object(k.jsx)("div",{className:"col-md-8",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("form",{onSubmit:this.searchCity,children:[Object(k.jsx)("select",{className:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",value:this.state.selectedOption,onChange:this.handleChange,children:this.state.cities.map((function(e,t){return Object(k.jsx)("option",{value:e.city,children:e.city},t)}))}),Object(k.jsx)("input",{type:"submit",value:"Submit"})]})})}),Object(k.jsxs)("div",{className:"col-md-8",children:[Object(k.jsx)("h4",{children:"Restaurant List"}),Object(k.jsx)("ul",{className:"list-group",children:a&&a.map((function(t,a){return Object(k.jsx)("li",{className:"list-group-item "+(a===s?"active":""),onClick:function(){return e.setActiveRestaurant(t,a)},children:t.name},a)}))})]}),Object(k.jsx)("div",{className:"col=md-6",children:n?Object(k.jsxs)("div",{children:[Object(k.jsx)("h4",{children:"Restaurant"}),Object(k.jsxs)("div",{children:[Object(k.jsx)("label",{children:Object(k.jsx)("strong",{children:"Name:"})})," ",n.name]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("label",{children:Object(k.jsx)("strong",{children:"Website:"})})," ",Object(k.jsx)("a",{target:"_blank",href:n.website,children:n.website})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("label",{children:Object(k.jsx)("strong",{children:"Address:"})})," ",n.address]}),Object(k.jsxs)("ul",{children:[Object(k.jsx)("label",{children:Object(k.jsx)("strong",{children:"Cuisines:"})}),n.cuisine.map((function(e){return Object(k.jsx)("li",{children:e.type})}))]}),Object(k.jsx)(c.b,{to:"/restaurants/"+n.id,className:"badge badge-light",children:"Edit"})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)("br",{}),Object(k.jsx)("p",{children:"Please click on a Restaurant..."})]})})]})})})}}]),a}(n.Component),N=a(68),S=a(234),R=a(69),_=R.a.div(f||(f=Object(N.a)(["\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 20px;\n    text-align:center;\n"]))),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onPlaceChanged=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props,t=e.map,a=e.addplace,s=n.autoComplete.getPlace();console.log("place ",s),console.log("contact ",s.website),s.geometry&&(s.geometry.viewport?t.fitBounds(s.geometry.viewport):(t.setCenter(s.geometry.location),t.setZoom(17)),a(s),n.searchInput.blur())},n.clearSearchBox=n.clearSearchBox.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.map,a=e.mapApi,n={fields:["name","url","website","address_components","geometry"],types:["establishment"]};this.autoComplete=new a.places.Autocomplete(this.searchInput,n),this.autoComplete.addListener("place_changed",this.onPlaceChanged),this.autoComplete.bindTo("bounds",t)}},{key:"componentWillUnmount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.mapApi;t.event.clearInstanceListeners(this.searchInput)}},{key:"clearSearchBox",value:function(){this.searchInput.value=""}},{key:"render",value:function(){var e=this;return Object(k.jsx)(_,{children:Object(k.jsx)("input",{className:"search-input",ref:function(t){e.searchInput=t},type:"text",onFocus:this.clearSearchBox,placeholder:"Enter a location"})})}}]),a}(n.Component),I=R.a.div(x||(x=Object(N.a)(["\n    position: absolute;\n    width: 38px;\n    height: 37px;\n    background-image: url(https://icon-library.com/images/pin-icon-png/pin-icon-png-9.jpg);\n    background-size: contain;\n    background-repeat: no-repeat;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -webkit-transform: translate(-50%,-50%);\n    -ms-transform: translate(-50%,-50%);\n    transform: translate(-50%,-50%);\n    cursor: grab;\n"]))),T=function(e){var t=e.text,a=e.onClick;return Object(k.jsx)(I,{alt:t,onClick:a})};T.defaultProps={onClick:null};var W,M=T,L=a(519),z=R.a.main(W||(W=Object(N.a)(["\n    width: 100%;\n    height: 100%;\n"]))),B=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={mapApiLoaded:!1,mapInstance:null,mapApi:null,geoCoder:null,user:localStorage.getItem("id"),places:[],restaurant_name:"",website:"",center:[],zoom:9,address:"",city:"",state:"",draggable:!0,lat:null,lng:null,submitted:!1},n.onMarkerInteraction=function(e,t,a){n.setState({draggable:!1,lat:a.lat,lng:a.lng})},n.onMarkerInteractionMouseUp=function(e,t,a){n.setState({draggable:!0}),n._generateAddress()},n._onChange=function(e){var t=e.center,a=e.zoom;n.setState({center:t,zoom:a})},n._onClick=function(e){n.setState({lat:e.lat,lng:e.lng})},n.apiHasLoaded=function(e,t){n.setState({mapApiLoaded:!0,mapInstance:e,mapApi:t}),n._generateAddress()},n.addPlace=function(e){console.log("addPlace ",e),n.setState({places:[e],restaurant_name:e.name,website:e.website,lat:e.geometry.location.lat(),lng:e.geometry.location.lng()}),n._generateAddress()},n.getCity=function(e){for(var t=0;t<e.length;t++)if(e[t].types[0])for(var a=0;a<e[t].types.length;a++)if("sublocality_level_1"===e[t].types[a]||"locality"===e[t].types[a])return e[t].long_name},n.getState=function(e){for(var t=0;t<e.length;t++)for(var a=0;a<e.length;a++)if(e[a].types[0]&&"administrative_area_level_1"===e[a].types[0])return e[a].long_name},n.saveRestaurant=n.saveRestaurant.bind(Object(b.a)(n)),n.newRestaurant=n.newRestaurant.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.setState({center:[47.608013,-122.335167],lat:47.608013,lng:-122.335167})}},{key:"saveRestaurant",value:function(){var e=this,t={user:this.state.user,name:this.state.restaurant_name,website:this.state.website,address:this.state.address,city:this.state.city};console.log("potato ",t),C.create(t).then((function(t){e.setState({id:t.data.id,name:t.data.name,website:t.data.website,address:t.data.address,city:t.data.city,user:e.state.user,submitted:!0}),console.log("saveRestaurant ",e.state.submitted),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"newRestaurant",value:function(){this.setState({id:null,user:this.state.user,name:"",website:"",address:"",city:"",submitted:!1}),console.log("newRestaurant ",this.submitted)}},{key:"_generateAddress",value:function(){var e=this;(new this.state.mapApi.Geocoder).geocode({location:{lat:this.state.lat,lng:this.state.lng}},(function(t,a){if(console.log(t),console.log(a),"OK"===a)if(t[0]){e.zoom=12;var n=t[0].address_components,s=e.getCity(n),i=e.getState(n);e.setState({address:t[0].formatted_address,city:s,state:i})}else window.alert("No results found");else window.alert("Geocoder failed due to: "+a)}))}},{key:"render",value:function(){var e=this,t=this.state,a=(t.places,t.mapApiLoaded),n=t.mapInstance,s=t.mapApi;return Object(k.jsxs)(z,{children:[a&&Object(k.jsxs)("div",{children:[Object(k.jsx)("h4",{children:"Restaurant Search"}),Object(k.jsx)(A,{className:"auto-complete",map:n,mapApi:s,addplace:this.addPlace})]}),Object(k.jsx)(S.a,{center:this.state.center,zoom:this.state.zoom,draggable:this.state.draggable,onChange:this._onChange,onChildMouseDown:this.onMarkerInteraction,onChildMouseUp:this.onMarkerInteractionMouseUp,onChildMouseMove:this.onMarkerInteraction,onChildClick:function(){return console.log("child click")},onClick:this._onClick,bootstrapURLKeys:{key:"".concat("AIzaSyBaOc-kpmUetfkxEQc60qXzA_p4FZvOmUY"),libraries:["places","geometry"]},yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var a=t.map,n=t.maps;return e.apiHasLoaded(a,n)},children:Object(k.jsx)(M,{text:this.state.address,lat:this.state.lat,lng:this.state.lng})}),Object(k.jsx)("div",{className:"descriptions",children:Object(k.jsxs)(L.b,{bordered:!0,children:[Object(k.jsx)(L.b.Item,{label:"Restaurant",children:this.state.restaurant_name}),Object(k.jsx)("br",{}),Object(k.jsx)(L.b.Item,{label:"Address",children:this.state.address})]})}),Object(k.jsx)("div",{className:"submit-form",children:this.state.submitted?Object(k.jsxs)("div",{children:[Object(k.jsx)("h4",{children:"You submitted successfully!"}),Object(k.jsx)("button",{className:"btn btn-success",onClick:this.newRestaurant,children:"Add"})]}):Object(k.jsx)("div",{children:Object(k.jsx)("button",{onClick:this.saveRestaurant,className:"btn btn-success",children:"Submit"})})})]})}}]),a}(n.Component),D=(n.Component,a(29)),U=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeName=n.onChangeName.bind(Object(b.a)(n)),n.onChangeWebsite=n.onChangeWebsite.bind(Object(b.a)(n)),n.onChangeAddress=n.onChangeAddress.bind(Object(b.a)(n)),n.onChangeCity=n.onChangeCity.bind(Object(b.a)(n)),n.getRestaurant=n.getRestaurant.bind(Object(b.a)(n)),n.updateRestaurant=n.updateRestaurant.bind(Object(b.a)(n)),n.deleteRestaurant=n.deleteRestaurant.bind(Object(b.a)(n)),n.retrieveCuisines=n.retrieveCuisines.bind(Object(b.a)(n)),n.setCuisine=n.setCuisine.bind(Object(b.a)(n)),n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.state={currentRestaurant:{id:null,name:"",website:"",address:"",city:"",cuisine:""},cuisines:[],message:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getRestaurant(this.props.match.params.id),this.retrieveCuisines()}},{key:"onChangeName",value:function(e){var t=e.target.value;this.setState((function(e){return{currentRestaurant:Object(D.a)(Object(D.a)({},e.currentRestaurant),{},{name:t})}}))}},{key:"onChangeWebsite",value:function(e){var t=e.target.value;this.setState((function(e){return{currentRestaurant:Object(D.a)(Object(D.a)({},e.currentRestaurant),{},{website:t})}}))}},{key:"onChangeAddress",value:function(e){var t=e.target.value;this.setState((function(e){return{currentRestaurant:Object(D.a)(Object(D.a)({},e.currentRestaurant),{},{address:t})}}))}},{key:"onChangeCity",value:function(e){var t=e.target.value;this.setState((function(e){return{currentRestaurant:Object(D.a)(Object(D.a)({},e.currentRestaurant),{},{city:t})}}))}},{key:"getRestaurant",value:function(e){var t=this;C.get(e).then((function(e){t.setState({currentRestaurant:e.data}),console.log("get restaurant ",e.data),console.log(t.state.currentRestaurant),console.log(t.state.currentRestaurant.cuisine)})).catch((function(e){console.log(e)}))}},{key:"updateRestaurant",value:function(){var e=this;C.update(this.state.currentRestaurant.id,this.state.currentRestaurant).then((function(t){console.log(t.data),e.setState({message:"The restaurant was update successfully!"})})).catch((function(e){console.log(e)}))}},{key:"deleteRestaurant",value:function(){var e=this;C.delete(this.state.currentRestaurant.id).then((function(t){console.log(t.data),e.props.history.push("/restaurants")})).catch((function(e){console.log(e)}))}},{key:"retrieveCuisines",value:function(){var e=this;C.getAllCuisines().then((function(t){e.setState({cuisines:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"setCuisine",value:function(e,t){console.log("set cuisine ",e),this.setState({cuisine:e,currentIndex:t})}},{key:"handleChange",value:function(e){var t={id:this.state.currentRestaurant.id,name:this.state.currentRestaurant.name,website:this.state.currentRestaurant.website,address:this.state.currentRestaurant.address,city:this.state.currentRestaurant.city,cuisine:e.target.value};console.log("event target ",e.target.value),this.setState((function(e){return{currentRestaurant:t}})),e.preventDefault()}},{key:"render",value:function(){var e=this.state.currentRestaurant;return Object(k.jsx)("div",{children:e?Object(k.jsxs)("div",{className:"edit-form",children:[Object(k.jsx)("h4",{children:"Restaurant"}),Object(k.jsxs)("form",{children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"name",children:"Name"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"name",value:e.name,onChange:this.onChangeName})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"website",children:"Website"}),Object(k.jsx)("input",{type:"text",className:"formControl",id:"website",required:!0,value:e.website,onChange:this.onChangeWebsite,name:"website"})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"address",children:"Address"}),Object(k.jsx)("input",{type:"address",className:"formControl",id:"address",value:e.address,onChange:this.onChangeAddress})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"city",children:"City"}),Object(k.jsx)("input",{type:"text",className:"formControl",id:"city",required:!0,value:e.city,onChange:this.onChangeCity,name:"city"})]})]}),Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("label",{htmlFor:"city",children:"Add Cuisine"}),Object(k.jsx)("form",{onSubmit:this.setCuisine,children:Object(k.jsx)("select",{className:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",value:this.state.cuisine,onChange:this.handleChange,children:this.state.cuisines.map((function(e){return Object(k.jsx)("option",{value:e.id,children:e.type},e.id)}))})})]}),Object(k.jsx)("button",{type:"submit",className:"badge badge-success",onClick:this.updateRestaurant,children:"Update"}),Object(k.jsx)("button",{type:"submit",className:"badge badge=danger mr-2",onClick:this.deleteRestaurant,children:"Delete"}),Object(k.jsx)("p",{children:this.state.message})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)("br",{}),Object(k.jsx)("p",{children:"Click on a Restaurant"})]})})}}]),a}(n.Component),P=a(40),F=a(72),q=a(112),E=a.n(q),J=a(231),G=a.n(J);E.a.setApiKey("AIzaSyBaOc-kpmUetfkxEQc60qXzA_p4FZvOmUY");n.Component;var Y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeType=n.onChangeType.bind(Object(b.a)(n)),n.saveCuisine=n.saveCuisine.bind(Object(b.a)(n)),n.newCuisine=n.newCuisine.bind(Object(b.a)(n)),n.state={id:null,type:"",submitted:!1},n}return Object(l.a)(a,[{key:"onChangeType",value:function(e){this.setState({type:e.target.value})}},{key:"saveCuisine",value:function(){var e=this,t={type:this.state.type};C.createCuisine(t).then((function(t){e.setState({id:t.data.id,type:t.data.type,submitted:!0}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"newCuisine",value:function(){this.setState({id:null,type:"",submitted:!1}),console.log("new submitted ",this.state.submitted)}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"submit-form",children:[Object(k.jsx)("h5",{children:"Add Cuisine Type"}),this.state.submitted?Object(k.jsxs)("div",{children:[Object(k.jsx)("h4",{children:"You submitted successfully!"}),Object(k.jsx)("button",{className:"btn btn-success",onClick:this.newCuisine,children:"Add"})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("input",{type:"text",className:"form-control",id:"type",required:!0,value:this.state.type,onChange:this.onChangeType,name:"type"})}),Object(k.jsx)("button",{onClick:this.saveCuisine,className:"btn btn-success",children:"Submit"})]})]})}}]),a}(n.Component),K=a(513),Z=a(514),H=a(481),Q=a(511),V=a(509),X=a(515),$=a(521),ee=Object(V.a)((function(e){return{appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},link:{margin:e.spacing(1,1.5)},toolbarTitle:{flexGrow:1}}}));var te=function(){var e=ee();return Object(k.jsxs)(s.a.Fragment,{children:[Object(k.jsx)(Q.a,{}),Object(k.jsx)(K.a,{position:"static",color:"default",elevation:0,className:e.appBar,children:Object(k.jsxs)(Z.a,{className:e.toolbar,children:[Object(k.jsx)(H.a,{variant:"h6",color:"inherit",noWrap:!0,className:e.toolbarTitle,children:Object(k.jsx)(X.a,{component:c.c,to:"/",underline:"none",color:"textPrimary",children:"WhatsToEat"})}),Object(k.jsx)("nav",{children:Object(k.jsx)(X.a,{color:"textPrimary",href:"#",className:e.link,component:c.c,to:"/register",children:"Register"})}),Object(k.jsx)($.a,{href:"#",color:"primary",variant:"outlined",className:e.link,component:c.c,to:"/login",children:"Login"}),Object(k.jsx)($.a,{href:"#",color:"primary",variant:"outlined",className:e.link,component:c.c,to:"/logout",children:"Logout"})]})})]})},ae=a(516);a(520),Object(V.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},footer:Object(P.a)({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}}));var ne=a(109),se=a(522),ie=a(518),re=a(517),ce=Object(V.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function oe(){var e=Object(h.f)(),t=Object.freeze({email:"",user_name:"",password:""}),a=Object(n.useState)(t),s=Object(ne.a)(a,2),i=s[0],r=s[1],c=function(e){r(Object(D.a)(Object(D.a)({},i),{},Object(P.a)({},e.target.name,e.target.value.trim())))},o=ce();return Object(k.jsxs)(ae.a,{component:"main",maxWidth:"xs",children:[Object(k.jsx)(Q.a,{}),Object(k.jsxs)("div",{className:o.paper,children:[Object(k.jsx)(se.a,{className:o.avatar}),Object(k.jsx)(H.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(k.jsxs)("form",{className:o.form,noValidate:!0,children:[Object(k.jsxs)(re.a,{container:!0,spacing:2,children:[Object(k.jsx)(re.a,{item:!0,xs:12,children:Object(k.jsx)(ie.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:c})}),Object(k.jsx)(re.a,{item:!0,xs:12,children:Object(k.jsx)(ie.a,{variant:"outlined",required:!0,fullWidth:!0,id:"user_name",label:"Username",name:"user_name",autoComplete:"user_name",onChange:c})}),Object(k.jsx)(re.a,{item:!0,xs:12,children:Object(k.jsx)(ie.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:c})})]}),Object(k.jsx)($.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:o.submit,onClick:function(t){t.preventDefault(),console.log(i),y.post("/api/user/register/",{email:i.email,user_name:i.user_name,password:i.password}).then((function(t){e.push("/login"),console.log(t),console.log(t.data)}))},children:"Sign Up"}),Object(k.jsx)(re.a,{container:!0,justify:"flex-end",children:Object(k.jsx)(re.a,{item:!0,children:Object(k.jsx)(X.a,{href:"#",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}var le=Object(V.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ue(){var e=Object(h.f)(),t=Object.freeze({user_name:"",password:""}),a=Object(n.useState)(t),s=Object(ne.a)(a,2),i=s[0],r=s[1],c=function(e){r(Object(D.a)(Object(D.a)({},i),{},Object(P.a)({},e.target.name,e.target.value.trim())))},o=le();return Object(k.jsx)(ae.a,{children:Object(k.jsx)("div",{className:"app",children:Object(k.jsxs)("div",{className:"card-login",children:[Object(k.jsx)(se.a,{className:o.avatar}),Object(k.jsx)(H.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(k.jsxs)("form",{className:o.form,noValidate:!0,children:[Object(k.jsx)(ie.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"user_name",label:"User Name",name:"user_name",autoComplete:"user_name",autoFocus:!0,onChange:c}),Object(k.jsx)(ie.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:c}),Object(k.jsx)($.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:o.submit,onClick:function(t){t.preventDefault(),y.post("/api/token/",{user_name:i.user_name,password:i.password}).then((function(t){localStorage.setItem("access_token",t.data.access),localStorage.setItem("refresh_token",t.data.refresh),localStorage.setItem("id",t.data.id),localStorage.setItem("user_name",t.data.user_name),y.defaults.headers.Authorization="JWT "+localStorage.getItem("access_token"),e.push("/"),console.log(t.data)}))},children:"Sign In"}),Object(k.jsxs)(re.a,{container:!0,children:[Object(k.jsx)(re.a,{item:!0,xs:!0,children:Object(k.jsx)(X.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(k.jsx)(re.a,{item:!0,children:Object(k.jsx)(X.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})})})}function de(){var e=Object(h.f)();return Object(n.useEffect)((function(){y.post("/api/user/logout/blacklist/",{refresh_token:localStorage.getItem("refresh_token")});localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),y.defaults.headers.Authorization=null,e.push("/login")})),Object(k.jsx)("div",{children:"Logout"})}var he=Object(V.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),be=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({selectedOption:e.target.value},(function(){return console.log("Option selected: ",e)}))},n.onChangeSearchCity=n.onChangeSearchCity.bind(Object(b.a)(n)),n.retrieveRestaurants=n.retrieveRestaurants.bind(Object(b.a)(n)),n.searchCity=n.searchCity.bind(Object(b.a)(n)),n.retrieveCities=n.retrieveCities.bind(Object(b.a)(n)),n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.state={user:localStorage.getItem("id"),restaurants:[],currentRestaurant:null,currentIndex:-1,searchCity:"",cities:[],random_restaurant:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveCities()}},{key:"onChangeSearchCity",value:function(e){var t=e.target.value;this.setState({searchCity:t})}},{key:"retrieveRestaurants",value:function(){var e=this;console.log("*&*&*&*&* ",this.state.user),C.getAll().then((function(t){e.setState({restaurants:t.data,random_restaurant:t.data[Math.floor(Math.random()*t.data.length)]}),console.log(t.data),console.log("random restaurant ",t.data[Math.floor(Math.random()*t.data.length)])})).catch((function(e){console.log(e)}))}},{key:"searchCity",value:function(e){var t=this;C.findByCity(this.state.selectedOption).then((function(e){t.setState({restaurants:e.data,currentRestaurant:null,random_restaurant:e.data[Math.floor(Math.random()*e.data.length)]}),console.log("search city",e.data)})).catch((function(e){console.log(e)})),e.preventDefault()}},{key:"retrieveCities",value:function(){var e=this;C.getAllCities().then((function(t){e.setState({cities:t.data,selectedOption:t.data[0].city})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(k.jsx)("div",{className:"app",children:Object(k.jsxs)("div",{className:"card",children:[Object(k.jsx)("h1",{className:"heading",children:this.state.random_restaurant.name}),Object(k.jsxs)("div",{className:"col-md-8",children:[Object(k.jsx)($.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:he.submit,onClick:this.retrieveRestaurants,children:"Surprise Me"}),Object(k.jsx)("br",{}),Object(k.jsx)("h5",{children:"Surprise by Location"}),Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("form",{onSubmit:this.searchCity,children:[Object(k.jsx)("select",{className:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",value:this.state.selectedOption,onChange:this.handleChange,children:this.state.cities.map((function(e,t){return Object(k.jsx)("option",{value:e.city,children:e.city},t)}))}),Object(k.jsx)("input",{type:"submit",value:"Submit"})]})})]})]})})}}]),a}(n.Component),je=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).retrieveCuisines=n.retrieveCuisines.bind(Object(b.a)(n)),n.refreshList=n.refreshList.bind(Object(b.a)(n)),n.setActiveCuisine=n.setActiveCuisine.bind(Object(b.a)(n)),n.state={cuisines:[],currentCuisine:null,currentIndex:-1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveCuisines()}},{key:"retrieveCuisines",value:function(){var e=this;C.getAllCuisines().then((function(t){e.setState({cuisines:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveCuisines(),this.setState({currentCuisine:null,currentIndex:-1})}},{key:"setActiveCuisine",value:function(e,t){this.setState({currentCuisine:e,currentIndex:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.cuisines,n=t.currentCuisine,s=t.currentIndex;return Object(k.jsx)("div",{className:"bg",children:Object(k.jsx)("div",{className:"card",children:Object(k.jsxs)("div",{className:"rowC",children:[Object(k.jsxs)("div",{className:"list row",children:[Object(k.jsxs)("div",{className:"col-md-8",children:[Object(k.jsx)("h4",{children:"Cuisine List"}),Object(k.jsx)("ul",{className:"list-group",children:a&&a.map((function(t,a){return Object(k.jsx)("li",{className:"list-group-item "+(a===s?"active":""),onClick:function(){return e.setActiveCuisine(t,a)},children:t.type},a)}))})]}),Object(k.jsx)("div",{className:"col-md-6",children:n?Object(k.jsxs)("div",{children:[Object(k.jsx)("h4",{children:"Cuisine"}),Object(k.jsxs)("div",{children:[Object(k.jsx)("label",{children:Object(k.jsx)("strong",{children:"Type:"})})," ",n.type]}),Object(k.jsx)(c.b,{to:"api/cuisine/"+n.id,className:"badge badge-warning",children:"Edit"})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)("br",{}),Object(k.jsx)("p",{children:"Please click on a Category..."})]})})]}),Object(k.jsx)(Y,{})]})})})}}]),a}(n.Component),me=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(te,{}),Object(k.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark justify-content-between",children:[Object(k.jsxs)("div",{className:"navbar-collapse collapse dual-collapse2",children:[Object(k.jsx)("a",{href:"/login",className:"navbar-brand",children:"WhatsToEat"}),Object(k.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/restaurants",className:"nav-link",children:"Restaurants"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/add",className:"nav-link",children:"Add Restaurant"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/cuisine",className:"nav-link",children:"Cuisines"})})]})]}),Object(k.jsx)("div",{className:"navbar-collapse collapse dual-collapse2",children:Object(k.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/register",className:"nav-link",children:"Register"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/logout",className:"nav-link",children:"Logout"})})]})})]}),Object(k.jsx)("div",{className:"container mt-3",children:Object(k.jsxs)(h.c,{children:[Object(k.jsx)(h.a,{path:"/register",component:oe}),Object(k.jsx)(h.a,{path:"/login/",component:ue}),Object(k.jsx)(h.a,{path:"/logout",component:de}),Object(k.jsx)(h.a,{exact:!0,path:"/",component:be}),Object(k.jsx)(h.a,{exact:!0,path:"/restaurants",component:w}),Object(k.jsx)(h.a,{path:"/restaurants/:id",component:U}),Object(k.jsxs)("div",{className:"main-wrapper",children:[Object(k.jsx)(h.a,{exact:!0,path:"/add",component:B}),Object(k.jsx)(h.a,{path:"/cuisine",component:je})]})]})})]})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(477);r.a.render(Object(k.jsx)(c.a,{children:Object(k.jsx)(me,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[478,1,2]]]);
//# sourceMappingURL=main.ad404c65.chunk.js.map