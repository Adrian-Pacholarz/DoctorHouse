"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var password_validators_1 = require("../common/validators/password.validators");
var phone_validators_1 = require("../common/validators/phone.validators");
var CreateCustomerComponent = /** @class */ (function () {
    function CreateCustomerComponent(customerService) {
        this.customerService = customerService;
        this.signupForm = new forms_1.FormGroup({
            newUsername: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
            newName: new forms_1.FormControl('', forms_1.Validators.required),
            newSurname: new forms_1.FormControl('', forms_1.Validators.required),
            newAddress: new forms_1.FormControl('', forms_1.Validators.required),
            newPhone: new forms_1.FormControl('', [forms_1.Validators.required, phone_validators_1.PhoneValidators.phoneIsNaN, phone_validators_1.PhoneValidators.phoneLength]),
            newEmail: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            passwords: new forms_1.FormGroup({
                newPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
                repeatPassword: new forms_1.FormControl('', forms_1.Validators.required)
            }, password_validators_1.PasswordValidators.passwordsMustMatch)
        });
    }
    Object.defineProperty(CreateCustomerComponent.prototype, "newUsername", {
        get: function () {
            return this.signupForm.get('newUsername');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateCustomerComponent.prototype, "newName", {
        get: function () {
            return this.signupForm.get('newName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateCustomerComponent.prototype, "newSurname", {
        get: function () {
            return this.signupForm.get('newSurname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateCustomerComponent.prototype, "newAddress", {
        get: function () {
            return this.signupForm.get('newAddress');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateCustomerComponent.prototype, "newPhone", {
        get: function () {
            return this.signupForm.get('newPhone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateCustomerComponent.prototype, "newEmail", {
        get: function () {
            return this.signupForm.get('newEmail');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateCustomerComponent.prototype, "newPassword", {
        get: function () {
            return this.signupForm.get('passwords.newPassword');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateCustomerComponent.prototype, "repeatPassword", {
        get: function () {
            return this.signupForm.get('passwords.repeatPassword');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateCustomerComponent.prototype, "passwords", {
        get: function () {
            return this.signupForm.get('passwords');
        },
        enumerable: false,
        configurable: true
    });
    CreateCustomerComponent.prototype.submit = function () {
        var newCustomer = {
            address: this.newAddress.value,
            username: this.newUsername.value,
            password: this.newPassword.value,
            details: {
                firstName: this.newName.value,
                lastName: this.newSurname.value,
                eMail: this.newEmail.value,
                phoneNumber: +this.newPhone.value,
            }
        };
        this.customerService.createCustomer(newCustomer).subscribe(null, function (error) {
            if (error.status)
                alert('An error occured and account has not been created');
            else {
                alert('Account has been created succesfully');
            }
        });
    };
    CreateCustomerComponent.prototype.ngOnInit = function () {
    };
    CreateCustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-create-customer',
            templateUrl: './create-customer.component.html',
            styleUrls: ['./create-customer.component.css']
        })
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());
exports.CreateCustomerComponent = CreateCustomerComponent;
//# sourceMappingURL=create-customer.component.js.map