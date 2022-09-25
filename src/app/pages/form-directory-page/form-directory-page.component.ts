import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-directory-page',
  templateUrl: './form-directory-page.component.html',
  styleUrls: ['./form-directory-page.component.scss'],
})
export class FormDirectoryPageComponent implements OnInit {
  idEdit!: number;
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const ran = Math.round((Math.random() * 100) % 6);
    this.backgroundImage = this.images[ran];

    this.idEdit = Number(this.activatedRoute.snapshot.paramMap.get('id')) || 0;
    if (isNaN(this.idEdit)) this.router.navigate(['/dashboard']);
  }
}
