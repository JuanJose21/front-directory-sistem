import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IResults } from 'src/app/interfaces/card.interace';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  search: string = '';
  isViewSkeleton: boolean = true;
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isViewSkeleton = false;
    }, 3000);
    this.search = this.activatedRoute.snapshot.paramMap.get('search') || '';
    if (this.search === '') this.router.navigate(['/home']);
  }

  returnHome() {
    this.router.navigate(['/home']);
  }
}
