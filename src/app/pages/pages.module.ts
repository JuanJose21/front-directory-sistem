import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormDirectoryPageComponent } from './form-directory-page/form-directory-page.component';
import { ComponentsModule } from '../components/components.module';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ResultsComponent,
    LoginComponent,
    DashboardComponent,
    FormDirectoryPageComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}
