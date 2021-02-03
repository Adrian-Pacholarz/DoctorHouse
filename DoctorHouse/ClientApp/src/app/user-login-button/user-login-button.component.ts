import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
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
    this.toastyService.info({
      title: 'Information',
      msg: 'You have been logged out',
      theme: 'bootstrap',
      showClose: true,
      timeout: 5000
    })
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }


  constructor(private authService: AuthenticateService,
    private toastyService: ToastyService) { }

  ngOnInit(): void {
  }

}
