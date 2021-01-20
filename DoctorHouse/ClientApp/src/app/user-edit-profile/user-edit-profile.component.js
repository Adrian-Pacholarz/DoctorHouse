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
var UserEditProfileComponent = /** @class */ (function () {
    function UserEditProfileComponent(customerService, toastyService) {
        this.customerService = customerService;
        this.toastyService = toastyService;
        this.updateUser = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(),
            lastName: new forms_1.FormControl(),
            phone: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            address: new forms_1.FormControl(),
            username: new forms_1.FormControl(),
            password: new forms_1.FormControl()
        });
    }
    Object.defineProperty(UserEditProfileComponent.prototype, "firstName", {
        get: function () {
            return this.updateUser.get('firstName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserEditProfileComponent.prototype, "username", {
        get: function () {
            return this.updateUser.get('username');
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
    UserEditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getCustomerById(1).subscribe(function (customer) {
            _this.customer = customer;
            _this.firstName.setValue(_this.customer.details.firstName);
            _this.lastName.setValue(_this.customer.details.lastName);
            _this.email.setValue(_this.customer.details.eMail);
            _this.phone.setValue(_this.customer.details.phoneNumber);
            _this.address.setValue(_this.customer.address);
            _this.username.setValue(_this.customer.username);
            _this.password.setValue(_this.customer.password);
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