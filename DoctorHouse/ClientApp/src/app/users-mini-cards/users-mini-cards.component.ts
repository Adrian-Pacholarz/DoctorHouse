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

  getCompanyForm = new FormGroup({
    specialists: new FormControl(),
    fullName: new FormControl(),
    specialistsId: new FormControl()
  });

  get specialists() {
    return this.getCompanyForm.get('specialists')
  }

  get specialistsId() {
    return this.getCompanyForm.get('specialistsId')
  }

  get fullName() {
    return this.getCompanyForm.get('fullName')
  }




  selectSpecialists(specialist) {

    let companySpecialists = [];
    for (let specialist of (this.getCompanyForm.get('specialists').value)) {
      companySpecialists.push(+specialist.id)
    }

    if (companySpecialists.includes(+specialist.id)) {
      return true;
      }
    }


  constructor(private specialistService: SpecialistService,
    private companiesService: CompaniesService) { }

  ngOnInit(): void {

    this.companiesService.getCompanyById(1).subscribe(company => {
      this.company = company
      this.specialists.setValue(this.company.specialists);
      this.fullName.setValue(this.company.specialists.fullName);
      this.specialistsId.setValue(this.company.specialists.id);
    })

    this.specialistService.getSpecialists().subscribe(allSpecialists => {
      this.allSpecialists = allSpecialists;
    })
  }

}
