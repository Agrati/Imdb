import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ImdbComponent } from './imdb/imdb.component';
import { GithubComponent } from './github/github.component';
import { ImdbService } from './services/imdb.service';
import { GithubService } from './services/github.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ImdbComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ImdbService, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
