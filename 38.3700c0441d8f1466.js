"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38],{6038:(k,g,e)=>{e.r(g),e.d(g,{default:()=>y});var c=e(1423),r=e(6556),o=e(9508),F=e(9340),h=e(7049),p=e(5245),u=e(390),m=e(8807);function E(t,s){if(1&t){const a=o.RV6();o.j41(0,"button",3),o.bIt("click",function(){o.eBV(a);const i=o.XpG();return o.Njj(i.watch=!0)}),o.EFF(1," Get my position!\n"),o.k0s()}}function b(t,s){if(1&t&&o.nrm(0,"iframe",6),2&t){const a=s.ngIf,n=o.XpG(2);o.Y8G("src",n.getUrl(a),o.f$h)}}function j(t,s){1&t&&o.nrm(0,"tui-loader")}function G(t,s){if(1&t&&(o.qex(0),o.DNE(1,b,1,1,"iframe",4),o.nI1(2,"async"),o.DNE(3,j,1,0,"ng-template",null,5,o.C5r),o.bVm()),2&t){const a=o.sdS(4),n=o.XpG();o.R7$(1),o.Y8G("ngIf",o.bMT(2,2,n.geolocation$))("ngIfElse",a)}}let y=(()=>{var t;class s{constructor(){(0,c.A)(this,"sanitizer",(0,o.WQX)(F.up)),(0,c.A)(this,"watch",!1),(0,c.A)(this,"sample","import {GeolocationService} from '@ng-web-apis/geolocation';\n\n// ...\n\nconstructor(private readonly geolocation$: GeolocationService) {}\n\ngetPosition() {\n  geolocation$.subscribe((position) => {\n     doSomethingWithPosition(position);\n  });\n}"),(0,c.A)(this,"sampleAsync",'<app-component-using-position\n  [position]="geolocation$ | async"\n></app-component-using-position>'),(0,c.A)(this,"geolocation$",(0,o.WQX)(h.Ou))}getUrl({coords:n}){const{longitude:i,latitude:l}=n;return this.sanitizer.bypassSecurityTrustResourceUrl(`//www.openstreetmap.org/export/embed.html?bbox=${i-.005},${l-.005},${i+.005},${l+.005}&marker=${l},${i}&layer=mapnik`)}}return t=s,(0,c.A)(s,"\u0275fac",function(n){return new(n||t)}),(0,c.A)(s,"\u0275cmp",o.VBU({type:t,selectors:[["geolocation-page"]],standalone:!0,features:[o.aNF],decls:42,vars:4,consts:[[3,"highlight"],["appearance","secondary","tuiButton","",3,"click",4,"ngIf"],[4,"ngIf"],["appearance","secondary","tuiButton","",3,"click"],["alt","url","title","geolocation",3,"src",4,"ngIf","ngIfElse"],["loading",""],["alt","url","title","geolocation",3,"src"]],template:function(n,i){1&n&&(o.j41(0,"strong"),o.EFF(1,"Angular"),o.k0s(),o.EFF(2,"\ndoes not have any built-in instruments to use\n"),o.j41(3,"strong"),o.EFF(4,"Geolocation API"),o.k0s(),o.EFF(5,"\n. This is an\n"),o.j41(6,"code"),o.EFF(7,"Observable"),o.k0s(),o.EFF(8,"\nbased abstraction over\n"),o.j41(9,"strong"),o.EFF(10,"Geolocation API"),o.k0s(),o.EFF(11,"\nto use with\n"),o.j41(12,"strong"),o.EFF(13,"Angular"),o.k0s(),o.j41(14,"h2"),o.EFF(15,"How to use"),o.k0s(),o.j41(16,"p"),o.EFF(17," Usage is pretty simple: just import service in your component and subscribe to it. Service extends "),o.j41(18,"code"),o.EFF(19,"Observable"),o.k0s(),o.EFF(20," and will emit the "),o.j41(21,"code"),o.EFF(22,"Position"),o.k0s(),o.EFF(23," object.\n"),o.k0s(),o.j41(24,"pre"),o.nrm(25,"code",0),o.k0s(),o.j41(26,"p"),o.EFF(27,"You also can use async pipe"),o.k0s(),o.j41(28,"pre"),o.nrm(29,"code",0),o.k0s(),o.j41(30,"h2"),o.EFF(31,"Single position"),o.k0s(),o.j41(32,"p"),o.EFF(33," If you need to get position just once and stop observing user location, you can subscribe to "),o.j41(34,"code"),o.EFF(35,"geolocation$"),o.k0s(),o.EFF(36," and use "),o.j41(37,"code"),o.EFF(38,"take(1)"),o.k0s(),o.EFF(39," RxJS operator. Service is cold, meaning if there are no Subscribers, it doesn't track position\n"),o.k0s(),o.DNE(40,E,2,0,"button",1),o.DNE(41,G,5,4,"ng-container",2)),2&n&&(o.R7$(25),o.Y8G("highlight",i.sample),o.R7$(4),o.Y8G("highlight",i.sampleAsync),o.R7$(11),o.Y8G("ngIf",!i.watch),o.R7$(1),o.Y8G("ngIf",i.watch))},dependencies:[r.MD,r.bT,r.Jj,p.Pv,p.SM,u.Yc,u.jT,m.fw,m.f4],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto;line-height:1.5;font-size:1.1em}button[_ngcontent-%COMP%]{margin:0 auto;display:block}iframe[_ngcontent-%COMP%]{width:100%;height:20rem}"],changeDetection:0})),s})()}}]);