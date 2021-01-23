import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SpecialistService } from '../services/specialist.service';

@Component({
  selector: 'app-left-column-specialist',
  templateUrl: './left-column-specialist.component.html',
  styleUrls: ['./left-column-specialist.component.css']
})
export class LeftColumnSpecialistComponent implements OnInit {

  specialist;

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


  constructor(private specialistService: SpecialistService) {

  }


  ngOnInit(): void {
    this.specialistService.getSpecialistById(3).subscribe(specialist => {
      this.specialist = specialist
      this.firstName.setValue(this.specialist.details.firstName)
      this.lastName.setValue(this.specialist.details.lastName)
      this.email.setValue(this.specialist.details.eMail)
    })
  }

}
