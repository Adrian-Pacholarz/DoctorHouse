import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CompaniesService } from '../services/companies.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { SafePipe } from '../safe.pipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  companyId;
  company;

  getCompanyForm = new FormGroup({
    companyName: new FormControl(),
    address: new FormControl(),
    phone: new FormControl(),
    rating: new FormControl(),
    description: new FormControl()
  });

  get companyName() {
    return this.getCompanyForm.get('companyName')
  }

  get address() {
    return this.getCompanyForm.get('address')
  }

  get phone() {
    return this.getCompanyForm.get('phone')
  }

  get rating() {
    return this.getCompanyForm.get('rating')
  }

  get description() {
    return this.getCompanyForm.get('description')
  }

  formatAddress(): SafeResourceUrl {
    let addressDb = this.getCompanyForm.get('address').value.toLowerCase();
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
    private companiesService: CompaniesService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.companyId = +p['id'];
    })


    this.companiesService.getCompanyById(this.companyId).subscribe(company => {
      this.company = company
      this.companyName.setValue(this.company.companyName)
      this.rating.setValue(this.company.rating)
      this.address.setValue(this.company.address)
      this.phone.setValue(this.company.phoneNumber)
      this.description.setValue(this.company.description)

    }, err => {
      if (err.status == 404)
        this.router.navigate(['/not-found'])
    })
  }

}
