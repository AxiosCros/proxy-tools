webpackJsonp([1],{"+skl":function(t,e){},K18R:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout"},[e("Layout",{style:{height:"100%"}},[e("Header",[e("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"}},[e("div",{staticClass:"layout-logo"}),this._v(" "),e("div",{staticClass:"layout-nav"})])],1),this._v(" "),e("Layout",{style:{},attrs:{theme:"light"}},[e("Sider",{style:{background:"#fff"}},[e("Menu",{attrs:{"active-name":this.$route.path,theme:"light",width:"auto"},on:{"on-select":this.handleSelectNav}},[e("MenuItem",{attrs:{name:"/changeHosts"}},[e("Icon",{attrs:{type:"ios-construct"}}),this._v(" host 管理\n          ")],1)],1)],1),this._v(" "),e("Layout",{style:{padding:"24px"}},[e("Content",{style:{padding:"24px",background:"#fff"}},[e("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")({name:"Wrap",methods:{handleSelectNav:function(t){this.$router.push(t)}}},s,!1,function(t){a("K18R"),a("sBZv")},"data-v-451b61ec",null).exports,o=a("/ocq"),i=a("lHA8"),c=a.n(i),l=a("Gu7T"),d=a.n(l),u=a("Xxa5"),p=a.n(u),h=a("exGp"),f=a.n(h),v=a("mtWM"),m=a.n(v),k={name:"ChangeHosts",mounted:function(){this.getAllHosts()},data:function(){var t=this;return{address:"",ip:"",addLoading:!1,modal:!1,autoAddress:[],autoIp:[],columns:[{title:"State",key:"active",width:150,render:function(e,a){return e("div",[e("i-switch",{props:{value:a.row.active},nativeOn:{click:function(){t.handleChangeState(a.row)}}})])}},{title:"Address",key:"address",filters:[],filterMultiple:!1,filterMethod:function(t,e){return e.address===t}},{title:"Ip",key:"ip",filters:[],filterMultiple:!1,filterMethod:function(t,e){return e.ip===t}},{title:"Operation",render:function(e,a){return e("div",[e("Button",{props:{type:"error"},on:{click:function(){t.handleDelete(a.row)}}},"删除")])}}],data:[]}},methods:{getAllHosts:function(){var t=f()(p.a.mark(function t(){var e,a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("//localhost:3000/api/getAllHosts");case 3:e=t.sent,1===(a=e.data).state?(this.data=a.data,this.updateFilter()):this.$Modal.error({title:"错误",content:a.msg}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),updateFilter:function(){var t=[],e=[];this.data.map(function(a){t.push(a.address),e.push(a.ip)});var a=(t=[].concat(d()(new c.a(t)))).map(function(t,e){return{label:t,value:t}}),n=(e=[].concat(d()(new c.a(e)))).map(function(t,e){return{label:t,value:t}});this.columns[1].filters=a,this.autoAddress=t,this.columns[2].filters=n,this.autoIp=e},handleChangeState:function(){var t=f()(p.a.mark(function t(e){var a,n;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s={address:e.address,ip:e.ip},m.a.post("//localhost:3000/api/changeState",{address:s.address,ip:s.ip});case 3:a=t.sent,1!==(n=a.data).state&&this.$Modal.error({title:"错误",content:n.msg}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}var s},t,this,[[0,8]])}));return function(e){return t.apply(this,arguments)}}(),handleClickAdd:function(){var t=f()(p.a.mark(function t(){var e,a,n,s;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=this.address,a=this.ip,t.next=4,r={address:e,ip:a},m.a.post("//localhost:3000/api/addHost",{address:r.address,ip:r.ip});case 4:n=t.sent,1===(s=n.data).state?(this.$Message.success({content:"添加成功"}),this.handleClickCancel(),this.data=s.data):this.$Modal.error({title:"错误",content:s.msg}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}var r},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),handleClickCancel:function(){this.address="",this.ip="",this.modal=!1},handleDelete:function(){var t=f()(p.a.mark(function t(e){var a=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{this.$Modal.confirm({title:"提示",content:"确认要删除该条host吗",onOk:function(){var t=f()(p.a.mark(function t(){var n,s,r,o;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.address,s=e.ip,t.next=3,i={address:n,ip:s},m.a.post("//localhost:3000/api/deleteHost",{address:i.address,ip:i.ip});case 3:r=t.sent,1===(o=r.data).state?(a.$Message.success({content:"删除成功"}),a.data=o.data):a.$Modal.error({title:"错误",content:o.msg});case 6:case"end":return t.stop()}var i},t,a)}));return function(){return t.apply(this,arguments)}}()})}catch(t){console.error(t)}case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"contWrap"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.modal=!0}}},[t._v("新增host")]),t._v(" "),a("Divider"),t._v(" "),a("Table",{ref:"table",attrs:{stripe:"",columns:t.columns,data:t.data}}),t._v(" "),a("Modal",{attrs:{title:"添加Host",loading:"","ok-text":"添加",closable:!1,"mask-closable":!1},on:{"on-ok":t.handleClickAdd,"on-cancel":t.handleClickCancel},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("AutoComplete",{staticStyle:{margin:"10px 0"},attrs:{placeholder:"请输入地址",data:t.autoAddress},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),t._v(" "),a("AutoComplete",{staticStyle:{margin:"10px 0"},attrs:{placeholder:"请输入ip",data:t.autoIp},model:{value:t.ip,callback:function(e){t.ip=e},expression:"ip"}}),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.handleClickCancel}},[t._v("取消")]),t._v(" "),a("Button",{attrs:{type:"primary",disabled:!t.address||!t.ip},on:{click:t.handleClickAdd}},[t._v("添加")])],1)],1)],1)},staticRenderFns:[]};var g=a("VU/8")(k,y,!1,function(t){a("kupv")},null,null).exports;n.default.use(o.a);var x=new o.a({routes:[{path:"/"},{path:"/changeHosts",component:g}]}),w=a("BTaQ"),C=a.n(w);a("+skl");n.default.use(C.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:x,components:{App:r},template:"<App/>"})},kupv:function(t,e){},sBZv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cba2e6a1675f6053d851.js.map