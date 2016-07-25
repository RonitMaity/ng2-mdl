"use strict";
var core_1 = require('@angular/core');
var MdlDirective = (function () {
    function MdlDirective(elem) {
        this.elem = elem;
    }
    MdlDirective.prototype.ngOnInit = function () {
        componentHandler.upgradeElements(this.elem.nativeElement);
    };
    MdlDirective = __decorate([
        core_1.Directive({
            selector: '[mdl], [mdlUpgrade], [mdl-upgrade]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdlDirective);
    return MdlDirective;
}());
exports.MdlDirective = MdlDirective;
//# sourceMappingURL=mdl.directive.js.map