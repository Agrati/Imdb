import { Component, OnInit } from '@angular/core';

import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  username: string;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }

  searchUsers() {
    console.log(this.username);
    this.githubService.getUsers(this.username).subscribe(res => {
      console.log(res);
    });
  }

}
