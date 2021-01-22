"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.url = '/api/users/customers';
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    CustomerService.prototype.ngOnInit = function () {
    };
    CustomerService.prototype.getCustomers = function () {
        return this.http.get(this.url);
    };
    CustomerService.prototype.getCustomerById = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    CustomerService.prototype.updateCustomer = function (id, customer) {
        return this.http.patch(this.url + '/' + id, JSON.stringify(customer), this.httpOptions);
    };
    CustomerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map