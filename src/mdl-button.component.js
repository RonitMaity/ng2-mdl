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
var core_1 = require('@angular/core');
var mdl_service_1 = require('./mdl.service');
var MdlButtonComponent = (function () {
    function MdlButtonComponent() {
        this.ripple = mdl_service_1.MdlService.rippleEffect;
        this.disabled = false;
        this.raised = true;
    }
    MdlButtonComponent.prototype.ngOnChanges = function () {
        if (this.theme)
            this.color = this.theme;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlButtonComponent.prototype, "ripple", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlButtonComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlButtonComponent.prototype, "raised", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlButtonComponent.prototype, "theme", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlButtonComponent.prototype, "color", void 0);
    MdlButtonComponent = __decorate([
        core_1.Component({
            selector: 'mdlButton, mdl-button',
            template: "\n    <button class=\"mdl-button mdl-js-button\"\n      [ngClass]=\"{'mdl-js-ripple-effect': ripple}\"\n      [class.mdl-button--primary]=\"color === 'primary' && !raised\"\n      [class.mdl-button--colored]=\"color === 'primary' && raised\"\n      [class.mdl-button--accent]=\"color === 'accent'\"\n      [class.mdl-button--raised]=\"raised\"\n      [disabled]=\"disabled\"\n    >\n      <ng-content></ng-content>\n    </button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MdlButtonComponent);
    return MdlButtonComponent;
}());
exports.MdlButtonComponent = MdlButtonComponent;
//# sourceMappingURL=mdl-button.component.js.map