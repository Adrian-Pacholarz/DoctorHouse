import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../services/companies.service';
import { SpecialistService } from '../services/specialist.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-users-mini-cards',
  templateUrl: './users-mini-cards.component.html',
  styleUrls: ['./users-mini-cards.component.css']
})
export class UsersMiniCardsComponent implements OnInit {
  allSpecialists;
  allPhotos;
  companyId;
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
    for (let specialist of this.specialists.value) {
      companySpecialists.push(+specialist.id)
    }

    if (companySpecialists.includes(+specialist.id)) {
      return true;
      }
  }

  getAllPhotos() {
    let photos = [];
    for (let specialist of this.allSpecialists) {
      this.photoService.getMainPhoto(specialist.id).subscribe(photo => {
        if (photo) {
          let specialistMainPhoto = {
            specialistId: +specialist.id,
            photoObject: photo,           
          }
          photos.push(specialistMainPhoto);
        }
      })
    }
    this.allPhotos = photos;
  }

  getUserPhoto(userId) {
    for (let photo of this.allPhotos) {
      if (photo.specialistId == userId) {
        return photo.photoObject.fileName;
      }
    }
  }

  constructor(private specialistService: SpecialistService,
    private photoService: PhotosService,
    private companiesService: CompaniesService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.companyId = +p['id'];
    })

    this.companiesService.getCompanyById(this.companyId).subscribe(company => {
      this.company = company
      this.specialists.setValue(this.company.specialists);
      this.fullName.setValue(this.company.specialists.fullName);
      this.specialistsId.setValue(this.company.specialists.id);
    })

    this.specialistService.getSpecialists().subscribe(allSpecialists => {
      this.allSpecialists = allSpecialists;
      this.getAllPhotos();
    })
  }

}
