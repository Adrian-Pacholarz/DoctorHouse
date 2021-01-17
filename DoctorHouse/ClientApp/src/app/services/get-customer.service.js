"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCustomerService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var GetCustomerService = /** @class */ (function () {
    function GetCustomerService(http) {
        this.http = http;
        this.url = '/api/users/customers/';
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    GetCustomerService.prototype.getCustomer = function () {
    };
    GetCustomerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GetCustomerService);
    return GetCustomerService;
}());
exports.GetCustomerService = GetCustomerService;
//# sourceMappingURL=get-customer.service.js.map