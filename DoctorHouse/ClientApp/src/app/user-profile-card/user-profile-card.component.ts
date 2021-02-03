import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.css']
})

export class UserProfileCardComponent implements OnInit {
  currentUser = this.authService.currentUser;
  customerId;
  customer;

  getUserForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl()
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

  get address() {
    return this.getUserForm.get('address')
  }

  setDefaultValue() {
    this.edit.setValue(false)
  }

  clickEditProfile() {
    if (this.currentUser.id == this.customerId) {
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

  formatAddress(): SafeResourceUrl {
    let addressDb = this.getUserForm.get('address').value.toLowerCase();
    let street = 'ul.';
    let settlement = 'os.';
    console.log(addressDb);

    if (addressDb.includes(street) || addressDb.includes(settlement)) {
      addressDb = addressDb.slice(3);
    }

    addressDb = addressDb.trim(' ');
    addressDb = addressDb.replace(/\s/g, '+');
    let map = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBlYuKgi1m3lnyfIHv2qkWf_MzpBBc2mr8&q=' + addressDb;
    return this.sanitizer.bypassSecurityTrustResourceUrl(map);
  }

  constructor(
    private customerService: CustomerService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticateService,
    private toastyService: ToastyService) {
    this.setDefaultValue();
  }


  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.customerId = +p['id'];
    })

    this.customerService.getCustomerById(this.customerId).subscribe(customer => { this.customer = customer
      this.firstName.setValue(this.customer.details.firstName)
      this.lastName.setValue(this.customer.details.lastName)
      this.email.setValue(this.customer.details.eMail)
      this.phone.setValue(this.customer.details.phoneNumber)
      this.address.setValue(this.customer.address)

    }, err => {
      if (err.status == 404)
        this.router.navigate(['/not-found'])
    })
  }

}
