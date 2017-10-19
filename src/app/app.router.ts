import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const router: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);