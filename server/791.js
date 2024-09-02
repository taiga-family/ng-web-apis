"use strict";exports.id=791,exports.ids=[791],exports.modules={8791:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>home_page_component});var core=__webpack_require__(75407),router=__webpack_require__(63690),constants=__webpack_require__(95799);const WEB_AUDIO_SUPPORT=new core.nKC("[WA_WEB_AUDIO_SUPPORT]",{providedIn:"root",factory:()=>!!AudioContext});var src=__webpack_require__(31954),intersection_observer_src=__webpack_require__(30947),midi_src=__webpack_require__(78814),notification_src=__webpack_require__(29694),payment_request_src=__webpack_require__(37869),permissions_src=__webpack_require__(8315),resize_observer_src=__webpack_require__(10346);const _c0=function(a1){return["/",a1]},home_page_component=(()=>{var _HomePage;class HomePage2{constructor(){this.link=constants.$,this.paymentRequestSupport=(0,core.WQX)(payment_request_src.pD),this.geolocationSupport=(0,core.WQX)(src.Hp),this.intersectionSupport=(0,core.WQX)(intersection_observer_src.nW),this.resizeSupport=(0,core.WQX)(resize_observer_src.Kq),this.midiSupport=(0,core.WQX)(midi_src.cF),this.audioSupport=(0,core.WQX)(WEB_AUDIO_SUPPORT),this.permissionsSupport=(0,core.WQX)(permissions_src.pJ),this.notificationSupport=(0,core.WQX)(notification_src.eT)}}return(_HomePage=HomePage2).\u0275fac=function(t){return new(t||_HomePage)},_HomePage.\u0275cmp=core.VBU({type:_HomePage,selectors:[["home-page"]],standalone:!0,features:[core.aNF],decls:152,vars:67,consts:[[1,"link",3,"routerLink"],["alt","Common utils logo","height","64","src","assets/logos/common/logo.svg","width","64",1,"icon"],["alt","Universal logo","height","64","src","assets/logos/universal/logo.svg","width","64",1,"icon"],["alt","Web Audio API logo","height","64","src","assets/logos/audio/logo.svg","width","64",1,"icon"],["alt","Canvas API logo","height","64","src","assets/logos/canvas/logo.svg","width","64",1,"icon"],["alt","Geolocation API logo","height","64","src","assets/logos/geolocation/logo.svg","width","64",1,"icon"],["alt","Intersection Observer API logo","height","64","src","assets/logos/intersection-observer/logo.svg","width","64",1,"icon"],["alt","Web MIDI API logo","height","64","src","assets/logos/midi/logo.svg","width","64",1,"icon"],["alt","Mutation Observer API logo","height","64","src","assets/logos/mutation-observer/logo.svg","width","64",1,"icon"],["alt","Payment Request API logo","height","64","src","assets/logos/payment-request/logo.svg","width","64",1,"icon"],["alt","Permissions API logo","height","64","src","assets/logos/permissions/logo.svg","width","64",1,"icon"],["alt","Resize Observer API logo","height","64","src","assets/logos/resize-observer/logo.svg","width","64",1,"icon"],["alt","Web Speech API logo","height","64","src","assets/logos/speech/logo.svg","width","64",1,"icon"],["alt","Web Storage API logo","height","64","src","assets/logos/storage/logo.svg","width","64",1,"icon"],["alt","Worker API logo","height","64","src","assets/logos/workers/logo.svg","width","64",1,"icon"],["alt","View transition API logo","height","64","src","assets/logos/view-transition/logo.svg","width","64",1,"icon"],["alt","Notification API logo","height","64","src","assets/logos/notification/logo.svg","width","64",1,"icon"],["alt","Screen Orientation API logo","height","64","src","assets/logos/screen-orientation/logo.svg","width","64",1,"icon"]],template:function(rf,ctx){1&rf&&(core.j41(0,"a",0)(1,"div")(2,"h2"),core.EFF(3,"Common"),core.k0s(),core.EFF(4," A set of common utils for consuming "),core.j41(5,"strong"),core.EFF(6,"Web APIs"),core.k0s(),core.EFF(7," with Angular "),core.k0s(),core.nrm(8,"img",1),core.k0s(),core.j41(9,"a",0)(10,"div")(11,"h2"),core.EFF(12,"Universal"),core.k0s(),core.EFF(13," A set of fallbacks to seamlessly use "),core.j41(14,"strong"),core.EFF(15,"Web APIs"),core.k0s(),core.EFF(16," with Angular Universal "),core.k0s(),core.nrm(17,"img",2),core.k0s(),core.j41(18,"a",0)(19,"div")(20,"h2"),core.EFF(21,"Audio"),core.k0s(),core.EFF(22," A library for declarative use of "),core.j41(23,"strong"),core.EFF(24,"Web Audio API"),core.k0s(),core.EFF(25," with Angular "),core.k0s(),core.nrm(26,"img",3),core.k0s(),core.j41(27,"a",0)(28,"div")(29,"h2"),core.EFF(30,"Canvas"),core.k0s(),core.EFF(31," A library for declarative use of "),core.j41(32,"strong"),core.EFF(33,"Canvas API"),core.k0s(),core.EFF(34," with Angular "),core.k0s(),core.nrm(35,"img",4),core.k0s(),core.j41(36,"a",0)(37,"div")(38,"h2"),core.EFF(39,"Geolocation"),core.k0s(),core.EFF(40," An Observable based abstraction to use "),core.j41(41,"strong"),core.EFF(42,"Geolocation API"),core.k0s(),core.EFF(43," with Angular "),core.k0s(),core.nrm(44,"img",5),core.k0s(),core.j41(45,"a",0)(46,"div")(47,"h2"),core.EFF(48,"Intersection Observer"),core.k0s(),core.EFF(49," A library for declarative use of "),core.j41(50,"strong"),core.EFF(51,"Intersection Observer API"),core.k0s(),core.EFF(52," with Angular "),core.k0s(),core.nrm(53,"img",6),core.k0s(),core.j41(54,"a",0)(55,"div")(56,"h2"),core.EFF(57,"MIDI"),core.k0s(),core.EFF(58," An Observable based library for the use of "),core.j41(59,"strong"),core.EFF(60,"Web MIDI API"),core.k0s(),core.EFF(61," with Angular "),core.k0s(),core.nrm(62,"img",7),core.k0s(),core.j41(63,"a",0)(64,"div")(65,"h2"),core.EFF(66,"Mutation Observer"),core.k0s(),core.EFF(67," A library for declarative use of "),core.j41(68,"strong"),core.EFF(69,"Mutation Observer API"),core.k0s(),core.EFF(70," with Angular "),core.k0s(),core.nrm(71,"img",8),core.k0s(),core.j41(72,"a",0)(73,"div")(74,"h2"),core.EFF(75,"Payment Request"),core.k0s(),core.EFF(76," A library for declarative use of "),core.j41(77,"strong"),core.EFF(78,"Payment Request API"),core.k0s(),core.EFF(79," with Angular "),core.k0s(),core.nrm(80,"img",9),core.k0s(),core.j41(81,"a",0)(82,"div")(83,"h2"),core.EFF(84,"Permissions"),core.k0s(),core.EFF(85," A library for Observable-based use of "),core.j41(86,"strong"),core.EFF(87,"Permissions API"),core.k0s()(),core.nrm(88,"img",10),core.k0s(),core.j41(89,"a",0)(90,"div")(91,"h2"),core.EFF(92,"Resize Observer"),core.k0s(),core.EFF(93," A library for declarative use of "),core.j41(94,"strong"),core.EFF(95,"Resize Observer API"),core.k0s(),core.EFF(96," with Angular "),core.k0s(),core.nrm(97,"img",11),core.k0s(),core.j41(98,"a",0)(99,"div")(100,"h2"),core.EFF(101,"Speech"),core.k0s(),core.EFF(102," A library for comfortable use of "),core.j41(103,"strong"),core.EFF(104,"Web Speech API"),core.k0s(),core.EFF(105," with Angular "),core.k0s(),core.nrm(106,"img",12),core.k0s(),core.j41(107,"a",0)(108,"div")(109,"h2"),core.EFF(110,"Storage"),core.k0s(),core.EFF(111," A library for comfortable use of "),core.j41(112,"strong"),core.EFF(113,"Web Storage API"),core.k0s(),core.EFF(114," with Angular "),core.k0s(),core.nrm(115,"img",13),core.k0s(),core.j41(116,"a",0)(117,"div")(118,"h2"),core.EFF(119,"Workers"),core.k0s(),core.EFF(120," A library for use of "),core.j41(121,"strong"),core.EFF(122,"Web Workers"),core.k0s(),core.EFF(123," as RxJS Observables with Angular "),core.k0s(),core.nrm(124,"img",14),core.k0s(),core.j41(125,"a",0)(126,"div")(127,"h2"),core.EFF(128,"View Transition"),core.k0s(),core.EFF(129," A library for declarative use of "),core.j41(130,"strong"),core.EFF(131,"View Transition API"),core.k0s(),core.EFF(132," with Angular "),core.k0s(),core.nrm(133,"img",15),core.k0s(),core.j41(134,"a",0)(135,"div")(136,"h2"),core.EFF(137,"Notification"),core.k0s(),core.EFF(138," A library for declarative use of "),core.j41(139,"strong"),core.EFF(140,"Notification API"),core.k0s(),core.EFF(141," with Angular "),core.k0s(),core.nrm(142,"img",16),core.k0s(),core.j41(143,"a",0)(144,"div")(145,"h2"),core.EFF(146,"Screen Orientation"),core.k0s(),core.EFF(147," A library for declarative use of "),core.j41(148,"strong"),core.EFF(149,"Screen Orientation API"),core.k0s(),core.EFF(150," with Angular "),core.k0s(),core.nrm(151,"img",17),core.k0s()),2&rf&&(core.Y8G("routerLink",core.eq3(33,_c0,ctx.link.CommonPage)),core.R7$(9),core.Y8G("routerLink",core.eq3(35,_c0,ctx.link.UniversalPage)),core.R7$(9),core.AVh("not_supported",!ctx.audioSupport),core.Y8G("routerLink",core.eq3(37,_c0,ctx.link.AudioPage)),core.R7$(9),core.Y8G("routerLink",core.eq3(39,_c0,ctx.link.CanvasPage)),core.R7$(9),core.AVh("not-supported",!ctx.geolocationSupport),core.Y8G("routerLink",core.eq3(41,_c0,ctx.link.GeolocationPage)),core.R7$(9),core.AVh("not-supported",!ctx.intersectionSupport),core.Y8G("routerLink",core.eq3(43,_c0,ctx.link.IntersectionObserverPage)),core.R7$(9),core.AVh("not-supported",!ctx.midiSupport),core.Y8G("routerLink",core.eq3(45,_c0,ctx.link.MidiPage)),core.R7$(9),core.Y8G("routerLink",core.eq3(47,_c0,ctx.link.MutationObserverPage)),core.R7$(9),core.AVh("not-supported",!ctx.paymentRequestSupport),core.Y8G("routerLink",core.eq3(49,_c0,ctx.link.PaymentRequestPage)),core.R7$(9),core.AVh("not-supported",!ctx.permissionsSupport),core.Y8G("routerLink",core.eq3(51,_c0,ctx.link.PermissionsPage)),core.R7$(8),core.AVh("not-supported",!ctx.resizeSupport),core.Y8G("routerLink",core.eq3(53,_c0,ctx.link.ResizeObserverPage)),core.R7$(9),core.Y8G("routerLink",core.eq3(55,_c0,ctx.link.SpeechPage)),core.R7$(9),core.Y8G("routerLink",core.eq3(57,_c0,ctx.link.StoragePage)),core.R7$(9),core.Y8G("routerLink",core.eq3(59,_c0,ctx.link.WorkersPage)),core.R7$(9),core.Y8G("routerLink",core.eq3(61,_c0,ctx.link.ViewTransitionPage)),core.R7$(9),core.AVh("not-supported",!ctx.notificationSupport),core.Y8G("routerLink",core.eq3(63,_c0,ctx.link.Notification)),core.R7$(9),core.Y8G("routerLink",core.eq3(65,_c0,ctx.link.ScreenOrientation)))},dependencies:[router.Wk],styles:['[_nghost-%COMP%]{display:flex;flex-wrap:wrap;align-content:flex-start;justify-content:center}.link[_ngcontent-%COMP%]{display:flex;max-width:380px;color:#444;border-radius:4px;border:1px solid gainsboro;font-size:14px;padding:0 16px 16px;margin:10px;box-sizing:border-box;transition:box-shadow .3s}.link[_ngcontent-%COMP%]:hover{box-shadow:0 12px 36px #0003}.not-supported[_ngcontent-%COMP%]{opacity:.5}.not-supported[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{content:"Not supported by your browser";display:block;font-size:.6em;color:var(--tui-status-negative)}.icon[_ngcontent-%COMP%]{flex-shrink:0;margin:24px 6px 0 20px}'],changeDetection:0}),HomePage2})()},30947:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nW:()=>INTERSECTION_OBSERVER_SUPPORT,Ay:()=>WA_INTERSECTION_OBSERVER_SUPPORT,N7:()=>WaIntersectionObservee,js:()=>WaIntersectionObserverDirective,mU:()=>WaIntersectionRoot});var core=__webpack_require__(75407),internal_Observable=__webpack_require__(38041),share=__webpack_require__(14759);const safe_observer_SafeObserver=typeof IntersectionObserver<"u"?IntersectionObserver:class{constructor(){this.root=null,this.rootMargin="",this.thresholds=[]}observe(){}unobserve(){}disconnect(){}takeRecords(){return[]}},intersection_root_INTERSECTION_ROOT=new core.nKC("[WA_INTERSECTION_ROOT]");new core.nKC("[WA_INTERSECTION_ROOT_MARGIN]",{providedIn:"root",factory:()=>"0px 0px 0px 0px"}),new core.nKC("[WA_INTERSECTION_THRESHOLD]",{providedIn:"root",factory:()=>0});let WaIntersectionObserverDirective=(()=>{var _WaIntersectionObserverDirective;class WaIntersectionObserverDirective2 extends safe_observer_SafeObserver{constructor(){const root=(0,core.WQX)(intersection_root_INTERSECTION_ROOT,{optional:!0});var _a;super(entries=>{this.callbacks.forEach((callback,element)=>{const filtered=entries.filter(({target})=>target===element);return filtered.length&&callback(filtered,this)})},{root:null==root?void 0:root.nativeElement,rootMargin:(0,core.WQX)(core.aKT).nativeElement.getAttribute("waIntersectionRootMargin")||"0px 0px 0px 0px",threshold:(null==(_a=(0,core.WQX)(core.aKT).nativeElement.getAttribute("waIntersectionThreshold"))?void 0:_a.split(",").map(parseFloat))||0}),this.callbacks=new Map,this.margin="",this.threshold=""}observe(target,callback=(()=>{})){super.observe(target),this.callbacks.set(target,callback)}unobserve(target){super.unobserve(target),this.callbacks.delete(target)}ngOnDestroy(){this.disconnect()}}return(_WaIntersectionObserverDirective=WaIntersectionObserverDirective2).\u0275fac=function(t){return new(t||_WaIntersectionObserverDirective)},_WaIntersectionObserverDirective.\u0275dir=core.FsC({type:_WaIntersectionObserverDirective,selectors:[["","waIntersectionObserver",""]],inputs:{waIntersectionRootMargin:["margin","waIntersectionRootMargin"],waIntersectionThreshold:["threshold","waIntersectionThreshold"]},exportAs:["IntersectionObserver"],standalone:!0,features:[core.Vt3]}),WaIntersectionObserverDirective2})(),IntersectionObserveeService=(()=>{var _IntersectionObserveeService;class IntersectionObserveeService2 extends internal_Observable.c{constructor(){const nativeElement=(0,core.WQX)(core.aKT).nativeElement,observer=(0,core.WQX)(WaIntersectionObserverDirective);return super(subscriber=>(observer.observe(nativeElement,entries=>{subscriber.next(entries)}),()=>{observer.unobserve(nativeElement)})),this.pipe((0,share.u)())}}return(_IntersectionObserveeService=IntersectionObserveeService2).\u0275fac=function(t){return new(t||_IntersectionObserveeService)},_IntersectionObserveeService.\u0275prov=core.jDH({token:_IntersectionObserveeService,factory:_IntersectionObserveeService.\u0275fac}),IntersectionObserveeService2})(),WaIntersectionObservee=(()=>{var _WaIntersectionObservee;class WaIntersectionObservee2{constructor(){this.waIntersectionObservee=(0,core.WQX)(IntersectionObserveeService)}}return(_WaIntersectionObservee=WaIntersectionObservee2).\u0275fac=function(t){return new(t||_WaIntersectionObservee)},_WaIntersectionObservee.\u0275dir=core.FsC({type:_WaIntersectionObservee,selectors:[["","waIntersectionObservee",""]],outputs:{waIntersectionObservee:"waIntersectionObservee"},standalone:!0,features:[core.Jv_([IntersectionObserveeService])]}),WaIntersectionObservee2})(),WaIntersectionRoot=(()=>{var _WaIntersectionRoot;class WaIntersectionRoot2{}return(_WaIntersectionRoot=WaIntersectionRoot2).\u0275fac=function(t){return new(t||_WaIntersectionRoot)},_WaIntersectionRoot.\u0275dir=core.FsC({type:_WaIntersectionRoot,selectors:[["","waIntersectionRoot",""]],standalone:!0,features:[core.Jv_([{provide:intersection_root_INTERSECTION_ROOT,useExisting:core.aKT}])]}),WaIntersectionRoot2})();var src=__webpack_require__(13270);const WA_INTERSECTION_OBSERVER_SUPPORT=new core.nKC("[WA_INTERSECTION_OBSERVER_SUPPORT]: [INTERSECTION_OBSERVER_SUPPORT]",{providedIn:"root",factory:()=>!!(0,core.WQX)(src.Qc).IntersectionObserver}),INTERSECTION_OBSERVER_SUPPORT=WA_INTERSECTION_OBSERVER_SUPPORT},78814:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{vd:()=>FrequencyPipe,bl:()=>MIDI_MESSAGES,cF:()=>MIDI_SUPPORT,Q2:()=>notes,OY:()=>toData});var filter=__webpack_require__(70948),map=__webpack_require__(55514);function between(value,min,max){return value>=min&&value<=max}function notes(){return source=>source.pipe((0,filter.p)(({data})=>between(data[0]??0,128,159)),(0,map.T)(event=>(between(event.data[0]??0,128,143)&&(event.data[0]+=16,event.data[2]=0),event)))}function toData(){return source=>source.pipe((0,map.T)(({data})=>data))}var core=__webpack_require__(75407);let FrequencyPipe=(()=>{var _FrequencyPipe;class FrequencyPipe2{transform(note,tuning){return function toFrequency(note,tuning=440){return 2**((note-69)/12)*tuning}(note,tuning)}}return(_FrequencyPipe=FrequencyPipe2).\u0275fac=function(t){return new(t||_FrequencyPipe)},_FrequencyPipe.\u0275pipe=core.EJ8({name:"frequency",type:_FrequencyPipe,pure:!0,standalone:!0}),FrequencyPipe2})();var asyncToGenerator=__webpack_require__(73308),src=__webpack_require__(13270);const SYSEX=new core.nKC("[WA_SYSEX]",{providedIn:"root",factory:()=>!1}),MIDI_ACCESS=new core.nKC("[WA_MIDI_ACCESS]",{providedIn:"root",factory:(_ref=(0,asyncToGenerator.A)(function*(){const navigatorRef=(0,core.WQX)(src.Rp),sysex=(0,core.WQX)(SYSEX);return navigatorRef.requestMIDIAccess?navigatorRef.requestMIDIAccess({sysex}):Promise.reject(new Error("Web MIDI API is not supported"))}),function(){return _ref.apply(this,arguments)})});new core.nKC("[WA_MIDI_INPUT]");var _ref,from=__webpack_require__(77949),switchMap=__webpack_require__(25358),fromEvent=__webpack_require__(55014),startWith=__webpack_require__(64204),of=__webpack_require__(76145),shareReplay=__webpack_require__(85204);function getPortsStream(ports){return(0,from.H)((0,core.WQX)(MIDI_ACCESS).catch(()=>null)).pipe((0,switchMap.n)(access=>{const inputs=[];return null==access||access[ports].forEach(input=>inputs.push(input)),access?(0,fromEvent.R)(access,"statechange").pipe((0,map.T)(()=>inputs),(0,startWith.Z)(inputs)):(0,of.of)([])}),(0,shareReplay.t)(1))}new core.nKC("[WA_MIDI_INPUTS]",{factory:()=>getPortsStream("inputs")});var throwError=__webpack_require__(41234),merge=__webpack_require__(85122),share=__webpack_require__(14759);const MIDI_MESSAGES=new core.nKC("[WA_MIDI_MESSAGES]",{providedIn:"root",factory:()=>(0,from.H)((0,core.WQX)(MIDI_ACCESS).catch(e=>e)).pipe((0,switchMap.n)(access=>access instanceof Error?(0,throwError.$)(access):(0,fromEvent.R)(access,"statechange").pipe((0,startWith.Z)(null),(0,switchMap.n)(()=>{const inputs=[];return access.inputs.forEach(input=>inputs.push(input)),(0,merge.h)(...inputs.map(input=>(0,fromEvent.R)(input,"midimessage")))}))),(0,share.u)())}),MIDI_SUPPORT=(new core.nKC("[WA_MIDI_OUTPUT]"),new core.nKC("[WA_MIDI_OUTPUTS]",{factory:()=>getPortsStream("outputs")}),new core.nKC("[WA_MIDI_SUPPORT]",{factory:()=>!!(0,core.WQX)(src.Rp).requestMIDIAccess}));new core.nKC("[WA_MIDI_INPUT_QUERY]"),new core.nKC("[WA_MIDI_OUTPUT_QUERY]")},29694:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eT:()=>NOTIFICATION_SUPPORT,JE:()=>NotificationService});var core=__webpack_require__(75407),throwError=__webpack_require__(41234),Observable2=__webpack_require__(38041),defer=__webpack_require__(36366),fromEvent=__webpack_require__(55014),takeUntil=__webpack_require__(64409),src=__webpack_require__(13270);const NOTIFICATION_SUPPORT=new core.nKC("[WA_NOTIFICATION_SUPPORT]",{factory:()=>"Notification"in(0,core.WQX)(src.Qc)}),NOT_SUPPORTED_ERROR$=(0,throwError.$)(()=>new Error("Notification API is not supported in your browser"));let NotificationService=(()=>{var _NotificationService;class NotificationService2{constructor(){this.support=(0,core.WQX)(NOTIFICATION_SUPPORT)}requestPermission(){return this.support?new Observable2.c(subscriber=>{var _a;null==(_a=Notification.requestPermission(permission=>{subscriber.next(permission),subscriber.complete()}))||_a.catch(err=>subscriber.error(err))}):NOT_SUPPORTED_ERROR$}open(title,options){return this.support?(0,defer.v)(()=>{const notification=new Notification(title,options),close$=(0,fromEvent.R)(notification,"close");return new Observable2.c(subscriber=>(subscriber.next(notification),()=>notification.close())).pipe((0,takeUntil.Q)(close$))}):NOT_SUPPORTED_ERROR$}}return(_NotificationService=NotificationService2).\u0275fac=function(t){return new(t||_NotificationService)},_NotificationService.\u0275prov=core.jDH({token:_NotificationService,factory:_NotificationService.\u0275fac,providedIn:"root"}),NotificationService2})()},37869:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{uq:()=>PAYMENT_METHODS,pD:()=>PAYMENT_REQUEST_SUPPORT,xI:()=>WaPayment,mR:()=>WaPaymentItem,T9:()=>WaPaymentSubmit});var core=__webpack_require__(75407);let WaPaymentItem=(()=>{var _WaPaymentItem;class WaPaymentItem2{}return(_WaPaymentItem=WaPaymentItem2).\u0275fac=function(t){return new(t||_WaPaymentItem)},_WaPaymentItem.\u0275dir=core.FsC({type:_WaPaymentItem,selectors:[["","waPaymentItem","","paymentAmount","","paymentLabel",""]],inputs:{amount:["paymentAmount","amount"],label:["paymentLabel","label"],pending:["paymentPending","pending"]},standalone:!0}),WaPaymentItem2})(),WaPayment=(()=>{var _WaPayment;class WaPayment2{set paymentItems(items){this.displayItems=items.toArray()}}return(_WaPayment=WaPayment2).\u0275fac=function(t){return new(t||_WaPayment)},_WaPayment.\u0275dir=core.FsC({type:_WaPayment,selectors:[["","waPayment","","paymentTotal",""]],contentQueries:function(rf,ctx,dirIndex){if(1&rf&&core.wni(dirIndex,WaPaymentItem,4),2&rf){let _t;core.mGM(_t=core.lsd())&&(ctx.paymentItems=_t)}},inputs:{total:["paymentTotal","total"],id:["paymentId","id"],modifiers:["paymentModifiers","modifiers"],shippingOptions:["paymentShippingOptions","shippingOptions"]},standalone:!0}),WaPayment2})();var fromEvent=__webpack_require__(55014),switchMap=__webpack_require__(25358),from=__webpack_require__(77949),catchError=__webpack_require__(40933),of=__webpack_require__(76145),share=__webpack_require__(14759),filter=__webpack_require__(70948),asyncToGenerator=__webpack_require__(73308);const PAYMENT_METHODS=new core.nKC("[WA_PAYMENT_METHODS]",{factory:()=>[{supportedMethods:"basic-card"}]}),PAYMENT_OPTIONS=new core.nKC("[WA_PAYMENT_OPTIONS]",{factory:()=>({})});var src=__webpack_require__(13270);const PAYMENT_REQUEST_SUPPORT=new core.nKC("[WA_PAYMENT_REQUEST_SUPPORT]",{factory:()=>!!(0,core.WQX)(src.Qc).PaymentRequest});let PaymentRequestService=(()=>{var _PaymentRequestService;class PaymentRequestService2{constructor(){this.supported=(0,core.WQX)(PAYMENT_REQUEST_SUPPORT),this.paymentMethods=(0,core.WQX)(PAYMENT_METHODS),this.paymentOptions=(0,core.WQX)(PAYMENT_OPTIONS)}request(details,methods=this.paymentMethods,options=this.paymentOptions){var _this=this;return(0,asyncToGenerator.A)(function*(){if(!_this.supported)return Promise.reject(new Error("Payment Request is not supported in your browser"));const gateway=new PaymentRequest(methods,details,options);return gateway.canMakePayment().then(function(){var _ref=(0,asyncToGenerator.A)(function*(canPay){return canPay?gateway.show(details):Promise.reject(new Error("Payment Request cannot make the payment"))});return function(_x){return _ref.apply(this,arguments)}}())})()}}return(_PaymentRequestService=PaymentRequestService2).\u0275fac=function(t){return new(t||_PaymentRequestService)},_PaymentRequestService.\u0275prov=core.jDH({token:_PaymentRequestService,factory:_PaymentRequestService.\u0275fac,providedIn:"root"}),PaymentRequestService2})();function isError(item){return item instanceof Error||item instanceof DOMException}let WaPaymentSubmit=(()=>{var _WaPaymentSubmit;class WaPaymentSubmit2{constructor(){this.paymentHost=(0,core.WQX)(WaPayment),this.paymentRequest=(0,core.WQX)(PaymentRequestService),this.nativeElement=(0,core.WQX)(core.aKT).nativeElement,this.methods=(0,core.WQX)(PAYMENT_METHODS),this.options=(0,core.WQX)(PAYMENT_OPTIONS);const requests$=(0,fromEvent.R)(this.nativeElement,"click").pipe((0,switchMap.n)(()=>(0,from.H)(this.paymentRequest.request({...this.paymentHost},this.methods,this.options)).pipe((0,catchError.W)(error=>(0,of.of)(error)))),(0,share.u)());this.waPaymentSubmit=requests$.pipe((0,filter.p)(response=>!isError(response))),this.waPaymentError=requests$.pipe((0,filter.p)(isError))}}return(_WaPaymentSubmit=WaPaymentSubmit2).\u0275fac=function(t){return new(t||_WaPaymentSubmit)},_WaPaymentSubmit.\u0275dir=core.FsC({type:_WaPaymentSubmit,selectors:[["","waPaymentSubmit",""]],outputs:{waPaymentSubmit:"waPaymentSubmit",waPaymentError:"waPaymentError"},standalone:!0}),WaPaymentSubmit2})()},8315:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pJ:()=>PERMISSIONS_SUPPORT,Kn:()=>PermissionsService,GZ:()=>isDenied,kR:()=>isGranted});var core=__webpack_require__(75407),Observable2=__webpack_require__(38041),Subscription=__webpack_require__(17988),from=__webpack_require__(77949),switchMap=__webpack_require__(25358),fromEvent=__webpack_require__(55014),startWith=__webpack_require__(64204),map=__webpack_require__(55514),shareReplay=__webpack_require__(85204),src=__webpack_require__(13270);const WA_PERMISSIONS=new core.nKC("[WA_PERMISSIONS]",{factory:()=>(0,core.WQX)(src.Rp).permissions}),PERMISSIONS=WA_PERMISSIONS,WA_PERMISSIONS_SUPPORT=new core.nKC("[WA_PERMISSIONS_SUPPORT]",{factory:()=>!!(0,core.WQX)(PERMISSIONS)}),PERMISSIONS_SUPPORT=WA_PERMISSIONS_SUPPORT;let PermissionsService=(()=>{var _PermissionsService;class PermissionsService2{constructor(){this.permissions=(0,core.WQX)(WA_PERMISSIONS),this.permissionsSupported=(0,core.WQX)(WA_PERMISSIONS_SUPPORT)}state(nameOrDescriptor){const descriptor="string"==typeof nameOrDescriptor?{name:nameOrDescriptor}:nameOrDescriptor;return new Observable2.c(subscriber=>this.permissionsSupported?(0,from.H)(this.permissions.query(descriptor)).pipe((0,switchMap.n)(status=>(0,fromEvent.R)(status,"change").pipe((0,startWith.Z)(null),(0,map.T)(()=>status.state)))).subscribe(subscriber):(subscriber.error("Permissions is not supported in your browser"),new Subscription.yU)).pipe((0,shareReplay.t)({bufferSize:1,refCount:!0}))}}return(_PermissionsService=PermissionsService2).\u0275fac=function(t){return new(t||_PermissionsService)},_PermissionsService.\u0275prov=core.jDH({token:_PermissionsService,factory:_PermissionsService.\u0275fac,providedIn:"root"}),PermissionsService2})();function isGranted(state){return"granted"===state}function isDenied(state){return"denied"===state}},10346:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kq:()=>RESIZE_OBSERVER_SUPPORT,ke:()=>ResizeObserverService,DQ:()=>WaResizeObserver});var core=__webpack_require__(75407),Observable2=__webpack_require__(38041);const SafeObserver2=typeof ResizeObserver<"u"?ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},RESIZE_OPTION_BOX=new core.nKC("[WA_RESIZE_OPTION_BOX]",{providedIn:"root",factory:()=>"content-box"});let ResizeObserverService=(()=>{var _ResizeObserverService;class ResizeObserverService2 extends Observable2.c{constructor(){const nativeElement=(0,core.WQX)(core.aKT).nativeElement,box=(0,core.WQX)(RESIZE_OPTION_BOX);super(subscriber=>{const observer=new SafeObserver2(entries=>subscriber.next(entries));return observer.observe(nativeElement,{box}),()=>{observer.disconnect()}})}}return(_ResizeObserverService=ResizeObserverService2).\u0275fac=function(t){return new(t||_ResizeObserverService)},_ResizeObserverService.\u0275prov=core.jDH({token:_ResizeObserverService,factory:_ResizeObserverService.\u0275fac}),ResizeObserverService2})(),WaResizeObserver=(()=>{var _WaResizeObserver;class WaResizeObserver2{constructor(){this.waResizeObserver=(0,core.WQX)(ResizeObserverService),this.box="content-box"}}return(_WaResizeObserver=WaResizeObserver2).\u0275fac=function(t){return new(t||_WaResizeObserver)},_WaResizeObserver.\u0275dir=core.FsC({type:_WaResizeObserver,selectors:[["","waResizeObserver",""]],inputs:{waResizeBox:["box","waResizeBox"]},outputs:{waResizeObserver:"waResizeObserver"},standalone:!0,features:[core.Jv_([ResizeObserverService,{provide:RESIZE_OPTION_BOX,useFactory:()=>(0,core.WQX)(core.aKT).nativeElement.getAttribute("waResizeBox")||"content-box"}])]}),WaResizeObserver2})();var src=__webpack_require__(13270);const RESIZE_OBSERVER_SUPPORT=new core.nKC("[WA_RESIZE_OBSERVER_SUPPORT]",{providedIn:"root",factory:()=>!!(0,core.WQX)(src.Qc).ResizeObserver})}};