import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-left-column-details',
  templateUrl: './left-column-details.component.html',
  styleUrls: ['./left-column-details.component.css']
})
export class LeftColumnDetailsComponent implements OnInit {

  customer;


  getUserForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
  });



  get firstName() {
    return this.getUserForm.get('firstName')
  }

  get lastName() {
    return this.getUserForm.get('lastName')
  }

  get email() {
    return this.getUserForm.get('email')
  }


  constructor(private customerService: CustomerService) {

  }


  ngOnInit(): void {
    this.customerService.getCustomerById(1).subscribe(customer => {
      this.customer = customer
      this.firstName.setValue(this.customer.details.firstName)
      this.lastName.setValue(this.customer.details.lastName)
      this.email.setValue(this.customer.details.eMail)
    })
  }

}
