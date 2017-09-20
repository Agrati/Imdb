import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ImdbService } from '../services/imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent implements OnInit {

  searchByTitleInput: String;

  constructor(private imdbService: ImdbService) { }

  ngOnInit() {
  }

  searchMoviesByTitle() {
    console.log(this.searchByTitleInput);
    if (this.searchByTitleInput.length >= 3) {
      this.imdbService.searchMoviesByTitle(this.searchByTitleInput).subscribe(res => {
        console.log(res);
      });
    }
  }

}
