"use strict";
// Imports from @angular
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
// Directives
var mdl_directive_1 = require('../../directives/mdl.directive');
// Services
var mdl_service_1 = require('../../services/mdl.service');
exports.MDL_SWITCH_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MdlSwitchComponent; }),
    multi: true
};
var MdlSwitchComponent = (function () {
    function MdlSwitchComponent() {
        this.value = '';
        this.ripple = mdl_service_1.MdlService.rippleEffect;
        this.disabled = false;
        this.changes = new core_2.EventEmitter();
        // Needed to properly implement ControlValueAccessor.
        this.onChange = function (_) { console.log(); };
        this.onTouched = function () { console.log(); };
    }
    MdlSwitchComponent.prototype.writeValue = function (value) { this.value = value; };
    MdlSwitchComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MdlSwitchComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlSwitchComponent.prototype, "class", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlSwitchComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlSwitchComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlSwitchComponent.prototype, "ripple", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlSwitchComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MdlSwitchComponent.prototype, "changes", void 0);
    __decorate([
        core_2.HostListener('changes', ['$event']), 
        __metadata('design:type', Object)
    ], MdlSwitchComponent.prototype, "onChange", void 0);
    __decorate([
        core_2.HostListener('blur', ['$event']), 
        __metadata('design:type', Object)
    ], MdlSwitchComponent.prototype, "onTouched", void 0);
    MdlSwitchComponent = __decorate([
        core_1.Component({
            selector: 'mdlSwitch, mdl-switch',
            template: "\n  <label\n    mdl [class.is-checked]=\"value\"\n    class=\"mdl-switch mdl-js-switch\"\n    [ngClass]=\"{'mdl-js-ripple-effect': ripple}\"\n  >\n    <input #inp type=\"checkbox\" class=\"mdl-switch__input\"\n      [checked]=\"value\" [ngClass]=\"class\" [disabled]=\"disabled\"\n      (blur)=\"onTouched()\" (change)=\"changes.emit(inp.checked)\"\n    />\n    <span class=\"mdl-switch__label\">{{label}}</span>\n  </label>\n  ",
            directives: [mdl_directive_1.MdlDirective],
            providers: [exports.MDL_SWITCH_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], MdlSwitchComponent);
    return MdlSwitchComponent;
}());
exports.MdlSwitchComponent = MdlSwitchComponent;
//# sourceMappingURL=mdl-switch.component.js.map