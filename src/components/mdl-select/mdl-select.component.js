System.register(['@angular/forms', '@angular/core', '../../directives/mdl.directive'], function(exports_1, context_1) {
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
    var forms_1, core_1, core_2, mdl_directive_1;
    var MDL_SELECT_VALUE_ACCESSOR, MdlSelectComponent;
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
            }],
        execute: function() {
            exports_1("MDL_SELECT_VALUE_ACCESSOR", MDL_SELECT_VALUE_ACCESSOR = {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return MdlSelectComponent; }),
                multi: true
            });
            MdlSelectComponent = (function () {
                function MdlSelectComponent() {
                    this.disabled = false;
                    this.changes = new core_2.EventEmitter();
                    // Needed to properly implement ControlValueAccessor.
                    this.onChange = function (_) { console.log(); };
                    this.onTouched = function () { console.log(); };
                }
                MdlSelectComponent.prototype.writeValue = function (value) { this.value = value; };
                MdlSelectComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                MdlSelectComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdlSelectComponent.prototype, "id", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdlSelectComponent.prototype, "value", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdlSelectComponent.prototype, "label", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdlSelectComponent.prototype, "class", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdlSelectComponent.prototype, "disabled", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MdlSelectComponent.prototype, "changes", void 0);
                __decorate([
                    core_2.HostListener('changes', ['$event']), 
                    __metadata('design:type', Object)
                ], MdlSelectComponent.prototype, "onChange", void 0);
                __decorate([
                    core_2.HostListener('blur', ['$event']), 
                    __metadata('design:type', Object)
                ], MdlSelectComponent.prototype, "onTouched", void 0);
                MdlSelectComponent = __decorate([
                    core_1.Component({
                        selector: 'mdlSelect, mdl-select',
                        template: "\n    <div class=\"mdl-selectfield mdl-js-selectfield\" [ngClass]=\"class\" mdl>\n      <select class=\"mdl-selectfield__select\"\n        [value]=\"value\" #select [id]=\"id\" [disabled]=\"disabled\"\n        (blur)=\"onTouched()\"\n        (change)=\"changes.emit(select.value)\">\n        <ng-content></ng-content>\n      </select>\n      <label class=\"mdl-selectfield__label\" [attr.for]=\"id\">{{label}}</label>\n      <!-- <span class=\"mdl-selectfield__error\">Select aw value</span> -->\n    </div>\n  ",
                        directives: [
                            mdl_directive_1.MdlDirective
                        ],
                        providers: [
                            MDL_SELECT_VALUE_ACCESSOR
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdlSelectComponent);
                return MdlSelectComponent;
            }());
            exports_1("MdlSelectComponent", MdlSelectComponent);
        }
    }
});
//# sourceMappingURL=mdl-select.component.js.map