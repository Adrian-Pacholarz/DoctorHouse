"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialistService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var SpecialistService = /** @class */ (function () {
    function SpecialistService(http) {
        this.http = http;
        this.url = '/api/users/specialists';
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    SpecialistService.prototype.ngOnInit = function () {
    };
    SpecialistService.prototype.getSpecialists = function () {
        return this.http.get(this.url);
    };
    SpecialistService.prototype.getSpecialistById = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    SpecialistService.prototype.updateSpecialist = function (id, specialist) {
        return this.http.put(this.url + '/' + id, JSON.stringify(specialist), this.httpOptions);
    };
    SpecialistService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SpecialistService);
    return SpecialistService;
}());
exports.SpecialistService = SpecialistService;
//# sourceMappingURL=specialist.service.js.map