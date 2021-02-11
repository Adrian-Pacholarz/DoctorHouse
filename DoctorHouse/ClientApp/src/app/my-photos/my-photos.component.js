"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPhotosComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MyPhotosComponent = /** @class */ (function () {
    function MyPhotosComponent(route, router, authService, photosService, toastyService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.photosService = photosService;
        this.toastyService = toastyService;
        this.userId = this.authService.currentUser.id;
        this.chooseUserPhoto = new forms_1.FormGroup({
            chosenPhoto: new forms_1.FormControl()
        });
    }
    MyPhotosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photosService.getPhotos(this.userId)
            .subscribe(function (photos) {
            _this.photos = photos,
                _this.getDefaultValue();
            _this.setDefaultValue();
        });
    };
    Object.defineProperty(MyPhotosComponent.prototype, "chosenPhoto", {
        get: function () {
            return this.chooseUserPhoto.get('chosenPhoto');
        },
        enumerable: false,
        configurable: true
    });
    MyPhotosComponent.prototype.submit = function () {
        var _this = this;
        var updatedPhotos = this.photos;
        updatedPhotos.forEach(function (photo) {
            photo.isMain = false;
        });
        var self = this;
        updatedPhotos.forEach(function (photo) {
            if (photo.fileName == self.chosenPhoto.value)
                photo.isMain = true;
        });
        this.photosService.updateUserPhotos(this.userId, updatedPhotos)
            .subscribe(function (photos) {
            _this.toastyService.success({
                title: 'Success',
                msg: 'Avatar updated succesfully',
                theme: 'bootstrap',
                showClose: true,
                timeout: 5000
            });
            location.reload();
        }, function (error) {
            _this.toastyService.error({
                title: 'Error',
                msg: 'Avatar was not updated',
                theme: 'bootstrap',
                showClose: true,
                timeout: 5000
            });
        });
    };
    MyPhotosComponent.prototype.uploadPhoto = function () {
        var _this = this;
        var nativeElement = this.fileInput.nativeElement;
        this.photosService.upload(this.userId, nativeElement.files[0])
            .subscribe(function (photo) {
            _this.photos.push(photo);
        });
    };
    MyPhotosComponent.prototype.getDefaultValue = function () {
        var self = this;
        this.photos.forEach(function (photo) {
            if (photo.isMain) {
                self.defaultValue = photo.fileName;
            }
        });
    };
    MyPhotosComponent.prototype.setDefaultValue = function () {
        this.chooseUserPhoto.setValue({ chosenPhoto: this.defaultValue });
    };
    __decorate([
        core_1.ViewChild('fileInput')
    ], MyPhotosComponent.prototype, "fileInput", void 0);
    MyPhotosComponent = __decorate([
        core_1.Component({
            selector: 'app-my-photos',
            templateUrl: './my-photos.component.html',
            styleUrls: ['./my-photos.component.css']
        })
    ], MyPhotosComponent);
    return MyPhotosComponent;
}());
exports.MyPhotosComponent = MyPhotosComponent;
//# sourceMappingURL=my-photos.component.js.map