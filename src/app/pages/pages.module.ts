import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ResultsComponent, LoginComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}
