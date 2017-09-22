import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeImage;

  constructor() {
    this.homeImage = '/assets/images/pexels-photo-313782.jpeg';
   }

  ngOnInit() {
  }

}
