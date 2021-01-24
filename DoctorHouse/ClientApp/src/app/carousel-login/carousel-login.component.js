"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselLoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CarouselLoginComponent = /** @class */ (function () {
    function CarouselLoginComponent(router, authenticateService, toastyService) {
        this.router = router;
        this.authenticateService = authenticateService;
        this.toastyService = toastyService;
        this.form = new forms_1.FormGroup({
            username: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', forms_1.Validators.required)
        });
        this.specialistForm = new forms_1.FormGroup({
            specialistUsername: new forms_1.FormControl('', forms_1.Validators.required),
            specialistPassword: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    Object.defineProperty(CarouselLoginComponent.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarouselLoginComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarouselLoginComponent.prototype, "specialistUsername", {
        get: function () {
            return this.specialistForm.get('specialistUsername');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarouselLoginComponent.prototype, "specialistPassword", {
        get: function () {
            return this.specialistForm.get('specialistPassword');
        },
        enumerable: false,
        configurable: true
    });
    CarouselLoginComponent.prototype.logIn = function () {
        var _this = this;
        var credentials = {
            username: this.username.value,
            password: this.password.value,
        };
        this.authenticateService.login(credentials)
            .subscribe(function (result) {
            var name = localStorage.getItem('name');
            var surname = localStorage.getItem('surname');
            _this.toastyService.success({
                title: 'Success',
                msg: 'Login succesfull, welcome back ' + name + ' ' + surname,
                theme: 'bootstrap',
                showClose: true,
                timeout: 5000
            });
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.invalidLogin = true;
        });
    };
    CarouselLoginComponent.prototype.ngOnInit = function () {
    };
    CarouselLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel-login',
            templateUrl: './carousel-login.component.html',
            styleUrls: ['./carousel-login.component.css']
        })
    ], CarouselLoginComponent);
    return CarouselLoginComponent;
}());
exports.CarouselLoginComponent = CarouselLoginComponent;
//# sourceMappingURL=carousel-login.component.js.map