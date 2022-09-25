import { Component, Input } from '@angular/core';
import { IResults } from 'src/app/interfaces/card.interace';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: IResults = {
    image: '/assets/images/icon-default.png',
    name: 'test',
    email: 'test@test.com',
    location: 'test 1',
    phone: '123456789',
  };
}
