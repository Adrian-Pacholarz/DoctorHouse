"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecialistComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var password_validators_1 = require("../common/validators/password.validators");
var phone_validators_1 = require("../common/validators/phone.validators");
var CreateSpecialistComponent = /** @class */ (function () {
    function CreateSpecialistComponent(specialistService, companiesService) {
        this.specialistService = specialistService;
        this.companiesService = companiesService;
        this.signupForm = new forms_1.FormGroup({
            newUsername: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
            newName: new forms_1.FormControl('', forms_1.Validators.required),
            newSurname: new forms_1.FormControl('', forms_1.Validators.required),
            newAddress: new forms_1.FormControl('', forms_1.Validators.required),
            newPhone: new forms_1.FormControl('', [forms_1.Validators.required, phone_validators_1.PhoneValidators.phoneIsNaN, phone_validators_1.PhoneValidators.phoneLength]),
            newArea: new forms_1.FormControl('', [forms_1.Validators.required, phone_validators_1.PhoneValidators.phoneIsNaN, forms_1.Validators.maxLength(2)]),
            newEmail: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            newSpecialization: new forms_1.FormControl('', forms_1.Validators.required),
            newCompanies: new forms_1.FormControl('', forms_1.Validators.required),
            passwords: new forms_1.FormGroup({
                newPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
                repeatPassword: new forms_1.FormControl('', forms_1.Validators.required)
            }, password_validators_1.PasswordValidators.passwordsMustMatch)
        });
    }
    Object.defineProperty(CreateSpecialistComponent.prototype, "newUsername", {
        get: function () {
            return this.signupForm.get('newUsername');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateSpecialistComponent.prototype, "newName", {
        get: function () {
            return this.signupForm.get('newName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateSpecialistComponent.prototype, "newSurname", {
        get: function () {
            return this.signupForm.get('newSurname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateSpecialistComponent.prototype, "newAddress", {
        get: function () {
            return this.signupForm.get('newAddress');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateSpecialistComponent.prototype, "newPhone", {
        get: function () {
            return this.signupForm.get('newPhone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateSpecialistComponent.prototype, "newArea", {
        get: function () {
            return this.signupForm.get('newArea');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateSpecialistComponent.prototype, "newEmail", {
        get: function () {
            return this.signupForm.get('newEmail');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateSpecialistComponent.prototype, "newSpecialization", {
        get: function () {
            return this.signupForm.get('newSpecialization');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateSpecialistComponent.prototype, "newCompanies", {
        get: function () {
            return this.signupForm.get('newCompanies');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateSpecialistComponent.prototype, "newPassword", {
        get: function () {
            return this.signupForm.get('passwords.newPassword');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateSpecialistComponent.prototype, "repeatPassword", {
        get: function () {
            return this.signupForm.get('passwords.repeatPassword');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateSpecialistComponent.prototype, "passwords", {
        get: function () {
            return this.signupForm.get('passwords');
        },
        enumerable: false,
        configurable: true
    });
    CreateSpecialistComponent.prototype.submit = function () {
        var newSpecialist = {
            address: this.newAddress.value,
            username: this.newUsername.value,
            password: this.newPassword.value,
            area: +this.newArea.value,
            specialistType: this.newSpecialization.value,
            companies: this.newCompanies.value,
            details: {
                firstName: this.newName.value,
                lastName: this.newSurname.value,
                eMail: this.newEmail.value,
                phoneNumber: +this.newPhone.value,
            }
        };
        var companiesIds = [];
        newSpecialist.companies.forEach(function (value) {
            companiesIds.push(+value);
        });
        newSpecialist.companies = companiesIds;
        this.specialistService.createSpecialist(newSpecialist).subscribe(function (x) { return console.log(x); });
    };
    CreateSpecialistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companiesService.getCompanies().subscribe(function (companies) {
            _this.allCompanies = companies;
        });
    };
    CreateSpecialistComponent = __decorate([
        core_1.Component({
            selector: 'app-create-specialist',
            templateUrl: './create-specialist.component.html',
            styleUrls: ['./create-specialist.component.css']
        })
    ], CreateSpecialistComponent);
    return CreateSpecialistComponent;
}());
exports.CreateSpecialistComponent = CreateSpecialistComponent;
//# sourceMappingURL=create-specialist.component.js.map