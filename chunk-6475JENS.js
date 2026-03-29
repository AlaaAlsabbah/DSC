import{a as me}from"./chunk-3JLMNT7S.js";import{c as re,d as E,f as y,g as ce,h as z,i as de}from"./chunk-SQFYRXBB.js";import"./chunk-C5GCZ6BI.js";import{a as ke,b as O,c as xe,d as ve,e as _e,f as Ce,g as ye,h as Me,i as Ie,j as we,k as Be,l as Se,m as Te}from"./chunk-NEMZVZNB.js";import{e as ae}from"./chunk-54RDT2P4.js";import{a as ge,c as w,d as fe,f as P}from"./chunk-2EPWEMOH.js";import{G as le,H as se,P as pe,Q as he,U as ue,Z as be,g as te,h as ne,j as oe,k as ie}from"./chunk-NDJY3GV4.js";import{$a as g,Ab as G,Fb as J,H as R,Ha as b,I as j,Ja as K,Jb as W,Kb as _,L as Q,La as X,Lb as C,Ma as m,N as u,Na as I,Ob as F,Rb as f,Ta as x,U as k,Vb as h,Wb as ee,Z as B,Za as i,_a as l,ab as s,ca as S,db as T,eb as L,fb as q,ha as p,lb as V,nb as M,qb as U,rb as Y,sb as D,tb as N,ua as a,wb as Z,xb as v,yb as $}from"./chunk-LJYPQ6PL.js";import"./chunk-7CGTOI24.js";var Ve=(()=>{class t extends Be{required=f(void 0,{transform:h});invalid=f(void 0,{transform:h});disabled=f(void 0,{transform:h});name=f();_disabled=S(!1);$disabled=F(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,o){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=p(t)))(n||t)}})();static \u0275dir=K({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[m]})}return t})();var Oe=["data-p-icon","check"],De=(()=>{class t extends P{static \u0275fac=(()=>{let e;return function(n){return(e||(e=p(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["","data-p-icon","check"]],features:[m],attrs:Oe,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(o,n){o&1&&(k(),T(0,"path",0))},encapsulation:2})}return t})();var Ae=["data-p-icon","minus"],Ne=(()=>{class t extends P{static \u0275fac=(()=>{let e;return function(n){return(e||(e=p(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["","data-p-icon","minus"]],features:[m],attrs:Ae,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(o,n){o&1&&(k(),T(0,"path",0))},encapsulation:2})}return t})();var Fe=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var Le=["icon"],qe=["input"],$e=(t,r,e)=>({checked:t,class:r,dataP:e});function Ge(t,r){if(t&1&&s(0,"span",8),t&2){let e=M(3);v(e.cx("icon")),i("ngClass",e.checkboxIcon)("pBind",e.ptm("icon")),x("data-p",e.dataP)}}function He(t,r){if(t&1&&(k(),s(0,"svg",9)),t&2){let e=M(3);v(e.cx("icon")),i("pBind",e.ptm("icon")),x("data-p",e.dataP)}}function Re(t,r){if(t&1&&(L(0),I(1,Ge,1,5,"span",6)(2,He,1,4,"svg",7),q()),t&2){let e=M(2);a(),i("ngIf",e.checkboxIcon),a(),i("ngIf",!e.checkboxIcon)}}function je(t,r){if(t&1&&(k(),s(0,"svg",10)),t&2){let e=M(2);v(e.cx("icon")),i("pBind",e.ptm("icon")),x("data-p",e.dataP)}}function Qe(t,r){if(t&1&&(L(0),I(1,Re,3,2,"ng-container",3)(2,je,1,4,"svg",5),q()),t&2){let e=M();a(),i("ngIf",e.checked),a(),i("ngIf",e._indeterminate())}}function Ke(t,r){}function Xe(t,r){t&1&&I(0,Ke,0,0,"ng-template")}var Ue=`
    ${Fe}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Ye={root:({instance:t})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-checkbox-sm p-inputfield-sm":t.size()==="small","p-checkbox-lg p-inputfield-lg":t.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Ee=(()=>{class t extends ue{name="checkbox";style=Ue;classes=Ye;static \u0275fac=(()=>{let e;return function(n){return(e||(e=p(t)))(n||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var ze=new Q("CHECKBOX_INSTANCE"),Ze={provide:ke,useExisting:R(()=>H),multi:!0},H=(()=>{class t extends Ve{componentName="Checkbox";hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=f();size=f();onChange=new B;onFocus=new B;onBlur=new B;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:se(this.value,this.modelValue())}_indeterminate=S(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=u(Ee);bindDirectiveInstance=u(w,{self:!0});$pcCheckbox=u(ze,{optional:!0,skipSelf:!0})??void 0;$variant=F(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(e){let o,n=this.injector.get(xe,null,{optional:!0,self:!0}),c=n&&!this.formControl?n.value:this.modelValue();this.binary?(o=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(o),this.onModelChange(o)):(this.checked||this._indeterminate()?o=c.filter(d=>!le(d,this.value)):o=c?[...c,this.value]:[this.value],this.onModelChange(o),this.writeModelValue(o),this.formControl&&this.formControl.setValue(o)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:o,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,o){o(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()==="filled",[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=p(t)))(n||t)}})();static \u0275cmp=b({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(o,n,c){if(o&1&&U(c,Le,4)(c,pe,4),o&2){let d;D(d=N())&&(n.checkboxIconTemplate=d.first),D(d=N())&&(n.templates=d)}},viewQuery:function(o,n){if(o&1&&Y(qe,5),o&2){let c;D(c=N())&&(n.inputViewChild=c.first)}},hostVars:6,hostBindings:function(o,n){o&2&&(x("data-p-highlight",n.checked)("data-p-checked",n.checked)("data-p-disabled",n.$disabled())("data-p",n.dataP),v(n.cn(n.cx("root"),n.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",h],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",ee],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",h],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",h],autofocus:[2,"autofocus","autofocus",h],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[J([Ze,Ee,{provide:ze,useExisting:t},{provide:ge,useExisting:t}]),X([w]),m],decls:5,vars:26,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(o,n){o&1&&(l(0,"input",1,0),V("focus",function(d){return n.onInputFocus(d)})("blur",function(d){return n.onInputBlur(d)})("change",function(d){return n.handleChange(d)}),g(),l(2,"div",2),I(3,Qe,3,2,"ng-container",3)(4,Xe,1,0,null,4),g()),o&2&&(Z(n.inputStyle),v(n.cn(n.cx("input"),n.inputClass)),i("checked",n.checked)("pBind",n.ptm("input")),x("id",n.inputId)("value",n.value)("name",n.name())("tabindex",n.tabindex)("required",n.required()?"":void 0)("readonly",n.readonly?"":void 0)("disabled",n.$disabled()?"":void 0)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel),a(2),v(n.cx("box")),i("pBind",n.ptm("box")),x("data-p",n.dataP),a(),i("ngIf",!n.checkboxIconTemplate&&!n._checkboxIconTemplate),a(),i("ngTemplateOutlet",n.checkboxIconTemplate||n._checkboxIconTemplate)("ngTemplateOutletContext",W(22,$e,n.checked,n.cx("icon"),n.dataP)))},dependencies:[ie,te,ne,oe,he,De,Ne,fe,w],encapsulation:2,changeDetection:0})}return t})();var Pe=class t{fb=u(Ie);authStore=u(me);router=u(ae);loading=!1;form=this.fb.nonNullable.group({email:["",[O.required,O.email]],password:["",[O.required]],rememberMe:[!1]});async onSubmit(){if(!(this.form.invalid||this.loading)){this.loading=!0;try{let{email:r,password:e}=this.form.getRawValue();await this.authStore.login({email:r,password:e}),await this.router.navigate(["/home"])}finally{this.loading=!1}}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["app-login"]],decls:20,vars:26,consts:[[1,"login-page"],[1,"login-page__logo"],["src","assets/image/logo.svg",1,"login-page__logo-img",3,"alt"],[1,"login-page__form",3,"ngSubmit","formGroup"],["type","email","formControlName","email",3,"label"],["type","password","formControlName","password",3,"label"],[1,"login-page__remember"],["formControlName","rememberMe",3,"inputId","binary"],[1,"login-page__remember-label",3,"for"],[1,"login-page__submit"],["severity","success",3,"type","label","disabled","loading"],[1,"login-page__copyright"]],template:function(e,o){e&1&&(l(0,"div",0)(1,"div",1),s(2,"img",2),_(3,"translate"),g(),l(4,"form",3),V("ngSubmit",function(){return o.onSubmit()}),s(5,"app-input",4),_(6,"translate"),s(7,"app-input",5),_(8,"translate"),l(9,"div",6),s(10,"p-checkbox",7),l(11,"label",8),$(12),_(13,"translate"),g()(),l(14,"div",9),s(15,"app-button",10),_(16,"translate"),g()(),l(17,"p",11),$(18),_(19,"translate"),g()()),e&2&&(i("@pageEnter",void 0),a(2),i("alt",C(3,14,"app.logoTitleAr")),a(2),i("formGroup",o.form),a(),i("label",C(6,16,"auth.login.username")),a(2),i("label",C(8,18,"auth.login.password")),a(3),i("inputId","remember")("binary",!0),a(),i("for","remember"),a(),G(" ",C(13,20,"auth.login.rememberMe")," "),a(3),i("type","submit")("label",C(16,22,"auth.login.submit"))("disabled",o.form.invalid||o.loading)("loading",o.loading),a(3),G(" ",C(19,24,"app.copyright")," "))},dependencies:[we,Ce,ve,_e,Me,ye,H,Se,Te,be],styles:[".login-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100%;padding:2rem 0;overflow:hidden}.login-page__logo[_ngcontent-%COMP%]{text-align:center;margin-bottom:2.5rem}.login-page__logo-img[_ngcontent-%COMP%]{max-width:100%;height:auto;display:block;margin-inline:auto}.login-page__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem;flex:1}.login-page__remember[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.login-page__remember-label[_ngcontent-%COMP%]{margin:0;font-size:var(--font-size-sm);color:var(--color-label);cursor:pointer}.login-page__submit[_ngcontent-%COMP%]{margin-top:.5rem}.login-page__submit[_ngcontent-%COMP%]     .p-button{width:100%;background-color:var(--color-primary);border-color:var(--color-primary);transition:box-shadow .3s ease,background-color .2s ease}.login-page__submit[_ngcontent-%COMP%]     .p-button:hover:not(:disabled){background-color:var(--color-primary-hover);border-color:var(--color-primary-hover);box-shadow:0 6px 24px #28614066}.login-page__copyright[_ngcontent-%COMP%]{margin-top:auto;padding-top:2rem;font-size:var(--font-size-sm);color:var(--color-text-muted);text-align:center}"],data:{animation:[re("pageEnter",[ce(":enter",[z(".login-page__logo",[y({opacity:0}),E("1.2s 0.3s ease-out",y({opacity:1}))],{optional:!0}),z(".login-page__form > *",[y({opacity:0,transform:"translateY(16px)"}),de("150ms",[E("1.1s ease-out",y({opacity:1,transform:"translateY(0)"}))])],{optional:!0}),z(".login-page__copyright",[y({opacity:0}),E("1.2s 0.8s ease-out",y({opacity:1}))],{optional:!0})])])]}})};export{Pe as LoginComponent};
