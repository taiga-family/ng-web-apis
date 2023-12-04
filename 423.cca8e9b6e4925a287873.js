"use strict";(self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[]).push([[423],{65423:(A,C,e)=>{e.r(C),e.d(C,{WorkersPageModule:()=>D});var t=e(74788),x=e(87241),f=e(9018),M=e(21860),h=e(14581),g=e(9359),v=e(98168),O=e(13528),P=e(65598);class d extends x.y{constructor(s,n){let a,m;try{a=new Worker(s,n)}catch(l){m=l}super(l=>{let E=f.E;m?l.error(m):this.destroy$.isStopped?l.complete():a&&(E=(0,M.T)((0,h.R)(a,"message").pipe((0,v.b)(w=>l.next(w))),(0,h.R)(a,"error").pipe((0,v.b)(w=>l.error(w)))).pipe((0,O.R)(this.destroy$))),E.subscribe().add(l)}),this.worker=a,this.url=s,this.destroy$=new g.x}static fromFunction(s,n){return new d(d.createFnUrl(s),n)}static execute(s,n){const a=d.fromFunction(s),m=a.pipe((0,P.q)(1)).toPromise();return a.postMessage(n),m.then(l=>(a.terminate(),l))}static createFnUrl(s){const a=new Blob([`(\nfunction(fn){\n    function isFunction(type){\n        return type === 'function';\n    }\n\n    self.addEventListener('message', function(e) {\n        var result = fn.call(null, e.data);\n        if (result && [typeof result.then, typeof result.catch].every(isFunction)){\n            result\n                .then(postMessage)\n                .catch(function(error) {\n                    setTimeout(function(){throw error}, 0)\n                })\n        } else {\n            postMessage(result);\n        }\n    })\n}\n)(${s});`],{type:"text/javascript"});return URL.createObjectURL(a)}terminate(){this.destroy$.isStopped||(this.worker&&this.worker.terminate(),URL.revokeObjectURL(this.url),this.destroy$.next(),this.destroy$.complete())}postMessage(s){this.worker&&this.worker.postMessage(s)}}var _=e(27969),p=e(12057),i=e(18946);let u=(()=>{class o{constructor(){this.date$=(0,i.H)(0,1e3).pipe((0,_.U)(()=>Date.now()))}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-clock"]],decls:3,vars:6,template:function(n,a){1&n&&(t._uU(0),t.ALo(1,"date"),t.ALo(2,"async")),2&n&&t.hij(" ",t.xi3(1,1,t.lcZ(2,4,a.date$),"mediumTime")," ")},pipes:[p.uU,p.Ov],encapsulation:2,changeDetection:0}),o})();var r=e(12628),c=e(60885);function y(o,s){if(1&o){const n=t.EpF();t.ynx(0),t._UZ(1,"app-clock"),t.TgZ(2,"div",1),t.TgZ(3,"button",2),t.NdJ("click",function(){return t.CHM(n),t.oxw().workerThread.postMessage()}),t._uU(4," Run in worker process "),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.ALo(7,"async"),t.qZA(),t.TgZ(8,"tui-notification"),t._uU(9,"This would be calculated in several seconds in a background thread"),t.qZA(),t.qZA(),t.TgZ(10,"div",1),t.TgZ(11,"button",2),t.NdJ("click",function(){return t.CHM(n),t.oxw().emitter.next()}),t._uU(12," Run in main process "),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.ALo(15,"async"),t.qZA(),t.TgZ(16,"tui-notification"),t._uU(17,"This would freeze your main thread for several seconds"),t.qZA(),t.qZA(),t.BQk()}if(2&o){const n=t.oxw();t.xp6(6),t.hij("Execution time: ",t.lcZ(7,2,n.workerData$),""),t.xp6(8),t.hij("Execution time: ",t.lcZ(15,4,n.result$),"")}}function b(){const o=performance.now();return Array.from({length:16e3}).forEach((s,n)=>Array.from({length:n}).reduce(a=>a+1,0)),performance.now()-o}let U=(()=>{class o{constructor(n){this.platformId=n,this.isBrowser=(0,p.NF)(this.platformId),this.workerThread=d.fromFunction(b),this.workerData$=this.workerThread.pipe((0,_.U)(({data:o})=>o)),this.emitter=new g.x,this.result$=this.emitter.pipe((0,_.U)(b))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(t.Lbi))},o.\u0275cmp=t.Xpm({type:o,selectors:[["workers-page"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"example"],["appearance","secondary","tuiButton","",3,"click"]],template:function(n,a){1&n&&t.YNc(0,y,18,6,"ng-container",0),2&n&&t.Q6J("ngIf",a.isBrowser)},directives:[p.O5,u,r.v0,c.L],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}.example[_ngcontent-%COMP%]{min-width:360px;border-top:1px solid gainsboro;margin-top:16px;padding-top:16px}"],changeDetection:0}),o})();var N=e(59367);let Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({}),o})(),D=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,Z,r.fN,c.H,N.Bz.forChild([{path:"",component:U}])]]}),o})()},60885:(A,C,e)=>{e.d(C,{H:()=>p,L:()=>k});var t=e(74788),x=e(2325),f=e(4022),M=e(54789),h=e(12628),g=e(12057),v=e(89570);function O(i,u){1&i&&t._UZ(0,"tui-svg",4),2&i&&t.Q6J("src",u.polymorpheusOutlet)}const P=function(i){return{$implicit:i}};function T(i,u){if(1&i&&(t.ynx(0),t.YNc(1,O,1,1,"tui-svg",3),t.BQk()),2&i){const r=t.oxw();t.xp6(1),t.Q6J("polymorpheusOutlet",r.icon)("polymorpheusOutletContext",t.VKq(2,P,r.status))}}function d(i,u){if(1&i){const r=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){return t.CHM(r),t.oxw().close.emit()}),t.ALo(1,"async"),t.qZA()}if(2&i){const r=t.oxw();t.Q6J("icon",r.icons.close)("title",t.lcZ(1,2,r.closeWord$))}}const _=["*"];let k=(()=>{class i{constructor(r,c,y){this.closeWord$=r,this.icons=c,this.options=y,this.hasIcon=this.options.hasIcon,this.icon=this.options.icon,this.status=this.options.status,this.size=this.options.size,this.hideClose=!1,this.close=new t.vpe}get hasClose(){return!this.hideClose&&(0,x.fw)(this.close)}}return i.\u0275fac=function(r){return new(r||i)(t.Y36(f.U0),t.Y36(f.Gs),t.Y36(f.Ln))},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-notification"]],hostVars:2,hostBindings:function(r,c){2&r&&t.uIk("data-status",c.status)("data-size",c.size)},inputs:{hasIcon:"hasIcon",icon:"icon",status:"status",size:"size",hideClose:"hideClose"},outputs:{close:"close"},ngContentSelectors:_,decls:4,vars:2,consts:[[4,"ngIf"],[1,"t-content"],["appearance","icon","automation-id","tui-notification__close","size","xs","tuiIconButton","","type","button","class","t-close",3,"icon","title","click",4,"ngIf"],["automation-id","tui-notification__icon","class","t-icon",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-notification__icon",1,"t-icon",3,"src"],["appearance","icon","automation-id","tui-notification__close","size","xs","tuiIconButton","","type","button",1,"t-close",3,"icon","title","click"]],template:function(r,c){1&r&&(t.F$t(),t.YNc(0,T,2,4,"ng-container",0),t.TgZ(1,"div",1),t.Hsn(2),t.qZA(),t.YNc(3,d,2,4,"button",2)),2&r&&(t.Q6J("ngIf",c.icon&&c.hasIcon),t.xp6(3),t.Q6J("ngIf",c.hasClose))},directives:[g.O5,v.Li,M.PN,h.v0],pipes:[g.Ov],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:flex;padding:.75rem 1rem;border-radius:var(--tui-radius-m);background:#fff;background:var(--tui-base-01);box-sizing:border-box;overflow:hidden}[data-size=s][_nghost-%COMP%]{padding:.375rem .625rem}[data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1rem;height:1.25rem;margin:0 .375rem 0 -.125rem}[data-size=s][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem .75rem}[data-size=m][_nghost-%COMP%]{padding:.75rem}[data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;margin-right:.5rem}[data-size=m][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.125rem -.125rem 1rem}[data-size=l][_nghost-%COMP%]{padding:1rem;font:var(--tui-font-text-m);border-radius:var(--tui-radius-l)}[data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;margin-right:.5rem}[data-status=info][_nghost-%COMP%]{color:var(--tui-info-fill);background:linear-gradient(var(--tui-info-bg),var(--tui-info-bg)),var(--tui-base-01)}[data-status=success][_nghost-%COMP%]{color:var(--tui-success-fill);background:linear-gradient(var(--tui-success-bg),var(--tui-success-bg)),var(--tui-base-01)}[data-status=error][_nghost-%COMP%]{color:var(--tui-error-fill);background:linear-gradient(var(--tui-error-bg),var(--tui-error-bg)),var(--tui-base-01)}[data-status=warning][_nghost-%COMP%]{color:var(--tui-warning-fill);background:linear-gradient(var(--tui-warning-bg),var(--tui-warning-bg)),var(--tui-base-01)}[data-status=neutral][_nghost-%COMP%]{color:var(--tui-neutral-fill);background:linear-gradient(var(--tui-neutral-bg),var(--tui-neutral-bg)),var(--tui-base-01)}.t-content[_ngcontent-%COMP%]{flex:1;word-wrap:break-word;overflow-wrap:anywhere;color:var(--tui-text-01)}"],changeDetection:0}),i})(),p=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[g.ez,M.EI,h.fN,v.wq]]}),i})()}}]);