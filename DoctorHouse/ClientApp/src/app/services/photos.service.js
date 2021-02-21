"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var PhotosService = /** @class */ (function () {
    function PhotosService(http) {
        this.http = http;
        this.httpPutOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    PhotosService.prototype.getPhotos = function (userId) {
        return this.http.get("/api/users/" + userId + "/photos");
    };
    PhotosService.prototype.getMainPhoto = function (userId) {
        return this.http.get("/api/users/" + userId + "/photos/main");
    };
    PhotosService.prototype.upload = function (userId, photo) {
        var formData = new FormData();
        formData.append('file', photo);
        return this.http.post("/api/users/" + userId + "/photos", formData, { reportProgress: true, observe: "events" });
    };
    PhotosService.prototype.updateUserPhotos = function (userId, photos) {
        return this.http.put("/api/users/" + userId + "/photos", JSON.stringify(photos), this.httpPutOptions);
    };
    PhotosService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PhotosService);
    return PhotosService;
}());
exports.PhotosService = PhotosService;
//# sourceMappingURL=photos.service.js.map