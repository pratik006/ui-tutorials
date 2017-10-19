import { AuthorService } from './author.service';
import { routes } from './app.router';
import { CourseService } from './course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';

import {MatToolbarModule, MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routes,
    MatToolbarModule, MatButtonModule
  ],
  providers: [CourseService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
