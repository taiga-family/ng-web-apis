"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[755],{3755:(S,h,t)=>{t.r(h),t.d(h,{default:()=>w});var i=t(6889),c=t(6733),e=t(755),g=t(4133),m=t(8132),l=t(409),p=t(3843),u=t(2425),f=t(530);let v=(()=>{var a;class r extends m.y{constructor(){super(n=>this.stream$.subscribe(n)),(0,i.Z)(this,"win",(0,e.f3M)(g.m9)),(0,i.Z)(this,"stream$",(this.isModern?(0,l.R)(this.win.screen.orientation,"change").pipe((0,p.O)(null),(0,u.U)(()=>this.win.screen.orientation.type)):(0,l.R)(this.win,"orientationchange").pipe((0,p.O)(null),(0,u.U)(()=>{switch(parseInt(this.win.orientation,10)){case 0:return"portrait-primary";case 180:return"portrait-secondary";case 90:return"landscape-primary";case-90:return"landscape-secondary"}}))).pipe((0,f.d)({bufferSize:1,refCount:!0})))}get isModern(){var n,o;return!(null==(o=null==(n=this.win)?void 0:n.screen)||!o.orientation)}}return a=r,(0,i.Z)(r,"\u0275fac",function(n){return new(n||a)}),(0,i.Z)(r,"\u0275prov",e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})),r})();var d=t(8669);const w=(()=>{var a;class r{constructor(){(0,i.Z)(this,"orientation$",(0,e.f3M)(v)),(0,i.Z)(this,"sample","import {ScreenOrientationService} from '@ng-web-apis/screen-orientation';\n\n// ...\nexport class Example {\n  constructor(readonly orientation$: ScreenOrientationService) {}\n}"),(0,i.Z)(this,"sampleHtml","<p>{{ orientation$ | async }}</p>")}}return a=r,(0,i.Z)(r,"\u0275fac",function(n){return new(n||a)}),(0,i.Z)(r,"\u0275cmp",e.Xpm({type:a,selectors:[["screen-orientation-page"]],standalone:!0,features:[e.jDz],decls:31,vars:5,consts:[[3,"highlight"]],template:function(n,o){1&n&&(e.TgZ(0,"p")(1,"b"),e._uU(2,"Current type:\xa0"),e.qZA(),e.TgZ(3,"code"),e._uU(4),e.ALo(5,"async"),e.qZA()(),e._UZ(6,"hr")(7,"br"),e.TgZ(8,"h2"),e._uU(9,"How to use"),e.qZA(),e.TgZ(10,"pre"),e._UZ(11,"code",0),e.qZA(),e.TgZ(12,"pre"),e._UZ(13,"code",0),e.qZA(),e._UZ(14,"hr"),e.TgZ(15,"p")(16,"b"),e._uU(17,"Landscape-primary"),e.qZA(),e._uU(18," is an orientation where the screen width is greater than the screen height. If the device's natural orientation is landscape, then it is in landscape-primary when held in that position. If the device's natural orientation is portrait, the user agent sets landscape-primary from the two options as shown in the screen orientation values table.\n"),e.qZA(),e.TgZ(19,"p")(20,"b"),e._uU(21,"Landscape-secondary"),e.qZA(),e._uU(22," is an orientation where the screen width is greater than the screen height. If the device's natural orientation is landscape, it is in landscape-secondary when rotated 180\xba from its natural orientation. If the device's natural orientation is portrait, the user agent sets landscape-secondary from the two options as shown in the screen orientation values table.\n"),e.qZA(),e.TgZ(23,"p")(24,"b"),e._uU(25,"Portrait-primary"),e.qZA(),e._uU(26," is an orientation where the screen width is less than or equal to the screen height. If the device's natural orientation is portrait, then it is in portrait-primary when held in that position. If the device's natural orientation is landscape, the user agent sets portrait-primary from the two options as shown in the screen orientation values table.\n"),e.qZA(),e.TgZ(27,"p")(28,"b"),e._uU(29,"Portrait-secondary"),e.qZA(),e._uU(30," is an orientation where the screen width is less than or equal to the screen height. If the device's natural orientation is portrait, then it is in portrait-secondary when rotated 180\xba from its natural position. If the device's natural orientation is landscape, the user agent sets portrait-secondary from the two options as shown in the screen orientation values table.\n"),e.qZA()),2&n&&(e.xp6(4),e.Oqu(e.lcZ(5,3,o.orientation$)),e.xp6(7),e.Q6J("highlight",o.sample),e.xp6(2),e.Q6J("highlight",o.sampleHtml))},dependencies:[c.ez,c.Ov,d._l,d.y$],styles:["[_nghost-%COMP%]{display:block;max-width:700px;margin:0 auto;line-height:1.5;font-size:1.1em}button[_ngcontent-%COMP%]{margin:0 auto;display:block}iframe[_ngcontent-%COMP%]{width:100%;height:20rem}"],changeDetection:0})),r})()}}]);