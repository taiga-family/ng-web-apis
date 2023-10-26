"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=217,exports.ids=[217],exports.modules={78217:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ViewTransitionPageModule:()=>ViewTransitionPageModule});var core=__webpack_require__(74788),cjs=__webpack_require__(72921),taiga_ui_cdk_services=__webpack_require__(30979),common=__webpack_require__(12057);class ViewTransitionService{constructor(document){this.document=document,this.isSupported="startViewTransition"in this.document}startViewTransition(callback){return this.isSupported?new cjs.Observable(subscriber=>{const transition=this.document.startViewTransition(callback);return transition.updateCallbackDone.then(()=>{subscriber.next(transition)},error=>{subscriber.error(error)}),transition.ready.catch(error=>{subscriber.error(error)}),transition.finished.then(()=>{subscriber.complete()},error=>{subscriber.error(error)}),()=>{transition.skipTransition()}}):(0,cjs.throwError)(()=>new Error("startViewTransition is not supported in your browser"))}}__name(ViewTransitionService,"ViewTransitionService"),ViewTransitionService.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ViewTransitionService,deps:[{token:common.K0}],target:core.\u0275\u0275FactoryTarget.Injectable}),ViewTransitionService.\u0275prov=core.\u0275\u0275ngDeclareInjectable({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ViewTransitionService,providedIn:"root"}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ViewTransitionService,decorators:[{type:core.Injectable,args:[{providedIn:"root"}]}],ctorParameters:function(){return[{type:Document,decorators:[{type:core.Inject,args:[common.K0]}]}]}});var taiga_ui_cdk_directives_let=__webpack_require__(92668),taiga_ui_core_components_link=__webpack_require__(82847),ngx_highlightjs=__webpack_require__(34230);const PHOTOS=[{src:"https://images.pexels.com/photos/16316785/pexels-photo-16316785/free-photo-of-fluffy-cat-on-blooming-tree-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",author:"Peng Louis",url:"https://www.pexels.com/photo/fluffy-cat-on-blooming-tree-background-16316785/"},{src:"https://images.pexels.com/photos/6001385/pexels-photo-6001385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",author:"Sam Lion",url:"https://www.pexels.com/photo/cute-curious-cat-watching-video-on-laptop-sitting-on-couch-6001385/"},{src:"https://images.pexels.com/photos/7210265/pexels-photo-7210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",author:"Blue Bird",url:"https://www.pexels.com/photo/ginger-cat-sleeping-on-ground-in-autumn-7210265/"}];class ViewTransitionPageComponent{constructor(viewTransitionService,cdr,destroy$){this.viewTransitionService=viewTransitionService,this.cdr=cdr,this.destroy$=destroy$,this.codeSample="\n    // 1) Import service throught DI\n    // In Constructor\n    constructor(private viewTransitionService: ViewTransitionService) {}\n    // or with inject (Angular 14+)\n    private service = inject(ViewTransitionService);\n    \n    // 2) Call startViewTransition method and pass callback that would change the DOM\n    private showMyComponent(): void {\n        this.viewTransitionService.startViewTransition(() => {\n            this.showMyComponent = true;\n            // You might want to call detectChanges to update the DOM inside startViewTransition callback\n            this.cdr.detectChanges();\n        }).subscribe();\n    }\n",this.data=PHOTOS,this.activeIndex$=new cjs.BehaviorSubject(-1),this.detailInfo$=new cjs.BehaviorSubject(void 0)}open(index){this.activeIndex$.next(index),this.viewTransitionService.startViewTransition(()=>{this.detailInfo$.next(this.data[index]),this.cdr.detectChanges()}).pipe((0,cjs.takeUntil)(this.destroy$)).subscribe()}close(){this.viewTransitionService.startViewTransition(()=>{this.detailInfo$.next(void 0),this.cdr.detectChanges(),this.activeIndex$.next(-1)}).pipe((0,cjs.takeUntil)(this.destroy$)).subscribe()}}__name(ViewTransitionPageComponent,"ViewTransitionPageComponent"),ViewTransitionPageComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ViewTransitionPageComponent,deps:[{token:ViewTransitionService},{token:core.ChangeDetectorRef},{token:taiga_ui_cdk_services.a3}],target:core.\u0275\u0275FactoryTarget.Component}),ViewTransitionPageComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.17",type:ViewTransitionPageComponent,selector:"view-transition-page",providers:[taiga_ui_cdk_services.a3],ngImport:core,template:'<h2>How to use</h2>\n<p>\n    Usage is pretty simple: just import service in your component and call\n    <code>startViewTransition</code>\n    on it.\n</p>\n<pre><code [highlight]="codeSample" [languages]="[\'ts\']"></code></pre>\n<h2>Basic example</h2>\n\n<ng-container *tuiLet="{detailInfo: detailInfo$ | async, activeIndex: activeIndex$ | async} as context">\n    <div\n        *ngIf="!context.detailInfo"\n        class="photos"\n    >\n        <div\n            *ngFor="let item of data; let index = index"\n            class="photo"\n            (click)="open(index)"\n        >\n            <span class="author">\n                Photo by\n                <a\n                    target="_blank"\n                    [href]="item.url"\n                >\n                    {{ item.author }}\n                </a>\n            </span>\n            <img\n                [src]="item.src"\n                [style.viewTransitionName]="context.activeIndex === index ? \'expandable-image\' : null"\n            />\n        </div>\n    </div>\n\n    <div\n        *ngIf="context.detailInfo"\n        class="expanded-photo"\n    >\n        <img\n            [src]="context.detailInfo.src"\n            (click)="close()"\n        />\n    </div>\n</ng-container>\n\n<a\n    href="https://www.pexels.com"\n    target="_blank"\n    tuiLink\n>\n    Photos provided by Pexels\n</a>\n',styles:[":host{display:flex;align-items:center;flex-direction:column}.photos{display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;grid-gap:1rem;gap:1rem;margin:1rem 0}.photo{width:12rem;display:flex;flex-direction:column;align-items:center;cursor:pointer}.photo .author{margin-bottom:.5rem}.photo .author a:hover{text-decoration:underline}.photo img{display:block;width:100%;border-radius:.5rem;transition:transform .2s}.photo img:hover{transform:scale(1.05)}.expanded-photo{margin:0 auto 1rem;width:20rem;display:flex;cursor:pointer}.expanded-photo img{display:block;view-transition-name:expandable-image;border-radius:1rem;box-shadow:0 12px 36px #0003;width:100%}\n"],components:[{type:taiga_ui_core_components_link.V,selector:"a[tuiLink], button[tuiLink]",inputs:["pseudo","icon","iconAlign","iconRotated","mode"],exportAs:["tuiLink"]}],directives:[{type:ngx_highlightjs.y$,selector:"[highlight]",inputs:["highlight","languages","lineNumbers"],outputs:["highlighted"]},{type:taiga_ui_cdk_directives_let.Ls,selector:"[tuiLet]",inputs:["tuiLet"]},{type:common.O5,selector:"[ngIf]",inputs:["ngIf","ngIfThen","ngIfElse"]},{type:common.sg,selector:"[ngFor][ngForOf]",inputs:["ngForOf","ngForTrackBy","ngForTemplate"]}],pipes:{async:common.Ov},changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ViewTransitionPageComponent,decorators:[{type:core.Component,args:[{selector:"view-transition-page",templateUrl:"./view-transition-page.component.html",styleUrls:["./view-transition-page.component.less"],changeDetection:core.ChangeDetectionStrategy.OnPush,providers:[taiga_ui_cdk_services.a3]}]}],ctorParameters:function(){return[{type:ViewTransitionService},{type:core.ChangeDetectorRef},{type:taiga_ui_cdk_services.a3}]}});var router=__webpack_require__(3984);class ViewTransitionPageModule{}__name(ViewTransitionPageModule,"ViewTransitionPageModule"),ViewTransitionPageModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ViewTransitionPageModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),ViewTransitionPageModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ViewTransitionPageModule,declarations:[ViewTransitionPageComponent],imports:[common.ez,ngx_highlightjs._l,taiga_ui_core_components_link.j,taiga_ui_cdk_directives_let.WD,router.Bz]}),ViewTransitionPageModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ViewTransitionPageModule,imports:[[common.ez,ngx_highlightjs._l,taiga_ui_core_components_link.j,taiga_ui_cdk_directives_let.WD,router.Bz.forChild([{path:"",component:ViewTransitionPageComponent}])]]}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ViewTransitionPageModule,decorators:[{type:core.NgModule,args:[{imports:[common.ez,ngx_highlightjs._l,taiga_ui_core_components_link.j,taiga_ui_cdk_directives_let.WD,router.Bz.forChild([{path:"",component:ViewTransitionPageComponent}])],declarations:[ViewTransitionPageComponent]}]}]})}};