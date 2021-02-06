import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { ToastyService } from 'ng2-toasty';
import { SpecialistService } from '../services/specialist.service';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})

export class MyAppointmentsComponent implements OnInit {
  currentUser = this.authService.currentUser;
  customer;
  appointments;
  specialist;
  allCustomers;


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
    specialistAppointments: new FormControl()
  });

  get customerFullName() {
    return this.getAppointmentForm.get('customerFullName')
  }

  get specialistAppointments() {
    return this.getAppointmentForm.get('specialistAppointments')
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

  constructor(
    private customerService: CustomerService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticateService,
    private toastyService: ToastyService,
    private specialistService: SpecialistService) {
  }


  ngOnInit(): void {


    this.customerService.getCustomerById(this.currentUser.id).subscribe(customer => {
      this.customer = customer
      this.appointments = this.customer.appointments;
      this.customerAddress.setValue(this.customer.address);


    }, err => {
      if (err.status == 404)
        this.router.navigate(['/not-found'])
    })

    this.customerService.getCustomers().subscribe(allCustomers => {
      this.allCustomers = allCustomers;
      //this.customers.setValue(this.allCustomers);
    })

    this.specialistService.getSpecialistById(4).subscribe(specialist => {
      this.specialist = specialist;
      this.specialistAppointments.setValue(this.specialist.appointments);
      console.log(this.specialistAppointments.value)
    })



  }

}
