import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ResultsComponent } from './pages/results/results.component';
import { FormDirectoryPageComponent } from './pages/form-directory-page/form-directory-page.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'results/:search', component: ResultsComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
    component: DashboardComponent,
  },
  {
    path: 'edit',
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
    component: FormDirectoryPageComponent,
  },
  {
    path: 'create',
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
    component: FormDirectoryPageComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
