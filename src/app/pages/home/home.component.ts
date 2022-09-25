import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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

  ngOnInit() {
    const ran = Math.round((Math.random() * 100) % 6);
    console.log(ran);
    this.backgroundImage = this.images[ran];
  }
}
