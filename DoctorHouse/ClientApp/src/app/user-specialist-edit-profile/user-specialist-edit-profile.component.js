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
var phone_validators_1 = require("../common/validators/phone.validators");
var UserSpecialistEditProfileComponent = /** @class */ (function () {
    function UserSpecialistEditProfileComponent(specialistService, toastyService) {
        this.specialistService = specialistService;
        this.toastyService = toastyService;
        this.updateUser = new forms_1.FormGroup({
            firstName: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            lastName: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            phone: new forms_1.FormControl('', [forms_1.Validators.required, phone_validators_1.PhoneValidators.phoneIsNaN, phone_validators_1.PhoneValidators.phoneLength]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            type: new forms_1.FormControl(''),
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
    UserSpecialistEditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.specialistService.getSpecialistById(3).subscribe(function (specialist) {
            _this.specialist = specialist;
            _this.firstName.setValue(_this.specialist.details.firstName);
            _this.lastName.setValue(_this.specialist.details.lastName);
            _this.email.setValue(_this.specialist.details.eMail);
            _this.phone.setValue(_this.specialist.details.phoneNumber);
            _this.type.setValue(_this.specialist.specialistType);
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