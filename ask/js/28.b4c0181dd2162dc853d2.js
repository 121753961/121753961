webpackJsonp([28],{118:function(e,t,n){n(400);var o=n(8)(n(372),n(470),null,null);e.exports=o.exports},120:function(e,t,n){"use strict";var o=n(122),i=n.n(o);n.d(t,"d",function(){return s}),n.d(t,"c",function(){return r}),n.d(t,"e",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return d}),n.d(t,"f",function(){return l});var s=function(e,t){e&&("string"!=typeof t&&(t=i()(t)),window.localStorage.setItem(e,t))},r=function(e){if(e)return window.localStorage.getItem(e)},a=function(e){e&&window.localStorage.removeItem(e)},c="//p.07358.com/",d="http://qpic.07358.com/",l=function(e){if(""!=e&&e){return-1!=e.indexOf("http://tu.07358.com")?e:"          "==e?"http://jimg.07358.com/Fnhc3IKMv02O5Udciy3gsPCf6C6y":c+e}return"http://jimg.07358.com/Fnhc3IKMv02O5Udciy3gsPCf6C6y"}},122:function(e,t,n){e.exports={default:n(123),__esModule:!0}},123:function(e,t,n){var o=n(2),i=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},319:function(e,t,n){t=e.exports=n(28)(),t.push([e.i,"#warp{margin:10px auto}#warp .loginTitle{font-size:20px;line-height:60px}.seitchBtn{width:60px}.seitchText{width:200px;text-align:left}.seitchText strong{color:blue}.loginBtnTop{border-top:1px solid #eee;height:30px}","",{version:3,sources:["/Users/kb/Desktop/code/CFWASK/src/page/myinfo/register.vue"],names:[],mappings:"AAGA,MAEE,gBAAkB,CACnB,AACD,kBACE,eAAe,AAEf,gBAAkB,CACnB,AACD,WAEE,UAAY,CACb,AACD,YACE,YAAa,AACb,eAAiB,CAElB,AACD,mBACE,UAAY,CACb,AACD,aACE,0BAA2B,AAC3B,WAAa,CACd",file:"register.vue",sourcesContent:["\n#login{\n}\n#warp{\n  /*width: 95%;*/\n  margin: 10px auto;\n}\n#warp .loginTitle{\n  font-size:20px;\n  /*height: 60px;*/\n  line-height: 60px;\n}\n.seitchBtn{\n  /*border: 1px solid red;*/\n  width: 60px;\n}\n.seitchText{\n  width: 200px;\n  text-align: left;\n  /*border: 1px solid green;*/\n}\n.seitchText strong{\n  color: blue;\n}\n.loginBtnTop{\n  border-top: 1px solid #EEE;\n  height: 30px;\n}\n\n"],sourceRoot:""}])},372:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),i=n.n(o),s=n(9),r=(n.n(s),n(120));t.default={data:function(){return{iphone:"",iphoneCode:"",passWrod:"",codeBtnDisabled:!1,iphoneCodeBtnText:"发送验证码",yqm:"",codeTime:60,agreement:!0,intervalTime:{}}},created:function(){},mounted:function(){},components:{},methods:{handleBack:function(){this.$router.go(-1)},gotoAddress:function(e){this.$router.push(e)},handleRegister:function(){var e=this;if(!this.iphone)return void this.showMsg("请输入手机号码！");if(!this.iphoneCode)return void this.showMsg("请输入验证码！");if(!this.passWrod)return void this.showMsg("请设置密码！");var t={tel:this.iphone,verifyCode:this.iphoneCode,newpassword:this.passWrod},o=this.CFWConfig.APIHost+"/v3/user/reg";this.$http.post(o,this.objToformData(t)).then(function(t){console.log(t.data);var o=t.data.code,i=t.data.message;t.data.result;if(200==o){var a=t.data;n.i(r.d)("userID",a.id),n.i(r.d)("userToken",a.accessToken),setTimeout(function(){e.$router.go(-2)},1500)}else n.i(s.Toast)(i)},function(e){n.i(s.Toast)("网络连接异常"),console.log(e)})},objToformData:function(e){var t=new FormData;return i()(e).forEach(function(n,o){t.append(n,e[n])}),t},handleIphonCode:function(){var e=this;if(this.iphone&&!this.codeBtnDisabled){this.codeBtnDisabled=1,this.getSmscode(this.iphone);var t=function(){if(e.codeTime>0){var t=e.codeTime--;e.iphoneCodeBtnText=t+"s"}else e.codeBtnDisabled=0,e.iphoneCodeBtnText="发送验证码",clearTimeout(e.intervalTime),e.codeTime=60};this.intervalTime=setInterval(t,1e3)}},intervalT:function(){setInterval(function(){},1e3)},showMsg:function(e){n.i(s.Toast)({message:e,duration:800})},getSmscode:function(e){var t=this.CFWConfig.APIHost+"/v3/user/sendsmscode";this.$http.post(t,{tel:e}).then(function(e){200==e.data.code?n.i(s.Toast)("验证码已送到您手机！"):n.i(s.Toast)(e.data.msg)},function(e){n.i(s.Toast)("获取验证码失败"),console.log(e)})}}}},400:function(e,t,n){var o=n(319);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(88)("cbb4284a",o,!0)},470:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("mt-header",{attrs:{title:"用户注册"}},[n("mt-button",{attrs:{icon:"back"},on:{click:e.handleBack},slot:"left"},[e._v("返回")])],1),e._v(" "),n("div",{attrs:{id:"warp"}},[n("mt-field",{attrs:{label:"手机号",placeholder:"请输入手机号",type:"tel"},model:{value:e.iphone,callback:function(t){e.iphone=t},expression:"iphone"}}),e._v(" "),n("mt-field",{attrs:{label:"验证码",placeholder:"请输入验证码",type:"number"},model:{value:e.iphoneCode,callback:function(t){e.iphoneCode=t},expression:"iphoneCode"}},[n("mt-button",{directives:[{name:"show",rawName:"v-show",value:11==e.iphone.length,expression:"iphone.length==11"}],attrs:{size:"small",type:"primary"},nativeOn:{click:function(t){e.handleIphonCode()}}},[e._v(e._s(e.iphoneCodeBtnText))])],1),e._v(" "),n("mt-field",{attrs:{label:"密  码",placeholder:"请输入密码",type:"password"},model:{value:e.passWrod,callback:function(t){e.passWrod=t},expression:"passWrod"}}),e._v(" "),n("div",{staticClass:"loginBtnTop"}),e._v(" "),e.agreement?n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(t){e.handleRegister()}}},[e._v("确认注册")]):e._e()],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=28.b4c0181dd2162dc853d2.js.map