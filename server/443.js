"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=443,exports.ids=[443],exports.modules={24443:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MutationObserverPageModule:()=>MutationObserverPageModule});var core=__webpack_require__(74788),router=__webpack_require__(3984),common=__webpack_require__(12057),fesm2015_forms=__webpack_require__(24751),src=__webpack_require__(1367),taiga_ui_core_components_button=__webpack_require__(12628),taiga_ui_core_components_group=__webpack_require__(95974),taiga_ui_core_directives_textfield_controller=__webpack_require__(441),taiga_ui_kit_components_input=__webpack_require__(21673),mutation_observer_directive=__webpack_require__(76091);class MutationObserverPageComponent{constructor(){this.toggled=!1,this.disabled=null,this.title="title",this.text="text",this.ignored="Ignored aria-label attribute"}toggleDOM(){this.toggled=!this.toggled}toggleAttr(){this.disabled=!this.disabled||null}log(entries){console.info(entries)}}__name(MutationObserverPageComponent,"MutationObserverPageComponent"),MutationObserverPageComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverPageComponent,deps:[],target:core.\u0275\u0275FactoryTarget.Component}),MutationObserverPageComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.17",type:MutationObserverPageComponent,selector:"mutation-observer-page",ngImport:core,template:'<p tuiGroup>\n    <button\n        appearance="secondary"\n        size="m"\n        tuiButton\n        (click)="toggleDOM()"\n    >\n        Toggle DOM change\n    </button>\n    <button\n        appearance="secondary"\n        size="m"\n        tuiButton\n        (click)="toggleAttr()"\n    >\n        Toggle attribute\n    </button>\n</p>\n<p\n    tuiGroup\n    tuiTextfieldSize="m"\n    [tuiTextfieldLabelOutside]="true"\n>\n    <tui-input\n        aria-label="title"\n        [(ngModel)]="title"\n    ></tui-input>\n    <tui-input\n        aria-label="text"\n        [(ngModel)]="text"\n    ></tui-input>\n    <tui-input\n        aria-label="ignored"\n        [(ngModel)]="ignored"\n    ></tui-input>\n</p>\n<div\n    attributeFilter="title, disabled"\n    characterData\n    childList\n    subtree\n    class="observer"\n    [attr.aria-label]="ignored"\n    [attr.disabled]="disabled"\n    [title]="title"\n    (waMutationObserver)="log($event)"\n>\n    I am being observed for text changes, DOM changes and "title" and "disabled" attributes: {{ text }}\n    <div *ngIf="toggled; else default">I am dynamically added DOM element</div>\n    <ng-template #default>\n        <div>See console for logged mutations</div>\n    </ng-template>\n</div>\n',styles:[":host{display:block;max-width:600px;margin:0 auto}.observer{background:skyblue;border-radius:16px;padding:40px}\n"],components:[{type:taiga_ui_core_components_button.v0,selector:"button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]",inputs:["appearance","disabled","icon","iconRight","shape","showLoader","size"]},{type:taiga_ui_kit_components_input.K3,selector:"tui-input"}],directives:[{type:taiga_ui_core_components_group.gZ,selector:"[tuiGroup]:not(ng-container)",inputs:["orientation","adaptive","collapsed","rounded","size"]},{type:taiga_ui_core_directives_textfield_controller.sz,selector:"[tuiTextfieldSize]",inputs:["tuiTextfieldSize"]},{type:taiga_ui_core_directives_textfield_controller.xT,selector:"[tuiTextfieldLabelOutside]",inputs:["tuiTextfieldLabelOutside"]},{type:taiga_ui_kit_components_input.wU,selector:"tui-input"},{type:fesm2015_forms.JJ,selector:"[formControlName],[ngModel],[formControl]"},{type:fesm2015_forms.On,selector:"[ngModel]:not([formControlName]):not([formControl])",inputs:["name","disabled","ngModel","ngModelOptions"],outputs:["ngModelChange"],exportAs:["ngModel"]},{type:mutation_observer_directive.V,selector:"[waMutationObserver]",outputs:["waMutationObserver"],exportAs:["MutationObserver"]},{type:common.O5,selector:"[ngIf]",inputs:["ngIf","ngIfThen","ngIfElse"]}],changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverPageComponent,decorators:[{type:core.Component,args:[{selector:"mutation-observer-page",templateUrl:"./mutation-observer-page.component.html",styleUrls:["./mutation-observer-page.component.less"],changeDetection:core.ChangeDetectionStrategy.OnPush}]}]});class MutationObserverPageModule{}__name(MutationObserverPageModule,"MutationObserverPageModule"),MutationObserverPageModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverPageModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),MutationObserverPageModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverPageModule,declarations:[MutationObserverPageComponent],imports:[common.ez,fesm2015_forms.u5,src.NI,taiga_ui_core_components_button.fN,taiga_ui_core_components_group.n6,taiga_ui_kit_components_input.Qf,taiga_ui_core_directives_textfield_controller.cn,router.Bz]}),MutationObserverPageModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverPageModule,imports:[[common.ez,fesm2015_forms.u5,src.NI,taiga_ui_core_components_button.fN,taiga_ui_core_components_group.n6,taiga_ui_kit_components_input.Qf,taiga_ui_core_directives_textfield_controller.cn,router.Bz.forChild([{path:"",component:MutationObserverPageComponent}])]]}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverPageModule,decorators:[{type:core.NgModule,args:[{imports:[common.ez,fesm2015_forms.u5,src.NI,taiga_ui_core_components_button.fN,taiga_ui_core_components_group.n6,taiga_ui_kit_components_input.Qf,taiga_ui_core_directives_textfield_controller.cn,router.Bz.forChild([{path:"",component:MutationObserverPageComponent}])],declarations:[MutationObserverPageComponent]}]}]})},76091:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>MutationObserverDirective});var core=__webpack_require__(74788),mutation_observer_init=__webpack_require__(6348);function booleanAttribute(element,attribute){return null!==element.getAttribute(attribute)||void 0}function mutationObserverInitFactory({nativeElement}){const attributeFilter=nativeElement.getAttribute("attributeFilter");return{attributeFilter:null==attributeFilter?void 0:attributeFilter.split(",").map(attr=>attr.trim()),attributeOldValue:booleanAttribute(nativeElement,"attributeOldValue"),attributes:booleanAttribute(nativeElement,"attributes"),characterData:booleanAttribute(nativeElement,"characterData"),characterDataOldValue:booleanAttribute(nativeElement,"characterDataOldValue"),childList:booleanAttribute(nativeElement,"childList"),subtree:booleanAttribute(nativeElement,"subtree")}}__name(booleanAttribute,"booleanAttribute"),__name(mutationObserverInitFactory,"mutationObserverInitFactory");class MutationObserverDirective extends MutationObserver{constructor({nativeElement},config,_1,_2,_3,_4,_5,_6,_7){super(records=>{this.waMutationObserver.emit(records)}),this.waMutationObserver=new core.EventEmitter,this.observe(nativeElement,config)}ngOnDestroy(){this.disconnect()}}__name(MutationObserverDirective,"MutationObserverDirective"),MutationObserverDirective.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverDirective,deps:[{token:core.ElementRef},{token:mutation_observer_init.k},{token:"attributeFilter",attribute:!0},{token:"attributeOldValue",attribute:!0},{token:"attributes",attribute:!0},{token:"characterData",attribute:!0},{token:"characterDataOldValue",attribute:!0},{token:"childList",attribute:!0},{token:"subtree",attribute:!0}],target:core.\u0275\u0275FactoryTarget.Directive}),MutationObserverDirective.\u0275dir=core.\u0275\u0275ngDeclareDirective({minVersion:"12.0.0",version:"12.2.17",type:MutationObserverDirective,selector:"[waMutationObserver]",outputs:{waMutationObserver:"waMutationObserver"},providers:[{provide:mutation_observer_init.k,deps:[core.ElementRef],useFactory:mutationObserverInitFactory}],exportAs:["MutationObserver"],usesInheritance:!0,ngImport:core}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverDirective,decorators:[{type:core.Directive,args:[{selector:"[waMutationObserver]",exportAs:"MutationObserver",providers:[{provide:mutation_observer_init.k,deps:[core.ElementRef],useFactory:mutationObserverInitFactory}]}]}],ctorParameters:function(){return[{type:core.ElementRef,decorators:[{type:core.Inject,args:[core.ElementRef]}]},{type:void 0,decorators:[{type:core.Inject,args:[mutation_observer_init.k]}]},{type:void 0,decorators:[{type:core.Attribute,args:["attributeFilter"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["attributeOldValue"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["attributes"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["characterData"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["characterDataOldValue"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["childList"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["subtree"]}]}]},propDecorators:{waMutationObserver:[{type:core.Output}]}})},1367:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k2:()=>mutation_observer_init.k,NI:()=>MutationObserverModule,IM:()=>MutationObserverService});var mutation_observer_directive=__webpack_require__(76091),core=__webpack_require__(74788),cjs=__webpack_require__(72921),mutation_observer_init=__webpack_require__(6348);class MutationObserverService extends cjs.Observable{constructor({nativeElement},config){super(subscriber=>{const observer=new MutationObserver(records=>{subscriber.next(records)});return observer.observe(nativeElement,config),()=>{observer.disconnect()}})}}__name(MutationObserverService,"MutationObserverService"),MutationObserverService.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverService,deps:[{token:core.ElementRef},{token:mutation_observer_init.k}],target:core.\u0275\u0275FactoryTarget.Injectable}),MutationObserverService.\u0275prov=core.\u0275\u0275ngDeclareInjectable({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverService}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverService,decorators:[{type:core.Injectable}],ctorParameters:function(){return[{type:core.ElementRef,decorators:[{type:core.Inject,args:[core.ElementRef]}]},{type:void 0,decorators:[{type:core.Inject,args:[mutation_observer_init.k]}]}]}});class MutationObserverModule{}__name(MutationObserverModule,"MutationObserverModule"),MutationObserverModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),MutationObserverModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverModule,declarations:[mutation_observer_directive.V],exports:[mutation_observer_directive.V]}),MutationObserverModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverModule}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverModule,decorators:[{type:core.NgModule,args:[{declarations:[mutation_observer_directive.V],exports:[mutation_observer_directive.V]}]}]})},6348:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>MUTATION_OBSERVER_INIT});const MUTATION_OBSERVER_INIT=new(__webpack_require__(74788).InjectionToken)("MutationObserver config")}};