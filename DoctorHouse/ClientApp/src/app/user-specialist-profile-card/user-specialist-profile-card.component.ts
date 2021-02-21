import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { AuthenticateService } from '../services/authenticate.service';
import { SpecialistService } from '../services/specialist.service';

@Component({
  selector: 'app-user-specialist-profile-card',
  templateUrl: './user-specialist-profile-card.component.html',
  styleUrls: ['./user-specialist-profile-card.component.css']
})
export class UserSpecialistProfileCardComponent implements OnInit {
  currentUser = this.authService.currentUser;
  specialistId;
  specialist;

  getUserForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    type: new FormControl(),
    companies: new FormControl()
  });

  editProfile = new FormGroup({
    edit: new FormControl()
  })

  get edit() {
    return this.editProfile.get("edit");
  }


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

  get type() {
    return this.getUserForm.get('type')
  }

  get companies() {
    return this.getUserForm.get('companies')
  }

  setDefaultValue() {
    this.edit.setValue(false)
  }

  clickEditProfile() {
    if (this.currentUser.id == this.specialistId) {
      this.edit.setValue(true)
      console.log('button clicked')
    }
    else {
      this.toastyService.error({
        title: 'Error',
        msg: 'You are not authorised to edit this account',
        theme: 'bootstrap',
        showClose: true,
        timeout: 5000
      })
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private specialistService: SpecialistService,
    private authService: AuthenticateService,
    private toastyService: ToastyService){
    this.setDefaultValue();

  }


  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.specialistId = +p['id'];
    })

    this.specialistService.getSpecialistById(this.specialistId).subscribe(specialist => {
      this.specialist = specialist
      this.firstName.setValue(this.specialist.details.firstName)
      this.lastName.setValue(this.specialist.details.lastName)
      this.email.setValue(this.specialist.details.eMail)
      this.phone.setValue(this.specialist.details.phoneNumber)
      this.type.setValue(this.specialist.specialistType)
      this.companies.setValue(this.specialist.companies)

    }, err => {
        if (err.status == 404)
          this.router.navigate(['/not-found'])
    })
  }

}
