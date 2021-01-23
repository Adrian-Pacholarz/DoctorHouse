import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { AreaValidators } from '../common/validators/area.validators';
import { PasswordValidators } from '../common/validators/password.validators';
import { PhoneValidators } from '../common/validators/phone.validators';
import { SpecialistService } from '../services/specialist.service';

@Component({
  selector: 'app-user-specialist-edit-profile',
  templateUrl: './user-specialist-edit-profile.component.html',
  styleUrls: ['./user-specialist-edit-profile.component.css']
})
export class UserSpecialistEditProfileComponent implements OnInit {

  specialist;

  updateUser = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, PhoneValidators.phoneIsNaN, PhoneValidators.phoneLength]),
    email: new FormControl('', [Validators.required, Validators.email]),
    type: new FormControl(''),
  });

  backToProfile = new FormGroup({
    goback: new FormControl()
  });

  get firstName() {
    return this.updateUser.get('firstName')
  }


  get lastName() {
    return this.updateUser.get('lastName')
  }

  get phone() {
    return this.updateUser.get('phone');
  }

  get email() {
    return this.updateUser.get('email')
  }

  get type() {
    return this.updateUser.get('type')
  }

  get goback() {
    return this.backToProfile.get("goback");
  }

  constructor(private specialistService: SpecialistService,
    private toastyService: ToastyService) {
    this.setDefaultGoBackValue();
  }

  setDefaultGoBackValue() {
    this.goback.setValue(false);
  }

  goBackToProfile($event) {
    this.goback.setValue(true)
  }

  ngOnInit(): void {
    this.specialistService.getSpecialistById(3).subscribe(specialist => {
      this.specialist = specialist
      this.firstName.setValue(this.specialist.details.firstName)
      this.lastName.setValue(this.specialist.details.lastName)
      this.email.setValue(this.specialist.details.eMail)
      this.phone.setValue(this.specialist.details.phoneNumber)
      this.type.setValue(this.specialist.specialistType)
    })
   }


}
