"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialistsListComponent = void 0;
var core_1 = require("@angular/core");
var SpecialistsListComponent = /** @class */ (function () {
    function SpecialistsListComponent(specialistService, route) {
        this.specialistService = specialistService;
        this.route = route;
    }
    SpecialistsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.filter = params.filter;
        });
        this.specialistService.getSpecialists()
            .subscribe(function (allSpecialists) {
            _this.allSpecialists = allSpecialists;
            _this.onFilterChange();
        });
    };
    SpecialistsListComponent.prototype.onFilterChange = function () {
        var _this = this;
        var specialists = this.allSpecialists;
        if (this.filter)
            specialists = specialists.filter(function (s) { return s.specialistType.toLowerCase() == _this.filter; });
        this.specialists = specialists;
    };
    SpecialistsListComponent = __decorate([
        core_1.Component({
            selector: 'app-specialists-list',
            templateUrl: './specialists-list.component.html',
            styleUrls: ['./specialists-list.component.css']
        })
    ], SpecialistsListComponent);
    return SpecialistsListComponent;
}());
exports.SpecialistsListComponent = SpecialistsListComponent;
//# sourceMappingURL=specialists-list.component.js.map