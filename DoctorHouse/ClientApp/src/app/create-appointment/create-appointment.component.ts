import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { ToastyService } from 'ng2-toasty';
import { SpecialistService } from '../services/specialist.service';
import { AppointmentService } from '../services/appointment.service';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { CommonModule } from '@angular/common';
import { ViewChild, AfterViewInit } from "@angular/core";
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';
import { Dictionary } from '../interfaces/Dictionary';
import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  filter: string;
  currentUser = this.authService.currentUser;
  customerId;
  customer;
  allSpecialists;
  specialists;
  specialist;
  specialistAppointments;
  allCompanies;
  isDisabled = true;
  locale = 'engb';
  disabledDates = [];
  companyPhone;
  minDate;
  dates = [];

  getAppointmentForm = new FormGroup({
    customerFullName: new FormControl(),
    customerPhoneNumber: new FormControl(),
    customerAddress: new FormControl(),

    specialistFullName: new FormControl(),
    specialistPhoneNumber: new FormControl(),
    specialistId: new FormControl(),

    companies: new FormControl('', Validators.required),
    companyFullName: new FormControl(),
    companyPhoneNumber: new FormControl(),
    companyId: new FormControl(),

    appointmentDate: new FormControl('', Validators.required),
    appointmentHour: new FormControl('', Validators.required),

    description: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  get customerFullName() {
    return this.getAppointmentForm.get('customerFullName')
  }

  get companies() {
    return this.getAppointmentForm.get('companies')
  }

  get appointmentHour() {
    return this.getAppointmentForm.get('appointmentHour')
  }

  get companyId() {
    return this.getAppointmentForm.get('companyId')
  }

  get specialistId() {
    return this.getAppointmentForm.get('specialistId')
  }

  get customerAddress() {
    return this.getAppointmentForm.get('customerAddress')
  }

  get customerPhoneNumber() {
    return this.getAppointmentForm.get('customerPhoneNumber')
  }

  get specialistFullName() {
    return this.getAppointmentForm.get('specialistFullName')
  }

  get specialistPhoneNumber() {
    return this.getAppointmentForm.get('specialistPhoneNumber')
  }

  get companyFullName() {
    return this.getAppointmentForm.get('companyFullName')
  }

  get companyPhoneNumber() {
    return this.getAppointmentForm.get('companyPhoneNumber')
  }

  get appointmentDate() {
    return this.getAppointmentForm.get('appointmentDate')
  }

  get description() {
    return this.getAppointmentForm.get('description')
  }



  checkIf8() {
    if ((this.getAppointmentForm.get('appointmentHour').value) === "8:00") {
      return true;
    }
  }

  checkIf12() {
    if ((this.getAppointmentForm.get('appointmentHour').value) === "12:00") {
      return true;
    }
  }


  formatAddress(): SafeResourceUrl {
    let addressDb = this.getAppointmentForm.get('customerAddress').value.toString().toLowerCase();
    let street = 'ul.';
    let settlement = 'os.';

    if (addressDb.includes(street) || addressDb.includes(settlement)) {
      addressDb = addressDb.slice(3);
    }

    addressDb = addressDb.trim(' ');
    addressDb = addressDb.replace(/\s/g, '+');
    let map = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBlYuKgi1m3lnyfIHv2qkWf_MzpBBc2mr8&q=' + addressDb;
    return this.sanitizer.bypassSecurityTrustResourceUrl(map);
  }

  checkAvailableHour() {

    let hourToCheck;
    if (this.appointmentHour.value === '8:00') {
      hourToCheck = "T08:00:00";
    }
    else if (this.appointmentHour.value === '12:00') {
      hourToCheck = "T12:00:00";
    }
    console.log(hourToCheck);

    let dateToCheck = new Date(this.appointmentDate.value);
    let slicedDateToCheck = (dateToCheck.toISOString()).slice(0, 10);
    let stringDateToCheck = slicedDateToCheck + hourToCheck;
    console.log(stringDateToCheck);



    if (this.dates.includes(stringDateToCheck)) {
      console.log("hour taken");
      return true;
    }
    else if (!this.dates.includes(stringDateToCheck)) {
      console.log("hour not taken");
      return false;

    }

  }


  create() {
    let hour;

    if (this.appointmentHour.value === '8:00') {
      hour = " 09:00:00.0000000";

    }
    else if (this.appointmentHour.value === '12:00') {
      hour = " 13:00:00.0000000";
    }


    let date = new Date(this.appointmentDate.value);
    let slicedDate = date.toISOString().slice(0, 10);
    let stringDate = slicedDate + hour;
    let localDate = new Date(stringDate);




      let newAppointment = {
        appointmentDate: localDate,
        status: 'assigned',
        description: this.description.value,
        customerId: +this.customerId,
        specialistId: +this.specialistId.value,
        companyId: +this.companies.value,
      };



    this.appointmentService.createAppointment(newAppointment).subscribe(appointment =>


    {
      console.log(newAppointment)
        this.toastyService.success({
          title: 'Success',
          msg: 'Appointment has been created',
          theme: 'bootstrap',
          showClose: true,
          timeout: 5000
        })

        //location.replace("/my-appointments");

      },
        (error: Response) => {
          if (error.status === 500)
            this.toastyService.error({
              title: 'Error',
              msg: 'Wrong data provided',
              theme: 'bootstrap',
              showClose: true,
              timeout: 5000
            });


          else {
            this.toastyService.error({
              title: 'Error',
              msg: 'An error occured and appointment was not created',
              theme: 'bootstrap',
              showClose: true,
              timeout: 5000
            });
          }
        });
  }

  constructor(
    private appointmentService: AppointmentService,
    private customerService: CustomerService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticateService,
    private toastyService: ToastyService,
    private specialistService: SpecialistService,
    private localeService: BsLocaleService) {

    let today = new Date(Date.now());
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    const hour = 12;
    const minute = 0;
    const second = 0;

    this.minDate = new Date(year, month, day, hour, minute, second);

    console.log(this.dates);



    }



  ngOnInit(): void {



    this.route.queryParams
      .subscribe(params => {
        this.filter = params.filter
      })

    this.customerService.getCustomerById(this.currentUser.id).subscribe(customer => {
      this.customer = customer;
      this.customerId = this.currentUser.id;
      this.customerFullName.setValue(this.customer.details.firstName + " " + this.customer.details.lastName);
      this.customerPhoneNumber.setValue(this.customer.details.phoneNumber);
      this.customerAddress.setValue(this.customer.address);

    })

    this.specialistService.getSpecialists()
      .subscribe(allSpecialists => {
        this.allSpecialists = allSpecialists
        this.onFilterChange()
        if (!this.specialists.length)
          this.router.navigate(['/not-found'])
      });

    this.specialistService.getSpecialistById(this.filter).subscribe(specialist => {
      this.specialist = specialist;
      this.specialistId.setValue(this.filter);
      this.specialistFullName.setValue(this.specialist.details.firstName + " " + this.specialist.details.lastName);
      this.specialistPhoneNumber.setValue(this.specialist.details.phoneNumber);
      this.allCompanies = this.specialist.companies;
      this.companies.setValue((this.getAppointmentForm.get('companies')).value);
      this.specialistAppointments = this.specialist.appointments;

      for (let app of this.specialist.appointments) {
        this.dates.push(app.appointmentDate);
      }


      let hoursOfAppointments = new Dictionary<any>();

      for (let appointment of this.specialistAppointments) {
        let slicedDate = (appointment.appointmentDate).slice(0, 10)

        if ((appointment.status !== 'resolved')) {
          if (!hoursOfAppointments.containsKey(slicedDate)) {
            hoursOfAppointments.add(slicedDate, 1);
          }

          else if (hoursOfAppointments.containsKey(slicedDate)) {
            hoursOfAppointments.add(slicedDate, 2);
            this.disabledDates.push(new Date(appointment.appointmentDate));
          }
        }
      }
    }
    )

    this.localeService.use(this.locale);

  }

  onFilterChange() {
    var specialists = this.allSpecialists;

    if (this.filter)
      specialists = specialists.filter(s => s.id == this.filter);

    this.specialists = specialists;
  }
}
