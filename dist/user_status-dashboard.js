/*! For license information please see user_status-dashboard.js.LICENSE.txt */
!function(){var s,n={63261:function(s,n,e){"use strict";var r=e(20144),a=e(45994),o=e(31352),u=e(79954),i=e(75925),j=e.n(i),c=e(72175),l=e.n(c),d=e(81817),m=e.n(d),f=e(80351),p=e.n(f),h=e(25108),b={name:"Dashboard",components:{NcAvatar:j(),NcDashboardWidget:l(),NcDashboardWidgetItem:m()},data:function(){return{statuses:[],loading:!0}},computed:{items:function(){var s=this;return this.statuses.map((function(n){var e=n.icon||"",r=n.message||"";""===r&&("away"===n.status&&(r=t("user_status","Away")),"dnd"===n.status&&(r=t("user_status","Do not disturb")));var a,o=""!==n.icon?"".concat(e," ").concat(r):r;return a=null===n.icon&&""===r&&null===n.timestamp?"":null===n.icon&&""===r&&null!==n.timestamp?p()(n.timestamp,"X").fromNow():null!==n.timestamp?s.t("user_status","{status}, {timestamp}",{status:o,timestamp:p()(n.timestamp,"X").fromNow()},null,{escape:!1,sanitize:!1}):o,{mainText:n.displayName,subText:a,avatarUsername:n.userId}}))}},mounted:function(){try{this.statuses=(0,u.j)("user_status","dashboard_data"),this.loading=!1}catch(s){h.error(s)}}},v=e(93379),g=e.n(v),y=e(7795),k=e.n(y),A=e(90569),x=e.n(A),z=e(3565),w=e.n(z),C=e(19216),O=e.n(C),_=e(44589),N=e.n(_),D=e(82879),T={};T.styleTagTransform=N(),T.setAttributes=w(),T.insert=x().bind(null,"head"),T.domAPI=k(),T.insertStyleElement=O(),g()(D.Z,T),D.Z&&D.Z.locals&&D.Z.locals;var Z=(0,e(51900).Z)(b,(function(){var s=this,t=s._self._c;return t("NcDashboardWidget",{attrs:{id:"user-status_panel",items:s.items,loading:s.loading,"empty-content-message":s.t("user_status","No recent status changes")},scopedSlots:s._u([{key:"default",fn:function(n){var e=n.item;return[t("NcDashboardWidgetItem",{attrs:{"main-text":e.mainText,"sub-text":e.subText},scopedSlots:s._u([{key:"avatar",fn:function(){return[t("NcAvatar",{staticClass:"item-avatar",attrs:{size:44,user:e.avatarUsername,"display-name":e.mainText,"show-user-status":!1,"show-user-status-compact":!1}})]},proxy:!0}],null,!0)})]}},{key:"emptyContentIcon",fn:function(){return[t("div",{staticClass:"icon-user-status-dark"})]},proxy:!0}])})}),[],!1,null,null,null).exports;e.nc=btoa((0,a.IH)()),r.ZP.prototype.t=o.Iu,r.ZP.prototype.n=o.uN,r.ZP.prototype.OC=OC,r.ZP.prototype.OCA=OCA,document.addEventListener("DOMContentLoaded",(function(){OCA.Dashboard.register("user_status",(function(s){new(r.ZP.extend(Z))({propsData:{}}).$mount(s)}))}))},82879:function(s,t,n){"use strict";var e=n(87537),r=n.n(e),a=n(23645),o=n.n(a)()(r());o.push([s.id,".icon-user-status-dark{width:64px;height:64px;background-size:64px;filter:var(--background-invert-if-dark)}","",{version:3,sources:["webpack://./apps/user_status/src/views/Dashboard.vue"],names:[],mappings:"AACA,uBACC,UAAA,CACA,WAAA,CACA,oBAAA,CACA,uCAAA",sourcesContent:["\n.icon-user-status-dark {\n\twidth: 64px;\n\theight: 64px;\n\tbackground-size: 64px;\n\tfilter: var(--background-invert-if-dark);\n}\n"],sourceRoot:""}]),t.Z=o},46700:function(s,t,n){var e={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(s){var t=a(s);return n(t)}function a(s){if(!n.o(e,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return e[s]}r.keys=function(){return Object.keys(e)},r.resolve=a,s.exports=r,r.id=46700}},e={};function r(s){var t=e[s];if(void 0!==t)return t.exports;var a=e[s]={id:s,loaded:!1,exports:{}};return n[s].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=n,s=[],r.O=function(t,n,e,a){if(!n){var o=1/0;for(c=0;c<s.length;c++){n=s[c][0],e=s[c][1],a=s[c][2];for(var u=!0,i=0;i<n.length;i++)(!1&a||o>=a)&&Object.keys(r.O).every((function(s){return r.O[s](n[i])}))?n.splice(i--,1):(u=!1,a<o&&(o=a));if(u){s.splice(c--,1);var j=e();void 0!==j&&(t=j)}}return t}a=a||0;for(var c=s.length;c>0&&s[c-1][2]>a;c--)s[c]=s[c-1];s[c]=[n,e,a]},r.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return r.d(t,{a:t}),t},r.d=function(s,t){for(var n in t)r.o(t,n)&&!r.o(s,n)&&Object.defineProperty(s,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"==typeof window)return window}}(),r.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},r.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.nmd=function(s){return s.paths=[],s.children||(s.children=[]),s},r.j=7063,function(){r.b=document.baseURI||self.location.href;var s={7063:0};r.O.j=function(t){return 0===s[t]};var t=function(t,n){var e,a,o=n[0],u=n[1],i=n[2],j=0;if(o.some((function(t){return 0!==s[t]}))){for(e in u)r.o(u,e)&&(r.m[e]=u[e]);if(i)var c=i(r)}for(t&&t(n);j<o.length;j++)a=o[j],r.o(s,a)&&s[a]&&s[a][0](),s[a]=0;return r.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.nc=void 0;var a=r.O(void 0,[7874],(function(){return r(63261)}));a=r.O(a)}();
//# sourceMappingURL=user_status-dashboard.js.map?v=6ece39c4ff0e0f556c7f