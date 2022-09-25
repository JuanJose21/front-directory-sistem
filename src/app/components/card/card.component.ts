import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IResults } from 'src/app/interfaces/card.interace';
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

  constructor(private router: Router) {}

  handleEdit(card: IResults) {
    this.router.navigate(['edit'], { state: { card } });
  }

  handleDelete(name: string) {
    alertify
      .confirm(
        name,
        '¿Desea eliminar este registro?',
        () => {
          alertify.success('Registro eliminado correctamente');
        },
        () => {}
      )
      .show();
  }

  errorHandler(event: any): void {
    event.target.src = '/assets/images/icon-default.png';
  }
}
