"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(toastyService) {
        this.toastyService = toastyService;
        this.contactForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            message: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    Object.defineProperty(ContactComponent.prototype, "name", {
        get: function () {
            return this.contactForm.get('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactComponent.prototype, "email", {
        get: function () {
            return this.contactForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactComponent.prototype, "message", {
        get: function () {
            return this.contactForm.get('message');
        },
        enumerable: false,
        configurable: true
    });
    ContactComponent.prototype.send = function () {
        this.toastyService.success({
            title: 'Success',
            msg: 'Thank you for your message!',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
        });
        location.reload();
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map