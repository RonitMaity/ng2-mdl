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
exports.MDL_SWITCH_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MdlSwitchComponent; }),
    multi: true
};
var MdlSwitchComponent = (function () {
    function MdlSwitchComponent() {
        this.ripple = mdl_service_1.MdlService.rippleEffect;
        this.disabled = false;
        this.checked = false;
        this.changes = new core_2.EventEmitter();
        this.onChange = function (_) { console.log(); };
        this.onTouched = function () { console.log(); };
    }
    MdlSwitchComponent.prototype.ngOnChanges = function () {
        if (this.label)
            this.placeholder = this.label;
    };
    MdlSwitchComponent.prototype.update = function (checked) {
        this.checked = checked;
        this.changes.emit(checked);
    };
    MdlSwitchComponent.prototype.writeValue = function (checked) { this.checked = checked; };
    MdlSwitchComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MdlSwitchComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlSwitchComponent.prototype, "ripple", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlSwitchComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlSwitchComponent.prototype, "checked", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlSwitchComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlSwitchComponent.prototype, "class", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlSwitchComponent.prototype, "label", void 0);
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
            selector: 'mdlSwitch, mdl-switch, md-slide-toggle',
            template: "\n  <label\n    mdl [class.is-checked]=\"checked\"\n    class=\"mdl-switch mdl-js-switch\"\n    [ngClass]=\"{'mdl-js-ripple-effect': ripple}\"\n  >\n    <input #inp type=\"checkbox\" class=\"mdl-switch__input\"\n      [checked]=\"checked\" [ngClass]=\"class\" [disabled]=\"disabled\"\n      (blur)=\"onTouched()\" (change)=\"update(inp.checked)\"\n    />\n    <span class=\"mdl-switch__label\">{{placeholder}}</span>\n  </label>\n  ",
            providers: [exports.MDL_SWITCH_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], MdlSwitchComponent);
    return MdlSwitchComponent;
}());
exports.MdlSwitchComponent = MdlSwitchComponent;
//# sourceMappingURL=mdl-switch.component.js.map