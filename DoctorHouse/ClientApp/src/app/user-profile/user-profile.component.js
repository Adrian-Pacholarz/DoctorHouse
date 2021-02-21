"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
        this.editProfile = new forms_1.FormGroup({
            edit: new forms_1.FormControl()
        });
        this.setDefaultValue();
    }
    Object.defineProperty(UserProfileComponent.prototype, "edit", {
        get: function () {
            return this.editProfile.get("edit");
        },
        enumerable: false,
        configurable: true
    });
    UserProfileComponent.prototype.setDefaultValue = function () {
        this.edit.setValue(false);
    };
    UserProfileComponent.prototype.clickEditProfile = function ($event) {
        this.edit.setValue(true);
        console.log('button clicked');
    };
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.css']
        })
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map