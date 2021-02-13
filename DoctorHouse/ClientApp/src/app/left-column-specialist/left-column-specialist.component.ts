import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { SpecialistService } from '../services/specialist.service';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-left-column-specialist',
  templateUrl: './left-column-specialist.component.html',
  styleUrls: ['./left-column-specialist.component.css']
})
export class LeftColumnSpecialistComponent implements OnInit {
  currentUser = this.authService.currentUser;
  specialistId;
  specialist;
  userPhoto;

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


  constructor(
    private specialistService: SpecialistService,
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotosService,
    private authService: AuthenticateService) {

  }


  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.specialistId = +p['id'];
    })

    this.photoService.getMainPhoto(this.specialistId)
      .subscribe(photo => {
        this.userPhoto = photo
      })

    this.specialistService.getSpecialistById(this.specialistId).subscribe(specialist => {
      this.specialist = specialist
      this.firstName.setValue(this.specialist.details.firstName)
      this.lastName.setValue(this.specialist.details.lastName)
      this.email.setValue(this.specialist.details.eMail)
    })
  }

}
