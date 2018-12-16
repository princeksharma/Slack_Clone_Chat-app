(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(20)},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(12),i=n.n(s),o=n(2),c=n(3),u=n(5),l=n(4),h=n(6),m=n(1),p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={username:""},n.onSubmit=n.onSubmit.bind(Object(m.a)(Object(m.a)(n))),n.onChange=n.onChange.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.username)}},{key:"onChange",value:function(e){this.setState({username:e.target.value})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("h2",null,"What is your username?"),a.a.createElement("form",{onSubmit:this.onSubmit},a.a.createElement("input",{type:"text",placeholder:"Your full name",onChange:this.onChange}),a.a.createElement("input",{type:"submit"}))))}}]),t}(r.Component),d=n(9),b=n(8),f=n.n(b),g=n(7),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={container:{overflowY:"scroll",flex:1},ul:{listStyle:"none"},li:{marginTop:13,marginBottom:13},senderUsername:{fontWeight:"bold"},message:{fontSize:15}};return a.a.createElement("div",{style:Object(g.a)({},this.props.style,e.container)},a.a.createElement("ul",{style:e.ul},this.props.messages.map(function(t,n){return a.a.createElement("li",{key:n,style:e.li},a.a.createElement("div",null,a.a.createElement("span",{style:e.senderUsername},t.senderId)," "),a.a.createElement("p",{style:e.message},t.text))})))}}]),t}(r.Component),O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={text:""},n.onSubmit=n.onSubmit.bind(Object(m.a)(Object(m.a)(n))),n.onChange=n.onChange.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.text),this.setState({text:""})}},{key:"onChange",value:function(e){this.setState({text:e.target.value}),this.props.onChange&&this.props.onChange()}},{key:"render",value:function(){var e={container:{padding:20,borderTop:"1px #4C758F solid",marginBottom:20},form:{display:"flex"},input:{color:"inherit",background:"none",outline:"none",border:"none",flex:1,fontSize:16}};return a.a.createElement("div",{style:e.container},a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.onSubmit,style:e.form},a.a.createElement("input",{type:"text",placeholder:"Type a message here then hit ENTER",onChange:this.onChange,value:this.state.text,style:e.input}))))}}]),t}(r.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.usersWhoAreTyping.length>0?a.a.createElement("div",null,"".concat(this.props.usersWhoAreTyping.slice(0,2).join(" and ")," is typing")):a.a.createElement("div",null)}}]),t}(r.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"renderUsers",value:function(){var e=this;return a.a.createElement("ul",null,this.props.users.map(function(t,n){return t.id===e.props.currentUser.id?a.a.createElement(E,{key:n,presenceState:"online"},t.name," (You)"):a.a.createElement(E,{key:n,presenceState:t.presence.state},t.name)}))}},{key:"render",value:function(){return this.props.users?this.renderUsers():a.a.createElement("p",null,"Loading...")}}]),t}(r.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={li:{display:"flex",alignItems:"center",marginTop:5,marginBottom:5,paddingTop:2,paddingBottom:2},div:{borderRadius:"50%",width:11,height:11,marginRight:10}};return a.a.createElement("li",{style:e.li},a.a.createElement("div",{style:Object(g.a)({},e.div,{backgroundColor:"online"===this.props.presenceState?"#539eff":"#414756"})}),this.props.children)}}]),t}(r.Component),S=v,C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={currentUser:{},currentRoom:{},message:[],userWhoAreTyping:[]},n.message=n.sendMessage.bind(Object(m.a)(Object(m.a)(n))),n.sendTypeEvent=n.sendTypingEvent.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"sendTypingEvent",value:function(){this.state.currentUser.isTypingIn({roomId:this.state.currentRoom.id}).catch(function(e){return console.error("error",e)})}},{key:"sendMessage",value:function(e){this.state.currentUser.sendMessage({text:e,roomId:this.state.currentRoom.id})}},{key:"componentDidMount",value:function(){var e=this;new f.a.ChatManager({instanceLocator:"v1:us1:e582f7d6-3b62-4fc6-a034-a4f71f7ed220",userId:this.props.currentUsername,tokenProvider:new f.a.TokenProvider({url:"http://localhost:3001/authenticate"})}).connect().then(function(t){return e.setState({currentUser:t}),t.subscribeToRoom({roomId:19390999,messageLimit:100,hooks:{onMessage:function(t){e.setState({messages:Object(d.a)(e.state.messages).concat([t])})},onUserStartedTyping:function(t){e.setState({usersWhoAreTyping:Object(d.a)(e.state.usersWhoAreTyping).concat([t.name])})},onUserStoppedTyping:function(t){e.setState({usersWhoAreTyping:e.state.usersWhoAreTyping.filter(function(e){return e!==t.name})})},onPresenceChange:function(){return e.forceUpdate()},onUserJoined:function(){return e.forceUpdate()}}})}).then(function(t){e.setState({currentRoom:t})}).catch(function(e){return console.error("error",e)})}},{key:"render",value:function(){var e={container:{height:"100vh",display:"flex",flexDirection:"column"},chatContainer:{display:"flex",flex:1},whosOnlineListContainer:{width:"300px",flex:"none",padding:20,backgroundColor:"#2c303b",color:"white"},chatListContainer:{padding:20,width:"85%",display:"flex",flexDirection:"column"}};return a.a.createElement("div",{style:e.container},a.a.createElement("div",{style:e.chatContainer},a.a.createElement("aside",{style:e.whosOnlineListContainer},a.a.createElement(S,{currentUser:this.state.currentUser,users:this.state.currentRoom.users}),a.a.createElement("h2",null,"Who's online PLACEHOLDER")),a.a.createElement("section",{style:e.chatListContainer},a.a.createElement(y,{message:this.state.messages,style:e.chatList}),a.a.createElement(j,{userWhoAreTyping:this.state.userWhoAreTyping}),a.a.createElement(O,{onSubmit:this.sendMessage,onChange:this.sendTypingEvent}))))}}]),t}(r.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={currentUsername:"",currentScreen:"WhatIsYourUsernameScreen"},e.onUsernameSubmitted=e.onUsernameSubmitted.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onUsernameSubmitted",value:function(e){var t=this;fetch("http://localhost:3001/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e})}).then(function(n){t.setState({currentUsername:e,currentScreen:"ChatScreen"})}).catch(function(e){return console.error("error",e)})}},{key:"render",value:function(){return"WhatIsYourUsernameScreen"===this.state.currentScreen?a.a.createElement(p,{onSubmit:this.onUsernameSubmitted}):"ChatScreen"===this.state.currentScreen?a.a.createElement(C,{currentUsername:this.state.currentUsername}):void 0}}]),t}(r.Component);n(18);i.a.render(a.a.createElement(k,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.f2159fdf.chunk.js.map