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
      image: '/assets/images/icon-default.png',
      name: 'test',
      email: 'test@test.com',
      location: 'test 1',
      phone: '123456789',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    this.router.navigate(['/home']);
  }
}
