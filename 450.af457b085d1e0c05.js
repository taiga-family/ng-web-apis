"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[450],{3450:(y,l,s)=>{s.r(l),s.d(l,{default:()=>S});var i=s(1423),r=s(6610),e=s(2978),m=s(7675),h=s(2018),g=s(9020),p=s(5981),d=s(7236),f=s(4526),v=s(756);function P(o,n){if(1&o&&(e.j41(0,"div"),e.EFF(1," Unfortunately we could not show what the code snippet above would render due to an error: "),e.nrm(2,"br"),e.j41(3,"b"),e.EFF(4),e.k0s()()),2&o){const a=n.ngIf;e.R7$(4),e.JRh(a)}}function F(o,n){if(1&o&&(e.j41(0,"div")(1,"p"),e.EFF(2,"The sample above would render the following:"),e.k0s(),e.nrm(3,"hr"),e.j41(4,"h2",2),e.EFF(5),e.k0s(),e.nrm(6,"hr"),e.j41(7,"p"),e.EFF(8,"Go ahead and change your browser Location permission as shown below to see this change reflected above."),e.k0s(),e.j41(9,"div",2),e.nrm(10,"img",3),e.k0s()()),2&o){const a=n.ngIf;e.R7$(5),e.SpI("Geolocation state: ",a,"")}}const S=(()=>{var o;class n{constructor(){(0,i.A)(this,"navigator",(0,e.WQX)(m.Rp)),(0,i.A)(this,"error$",new p.t(null)),(0,i.A)(this,"basicSample","import { PermissionsService } from '@ng-web-apis/permissions';\n\n@Component({\n  selector: 'main',\n  template: `\n    <h2>Geolocation state: {{ geolocationState$ | async }}</h2>\n  `,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class App {\n  geolocationState$ = this.permissionsService.state('geolocation');\n\n  constructor(\n    private readonly permissionsService: PermissionsService,\n  ) {}\n}\n"),(0,i.A)(this,"geolocationState$",(0,e.WQX)(h.Kn).state("geolocation").pipe((0,d.M)(t=>{"prompt"===t&&(alert("After you acknowledge this message the browser will ask your permission to allow location access!"),this.navigator.geolocation.getCurrentPosition(()=>{}))}),(0,f.W)(t=>(this.error$.next(t.message),(0,v.of)(null)))))}}return o=n,(0,i.A)(n,"\u0275fac",function(t){return new(t||o)}),(0,i.A)(n,"\u0275cmp",e.VBU({type:o,selectors:[["permissions-page"]],standalone:!0,features:[e.aNF],decls:10,vars:7,consts:[[3,"highlight"],[4,"ngIf"],[1,"align-center"],["alt","Click on 'View site information' icon next to the address bar and change selected permission for Location","src","assets/change-permissions-instructions.jpg"]],template:function(t,c){1&t&&(e.EFF(0,"The following example shows basic usage of\n"),e.j41(1,"code"),e.EFF(2,"PermissionsService"),e.k0s(),e.EFF(3,"\n: "),e.j41(4,"pre"),e.nrm(5,"code",0),e.k0s(),e.DNE(6,P,5,1,"div",1),e.nI1(7,"async"),e.DNE(8,F,11,1,"div",1),e.nI1(9,"async")),2&t&&(e.R7$(5),e.Y8G("highlight",c.basicSample),e.R7$(1),e.Y8G("ngIf",e.bMT(7,3,c.error$)),e.R7$(2),e.Y8G("ngIf",e.bMT(9,5,c.geolocationState$)))},dependencies:[r.MD,r.bT,r.Jj,g.fw,g.f4],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}"],changeDetection:0})),n})()}}]);