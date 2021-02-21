import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  editProfile = new FormGroup({
  edit: new FormControl()
  })

  get edit() {
    return this.editProfile.get("edit");
  }

  setDefaultValue() {
    this.edit.setValue(false)
  }

  clickEditProfile($event) {
    this.edit.setValue(true)
    console.log('button clicked');
  }

  constructor() {
    this.setDefaultValue();
  }

  ngOnInit(): void {
  }

}
