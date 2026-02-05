import{b as M,c as $}from"./chunk-GUAY7ENF.js";import{b as T}from"./chunk-7Y3I4S3Z.js";import{e as D}from"./chunk-PCT2X63S.js";import"./chunk-QAYQBKTV.js";import{i as L,l as A}from"./chunk-X37QOLRV.js";import{Ac as _,Bb as C,Bc as E,Hc as g,I as w,Ic as h,Jc as f,Oc as u,Pb as m,Pc as v,Rb as p,Wb as b,Xb as e,Yb as a,Zb as s,ea as y,i as x,jb as n,lc as d,pa as c,q as P,zc as t}from"./chunk-KG2R5REB.js";import"./chunk-GAL4ENT6.js";var W=`import { WaPermissionsService } from '@ng-web-apis/permissions';

@Component({
  selector: 'main',
  template: \`
    <h2>Geolocation state: {{ geolocationState$ | async }}</h2>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  geolocationState$ = this.permissionsService.state('geolocation');

  constructor(
    private readonly permissionsService: WaPermissionsService,
  ) {}
}
`;function I(i,r){if(i&1&&(e(0,"div"),t(1," Unfortunately we could not show what the code snippet above would render due to an error: "),s(2,"br"),e(3,"b"),t(4),a()()),i&2){d();let o=f(6);n(4),_(o)}}function N(i,r){if(i&1&&(e(0,"div")(1,"p"),t(2,"The sample above would render the following:"),a(),s(3,"hr"),e(4,"h2",1),t(5),a(),s(6,"hr"),e(7,"p"),t(8,"Go ahead and change your browser Location permission as shown below to see this change reflected above."),a(),e(9,"div",1),s(10,"img",2),a()()),i&2){d();let o=f(8);n(5),E("Geolocation state: ",o)}}var S=class i{navigator=c(D);error$=new x(null);basicSample=W;geolocationState$=c(T).state("geolocation").pipe(y(r=>{r==="prompt"&&(alert("After you acknowledge this message the browser will ask your permission to allow location access!"),this.navigator.geolocation.getCurrentPosition(()=>{}))}),w(r=>(this.error$.next(r.message),P(null))));static \u0275fac=function(o){return new(o||i)};static \u0275cmp=C({type:i,selectors:[["permissions-page"]],decls:12,vars:9,consts:[[3,"highlight"],[1,"align-center"],["alt","Click on 'View site information' icon next to the address bar and change selected permission for Location","src","assets/change-permissions-instructions.jpg"]],template:function(o,l){if(o&1&&(t(0,`The following example shows basic usage of
`),e(1,"code"),t(2,"WaPermissionsService"),a(),t(3,`
: `),e(4,"pre"),s(5,"code",0),a(),g(6),u(7,"async"),g(8),u(9,"async"),m(10,I,5,1,"div"),m(11,N,11,1,"div")),o&2){n(5),b("highlight",l.basicSample),n();let k=h(v(7,3,l.error$));n(2);let G=h(v(9,6,l.geolocationState$));n(2),p(k?10:-1),n(),p(G?11:-1)}},dependencies:[A,$,M,L],styles:["[_nghost-%COMP%]{display:block;max-inline-size:37.5rem;margin:0 auto}"],changeDetection:0})};export{S as default};
