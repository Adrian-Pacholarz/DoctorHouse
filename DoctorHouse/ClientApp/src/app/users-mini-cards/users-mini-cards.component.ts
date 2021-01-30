import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../services/companies.service';
import { SpecialistService } from '../services/specialist.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users-mini-cards',
  templateUrl: './users-mini-cards.component.html',
  styleUrls: ['./users-mini-cards.component.css']
})
export class UsersMiniCardsComponent implements OnInit {
  allSpecialists;
  company;
  specialist;

  getCompanyForm = new FormGroup({
    specialist: new FormControl(),
    fullName: new FormControl(),
    specialistId: new FormControl()

  });

  getSpecialistForm = new FormGroup({
    type: new FormControl(),
  });

  get specialists() {
    return this.getCompanyForm.get('specialist')
  }

  get specialistId() {
    return this.getCompanyForm.get('specialistId')
  }

  get fullName() {
    return this.getCompanyForm.get('fullName')
  }

  get type() {
    return this.getSpecialistForm.get('type')
  }

  selectSpecialists(s) {

    let companySpecialists = [];
    for (let specialist of (this.getCompanyForm.get('specialist').value)) {
      companySpecialists.push(+specialist.id)
    }

    if (companySpecialists.includes(+s.id)) {
      this.specialistService.getSpecialistById(s.id).subscribe(specialist => {
        this.specialist = specialist
        this.type.setValue(this.specialist.specialistType);
      })
    }

  }

  constructor(private specialistService: SpecialistService,
    private companiesService: CompaniesService) { }

  ngOnInit(): void {

    this.companiesService.getCompanyById(1).subscribe(company => {
      this.company = company
      this.specialist.setValue(this.company.specialists);
      this.fullName.setValue(this.company.specialists.fullName);
      this.specialistId.setValue(this.company.specialists.id);
    })

    this.specialistService.getSpecialists().subscribe(allSpecialists => {
      this.allSpecialists = allSpecialists;
    })

    console.log(this.specialist);
    console.log(this.fullName);
  }

}
