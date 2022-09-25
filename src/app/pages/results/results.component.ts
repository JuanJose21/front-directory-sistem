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
      image: '/assets/images/icon-default.png',
      name: 'test',
      email: 'test@test.com',
      location: 'test 1',
      phone: '123456789',
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
