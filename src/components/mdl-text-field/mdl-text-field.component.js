"use strict";
// Imports from @angular
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
// Directives
var mdl_directive_1 = require('../../directives/mdl.directive');
// Services
var mdl_service_1 = require('../../services/mdl.service');
exports.MDL_TEXT_FIELD_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MdlTextFieldComponent; }),
    multi: true
};
var MdlTextFieldComponent = (function () {
    function MdlTextFieldComponent() {
        this.value = '';
        this.type = 'text';
        this.floating = mdl_service_1.MdlService.floating;
        this.disabled = false;
        this.changes = new core_1.EventEmitter();
        // Needed to properly implement ControlValueAccessor.
        this.onChange = function (_) { console.log(); };
        this.onTouched = function () { console.log(); };
    }
    MdlTextFieldComponent.prototype.writeValue = function (value) { this.value = value; };
    MdlTextFieldComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MdlTextFieldComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlTextFieldComponent.prototype, "id", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlTextFieldComponent.prototype, "class", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlTextFieldComponent.prototype, "errMsg", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlTextFieldComponent.prototype, "value", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlTextFieldComponent.prototype, "type", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlTextFieldComponent.prototype, "label", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], MdlTextFieldComponent.prototype, "floating", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], MdlTextFieldComponent.prototype, "disabled", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "changes", void 0);
    __decorate([
        core_1.HostListener('changes', ['$event']), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.HostListener('blur', ['$event']), 
        __metadata('design:type', Object)
    ], MdlTextFieldComponent.prototype, "onTouched", void 0);
    MdlTextFieldComponent = __decorate([
        core_2.Component({
            selector: 'mdlTextField, mdl-text-field',
            template: "\n  <div\n    mdl [class.is-dirty]=\"value\"\n    class=\"mdl-textfield mdl-js-textfield \"\n    [class.mdl-textfield--floating-label]=\"floating\"\n  >\n    <input #inp class=\"mdl-textfield__input\"\n      [id]=\"id\" [type]=\"type\" [value]=\"value\" [ngClass]=\"class\"\n      [disabled]=\"disabled\"\n      (blur)=\"onTouched()\" (keyup)=\"changes.emit(inp.value)\"\n    >\n    <label [attr.for]=\"id\" class=\"mdl-textfield__label\">{{label}}</label>\n    <span class=\"mdl-textfield__error\">{{errMsg}}</span>\n  </div>\n  ",
            directives: [mdl_directive_1.MdlDirective],
            providers: [exports.MDL_TEXT_FIELD_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], MdlTextFieldComponent);
    return MdlTextFieldComponent;
}());
exports.MdlTextFieldComponent = MdlTextFieldComponent;
//# sourceMappingURL=mdl-text-field.component.js.map