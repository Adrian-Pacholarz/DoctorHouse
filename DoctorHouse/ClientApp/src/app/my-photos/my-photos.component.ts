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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticateService,
    private photosService: PhotosService,
    private toastyService: ToastyService) { }

  ngOnInit(): void {
    this.photosService.getPhotos(this.userId)
      .subscribe(photos => this.photos = photos);
  }

  submit() {
    this.toastyService.success({
      title: 'Success',
      msg: 'Avatar updated succesfully',
      theme: 'bootstrap',
      showClose: true,
      timeout: 5000
    })
  }

  uploadPhoto() {
    var nativeElement: HTMLInputElement = this.fileInput.nativeElement

    this.photosService.upload(this.userId, nativeElement.files[0])
      .subscribe(photo => {
        this.photos.push(photo);
      });
  }
}
