import { Component, OnInit } from '@angular/core';
import {faAdjust } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faCoffee = faAdjust;
  constructor() { }

  ngOnInit(): void {
  }

}
