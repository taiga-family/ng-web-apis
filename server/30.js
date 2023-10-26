"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=30,exports.ids=[30],exports.modules={8030:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GeolocationPageModule:()=>GeolocationPageModule});var core=__webpack_require__(74788);var src=__webpack_require__(96247),platform_browser=__webpack_require__(91211),taiga_ui_core_components_button=__webpack_require__(12628),taiga_ui_core_components_loader=__webpack_require__(40719),ngx_highlightjs=__webpack_require__(53867),common=__webpack_require__(12057);class GeolocationPageComponent{constructor(geolocation$,sanitizer){this.geolocation$=geolocation$,this.sanitizer=sanitizer,this.watch=!1,this.sample="import {GeolocationService} from '@ng-web-apis/geolocation';\n\n// ...\n\nconstructor(private readonly geolocation$: GeolocationService) {}\n\ngetPosition() {\n  geolocation$.subscribe((position) => {\n     doSomethingWithPosition(position);\n  });\n}",this.sampleAsync='<app-component-using-position\n  [position]="geolocation$ | async"\n></app-component-using-position>'}getUrl({coords}){const{longitude,latitude}=coords;return this.sanitizer.bypassSecurityTrustResourceUrl(`//www.openstreetmap.org/export/embed.html?bbox=${longitude-.005},${latitude-.005},${longitude+.005},${latitude+.005}&marker=${latitude},${longitude}&layer=mapnik`)}}__name(GeolocationPageComponent,"GeolocationPageComponent"),GeolocationPageComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:GeolocationPageComponent,deps:[{token:src._1},{token:platform_browser.H7}],target:core.\u0275\u0275FactoryTarget.Component}),GeolocationPageComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.17",type:GeolocationPageComponent,selector:"geolocation-page",ngImport:core,template:'<strong>Angular</strong>\ndoes not have any built-in instruments to use\n<strong>Geolocation API</strong>\n. This is an\n<code>Observable</code>\nbased abstraction over\n<strong>Geolocation API</strong>\nto use with\n<strong>Angular</strong>\n\n<h2>How to use</h2>\n<p>\n    Usage is pretty simple: just import service in your component and subscribe to it. Service extends\n    <code>Observable</code>\n    and will emit the\n    <code>Position</code>\n    object.\n</p>\n\n<pre><code [highlight]="sample"></code></pre>\n\n<p>You also can use async pipe</p>\n\n<pre><code [highlight]="sampleAsync"></code></pre>\n\n<h2>Single position</h2>\n<p>\n    If you need to get position just once and stop observing user location, you can subscribe to\n    <code>geolocation$</code>\n    and use\n    <code>take(1)</code>\n    RxJS operator. Service is cold, meaning if there are no Subscribers, it doesn\'t track position\n</p>\n\n<button\n    *ngIf="!watch"\n    appearance="secondary"\n    tuiButton\n    (click)="watch = true"\n>\n    Get my position!\n</button>\n\n<ng-container *ngIf="watch">\n    <iframe\n        *ngIf="geolocation$ | async as position; else loading"\n        [src]="getUrl(position)"\n    ></iframe>\n    <ng-template #loading>\n        <tui-loader></tui-loader>\n    </ng-template>\n</ng-container>\n',styles:[":host{display:block;max-width:600px;margin:0 auto;line-height:1.5;font-size:1.1em}button{margin:0 auto;display:block}iframe{width:100%;height:20rem}\n"],components:[{type:taiga_ui_core_components_button.v0,selector:"button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]",inputs:["appearance","disabled","icon","iconRight","shape","showLoader","size"]},{type:taiga_ui_core_components_loader.kM,selector:"tui-loader",inputs:["size","inheritColor","overlay","textContent","showLoader"]}],directives:[{type:ngx_highlightjs.y$,selector:"[highlight]",inputs:["highlight","languages","lineNumbers"],outputs:["highlighted"]},{type:common.O5,selector:"[ngIf]",inputs:["ngIf","ngIfThen","ngIfElse"]}],pipes:{async:common.Ov},changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:GeolocationPageComponent,decorators:[{type:core.Component,args:[{selector:"geolocation-page",templateUrl:"./geolocation-page.component.html",styleUrls:["./geolocation-page.component.less"],changeDetection:core.ChangeDetectionStrategy.OnPush}]}],ctorParameters:function(){return[{type:src._1},{type:platform_browser.H7}]}});var router=__webpack_require__(3984);class GeolocationPageModule{}__name(GeolocationPageModule,"GeolocationPageModule"),GeolocationPageModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:GeolocationPageModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),GeolocationPageModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:GeolocationPageModule,declarations:[GeolocationPageComponent],imports:[common.ez,ngx_highlightjs._l,taiga_ui_core_components_button.fN,taiga_ui_core_components_loader.dS,router.Bz]}),GeolocationPageModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:GeolocationPageModule,imports:[[common.ez,ngx_highlightjs._l,taiga_ui_core_components_button.fN,taiga_ui_core_components_loader.dS,router.Bz.forChild([{path:"",component:GeolocationPageComponent}])]]}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:GeolocationPageModule,decorators:[{type:core.NgModule,args:[{imports:[common.ez,ngx_highlightjs._l,taiga_ui_core_components_button.fN,taiga_ui_core_components_loader.dS,router.Bz.forChild([{path:"",component:GeolocationPageComponent}])],declarations:[GeolocationPageComponent]}]}]})}};