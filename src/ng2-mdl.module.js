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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var mdl_text_field_component_1 = require('./mdl-text-field.component');
var mdl_check_box_component_1 = require('./mdl-check-box.component');
var mdl_progress_component_1 = require('./mdl-progress.component');
var mdl_spinner_component_1 = require('./mdl-spinner.component');
var mdl_layout_component_1 = require('./mdl-layout.component');
var mdl_layout_component_2 = require('./mdl-layout.component');
var mdl_layout_component_3 = require('./mdl-layout.component');
var mdl_button_component_1 = require('./mdl-button.component');
var mdl_select_component_1 = require('./mdl-select.component');
var mdl_switch_component_1 = require('./mdl-switch.component');
var mdl_radio_component_1 = require('./mdl-radio.component');
var mdl_directive_1 = require('./mdl.directive');
exports.NG2MDL_DIRECTIVES = [
    mdl_text_field_component_1.MdlTextFieldComponent,
    mdl_check_box_component_1.MdlCheckBoxComponent,
    mdl_progress_component_1.MdlProgressComponent,
    mdl_spinner_component_1.MdlSpinnerComponent,
    mdl_layout_component_1.MdlLayoutComponent,
    mdl_layout_component_2.MdlHeaderComponent,
    mdl_layout_component_3.MdlDrawerComponent,
    mdl_button_component_1.MdlButtonComponent,
    mdl_select_component_1.MdlSelectComponent,
    mdl_switch_component_1.MdlSwitchComponent,
    mdl_radio_component_1.MdlRadioComponent,
    mdl_directive_1.MdlDirective
];
var Ng2MdlModule = (function () {
    function Ng2MdlModule() {
    }
    Ng2MdlModule = __decorate([
        core_1.NgModule({
            declarations: exports.NG2MDL_DIRECTIVES.slice(),
            imports: [
                router_1.RouterModule,
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            exports: exports.NG2MDL_DIRECTIVES.slice()
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2MdlModule);
    return Ng2MdlModule;
}());
exports.Ng2MdlModule = Ng2MdlModule;
//# sourceMappingURL=ng2-mdl.module.js.map