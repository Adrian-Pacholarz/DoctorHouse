import { Component, OnInit } from '@angular/core';
import { SpecialistService } from '../services/specialist.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) {

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

      });

  }

  onFilterChange() {
    var specialists = this.allSpecialists;

    if (this.filter)
      specialists = specialists.filter(s => s.specialistType.toLowerCase() == this.filter);

    this.specialists = specialists;


  }

}
