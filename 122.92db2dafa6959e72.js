"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[122],{4122:(p,g,r)=>{r.r(g),r.d(g,{default:()=>b});var s=r(1423),t=r(6610),e=r(2978),l=r(8832),R=r(1344);function O(a,d){if(1&a){const o=e.RV6();e.j41(0,"section",2)(1,"h1",3),e.bIt("waResizeObserver",function(i){e.eBV(o);const n=e.XpG();return e.Njj(n.onResize(i))}),e.EFF(2," Resizable box "),e.k0s(),e.j41(3,"label",4),e.EFF(4," Adjust width: "),e.j41(5,"input",5),e.bIt("ngModelChange",function(i){e.eBV(o);const n=e.XpG();return e.Njj(n.widthPercent=i)}),e.k0s()()()}if(2&a){const o=e.XpG();e.R7$(1),e.xc7("width",o.widthPercent,"%"),e.BMQ("data-ratio",o.ratio),e.R7$(4),e.Y8G("ngModel",o.widthPercent)}}function E(a,d){1&a&&e.EFF(0,"Your browser does not support Resize Observer API")}const b=(()=>{var a;class d{constructor(){(0,s.A)(this,"support",(0,e.WQX)(R.Kq)),(0,s.A)(this,"ratio",0),(0,s.A)(this,"widthPercent",50)}onResize(c){var i;this.ratio=Math.round(((null==(i=c[0])?void 0:i.contentRect.width)??0)/110)}}return a=d,(0,s.A)(d,"\u0275fac",function(c){return new(c||a)}),(0,s.A)(d,"\u0275cmp",e.VBU({type:a,selectors:[["resize-observer-page"]],standalone:!0,features:[e.aNF],decls:3,vars:2,consts:[["class","wrapper",4,"ngIf","ngIfElse"],["not",""],[1,"wrapper"],["waResizeBox","content-box",1,"element",3,"waResizeObserver"],[1,"width-slider"],["max","100","min","5","type","range","value","50",1,"slider",3,"ngModel","ngModelChange"]],template:function(c,i){if(1&c&&(e.DNE(0,O,6,4,"section",0),e.DNE(1,E,1,0,"ng-template",null,1,e.C5r)),2&c){const n=e.sdS(2);e.Y8G("ngIf",i.support)("ngIfElse",n)}},dependencies:[t.MD,t.bT,l.YN,l.me,l.MR,l.BC,l.vS,R.DQ],styles:['[_nghost-%COMP%]{perspective:150vw;-webkit-user-select:none;user-select:none;flex-direction:column;align-items:center}.width-slider[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.slider[_ngcontent-%COMP%]{margin:.625rem}.wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;inline-size:100%;overflow:hidden}.element[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center;padding:.625rem;inline-size:80%;min-inline-size:7.75rem;block-size:12.5rem;transition:background .1s}.element[data-ratio="1"][_ngcontent-%COMP%]{background:#e885eb}.element[data-ratio="2"][_ngcontent-%COMP%]{background:#c685eb}.element[data-ratio="3"][_ngcontent-%COMP%]{background:#ac85eb}.element[data-ratio="4"][_ngcontent-%COMP%]{background:#9885eb}.element[data-ratio="5"][_ngcontent-%COMP%]{background:#8591eb}.element[data-ratio="6"][_ngcontent-%COMP%]{background:#85a0eb}.element[data-ratio="7"][_ngcontent-%COMP%]{background:#84aeeb}.element[data-ratio="8"][_ngcontent-%COMP%]{background:#83beeb}.element[data-ratio="9"][_ngcontent-%COMP%]{background:#86d2eb}.element[data-ratio="10"][_ngcontent-%COMP%]{background:#87ddeb}.element[data-ratio="11"][_ngcontent-%COMP%]{background:#8ae5eb}.element[data-ratio="12"][_ngcontent-%COMP%]{background:#8bebdf}.element[data-ratio="13"][_ngcontent-%COMP%]{background:#83ebc8}.element[data-ratio="14"][_ngcontent-%COMP%]{background:#6beb99}.element[data-ratio="15"][_ngcontent-%COMP%]{background:#4ceb60}'],changeDetection:0})),d})()},1344:(p,g,r)=>{r.d(g,{Kq:()=>i,ke:()=>b,DQ:()=>a});var s=r(1423),t=r(2978),e=r(9406);const l=typeof ResizeObserver<"u"?ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},O="content-box",v=new t.nKC("[WA_RESIZE_OPTION_BOX]",{providedIn:"root",factory:()=>O});let b=(()=>{var n;class _ extends e.c{constructor(){const u=(0,t.WQX)(t.aKT).nativeElement,z=(0,t.WQX)(v);super(f=>{const m=new l(M=>f.next(M));return m.observe(u,{box:z}),()=>{m.disconnect()}})}}return n=_,(0,s.A)(_,"\u0275fac",function(u){return new(u||n)}),(0,s.A)(_,"\u0275prov",t.jDH({token:n,factory:n.\u0275fac})),_})(),a=(()=>{var n;class _{constructor(){(0,s.A)(this,"waResizeObserver",(0,t.WQX)(b)),(0,s.A)(this,"box",O)}}return n=_,(0,s.A)(_,"\u0275fac",function(u){return new(u||n)}),(0,s.A)(_,"\u0275dir",t.FsC({type:n,selectors:[["","waResizeObserver",""]],inputs:{waResizeBox:["box","waResizeBox"]},outputs:{waResizeObserver:"waResizeObserver"},standalone:!0,features:[t.Jv_([b,{provide:v,useFactory:()=>(0,t.WQX)(t.aKT).nativeElement.getAttribute("waResizeBox")||O}])]})),_})();var o=r(7675);const i=new t.nKC("[WA_RESIZE_OBSERVER_SUPPORT]",{providedIn:"root",factory:()=>!!(0,t.WQX)(o.Qc).ResizeObserver})}}]);