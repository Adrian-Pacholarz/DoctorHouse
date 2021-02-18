import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  currentUser = this.authService.currentUser;
  specialistsVisible = false;

  constructor(
    private authService: AuthenticateService) { }

  showSpecialists() {
    this.specialistsVisible = true;
  }

  ngOnInit(): void {
  }

}
