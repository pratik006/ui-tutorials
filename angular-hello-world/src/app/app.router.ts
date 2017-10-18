import { AuthorComponent } from './author/author.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const router: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'courses', component: CourseComponent },
    { path: 'authors', component: AuthorComponent },
    { path: 'dashboard', component: DashboardComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);