import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.css'],
})
export class NoPageComponent implements OnInit {
  constructor(private routes: Router) {}

  ngOnInit(): void {}

  navtoHome() {
    this.routes.navigate(['home']);
  }
}
