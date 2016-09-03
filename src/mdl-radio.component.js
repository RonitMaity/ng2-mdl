"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var mdl_service_1 = require('./mdl.service');
exports.MDL_RADIO_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MdlRadioComponent; }),
    multi: true
};
var MdlRadioComponent = (function () {
    function MdlRadioComponent() {
        this.ripple = mdl_service_1.MdlService.rippleEffect;
        this.disabled = false;
        this.value = '';
        this.changes = new core_1.EventEmitter();
        this.onChange = function (_) { console.log(); };
        this.onTouched = function () { console.log(); };
    }
    MdlRadioComponent.prototype.ngOnChanges = function () {
        if (this.label)
            this.placeholder = this.label;
    };
    MdlRadioComponent.prototype.update = function (value) {
        this.value = value;
        this.changes.emit(value);
    };
    MdlRadioComponent.prototype.writeValue = function (value) { this.val = value; };
    MdlRadioComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MdlRadioComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], MdlRadioComponent.prototype, "ripple", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], MdlRadioComponent.prototype, "disabled", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlRadioComponent.prototype, "placeholder", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlRadioComponent.prototype, "value", void 0);
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
    ], MdlRadioComponent.prototype, "name", void 0);
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
            selector: 'mdlRadio, mdl-radio, md-radio-button',
            template: "\n  <label\n    mdl [class.is-checked]=\"value === val\"\n    class=\"mdl-radio mdl-js-radio\"\n    [ngClass]=\"{'mdl-js-ripple-effect': ripple}\"\n  >\n    <input #inp type=\"radio\" class=\"mdl-radio__button\"\n      [value]=\"value\" [ngClass]=\"class\" [name]=\"name\" [disabled]=\"disabled\"\n      (blur)=\"onTouched()\" (change)=\"update(inp.value)\"\n    />\n    <span class=\"mdl-radio__label\">{{placeholder}}</span>\n  </label>\n  ",
            providers: [exports.MDL_RADIO_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], MdlRadioComponent);
    return MdlRadioComponent;
}());
exports.MdlRadioComponent = MdlRadioComponent;
//# sourceMappingURL=mdl-radio.component.js.map