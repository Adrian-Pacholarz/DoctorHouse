import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { PasswordValidators } from '../common/validators/password.validators';
import { PhoneValidators } from '../common/validators/phone.validators';
import { CreateCustomerService } from '../services/create-customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  signupForm = new FormGroup({
    newUsername: new FormControl('', [Validators.required, Validators.minLength(6)]),
    newName: new FormControl('', Validators.required),
    newSurname: new FormControl('', Validators.required),
    newAddress: new FormControl('', Validators.required),
    newPhone: new FormControl('', [Validators.required, PhoneValidators.phoneIsNaN, PhoneValidators.phoneLength]),
    newEmail: new FormControl('', [Validators.required, Validators.email]),
    passwords: new FormGroup({
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repeatPassword: new FormControl('', Validators.required)
    }, PasswordValidators.passwordsMustMatch)
  });

  get newUsername() {
    return this.signupForm.get('newUsername');
  }

  get newName() {
    return this.signupForm.get('newName');
  }

  get newSurname() {
    return this.signupForm.get('newSurname');
  }

  get newAddress() {
    return this.signupForm.get('newAddress');
  }

  get newPhone() {
    return this.signupForm.get('newPhone');
  }

  get newEmail() {
    return this.signupForm.get('newEmail');
  }

  get newPassword() {
    return this.signupForm.get('passwords.newPassword');
  }

  get repeatPassword() {
    return this.signupForm.get('passwords.repeatPassword');
  }

  get passwords() {
    return this.signupForm.get('passwords');
  }


  submit() {

    let newCustomer = {
      address: this.newAddress.value,
      username: this.newUsername.value,
      password: this.newPassword.value,
      details: {
        firstName: this.newName.value,
        lastName: this.newSurname.value,
        eMail: this.newEmail.value,
        phoneNumber: +this.newPhone.value,
      }
    };

    this.customerService.createCustomer(newCustomer).subscribe(customer => {
      this.toastyService.success({
        title: 'Success',
        msg: 'An account has been created succesfully',
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
            msg: 'Wrong data provided or username already exists',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          })
        else {
          this.toastyService.error({
            title: 'Error',
            msg: 'An error occured and account was not created',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          })
        }
    });
  }

  constructor(
    private customerService: CreateCustomerService,
    private toastyService: ToastyService
  ) { }

  ngOnInit(): void {

  }

}

