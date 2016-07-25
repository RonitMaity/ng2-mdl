"use strict";
// Imports from @angular
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
// Directives
var mdl_directive_1 = require('../../directives/mdl.directive');
// Services
var mdl_service_1 = require('../../services/mdl.service');
exports.MDL_RADIO_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MdlRadioComponent; }),
    multi: true
};
var MdlRadioComponent = (function () {
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
            providers: [exports.MDL_RADIO_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], MdlRadioComponent);
    return MdlRadioComponent;
}());
exports.MdlRadioComponent = MdlRadioComponent;
//# sourceMappingURL=mdl-radio.component.js.map