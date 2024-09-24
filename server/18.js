"use strict";exports.id=18,exports.ids=[18],exports.modules={99018:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>screen_orientation_page_component});var common=__webpack_require__(16727),core=__webpack_require__(75407),src=__webpack_require__(13270),Observable=__webpack_require__(38041),fromEvent=__webpack_require__(55014),startWith=__webpack_require__(64204),map=__webpack_require__(55514),shareReplay=__webpack_require__(85204);let ScreenOrientationService=(()=>{var _ScreenOrientationService;class ScreenOrientationService2 extends Observable.c{constructor(){super(subscriber=>this.stream$.subscribe(subscriber)),this.win=(0,core.WQX)(src.Qc),this.stream$=(this.isModern?(0,fromEvent.R)(this.win.screen.orientation,"change").pipe((0,startWith.Z)(null),(0,map.T)(()=>this.win.screen.orientation.type)):(0,fromEvent.R)(this.win,"orientationchange").pipe((0,startWith.Z)(null),(0,map.T)(()=>{switch(parseInt(this.win.orientation,10)){case-90:return"landscape-secondary";case 180:return"portrait-secondary";case 90:return"landscape-primary";default:return"portrait-primary"}}))).pipe((0,shareReplay.t)({bufferSize:1,refCount:!0}))}get isModern(){var _a,_b;return!(null==(_b=null==(_a=this.win)?void 0:_a.screen)||!_b.orientation)}}return(_ScreenOrientationService=ScreenOrientationService2).\u0275fac=function(t){return new(t||_ScreenOrientationService)},_ScreenOrientationService.\u0275prov=core.jDH({token:_ScreenOrientationService,factory:_ScreenOrientationService.\u0275fac,providedIn:"root"}),ScreenOrientationService2})();var ngx_highlightjs=__webpack_require__(45750);const screen_orientation_page_component=(()=>{var _ScreenOrientationPage;class ScreenOrientationPage2{constructor(){this.orientation$=(0,core.WQX)(ScreenOrientationService),this.sample="import {ScreenOrientationService} from '@ng-web-apis/screen-orientation';\n\n// ...\nexport class Example {\n  constructor(readonly orientation$: ScreenOrientationService) {}\n}",this.sampleHtml="<p>{{ orientation$ | async }}</p>"}}return(_ScreenOrientationPage=ScreenOrientationPage2).\u0275fac=function(t){return new(t||_ScreenOrientationPage)},_ScreenOrientationPage.\u0275cmp=core.VBU({type:_ScreenOrientationPage,selectors:[["screen-orientation-page"]],standalone:!0,features:[core.aNF],decls:31,vars:5,consts:[[3,"highlight"]],template:function(rf,ctx){1&rf&&(core.j41(0,"p")(1,"b"),core.EFF(2,"Current type:\xa0"),core.k0s(),core.j41(3,"code"),core.EFF(4),core.nI1(5,"async"),core.k0s()(),core.nrm(6,"hr")(7,"br"),core.j41(8,"h2"),core.EFF(9,"How to use"),core.k0s(),core.j41(10,"pre"),core.nrm(11,"code",0),core.k0s(),core.j41(12,"pre"),core.nrm(13,"code",0),core.k0s(),core.nrm(14,"hr"),core.j41(15,"p")(16,"b"),core.EFF(17,"Landscape-primary"),core.k0s(),core.EFF(18," is an orientation where the screen width is greater than the screen height. If the device's natural orientation is landscape, then it is in landscape-primary when held in that position. If the device's natural orientation is portrait, the user agent sets landscape-primary from the two options as shown in the screen orientation values table.\n"),core.k0s(),core.j41(19,"p")(20,"b"),core.EFF(21,"Landscape-secondary"),core.k0s(),core.EFF(22," is an orientation where the screen width is greater than the screen height. If the device's natural orientation is landscape, it is in landscape-secondary when rotated 180\xba from its natural orientation. If the device's natural orientation is portrait, the user agent sets landscape-secondary from the two options as shown in the screen orientation values table.\n"),core.k0s(),core.j41(23,"p")(24,"b"),core.EFF(25,"Portrait-primary"),core.k0s(),core.EFF(26," is an orientation where the screen width is less than or equal to the screen height. If the device's natural orientation is portrait, then it is in portrait-primary when held in that position. If the device's natural orientation is landscape, the user agent sets portrait-primary from the two options as shown in the screen orientation values table.\n"),core.k0s(),core.j41(27,"p")(28,"b"),core.EFF(29,"Portrait-secondary"),core.k0s(),core.EFF(30," is an orientation where the screen width is less than or equal to the screen height. If the device's natural orientation is portrait, then it is in portrait-secondary when rotated 180\xba from its natural position. If the device's natural orientation is landscape, the user agent sets portrait-secondary from the two options as shown in the screen orientation values table.\n"),core.k0s()),2&rf&&(core.R7$(4),core.JRh(core.bMT(5,3,ctx.orientation$)),core.R7$(7),core.Y8G("highlight",ctx.sample),core.R7$(2),core.Y8G("highlight",ctx.sampleHtml))},dependencies:[common.MD,common.Jj,ngx_highlightjs.fw,ngx_highlightjs.f4],styles:["[_nghost-%COMP%]{display:block;max-inline-size:43.75rem;margin:0 auto;line-height:1.5;font-size:1.1em}button[_ngcontent-%COMP%]{display:block;margin:0 auto}iframe[_ngcontent-%COMP%]{inline-size:100%;block-size:20rem}"],changeDetection:0}),ScreenOrientationPage2})()}};