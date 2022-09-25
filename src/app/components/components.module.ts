import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { FormDirectoryComponent } from './form-directory/form-directory.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    CardComponent,
    FormDirectoryComponent,
  ],
  exports: [
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    CardComponent,
    FormDirectoryComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
