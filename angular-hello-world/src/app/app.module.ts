import { AuthorService } from './author.service';
import { routes } from './app.router';
import { CourseService } from './course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    DashboardComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routes
  ],
  providers: [CourseService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
