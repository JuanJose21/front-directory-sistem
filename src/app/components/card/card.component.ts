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
    image: '/assets/images/icon-default.png',
    name: 'test',
    email: 'test@test.com',
    location: 'test 1',
    phone: '123456789',
  };
  @Input() isDashboard: boolean = false;

  constructor(private router: Router) {}

  handleEdit(id: number) {
    this.router.navigate(['/edit', id]);
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
}
