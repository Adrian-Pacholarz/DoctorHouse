import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { AreaValidators } from '../common/validators/area.validators';
import { PasswordValidators } from '../common/validators/password.validators';
import { PhoneValidators } from '../common/validators/phone.validators';
import { SpecialistService } from '../services/specialist.service';
import { CompaniesService } from '../services/companies.service';

@Component({
  selector: 'app-user-specialist-edit-profile',
  templateUrl: './user-specialist-edit-profile.component.html',
  styleUrls: ['./user-specialist-edit-profile.component.css']
})
export class UserSpecialistEditProfileComponent implements OnInit {

  specialist;
  allCompanies;

  updateUser = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, PhoneValidators.phoneIsNaN, PhoneValidators.phoneLength]),
    email: new FormControl('', [Validators.required, Validators.email]),
    type: new FormControl('', Validators.required),
    area: new FormControl('', [Validators.required, AreaValidators.areaIsNanAndMoreThan30]),
    companies: new FormControl('', Validators.required),
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


  get area() {
    return this.updateUser.get('area')
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

  get companies() {
    return this.updateUser.get('companies')
  }

  get goback() {
    return this.backToProfile.get("goback");
  }

  constructor(private specialistService: SpecialistService,
    private toastyService: ToastyService,
    private companiesService: CompaniesService) {
    this.setDefaultGoBackValue();
  }

  setDefaultGoBackValue() {
    this.goback.setValue(false);
  }

  goBackToProfile($event) {
    this.goback.setValue(true)
  }

  update() {

    let updatedSpecialist = {
      area: +this.area.value,
      specialistType: this.type.value,
      companies: this.companies.value,
      details: {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        eMail: this.email.value,
        phoneNumber: +this.phone.value,
      }
    };
    let companiesIds = [];
    updatedSpecialist.companies.forEach(function (value) {
      companiesIds.push(+value);
    })

    updatedSpecialist.companies = companiesIds;

    this.specialistService.updateSpecialist(3, updatedSpecialist).subscribe(specialist => {
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

  ngOnInit(): void {
    this.specialistService.getSpecialistById(3).subscribe(specialist => {
      this.specialist = specialist
      this.firstName.setValue(this.specialist.details.firstName)
      this.lastName.setValue(this.specialist.details.lastName)
      this.email.setValue(this.specialist.details.eMail)
      this.phone.setValue(this.specialist.details.phoneNumber.toString())
      this.area.setValue(this.specialist.area.toString())
      this.type.setValue(this.specialist.specialistType)
      this.companies.setValue(this.specialist.companies)

      });

      this.companiesService.getCompanies().subscribe(companies => {
        this.allCompanies = companies
      })
    }
  }
