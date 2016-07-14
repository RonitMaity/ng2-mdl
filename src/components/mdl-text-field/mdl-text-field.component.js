System.register(['@angular/forms', '@angular/core', '../../directives/mdl.directive', '../../services/mdl.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var forms_1, core_1, core_2, mdl_directive_1, mdl_service_1;
    var MDL_TEXT_FIELD_VALUE_ACCESSOR, MdlTextFieldComponent;
    return {
        setters:[
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (mdl_directive_1_1) {
                mdl_directive_1 = mdl_directive_1_1;
            },
            function (mdl_service_1_1) {
                mdl_service_1 = mdl_service_1_1;
            }],
        execute: function() {
            exports_1("MDL_TEXT_FIELD_VALUE_ACCESSOR", MDL_TEXT_FIELD_VALUE_ACCESSOR = {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return MdlTextFieldComponent; }),
                multi: true
            });
            MdlTextFieldComponent = (function () {
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
                        providers: [MDL_TEXT_FIELD_VALUE_ACCESSOR]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdlTextFieldComponent);
                return MdlTextFieldComponent;
            }());
            exports_1("MdlTextFieldComponent", MdlTextFieldComponent);
        }
    }
});
//# sourceMappingURL=mdl-text-field.component.js.map