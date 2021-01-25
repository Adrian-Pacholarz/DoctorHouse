import { Component, OnInit } from '@angular/core';
import { SpecialistService } from '../services/specialist.service';

@Component({
  selector: 'app-specialists-list',
  templateUrl: './specialists-list.component.html',
  styleUrls: ['./specialists-list.component.css']
})
export class SpecialistsListComponent implements OnInit {
  specialists;

  constructor(private specialistService: SpecialistService) { }

  ngOnInit(): void {
    this.specialistService.getSpecialists()
      .subscribe(specialists => this.specialists = specialists);
  }

}
