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
var MdlLayoutComponent = (function () {
    function MdlLayoutComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlLayoutComponent.prototype, "fixedHeader", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlLayoutComponent.prototype, "fixedDrawer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlLayoutComponent.prototype, "drawerTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MdlLayoutComponent.prototype, "drawerMenu", void 0);
    MdlLayoutComponent = __decorate([
        core_1.Component({
            selector: 'mdlLayout, mdl-layout',
            template: "\n  <div mdl class=\"mdl-layout mdl-js-layout\"\n    [class.mdl-layout--fixed-drawer]=\"fixedDrawer\"\n    [class.mdl-layout--fixed-header]=\"fixedHeader\"\n  >\n    <div class=\"mdl-layout__drawer\">\n      <span class=\"mdl-layout-title\" *ngIf=\"drawerTitle\">{{drawerTitle}}</span>\n      <nav class=\"mdl-navigation\" *ngIf=\"drawerMenu\">\n        <a class=\"mdl-navigation__link\"\n          *ngFor=\"let m of drawerMenu\" [routerLink]=\"m.routerLink\"\n          [href]=\"m.link\">{{m.title}}\n        </a>\n      </nav>\n    </div>\n    <ng-content></ng-content>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MdlLayoutComponent);
    return MdlLayoutComponent;
}());
exports.MdlLayoutComponent = MdlLayoutComponent;
var MdlHeaderComponent = (function () {
    function MdlHeaderComponent() {
        this.search = true;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlHeaderComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlHeaderComponent.prototype, "search", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MdlHeaderComponent.prototype, "menu", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlHeaderComponent.prototype, "noHeader", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlHeaderComponent.prototype, "waterfall", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlHeaderComponent.prototype, "transparent", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdlHeaderComponent.prototype, "scrollableHeader", void 0);
    MdlHeaderComponent = __decorate([
        core_1.Component({
            'selector': 'mdlHeader, mdl-header',
            template: "\n  <header mdl class=\"mdl-layout__header\"\n    [class.mdl-layout__header--transparent]=\"transparent\"\n    [class.mdl-layout__header--scroll]=\"scrollableHeader\"\n    [class.mdl-layout__header--waterfall]=\"waterfall\"\n    [hidden]=\"noHeader\"\n  >\n    <div class=\"mdl-layout__header-row\" *ngIf=\"waterfall\">\n      <span class=\"mdl-layout-title\" *ngIf=\"title\">{{title}}</span>\n      <div class=\"mdl-layout-spacer\"></div>\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\n           mdl-textfield--floating-label mdl-textfield--align-right\" *ngIf=\"search\">\n        <label class=\"mdl-button mdl-js-button mdl-button--icon\"\n               for=\"waterfall-exp\">\n          <i class=\"material-icons\">search</i>\n        </label>\n        <div class=\"mdl-textfield__expandable-holder\">\n          <input class=\"mdl-textfield__input\" type=\"text\" name=\"sample\"\n                 id=\"waterfall-exp\">\n        </div>\n      </div>\n    </div>\n    <div class=\"mdl-layout__header-row\">\n      <span class=\"mdl-layout-title\" *ngIf=\"!waterfall\">{{title}}</span>\n      <div class=\"mdl-layout-spacer\"></div>\n      <nav class=\"mdl-navigation\" *ngIf=\"menu\">\n        <a class=\"mdl-navigation__link\"\n          *ngFor=\"let m of menu\" [routerLink]=\"m.routerLink\"\n          [href]=\"m.link\">{{m.title}}\n        </a>\n      </nav>\n    </div>\n    <ng-content></ng-content>\n  </header>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MdlHeaderComponent);
    return MdlHeaderComponent;
}());
exports.MdlHeaderComponent = MdlHeaderComponent;
var MdlDrawerComponent = (function () {
    function MdlDrawerComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlDrawerComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MdlDrawerComponent.prototype, "menu", void 0);
    MdlDrawerComponent = __decorate([
        core_1.Component({
            'selector': 'mdlDrawer, mdl-drawer',
            template: "\n  <div mdl class=\"mdl-layout__drawer\">\n    <span class=\"mdl-layout-title\" *ngIf=\"title\">{{title}}</span>\n    <nav class=\"mdl-navigation\" *ngIf=\"menu\">\n      <a class=\"mdl-navigation__link\"\n        *ngFor=\"let m of menu\" [routerLink]=\"m.routerLink\"\n        [href]=\"m.link\">{{m.title}}\n      </a>\n    </nav>\n    <ng-content></ng-content>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MdlDrawerComponent);
    return MdlDrawerComponent;
}());
exports.MdlDrawerComponent = MdlDrawerComponent;
//# sourceMappingURL=mdl-layout.component.js.map