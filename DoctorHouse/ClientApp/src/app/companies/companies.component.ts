import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from '../services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  allCompanies;

  constructor(private companiesService: CompaniesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.companiesService.getCompanies()
      .subscribe(companies => {
        this.allCompanies = companies
        if (!this.allCompanies.length)
          this.router.navigate(['/not-found'])
      });
  }

}
