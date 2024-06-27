"use strict";exports.id=535,exports.ids=[535],exports.modules={50535:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>permissions_page_component});var common=__webpack_require__(4594),core=__webpack_require__(35548),src=__webpack_require__(88108),permissions_src=__webpack_require__(28523),ngx_highlightjs=__webpack_require__(25858),BehaviorSubject=__webpack_require__(60902),tap=__webpack_require__(64870),catchError=__webpack_require__(11751),of=__webpack_require__(97318);function PermissionsPage_div_6_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div"),core._uU(1," Unfortunately we could not show what the code snippet above would render due to an error: "),core._UZ(2,"br"),core.TgZ(3,"b"),core._uU(4),core.qZA()()),2&rf){const error_r2=ctx.ngIf;core.xp6(4),core.Oqu(error_r2)}}function PermissionsPage_div_8_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div")(1,"p"),core._uU(2,"The sample above would render the following:"),core.qZA(),core._UZ(3,"hr"),core.TgZ(4,"h2",2),core._uU(5),core.qZA(),core._UZ(6,"hr"),core.TgZ(7,"p"),core._uU(8,"Go ahead and change your browser Location permission as shown below to see this change reflected above."),core.qZA(),core.TgZ(9,"div",2),core._UZ(10,"img",3),core.qZA()()),2&rf){const geolocationState_r3=ctx.ngIf;core.xp6(5),core.hij("Geolocation state: ",geolocationState_r3,"")}}const permissions_page_component=(()=>{var _PermissionsPage;class PermissionsPage2{constructor(){this.navigator=(0,core.f3M)(src.s5),this.error$=new BehaviorSubject.X(null),this.basicSample="import { PermissionsService } from '@ng-web-apis/permissions';\n\n@Component({\n  selector: 'main',\n  template: `\n    <h2>Geolocation state: {{ geolocationState$ | async }}</h2>\n  `,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class App {\n  geolocationState$ = this.permissionsService.state('geolocation');\n\n  constructor(\n    private readonly permissionsService: PermissionsService,\n  ) {}\n}\n",this.geolocationState$=(0,core.f3M)(permissions_src.qQ).state("geolocation").pipe((0,tap.b)(state=>{"prompt"===state&&(alert("After you acknowledge this message the browser will ask your permission to allow location access!"),this.navigator.geolocation.getCurrentPosition(()=>{}))}),(0,catchError.K)(error=>(this.error$.next(error.message),(0,of.of)(null))))}}return(_PermissionsPage=PermissionsPage2).\u0275fac=function(t){return new(t||_PermissionsPage)},_PermissionsPage.\u0275cmp=core.Xpm({type:_PermissionsPage,selectors:[["permissions-page"]],standalone:!0,features:[core.jDz],decls:10,vars:7,consts:[[3,"highlight"],[4,"ngIf"],[1,"align-center"],["alt","Click on 'View site information' icon next to the address bar and change selected permission for Location","src","assets/change-permissions-instructions.jpg"]],template:function(rf,ctx){1&rf&&(core._uU(0,"The following example shows basic usage of\n"),core.TgZ(1,"code"),core._uU(2,"PermissionsService"),core.qZA(),core._uU(3,"\n: "),core.TgZ(4,"pre"),core._UZ(5,"code",0),core.qZA(),core.YNc(6,PermissionsPage_div_6_Template,5,1,"div",1),core.ALo(7,"async"),core.YNc(8,PermissionsPage_div_8_Template,11,1,"div",1),core.ALo(9,"async")),2&rf&&(core.xp6(5),core.Q6J("highlight",ctx.basicSample),core.xp6(1),core.Q6J("ngIf",core.lcZ(7,3,ctx.error$)),core.xp6(2),core.Q6J("ngIf",core.lcZ(9,5,ctx.geolocationState$)))},dependencies:[common.ez,common.O5,common.Ov,ngx_highlightjs._l,ngx_highlightjs.y$],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}"],changeDetection:0}),PermissionsPage2})()},28523:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yc:()=>PERMISSIONS_SUPPORT,qQ:()=>PermissionsService,ki:()=>isDenied,_j:()=>isGranted});var core=__webpack_require__(35548),Observable=__webpack_require__(25948),from=__webpack_require__(37384),switchMap=__webpack_require__(275),fromEvent=__webpack_require__(59359),startWith=__webpack_require__(905),map=__webpack_require__(51160),shareReplay=__webpack_require__(59582),src=__webpack_require__(88108);const PERMISSIONS=new core.OlP("[PERMISSIONS]: An abstraction over window.navigator.permissions object",{factory:()=>(0,core.f3M)(src.s5).permissions}),PERMISSIONS_SUPPORT=new core.OlP("[PERMISSIONS_SUPPORT]: Is Permissions API supported?",{factory:()=>!!(0,core.f3M)(PERMISSIONS)});let PermissionsService=(()=>{var _PermissionsService;class PermissionsService2{constructor(){this.permissions=(0,core.f3M)(PERMISSIONS),this.permissionsSupported=(0,core.f3M)(PERMISSIONS_SUPPORT)}state(nameOrDescriptor){const descriptor="string"==typeof nameOrDescriptor?{name:nameOrDescriptor}:nameOrDescriptor;return new Observable.y(subscriber=>{if(this.permissionsSupported)return(0,from.D)(this.permissions.query(descriptor)).pipe((0,switchMap.w)(status=>(0,fromEvent.R)(status,"change").pipe((0,startWith.O)(null),(0,map.U)(()=>status.state)))).subscribe(subscriber);subscriber.error("Permissions is not supported in your browser")}).pipe((0,shareReplay.d)({bufferSize:1,refCount:!0}))}}return(_PermissionsService=PermissionsService2).\u0275fac=function(t){return new(t||_PermissionsService)},_PermissionsService.\u0275prov=core.Yz7({token:_PermissionsService,factory:_PermissionsService.\u0275fac,providedIn:"root"}),PermissionsService2})();function isGranted(state){return"granted"===state}function isDenied(state){return"denied"===state}}};