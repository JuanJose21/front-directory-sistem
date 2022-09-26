import { Injectable } from '@angular/core';
import { CanLoad, CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad, CanActivate {
  constructor(private router: Router) {}

  validateLoginCanLoad(): Promise<boolean> {
    return new Promise((resolve) => {
      if (localStorage.getItem('login')) {
        resolve(true);
      } else {
        this.router.navigate(['/home']);
        resolve(false);
      }
    });
  }

  canLoad() {
    return this.validateLoginCanLoad();
  }

  canActivate() {
    return this.validateLoginCanLoad();
  }
}
