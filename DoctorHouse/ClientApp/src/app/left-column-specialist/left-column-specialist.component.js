"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftColumnSpecialistComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LeftColumnSpecialistComponent = /** @class */ (function () {
    function LeftColumnSpecialistComponent(specialistService) {
        this.specialistService = specialistService;
        this.getUserForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(),
            lastName: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
        });
    }
    Object.defineProperty(LeftColumnSpecialistComponent.prototype, "firstName", {
        get: function () {
            return this.getUserForm.get('firstName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LeftColumnSpecialistComponent.prototype, "lastName", {
        get: function () {
            return this.getUserForm.get('lastName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LeftColumnSpecialistComponent.prototype, "email", {
        get: function () {
            return this.getUserForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    LeftColumnSpecialistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.specialistService.getSpecialistById(3).subscribe(function (specialist) {
            _this.specialist = specialist;
            _this.firstName.setValue(_this.specialist.details.firstName);
            _this.lastName.setValue(_this.specialist.details.lastName);
            _this.email.setValue(_this.specialist.details.eMail);
        });
    };
    LeftColumnSpecialistComponent = __decorate([
        core_1.Component({
            selector: 'app-left-column-specialist',
            templateUrl: './left-column-specialist.component.html',
            styleUrls: ['./left-column-specialist.component.css']
        })
    ], LeftColumnSpecialistComponent);
    return LeftColumnSpecialistComponent;
}());
exports.LeftColumnSpecialistComponent = LeftColumnSpecialistComponent;
//# sourceMappingURL=left-column-specialist.component.js.map