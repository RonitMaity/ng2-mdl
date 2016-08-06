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