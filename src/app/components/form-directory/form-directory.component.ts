import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IResults } from 'src/app/interfaces/card.interace';

@Component({
  selector: 'app-form-directory',
  templateUrl: './form-directory.component.html',
  styleUrls: ['./form-directory.component.scss'],
})
export class FormDirectoryComponent implements OnInit {
  @Input() cardEdit: IResults | null = null;
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

    if (this.cardEdit) this.loadEdit();
  }

  loadEdit() {
    this.directoryForm.get('image')?.setValue(this.cardEdit?.imagen || '');
    this.directoryForm.get('name')?.setValue(this.cardEdit?.nombre || '');
    this.directoryForm.get('nit')?.setValue(this.cardEdit?.nit || '');
    this.directoryForm
      .get('location')
      ?.setValue(this.cardEdit?.direccion || '');
    this.directoryForm.get('phone')?.setValue(this.cardEdit?.telefono || '');
    this.directoryForm.get('cellphone')?.setValue(this.cardEdit?.celular || '');
    this.directoryForm.get('email')?.setValue(this.cardEdit?.correo || '');
  }

  handleForm() {
    console.log('handleForm');
  }
}
