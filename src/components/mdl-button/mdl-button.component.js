"use strict";
// Imports from @angular
var core_1 = require('@angular/core');
// Directives
var mdl_directive_1 = require('../../directives/mdl.directive');
// Services
var mdl_service_1 = require('../../services/mdl.service');
var MdlButtonComponent = (function () {
    function MdlButtonComponent() {
        this.raised = true;
        this.ripple = mdl_service_1.MdlService.rippleEffect;
        this.disabled = false;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlButtonComponent.prototype, "theme", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlButtonComponent.prototype, "raised", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlButtonComponent.prototype, "ripple", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlButtonComponent.prototype, "disabled", void 0);
    MdlButtonComponent = __decorate([
        core_1.Component({
            selector: 'mdlButton, mdl-button',
            template: "\n    <button class=\"mdl-button mdl-js-button\"\n      [ngClass]=\"{'mdl-js-ripple-effect': ripple}\"\n      [class.mdl-button--primary]=\"theme === 'primary' && !raised\"\n      [class.mdl-button--colored]=\"theme === 'primary' && raised\"\n      [class.mdl-button--accent]=\"theme === 'accent'\"\n      [class.mdl-button--raised]=\"raised\"\n      [disabled]=\"disabled\"\n    >\n      <ng-content></ng-content>\n    </button>\n  ",
            directives: [mdl_directive_1.MdlDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], MdlButtonComponent);
    return MdlButtonComponent;
}());
exports.MdlButtonComponent = MdlButtonComponent;
//# sourceMappingURL=mdl-button.component.js.map