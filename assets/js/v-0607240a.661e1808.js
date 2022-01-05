"use strict";(self.webpackChunknode_red_contrib_power_saver=self.webpackChunknode_red_contrib_power_saver||[]).push([[35],{3811:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-0607240a",path:"/examples/example-next-schedule-entity.html",title:"Output schedule to a sensor entity",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Setup",slug:"setup",children:[]},{level:2,title:"To-do",slug:"to-do",children:[]}],filePathRelative:"examples/example-next-schedule-entity.md",git:{updatedTime:164027482e4}}},1433:(n,s,a)=>{a.r(s),a.d(s,{default:()=>C});var e=a(6252),t=a(3616),o=a(9101),l=a(3121);const p=(0,e._)("h1",{id:"output-schedule-to-a-sensor-entity",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#output-schedule-to-a-sensor-entity","aria-hidden":"true"},"#"),(0,e.Uk)(" Output schedule to a sensor entity")],-1),u=(0,e.Uk)("This example was contributed by "),c={href:"https://github.com/oakhill87",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("Stefan"),r=(0,e.Uk)("Note: Requires "),k={href:"https://github.com/zachowj/hass-node-red",target:"_blank",rel:"noopener noreferrer"},_=(0,e.Uk)("Node-RED Companion Integration"),d=(0,e.Uk)("."),h=(0,e._)("p",null,[(0,e._)("img",{src:t,alt:"Sensor with timestamp and attributes"}),(0,e.Uk)(),(0,e._)("img",{src:o,alt:"Sensor flow"})],-1),U=(0,e._)("p",null,"This JavaScript code snippet can be pasted into a Function-node. When connected to the schedule-output (3) from Best Save, it will loop through the array of available hours and find the next timestamp where a power saving schedule is initated.",-1),g=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e.Uk)("    "),(0,e._)("span",{class:"token keyword"},"for"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token keyword"},"var"),(0,e.Uk)(" i "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token number"},"0"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)(" i "),(0,e._)("span",{class:"token operator"},"<"),(0,e.Uk)(" msg"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("payload"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("hours"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("length"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)(" i"),(0,e._)("span",{class:"token operator"},"++"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("msg"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("payload"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("hours"),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("i"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("onOff "),(0,e._)("span",{class:"token operator"},"!="),(0,e.Uk)(),(0,e._)("span",{class:"token boolean"},"true"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n        "),(0,e._)("span",{class:"token keyword"},"var"),(0,e.Uk)(" schedule "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("time"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" msg"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("payload"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("hours"),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("i"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("start"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" topic"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"Neste spareperiode"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" length"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" msg"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("payload"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("config"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("maxHoursToSaveInSequence"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" savings"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" msg"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("payload"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("hours"),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("i"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("saving"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n        "),(0,e._)("span",{class:"token keyword"},"break"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"else"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n        "),(0,e._)("span",{class:"token keyword"},"var"),(0,e.Uk)(" schedule "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("time"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token boolean"},"false"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" topic"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"Ingen aksjoner"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" length"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"0"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" savings"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"0"'),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"var"),(0,e.Uk)(" schedule_array "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("upcoming"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" schedule"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"return"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("schedule_array"),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"10"),(0,e._)("br")])],-1),m=(0,e._)("p",null,"This will return the following:",-1),b=(0,e._)("ul",null,[(0,e._)("li",null,"msg.upcoming.time = Timestamp if saving is scheduled - False if no schedule with the current available prices."),(0,e._)("li",null,"msg.upcoming.length = How long the next saving will last - set to 0 if no schedule."),(0,e._)("li",null,"msg.upcoming.savings = Estimated savings retrieved from the node.")],-1),f=(0,e._)("h2",{id:"setup",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#setup","aria-hidden":"true"},"#"),(0,e.Uk)(" Setup")],-1),y=(0,e._)("ol",null,[(0,e._)("li",null,"Paste the code above into a Function node and connect it to the schedule output."),(0,e._)("li",null,"Create an entity node from the Node-RED Companion Integration, and configure it according to the steps below:")],-1),v=(0,e._)("p",null,"The msg.topic is currently not used, but in case you'd want to specify dynamic names in the sensor instead of in the frontend, go ahead and add them as attributes using the following configuration:",-1),w=(0,e._)("ol",null,[(0,e._)("li",null,[(0,e._)("strong",null,"State"),(0,e.Uk)(": msg.upcoming.time")]),(0,e._)("li",null,[(0,e.Uk)("Attribute key "),(0,e._)("strong",null,"Duration"),(0,e.Uk)(": msg.upcoming.length")]),(0,e._)("li",null,[(0,e.Uk)("Attribute key "),(0,e._)("strong",null,"Savings"),(0,e.Uk)(": msg.upcoming.savings")])],-1),x=(0,e._)("img",{src:l,width:"25%"},null,-1),S=(0,e._)("h2",{id:"to-do",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#to-do","aria-hidden":"true"},"#"),(0,e.Uk)(" To-do")],-1),T=(0,e._)("p",null,"If you find any bugs, let me know, but as long as the payload doesn't change it should work.",-1),j={},C=(0,a(3744).Z)(j,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[u,(0,e._)("a",c,[i,(0,e.Wm)(a)])]),(0,e._)("p",null,[r,(0,e._)("a",k,[_,(0,e.Wm)(a)]),d]),h,U,g,m,b,f,y,v,w,x,S,T],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},3121:(n,s,a)=>{n.exports=a.p+"assets/img/next-schedule-entity.4406856a.png"},9101:(n,s,a)=>{n.exports=a.p+"assets/img/next-schedule-flow.413ad62b.png"},3616:(n,s,a)=>{n.exports=a.p+"assets/img/next-schedule-sensor.eb896bdd.png"}}]);