import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.css']
})

export class UserProfileCardComponent implements OnInit {

  customer;


  getUserForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl()
  });



  get firstName() {
    return this.getUserForm.get('firstName')
  }

  get lastName() {
    return this.getUserForm.get('lastName')
  }

  get phone() {
    return this.getUserForm.get('phone')
  }

  get email() {
    return this.getUserForm.get('email')
  }

  get address() {
    return this.getUserForm.get('address')
  }

  constructor(private customerService: CustomerService) {

  }


  ngOnInit(): void {
    this.customerService.getCustomerById(1).subscribe(customer => { this.customer = customer
      this.firstName.setValue(this.customer.details.firstName)
      this.lastName.setValue(this.customer.details.lastName)
      this.email.setValue(this.customer.details.eMail)
      this.phone.setValue(this.customer.details.phoneNumber)
      this.address.setValue(this.customer.address)

    })
  }

}
