import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IResults } from 'src/app/interfaces/card.interace';
import { DirectoryService } from 'src/app/services/directory.service';
declare let alertify: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: IResults = {
    id: 1,
    imagen: 'url',
    nombre: 'Testing',
    nit: 123456789,
    direccion: 'Calle1',
    telefono: 123456789,
    celular: 123456789,
    correo: 'email@mail.com',
  };
  @Input() isDashboard: boolean = false;

  constructor(
    private router: Router,
    private directoryService: DirectoryService
  ) {}

  handleEdit(card: IResults) {
    this.router.navigate(['edit'], { state: { card } });
  }

  handleDelete(name: string, id: number) {
    alertify
      .confirm(
        name,
        '¿Desea eliminar este registro?',
        () => {
          try {
            this.directoryService.delete(id).subscribe({
              next: (response) => {
                alertify.success('Registro eliminado correctamente');
              },
              error: (error) => {
                alertify.error('Ocurrió un error, inténtelo más tarde');
              },
            });
          } catch {
            alertify.error('Ocurrió un error, inténtelo más tarde');
          }
        },
        () => {}
      )
      .show();
  }

  errorHandler(event: any): void {
    event.target.src = '/assets/images/icon-default.png';
  }
}
