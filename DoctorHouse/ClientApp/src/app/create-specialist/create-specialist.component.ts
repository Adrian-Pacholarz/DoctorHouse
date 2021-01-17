import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password.validators';
import { PhoneValidators } from '../common/validators/phone.validators';
import { CreateSpecialistService } from '../services/create-specialist.service';

@Component({
  selector: 'app-create-specialist',
  templateUrl: './create-specialist.component.html',
  styleUrls: ['./create-specialist.component.css']
})
export class CreateSpecialistComponent implements OnInit {

  signupForm = new FormGroup({
    newUsername: new FormControl('', [Validators.required, Validators.minLength(6)]),
    newName: new FormControl('', Validators.required),
    newSurname: new FormControl('', Validators.required),
    newAddress: new FormControl('', Validators.required),
    newPhone: new FormControl('', [Validators.required, PhoneValidators.phoneIsNaN, PhoneValidators.phoneLength]),
    newArea: new FormControl('', [Validators.required, PhoneValidators.phoneIsNaN, Validators.maxLength(2)]), 
    newEmail: new FormControl('', [Validators.required, Validators.email]),
    newSpecialization: new FormControl('', Validators.required),
    newCompanies: new FormControl('', Validators.required),
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

  get newArea() {
    return this.signupForm.get('newArea');
  }

  get newEmail() {
    return this.signupForm.get('newEmail');
  }

  get newSpecialization() {
    return this.signupForm.get('newSpecialization');
  }

  get newCompanies() {
    return this.signupForm.get('newCompanies');
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

    let newSpecialist = {
      address: this.newAddress.value,
      username: this.newUsername.value,
      password: this.newPassword.value,
      area: +this.newArea.value,
      specialistType: this.newSpecialization.value,
      companies: this.newCompanies.value,
      details: {
        firstName: this.newName.value,
        lastName: this.newSurname.value,
        eMail: this.newEmail.value,
        phoneNumber: +this.newPhone.value,
      }
    };
    let companiesIds = [];
    newSpecialist.companies.forEach(function (value) {
      companiesIds.push(+value);
    })

    newSpecialist.companies = companiesIds;

    alert(JSON.stringify(newSpecialist));
    this.specialistService.createSpecialist(newSpecialist).subscribe(x => console.log(x));
  }

  constructor(private specialistService: CreateSpecialistService) { }

  ngOnInit(): void {

  }

}

