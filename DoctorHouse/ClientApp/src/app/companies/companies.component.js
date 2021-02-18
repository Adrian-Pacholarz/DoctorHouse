"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesComponent = void 0;
var core_1 = require("@angular/core");
var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent(companiesService, route, router) {
        this.companiesService = companiesService;
        this.route = route;
        this.router = router;
    }
    CompaniesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companiesService.getCompanies()
            .subscribe(function (companies) {
            _this.allCompanies = companies;
            if (!_this.allCompanies.length)
                _this.router.navigate(['/not-found']);
        });
    };
    CompaniesComponent = __decorate([
        core_1.Component({
            selector: 'app-companies',
            templateUrl: './companies.component.html',
            styleUrls: ['./companies.component.css']
        })
    ], CompaniesComponent);
    return CompaniesComponent;
}());
exports.CompaniesComponent = CompaniesComponent;
//# sourceMappingURL=companies.component.js.map