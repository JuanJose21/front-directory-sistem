import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
declare let alertify: any;

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

  constructor(private router: Router, private authServices: AuthService) {}

  ngOnInit() {
    const ran = Math.round((Math.random() * 100) % 6);
    this.backgroundImage = this.images[ran];

    this.userForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.authServices
      .login(this.userForm.value.user, this.userForm.value.password)
      .subscribe({
        next: (response) => {
          localStorage.setItem('login', 'true');
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 500);
        },
        error: (error) => {
          alertify.error('Ocurrió un error, inténtelo más tarde');
        },
      });
  }
}
