import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResults } from '../interfaces/card.interace';

// const environment
const api = environment.api;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public resultados = [];

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${api}/login`, { email, password });
  }

  logout() {
    localStorage.removeItem('login');
  }
}
