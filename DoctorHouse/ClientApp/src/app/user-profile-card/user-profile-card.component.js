"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileCardComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UserProfileCardComponent = /** @class */ (function () {
    function UserProfileCardComponent(customerService) {
        this.customerService = customerService;
        this.getUserForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(),
            lastName: new forms_1.FormControl(),
            phone: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            address: new forms_1.FormControl()
        });
    }
    Object.defineProperty(UserProfileCardComponent.prototype, "firstName", {
        get: function () {
            return this.getUserForm.get('firstName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfileCardComponent.prototype, "lastName", {
        get: function () {
            return this.getUserForm.get('lastName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfileCardComponent.prototype, "phone", {
        get: function () {
            return this.getUserForm.get('phone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfileCardComponent.prototype, "email", {
        get: function () {
            return this.getUserForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfileCardComponent.prototype, "address", {
        get: function () {
            return this.getUserForm.get('address');
        },
        enumerable: false,
        configurable: true
    });
    UserProfileCardComponent.prototype.ngOnInit = function () {
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
    UserProfileCardComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile-card',
            templateUrl: './user-profile-card.component.html',
            styleUrls: ['./user-profile-card.component.css']
        })
    ], UserProfileCardComponent);
    return UserProfileCardComponent;
}());
exports.UserProfileCardComponent = UserProfileCardComponent;
//# sourceMappingURL=user-profile-card.component.js.map