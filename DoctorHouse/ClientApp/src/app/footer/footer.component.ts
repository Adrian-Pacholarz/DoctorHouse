import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentUser = this.authService.currentUser;

  constructor(
    private authService: AuthenticateService) { }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnInit(): void {
  }

}
