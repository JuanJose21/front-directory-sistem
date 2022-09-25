import { DirectoryService } from './../../services/directory.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IResults } from 'src/app/interfaces/card.interace';
import { Router } from '@angular/router';
declare let alertify: any;
@Component({
  selector: 'app-form-directory',
  templateUrl: './form-directory.component.html',
  styleUrls: ['./form-directory.component.scss'],
})
export class FormDirectoryComponent implements OnInit {
  @Input() cardEdit: IResults | null = null;
  directoryForm!: FormGroup;

  constructor(
    private directoryService: DirectoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.directoryForm = new FormGroup({
      imagen: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      nit: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
    });

    if (this.cardEdit) this.loadEdit();
  }

  loadEdit() {
    this.directoryForm.get('imagen')?.setValue(this.cardEdit?.imagen || '');
    this.directoryForm.get('nombre')?.setValue(this.cardEdit?.nombre || '');
    this.directoryForm.get('nit')?.setValue(this.cardEdit?.nit || '');
    this.directoryForm
      .get('direccion')
      ?.setValue(this.cardEdit?.direccion || '');
    this.directoryForm.get('telefono')?.setValue(this.cardEdit?.telefono || '');
    this.directoryForm.get('celular')?.setValue(this.cardEdit?.celular || '');
    this.directoryForm.get('correo')?.setValue(this.cardEdit?.correo || '');
  }

  handleForm() {
    this.cardEdit ? this.updateDirectory() : this.createDirectory();
  }

  createDirectory() {
    try {
      this.directoryService.save(this.directoryForm.value).subscribe({
        next: (response) => {
          alertify.success('Registro creado correctamente');
          this.redirectSuccess();
        },
        error: (error) => {
          alertify.error('Ocurrió un error, inténtelo más tarde');
        },
      });
    } catch {
      alertify.error('Ocurrió un error, inténtelo más tarde');
    }
  }

  updateDirectory() {
    try {
      this.directoryService.update(this.directoryForm.value).subscribe({
        next: (response) => {
          alertify.success('Registro actualizado correctamente');
          this.redirectSuccess();
        },
        error: (error) => {
          alertify.error('Ocurrió un error, inténtelo más tarde');
        },
      });
    } catch {
      alertify.error('Ocurrió un error, inténtelo más tarde');
    }
  }

  redirectSuccess() {
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 2000);
  }
}
