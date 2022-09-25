import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IResults } from 'src/app/interfaces/card.interace';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  search: string = '';
  resultsTest: IResults[] = [
    {
      id: 1,
      imagen: 'url',
      nombre: 'Testing',
      nit: 123456789,
      direccion: 'Calle1',
      telefono: 123456789,
      celular: 123456789,
      correo: 'email@mail.com',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    this.router.navigate(['/home']);
  }
}
