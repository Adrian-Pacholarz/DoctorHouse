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

  checkPhoneNum() {
    let id = (this.getAppointmentForm.get('companies')).value
    for (let company of this.allCompanies.values) {
        if (+company.id === +id) {
        return company.phoneNumber.value;
      }
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
    let localDate = new Date(stringDate)

    let newAppointment = {
      appointmentDate: localDate,
      status: 'assigned',
      description: this.description.value,
      customerId: +this.customerId,
      specialistId: +this.specialistId.value,
      companyId: +this.companies.value,
    };


    this.appointmentService.createAppointment(newAppointment).subscribe(appointment => {
      this.toastyService.success({
        title: 'Success',
        msg: 'Appointment has been created',
        theme: 'bootstrap',
        showClose: true,
        timeout: 5000
      })

      location.reload();

    },
      (error: Response) => {
        if (error.status === 500)
          this.toastyService.error({
            title: 'Error',
            msg: 'Wrong data provided',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          })

        else {
          this.toastyService.error({
            title: 'Error',
            msg: 'An error occured and appointment was not created',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          })
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
      this.appointmentHour.setValue((this.appointmentDate.value).getHours() + ":00");
      this.specialistAppointments = this.specialist.appointments;

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
