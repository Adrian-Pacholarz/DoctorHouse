import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-user-login-button',
  templateUrl: './user-login-button.component.html',
  styleUrls: ['./user-login-button.component.css']
})
export class UserLoginButtonComponent implements OnInit {

  currentUser = this.authService.currentUser;
  
  logout() {
    this.authService.logout();
    location.reload();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }


  constructor(private authService: AuthenticateService) {}

  ngOnInit(): void {
  }

}
