"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSpecialistProfileComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UserSpecialistProfileComponent = /** @class */ (function () {
    function UserSpecialistProfileComponent() {
        this.editProfile = new forms_1.FormGroup({
            edit: new forms_1.FormControl()
        });
        this.setDefaultValue();
    }
    Object.defineProperty(UserSpecialistProfileComponent.prototype, "edit", {
        get: function () {
            return this.editProfile.get("edit");
        },
        enumerable: false,
        configurable: true
    });
    UserSpecialistProfileComponent.prototype.setDefaultValue = function () {
        this.edit.setValue(false);
    };
    UserSpecialistProfileComponent.prototype.clickEditProfile = function ($event) {
        this.edit.setValue(true);
        console.log('button clicked');
    };
    UserSpecialistProfileComponent.prototype.ngOnInit = function () {
    };
    UserSpecialistProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-specialist-profile',
            templateUrl: './user-specialist-profile.component.html',
            styleUrls: ['./user-specialist-profile.component.css']
        })
    ], UserSpecialistProfileComponent);
    return UserSpecialistProfileComponent;
}());
exports.UserSpecialistProfileComponent = UserSpecialistProfileComponent;
//# sourceMappingURL=user-specialist-profile.component.js.map