"use strict";
// Imports from @angular
var core_1 = require('@angular/core');
// Directives
var mdl_directive_1 = require('../../directives/mdl.directive');
var MdlProgressComponent = (function () {
    function MdlProgressComponent(el) {
        this.el = el;
        this.indeterminate = false;
    }
    MdlProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.el.nativeElement.children[0].addEventListener('mdl-componentupgraded', function () {
            _this.el.nativeElement.children[0].MaterialProgress.setProgress(_this.progress);
            _this.el.nativeElement.children[0].MaterialProgress.setBuffer(_this.buffer);
        });
    };
    MdlProgressComponent.prototype.ngOnChanges = function () {
        if (!this.el.nativeElement.children[0].MaterialProgress)
            return;
        if (!this.progress)
            return;
        this.el.nativeElement.children[0].MaterialProgress.setProgress(this.progress);
        if (!this.buffer)
            return;
        this.el.nativeElement.children[0].MaterialProgress.setBuffer(this.buffer);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdlProgressComponent.prototype, "buffer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdlProgressComponent.prototype, "progress", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlProgressComponent.prototype, "indeterminate", void 0);
    MdlProgressComponent = __decorate([
        core_1.Component({
            selector: 'mdlProgress, mdl-progress',
            template: "\n    <div mdl [id]=\"id\"\n      class=\"mdl-progress mdl-js-progress\"\n      [class.mdl-progress__indeterminate]=\"indeterminate\"\n    >\n    </div>\n  ",
            directives: [mdl_directive_1.MdlDirective]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdlProgressComponent);
    return MdlProgressComponent;
}());
exports.MdlProgressComponent = MdlProgressComponent;
//# sourceMappingURL=mdl-progress.component.js.map