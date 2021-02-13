"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginButtonComponent = void 0;
var core_1 = require("@angular/core");
var UserLoginButtonComponent = /** @class */ (function () {
    function UserLoginButtonComponent(authService, photoService, toastyService) {
        this.authService = authService;
        this.photoService = photoService;
        this.toastyService = toastyService;
        this.currentUser = this.authService.currentUser;
    }
    UserLoginButtonComponent.prototype.logout = function () {
        this.authService.logout();
        location.reload();
        this.toastyService.info({
            title: 'Information',
            msg: 'You have been logged out',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
        });
    };
    UserLoginButtonComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    UserLoginButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photoService.getMainPhoto(this.currentUser.id)
            .subscribe(function (photo) {
            _this.userPhoto = photo;
        });
    };
    UserLoginButtonComponent = __decorate([
        core_1.Component({
            selector: 'app-user-login-button',
            templateUrl: './user-login-button.component.html',
            styleUrls: ['./user-login-button.component.css']
        })
    ], UserLoginButtonComponent);
    return UserLoginButtonComponent;
}());
exports.UserLoginButtonComponent = UserLoginButtonComponent;
//# sourceMappingURL=user-login-button.component.js.map