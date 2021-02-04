import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})

export class MyAppointmentsComponent implements OnInit {
  currentUser = this.authService.currentUser;
  customer;
  appointments;

  getAppointmentForm = new FormGroup({
    customerFullName: new FormControl(),
    customerPhoneNumber: new FormControl(),
    specialistFullName: new FormControl(),
    specialistPhoneNumber: new FormControl(),
    companyFullName: new FormControl(),
    companyPhoneNumber: new FormControl(),
    appointmentDate: new FormControl(),
    status: new FormControl(),
    description: new FormControl()
  });

  get customerFullName() {
    return this.getAppointmentForm.get('customerFullName')
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



  constructor(
    private customerService: CustomerService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticateService,
    private toastyService: ToastyService) {
  }


  ngOnInit(): void {


    this.customerService.getCustomerById(this.currentUser.id).subscribe(customer => {
      this.customer = customer
      this.appointments = this.customer.appointments

    }, err => {
      if (err.status == 404)
        this.router.navigate(['/not-found'])
    })
  }

}
