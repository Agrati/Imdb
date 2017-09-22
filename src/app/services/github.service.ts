import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class GithubService {

  private baseUrl: String;
  constructor(private http: Http) {
    this.baseUrl = 'https://api.github.com/users/';
  }

  getUsers(username: string) {
    return this.http.get(this.baseUrl + username).map(res => res.json());
  }

  getProjects(repoUrl: string) {
    return this.http.get(repoUrl).map(res => res.json());
  }

}
