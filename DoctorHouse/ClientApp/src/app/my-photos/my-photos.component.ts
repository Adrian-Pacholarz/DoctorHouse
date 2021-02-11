import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { AuthenticateService } from '../services/authenticate.service';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-my-photos',
  templateUrl: './my-photos.component.html',
  styleUrls: ['./my-photos.component.css']
})
export class MyPhotosComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  userId = this.authService.currentUser.id;
  chooseUserPhoto = new FormGroup({
    chosenPhoto: new FormControl()
  });
  photos;
  defaultValue;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticateService,
    private photosService: PhotosService,
    private toastyService: ToastyService) {
    
  }

  ngOnInit(): void {
    this.photosService.getPhotos(this.userId)
      .subscribe(photos => {
        this.photos = photos,
          this.getDefaultValue()
          this.setDefaultValue()
      });

  }

  get chosenPhoto() {
    return this.chooseUserPhoto.get('chosenPhoto');
  }



  submit() {

    let updatedPhotos = this.photos;

    updatedPhotos.forEach(function (photo) {
      photo.isMain = false;
    });

    var self = this;
    updatedPhotos.forEach(function (photo) {
      if (photo.fileName == self.chosenPhoto.value)
        photo.isMain = true;
    })

    this.photosService.updateUserPhotos(this.userId, updatedPhotos)
      .subscribe(photos => {
        this.toastyService.success({
          title: 'Success',
          msg: 'Avatar updated succesfully',
          theme: 'bootstrap',
          showClose: true,
          timeout: 5000
        })
        location.reload();
      },
        error => {
          this.toastyService.error({
            title: 'Error',
            msg: 'Avatar was not updated',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          })
        }  
      )
    
  }

  uploadPhoto() {
    var nativeElement: HTMLInputElement = this.fileInput.nativeElement

    this.photosService.upload(this.userId, nativeElement.files[0])
      .subscribe(photo => {
        this.photos.push(photo);
      });
  }

  getDefaultValue() {
    var self = this
    this.photos.forEach(function (photo) {
      if (photo.isMain) {
        self.defaultValue = photo.fileName
      }    
    })
  }

  setDefaultValue() {
      this.chooseUserPhoto.setValue({ chosenPhoto: this.defaultValue })

  }
}
