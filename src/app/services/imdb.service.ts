import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ImdbService {
  baseUrl: String;
  apikey: String;

  constructor(private http: Http) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apikey = 'fbf5a832851ccb80dabe10deb49c107f';
  }

  searchMoviesByTitle(title) {
    const url = this.baseUrl + 'search/movie?api_key=' + this.apikey + '&query=' + title;
    return this.http.get(url).map(res => res.json());
  }

}
