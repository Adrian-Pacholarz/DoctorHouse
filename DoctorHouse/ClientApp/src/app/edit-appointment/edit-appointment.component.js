"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditAppointmentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Dictionary_1 = require("../interfaces/Dictionary");
var EditAppointmentComponent = /** @class */ (function () {
    function EditAppointmentComponent(appointmentService, customerService, sanitizer, route, router, authService, toastyService, specialistService, localeService, formBuilder) {
        this.appointmentService = appointmentService;
        this.customerService = customerService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.toastyService = toastyService;
        this.specialistService = specialistService;
        this.localeService = localeService;
        this.formBuilder = formBuilder;
        this.currentUser = this.authService.currentUser;
        this.locale = 'engb';
        this.disabledDates = [];
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
            customerAddress: new forms_1.FormControl(),
            customers: new forms_1.FormControl(),
            customerId: new forms_1.FormControl(),
            specialistId: new forms_1.FormControl(),
        });
    }
    Object.defineProperty(EditAppointmentComponent.prototype, "customerFullName", {
        get: function () {
            return this.getAppointmentForm.get('customerFullName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditAppointmentComponent.prototype, "customerId", {
        get: function () {
            return this.getAppointmentForm.get('customerId');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditAppointmentComponent.prototype, "specialistId", {
        get: function () {
            return this.getAppointmentForm.get('specialistId');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditAppointmentComponent.prototype, "customers", {
        get: function () {
            return this.getAppointmentForm.get('customers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditAppointmentComponent.prototype, "customerAddress", {
        get: function () {
            return this.getAppointmentForm.get('customerAddress');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditAppointmentComponent.prototype, "customerPhoneNumber", {
        get: function () {
            return this.getAppointmentForm.get('customerPhoneNumber');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditAppointmentComponent.prototype, "specialistFullName", {
        get: function () {
            return this.getAppointmentForm.get('specialistFullName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditAppointmentComponent.prototype, "specialistPhoneNumber", {
        get: function () {
            return this.getAppointmentForm.get('specialistPhoneNumber');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditAppointmentComponent.prototype, "companyFullName", {
        get: function () {
            return this.getAppointmentForm.get('companyFullName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditAppointmentComponent.prototype, "companyPhoneNumber", {
        get: function () {
            return this.getAppointmentForm.get('companyPhoneNumber');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditAppointmentComponent.prototype, "appointmentDate", {
        get: function () {
            return this.getAppointmentForm.get('appointmentDate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditAppointmentComponent.prototype, "status", {
        get: function () {
            return this.getAppointmentForm.get('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditAppointmentComponent.prototype, "description", {
        get: function () {
            return this.getAppointmentForm.get('description');
        },
        enumerable: false,
        configurable: true
    });
    EditAppointmentComponent.prototype.selectCustomer = function (customerId, customerDb) {
        if (+customerDb === +customerId) {
            return true;
        }
    };
    EditAppointmentComponent.prototype.formatAddress = function (addressDb) {
        addressDb = addressDb.toString().toLowerCase();
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
    EditAppointmentComponent.prototype.update = function () {
        console.log('button clicked');
    };
    EditAppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.appointmentId = +p['id'];
        });
        this.appointmentService.getAppointmentsById(this.appointmentId).subscribe(function (appointment) {
            _this.appointment = appointment;
            _this.customerFullName.setValue(_this.appointment.customer.fullName);
            _this.customerId.setValue(_this.appointment.customer.id);
            _this.customerPhoneNumber.setValue(_this.appointment.customer.phoneNumber);
            _this.specialistFullName.setValue(_this.appointment.specialist.fullName);
            _this.specialistId.setValue(_this.appointment.specialist.id);
            _this.specialistPhoneNumber.setValue(_this.appointment.specialist.phoneNumber);
            _this.companyFullName.setValue(_this.appointment.company.fullName);
            _this.companyPhoneNumber.setValue(_this.appointment.company.phoneNumber);
            _this.description.setValue(_this.appointment.description);
            _this.appointmentDate.setValue(new Date(_this.appointment.appointmentDate));
            _this.status.setValue(_this.appointment.status);
            _this.specialistService.getSpecialistById(_this.getAppointmentForm.get('specialistId').value)
                .subscribe(function (specialist) {
                _this.specialist = specialist;
                _this.specialistAppointments = _this.specialist.appointments;
                var hoursOfAppointments = new Dictionary_1.Dictionary();
                for (var _i = 0, _a = _this.specialistAppointments; _i < _a.length; _i++) {
                    var appointment_1 = _a[_i];
                    var slicedDate = (appointment_1.appointmentDate).slice(0, 10);
                    if (!hoursOfAppointments.containsKey(slicedDate)) {
                        hoursOfAppointments.add(slicedDate, 1);
                    }
                    else if (hoursOfAppointments.containsKey(slicedDate)) {
                        hoursOfAppointments.add(slicedDate, 2);
                        _this.disabledDates.push(new Date(appointment_1.appointmentDate));
                    }
                }
                console.log(hoursOfAppointments);
                //for (let appointment of this.specialistAppointments) {
                //  this.disabledDates.push(new Date(appointment.appointmentDate));
                //}
                console.log(_this.disabledDates);
            });
        });
        this.customerService.getCustomers().subscribe(function (allCustomers) {
            _this.allCustomers = allCustomers;
        });
        this.localeService.use(this.locale);
    };
    EditAppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-appointment',
            templateUrl: './edit-appointment.component.html',
            styleUrls: ['./edit-appointment.component.css']
        })
    ], EditAppointmentComponent);
    return EditAppointmentComponent;
}());
exports.EditAppointmentComponent = EditAppointmentComponent;
//# sourceMappingURL=edit-appointment.component.js.map