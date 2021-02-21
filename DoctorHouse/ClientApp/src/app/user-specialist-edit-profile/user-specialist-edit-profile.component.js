"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSpecialistEditProfileComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var area_validators_1 = require("../common/validators/area.validators");
var phone_validators_1 = require("../common/validators/phone.validators");
var UserSpecialistEditProfileComponent = /** @class */ (function () {
    function UserSpecialistEditProfileComponent(specialistService, toastyService, companiesService, route, router) {
        this.specialistService = specialistService;
        this.toastyService = toastyService;
        this.companiesService = companiesService;
        this.route = route;
        this.router = router;
        this.updateUser = new forms_1.FormGroup({
            firstName: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            lastName: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            phone: new forms_1.FormControl('', [forms_1.Validators.required, phone_validators_1.PhoneValidators.phoneIsNaN, phone_validators_1.PhoneValidators.phoneLength]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            type: new forms_1.FormControl('', forms_1.Validators.required),
            area: new forms_1.FormControl('', [forms_1.Validators.required, area_validators_1.AreaValidators.areaIsNanAndMoreThan30]),
            companies: new forms_1.FormControl('', forms_1.Validators.required),
        });
        this.backToProfile = new forms_1.FormGroup({
            goback: new forms_1.FormControl()
        });
        this.setDefaultGoBackValue();
    }
    Object.defineProperty(UserSpecialistEditProfileComponent.prototype, "firstName", {
        get: function () {
            return this.updateUser.get('firstName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserSpecialistEditProfileComponent.prototype, "lastName", {
        get: function () {
            return this.updateUser.get('lastName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserSpecialistEditProfileComponent.prototype, "area", {
        get: function () {
            return this.updateUser.get('area');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserSpecialistEditProfileComponent.prototype, "phone", {
        get: function () {
            return this.updateUser.get('phone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserSpecialistEditProfileComponent.prototype, "email", {
        get: function () {
            return this.updateUser.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserSpecialistEditProfileComponent.prototype, "type", {
        get: function () {
            return this.updateUser.get('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserSpecialistEditProfileComponent.prototype, "companies", {
        get: function () {
            return this.updateUser.get('companies');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserSpecialistEditProfileComponent.prototype, "goback", {
        get: function () {
            return this.backToProfile.get("goback");
        },
        enumerable: false,
        configurable: true
    });
    UserSpecialistEditProfileComponent.prototype.setDefaultGoBackValue = function () {
        this.goback.setValue(false);
    };
    UserSpecialistEditProfileComponent.prototype.goBackToProfile = function ($event) {
        this.goback.setValue(true);
    };
    UserSpecialistEditProfileComponent.prototype.selectCompanies = function (c) {
        var currentCompanies = [];
        for (var _i = 0, _a = (this.updateUser.get('companies')).value; _i < _a.length; _i++) {
            var company = _a[_i];
            currentCompanies.push(+company.id);
        }
        if (currentCompanies.includes(+c.id)) {
            return true;
        }
    };
    UserSpecialistEditProfileComponent.prototype.update = function () {
        var _this = this;
        var updatedSpecialist = {
            area: +this.area.value,
            specialistType: this.type.value,
            companies: this.companies.value,
            details: {
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                eMail: this.email.value,
                phoneNumber: +this.phone.value,
            }
        };
        var companiesIds = [];
        if (this.updateUser.get('companies').dirty) {
            updatedSpecialist.companies.forEach(function (value) {
                companiesIds.push(+value);
            });
        }
        else if (!this.updateUser.get('companies').dirty) {
            updatedSpecialist.companies.forEach(function (value) {
                companiesIds.push(value.id);
            });
        }
        updatedSpecialist.companies = companiesIds;
        this.specialistService.updateSpecialist(this.specialistId, updatedSpecialist).subscribe(function (specialist) {
            _this.toastyService.success({
                title: 'Success',
                msg: 'An account has been updated',
                theme: 'bootstrap',
                showClose: true,
                timeout: 5000
            });
            location.reload();
        }, function (error) {
            if (error.status === 500)
                _this.toastyService.error({
                    title: 'Error',
                    msg: 'Wrong data provided',
                    theme: 'bootstrap',
                    showClose: true,
                    timeout: 5000
                });
            else {
                _this.toastyService.error({
                    title: 'Error',
                    msg: 'An error occured and account was not updated',
                    theme: 'bootstrap',
                    showClose: true,
                    timeout: 5000
                });
            }
        });
    };
    UserSpecialistEditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.specialistId = +p['id'];
        });
        this.specialistService.getSpecialistById(this.specialistId).subscribe(function (specialist) {
            _this.specialist = specialist;
            _this.firstName.setValue(_this.specialist.details.firstName);
            _this.lastName.setValue(_this.specialist.details.lastName);
            _this.email.setValue(_this.specialist.details.eMail);
            _this.phone.setValue(_this.specialist.details.phoneNumber.toString());
            _this.area.setValue(_this.specialist.area.toString());
            _this.type.setValue(_this.specialist.specialistType);
            _this.companies.setValue(_this.specialist.companies);
        });
        this.companiesService.getCompanies().subscribe(function (allCompanies) {
            _this.allCompanies = allCompanies;
        });
    };
    UserSpecialistEditProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-specialist-edit-profile',
            templateUrl: './user-specialist-edit-profile.component.html',
            styleUrls: ['./user-specialist-edit-profile.component.css']
        })
    ], UserSpecialistEditProfileComponent);
    return UserSpecialistEditProfileComponent;
}());
exports.UserSpecialistEditProfileComponent = UserSpecialistEditProfileComponent;
//# sourceMappingURL=user-specialist-edit-profile.component.js.map