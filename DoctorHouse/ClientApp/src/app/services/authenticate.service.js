"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateService = void 0;
var angular_jwt_1 = require("@auth0/angular-jwt");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(http) {
        this.http = http;
        this.url = '/api/users/authenticate/';
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    AuthenticateService.prototype.login = function (credentials) {
        return this.http.post(this.url, JSON.stringify(credentials), this.httpOptions)
            .pipe(operators_1.map(function (response) {
            if (response && response.token) {
                localStorage.setItem('token', response['token']);
                localStorage.setItem('id', response['id']);
                localStorage.setItem('name', response['firstName']);
                localStorage.setItem('surname', response['lastName']);
                localStorage.setItem('role', response['userRole']);
                return true;
            }
            return false;
        }));
    };
    AuthenticateService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthenticateService.prototype.isLoggedIn = function () {
        var jwtHelper = new angular_jwt_1.JwtHelperService();
        return !jwtHelper.isTokenExpired(localStorage.getItem('token'));
    };
    Object.defineProperty(AuthenticateService.prototype, "currentUser", {
        get: function () {
            var token = localStorage.getItem('token');
            if (!token)
                return null;
            var currentUser = {
                id: localStorage.getItem('id'),
                name: localStorage.getItem('name'),
                surname: localStorage.getItem('surname'),
                role: localStorage.getItem('role')
            };
            return currentUser;
        },
        enumerable: false,
        configurable: true
    });
    AuthenticateService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthenticateService);
    return AuthenticateService;
}());
exports.AuthenticateService = AuthenticateService;
//# sourceMappingURL=authenticate.service.js.map