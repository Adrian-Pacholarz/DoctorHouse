"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEditProfileComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var phone_validators_1 = require("../common/validators/phone.validators");
var UserEditProfileComponent = /** @class */ (function () {
    function UserEditProfileComponent(customerService, toastyService) {
        this.customerService = customerService;
        this.toastyService = toastyService;
        this.updateUser = new forms_1.FormGroup({
            firstName: new forms_1.FormControl('', [forms_1.Validators.minLength(6)]),
            lastName: new forms_1.FormControl('', [forms_1.Validators.minLength(3)]),
            phone: new forms_1.FormControl('', [phone_validators_1.PhoneValidators.phoneIsNaN, phone_validators_1.PhoneValidators.phoneLength]),
            email: new forms_1.FormControl('', [forms_1.Validators.email]),
            address: new forms_1.FormControl(),
        });
        this.backToProfile = new forms_1.FormGroup({
            goback: new forms_1.FormControl()
        });
        this.setDefaultGoBackValue();
    }
    Object.defineProperty(UserEditProfileComponent.prototype, "firstName", {
        get: function () {
            return this.updateUser.get('firstName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserEditProfileComponent.prototype, "password", {
        get: function () {
            return this.updateUser.get('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserEditProfileComponent.prototype, "lastName", {
        get: function () {
            return this.updateUser.get('lastName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserEditProfileComponent.prototype, "phone", {
        get: function () {
            return this.updateUser.get('phone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserEditProfileComponent.prototype, "email", {
        get: function () {
            return this.updateUser.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserEditProfileComponent.prototype, "address", {
        get: function () {
            return this.updateUser.get('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserEditProfileComponent.prototype, "goback", {
        get: function () {
            return this.backToProfile.get("goback");
        },
        enumerable: false,
        configurable: true
    });
    UserEditProfileComponent.prototype.setDefaultGoBackValue = function () {
        this.goback.setValue(false);
    };
    UserEditProfileComponent.prototype.goBackToProfile = function ($event) {
        this.goback.setValue(true);
    };
    UserEditProfileComponent.prototype.updateCustomer = function (id, customer) {
        var _this = this;
        this.customerService.updateCustomer(1, this.customer).subscribe(function (customer) {
            _this.customer = customer;
            _this.firstName.setValue(_this.customer.details.firstName);
            _this.lastName.setValue(_this.customer.details.lastName);
            _this.email.setValue(_this.customer.details.eMail);
            _this.phone.setValue(_this.customer.details.phoneNumber);
            _this.address.setValue(_this.customer.address);
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
                    msg: 'An error occured and account has not been updated',
                    theme: 'bootstrap',
                    showClose: true,
                    timeout: 5000
                });
            }
        });
    };
    UserEditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getCustomerById(1).subscribe(function (customer) {
            _this.customer = customer;
            _this.firstName.setValue(_this.customer.details.firstName);
            _this.lastName.setValue(_this.customer.details.lastName);
            _this.email.setValue(_this.customer.details.eMail);
            _this.phone.setValue(_this.customer.details.phoneNumber);
            _this.address.setValue(_this.customer.address);
        });
    };
    UserEditProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-edit-profile',
            templateUrl: './user-edit-profile.component.html',
            styleUrls: ['./user-edit-profile.component.css']
        })
    ], UserEditProfileComponent);
    return UserEditProfileComponent;
}());
exports.UserEditProfileComponent = UserEditProfileComponent;
//# sourceMappingURL=user-edit-profile.component.js.map