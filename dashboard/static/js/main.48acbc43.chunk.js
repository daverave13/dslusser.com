(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),s=a(18),o=a(17),i=a(19),l=a(0),c=a.n(l),u=a(46),h=a.n(u),p=a(47),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e={labels:this.props.labels,datasets:[{data:this.props.data,backgroundColor:"rgb(43, 124, 255)",borderColor:"rgb(38, 66, 112)",height:400,width:400}]};return c.a.createElement(p.a,{data:e,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1}}})}}]),t}(c.a.Component),f=(a(148),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={error:null,isLoaded:!1,dateArr:[],sleepArr:[],stepArr:[]},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e;if(window.location.hash){var t={};window.location.hash.slice(1).replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function(e,a,n,r){t[a]=r}),e=t.access_token}else window.location.replace("https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22DFML&redirect_uri=https%3A%2F%2Fwww.dslusser.com%2Fdashboard&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight");var a=this,n="https://api.fitbit.com/1/user/-/activities/steps/date/today/1m.json",r="Bearer "+e,s=(fetch(n,{method:"GET","Access-Control-Allow-Credentials":!0,headers:{Authorization:r,"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){for(var t=e["activities-steps"],n=[],r=[],s=30;s>=24;s--)n.push(t[s].value),r.push(t[s].dateTime);a.setState({isLoaded:!0,stepArr:n,dateArr:r})}),new Date);s.setDate(s.getDate()-7),s=s.toISOString().split("T")[0];var o=new Date;o=o.toISOString().split("T")[0],n="https://api.fitbit.com/1.2/user/-/sleep/date/".concat(s,"/").concat(o,".json"),fetch(n,{method:"GET","Access-Control-Allow-Credentials":!0,headers:{Authorization:r,"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){for(var t=e.sleep.map(function(e){return[e.minutesAsleep,e.dateOfSleep]}),n=[],r=1;r<=7;r++){var s=new Date;s.setDate(s.getDate()-r),n.push([0,s.toISOString().split("T")[0]])}for(var o=0,i=n;o<i.length;o++){var l=i[o],c=!0,u=!1,h=void 0;try{for(var p,d=t[Symbol.iterator]();!(c=(p=d.next()).done);c=!0){var f=p.value;l[1]===f[1]&&(l[0]=f[0]/60)}}catch(m){u=!0,h=m}finally{try{c||null==d.return||d.return()}finally{if(u)throw h}}}n=n.map(function(e){return e[0]}),a.setState({isLoaded:!0,sleepArr:n}),console.log(n)})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"centerText"},"Dashboard"),c.a.createElement("div",{className:"componentContainer"},c.a.createElement("div",{style:{height:400,width:400}},c.a.createElement("h1",null,"Fitbit Steps"),c.a.createElement(d,{className:"sans",labels:this.state.dateArr.reverse(),data:this.state.stepArr.reverse()})),c.a.createElement("div",{style:{height:400,width:400}},c.a.createElement("h1",null,"Hours Slept"),c.a.createElement(d,{labels:this.state.dateArr.reverse(),data:this.state.sleepArr.reverse()}))))}}]),t}(l.Component));h.a.render(c.a.createElement(f,null),document.getElementById("root"))},49:function(e,t,a){e.exports=a(149)}},[[49,1,2]]]);
//# sourceMappingURL=main.48acbc43.chunk.js.map