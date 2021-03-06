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
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  currentUser = this.authService.currentUser;
  appointmentId;
  appointment;
  allCustomers;
  locale = 'engb';
  disabledDates = [];
  specialist;
  specialistAppointments;
  isDisabled = true;
  minDate;


  getAppointmentForm = new FormGroup({
    customerFullName: new FormControl(),
    customerPhoneNumber: new FormControl(),
    specialistFullName: new FormControl(),
    specialistPhoneNumber: new FormControl(),
    companyFullName: new FormControl(),
    companyPhoneNumber: new FormControl(),
    appointmentDate: new FormControl(),
    status: new FormControl(),
    description: new FormControl(),
    customerAddress: new FormControl(),
    customers: new FormControl(),
    customerId: new FormControl(),
    specialistId: new FormControl(),
    companyId: new FormControl(),
    appointmentHour: new FormControl()
  });

  get customerFullName() {
    return this.getAppointmentForm.get('customerFullName')
  }

  get appointmentHour() {
    return this.getAppointmentForm.get('appointmentHour')
  }

  get companyId() {
    return this.getAppointmentForm.get('companyId')
  }

  get customerId() {
    return this.getAppointmentForm.get('customerId')
  }


  get specialistId() {
    return this.getAppointmentForm.get('specialistId')
  }


  get customers() {
    return this.getAppointmentForm.get('customers')
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

  get status() {
    return this.getAppointmentForm.get('status')
  }

  get description() {
    return this.getAppointmentForm.get('description')
  }

  selectCustomer(customerId, customerDb) {
    if (+customerDb === +customerId) {
      return true;
    }
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

  formatAddress(addressDb): SafeResourceUrl {
    addressDb = addressDb.toString().toLowerCase();
    let street = 'ul.';
    let settlement = 'os.';
    console.log(addressDb);

    if (addressDb.includes(street) || addressDb.includes(settlement)) {
      addressDb = addressDb.slice(3);
    }

    addressDb = addressDb.trim(' ');
    addressDb = addressDb.replace(/\s/g, '+');
    let map = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBlYuKgi1m3lnyfIHv2qkWf_MzpBBc2mr8&q=' + addressDb;
    return this.sanitizer.bypassSecurityTrustResourceUrl(map);
  }

  update() {


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

    let updatedAppointment = {
      appointmentDate: localDate,
      status: this.status.value,
      description: this.description.value,
      customerId: this.customerId.value,
      specialistId: this.specialistId.value,
      companyId: this.companyId.value
    };


    this.appointmentService.updateAppointment(this.appointmentId, updatedAppointment).subscribe(specialist => {
      this.toastyService.success({
        title: 'Success',
        msg: 'Appointment has been updated',
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
            msg: 'An error occured and appointment was not updated',
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
    private localeService: BsLocaleService,
    private formBuilder: FormBuilder) {


    let today = new Date(Date.now());
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    const hour = 12;
    const minute = 0;
    const second = 0;

    this.minDate = new Date(year, month, day, hour, minute, second);
  }


  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.appointmentId = +p['id'];
    })

    this.appointmentService.getAppointmentsById(this.appointmentId).subscribe(appointment => {
      this.appointment = appointment;
      this.customerFullName.setValue(this.appointment.customer.fullName);
      this.customerId.setValue(this.appointment.customer.id);
      this.customerPhoneNumber.setValue(this.appointment.customer.phoneNumber);
      this.specialistFullName.setValue(this.appointment.specialist.fullName);
      this.specialistId.setValue(this.appointment.specialist.id);
      this.specialistPhoneNumber.setValue(this.appointment.specialist.phoneNumber);
      this.companyFullName.setValue(this.appointment.company.fullName);
      this.companyPhoneNumber.setValue(this.appointment.company.phoneNumber);
      this.description.setValue(this.appointment.description);
      this.appointmentDate.setValue(new Date(this.appointment.appointmentDate));
      this.status.setValue(this.appointment.status);
      this.companyId.setValue(this.appointment.company.id);
      this.appointmentHour.setValue((this.appointmentDate.value).getHours() + ":00");

      this.specialistService.getSpecialistById(this.getAppointmentForm.get('specialistId').value)
        .subscribe(specialist => {
          this.specialist = specialist;
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
        });

    }, err => {
      if (err.status == 404)
        this.router.navigate(['/not-found'])
    });


      this.customerService.getCustomers().subscribe(allCustomers => {
        this.allCustomers = allCustomers;
      });

    this.localeService.use(this.locale);

    }

  }

