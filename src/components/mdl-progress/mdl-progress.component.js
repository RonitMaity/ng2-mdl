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
var MdlProgressComponent = (function () {
    function MdlProgressComponent(el) {
        this.el = el;
        this.indeterminate = false;
        this.mode = 'determinate';
    }
    MdlProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.el.nativeElement.children[0].addEventListener('mdl-componentupgraded', function () {
            _this.el.nativeElement.children[0].MaterialProgress.setProgress(_this.value);
            _this.el.nativeElement.children[0].MaterialProgress.setBuffer(_this.bufferValue);
        });
    };
    MdlProgressComponent.prototype.ngOnChanges = function () {
        if (this.indeterminate)
            this.mode = 'indeterminate';
        if (this.buffer)
            this.bufferValue = this.buffer;
        if (this.progress)
            this.value = this.progress;
        if (!this.el.nativeElement.children[0].MaterialProgress)
            return;
        if (!this.value)
            return;
        this.el.nativeElement.children[0].MaterialProgress.setProgress(this.value);
        if (!this.bufferValue)
            return;
        this.el.nativeElement.children[0].MaterialProgress.setBuffer(this.bufferValue);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlProgressComponent.prototype, "indeterminate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdlProgressComponent.prototype, "progress", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdlProgressComponent.prototype, "buffer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdlProgressComponent.prototype, "bufferValue", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdlProgressComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlProgressComponent.prototype, "mode", void 0);
    MdlProgressComponent = __decorate([
        core_1.Component({
            selector: 'mdlProgress, mdl-progress, md-progress-bar',
            template: "\n    <div mdl [id]=\"id\"\n      class=\"mdl-progress mdl-js-progress\"\n      [class.mdl-progress__indeterminate]=\"mode === 'indeterminate'\"\n    >\n    </div>\n  ",
            directives: [mdl_directive_1.MdlDirective]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdlProgressComponent);
    return MdlProgressComponent;
}());
exports.MdlProgressComponent = MdlProgressComponent;
//# sourceMappingURL=mdl-progress.component.js.map