import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { ComponentsModule } from '../components/components.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [HomeComponent, ResultsComponent],
  imports: [CommonModule, ComponentsModule, NgxSkeletonLoaderModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}
