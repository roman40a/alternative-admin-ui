(window["webpackJsonpalternative-admin-ui"]=window["webpackJsonpalternative-admin-ui"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),u=a(137),l=a(144),o=a(14),s=a.n(o),m=a(26),p=a(39),d=a(59),f=a(69),g=a(60),v=a(70),h=a(23),E=a(25),b=a(27),x=a(149),y=a(140),w=a(145),S=a(138),N=a(147),j=a(135),O=a(141),k=a(146),C=a(45),W=a.n(C),D=a(71),I=a(62),T=a(136);function U(){return r.a.createElement(D.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(j.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var A=Object(I.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),F=function(e){var t=e.onSubmit,a=A(),n=r.a.useState(""),i=Object(b.a)(n,2),c=i[0],l=i[1],o=r.a.useState(""),s=Object(b.a)(o,2),m=s[0],p=s[1];return r.a.createElement(T.a,{component:"main",maxWidth:"xs"},r.a.createElement(u.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(x.a,{className:a.avatar},r.a.createElement(W.a,null)),r.a.createElement(D.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),t({email:c,password:m})}},r.a.createElement(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){var t=e.target.value;l(t)}}),r.a.createElement(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){var t=e.target.value;p(t)}}),r.a.createElement(S.a,{control:r.a.createElement(N.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"),r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:!0},r.a.createElement(j.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(O.a,{item:!0},r.a.createElement(h.b,{to:"/sign-up"},"Don't have an account? Sign Up"))))),r.a.createElement(k.a,{mt:8},r.a.createElement(U,null)))};function q(){return r.a.createElement(D.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(j.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var H=Object(I.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),P=function(e){var t=e.onSubmit,a=r.a.useState(""),n=Object(b.a)(a,2),i=n[0],c=n[1],l=r.a.useState(""),o=Object(b.a)(l,2),s=o[0],m=o[1],p=r.a.useState(""),d=Object(b.a)(p,2),f=d[0],g=d[1],v=r.a.useState(""),E=Object(b.a)(v,2),j=E[0],C=E[1],I=H();return r.a.createElement(T.a,{component:"main",maxWidth:"xs"},r.a.createElement(u.a,null),r.a.createElement("div",{className:I.paper},r.a.createElement(x.a,{className:I.avatar},r.a.createElement(W.a,null)),r.a.createElement(D.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:I.form,noValidate:!0,onSubmit:function(e){e.preventDefault();var a={name:"".concat(i," ").concat(s),email:f,password:j};t(a)}},r.a.createElement(O.a,{container:!0,spacing:2},r.a.createElement(O.a,{item:!0,xs:12,sm:6},r.a.createElement(w.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){var t=e.target.value;c(t)}})),r.a.createElement(O.a,{item:!0,xs:12,sm:6},r.a.createElement(w.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){var t=e.target.value;m(t)}})),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){var t=e.target.value;g(t)}})),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){var t=e.target.value;C(t)}})),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(S.a,{control:r.a.createElement(N.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:I.submit},"Sign Up"),r.a.createElement(O.a,{container:!0,justify:"flex-end"},r.a.createElement(O.a,{item:!0},r.a.createElement(h.b,{to:"/sign-in"},"Already have an account? Sign in"))))),r.a.createElement(k.a,{mt:5},r.a.createElement(q,null)))},B=a(148),J=a(142),Y=a(143),G=a(139),M=a(66),R=a.n(M),L=Object(I.a)((function(e){return Object(B.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},register:{textDecoration:"none"}})})),V=function(e){var t=e.userName,a=L();return r.a.createElement("div",{className:a.root},r.a.createElement(J.a,{position:"static"},r.a.createElement(Y.a,null,r.a.createElement(G.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(R.a,null)),r.a.createElement(D.a,{variant:"h6",className:a.title},"Alternative"),t?r.a.createElement(y.a,{color:"inherit"},"Hello, ".concat(t)):r.a.createElement(h.b,{to:"/sign-up",className:a.register},r.a.createElement(y.a,{color:"inherit"},"Register")))))},z=function(e){var t=e.userName;return r.a.createElement("div",null,r.a.createElement(V,{userName:t}),r.a.createElement(T.a,{maxWidth:"sm"},"Home"))},K=function(e){localStorage.setItem("token",e)},Q=new function e(){Object(p.a)(this,e),this.signUp=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n,r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new Headers).append("Content-Type","application/json"),n=JSON.stringify(t),r={method:"POST",headers:a,body:n},e.next=7,fetch("/users",r);case 7:if(i=e.sent,201!==i.status){e.next=15;break}return e.next=12,i.json();case 12:return c=e.sent,K(c.token),e.abrupt("return",{name:c.user.name});case 15:return e.abrupt("return",null);case 18:return e.prev=18,e.t0=e.catch(0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}(),this.signIn=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n,r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new Headers).append("Content-Type","application/json"),n=JSON.stringify(t),r={method:"POST",headers:a,body:n},e.next=7,fetch("/users/login",r);case 7:if(i=e.sent,200!==i.status){e.next=15;break}return e.next=12,i.json();case 12:return c=e.sent,K(c.token),e.abrupt("return",{name:c.user.name});case 15:return e.abrupt("return",null);case 18:return e.prev=18,e.t0=e.catch(0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}(),this.getUser=Object(m.a)(s.a.mark((function e(){var t,a,n,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=localStorage.getItem("token")){e.next=4;break}return e.abrupt("return",null);case 4:return(a=new Headers).append("Content-Type","application/json"),a.append("Authorization","Bearer ".concat(t)),n={method:"GET",headers:a},e.next=10,fetch("/users/me",n);case 10:if(r=e.sent,200!==r.status){e.next=17;break}return e.next=15,r.json();case 15:return i=e.sent,e.abrupt("return",{name:i.name});case 17:return e.abrupt("return",null);case 20:return e.prev=20,e.t0=e.catch(0),e.abrupt("return",null);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))};var X={failure:!1,pending:!1,result:null},Z={failure:!1,pending:!0,result:null},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{failure:!0,pending:!1,result:null,errorMessage:e}};function _(e){return{failure:!1,pending:!1,result:e}}var ee={display:"flex",justifyContent:"center",alignItems:"center",minHeight:450},te=function(){return n.createElement("div",{style:ee},n.createElement("span",{style:{marginLeft:15}},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"))},ae=function(e,t){return n.createElement("div",{style:ee},n.createElement("button",{onClick:t},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"))};function ne(e){var t=e.data,a=e.renderPending,n=e.fetchData,r=e.renderFailure,i=e.predicateNoData,c=void 0===i?function(){return!1}:i,u=e.renderNoData,l=e.children,o=a||te;return function(e,t,a,n,r,i){return function(e){var t=e.pending,a=e.failure,n=e.result;return!t&&!a&&null===n}(e)?t():function(e){var t=e.pending,a=e.failure;return t&&!a}(e)?a():function(e){var t=e.pending,a=e.failure,n=e.result;return!t&&!a&&null!==n}(e)?r(e.result):n(e.errorMessage,i)}(t,o,o,r||ae,(function(e){return c(e)&&u?u():l(e)}),n)}var re=a(67),ie=a.n(re),ce=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={userName:X},a.handleSignUp=function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.signUp(t);case 2:if(n=e.sent,a.setState({userName:Z}),!n){e.next=6;break}return e.abrupt("return",a.setState({userName:_(n.name)}));case 6:a.setState({userName:$("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a:(")});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSignIn=function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.signIn(t);case 2:if(n=e.sent,a.setState({userName:Z}),!n){e.next=6;break}return e.abrupt("return",a.setState({userName:_(n.name)}));case 6:a.setState({userName:$("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a:(")});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderSuccess=function(e){return r.a.createElement(h.a,null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/sign-up",exact:!0,render:function(){return e?r.a.createElement(E.a,{to:"/"}):r.a.createElement(P,{onSubmit:a.handleSignUp})}}),r.a.createElement(E.b,{path:"/sign-in",exact:!0,render:function(){return e?r.a.createElement(E.a,{to:"/"}):r.a.createElement(F,{onSubmit:a.handleSignIn})}}),r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return e?r.a.createElement(z,{userName:e}):r.a.createElement(E.a,{to:"/sign-in"})}})))},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.getUser();case 2:(t=e.sent)?this.setState({userName:_(t.name)}):this.setState({userName:_(void 0)});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.userName;return r.a.createElement("div",{className:ie.a.container},r.a.createElement(ne,{data:t},(function(t){return e.renderSuccess(t)})))}}]),t}(r.a.PureComponent),ue=a(47),le=a(68),oe=Object(le.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:ue.a.A400},background:{default:"#fff"}}});a(102);c.a.render(r.a.createElement(l.a,{theme:oe},r.a.createElement(u.a,null),r.a.createElement(ce,null)),document.getElementById("root"))},67:function(e,t,a){},90:function(e,t,a){e.exports=a(103)}},[[90,1,2]]]);
//# sourceMappingURL=main.aff91207.chunk.js.map