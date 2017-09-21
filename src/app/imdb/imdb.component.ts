import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ImdbService } from '../services/imdb.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent implements OnInit {

  searchByTitleInput: String;
  listOfMovies: Movie[];

  private urlOpenMovie = 'https://www.themoviedb.org/movie/';
  private urlOpenPosterMovies = 'http://image.tmdb.org/t/p/w300/';

  constructor(private imdbService: ImdbService) { }

  ngOnInit() {
  }

  searchMoviesByTitle() {
    console.log(this.searchByTitleInput);
    if (this.searchByTitleInput.length >= 3) {
      this.imdbService.searchMoviesByTitle(this.searchByTitleInput).subscribe(res => {
        this.listOfMovies = res.results;
        console.log(this.listOfMovies);
      });
    }
  }

  openMovieOnline(mov: Movie) {
    console.log(mov);
    const aux = mov.title;
    const titleWithoutSpaces = aux.replace(' ', '-');
    window.open(this.urlOpenMovie + mov.id + '-' + titleWithoutSpaces, '_blank');
  }

  getPoster(posterPath: string){
    return this.urlOpenPosterMovies + posterPath;
  }

}
