(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),s=a(18),o=a(17),i=a(19),c=a(0),l=a.n(c),p=a(46),d=a.n(p),u=a(47),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e={labels:this.props.labels,datasets:[{data:this.props.data,backgroundColor:"rgb(43, 124, 255)",borderColor:"rgb(38, 66, 112)",height:400,width:400}]};return l.a.createElement(u.a,{data:e,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1}}})}}]),t}(l.a.Component),m=(a(148),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={error:null,isLoaded:!1,dateArr:[],sleepArr:[],stepArr:[]},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e;if(window.location.hash){var t={};window.location.hash.slice(1).replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function(e,a,n,r){t[a]=r}),e=t.access_token}else window.location.replace("https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22DFML&redirect_uri=https%3A%2F%2Fwww.dslusser.com%2Fdashboard&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight");var a=this,n="https://api.fitbit.com/1/user/-/activities/steps/date/today/1m.json",r="Bearer "+e,s=(fetch(n,{method:"GET","Access-Control-Allow-Credentials":!0,headers:{Authorization:r,"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){for(var t=e["activities-steps"],n=[],r=[],s=30;s>=24;s--)n.push(t[s].value),r.push(t[s].dateTime);a.setState({isLoaded:!0,stepArr:n,dateArr:r})}),new Date);s.setDate(s.getDate()-7),s=s.toISOString().split("T")[0];var o=new Date;o=o.toISOString().split("T")[0],n="https://api.fitbit.com/1.2/user/-/sleep/date/".concat(s,"/").concat(o,".json"),fetch(n,{method:"GET","Access-Control-Allow-Credentials":!0,headers:{Authorization:r,"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){for(var t=e.sleep.map(function(e){return[e.minutesAsleep,e.dateOfSleep]}),a=[],n=0;n<=6;n++){var r=new Date;r.setDate(r.getDate()-n),a.push({sleepHours:0,date:r.toISOString().split("T")[0]})}for(var s in a)for(var o in t)console.log(s),console.log(o),s.date===o[0]&&console.log("yeet")})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"centerText"},"Dashboard"),l.a.createElement("div",{className:"componentContainer"},l.a.createElement("div",{style:{height:400,width:400}},l.a.createElement("h1",null,"Fitbit Steps"),l.a.createElement(h,{className:"sans",labels:this.state.dateArr.reverse(),data:this.state.stepArr.reverse()})),l.a.createElement("div",{style:{height:400,width:400}},l.a.createElement("h1",null,"Hours Slept"),l.a.createElement(h,{labels:this.state.dateArr,data:[6,8,7,5,7,3,9]}))))}}]),t}(c.Component));d.a.render(l.a.createElement(m,null),document.getElementById("root"))},49:function(e,t,a){e.exports=a(149)}},[[49,1,2]]]);
//# sourceMappingURL=main.72957435.chunk.js.map