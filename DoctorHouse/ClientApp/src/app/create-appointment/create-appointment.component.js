"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppointmentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Dictionary_1 = require("../interfaces/Dictionary");
var CreateAppointmentComponent = /** @class */ (function () {
    function CreateAppointmentComponent(appointmentService, customerService, sanitizer, route, router, authService, toastyService, specialistService, localeService) {
        this.appointmentService = appointmentService;
        this.customerService = customerService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.toastyService = toastyService;
        this.specialistService = specialistService;
        this.localeService = localeService;
        this.currentUser = this.authService.currentUser;
        this.isDisabled = true;
        this.locale = 'engb';
        this.disabledDates = [];
        this.getAppointmentForm = new forms_1.FormGroup({
            customerFullName: new forms_1.FormControl(),
            customerPhoneNumber: new forms_1.FormControl(),
            customerAddress: new forms_1.FormControl(),
            specialistFullName: new forms_1.FormControl(),
            specialistPhoneNumber: new forms_1.FormControl(),
            specialistId: new forms_1.FormControl(),
            companies: new forms_1.FormControl('', forms_1.Validators.required),
            companyFullName: new forms_1.FormControl(),
            companyPhoneNumber: new forms_1.FormControl(),
            companyId: new forms_1.FormControl(),
            appointmentDate: new forms_1.FormControl('', forms_1.Validators.required),
            appointmentHour: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(10)])
        });
    }
    Object.defineProperty(CreateAppointmentComponent.prototype, "customerFullName", {
        get: function () {
            return this.getAppointmentForm.get('customerFullName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateAppointmentComponent.prototype, "companies", {
        get: function () {
            return this.getAppointmentForm.get('companies');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateAppointmentComponent.prototype, "appointmentHour", {
        get: function () {
            return this.getAppointmentForm.get('appointmentHour');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateAppointmentComponent.prototype, "companyId", {
        get: function () {
            return this.getAppointmentForm.get('companyId');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateAppointmentComponent.prototype, "specialistId", {
        get: function () {
            return this.getAppointmentForm.get('specialistId');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateAppointmentComponent.prototype, "customerAddress", {
        get: function () {
            return this.getAppointmentForm.get('customerAddress');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateAppointmentComponent.prototype, "customerPhoneNumber", {
        get: function () {
            return this.getAppointmentForm.get('customerPhoneNumber');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateAppointmentComponent.prototype, "specialistFullName", {
        get: function () {
            return this.getAppointmentForm.get('specialistFullName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateAppointmentComponent.prototype, "specialistPhoneNumber", {
        get: function () {
            return this.getAppointmentForm.get('specialistPhoneNumber');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateAppointmentComponent.prototype, "companyFullName", {
        get: function () {
            return this.getAppointmentForm.get('companyFullName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateAppointmentComponent.prototype, "companyPhoneNumber", {
        get: function () {
            return this.getAppointmentForm.get('companyPhoneNumber');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateAppointmentComponent.prototype, "appointmentDate", {
        get: function () {
            return this.getAppointmentForm.get('appointmentDate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateAppointmentComponent.prototype, "description", {
        get: function () {
            return this.getAppointmentForm.get('description');
        },
        enumerable: false,
        configurable: true
    });
    CreateAppointmentComponent.prototype.checkIf8 = function () {
        if ((this.getAppointmentForm.get('appointmentHour').value) === "8:00") {
            return true;
        }
    };
    CreateAppointmentComponent.prototype.checkIf12 = function () {
        if ((this.getAppointmentForm.get('appointmentHour').value) === "12:00") {
            return true;
        }
    };
    CreateAppointmentComponent.prototype.checkPhoneNum = function () {
        var id = (this.getAppointmentForm.get('companies')).value;
        for (var _i = 0, _a = this.allCompanies.values; _i < _a.length; _i++) {
            var company = _a[_i];
            if (+company.id === +id) {
                return company.phoneNumber.value;
            }
        }
    };
    CreateAppointmentComponent.prototype.formatAddress = function () {
        var addressDb = this.getAppointmentForm.get('customerAddress').value.toString().toLowerCase();
        var street = 'ul.';
        var settlement = 'os.';
        if (addressDb.includes(street) || addressDb.includes(settlement)) {
            addressDb = addressDb.slice(3);
        }
        addressDb = addressDb.trim(' ');
        addressDb = addressDb.replace(/\s/g, '+');
        var map = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBlYuKgi1m3lnyfIHv2qkWf_MzpBBc2mr8&q=' + addressDb;
        return this.sanitizer.bypassSecurityTrustResourceUrl(map);
    };
    CreateAppointmentComponent.prototype.create = function () {
        var _this = this;
        var hour;
        if (this.appointmentHour.value === '8:00') {
            hour = " 09:00:00.0000000";
        }
        else if (this.appointmentHour.value === '12:00') {
            hour = " 13:00:00.0000000";
        }
        var date = new Date(this.appointmentDate.value);
        var slicedDate = date.toISOString().slice(0, 10);
        var stringDate = slicedDate + hour;
        var localDate = new Date(stringDate);
        var newAppointment = {
            appointmentDate: localDate,
            status: 'assigned',
            description: this.description.value,
            customerId: +this.customerId,
            specialistId: +this.specialistId.value,
            companyId: +this.companies.value,
        };
        this.appointmentService.createAppointment(newAppointment).subscribe(function (appointment) {
            _this.toastyService.success({
                title: 'Success',
                msg: 'Appointment has been created',
                theme: 'bootstrap',
                showClose: true,
                timeout: 5000
            });
            location.reload();
        }, function (error) {
            if (error.status === 500)
                _this.toastyService.error({
                    title: 'Error',
                    msg: 'Wrong data provided',
                    theme: 'bootstrap',
                    showClose: true,
                    timeout: 5000
                });
            else {
                _this.toastyService.error({
                    title: 'Error',
                    msg: 'An error occured and appointment was not created',
                    theme: 'bootstrap',
                    showClose: true,
                    timeout: 5000
                });
            }
        });
    };
    CreateAppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.filter = params.filter;
        });
        this.customerService.getCustomerById(this.currentUser.id).subscribe(function (customer) {
            _this.customer = customer;
            _this.customerId = _this.currentUser.id;
            _this.customerFullName.setValue(_this.customer.details.firstName + " " + _this.customer.details.lastName);
            _this.customerPhoneNumber.setValue(_this.customer.details.phoneNumber);
            _this.customerAddress.setValue(_this.customer.address);
        });
        this.specialistService.getSpecialists()
            .subscribe(function (allSpecialists) {
            _this.allSpecialists = allSpecialists;
            _this.onFilterChange();
            if (!_this.specialists.length)
                _this.router.navigate(['/not-found']);
        });
        this.specialistService.getSpecialistById(this.filter).subscribe(function (specialist) {
            _this.specialist = specialist;
            _this.specialistId.setValue(_this.filter);
            _this.specialistFullName.setValue(_this.specialist.details.firstName + " " + _this.specialist.details.lastName);
            _this.specialistPhoneNumber.setValue(_this.specialist.details.phoneNumber);
            _this.allCompanies = _this.specialist.companies;
            _this.companies.setValue((_this.getAppointmentForm.get('companies')).value);
            _this.appointmentHour.setValue((_this.appointmentDate.value).getHours() + ":00");
            _this.specialistAppointments = _this.specialist.appointments;
            var hoursOfAppointments = new Dictionary_1.Dictionary();
            for (var _i = 0, _a = _this.specialistAppointments; _i < _a.length; _i++) {
                var appointment = _a[_i];
                var slicedDate = (appointment.appointmentDate).slice(0, 10);
                if ((appointment.status !== 'resolved')) {
                    if (!hoursOfAppointments.containsKey(slicedDate)) {
                        hoursOfAppointments.add(slicedDate, 1);
                    }
                    else if (hoursOfAppointments.containsKey(slicedDate)) {
                        hoursOfAppointments.add(slicedDate, 2);
                        _this.disabledDates.push(new Date(appointment.appointmentDate));
                    }
                }
            }
        });
        this.localeService.use(this.locale);
    };
    CreateAppointmentComponent.prototype.onFilterChange = function () {
        var _this = this;
        var specialists = this.allSpecialists;
        if (this.filter)
            specialists = specialists.filter(function (s) { return s.id == _this.filter; });
        this.specialists = specialists;
    };
    CreateAppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-create-appointment',
            templateUrl: './create-appointment.component.html',
            styleUrls: ['./create-appointment.component.css']
        })
    ], CreateAppointmentComponent);
    return CreateAppointmentComponent;
}());
exports.CreateAppointmentComponent = CreateAppointmentComponent;
//# sourceMappingURL=create-appointment.component.js.map