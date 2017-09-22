import { Component, OnInit } from '@angular/core';

import { GithubService } from '../services/github.service';
import { GithubUser, GithubProjects } from '../models/github.model';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  username: string;
  githubUser: GithubUser;
  githubProjects: GithubProjects[];
  searchClick = false;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }

  searchUsers() {
    console.log(this.username);
    this.githubService.getUsers(this.username).subscribe(res => {
      this.githubUser = res;
      this.githubService.getProjects(this.githubUser.repos_url).subscribe(result => {
        this.githubProjects = result;
        this.searchClick = true;
      });
      console.log(this.githubUser);
    });
  }

}
