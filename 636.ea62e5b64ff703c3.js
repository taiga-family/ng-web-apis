"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[636],{256:(O,c,n)=>{n.r(c),n.d(c,{default:()=>C});var i=n(8974),h=n(6568),e=n(6528),m=n(5532),g=n(3324),l=n(4312),p=n(7400),d=n(4184),v=n(4008);let f=(()=>{var a;class r extends g._{constructor(){super(t=>this.stream$.subscribe(t)),(0,i.c)(this,"win",(0,e.uUt)(m.sn)),(0,i.c)(this,"stream$",(this.isModern?(0,l.w)(this.win.screen.orientation,"change").pipe((0,p.W)(null),(0,d.k)(()=>this.win.screen.orientation.type)):(0,l.w)(this.win,"orientationchange").pipe((0,p.W)(null),(0,d.k)(()=>{switch(parseInt(this.win.orientation,10)){case 0:return"portrait-primary";case 180:return"portrait-secondary";case 90:return"landscape-primary";case-90:return"landscape-secondary"}}))).pipe((0,v.C)({bufferSize:1,refCount:!0})))}get isModern(){var t,o;return!(null===(t=this.win)||void 0===t||null===(o=t.screen)||void 0===o||!o.orientation)}}return a=r,(0,i.c)(r,"\u0275fac",function(t){return new(t||a)}),(0,i.c)(r,"\u0275prov",e.wxM({token:a,factory:a.\u0275fac,providedIn:"root"})),r})();var u=n(4212);let C=(()=>{var a;class r{constructor(){(0,i.c)(this,"orientation$",(0,e.uUt)(f)),(0,i.c)(this,"sample","import {ScreenOrientationService} from '@ng-web-apis/screen-orientation';\n\n// ...\nexport class MyComponent {\n  constructor(readonly orientation$: ScreenOrientationService) {}\n}"),(0,i.c)(this,"sampleHtml","<p>{{ orientation$ | async }}</p>")}}return a=r,(0,i.c)(r,"\u0275fac",function(t){return new(t||a)}),(0,i.c)(r,"\u0275cmp",e.In1({type:a,selectors:[["screen-orientation-page"]],standalone:!0,features:[e.UHJ],decls:31,vars:5,consts:[[3,"highlight"]],template:function(t,o){1&t&&(e.I0R(0,"p")(1,"b"),e.OEk(2,"Current type:\xa0"),e.C$Y(),e.I0R(3,"code"),e.OEk(4),e.wVc(5,"async"),e.C$Y()(),e.wR5(6,"hr")(7,"br"),e.I0R(8,"h2"),e.OEk(9,"How to use"),e.C$Y(),e.I0R(10,"pre"),e.wR5(11,"code",0),e.C$Y(),e.I0R(12,"pre"),e.wR5(13,"code",0),e.C$Y(),e.wR5(14,"hr"),e.I0R(15,"p")(16,"b"),e.OEk(17,"Landscape-primary"),e.C$Y(),e.OEk(18," is an orientation where the screen width is greater than the screen height. If the device's natural orientation is landscape, then it is in landscape-primary when held in that position. If the device's natural orientation is portrait, the user agent sets landscape-primary from the two options as shown in the screen orientation values table.\n"),e.C$Y(),e.I0R(19,"p")(20,"b"),e.OEk(21,"Landscape-secondary"),e.C$Y(),e.OEk(22," is an orientation where the screen width is greater than the screen height. If the device's natural orientation is landscape, it is in landscape-secondary when rotated 180\xba from its natural orientation. If the device's natural orientation is portrait, the user agent sets landscape-secondary from the two options as shown in the screen orientation values table.\n"),e.C$Y(),e.I0R(23,"p")(24,"b"),e.OEk(25,"Portrait-primary"),e.C$Y(),e.OEk(26," is an orientation where the screen width is less than or equal to the screen height. If the device's natural orientation is portrait, then it is in portrait-primary when held in that position. If the device's natural orientation is landscape, the user agent sets portrait-primary from the two options as shown in the screen orientation values table.\n"),e.C$Y(),e.I0R(27,"p")(28,"b"),e.OEk(29,"Portrait-secondary"),e.C$Y(),e.OEk(30," is an orientation where the screen width is less than or equal to the screen height. If the device's natural orientation is portrait, then it is in portrait-secondary when rotated 180\xba from its natural position. If the device's natural orientation is landscape, the user agent sets portrait-secondary from the two options as shown in the screen orientation values table.\n"),e.C$Y()),2&t&&(e.yG2(4),e.cNF(e.kDX(5,3,o.orientation$)),e.yG2(7),e.E7m("highlight",o.sample),e.yG2(2),e.E7m("highlight",o.sampleHtml))},dependencies:[h.MD,h.a,u.M9,u.gl],styles:["[_nghost-%COMP%]{display:block;max-width:700px;margin:0 auto;line-height:1.5;font-size:1.1em}button[_ngcontent-%COMP%]{margin:0 auto;display:block}iframe[_ngcontent-%COMP%]{width:100%;height:20rem}"],changeDetection:0})),r})()}}]);