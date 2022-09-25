import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IResults } from 'src/app/interfaces/card.interace';

@Component({
  selector: 'app-form-directory-page',
  templateUrl: './form-directory-page.component.html',
  styleUrls: ['./form-directory-page.component.scss'],
})
export class FormDirectoryPageComponent implements OnInit {
  cardEdit!: IResults;
  images: string[] = [
    '/assets/images/img-1.jpeg',
    '/assets/images/img-2.jpeg',
    '/assets/images/img-3.jpeg',
    '/assets/images/img-4.jpeg',
    '/assets/images/img-5.jpeg',
    '/assets/images/img-6.jpeg',
    '/assets/images/img-7.jpeg',
  ];
  backgroundImage: string = '/assets/images/img-1.jpeg';

  constructor(private router: Router) {
    this.cardEdit = this.router.getCurrentNavigation()?.extras?.state?.['card'];
  }

  ngOnInit() {
    const ran = Math.round((Math.random() * 100) % 6);
    this.backgroundImage = this.images[ran];

    if (!this.cardEdit) this.router.navigate(['/create']);
  }
}
