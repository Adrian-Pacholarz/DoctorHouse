import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { AreaValidators } from '../common/validators/area.validators';
import { PasswordValidators } from '../common/validators/password.validators';
import { PhoneValidators } from '../common/validators/phone.validators';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  customer;

  updateUser = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, PhoneValidators.phoneIsNaN, PhoneValidators.phoneLength]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
  });

  backToProfile = new FormGroup({
    goback: new FormControl()
  });



  get firstName() {
    return this.updateUser.get('firstName')
  }


  get password() {
    return this.updateUser.get('password')
  }

  get lastName() {
    return this.updateUser.get('lastName')
  }

  get phone() {
    return this.updateUser.get('phone')
  }

  get email() {
    return this.updateUser.get('email')
  }

  get address() {
    return this.updateUser.get('address')
  }

  get goback() {
    return this.backToProfile.get("goback");
  }

  constructor(
    private customerService: CustomerService,
    private toastyService: ToastyService) {
    this.setDefaultGoBackValue();
  }

  setDefaultGoBackValue() {
    this.goback.setValue(false);
  }

  goBackToProfile($event) {
    this.goback.setValue(true)
  }

  update() {
    let updatedCustomer = {
      address: this.address.value,
      details: {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        eMail: this.email.value,
        phoneNumber: this.phone.value,
      }
    };
    this.customerService.updateCustomer(1, updatedCustomer).subscribe(customer => {
      this.toastyService.success({
        title: 'Success',
        msg: 'An account has been updated',
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
            msg: 'An error occured and account has not been updated',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          })
        }
      });
  }


  ngOnInit(): void {
    this.customerService.getCustomerById(1).subscribe(customer => {
      this.customer = customer
      this.firstName.setValue(this.customer.details.firstName)
      this.lastName.setValue(this.customer.details.lastName)
      this.email.setValue(this.customer.details.eMail)
      this.phone.setValue(this.customer.details.phoneNumber)
      this.address.setValue(this.customer.address)
    })



  }
}
