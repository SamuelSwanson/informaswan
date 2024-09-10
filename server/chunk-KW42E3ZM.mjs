import './polyfills.server.mjs';
import{$ as At,A as d,B as _,C as U,D as f,I as _t,L as yt,M as L,O as xt,P as wt,Q as It,R as kt,U as Dt,Y as Et,a as st,aa as Tt,b as dt,ba as Mt,c as H,d as ct,e as lt,f as mt,g as ut,h as pt,i as bt,j as ht,k as D,l as u,m as V,n as p,o as $,p as h,q as b,r as A,s as ft,t as gt,u as v,v as S,w as vt,x as r,y as s,z as l}from"./chunk-IWC6FJUK.mjs";import{a as C}from"./chunk-NDYDZJSS.mjs";var G;try{G=typeof Intl<"u"&&Intl.v8BreakIterator}catch{G=!1}var R=(()=>{let t=class t{constructor(n){this._platformId=n,this.isBrowser=this._platformId?wt(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||G)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(i){return new(i||t)(p(ft))},t.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var F;function ce(){if(F==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>F=!0}))}finally{F=F||!1}return F}function W(e){return ce()?e:!!e.capture}function Ct(e){return e.composedPath?e.composedPath()[0]:e.target}function St(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Z(e){return Array.isArray(e)?e:[e]}function K(e){return e instanceof A?e.nativeElement:e}var Rt=new Set,T,le=(()=>{let t=class t{constructor(n,i){this._platform=n,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ue}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&me(n,this._nonce),this._matchMedia(n)}};t.\u0275fac=function(i){return new(i||t)(p(R),p(gt,8))},t.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function me(e,t){if(!Rt.has(e))try{T||(T=document.createElement("style"),t&&T.setAttribute("nonce",t),T.setAttribute("type","text/css"),document.head.appendChild(T)),T.sheet&&(T.sheet.insertRule(`@media ${e} {body{ }}`,0),Rt.add(e))}catch(o){console.error(o)}}function ue(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var Nt=(()=>{let t=class t{constructor(n,i){this._mediaMatcher=n,this._zone=i,this._queries=new Map,this._destroySubject=new dt}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(n){return Ot(Z(n)).some(a=>this._registerQuery(a).mql.matches)}observe(n){let a=Ot(Z(n)).map(w=>this._registerQuery(w).observable),c=ct(a);return c=lt(c.pipe(ut(1)),c.pipe(pt(1),mt(0))),c.pipe(H(w=>{let I={matches:!1,breakpoints:{}};return w.forEach(({matches:k,query:m})=>{I.matches=I.matches||k,I.breakpoints[m]=k}),I}))}_registerQuery(n){if(this._queries.has(n))return this._queries.get(n);let i=this._mediaMatcher.matchMedia(n),c={observable:new st(w=>{let I=k=>this._zone.run(()=>w.next(k));return i.addListener(I),()=>{i.removeListener(I)}}).pipe(bt(i),H(({matches:w})=>({query:n,matches:w})),ht(this._destroySubject)),mql:i};return this._queries.set(n,c),c}};t.\u0275fac=function(i){return new(i||t)(p(le),p(S))},t.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Ot(e){return e.map(t=>t.split(",")).reduce((t,o)=>t.concat(o)).map(t=>t.trim())}function Pt(e){return e.buttons===0||e.detail===0}function Bt(e){let t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var M=function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e}(M||{}),jt="cdk-high-contrast-black-on-white",Lt="cdk-high-contrast-white-on-black",Y="cdk-high-contrast-active",Ht=(()=>{let t=class t{constructor(n,i){this._platform=n,this._document=i,this._breakpointSubscription=$(Nt).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return M.NONE;let n=this._document.createElement("div");n.style.backgroundColor="rgb(1,2,3)",n.style.position="absolute",this._document.body.appendChild(n);let i=this._document.defaultView||window,a=i&&i.getComputedStyle?i.getComputedStyle(n):null,c=(a&&a.backgroundColor||"").replace(/ /g,"");switch(n.remove(),c){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return M.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return M.BLACK_ON_WHITE}return M.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let n=this._document.body.classList;n.remove(Y,jt,Lt),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===M.BLACK_ON_WHITE?n.add(Y,jt):i===M.WHITE_ON_BLACK&&n.add(Y,Lt)}}};t.\u0275fac=function(i){return new(i||t)(p(R),p(L))},t.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var q=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b({type:t}),t.\u0275inj=u({});let e=t;return e})();function ve(){return!0}var _e=new V("mat-sanity-checks",{providedIn:"root",factory:ve}),g=(()=>{let t=class t{constructor(n,i,a){this._sanityChecks=i,this._document=a,this._hasDoneGlobalChecks=!1,n._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(n){return St()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[n]}};t.\u0275fac=function(i){return new(i||t)(p(Ht),p(_e,8),p(L))},t.\u0275mod=b({type:t}),t.\u0275inj=u({imports:[q,q]});let e=t;return e})();var it=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b({type:t}),t.\u0275inj=u({imports:[g,g]});let e=t;return e})(),x=function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e}(x||{}),X=class{constructor(t,o,n,i=!1){this._renderer=t,this.element=o,this.config=n,this._animationForciblyDisabledThroughCss=i,this.state=x.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},$t=W({passive:!0,capture:!0}),J=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let o=Ct(t);o&&this._events.get(t.type)?.forEach((n,i)=>{(i===o||i.contains(o))&&n.forEach(a=>a.handleEvent(t))})}}addHandler(t,o,n,i){let a=this._events.get(o);if(a){let c=a.get(n);c?c.add(i):a.set(n,new Set([i]))}else this._events.set(o,new Map([[n,new Set([i])]])),t.runOutsideAngular(()=>{document.addEventListener(o,this._delegateEventHandler,$t)})}removeHandler(t,o,n){let i=this._events.get(t);if(!i)return;let a=i.get(o);a&&(a.delete(n),a.size===0&&i.delete(o),i.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,$t)))}},Ut={enterDuration:225,exitDuration:150},ye=800,Gt=W({passive:!0,capture:!0}),Wt=["mousedown","touchstart"],Zt=["mouseup","mouseleave","touchend","touchcancel"],N=class N{constructor(t,o,n,i){this._target=t,this._ngZone=o,this._platform=i,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,i.isBrowser&&(this._containerElement=K(n))}fadeInRipple(t,o,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=C(C({},Ut),n.animation);n.centered&&(t=i.left+i.width/2,o=i.top+i.height/2);let c=n.radius||xe(t,o,i),w=t-i.left,I=o-i.top,k=a.enterDuration,m=document.createElement("div");m.classList.add("mat-ripple-element"),m.style.left=`${w-c}px`,m.style.top=`${I-c}px`,m.style.height=`${c*2}px`,m.style.width=`${c*2}px`,n.color!=null&&(m.style.backgroundColor=n.color),m.style.transitionDuration=`${k}ms`,this._containerElement.appendChild(m);let nt=window.getComputedStyle(m),de=nt.transitionProperty,ot=nt.transitionDuration,P=de==="none"||ot==="0s"||ot==="0s, 0s"||i.width===0&&i.height===0,E=new X(this,m,n,P);m.style.transform="scale3d(1, 1, 1)",E.state=x.FADING_IN,n.persistent||(this._mostRecentTransientRipple=E);let j=null;return!P&&(k||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let at=()=>{j&&(j.fallbackTimer=null),clearTimeout(rt),this._finishRippleTransition(E)},B=()=>this._destroyRipple(E),rt=setTimeout(B,k+100);m.addEventListener("transitionend",at),m.addEventListener("transitioncancel",B),j={onTransitionEnd:at,onTransitionCancel:B,fallbackTimer:rt}}),this._activeRipples.set(E,j),(P||!k)&&this._finishRippleTransition(E),E}fadeOutRipple(t){if(t.state===x.FADING_OUT||t.state===x.HIDDEN)return;let o=t.element,n=C(C({},Ut),t.config.animation);o.style.transitionDuration=`${n.exitDuration}ms`,o.style.opacity="0",t.state=x.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let o=K(t);!this._platform.isBrowser||!o||o===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=o,Wt.forEach(n=>{N._eventManager.addHandler(this._ngZone,n,o,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Zt.forEach(o=>{this._triggerElement.addEventListener(o,this,Gt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===x.FADING_IN?this._startFadeOutTransition(t):t.state===x.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let o=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=x.VISIBLE,!n&&(!o||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let o=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=x.HIDDEN,o!==null&&(t.element.removeEventListener("transitionend",o.onTransitionEnd),t.element.removeEventListener("transitioncancel",o.onTransitionCancel),o.fallbackTimer!==null&&clearTimeout(o.fallbackTimer)),t.element.remove()}_onMousedown(t){let o=Pt(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ye;!this._target.rippleDisabled&&!o&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Bt(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let o=t.changedTouches;if(o)for(let n=0;n<o.length;n++)this.fadeInRipple(o[n].clientX,o[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let o=t.state===x.VISIBLE||t.config.terminateOnPointerUp&&t.state===x.FADING_IN;!t.config.persistent&&o&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Wt.forEach(o=>N._eventManager.removeHandler(o,t,this)),this._pointerUpEventsRegistered&&(Zt.forEach(o=>t.removeEventListener(o,this,Gt)),this._pointerUpEventsRegistered=!1))}};N._eventManager=new J;var Kt=N;function xe(e,t,o){let n=Math.max(Math.abs(e-o.left),Math.abs(e-o.right)),i=Math.max(Math.abs(t-o.top),Math.abs(t-o.bottom));return Math.sqrt(n*n+i*i)}var Qt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b({type:t}),t.\u0275inj=u({imports:[g,g]});let e=t;return e})();var qt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b({type:t}),t.\u0275inj=u({imports:[g,Qt,g]});let e=t;return e})();var Xt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b({type:t}),t.\u0275inj=u({imports:[g,xt,g]});let e=t;return e})();var Jt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h({type:t,selectors:[["app-header"]],standalone:!0,features:[f],decls:2,vars:0,template:function(i,a){i&1&&(r(0,"p"),_(1,"Click on one of the cards below to go to the page."),s())}});let e=t;return e})();var te=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b({type:t}),t.\u0275inj=u({imports:[it,g,it,g]});let e=t;return e})();var ee=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h({type:t,selectors:[["app-card"]],inputs:{title:"title",backgroundImage:"backgroundImage",content:"content"},standalone:!0,features:[f],decls:7,vars:4,consts:[[1,"card"],[1,"card-background"],[1,"card-content"]],template:function(i,a){i&1&&(r(0,"div",0),l(1,"div",1),r(2,"div",2)(3,"h2"),_(4),s(),r(5,"p"),_(6),s()()()),i&2&&(v(),vt("background-image","url("+a.backgroundImage+")"),v(3),U(a.title),v(2),U(a.content))},styles:[".card[_ngcontent-%COMP%]{margin-top:30px;position:relative;width:100%;height:200px;border-radius:10px;overflow:hidden;box-shadow:0 4px 8px #0000001a}.card-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:top;filter:blur(1px);z-index:-1}.card-content[_ngcontent-%COMP%]{position:relative;z-index:1;padding:20px;background-color:#fff3}"]});let e=t;return e})();var ie=(()=>{let t=class t{constructor(){this.muscle_title="Muscle Map",this.muscle_content="This will help guide you in what exercises help what muscle.",this.muscle_image="'../../../../assets/images/muscle_front_20.JPG'",this.poker_title="How to play poker",this.poker_content="This is a game that will show you how to play poker",this.poker_image="'../../../../assets/images/muscle_front_20.JPG'",this.cocktail_title="Cocktail search",this.cocktail_content="This will will populate a list of cocktails you can make with the ingredients you have",this.cocktail_image="'../../../../assets/images/muscle_front_20.JPG'",this.home_loan_title="Home Loan calculators",this.home_loan_content="This set of calculators can be used to give you an idea of what you can qualify for.",this.home_loan_image="'../../../../assets/images/muscle_front_20.JPG'",this.home_care_title="Retirment Care Cost Comparitors",this.home_care_content="These comparisons show cost differences between elderly costs.",this.home_care_image="'../../../../assets/images/muscle_front_20.JPG'",this.disc_golf_instuctional_title="Disc Golf Form Check",this.disc_golf_instuctional_content="This website consolidates instructional disc golf topics in one place.",this.disc_golf_instuctional_image="'../../../../assets/images/muscle_front_20.JPG'"}doSomething(){console.log("doing it")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h({type:t,selectors:[["app-landing-page"]],standalone:!0,features:[f],decls:16,vars:18,consts:[[1,"container"],[1,"row"],[1,"col-sm-3"],[3,"title","content","backgroundImage"],[1,"row","m-t-4"]],template:function(i,a){i&1&&(r(0,"div",0),l(1,"app-header"),r(2,"div",1)(3,"div",2),l(4,"app-card",3),s(),r(5,"div",2),l(6,"app-card",3),s(),r(7,"div",2),l(8,"app-card",3),s(),r(9,"div",2),l(10,"app-card",3),s()(),r(11,"div",4)(12,"div",2),l(13,"app-card",3),s(),r(14,"div",2),l(15,"app-card",3),s()()()),i&2&&(v(4),d("title",a.muscle_title),d("content",a.muscle_content),d("backgroundImage",a.muscle_image),v(2),d("title",a.cocktail_title),d("content",a.cocktail_content),d("backgroundImage",a.cocktail_image),v(2),d("title",a.home_care_title),d("content",a.home_care_content),d("backgroundImage",a.home_care_image),v(2),d("title",a.disc_golf_instuctional_title),d("content",a.disc_golf_instuctional_content),d("backgroundImage",a.disc_golf_instuctional_image),v(3),d("title",a.poker_title),d("content",a.poker_content),d("backgroundImage",a.poker_image),v(2),d("title",a.home_loan_title),d("content",a.home_loan_content),d("backgroundImage",a.home_loan_image))},dependencies:[Xt,qt,Jt,te,ee],styles:['.example-card[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:stretch;float:left;width:240px;height:240px;margin:10px}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:100%;background-image:url("./media/muscle_front_20-C2LYWPL4.JPG")}.example-header-image[_ngcontent-%COMP%]{width:100px;height:100px}'],changeDetection:0});let e=t;return e})();var ne=(()=>{let t=class t{constructor(){this.title="informaswan"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h({type:t,selectors:[["app-root"]],standalone:!0,features:[f],decls:10,vars:0,consts:[["routerLink","/workout-exercises"],["routerLink","/home"]],template:function(i,a){i&1&&(r(0,"main")(1,"div")(2,"title"),_(3,"Informaswan"),s(),r(4,"nav")(5,"a",0),_(6,"I Workout"),s(),r(7,"a",1),_(8,"Informyoself"),s()()(),l(9,"router-outlet"),s())},dependencies:[Et,Mt,At]});let e=t;return e})();var oe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h({type:t,selectors:[["app-workout-exercises"]],standalone:!0,features:[f],decls:3,vars:0,consts:[["src","../../../../assets/images/muscle_front_20.JPG","alt",""]],template:function(i,a){i&1&&(r(0,"p"),_(1,"workout-exercises works!"),s(),l(2,"img",0))}});let e=t;return e})();var ae=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:ie},{path:"workout-exercises",component:oe}];var re={providers:[_t({eventCoalescing:!0}),Tt(ae),kt()]};var we={providers:[Dt()]},se=yt(re,we);var Ie=()=>It(ne,se),Fn=Ie;export{Fn as a};