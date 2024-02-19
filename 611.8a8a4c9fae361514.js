"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[611],{7992:(E,d,r)=>{r.r(d),r.d(d,{default:()=>x});var s=r(1423),c=r(6556),g=r(240),h=r(8807),t=r(9508),f=r(687),v=r(2865),b=r(2351);function P(a,o){if(1&a){const e=t.RV6();t.j41(0,"div",8),t.bIt("click",function(){const m=t.eBV(e).$implicit,l=t.XpG();return t.Njj(l.addToShippingCard(m))}),t.nrm(1,"img",9),t.j41(2,"label",10),t.EFF(3),t.k0s(),t.j41(4,"p",11),t.EFF(5),t.k0s()()}if(2&a){const e=o.$implicit;t.R7$(1),t.Y8G("src",e.image,t.B4B),t.R7$(2),t.JRh(e.label),t.R7$(2),t.SpI("",e.price," \u20bd")}}function w(a,o){if(1&a&&(t.j41(0,"div",13),t.EFF(1),t.k0s()),2&a){const e=o.$implicit;t.Y8G("paymentAmount",e.amount)("paymentLabel",e.label),t.R7$(1),t.E5c(" ",e.label," (",e.amount.value," ",e.amount.currency,") ")}}function F(a,o){if(1&a&&(t.qex(0),t.DNE(1,w,2,5,"div",12),t.bVm()),2&a){const e=t.XpG();t.R7$(1),t.Y8G("ngForOf",e.shippingCart)}}function C(a,o){1&a&&t.EFF(0,"Nothing added")}class p{constructor(o,e,n){(0,s.A)(this,"image",void 0),(0,s.A)(this,"label",void 0),(0,s.A)(this,"price",void 0),this.image=o,this.label=e,this.price=n}get amount(){return{currency:"RUB",value:String(this.price)}}}let k=(()=>{var a;class o{constructor(){(0,s.A)(this,"items",[new p("https://image.flaticon.com/icons/svg/1868/1868178.svg","Matryoshka",50),new p("https://image.flaticon.com/icons/svg/820/820158.svg","Balalaika",100),new p("https://image.flaticon.com/icons/svg/1868/1868169.svg","Ushanka",70),new p("https://image.flaticon.com/icons/svg/1868/1868226.svg","Kokoshnik",70),new p("https://image.flaticon.com/icons/svg/1868/1868276.svg","Borscht",10),new p("https://image.flaticon.com/icons/svg/1868/1868380.svg","Sputnik",1e3)]),(0,s.A)(this,"shippingCart",[])}get totalSum(){return this.shippingCart.reduce((n,i)=>n+i.price,0)}get total(){return{label:"Total",amount:{currency:"RUB",value:String(this.totalSum)}}}addToShippingCard(n){this.shippingCart=[...this.shippingCart,n]}onPayment(n){console.info("payment response:",n),this.clearShippingCart(),n.complete()}onPaymentError(n){console.info("payment error:",n),this.clearShippingCart()}clearShippingCart(){this.shippingCart=[]}}return a=o,(0,s.A)(o,"\u0275fac",function(n){return new(n||a)}),(0,s.A)(o,"\u0275cmp",t.VBU({type:a,selectors:[["app-shop"]],standalone:!0,features:[t.aNF],decls:15,vars:6,consts:[[1,"items"],["class","item",3,"click",4,"ngFor","ngForOf"],["waPayment","",1,"shopping-cart",3,"paymentTotal"],[1,"sticky"],[4,"ngIf","ngIfElse"],["noItems",""],[1,"total"],[1,"buy-button",3,"disabled","waPaymentError","waPaymentSubmit"],[1,"item",3,"click"],["alt","item","width","64",1,"item-image",3,"src"],[1,"item-label"],[1,"item-price"],["waPaymentItem","","class","shopping-card-item",3,"paymentAmount","paymentLabel",4,"ngFor","ngForOf"],["waPaymentItem","",1,"shopping-card-item",3,"paymentAmount","paymentLabel"]],template:function(n,i){if(1&n&&(t.j41(0,"div",0),t.DNE(1,P,6,3,"div",1),t.k0s(),t.j41(2,"div",2)(3,"div",3)(4,"h4"),t.EFF(5,"Shopping Cart"),t.k0s(),t.DNE(6,F,2,1,"ng-container",4),t.DNE(7,C,1,0,"ng-template",null,5,t.C5r),t.j41(9,"div",6)(10,"b"),t.EFF(11,"Total:"),t.k0s(),t.EFF(12),t.k0s(),t.j41(13,"button",7),t.bIt("waPaymentError",function(l){return i.onPaymentError(l)})("waPaymentSubmit",function(l){return i.onPayment(l)}),t.EFF(14," Buy "),t.k0s()()()),2&n){const m=t.sdS(8);t.R7$(1),t.Y8G("ngForOf",i.items),t.R7$(1),t.Y8G("paymentTotal",i.total),t.R7$(4),t.Y8G("ngIf",i.shippingCart.length>0)("ngIfElse",m),t.R7$(6),t.SpI(" ",i.totalSum," \u20bd "),t.R7$(1),t.Y8G("disabled",0===i.shippingCart.length)}},dependencies:[c.Sq,g.Kt,f.w,v.N,b.o,c.bT],styles:["[_nghost-%COMP%]{display:flex}.items[_ngcontent-%COMP%]{flex:2;display:flex;flex-wrap:wrap}@media (max-width: 800px){.items[_ngcontent-%COMP%]{max-width:50%;justify-content:flex-end}}.item[_ngcontent-%COMP%]{width:150px;margin:12px;padding:16px 16px 0;display:flex;flex-direction:column;align-items:center;border:1px solid gainsboro;border-radius:8px;cursor:pointer;transition:box-shadow .3s}.item[_ngcontent-%COMP%]:hover{box-shadow:0 12px 36px #0003}.item-label[_ngcontent-%COMP%]{cursor:inherit}.item-price[_ngcontent-%COMP%]{font-size:smaller}.item-image[_ngcontent-%COMP%]{margin-bottom:12px}.sticky[_ngcontent-%COMP%]{position:sticky;top:16px}.total[_ngcontent-%COMP%]{margin-top:16px}.shopping-card-item[_ngcontent-%COMP%]{margin-top:4px;margin-bottom:4px}.shopping-cart[_ngcontent-%COMP%]{flex:1;max-width:168px;background-color:#f0f0f0;padding:0 16px;border-radius:8px}.buy-button[_ngcontent-%COMP%]{width:100%;margin-top:20px;margin-bottom:8px;background-color:#fff;border:1px solid #ccc;border-radius:4px;padding:4px;cursor:pointer}.buy-button[_ngcontent-%COMP%]:disabled{cursor:default;opacity:.56}"],changeDetection:0})),o})(),x=(()=>{var a;class o{constructor(){(0,s.A)(this,"samples",{service:"import {PaymentRequestService} from '@ng-web-apis/payment-request';\n\n// ...\n\nconstructor(private readonly paymentRequest: PaymentRequestService) {}\n\npay(details: PaymentDetailsInit) {\n    this.paymentRequest.request(details).then(\n        response => {\n            response.complete();\n        },\n        error => {},\n    );\n}",directives:'<div\n  waPayment\n  [paymentTotal]="total"\n>\n  <div\n    waPaymentItem\n    [paymentLabel]="label"\n    [paymentAmount]="amount"\n  >\n    {{label}} ({{amount}})\n  </div>\n  <button\n    (waPaymentSubmit)="onPayment($event)"\n    (waPaymentError)="onError($event)"\n  >\n    Buy\n  </button>\n</div>'})}}return a=o,(0,s.A)(o,"\u0275fac",function(n){return new(n||a)}),(0,s.A)(o,"\u0275cmp",t.VBU({type:a,selectors:[["payment-request-page"]],standalone:!0,features:[t.Jv_([{provide:g.uq,useValue:[{supportedMethods:"https://apple.com/apple-pay",data:{version:3,merchantIdentifier:"merchant.com.example",merchantCapabilities:["supports3DS","supportsCredit","supportsDebit"],supportedNetworks:["amex","discover","masterCard","visa"],countryCode:"US"}},{supportedMethods:"basic-card"}]}]),t.aNF],decls:45,vars:3,consts:[[1,"wrapper"],["href","https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API","rel","noreferrer","target","_blank"],[3,"highlight"],[1,"how-it-works"],[1,"how-it-works-text"],[1,"how-it-works-point"],["href","https://github.com/taiga-family/ng-web-apis/tree/main/libs/payment-request#wapayment","rel","noreferrer","target","_blank"],["href","https://www.w3.org/TR/payment-request/#paymentitem-dictionary","rel","noreferrer","target","_blank"],["href","https://github.com/taiga-family/ng-web-apis/tree/main/libs/payment-request#waPaymentItem","rel","noreferrer","target","_blank"],["href","https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse","rel","noreferrer","target","_blank"],["href","https://github.com/taiga-family/ng-web-apis/tree/main/libs/payment-request#waPaymentSubmit","rel","noreferrer","target","_blank"],[1,"directive-sample"]],template:function(n,i){1&n&&(t.j41(0,"div",0)(1,"p"),t.EFF(2," Angular does not have any abstractions over "),t.j41(3,"a",1),t.EFF(4," PaymentRequest API "),t.k0s(),t.EFF(5," . This library provides you two ways to use this API with Angular of 6+ version. "),t.k0s(),t.j41(6,"h3"),t.EFF(7,"As an Angular service:"),t.k0s(),t.j41(8,"pre")(9,"code",2),t.EFF(10),t.k0s()(),t.j41(11,"h3"),t.EFF(12,"As a set of directives:"),t.k0s(),t.j41(13,"p"),t.EFF(14,"Click to add some items to a shopping cart:"),t.k0s(),t.nrm(15,"app-shop"),t.j41(16,"h4"),t.EFF(17,"How it works:"),t.k0s(),t.j41(18,"div",3)(19,"div",4)(20,"p",5)(21,"a",6),t.EFF(22," waPayment "),t.k0s(),t.EFF(23," directive defines a scope for a\xa0new payment and needs "),t.j41(24,"a",7),t.EFF(25," PaymentItem "),t.k0s(),t.EFF(26," object with information about a label and a\xa0total sum of the payment "),t.k0s(),t.j41(27,"p",5),t.EFF(28," Each item of the shipping cart is a\xa0 "),t.j41(29,"a",8),t.EFF(30," waPaymentItem "),t.k0s(),t.EFF(31," directive. It\xa0is\xa0a\xa0declarative "),t.j41(32,"a",7),t.EFF(33," PaymentItem "),t.k0s(),t.EFF(34," for your Payment "),t.k0s(),t.j41(35,"p",5),t.EFF(36," Click on the button starts a\xa0PaymentRequest modal in your browser that returns "),t.j41(37,"a",9),t.EFF(38," PaymentResponse "),t.k0s(),t.EFF(39," or an error. It works due a\xa0 "),t.j41(40,"a",10),t.EFF(41," waPaymentSubmit "),t.k0s(),t.EFF(42," directive. "),t.k0s()(),t.j41(43,"pre",11),t.nrm(44,"code",2),t.k0s()()()),2&n&&(t.R7$(9),t.Y8G("highlight",i.samples.service),t.R7$(1),t.SpI("\n    ",i.samples.service,"\n"),t.R7$(34),t.Y8G("highlight",i.samples.directives))},dependencies:[c.MD,h.fw,h.f4,g.Kt,k],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}.wrapper[_ngcontent-%COMP%]{padding:0 10px}.how-it-works[_ngcontent-%COMP%]{position:relative;display:flex;flex-wrap:wrap}.how-it-works-point[_ngcontent-%COMP%]{margin-top:26px;margin-bottom:26px}.how-it-works-text[_ngcontent-%COMP%]{flex:1;min-width:300px;margin:8px}.directive-sample[_ngcontent-%COMP%]{display:block;flex:1;margin:8px;width:330px}.directive-sample-arrow[_ngcontent-%COMP%]{position:absolute;right:95px;top:-42px}"],changeDetection:0})),o})()}}]);