"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftColumnDetailsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LeftColumnDetailsComponent = /** @class */ (function () {
    function LeftColumnDetailsComponent(customerService, route, router, photoService, authService) {
        this.customerService = customerService;
        this.route = route;
        this.router = router;
        this.photoService = photoService;
        this.authService = authService;
        this.currentUser = this.authService.currentUser;
        this.getUserForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(),
            lastName: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
        });
    }
    Object.defineProperty(LeftColumnDetailsComponent.prototype, "firstName", {
        get: function () {
            return this.getUserForm.get('firstName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LeftColumnDetailsComponent.prototype, "lastName", {
        get: function () {
            return this.getUserForm.get('lastName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LeftColumnDetailsComponent.prototype, "email", {
        get: function () {
            return this.getUserForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    LeftColumnDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.customerId = +p['id'];
        });
        this.photoService.getMainPhoto(this.customerId)
            .subscribe(function (photo) {
            _this.userPhoto = photo;
        });
        this.customerService.getCustomerById(this.customerId).subscribe(function (customer) {
            _this.customer = customer;
            _this.firstName.setValue(_this.customer.details.firstName);
            _this.lastName.setValue(_this.customer.details.lastName);
            _this.email.setValue(_this.customer.details.eMail);
        });
    };
    LeftColumnDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-left-column-details',
            templateUrl: './left-column-details.component.html',
            styleUrls: ['./left-column-details.component.css']
        })
    ], LeftColumnDetailsComponent);
    return LeftColumnDetailsComponent;
}());
exports.LeftColumnDetailsComponent = LeftColumnDetailsComponent;
//# sourceMappingURL=left-column-details.component.js.map