"use strict";exports.id=925,exports.ids=[925],exports.modules={85925:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4594),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(35548),_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(76976);function IntersectionObserverPage_section_0_Template(rf,ctx){if(1&rf){const _r4=_angular_core__WEBPACK_IMPORTED_MODULE_1__.EpF();_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(0,"section",2)(1,"h1",3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("waIntersectionObservee",function($event){_angular_core__WEBPACK_IMPORTED_MODULE_1__.CHM(_r4);const ctx_r3=_angular_core__WEBPACK_IMPORTED_MODULE_1__.oxw();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.KtG(ctx_r3.onIntersection($event))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(2," I'm being observed "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()()}if(2&rf){const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_1__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.uIk("data-ratio",ctx_r0.ratio)}}function IntersectionObserverPage_ng_template_1_Template(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(0,"Your browser does not support Intersection Observer API")}const __WEBPACK_DEFAULT_EXPORT__=(()=>{var _IntersectionObserverPage;class IntersectionObserverPage2{constructor(){this.ratio=0,this.support=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.f3M)(_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_0__.tc)}onIntersection(intersections){this.ratio=Math.round(10*intersections[0].intersectionRatio)}}return(_IntersectionObserverPage=IntersectionObserverPage2).\u0275fac=function(t){return new(t||_IntersectionObserverPage)},_IntersectionObserverPage.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Xpm({type:_IntersectionObserverPage,selectors:[["intersection-observer-page"]],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_1__.jDz],decls:3,vars:2,consts:[["waIntersectionObserver","","waIntersectionRoot","","waIntersectionThreshold","0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9","class","wrapper",4,"ngIf","ngIfElse"],["not",""],["waIntersectionObserver","","waIntersectionRoot","","waIntersectionThreshold","0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9",1,"wrapper"],[1,"element",3,"waIntersectionObservee"]],template:function(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.YNc(0,IntersectionObserverPage_section_0_Template,3,1,"section",0),_angular_core__WEBPACK_IMPORTED_MODULE_1__.YNc(1,IntersectionObserverPage_ng_template_1_Template,1,0,"ng-template",null,1,_angular_core__WEBPACK_IMPORTED_MODULE_1__.W1O)),2&rf){const _r1=_angular_core__WEBPACK_IMPORTED_MODULE_1__.MAs(2);_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngIf",ctx.support)("ngIfElse",_r1)}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.ez,_angular_common__WEBPACK_IMPORTED_MODULE_2__.O5,_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_0__.hK,_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_0__.c4,_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_0__.Rd],styles:['[_nghost-%COMP%]{perspective:150vw;-webkit-user-select:none;user-select:none;flex-direction:column;align-items:center}.wrapper[_ngcontent-%COMP%]{position:relative;height:200px;max-width:600px;margin:0 auto;overflow:auto;box-shadow:0 12px 36px #0003}.wrapper[_ngcontent-%COMP%]:before{content:"";display:block;height:900px}.element[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;margin:0;top:300px;left:0;width:100%;height:200px;transition:background .1s}.element[data-ratio="0"][_ngcontent-%COMP%]{background:#8591eb}.element[data-ratio="1"][_ngcontent-%COMP%]{background:#85a0eb}.element[data-ratio="2"][_ngcontent-%COMP%]{background:#84aeeb}.element[data-ratio="3"][_ngcontent-%COMP%]{background:#83beeb}.element[data-ratio="4"][_ngcontent-%COMP%]{background:#86d2eb}.element[data-ratio="5"][_ngcontent-%COMP%]{background:#87ddeb}.element[data-ratio="6"][_ngcontent-%COMP%]{background:#8ae5eb}.element[data-ratio="7"][_ngcontent-%COMP%]{background:#8bebdf}.element[data-ratio="8"][_ngcontent-%COMP%]{background:#83ebc8}.element[data-ratio="9"][_ngcontent-%COMP%]{background:#6beb99}.element[data-ratio="10"][_ngcontent-%COMP%]{background:#4ceb60}'],changeDetection:0}),IntersectionObserverPage2})()},76976:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tc:()=>INTERSECTION_OBSERVER_SUPPORT,c4:()=>WaIntersectionObservee,hK:()=>WaIntersectionObserverDirective,Rd:()=>WaIntersectionRoot});var core=__webpack_require__(35548),internal_Observable=__webpack_require__(25948),share=__webpack_require__(89407);const safe_observer_SafeObserver=typeof IntersectionObserver<"u"?IntersectionObserver:class{constructor(){this.root=null,this.rootMargin="",this.thresholds=[]}observe(){}unobserve(){}disconnect(){}takeRecords(){return[]}},intersection_root_INTERSECTION_ROOT=new core.OlP("[INTERSECTION_ROOT]: Root element for IntersectionObserver");new core.OlP("[INTERSECTION_ROOT_MARGIN]: rootMargin for IntersectionObserver",{providedIn:"root",factory:()=>"0px 0px 0px 0px"}),new core.OlP("[INTERSECTION_THRESHOLD]: threshold for IntersectionObserver",{providedIn:"root",factory:()=>0});let WaIntersectionObserverDirective=(()=>{var _WaIntersectionObserverDirective;class WaIntersectionObserverDirective2 extends safe_observer_SafeObserver{constructor(){const root=(0,core.f3M)(intersection_root_INTERSECTION_ROOT,{optional:!0});var _a;super(entries=>{this.callbacks.forEach((callback,element)=>{const filtered=entries.filter(({target})=>target===element);return filtered.length&&callback(filtered,this)})},{root:null==root?void 0:root.nativeElement,rootMargin:(0,core.f3M)(core.SBq).nativeElement.getAttribute("waIntersectionRootMargin")||"0px 0px 0px 0px",threshold:(null==(_a=(0,core.f3M)(core.SBq).nativeElement.getAttribute("waIntersectionThreshold"))?void 0:_a.split(",").map(parseFloat))||0}),this.callbacks=new Map,this.margin="",this.threshold=""}observe(target,callback=(()=>{})){super.observe(target),this.callbacks.set(target,callback)}unobserve(target){super.unobserve(target),this.callbacks.delete(target)}ngOnDestroy(){this.disconnect()}}return(_WaIntersectionObserverDirective=WaIntersectionObserverDirective2).\u0275fac=function(t){return new(t||_WaIntersectionObserverDirective)},_WaIntersectionObserverDirective.\u0275dir=core.lG2({type:_WaIntersectionObserverDirective,selectors:[["","waIntersectionObserver",""]],inputs:{waIntersectionRootMargin:["margin","waIntersectionRootMargin"],waIntersectionThreshold:["threshold","waIntersectionThreshold"]},exportAs:["IntersectionObserver"],standalone:!0,features:[core.qOj]}),WaIntersectionObserverDirective2})(),IntersectionObserveeService=(()=>{var _IntersectionObserveeService;class IntersectionObserveeService2 extends internal_Observable.y{constructor(){const nativeElement=(0,core.f3M)(core.SBq).nativeElement,observer=(0,core.f3M)(WaIntersectionObserverDirective);return super(subscriber=>(observer.observe(nativeElement,entries=>{subscriber.next(entries)}),()=>{observer.unobserve(nativeElement)})),this.pipe((0,share.B)())}}return(_IntersectionObserveeService=IntersectionObserveeService2).\u0275fac=function(t){return new(t||_IntersectionObserveeService)},_IntersectionObserveeService.\u0275prov=core.Yz7({token:_IntersectionObserveeService,factory:_IntersectionObserveeService.\u0275fac}),IntersectionObserveeService2})(),WaIntersectionObservee=(()=>{var _WaIntersectionObservee;class WaIntersectionObservee2{constructor(){this.waIntersectionObservee=(0,core.f3M)(IntersectionObserveeService)}}return(_WaIntersectionObservee=WaIntersectionObservee2).\u0275fac=function(t){return new(t||_WaIntersectionObservee)},_WaIntersectionObservee.\u0275dir=core.lG2({type:_WaIntersectionObservee,selectors:[["","waIntersectionObservee",""]],outputs:{waIntersectionObservee:"waIntersectionObservee"},standalone:!0,features:[core._Bn([IntersectionObserveeService])]}),WaIntersectionObservee2})(),WaIntersectionRoot=(()=>{var _WaIntersectionRoot;class WaIntersectionRoot2{}return(_WaIntersectionRoot=WaIntersectionRoot2).\u0275fac=function(t){return new(t||_WaIntersectionRoot)},_WaIntersectionRoot.\u0275dir=core.lG2({type:_WaIntersectionRoot,selectors:[["","waIntersectionRoot",""]],standalone:!0,features:[core._Bn([{provide:intersection_root_INTERSECTION_ROOT,useExisting:core.SBq}])]}),WaIntersectionRoot2})();var src=__webpack_require__(88108);const INTERSECTION_OBSERVER_SUPPORT=new core.OlP("[INTERSECTION_OBSERVER_SUPPORT]: Intersection Observer API support",{providedIn:"root",factory:()=>!!(0,core.f3M)(src.m9).IntersectionObserver})}};