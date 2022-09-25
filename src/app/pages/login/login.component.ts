import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
  userForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    const ran = Math.round((Math.random() * 100) % 6);
    this.backgroundImage = this.images[ran];

    this.userForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    console.log(this.userForm.get('user')?.value);
    console.log(this.userForm.get('password')?.value);
  }
}
