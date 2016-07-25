"use strict";
// Imports from @angular
var core_1 = require('@angular/core');
// Directives
var mdl_directive_1 = require('../../directives/mdl.directive');
var MdlSpinnerComponent = (function () {
    function MdlSpinnerComponent() {
        this.active = true;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlSpinnerComponent.prototype, "active", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdlSpinnerComponent.prototype, "singleColor", void 0);
    MdlSpinnerComponent = __decorate([
        core_1.Component({
            selector: 'mdlSpinner, mdl-spinner',
            template: "\n    <div mdl\n      class=\"mdl-spinner mdl-js-spinner\"\n      [ngClass]=\"{\n        'is-active': active,\n        'mdl-spinner--single-color': singleColor\n      }\"\n    >\n    </div>\n  ",
            directives: [mdl_directive_1.MdlDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], MdlSpinnerComponent);
    return MdlSpinnerComponent;
}());
exports.MdlSpinnerComponent = MdlSpinnerComponent;
//# sourceMappingURL=mdl-spinner.component.js.map