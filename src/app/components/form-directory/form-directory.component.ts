import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-directory',
  templateUrl: './form-directory.component.html',
  styleUrls: ['./form-directory.component.scss'],
})
export class FormDirectoryComponent implements OnInit {
  @Input() idEdit: number | null = null;
  directoryForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.directoryForm = new FormGroup({
      image: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      nit: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      cellphone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });

    if (this.idEdit) this.loadEdit();
  }

  loadEdit() {
    this.directoryForm.get('image')?.setValue('url image');
    this.directoryForm.get('name')?.setValue('Test');
    this.directoryForm.get('nit')?.setValue('123456');
    this.directoryForm.get('location')?.setValue('Calle 1');
    this.directoryForm.get('phone')?.setValue('32589');
    this.directoryForm.get('cellphone')?.setValue('369852');
    this.directoryForm.get('email')?.setValue('email@gmail.com');
  }

  handleForm() {
    console.log('handleForm');
  }
}
