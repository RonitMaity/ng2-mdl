"use strict";
// Imports from @angular
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
// Directives
var mdl_directive_1 = require('../../directives/mdl.directive');
// Services
var mdl_service_1 = require('../../services/mdl.service');
exports.MDL_CHECK_BOX_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MdlCheckBoxComponent; }),
    multi: true
};
var MdlCheckBoxComponent = (function () {
    function MdlCheckBoxComponent() {
        this.value = false;
        this.ripple = mdl_service_1.MdlService.rippleEffect;
        this.disabled = false;
        this.changes = new core_1.EventEmitter();
        // Needed to properly implement ControlValueAccessor.
        this.onChange = function (_) { console.log(); };
        this.onTouched = function () { console.log(); };
    }
    MdlCheckBoxComponent.prototype.writeValue = function (value) { this.value = value; };
    MdlCheckBoxComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MdlCheckBoxComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlCheckBoxComponent.prototype, "class", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlCheckBoxComponent.prototype, "label", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], MdlCheckBoxComponent.prototype, "value", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], MdlCheckBoxComponent.prototype, "ripple", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], MdlCheckBoxComponent.prototype, "disabled", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], MdlCheckBoxComponent.prototype, "changes", void 0);
    __decorate([
        core_1.HostListener('changes', ['$event']), 
        __metadata('design:type', Object)
    ], MdlCheckBoxComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.HostListener('blur', ['$event']), 
        __metadata('design:type', Object)
    ], MdlCheckBoxComponent.prototype, "onTouched", void 0);
    MdlCheckBoxComponent = __decorate([
        core_2.Component({
            selector: 'mdlCheckBox, mdl-check-box',
            template: "\n  <label\n    mdl [class.is-checked]=\"value\"\n    class=\"mdl-checkbox mdl-js-checkbox\"\n    [ngClass]=\"{'mdl-js-ripple-effect': ripple}\"\n  >\n    <input #inp [checked]=\"value\" [ngClass]=\"class\" [disabled]=\"disabled\"\n      type=\"checkbox\" class=\"mdl-checkbox__input\"\n      (blur)=\"onTouched()\" (change)=\"changes.emit(inp.checked)\"\n    />\n    <span class=\"mdl-checkbox__label\">{{label}}</span>\n  </label>\n  ",
            directives: [mdl_directive_1.MdlDirective],
            providers: [exports.MDL_CHECK_BOX_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], MdlCheckBoxComponent);
    return MdlCheckBoxComponent;
}());
exports.MdlCheckBoxComponent = MdlCheckBoxComponent;
//# sourceMappingURL=mdl-check-box.component.js.map