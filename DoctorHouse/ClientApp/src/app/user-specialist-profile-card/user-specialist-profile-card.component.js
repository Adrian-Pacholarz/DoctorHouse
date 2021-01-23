"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSpecialistProfileCardComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UserSpecialistProfileCardComponent = /** @class */ (function () {
    function UserSpecialistProfileCardComponent(specialistService) {
        this.specialistService = specialistService;
        this.getUserForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(),
            lastName: new forms_1.FormControl(),
            phone: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            type: new forms_1.FormControl(),
        });
        this.editProfile = new forms_1.FormGroup({
            edit: new forms_1.FormControl()
        });
        this.setDefaultValue();
    }
    Object.defineProperty(UserSpecialistProfileCardComponent.prototype, "edit", {
        get: function () {
            return this.editProfile.get("edit");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserSpecialistProfileCardComponent.prototype, "firstName", {
        get: function () {
            return this.getUserForm.get('firstName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserSpecialistProfileCardComponent.prototype, "lastName", {
        get: function () {
            return this.getUserForm.get('lastName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserSpecialistProfileCardComponent.prototype, "phone", {
        get: function () {
            return this.getUserForm.get('phone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserSpecialistProfileCardComponent.prototype, "email", {
        get: function () {
            return this.getUserForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserSpecialistProfileCardComponent.prototype, "type", {
        get: function () {
            return this.getUserForm.get('type');
        },
        enumerable: false,
        configurable: true
    });
    UserSpecialistProfileCardComponent.prototype.setDefaultValue = function () {
        this.edit.setValue(false);
    };
    UserSpecialistProfileCardComponent.prototype.clickEditProfile = function ($event) {
        this.edit.setValue(true);
    };
    UserSpecialistProfileCardComponent.prototype.ngOnInit = function () {
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
    UserSpecialistProfileCardComponent = __decorate([
        core_1.Component({
            selector: 'app-user-specialist-profile-card',
            templateUrl: './user-specialist-profile-card.component.html',
            styleUrls: ['./user-specialist-profile-card.component.css']
        })
    ], UserSpecialistProfileCardComponent);
    return UserSpecialistProfileCardComponent;
}());
exports.UserSpecialistProfileCardComponent = UserSpecialistProfileCardComponent;
//# sourceMappingURL=user-specialist-profile-card.component.js.map