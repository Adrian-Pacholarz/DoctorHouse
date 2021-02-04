import { Component, OnInit } from '@angular/core';
import { SpecialistService } from '../services/specialist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-specialists-list',
  templateUrl: './specialists-list.component.html',
  styleUrls: ['./specialists-list.component.css']
})
export class SpecialistsListComponent implements OnInit {
  allSpecialists;
  specialists;
  filter: string;

  constructor(private specialistService: SpecialistService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.filter = params.filter
      })

    this.specialistService.getSpecialists()
      .subscribe(allSpecialists => {
        this.allSpecialists = allSpecialists
        this.onFilterChange()
        console.log(this.specialists)
        if (!this.specialists.length)
          this.router.navigate(['/not-found'])
      });

  }

  onFilterChange() {
    var specialists = this.allSpecialists;

    if (this.filter)
      specialists = specialists.filter(s => s.specialistType.toLowerCase() == this.filter);

    this.specialists = specialists;


  }

}
