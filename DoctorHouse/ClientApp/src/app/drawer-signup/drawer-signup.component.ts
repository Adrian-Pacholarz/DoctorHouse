import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drawer-signup',
  templateUrl: './drawer-signup.component.html',
  styleUrls: ['./drawer-signup.component.css']
})
export class DrawerSignupComponent implements OnInit {

  chooseUserType = new FormGroup({
    userType: new FormControl(),
  });

  get userType() {
    return this.chooseUserType.get('userType');
  }

  setDefaultValue() {
    this.chooseUserType.setValue({ userType: 'customer' })

  }

  constructor() {
    this.setDefaultValue();
  }

  ngOnInit(): void {
  }

}
