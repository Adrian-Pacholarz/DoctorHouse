import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drawer-signup',
  templateUrl: './drawer-signup.component.html',
  styleUrls: ['./drawer-signup.component.css']
})
export class DrawerSignupComponent implements OnInit {
  signupForm = new FormGroup({
    newUsername: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
