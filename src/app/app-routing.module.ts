import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ImdbComponent } from './imdb/imdb.component';
import { GithubComponent } from './github/github.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imdb', component: ImdbComponent },
  { path: 'github', component: GithubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

