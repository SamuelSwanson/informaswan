import './polyfills.server.mjs';
import{A as s,B as S,C as G,D as v,I as yt,L as xt,M as L,O as wt,P as It,Q as kt,R as Dt,U as Et,_ as At,a as dt,b as ct,c as V,d as lt,e as mt,f as ut,g as pt,h as bt,i as ht,j as ft,k,l as m,m as $,n as u,o as U,p as f,q as p,r as E,s as gt,t as vt,u as g,v as M,w as _t,x as r,y as c,z as b}from"./chunk-WDTFHKAG.mjs";import{a as C}from"./chunk-NDYDZJSS.mjs";var W;try{W=typeof Intl<"u"&&Intl.v8BreakIterator}catch{W=!1}var R=(()=>{let t=class t{constructor(n){this._platformId=n,this.isBrowser=this._platformId?It(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||W)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(i){return new(i||t)(u(gt))},t.\u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var F;function ae(){if(F==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>F=!0}))}finally{F=F||!1}return F}function Z(e){return ae()?e:!!e.capture}function Tt(e){return e.composedPath?e.composedPath()[0]:e.target}function Ct(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function K(e){return Array.isArray(e)?e:[e]}function Y(e){return e instanceof E?e.nativeElement:e}var St=new Set,A,re=(()=>{let t=class t{constructor(n,i){this._platform=n,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):de}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&se(n,this._nonce),this._matchMedia(n)}};t.\u0275fac=function(i){return new(i||t)(u(R),u(vt,8))},t.\u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function se(e,t){if(!St.has(e))try{A||(A=document.createElement("style"),t&&A.setAttribute("nonce",t),A.setAttribute("type","text/css"),document.head.appendChild(A)),A.sheet&&(A.sheet.insertRule(`@media ${e} {body{ }}`,0),St.add(e))}catch(o){console.error(o)}}function de(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var Rt=(()=>{let t=class t{constructor(n,i){this._mediaMatcher=n,this._zone=i,this._queries=new Map,this._destroySubject=new ct}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(n){return Ft(K(n)).some(a=>this._registerQuery(a).mql.matches)}observe(n){let a=Ft(K(n)).map(x=>this._registerQuery(x).observable),d=lt(a);return d=mt(d.pipe(pt(1)),d.pipe(bt(1),ut(0))),d.pipe(V(x=>{let w={matches:!1,breakpoints:{}};return x.forEach(({matches:I,query:l})=>{w.matches=w.matches||I,w.breakpoints[l]=I}),w}))}_registerQuery(n){if(this._queries.has(n))return this._queries.get(n);let i=this._mediaMatcher.matchMedia(n),d={observable:new dt(x=>{let w=I=>this._zone.run(()=>x.next(I));return i.addListener(w),()=>{i.removeListener(w)}}).pipe(ht(i),V(({matches:x})=>({query:n,matches:x})),ft(this._destroySubject)),mql:i};return this._queries.set(n,d),d}};t.\u0275fac=function(i){return new(i||t)(u(re),u(M))},t.\u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Ft(e){return e.map(t=>t.split(",")).reduce((t,o)=>t.concat(o)).map(t=>t.trim())}function Lt(e){return e.buttons===0||e.detail===0}function zt(e){let t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var T=function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e}(T||{}),Ot="cdk-high-contrast-black-on-white",Nt="cdk-high-contrast-white-on-black",Q="cdk-high-contrast-active",Pt=(()=>{let t=class t{constructor(n,i){this._platform=n,this._document=i,this._breakpointSubscription=U(Rt).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return T.NONE;let n=this._document.createElement("div");n.style.backgroundColor="rgb(1,2,3)",n.style.position="absolute",this._document.body.appendChild(n);let i=this._document.defaultView||window,a=i&&i.getComputedStyle?i.getComputedStyle(n):null,d=(a&&a.backgroundColor||"").replace(/ /g,"");switch(n.remove(),d){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return T.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return T.BLACK_ON_WHITE}return T.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let n=this._document.body.classList;n.remove(Q,Ot,Nt),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===T.BLACK_ON_WHITE?n.add(Q,Ot):i===T.WHITE_ON_BLACK&&n.add(Q,Nt)}}};t.\u0275fac=function(i){return new(i||t)(u(R),u(L))},t.\u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var X=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t}),t.\u0275inj=m({});let e=t;return e})();function be(){return!0}var he=new $("mat-sanity-checks",{providedIn:"root",factory:be}),h=(()=>{let t=class t{constructor(n,i,a){this._sanityChecks=i,this._document=a,this._hasDoneGlobalChecks=!1,n._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(n){return Ct()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[n]}};t.\u0275fac=function(i){return new(i||t)(u(Pt),u(he,8),u(L))},t.\u0275mod=p({type:t}),t.\u0275inj=m({imports:[X,X]});let e=t;return e})();var nt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t}),t.\u0275inj=m({imports:[h,h]});let e=t;return e})(),_=function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e}(_||{}),J=class{constructor(t,o,n,i=!1){this._renderer=t,this.element=o,this.config=n,this._animationForciblyDisabledThroughCss=i,this.state=_.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Ht=Z({passive:!0,capture:!0}),tt=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let o=Tt(t);o&&this._events.get(t.type)?.forEach((n,i)=>{(i===o||i.contains(o))&&n.forEach(a=>a.handleEvent(t))})}}addHandler(t,o,n,i){let a=this._events.get(o);if(a){let d=a.get(n);d?d.add(i):a.set(n,new Set([i]))}else this._events.set(o,new Map([[n,new Set([i])]])),t.runOutsideAngular(()=>{document.addEventListener(o,this._delegateEventHandler,Ht)})}removeHandler(t,o,n){let i=this._events.get(t);if(!i)return;let a=i.get(o);a&&(a.delete(n),a.size===0&&i.delete(o),i.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Ht)))}},Vt={enterDuration:225,exitDuration:150},fe=800,$t=Z({passive:!0,capture:!0}),Ut=["mousedown","touchstart"],Gt=["mouseup","mouseleave","touchend","touchcancel"],N=class N{constructor(t,o,n,i){this._target=t,this._ngZone=o,this._platform=i,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,i.isBrowser&&(this._containerElement=Y(n))}fadeInRipple(t,o,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=C(C({},Vt),n.animation);n.centered&&(t=i.left+i.width/2,o=i.top+i.height/2);let d=n.radius||ge(t,o,i),x=t-i.left,w=o-i.top,I=a.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${x-d}px`,l.style.top=`${w-d}px`,l.style.height=`${d*2}px`,l.style.width=`${d*2}px`,n.color!=null&&(l.style.backgroundColor=n.color),l.style.transitionDuration=`${I}ms`,this._containerElement.appendChild(l);let ot=window.getComputedStyle(l),oe=ot.transitionProperty,at=ot.transitionDuration,B=oe==="none"||at==="0s"||at==="0s, 0s"||i.width===0&&i.height===0,D=new J(this,l,n,B);l.style.transform="scale3d(1, 1, 1)",D.state=_.FADING_IN,n.persistent||(this._mostRecentTransientRipple=D);let j=null;return!B&&(I||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let rt=()=>{j&&(j.fallbackTimer=null),clearTimeout(st),this._finishRippleTransition(D)},H=()=>this._destroyRipple(D),st=setTimeout(H,I+100);l.addEventListener("transitionend",rt),l.addEventListener("transitioncancel",H),j={onTransitionEnd:rt,onTransitionCancel:H,fallbackTimer:st}}),this._activeRipples.set(D,j),(B||!I)&&this._finishRippleTransition(D),D}fadeOutRipple(t){if(t.state===_.FADING_OUT||t.state===_.HIDDEN)return;let o=t.element,n=C(C({},Vt),t.config.animation);o.style.transitionDuration=`${n.exitDuration}ms`,o.style.opacity="0",t.state=_.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let o=Y(t);!this._platform.isBrowser||!o||o===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=o,Ut.forEach(n=>{N._eventManager.addHandler(this._ngZone,n,o,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Gt.forEach(o=>{this._triggerElement.addEventListener(o,this,$t)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===_.FADING_IN?this._startFadeOutTransition(t):t.state===_.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let o=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=_.VISIBLE,!n&&(!o||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let o=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=_.HIDDEN,o!==null&&(t.element.removeEventListener("transitionend",o.onTransitionEnd),t.element.removeEventListener("transitioncancel",o.onTransitionCancel),o.fallbackTimer!==null&&clearTimeout(o.fallbackTimer)),t.element.remove()}_onMousedown(t){let o=Lt(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+fe;!this._target.rippleDisabled&&!o&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!zt(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let o=t.changedTouches;if(o)for(let n=0;n<o.length;n++)this.fadeInRipple(o[n].clientX,o[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let o=t.state===_.VISIBLE||t.config.terminateOnPointerUp&&t.state===_.FADING_IN;!t.config.persistent&&o&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Ut.forEach(o=>N._eventManager.removeHandler(o,t,this)),this._pointerUpEventsRegistered&&(Gt.forEach(o=>t.removeEventListener(o,this,$t)),this._pointerUpEventsRegistered=!1))}};N._eventManager=new tt;var Wt=N;function ge(e,t,o){let n=Math.max(Math.abs(e-o.left),Math.abs(e-o.right)),i=Math.max(Math.abs(t-o.top),Math.abs(t-o.bottom));return Math.sqrt(n*n+i*i)}var Kt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t}),t.\u0275inj=m({imports:[h,h]});let e=t;return e})();var Yt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t}),t.\u0275inj=m({imports:[h,Kt,h]});let e=t;return e})();var Qt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t}),t.\u0275inj=m({imports:[h,wt,h]});let e=t;return e})();var qt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-header"]],standalone:!0,features:[v],decls:2,vars:0,template:function(i,a){i&1&&(r(0,"p"),S(1,"Click on one of the cards below to go to the page."),c())}});let e=t;return e})();var Xt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t}),t.\u0275inj=m({imports:[nt,h,nt,h]});let e=t;return e})();var Jt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-card"]],inputs:{title:"title",backgroundImage:"backgroundImage",content:"content"},standalone:!0,features:[v],decls:7,vars:4,consts:[[1,"card"],[1,"card-background"],[1,"card-content"]],template:function(i,a){i&1&&(r(0,"div",0),b(1,"div",1),r(2,"div",2)(3,"h2"),S(4),c(),r(5,"p"),S(6),c()()()),i&2&&(g(),_t("background-image","url("+a.backgroundImage+")"),g(3),G(a.title),g(2),G(a.content))},styles:[".card[_ngcontent-%COMP%]{margin-top:30px;position:relative;width:100%;height:200px;border-radius:10px;overflow:hidden;box-shadow:0 4px 8px #0000001a}.card-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:top;filter:blur(1px);z-index:-1}.card-content[_ngcontent-%COMP%]{position:relative;z-index:1;padding:20px;background-color:#fff3}"]});let e=t;return e})();var P=(()=>{let t=class t{constructor(){this.muscle_title="Muscle Map",this.muscle_content="This will help guide you in what exercises help what muscle.",this.muscle_image="'../../../../assets/images/muscle_front_20.JPG'",this.poker_title="How to play poker",this.poker_content="This is a game that will show you how to play poker",this.poker_image="'../../../../assets/images/muscle_front_20.JPG'",this.cocktail_title="Cocktail search",this.cocktail_content="This will will populate a list of cocktails you can make with the ingredients you have",this.cocktail_image="'../../../../assets/images/muscle_front_20.JPG'",this.home_loan_title="Home Loan calculators",this.home_loan_content="This set of calculators can be used to give you an idea of what you can qualify for.",this.home_loan_image="'../../../../assets/images/muscle_front_20.JPG'",this.home_care_title="Retirment Care Cost Comparitors",this.home_care_content="These comparisons show cost differences between elderly costs.",this.home_care_image="'../../../../assets/images/muscle_front_20.JPG'",this.disc_golf_instuctional_title="Disc Golf Form Check",this.disc_golf_instuctional_content="This website consolidates instructional disc golf topics in one place.",this.disc_golf_instuctional_image="'../../../../assets/images/muscle_front_20.JPG'"}doSomething(){console.log("doing it")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-landing-page"]],standalone:!0,features:[v],decls:16,vars:18,consts:[[1,"container"],[1,"row"],[1,"col-sm-3"],[3,"title","content","backgroundImage"],[1,"row","m-t-4"]],template:function(i,a){i&1&&(r(0,"div",0),b(1,"app-header"),r(2,"div",1)(3,"div",2),b(4,"app-card",3),c(),r(5,"div",2),b(6,"app-card",3),c(),r(7,"div",2),b(8,"app-card",3),c(),r(9,"div",2),b(10,"app-card",3),c()(),r(11,"div",4)(12,"div",2),b(13,"app-card",3),c(),r(14,"div",2),b(15,"app-card",3),c()()()),i&2&&(g(4),s("title",a.muscle_title),s("content",a.muscle_content),s("backgroundImage",a.muscle_image),g(2),s("title",a.cocktail_title),s("content",a.cocktail_content),s("backgroundImage",a.cocktail_image),g(2),s("title",a.home_care_title),s("content",a.home_care_content),s("backgroundImage",a.home_care_image),g(2),s("title",a.disc_golf_instuctional_title),s("content",a.disc_golf_instuctional_content),s("backgroundImage",a.disc_golf_instuctional_image),g(3),s("title",a.poker_title),s("content",a.poker_content),s("backgroundImage",a.poker_image),g(2),s("title",a.home_loan_title),s("content",a.home_loan_content),s("backgroundImage",a.home_loan_image))},dependencies:[Qt,Yt,qt,Xt,Jt],styles:['.example-card[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:stretch;float:left;width:240px;height:240px;margin:10px}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:100%;background-image:url("./media/muscle_front_20-C2LYWPL4.JPG")}.example-header-image[_ngcontent-%COMP%]{width:100px;height:100px}'],changeDetection:0});let e=t;return e})();var te=(()=>{let t=class t{constructor(){this.title="informaswan"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-root"]],standalone:!0,features:[v],decls:3,vars:0,template:function(i,a){i&1&&(r(0,"main")(1,"div"),b(2,"app-landing-page"),c()())},dependencies:[P]});let e=t;return e})();var ee=[{path:"",component:P}];var ie={providers:[yt({eventCoalescing:!0}),At(ee),Dt()]};var ve={providers:[Et()]},ne=xt(ie,ve);var _e=()=>kt(te,ne),In=_e;export{In as a};
