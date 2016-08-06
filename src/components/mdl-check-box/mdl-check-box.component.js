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
var mdl_directive_1 = require('../../directives/mdl.directive');
var mdl_service_1 = require('../../services/mdl.service');
exports.MDL_CHECK_BOX_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MdlCheckBoxComponent; }),
    multi: true
};
var MdlCheckBoxComponent = (function () {
    function MdlCheckBoxComponent() {
        this.ripple = mdl_service_1.MdlService.rippleEffect;
        this.disabled = false;
        this.checked = false;
        this.changes = new core_1.EventEmitter();
        this.onChange = function (_) { console.log(); };
        this.onTouched = function () { console.log(); };
    }
    MdlCheckBoxComponent.prototype.ngOnChanges = function () {
        if (this.label)
            this.placeholder = this.label;
    };
    MdlCheckBoxComponent.prototype.update = function (checked) {
        this.checked = checked;
        this.changes.emit(checked);
    };
    MdlCheckBoxComponent.prototype.writeValue = function (checked) { this.checked = checked; };
    MdlCheckBoxComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MdlCheckBoxComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], MdlCheckBoxComponent.prototype, "ripple", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], MdlCheckBoxComponent.prototype, "disabled", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], MdlCheckBoxComponent.prototype, "checked", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlCheckBoxComponent.prototype, "placeholder", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlCheckBoxComponent.prototype, "class", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdlCheckBoxComponent.prototype, "label", void 0);
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
            selector: 'mdlCheckBox, mdl-check-box, md-checkbox',
            template: "\n  <label\n    mdl [class.is-checked]=\"checked\"\n    class=\"mdl-checkbox mdl-js-checkbox\"\n    [ngClass]=\"{'mdl-js-ripple-effect': ripple}\"\n  >\n    <input #inp [checked]=\"checked\" [ngClass]=\"class\" [disabled]=\"disabled\"\n      type=\"checkbox\" class=\"mdl-checkbox__input\"\n      (blur)=\"onTouched()\" (change)=\"update(inp.checked)\"\n    />\n    <span class=\"mdl-checkbox__label\">{{placeholder}}</span>\n  </label>\n  ",
            directives: [mdl_directive_1.MdlDirective],
            providers: [exports.MDL_CHECK_BOX_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], MdlCheckBoxComponent);
    return MdlCheckBoxComponent;
}());
exports.MdlCheckBoxComponent = MdlCheckBoxComponent;
//# sourceMappingURL=mdl-check-box.component.js.map