import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}
