(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var r=a(15),n=a(16),s=a(18),i=a(17),o=a(19),l=a(0),c=a.n(l),p=a(46),u=a.n(p),h=a(47),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e={labels:this.props.labels,datasets:[{data:this.props.data,backgroundColor:"rgb(43, 124, 255)",borderColor:"rgb(38, 66, 112)",height:400,width:400}]};return c.a.createElement(h.a,{data:e,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1}}})}}]),t}(c.a.Component),f=(a(148),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={error:null,isLoaded:!1,stepDateArr:[],sleepDateArr:[],sleepArr:[],stepArr:[]},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e;if(window.location.hash){var t={};window.location.hash.slice(1).replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function(e,a,r,n){t[a]=n}),e=t.access_token}else window.location.replace("https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22DFML&redirect_uri=https%3A%2F%2Fwww.dslusser.com%2Fdashboard&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight");var a=this,r="https://api.fitbit.com/1/user/-/activities/steps/date/today/1m.json",n="Bearer "+e,s=(fetch(r,{method:"GET","Access-Control-Allow-Credentials":!0,headers:{Authorization:n,"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){for(var t=e["activities-steps"],r=[],n=[],s=30;s>=24;s--)r.push(t[s].value),n.push(t[s].dateTime);a.setState({isLoaded:!0,stepArr:r,stepDateArr:n})}),new Date);s.setDate(s.getDate()-7),s=s.toISOString().split("T")[0];var i=new Date;i=i.toISOString().split("T")[0],r="https://api.fitbit.com/1.2/user/-/sleep/date/".concat(s,"/").concat(i,".json"),fetch(r,{method:"GET","Access-Control-Allow-Credentials":!0,headers:{Authorization:n,"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){for(var t=e.sleep.map(function(e){return[e.minutesAsleep,e.dateOfSleep]}),r=[],n=1;n<=7;n++){var s=new Date;s.setDate(s.getDate()-n),r.push([0,s.toISOString().split("T")[0]])}for(var i=0,o=r;i<o.length;i++){var l=o[i],c=!0,p=!1,u=void 0;try{for(var h,d=t[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var f=h.value;if(l[1]===f[1])return void(l[0]=(f[0]/60).toFixed(1))}}catch(m){p=!0,u=m}finally{try{c||null==d.return||d.return()}finally{if(p)throw u}}}var v=r.map(function(e){return e[1]});r=r.map(function(e){return e[0]}),a.setState({isLoaded:!0,sleepArr:r,sleepDateArr:v})})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"centerText"},"Dashboard"),c.a.createElement("div",{className:"componentContainer"},c.a.createElement("div",{style:{height:400,width:400}},c.a.createElement("h1",null,"Fitbit Steps"),c.a.createElement(d,{className:"sans",labels:this.state.stepDateArr.reverse(),data:this.state.stepArr.reverse()})),c.a.createElement("div",{style:{height:400,width:400}},c.a.createElement("h1",null,"Hours Slept"),c.a.createElement(d,{labels:this.state.sleepDateArr.reverse(),data:this.state.sleepArr.reverse()}))))}}]),t}(l.Component));u.a.render(c.a.createElement(f,null),document.getElementById("root"))},49:function(e,t,a){e.exports=a(149)}},[[49,1,2]]]);
//# sourceMappingURL=main.9bbdc1cc.chunk.js.map