import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-carousel-login',
  templateUrl: './carousel-login.component.html',
  styleUrls: ['./carousel-login.component.css']
})
export class CarouselLoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

}
