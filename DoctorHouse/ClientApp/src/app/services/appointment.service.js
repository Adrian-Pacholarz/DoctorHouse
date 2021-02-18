"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AppointmentService = /** @class */ (function () {
    function AppointmentService(http) {
        this.http = http;
        this.url = '/api/appointments';
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    AppointmentService.prototype.getAppointments = function () {
        return this.http.get(this.url);
    };
    AppointmentService.prototype.getAppointmentsById = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    AppointmentService.prototype.updateAppointment = function (id, appointment) {
        return this.http.put(this.url + '/' + id, JSON.stringify(appointment), this.httpOptions);
    };
    AppointmentService.prototype.createAppointment = function (appointment) {
        return this.http.post(this.url, JSON.stringify(appointment), this.httpOptions);
    };
    AppointmentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AppointmentService);
    return AppointmentService;
}());
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map