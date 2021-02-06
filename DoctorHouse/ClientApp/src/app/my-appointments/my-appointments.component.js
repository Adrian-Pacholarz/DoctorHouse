"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAppointmentsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MyAppointmentsComponent = /** @class */ (function () {
    function MyAppointmentsComponent(customerService, sanitizer, route, router, authService, toastyService) {
        this.customerService = customerService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.toastyService = toastyService;
        this.currentUser = this.authService.currentUser;
        this.isOpen = false;
        this.getAppointmentForm = new forms_1.FormGroup({
            customerFullName: new forms_1.FormControl(),
            customerPhoneNumber: new forms_1.FormControl(),
            specialistFullName: new forms_1.FormControl(),
            specialistPhoneNumber: new forms_1.FormControl(),
            companyFullName: new forms_1.FormControl(),
            companyPhoneNumber: new forms_1.FormControl(),
            appointmentDate: new forms_1.FormControl(),
            status: new forms_1.FormControl(),
            description: new forms_1.FormControl(),
            customerAddress: new forms_1.FormControl()
        });
    }
    Object.defineProperty(MyAppointmentsComponent.prototype, "customerFullName", {
        get: function () {
            return this.getAppointmentForm.get('customerFullName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyAppointmentsComponent.prototype, "customerAddress", {
        get: function () {
            return this.getAppointmentForm.get('customerAddress');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyAppointmentsComponent.prototype, "customerPhoneNumber", {
        get: function () {
            return this.getAppointmentForm.get('customerPhoneNumber');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyAppointmentsComponent.prototype, "specialistFullName", {
        get: function () {
            return this.getAppointmentForm.get('specialistFullName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyAppointmentsComponent.prototype, "specialistPhoneNumber", {
        get: function () {
            return this.getAppointmentForm.get('specialistPhoneNumber');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyAppointmentsComponent.prototype, "companyFullName", {
        get: function () {
            return this.getAppointmentForm.get('companyFullName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyAppointmentsComponent.prototype, "companyPhoneNumber", {
        get: function () {
            return this.getAppointmentForm.get('companyPhoneNumber');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyAppointmentsComponent.prototype, "appointmentDate", {
        get: function () {
            return this.getAppointmentForm.get('appointmentDate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyAppointmentsComponent.prototype, "status", {
        get: function () {
            return this.getAppointmentForm.get('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyAppointmentsComponent.prototype, "description", {
        get: function () {
            return this.getAppointmentForm.get('description');
        },
        enumerable: false,
        configurable: true
    });
    MyAppointmentsComponent.prototype.formatAddress = function () {
        var addressDb = this.getAppointmentForm.get('customerAddress').value.toLowerCase();
        var street = 'ul.';
        var settlement = 'os.';
        console.log(addressDb);
        if (addressDb.includes(street) || addressDb.includes(settlement)) {
            addressDb = addressDb.slice(3);
        }
        addressDb = addressDb.trim(' ');
        addressDb = addressDb.replace(/\s/g, '+');
        var map = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBlYuKgi1m3lnyfIHv2qkWf_MzpBBc2mr8&q=' + addressDb;
        return this.sanitizer.bypassSecurityTrustResourceUrl(map);
    };
    MyAppointmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getCustomerById(this.currentUser.id).subscribe(function (customer) {
            _this.customer = customer;
            _this.appointments = _this.customer.appointments;
            _this.customerAddress.setValue(_this.customer.address);
        }, function (err) {
            if (err.status == 404)
                _this.router.navigate(['/not-found']);
        });
        console.log(this.customerAddress);
    };
    MyAppointmentsComponent = __decorate([
        core_1.Component({
            selector: 'app-my-appointments',
            templateUrl: './my-appointments.component.html',
            styleUrls: ['./my-appointments.component.css']
        })
    ], MyAppointmentsComponent);
    return MyAppointmentsComponent;
}());
exports.MyAppointmentsComponent = MyAppointmentsComponent;
//# sourceMappingURL=my-appointments.component.js.map