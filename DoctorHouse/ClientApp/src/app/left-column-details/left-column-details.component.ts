import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { CustomerService } from '../services/customer.service';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-left-column-details',
  templateUrl: './left-column-details.component.html',
  styleUrls: ['./left-column-details.component.css']
})
export class LeftColumnDetailsComponent implements OnInit {
  currentUser = this.authService.currentUser;
  customerId;
  customer;
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
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotosService,
    private authService: AuthenticateService) {

  }


  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.customerId = +p['id'];
    })

    this.photoService.getMainPhoto(this.customerId)
      .subscribe(photo => {
        this.userPhoto = photo
      })

    this.customerService.getCustomerById(this.customerId).subscribe(customer => {
      this.customer = customer
      this.firstName.setValue(this.customer.details.firstName)
      this.lastName.setValue(this.customer.details.lastName)
      this.email.setValue(this.customer.details.eMail)
    })
  }

}
