System.register(['@angular/forms', '@angular/core', '../../directives/mdl.directive', '../../services/mdl.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var forms_1, core_1, core_2, mdl_directive_1, mdl_service_1;
    var MDL_RADIO_VALUE_ACCESSOR, MdlRadioComponent;
    return {
        setters:[
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (mdl_directive_1_1) {
                mdl_directive_1 = mdl_directive_1_1;
            },
            function (mdl_service_1_1) {
                mdl_service_1 = mdl_service_1_1;
            }],
        execute: function() {
            exports_1("MDL_RADIO_VALUE_ACCESSOR", MDL_RADIO_VALUE_ACCESSOR = {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return MdlRadioComponent; }),
                multi: true
            });
            MdlRadioComponent = (function () {
                function MdlRadioComponent() {
                    this.value = '';
                    this.ripple = mdl_service_1.MdlService.rippleEffect;
                    this.disabled = false;
                    this.changes = new core_1.EventEmitter();
                    // Needed to properly implement ControlValueAccessor.
                    this.onChange = function (_) { console.log(); };
                    this.onTouched = function () { console.log(); };
                }
                MdlRadioComponent.prototype.writeValue = function (value) { this.val = value; };
                MdlRadioComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                MdlRadioComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], MdlRadioComponent.prototype, "name", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], MdlRadioComponent.prototype, "class", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], MdlRadioComponent.prototype, "label", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], MdlRadioComponent.prototype, "value", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Boolean)
                ], MdlRadioComponent.prototype, "ripple", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Boolean)
                ], MdlRadioComponent.prototype, "disabled", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], MdlRadioComponent.prototype, "changes", void 0);
                __decorate([
                    core_1.HostListener('changes', ['$event']), 
                    __metadata('design:type', Object)
                ], MdlRadioComponent.prototype, "onChange", void 0);
                __decorate([
                    core_1.HostListener('blur', ['$event']), 
                    __metadata('design:type', Object)
                ], MdlRadioComponent.prototype, "onTouched", void 0);
                MdlRadioComponent = __decorate([
                    core_2.Component({
                        selector: 'mdlRadio, mdl-radio',
                        template: "\n  <label\n    mdl [class.is-checked]=\"value === val\"\n    class=\"mdl-radio mdl-js-radio\"\n    [ngClass]=\"{'mdl-js-ripple-effect': ripple}\"\n  >\n    <input #inp type=\"radio\" class=\"mdl-radio__button\"\n      [value]=\"value\" [ngClass]=\"class\" [name]=\"name\" [disabled]=\"disabled\"\n      (blur)=\"onTouched()\" (change)=\"changes.emit(inp.value)\"\n    />\n    <span class=\"mdl-radio__label\">{{label}}</span>\n  </label>\n  ",
                        directives: [mdl_directive_1.MdlDirective],
                        providers: [MDL_RADIO_VALUE_ACCESSOR]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdlRadioComponent);
                return MdlRadioComponent;
            }());
            exports_1("MdlRadioComponent", MdlRadioComponent);
        }
    }
});
//# sourceMappingURL=mdl-radio.component.js.map