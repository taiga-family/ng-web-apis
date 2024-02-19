"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[512],{8512:(S,h,t)=>{t.r(h),t.d(h,{default:()=>F});var r=t(1423),c=t(6556),e=t(9508),m=t(6125),g=t(4722),p=t(685),l=t(3809),d=t(6779),f=t(905);let v=(()=>{var a;class i extends g.c{constructor(){super(n=>this.stream$.subscribe(n)),(0,r.A)(this,"win",(0,e.WQX)(m.jf)),(0,r.A)(this,"stream$",(this.isModern?(0,p.R)(this.win.screen.orientation,"change").pipe((0,l.Z)(null),(0,d.T)(()=>this.win.screen.orientation.type)):(0,p.R)(this.win,"orientationchange").pipe((0,l.Z)(null),(0,d.T)(()=>{switch(parseInt(this.win.orientation,10)){case 0:return"portrait-primary";case 180:return"portrait-secondary";case 90:return"landscape-primary";case-90:return"landscape-secondary"}}))).pipe((0,f.t)({bufferSize:1,refCount:!0})))}get isModern(){var n,s;return!(null==(s=null==(n=this.win)?void 0:n.screen)||!s.orientation)}}return a=i,(0,r.A)(i,"\u0275fac",function(n){return new(n||a)}),(0,r.A)(i,"\u0275prov",e.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})),i})();var u=t(8807);let F=(()=>{var a;class i{constructor(){(0,r.A)(this,"orientation$",(0,e.WQX)(v)),(0,r.A)(this,"sample","import {ScreenOrientationService} from '@ng-web-apis/screen-orientation';\n\n// ...\nexport class MyComponent {\n  constructor(readonly orientation$: ScreenOrientationService) {}\n}"),(0,r.A)(this,"sampleHtml","<p>{{ orientation$ | async }}</p>")}}return a=i,(0,r.A)(i,"\u0275fac",function(n){return new(n||a)}),(0,r.A)(i,"\u0275cmp",e.VBU({type:a,selectors:[["screen-orientation-page"]],standalone:!0,features:[e.aNF],decls:31,vars:5,consts:[[3,"highlight"]],template:function(n,s){1&n&&(e.j41(0,"p")(1,"b"),e.EFF(2,"Current type:\xa0"),e.k0s(),e.j41(3,"code"),e.EFF(4),e.nI1(5,"async"),e.k0s()(),e.nrm(6,"hr")(7,"br"),e.j41(8,"h2"),e.EFF(9,"How to use"),e.k0s(),e.j41(10,"pre"),e.nrm(11,"code",0),e.k0s(),e.j41(12,"pre"),e.nrm(13,"code",0),e.k0s(),e.nrm(14,"hr"),e.j41(15,"p")(16,"b"),e.EFF(17,"Landscape-primary"),e.k0s(),e.EFF(18," is an orientation where the screen width is greater than the screen height. If the device's natural orientation is landscape, then it is in landscape-primary when held in that position. If the device's natural orientation is portrait, the user agent sets landscape-primary from the two options as shown in the screen orientation values table.\n"),e.k0s(),e.j41(19,"p")(20,"b"),e.EFF(21,"Landscape-secondary"),e.k0s(),e.EFF(22," is an orientation where the screen width is greater than the screen height. If the device's natural orientation is landscape, it is in landscape-secondary when rotated 180\xba from its natural orientation. If the device's natural orientation is portrait, the user agent sets landscape-secondary from the two options as shown in the screen orientation values table.\n"),e.k0s(),e.j41(23,"p")(24,"b"),e.EFF(25,"Portrait-primary"),e.k0s(),e.EFF(26," is an orientation where the screen width is less than or equal to the screen height. If the device's natural orientation is portrait, then it is in portrait-primary when held in that position. If the device's natural orientation is landscape, the user agent sets portrait-primary from the two options as shown in the screen orientation values table.\n"),e.k0s(),e.j41(27,"p")(28,"b"),e.EFF(29,"Portrait-secondary"),e.k0s(),e.EFF(30," is an orientation where the screen width is less than or equal to the screen height. If the device's natural orientation is portrait, then it is in portrait-secondary when rotated 180\xba from its natural position. If the device's natural orientation is landscape, the user agent sets portrait-secondary from the two options as shown in the screen orientation values table.\n"),e.k0s()),2&n&&(e.R7$(4),e.JRh(e.bMT(5,3,s.orientation$)),e.R7$(7),e.Y8G("highlight",s.sample),e.R7$(2),e.Y8G("highlight",s.sampleHtml))},dependencies:[c.MD,c.Jj,u.fw,u.f4],styles:["[_nghost-%COMP%]{display:block;max-width:700px;margin:0 auto;line-height:1.5;font-size:1.1em}button[_ngcontent-%COMP%]{margin:0 auto;display:block}iframe[_ngcontent-%COMP%]{width:100%;height:20rem}"],changeDetection:0})),i})()}}]);