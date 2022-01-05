"use strict";(self.webpackChunknode_red_contrib_power_saver=self.webpackChunknode_red_contrib_power_saver||[]).push([[495],{3707:(e,i,l)=>{l.r(i),l.d(i,{data:()=>a});const a={key:"v-510ed0d4",path:"/changelog/",title:"Change Log",lang:"en-US",frontmatter:{sidebar:"auto"},excerpt:"",headers:[{level:2,title:"3.1.1",slug:"_3-1-1",children:[]},{level:2,title:"3.1.0",slug:"_3-1-0",children:[]},{level:2,title:"3.0.10",slug:"_3-0-10",children:[]},{level:2,title:"3.0.9",slug:"_3-0-9",children:[]},{level:2,title:"3.0.8",slug:"_3-0-8",children:[]},{level:2,title:"3.0.7",slug:"_3-0-7",children:[]},{level:2,title:"3.0.6",slug:"_3-0-6",children:[]},{level:2,title:"3.0.5",slug:"_3-0-5",children:[]},{level:2,title:"3.0.4",slug:"_3-0-4",children:[]},{level:2,title:"3.0.3",slug:"_3-0-3",children:[]},{level:2,title:"3.0.2",slug:"_3-0-2",children:[]},{level:2,title:"3.0.1",slug:"_3-0-1",children:[]},{level:2,title:"3.0.0",slug:"_3-0-0",children:[]},{level:2,title:"2.1.0",slug:"_2-1-0",children:[]},{level:2,title:"2.0.5",slug:"_2-0-5",children:[]},{level:2,title:"2.0.4",slug:"_2-0-4",children:[]},{level:2,title:"2.0.3",slug:"_2-0-3",children:[]},{level:2,title:"2.0.2",slug:"_2-0-2",children:[]},{level:2,title:"2.0.1",slug:"_2-0-1",children:[]},{level:2,title:"2.0.0",slug:"_2-0-0",children:[]},{level:2,title:"1.0.9",slug:"_1-0-9",children:[]}],filePathRelative:"changelog/README.md",git:{updatedTime:1641418117e3}}},8168:(e,i,l)=>{l.r(i),l.d(i,{default:()=>t});const a=(0,l(6252).uE)('<h1 id="change-log" tabindex="-1"><a class="header-anchor" href="#change-log" aria-hidden="true">#</a> Change Log</h1><p>List the most significant changes, starting in version 1.0.9.</p><h2 id="_3-1-1" tabindex="-1"><a class="header-anchor" href="#_3-1-1" aria-hidden="true">#</a> 3.1.1</h2><ul><li>Fix schedule for Lowest Price node so it uses data from previous day correctly. It sometimes failed when the selected period went over midnight.</li><li>Fix so old data in the Lowest Price node context is deleted.</li></ul><h2 id="_3-1-0" tabindex="-1"><a class="header-anchor" href="#_3-1-0" aria-hidden="true">#</a> 3.1.0</h2><ul><li>New node <code>ps-general-add-tariff</code> to add values that varies af fixed times during the day.</li></ul><h2 id="_3-0-10" tabindex="-1"><a class="header-anchor" href="#_3-0-10" aria-hidden="true">#</a> 3.0.10</h2><ul><li>Fix bug in ps-elvia-add-tariff so it connects to API.</li></ul><h2 id="_3-0-9" tabindex="-1"><a class="header-anchor" href="#_3-0-9" aria-hidden="true">#</a> 3.0.9</h2><ul><li>Fix Nord Pool input for current state node, to read data when payload is set to entity.</li></ul><h2 id="_3-0-8" tabindex="-1"><a class="header-anchor" href="#_3-0-8" aria-hidden="true">#</a> 3.0.8</h2><ul><li>Fix bug in Lowest Price node when period goes over midnight.</li><li>Fix documentation - lots of pages were failing.</li></ul><h2 id="_3-0-7" tabindex="-1"><a class="header-anchor" href="#_3-0-7" aria-hidden="true">#</a> 3.0.7</h2><ul><li>Fix Nord Pool current state node input.</li></ul><h2 id="_3-0-6" tabindex="-1"><a class="header-anchor" href="#_3-0-6" aria-hidden="true">#</a> 3.0.6</h2><ul><li>Remove non-existent node from package.json.</li></ul><h2 id="_3-0-5" tabindex="-1"><a class="header-anchor" href="#_3-0-5" aria-hidden="true">#</a> 3.0.5</h2><ul><li>Move dependencies to correct section (node_fetch and lodash.cloneDeep).</li></ul><h2 id="_3-0-4" tabindex="-1"><a class="header-anchor" href="#_3-0-4" aria-hidden="true">#</a> 3.0.4</h2><ul><li>Remove <code>null</code>-values from Nord Pool data for <code>tomorrow</code>.</li></ul><h2 id="_3-0-3" tabindex="-1"><a class="header-anchor" href="#_3-0-3" aria-hidden="true">#</a> 3.0.3</h2><ul><li>Fix bug in lowest price strategy, when period ends at midnight.</li><li>Fix labels for hours on, so they do not have leading zero.</li><li>Fix so source should be visible in output 3.</li></ul><h2 id="_3-0-2" tabindex="-1"><a class="header-anchor" href="#_3-0-2" aria-hidden="true">#</a> 3.0.2</h2><ul><li>Bugfix in Lowest Price node (not successful)</li></ul><h2 id="_3-0-1" tabindex="-1"><a class="header-anchor" href="#_3-0-1" aria-hidden="true">#</a> 3.0.1</h2><ul><li>Fix so elvia subscription key is stored as credential</li><li>Fix bug on config for strategy nodes. Config was not saved properly.</li><li>Remove double output bug, and better handling when hoursOn &gt; period</li></ul><h2 id="_3-0-0" tabindex="-1"><a class="header-anchor" href="#_3-0-0" aria-hidden="true">#</a> 3.0.0</h2><ul><li>Deprecating old Power Saver node, adding multiple new nodes.</li><li>New node <code>ps-strategy-best-save</code> is replacing old node <code>Power Saver</code> together with the new <code>ps-receive-price</code> node.</li><li>Add new strategy node: <code>ps-strategy-lowest-price</code>.</li><li>Add new node: <code>ps-receive-price</code>.</li><li>Add grid tariff for Elvia customers, using the <code>ps-elvia-add-tariff</code> node.</li><li>New documentation.</li><li>Change node category to Power Saver.</li></ul><h2 id="_2-1-0" tabindex="-1"><a class="header-anchor" href="#_2-1-0" aria-hidden="true">#</a> 2.1.0</h2><ul><li>Accept config as input, making it possible to dynamically change config</li><li>Fix dropdown for config value for selecting output when there is no schedule</li><li>Improve config screen and documentation</li></ul><h2 id="_2-0-5" tabindex="-1"><a class="header-anchor" href="#_2-0-5" aria-hidden="true">#</a> 2.0.5</h2><ul><li>Update links to examples</li></ul><h2 id="_2-0-4" tabindex="-1"><a class="header-anchor" href="#_2-0-4" aria-hidden="true">#</a> 2.0.4</h2><ul><li>Update doc and add examples</li></ul><h2 id="_2-0-3" tabindex="-1"><a class="header-anchor" href="#_2-0-3" aria-hidden="true">#</a> 2.0.3</h2><ul><li>Bugfix</li></ul><h2 id="_2-0-2" tabindex="-1"><a class="header-anchor" href="#_2-0-2" aria-hidden="true">#</a> 2.0.2</h2><ul><li>Fix so Nord Pool data can be read directly from the current state node</li></ul><h2 id="_2-0-1" tabindex="-1"><a class="header-anchor" href="#_2-0-1" aria-hidden="true">#</a> 2.0.1</h2><ul><li>Fix bug that caused no schedule</li><li>Add config to output</li></ul><h2 id="_2-0-0" tabindex="-1"><a class="header-anchor" href="#_2-0-0" aria-hidden="true">#</a> 2.0.0</h2><ul><li>New and better algorithm to calculate savings, resulting in a better schedule.</li><li>Removed possibility to configure maximum hours to save per day, as this does not really make much sense.</li><li>Round savings to 4 decimals.</li><li>Set last savings hour to null when 0.</li></ul><h2 id="_1-0-9" tabindex="-1"><a class="header-anchor" href="#_1-0-9" aria-hidden="true">#</a> 1.0.9</h2><ul><li>Fix bug in saving last hour of the day.</li></ul>',44),d={},t=(0,l(3744).Z)(d,[["render",function(e,i){return a}]])},3744:(e,i)=>{i.Z=(e,i)=>{const l=e.__vccOpts||e;for(const[e,a]of i)l[e]=a;return l}}}]);