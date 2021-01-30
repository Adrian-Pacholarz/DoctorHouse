"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMiniCardsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UsersMiniCardsComponent = /** @class */ (function () {
    function UsersMiniCardsComponent(specialistService, companiesService) {
        this.specialistService = specialistService;
        this.companiesService = companiesService;
        this.getCompanyForm = new forms_1.FormGroup({
            specialist: new forms_1.FormControl(),
            fullName: new forms_1.FormControl(),
            specialistId: new forms_1.FormControl()
        });
        this.getSpecialistForm = new forms_1.FormGroup({
            type: new forms_1.FormControl(),
        });
    }
    Object.defineProperty(UsersMiniCardsComponent.prototype, "specialists", {
        get: function () {
            return this.getCompanyForm.get('specialist');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsersMiniCardsComponent.prototype, "specialistId", {
        get: function () {
            return this.getCompanyForm.get('specialistId');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsersMiniCardsComponent.prototype, "fullName", {
        get: function () {
            return this.getCompanyForm.get('fullName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsersMiniCardsComponent.prototype, "type", {
        get: function () {
            return this.getSpecialistForm.get('type');
        },
        enumerable: false,
        configurable: true
    });
    UsersMiniCardsComponent.prototype.selectSpecialists = function (s) {
        var _this = this;
        var companySpecialists = [];
        for (var _i = 0, _a = (this.getCompanyForm.get('specialist').value); _i < _a.length; _i++) {
            var specialist = _a[_i];
            companySpecialists.push(+specialist.id);
        }
        if (companySpecialists.includes(+s.id)) {
            this.specialistService.getSpecialistById(s.id).subscribe(function (specialist) {
                _this.specialist = specialist;
                _this.type.setValue(_this.specialist.specialistType);
            });
        }
    };
    UsersMiniCardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companiesService.getCompanyById(1).subscribe(function (company) {
            _this.company = company;
            _this.specialist.setValue(_this.company.specialists);
            _this.fullName.setValue(_this.company.specialists.fullName);
            _this.specialistId.setValue(_this.company.specialists.id);
        });
        this.specialistService.getSpecialists().subscribe(function (allSpecialists) {
            _this.allSpecialists = allSpecialists;
        });
        console.log(this.specialist);
        console.log(this.fullName);
    };
    UsersMiniCardsComponent = __decorate([
        core_1.Component({
            selector: 'app-users-mini-cards',
            templateUrl: './users-mini-cards.component.html',
            styleUrls: ['./users-mini-cards.component.css']
        })
    ], UsersMiniCardsComponent);
    return UsersMiniCardsComponent;
}());
exports.UsersMiniCardsComponent = UsersMiniCardsComponent;
//# sourceMappingURL=users-mini-cards.component.js.map