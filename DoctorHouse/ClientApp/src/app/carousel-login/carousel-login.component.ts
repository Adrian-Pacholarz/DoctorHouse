import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-carousel-login',
  templateUrl: './carousel-login.component.html',
  styleUrls: ['./carousel-login.component.css']
})
export class CarouselLoginComponent implements OnInit {
  invalidLogin: boolean;

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private authenticateService: AuthenticateService,
    private toastyService: ToastyService) { }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  logIn() {

    let credentials = {
      username: this.username.value,
      password: this.password.value,
    }

    this.authenticateService.login(credentials)
      .subscribe(result => {
        var name = localStorage.getItem('name');
        var surname = localStorage.getItem('surname');
        this.toastyService.success({
          title: 'Success',
          msg: 'Login succesfull, welcome back ' + name + ' ' + surname,
          theme: 'bootstrap',
          showClose: true,
          timeout: 5000
        })

        this.router.navigate(['/home']);
      },
        error => {
          this.invalidLogin = true;
        }       
      );

  }

  ngOnInit(): void {
  }

}
