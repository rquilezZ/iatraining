import './polyfills.server.mjs';
import{$ as Ce,A as V,B as m,C as I,D as S,E as ue,F as O,G as de,H as ce,I as he,J as W,K as x,M as fe,R as pe,T as ge,U as me,V as $,X as ye,Y as N,Z as ve,_ as _e,a as Q,b as J,c as ee,ca as Ve,d as te,e as U,f as l,g as B,ga as De,h as p,i as d,j as M,ja as be,k as E,l as R,m as g,n as ie,o as ne,p as H,q as F,r as re,s as w,t as s,u as L,v as C,w as oe,x as se,y as ae,z as le}from"./chunk-RIV7TWMF.mjs";import{a as u,b as f}from"./chunk-VVCT4QZE.mjs";var c=class{};var Ae=(()=>{let e=class e extends c{constructor(i){super(),this.http=i,this._url="https://jsonplaceholder.typicode.com/albums/"}getByID(i){return J({userId:1234,id:5,title:"asasas"})}getAll(){return this.http.get(this._url)}saveNew(i){throw new Error("Method not implemented.")}};e.\u0275fac=function(r){return new(r||e)(d(N))},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Me=[];var v=class{};var Ee=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0"}generateImage(i){let r=new ye({Authorization:"Bearer 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","Content-Type":"application/json"}),o={inputs:i};return this.http.post(this.apiUrl,o,{headers:r,responseType:"blob"})}};e.\u0275fac=function(r){return new(r||e)(d(N))},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Fe={providers:[be(Me),ve(_e()),{provide:c,useClass:Ae},{provide:v,useClass:Ee}]};var nt={providers:[Ve()]},we=me(Fe,nt);var Ge=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(L),s(H))},e.\u0275dir=g({type:e});let t=e;return t})(),rt=(()=>{let e=class e extends Ge{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ne(e)))(o||e)}})(),e.\u0275dir=g({type:e,features:[C]});let t=e;return t})(),je=new p("");var ot={provide:je,useExisting:U(()=>j),multi:!0};function st(){let t=$()?$().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var at=new p(""),j=(()=>{let e=class e extends Ge{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!st())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(L),s(H),s(at,8))},e.\u0275dir=g({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&S("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[W([ot]),C]});let t=e;return t})();var lt=new p(""),ut=new p("");function Te(t){return t!=null}function Ue(t){return fe(t)?Q(t):t}function Be(t){let e={};return t.forEach(n=>{e=n!=null?u(u({},e),n):e}),Object.keys(e).length===0?null:e}function Re(t,e){return e.map(n=>n(t))}function dt(t){return!t.validate}function He(t){return t.map(e=>dt(e)?e:n=>e.validate(n))}function ct(t){if(!t)return null;let e=t.filter(Te);return e.length==0?null:function(n){return Be(Re(n,e))}}function Le(t){return t!=null?ct(He(t)):null}function ht(t){if(!t)return null;let e=t.filter(Te);return e.length==0?null:function(n){let i=Re(n,e).map(Ue);return te(i).pipe(ee(Be))}}function We(t){return t!=null?ht(He(t)):null}function Ie(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function ft(t){return t._rawValidators}function pt(t){return t._rawAsyncValidators}function q(t){return t?Array.isArray(t)?t:[t]:[]}function k(t,e){return Array.isArray(t)?t.includes(e):t===e}function Se(t,e){let n=q(e);return q(t).forEach(r=>{k(n,r)||n.push(r)}),n}function Oe(t,e){return q(e).filter(n=>!k(t,n))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Le(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=We(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},z=class extends G{get formDirective(){return null}get path(){return null}},A=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Z=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},gt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},bi=f(u({},gt),{"[class.ng-submitted]":"isSubmitted"}),$e=(()=>{let e=class e extends Z{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(A,2))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ae("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[C]});let t=e;return t})();var D="VALID",P="INVALID",_="PENDING",b="DISABLED";function mt(t){return(T(t)?t.validators:t)||null}function yt(t){return Array.isArray(t)?Le(t):t||null}function vt(t,e){return(T(e)?e.asyncValidators:t)||null}function _t(t){return Array.isArray(t)?We(t):t||null}function T(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var X=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===P}get pending(){return this.status==_}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Se(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Se(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Oe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Oe(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=_,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=b,this.errors=null,this._forEachChild(i=>{i.disable(f(u({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(u({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=D,this._forEachChild(i=>{i.enable(f(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(u({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===_)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=_,this._hasOwnPendingAsyncValidator=!0;let n=Ue(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_)?_:this._anyControlsHaveStatus(P)?P:D}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){T(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=yt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=_t(this._rawAsyncValidators)}};var qe=new p("CallSetDisabledState",{providedIn:"root",factory:()=>K}),K="always";function Ct(t,e){return[...e.path,t]}function Vt(t,e,n=K){bt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),At(t,e),Et(t,e),Mt(t,e),Dt(t,e)}function xe(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Dt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function bt(t,e){let n=ft(t);e.validator!==null?t.setValidators(Ie(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=pt(t);e.asyncValidator!==null?t.setAsyncValidators(Ie(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();xe(e._rawValidators,r),xe(e._rawAsyncValidators,r)}function At(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ze(t,e)})}function Mt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ze(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ze(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Et(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Ft(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function wt(t){return Object.getPrototypeOf(t.constructor)===rt}function It(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===j?n=o:wt(o)?i=o:r=o}),r||i||n||null}function Ne(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Pe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var St=class extends X{constructor(e=null,n,i){super(mt(n),vt(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),T(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Pe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ne(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ne(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Pe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ot={provide:A,useExisting:U(()=>Y)},ke=Promise.resolve(),Y=(()=>{let e=class e extends A{constructor(i,r,o,h,a,Je){super(),this._changeDetectorRef=a,this.callSetDisabledState=Je,this.control=new St,this._registered=!1,this.name="",this.update=new F,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=It(this,h)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Ft(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Vt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){ke.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&ge(r);ke.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Ct(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(s(z,9),s(lt,10),s(ut,10),s(je,10),s(pe,8),s(qe,8))},e.\u0275dir=g({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[M.None,"disabled","isDisabled"],model:[M.None,"ngModel","model"],options:[M.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[W([Ot]),C,ie]});let t=e;return t})();var xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=R({type:e}),e.\u0275inj=B({});let t=e;return t})();var Ze=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:qe,useValue:i.callSetDisabledState??K}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=R({type:e}),e.\u0275inj=B({imports:[xt]});let t=e;return t})();var Xe=(()=>{let e=class e{constructor(i){this._albumGateWay=i}getAlbumById(i){return this._albumGateWay.getByID(i)}getAllAlbum(){return this._albumGateWay.getAll()}};e.\u0275fac=function(r){return new(r||e)(d(c))},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ke=(()=>{let e=class e{constructor(i){this._generateImageGateWay=i}generateImage(i){return this._generateImageGateWay.generateImage(i)}};e.\u0275fac=function(r){return new(r||e)(d(v))},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Gt(t,e){if(t&1&&(V(0,"h2"),O(1,"Imagen Generada:"),m(),I(2,"img",2)),t&2){let n=ue();w(2),se("src",n.imageUrl,re)}}var Ye=(()=>{let e=class e{constructor(i,r){this._getAlbumUseCase=i,this._generateImageUseCase=r,this.prompt="",this.imageUrl=""}ngOnInit(){this.response$=this._getAlbumUseCase.getAlbumById("20"),this.response$.subscribe(i=>{this.datos=i})}generateImage(){this._generateImageUseCase.generateImage(this.prompt).subscribe(i=>{let r=new FileReader;r.onloadend=()=>{this.imageUrl=r.result},r.readAsDataURL(i)},i=>{console.error(i)})}};e.\u0275fac=function(r){return new(r||e)(s(Xe),s(Ke))},e.\u0275cmp=E({type:e,selectors:[["app-album"]],standalone:!0,features:[x],decls:7,vars:2,consts:[["placeholder","Describe la imagen que deseas generar",3,"ngModelChange","ngModel"],[3,"click"],["alt","Imagen Generada por AI",3,"src"]],template:function(r,o){r&1&&(V(0,"div")(1,"h1"),O(2,"Generador de Im\xE1genes AI"),m(),V(3,"input",0),he("ngModelChange",function(a){return ce(o.prompt,a)||(o.prompt=a),a}),m(),V(4,"button",1),S("click",function(){return o.generateImage()}),O(5,"Generar Imagen"),m(),oe(6,Gt,3,1),m()),r&2&&(w(3),de("ngModel",o.prompt),w(3),le(6,o.imageUrl?6:-1))},dependencies:[Ze,j,$e,Y],styles:[".tarjeta[_ngcontent-%COMP%]{@apply rounded-xl text-gray-700 text-lg bg-gray-50 shadow-gray-300 shadow-md overflow-hidden p-4;}"]});let t=e;return t})();var Qe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=E({type:e,selectors:[["app-root"]],standalone:!0,features:[x],decls:2,vars:0,template:function(r,o){r&1&&I(0,"app-album")(1,"router-outlet")},dependencies:[De,Ye],styles:["*[_ngcontent-%COMP%]{display:flex;justify-content:center}app-album[_ngcontent-%COMP%]{align-self:center}"]});let t=e;return t})();var jt=()=>Ce(Qe,we),Gi=jt;export{Gi as a};
