"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[779],{99831:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(71354),a=i.n(n),l=i(76314),c=i.n(l)()(a());c.push([e.id,"/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-551209a3] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.loading-icon svg[data-v-551209a3] {\n  animation: rotate var(--animation-duration, 0.8s) linear infinite;\n}","",{version:3,sources:["webpack://./../nc-vue/dist/assets/NcLoadingIcon-BSONDy7x.css"],names:[],mappings:"AAAA;;;EAGE;AACF;;;EAGE;AACF;;CAEC;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,iEAAiE;AACnE",sourcesContent:["/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-551209a3] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.loading-icon svg[data-v-551209a3] {\n  animation: rotate var(--animation-duration, 0.8s) linear infinite;\n}"],sourceRoot:""}]);const o=c},24891:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(71354),a=i.n(n),l=i(76314),c=i.n(l)()(a());c.push([e.id,".node-picker__wrapper[data-v-7f5c3c1e]:not(:last-of-type) {\n  border-bottom: 1px solid var(--color-border);\n}\n.node-picker[data-v-7f5c3c1e] {\n  display: flex;\n  align-items: center;\n  height: 64px;\n}\n.node-picker__icon[data-v-7f5c3c1e], .node-picker__preview[data-v-7f5c3c1e] {\n  height: 64px;\n  width: 64px;\n  margin: 0 var(--secondary-margin);\n  display: block;\n  flex: 0 0 64px;\n}\n.node-picker__icon[data-v-7f5c3c1e] {\n  color: var(--color-text-maxcontrast);\n}\n.node-picker__icon.folder-icon[data-v-7f5c3c1e] {\n  color: var(--color-primary-element);\n}\n.node-picker__preview[data-v-7f5c3c1e] {\n  overflow: hidden;\n  border-radius: calc(var(--border-radius) * 2);\n  background-position: center;\n  background-size: cover;\n}\n.node-picker__desc[data-v-7f5c3c1e] {\n  display: flex;\n  flex-direction: column;\n}\n.node-picker__desc span[data-v-7f5c3c1e] {\n  white-space: nowrap;\n}[data-v-3d711b53] .modal-container__content {\n  display: flex;\n  overflow: visible;\n  flex-direction: column;\n}\n.conflict-picker[data-v-3d711b53] {\n  --margin: 36px;\n  --secondary-margin: 18px;\n}\n.conflict-picker__header[data-v-3d711b53] {\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  padding: 0 var(--margin);\n  padding-bottom: var(--secondary-margin);\n}\n.conflict-picker__form[data-v-3d711b53] {\n  position: relative;\n  overflow: auto;\n  padding: 0 var(--margin);\n  margin-top: calc(-1 * var(--secondary-margin));\n}\n.conflict-picker fieldset[data-v-3d711b53] {\n  display: grid;\n  width: 100%;\n  margin-top: calc(var(--secondary-margin) * 1.5);\n  padding-bottom: var(--secondary-margin);\n  grid-template-columns: 1fr 1fr;\n}\n.conflict-picker fieldset[data-v-3d711b53] legend {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: calc(var(--secondary-margin) / 2);\n}\n.conflict-picker fieldset.conflict-picker__all[data-v-3d711b53] {\n  position: sticky;\n  top: 0;\n  margin: 0;\n  padding: var(--secondary-margin) 0;\n  background-image: linear-gradient(to top, transparent, var(--color-main-background-blur) 10%, var(--color-main-background) 15%);\n}\n.conflict-picker fieldset.conflict-picker__all + fieldset[data-v-3d711b53] {\n  margin-top: 0;\n}\n.conflict-picker fieldset.conflict-picker__all[data-v-3d711b53] label {\n  font-weight: bold;\n}\n.conflict-picker .button-vue--disabled[data-v-3d711b53] {\n  cursor: default;\n  opacity: 0.5;\n  filter: saturate(0.7);\n}\n.conflict-picker[data-v-3d711b53] .dialog__actions {\n  width: auto;\n  margin-inline: 12px;\n}\n.conflict-picker[data-v-3d711b53] .dialog__actions span.dialog__actions-separator {\n  margin-left: auto;\n}\n@media screen and (max-width: 768px) {\n.conflict-picker[data-v-3d711b53] {\n    --margin: var(--secondary-margin) !important;\n}\n.conflict-picker__description[data-v-3d711b53] {\n    display: none !important;\n}\n.conflict-picker fieldset[data-v-3d711b53] {\n    grid-template-columns: 1fr !important;\n}\n.conflict-picker fieldset.conflict-picker__all[data-v-3d711b53] {\n    position: static;\n}\n}\n@media screen and (max-width: 512px) {\n.conflict-picker[data-v-3d711b53] .dialog__actions {\n    flex-wrap: wrap;\n}\n.conflict-picker[data-v-3d711b53] .dialog__actions span.dialog__actions-separator {\n    width: 100%;\n}\n}","",{version:3,sources:["webpack://./node_modules/@nextcloud/upload/dist/assets/ConflictPicker-BLKkaAWv.css"],names:[],mappings:"AAAA;EACE,4CAA4C;AAC9C;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,YAAY;EACZ,WAAW;EACX,iCAAiC;EACjC,cAAc;EACd,cAAc;AAChB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,gBAAgB;EAChB,6CAA6C;EAC7C,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB,CAAC;EACC,aAAa;EACb,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,wBAAwB;AAC1B;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,MAAM;EACN,wBAAwB;EACxB,uCAAuC;AACzC;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,wBAAwB;EACxB,8CAA8C;AAChD;AACA;EACE,aAAa;EACb,WAAW;EACX,+CAA+C;EAC/C,uCAAuC;EACvC,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,gDAAgD;AAClD;AACA;EACE,gBAAgB;EAChB,MAAM;EACN,SAAS;EACT,kCAAkC;EAClC,+HAA+H;AACjI;AACA;EACE,aAAa;AACf;AACA;EACE,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA;AACA;IACI,4CAA4C;AAChD;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,qCAAqC;AACzC;AACA;IACI,gBAAgB;AACpB;AACA;AACA;AACA;IACI,eAAe;AACnB;AACA;IACI,WAAW;AACf;AACA",sourcesContent:[".node-picker__wrapper[data-v-7f5c3c1e]:not(:last-of-type) {\n  border-bottom: 1px solid var(--color-border);\n}\n.node-picker[data-v-7f5c3c1e] {\n  display: flex;\n  align-items: center;\n  height: 64px;\n}\n.node-picker__icon[data-v-7f5c3c1e], .node-picker__preview[data-v-7f5c3c1e] {\n  height: 64px;\n  width: 64px;\n  margin: 0 var(--secondary-margin);\n  display: block;\n  flex: 0 0 64px;\n}\n.node-picker__icon[data-v-7f5c3c1e] {\n  color: var(--color-text-maxcontrast);\n}\n.node-picker__icon.folder-icon[data-v-7f5c3c1e] {\n  color: var(--color-primary-element);\n}\n.node-picker__preview[data-v-7f5c3c1e] {\n  overflow: hidden;\n  border-radius: calc(var(--border-radius) * 2);\n  background-position: center;\n  background-size: cover;\n}\n.node-picker__desc[data-v-7f5c3c1e] {\n  display: flex;\n  flex-direction: column;\n}\n.node-picker__desc span[data-v-7f5c3c1e] {\n  white-space: nowrap;\n}[data-v-3d711b53] .modal-container__content {\n  display: flex;\n  overflow: visible;\n  flex-direction: column;\n}\n.conflict-picker[data-v-3d711b53] {\n  --margin: 36px;\n  --secondary-margin: 18px;\n}\n.conflict-picker__header[data-v-3d711b53] {\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  padding: 0 var(--margin);\n  padding-bottom: var(--secondary-margin);\n}\n.conflict-picker__form[data-v-3d711b53] {\n  position: relative;\n  overflow: auto;\n  padding: 0 var(--margin);\n  margin-top: calc(-1 * var(--secondary-margin));\n}\n.conflict-picker fieldset[data-v-3d711b53] {\n  display: grid;\n  width: 100%;\n  margin-top: calc(var(--secondary-margin) * 1.5);\n  padding-bottom: var(--secondary-margin);\n  grid-template-columns: 1fr 1fr;\n}\n.conflict-picker fieldset[data-v-3d711b53] legend {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: calc(var(--secondary-margin) / 2);\n}\n.conflict-picker fieldset.conflict-picker__all[data-v-3d711b53] {\n  position: sticky;\n  top: 0;\n  margin: 0;\n  padding: var(--secondary-margin) 0;\n  background-image: linear-gradient(to top, transparent, var(--color-main-background-blur) 10%, var(--color-main-background) 15%);\n}\n.conflict-picker fieldset.conflict-picker__all + fieldset[data-v-3d711b53] {\n  margin-top: 0;\n}\n.conflict-picker fieldset.conflict-picker__all[data-v-3d711b53] label {\n  font-weight: bold;\n}\n.conflict-picker .button-vue--disabled[data-v-3d711b53] {\n  cursor: default;\n  opacity: 0.5;\n  filter: saturate(0.7);\n}\n.conflict-picker[data-v-3d711b53] .dialog__actions {\n  width: auto;\n  margin-inline: 12px;\n}\n.conflict-picker[data-v-3d711b53] .dialog__actions span.dialog__actions-separator {\n  margin-left: auto;\n}\n@media screen and (max-width: 768px) {\n.conflict-picker[data-v-3d711b53] {\n    --margin: var(--secondary-margin) !important;\n}\n.conflict-picker__description[data-v-3d711b53] {\n    display: none !important;\n}\n.conflict-picker fieldset[data-v-3d711b53] {\n    grid-template-columns: 1fr !important;\n}\n.conflict-picker fieldset.conflict-picker__all[data-v-3d711b53] {\n    position: static;\n}\n}\n@media screen and (max-width: 512px) {\n.conflict-picker[data-v-3d711b53] .dialog__actions {\n    flex-wrap: wrap;\n}\n.conflict-picker[data-v-3d711b53] .dialog__actions span.dialog__actions-separator {\n    width: 100%;\n}\n}"],sourceRoot:""}]);const o=c},93541:(e,t,i)=>{i.d(t,{A:()=>n.N});var n=i(88481)},83376:(e,t,i)=>{i.d(t,{A:()=>n.N});var n=i(48852)},51818:(e,t,i)=>{i.d(t,{A:()=>k});var n=i(85072),a=i.n(n),l=i(97825),c=i.n(l),o=i(77659),s=i.n(o),r=i(55056),d=i.n(r),p=i(10540),A=i.n(p),m=i(41113),u=i.n(m),f=i(99831),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=A(),a()(f.A,h),f.A&&f.A.locals&&f.A.locals;var g=i(15240);const C={name:"NcLoadingIcon",props:{size:{type:Number,default:20},appearance:{type:String,validator:e=>["auto","light","dark"].includes(e),default:"auto"},name:{type:String,default:""}},computed:{colors(){const e=["#777","#CCC"];return"light"===this.appearance?e:"dark"===this.appearance?e.reverse():["var(--color-loading-light)","var(--color-loading-dark)"]}}};var v=function(){var e=this,t=e._self._c;return t("span",{staticClass:"material-design-icon loading-icon",attrs:{"aria-label":e.name,role:"img"}},[t("svg",{attrs:{width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:e.colors[0],d:"M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"}}),t("path",{attrs:{fill:e.colors[1],d:"M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"}},[e.name?t("title",[e._v(e._s(e.name))]):e._e()])])])},_=[];const k=(0,g.n)(C,v,_,!1,null,"551209a3",null,null).exports},48852:(e,t,i)=>{i.d(t,{N:()=>p});var n=i(85471),a=i(80049),l=i(15008),c=i(15240);(0,l.r)(l.j);const o={long:(0,l.a)("a few seconds ago"),short:(0,l.a)("seconds ago"),narrow:(0,l.a)("sec. ago")},s={name:"NcDateTime",props:{timestamp:{type:[Date,Number],required:!0},format:{type:Object,default:()=>({timeStyle:"medium",dateStyle:"short"})},relativeTime:{type:[Boolean,String],default:"long",validator:e=>!1===e||["long","short","narrow"].includes(e)},ignoreSeconds:{type:Boolean,default:!1}},setup(e){const t=(0,n.EW)((()=>e.timestamp)),{formattedTime:i,formattedFullTime:l}=function(e=Date.now(),t={}){const i=(0,n.KR)(Date.now());let l;const c=(0,n.KR)({format:{timeStyle:"medium",dateStyle:"short"},relativeTime:"long",ignoreSeconds:!1,...(0,n.R1)(t)}),s=(0,n.EW)((()=>({...(0,n.R1)(t),...c.value}))),r=(0,n.EW)((()=>new Date((0,n.R1)(e)))),d=(0,n.EW)((()=>new Intl.DateTimeFormat((0,a.lO)(),s.value.format).format(r.value))),p=(0,n.EW)((()=>{if(!1!==s.value.relativeTime){const e=new Intl.RelativeTimeFormat((0,a.Z0)(),{numeric:"auto",style:s.value.relativeTime}),t=(r.value.getTime()-i.value)/1e3;if(Math.abs(t)<=90)return s.value.ignoreSeconds?o[s.value.relativeTime]:e.format(Math.round(t),"second");const n=t/60;if(Math.abs(n)<=90)return e.format(Math.round(n),"minute");const l=n/60;if(Math.abs(l)<=24)return e.format(Math.round(l),"hour");const c=l/24;if(Math.abs(c)<=6)return e.format(Math.round(c),"day");const d=c/7;if(Math.abs(d)<=4)return e.format(Math.round(d),"week");const p=c/30;return Math.abs(p)<=12?e.format(Math.round(p),"month"):e.format(Math.round(c/365),"year")}return d.value}));return(0,n.wB)([s],(()=>{window.clearInterval(l),l=void 0,s.value.relativeTime&&(l=window.setInterval((()=>{i.value=Date.now()}),1e3))})),(0,n.sV)((()=>{!1!==s.value.relativeTime&&(l=window.setInterval((()=>{i.value=Date.now()}),1e3))})),(0,n.hi)((()=>{window.clearInterval(l)})),{formattedTime:p,formattedFullTime:d,options:c}}(t,e);return{formattedTime:i,formattedFullTime:l}}};var r=function(){var e=this;return(0,e._self._c)("span",{staticClass:"nc-datetime",attrs:{"data-timestamp":e.timestamp,title:e.formattedFullTime},domProps:{textContent:e._s(e.formattedTime)}})},d=[];const p=(0,c.n)(s,r,d,!1,null,null,null,null).exports},26778:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Z});var n=i(85072),a=i.n(n),l=i(97825),c=i.n(l),o=i(77659),s=i.n(o),r=i(55056),d=i.n(r),p=i(10540),A=i.n(p),m=i(41113),u=i.n(m),f=i(24891),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=A(),a()(f.A,h),f.A&&f.A.locals&&f.A.locals;var g=i(85471),C=i(85168),v=i(49584),_=i(39025),k=i(93541),b=i(40127),w=i(46043),y=i(63814),S=i(83376);const x={name:"ArrowRightIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var E=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon arrow-right-icon",attrs:{"aria-hidden":!e.title||null,"aria-label":e.title,role:"img"},on:{click:function(t){return e.$emit("click",t)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},B=[];const N=(0,_.n)(x,E,B,!1,null,null,null,null).exports,F={name:"CloseIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var P=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon close-icon",attrs:{"aria-hidden":!e.title||null,"aria-label":e.title,role:"img"},on:{click:function(t){return e.$emit("click",t)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},L=[];const I=(0,_.n)(F,P,L,!1,null,null,null,null).exports,z={name:"FileIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var M=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon file-icon",attrs:{"aria-hidden":!e.title||null,"aria-label":e.title,role:"img"},on:{click:function(t){return e.$emit("click",t)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},T=[];const D=(0,_.n)(z,M,T,!1,null,null,null,null).exports,R={name:"FolderIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var W=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon folder-icon",attrs:{"aria-hidden":!e.title||null,"aria-label":e.title,role:"img"},on:{click:function(t){return e.$emit("click",t)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},O=[];const $=(0,_.n)(R,W,O,!1,null,null,null,null).exports,U=(0,g.pM)({name:"NodesPicker",components:{FileSvg:D,FolderSvg:$,NcCheckboxRadioSwitch:k.A,NcDateTime:S.A},props:{incoming:{type:[File,Object],required:!0},existing:{type:Object,required:!0},newSelected:{type:Array,required:!0},oldSelected:{type:Array,required:!0}},data:()=>({asyncPreview:null,incomingFile:null}),computed:{isEnoughSelected(){return this.isChecked(this.incoming,this.newSelected)||this.isChecked(this.existing,this.oldSelected)},incomingPreview(){return this.incomingFile?this.previewUrl(this.incomingFile)??this.asyncPreview:null},incomingLastModified(){return this.incomingFile?this.lastModified(this.incomingFile):null},incomingSize(){return this.incomingFile?this.size(this.incomingFile):(0,_.t)("Unknown size")},existingPreview(){return this.previewUrl(this.existing)},existingLastModified(){return this.lastModified(this.existing)}},watch:{incoming:{immediate:!0,async handler(){this.incoming instanceof File?this.incomingFile=this.incoming:this.incoming instanceof FileSystemFileEntry?this.incomingFile=await new Promise(((e,t)=>this.incoming.file(e,t))):this.incomingFile=null}}},methods:{lastModified:e=>(e instanceof File?new Date(e.lastModified):e.mtime)??null,size:e=>e.size?(0,v.v7)(e.size,!0):(0,_.t)("Unknown size"),previewUrl(e){if(e instanceof File)return this.previewImage(e).then((e=>{this.asyncPreview=e})),null;if(e.type===v.pt.Folder)return null;try{const t=e.attributes.previewUrl||(0,y.Jv)("/core/preview?fileId={fileid}",{fileid:e.fileid}),i=new URL(window.location.origin+t);i.searchParams.set("x",64..toString()),i.searchParams.set("y",64..toString()),i.searchParams.set("mimeFallback","true");const n=e.attributes?.etag||"";return i.searchParams.set("v",n.slice(0,6)),i.href}catch(e){return null}},isFolder:e=>(0,_.i)(e)?e.isDirectory:e.type===v.pt.Folder||"httpd/unix-directory"===e.type,isChecked:(e,t)=>t.includes(e),onUpdateIncomingChecked(e){e?this.$emit("update:newSelected",[this.incoming,...this.newSelected]):this.$emit("update:newSelected",this.newSelected.filter((e=>e!==this.incoming)))},onUpdateExistingChecked(e){e?this.$emit("update:oldSelected",[this.existing,...this.oldSelected]):this.$emit("update:oldSelected",this.oldSelected.filter((e=>e!==this.existing)))},previewImage:async e=>new Promise((t=>{if(e instanceof File&&e.type.startsWith("image/")){const i=new FileReader;i.onload=async i=>{const n=i?.target?.result;if(n instanceof ArrayBuffer){const i=new Blob([n],{type:e.type}),a=URL.createObjectURL(i);t(a)}else t(null)},i.readAsArrayBuffer(e)}else t(null)})),t:_.t}});var V=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("fieldset",{staticClass:"node-picker__wrapper",attrs:{"data-cy-conflict-picker-fieldset":e.existing.basename}},[t("legend",[e._v(e._s(e.existing.basename))]),t("NcCheckboxRadioSwitch",{attrs:{checked:e.isChecked(e.incoming,e.newSelected),required:!e.isEnoughSelected,"data-cy-conflict-picker-input-incoming":e.existing.basename},on:{"update:checked":e.onUpdateIncomingChecked}},[t("span",{staticClass:"node-picker node-picker--incoming"},[e.incomingPreview?t("img",{staticClass:"node-picker__preview",attrs:{src:e.incomingPreview,alt:e.t("Preview image"),loading:"lazy"}}):[e.isFolder(e.incoming)?t("FolderSvg",{staticClass:"node-picker__icon",attrs:{size:48}}):t("FileSvg",{staticClass:"node-picker__icon",attrs:{size:48}})],t("span",{staticClass:"node-picker__desc"},[t("span",{staticClass:"node-picker__name"},[e._v(e._s(e.t("New version")))]),e.incomingLastModified?t("NcDateTime",{staticClass:"node-picker__mtime",attrs:{timestamp:e.incomingLastModified,"relative-time":!1,format:{timeStyle:"short",dateStyle:"medium"}}}):t("span",{staticClass:"node-picker__mtime"},[e._v(" "+e._s(e.t("Last modified date unknown"))+" ")]),t("span",{staticClass:"node-picker__size"},[e._v(e._s(e.incomingSize))])],1)],2)]),t("NcCheckboxRadioSwitch",{attrs:{checked:e.isChecked(e.existing,e.oldSelected),required:!e.isEnoughSelected,"data-cy-conflict-picker-input-existing":e.existing.basename},on:{"update:checked":e.onUpdateExistingChecked}},[t("span",{staticClass:"node-picker node-picker--existing"},[e.existingPreview?t("img",{staticClass:"node-picker__preview",attrs:{src:e.existingPreview,alt:e.t("Preview image"),loading:"lazy"}}):[e.isFolder(e.existing)?t("FolderSvg",{staticClass:"node-picker__icon",attrs:{size:48}}):t("FileSvg",{staticClass:"node-picker__icon",attrs:{size:48}})],t("span",{staticClass:"node-picker__desc"},[t("span",{staticClass:"node-picker__name"},[e._v(e._s(e.t("Existing version")))]),e.existingLastModified?t("NcDateTime",{staticClass:"node-picker__mtime",attrs:{timestamp:e.existingLastModified,"relative-time":!1,format:{timeStyle:"short",dateStyle:"medium"}}}):t("span",{staticClass:"node-picker__mtime"},[e._v(" "+e._s(e.t("Last modified date unknown"))+" ")]),t("span",{staticClass:"node-picker__size"},[e._v(e._s(e.size(e.existing)))])],1)],2)])],1)},q=[];const H=(0,_.n)(U,V,q,!1,null,"7f5c3c1e",null,null).exports,j=(0,g.pM)({name:"ConflictPicker",components:{ArrowRight:N,Close:I,NcButton:w.A,NcCheckboxRadioSwitch:k.A,NcDialog:b.A,NodesPicker:H},props:{dirname:{type:String,default:""},content:{type:Array,required:!0},conflicts:{type:Array,required:!0},recursiveUpload:{type:Boolean,default:!1}},emits:["cancel","submit"],setup:()=>({blockedTitle:(0,_.t)("You need to select at least one version of each file to continue.")}),data:()=>({files:[],opened:!0,newSelected:[],oldSelected:[]}),computed:{name(){return""!==this?.dirname?.trim?.()?(0,_.a)("{count} file conflict in {dirname}","{count} file conflicts in {dirname}",this.conflicts.length,{count:this.conflicts.length,dirname:this.dirname}):(0,_.a)("{count} file conflict","{count} files conflict",this.conflicts.length,{count:this.conflicts.length})},skipButtonLabel(){return(0,_.a)("Skip this file","Skip {count} files",this.conflicts.length,{count:this.conflicts.length})},selectAllNewBind(){const e=this.isNoneNewSelected||this.isSomeNewSelected?this.t("Select all"):this.t("Unselect all");return{"aria-label":e,checked:this.isAllNewSelected,indeterminate:this.isSomeNewSelected,title:e}},isAllNewSelected(){return this.newSelected.length===this.conflicts.length},isNoneNewSelected(){return 0===this.newSelected.length},isSomeNewSelected(){return!this.isAllNewSelected&&!this.isNoneNewSelected},selectAllOldBind(){const e=this.isNoneOldSelected||this.isSomeOldSelected?this.t("Select all"):this.t("Unselect all");return{"aria-label":e,checked:this.isAllOldSelected,indeterminate:this.isSomeOldSelected,title:e}},isAllOldSelected(){return this.oldSelected.length===this.files.length},isNoneOldSelected(){return 0===this.oldSelected.length},isSomeOldSelected(){return!this.isAllOldSelected&&!this.isNoneOldSelected},isEnoughSelected(){return!(!this.isAllOldSelected&&!this.isAllNewSelected)||this.$refs?.nodesPicker?.every?.((e=>e.isEnoughSelected))}},mounted(){if(this.files=this.conflicts.map((e=>{const t=e instanceof File||(0,_.i)(e)?e.name:e.basename;return this.content.find((e=>e.basename===t))})).filter(Boolean),0===this.conflicts.length||0===this.files.length){const e=new Error("ConflictPicker: files and conflicts must not be empty");throw this.onCancel(e),e}if(this.conflicts.length!==this.files.length){const e=new Error("ConflictPicker: files and conflicts must have the same length. Make sure you filter out non conflicting files from the conflicts array.");throw this.onCancel(e),e}_.l.debug("ConflictPicker initialised",{files:this.files,conflicts:this.conflicts,content:this.content})},methods:{onCancel(e){this.opened=!1,this.$emit("cancel",e)},onSkip(){_.l.debug("Conflict skipped. Ignoring all conflicting files"),this.opened=!1,this.$emit("submit",{selected:[],renamed:[]})},onSubmit(){if(!this.isEnoughSelected)return this.scrollValidityInputIntoView(),this.$refs.form.reportValidity(),void(0,C.Qg)(this.blockedTitle);const e=this.oldSelected.map((e=>e.basename)),t=this.content.map((e=>e.basename)),i=[],n=this.newSelected.filter((t=>{const i=t instanceof File||(0,_.i)(t)?t.name:t.basename;return e.includes(i)}));n.length>0&&n.forEach((e=>{const n=e instanceof File||(0,_.i)(e)?e.name:e.basename,a=(0,v.E6)(n,t);if(e instanceof File||(0,_.i)(e))return Object.defineProperty(e,"name",{value:a}),void i.push(e);e.rename(a),i.push(e)}));const a=this.newSelected.filter((t=>{const i=t instanceof File||(0,_.i)(t)?t.name:t.basename;return!e.includes(i)&&!n.includes(t)}));_.l.debug("Conflict resolved",{selected:a,renamed:i}),this.opened=!1,this.$emit("submit",{selected:a,renamed:i})},scrollValidityInputIntoView(){const e='.checkbox-radio-switch input[type="checkbox"]';Array.from(this.$el.querySelectorAll(e)).forEach((e=>e?.setCustomValidity?.("")));const t=this.$el.querySelector(e+":invalid");t&&(t.setCustomValidity(this.blockedTitle),t.scrollIntoView({behavior:"instant",block:"center"}))},onSelectAllNew(e){e?(_.l.debug("Selected all new files"),this.newSelected=this.conflicts):(_.l.debug("Cleared new selection"),this.newSelected=[])},onSelectAllOld(e){e?(_.l.debug("Selected all existing files"),this.oldSelected=this.files):(_.l.debug("Cleared old selection"),this.oldSelected=[])},t:_.t}});var X=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("NcDialog",{staticClass:"conflict-picker",attrs:{"can-close":"","data-cy-conflict-picker":"","close-on-click-outside":!1,show:e.opened,name:e.name,size:"large"},on:{closing:e.onCancel},scopedSlots:e._u([{key:"actions",fn:function(){return[t("NcButton",{attrs:{"aria-label":e.t("Cancel"),title:e.t("Cancel the entire operation"),"data-cy-conflict-picker-cancel":"",type:"tertiary"},on:{click:e.onCancel},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Close",{attrs:{size:20}})]},proxy:!0}])},[e._v(" "+e._s(e.t("Cancel"))+" ")]),t("span",{staticClass:"dialog__actions-separator"}),t("NcButton",{attrs:{"aria-label":e.skipButtonLabel,"data-cy-conflict-picker-skip":""},on:{click:e.onSkip},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Close",{attrs:{size:20}})]},proxy:!0}])},[e._v(" "+e._s(e.skipButtonLabel)+" ")]),t("NcButton",{class:{"button-vue--disabled":!e.isEnoughSelected},attrs:{"aria-label":e.t("Continue"),title:e.isEnoughSelected?"":e.blockedTitle,"data-cy-conflict-picker-submit":"","native-type":"submit",type:"primary"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ArrowRight",{attrs:{size:20}})]},proxy:!0}])},[e._v(" "+e._s(e.t("Continue"))+" ")])]},proxy:!0}])},[t("div",{staticClass:"conflict-picker__header"},[t("p",{staticClass:"conflict-picker__description",attrs:{id:"conflict-picker-description"}},[e._v(" "+e._s(e.t("Which files do you want to keep?"))),t("br"),e._v(" "+e._s(e.t("If you select both versions, the incoming file will have a number added to its name."))),t("br"),e.recursiveUpload?[e._v(" "+e._s(e.t("When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed."))+" ")]:[e._v(" "+e._s(e.t("When an incoming folder is selected, any conflicting files within it will also be overwritten."))+" ")]],2)]),t("form",{ref:"form",staticClass:"conflict-picker__form",attrs:{"aria-labelledby":"conflict-picker-description","data-cy-conflict-picker-form":""},on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.onSubmit.apply(null,arguments)}}},[t("fieldset",{staticClass:"conflict-picker__all",attrs:{"data-cy-conflict-picker-fieldset":"all"}},[t("legend",{staticClass:"hidden-visually"},[e._v(" "+e._s(e.t("Select all checkboxes"))+" ")]),t("NcCheckboxRadioSwitch",e._b({attrs:{"data-cy-conflict-picker-input-incoming":"all"},on:{"update:checked":e.onSelectAllNew}},"NcCheckboxRadioSwitch",e.selectAllNewBind,!1),[e._v(" "+e._s(e.t("Select all new files"))+" ")]),t("NcCheckboxRadioSwitch",e._b({attrs:{"data-cy-conflict-picker-input-existing":"all"},on:{"update:checked":e.onSelectAllOld}},"NcCheckboxRadioSwitch",e.selectAllOldBind,!1),[e._v(" "+e._s(e.t("Select all existing files"))+" ")])],1),e._l(e.files,(function(i,n){return t("NodesPicker",{key:i.fileid,ref:"nodesPicker",refInFor:!0,attrs:{incoming:e.conflicts[n],existing:e.files[n],"new-selected":e.newSelected,"old-selected":e.oldSelected},on:{"update:newSelected":function(t){e.newSelected=t},"update:new-selected":function(t){e.newSelected=t},"update:oldSelected":function(t){e.oldSelected=t},"update:old-selected":function(t){e.oldSelected=t}}})}))],2)])},G=[];const Z=(0,_.n)(j,X,G,!1,null,"3d711b53",null,null).exports}}]);
//# sourceMappingURL=779-779.js.map?v=17c5546ee7040254a1de