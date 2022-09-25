import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDirectoryPageComponent } from './form-directory-page.component';

describe('FormDirectoryPageComponent', () => {
  let component: FormDirectoryPageComponent;
  let fixture: ComponentFixture<FormDirectoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDirectoryPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDirectoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
