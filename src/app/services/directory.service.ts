import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResults } from '../interfaces/card.interace';

// const environment
const api = environment.api;

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  public resultados = [];

  constructor(private http: HttpClient) {}

  getAll() {
    this.http.get(`${api}/directorio/getAll`).subscribe((response: any) => {
      this.resultados = response;
    });
  }

  save(directory: any) {
    return this.http.post(`${api}/directorio/save`, directory);
  }

  update(directory: any) {
    return this.http.put(`${api}/directorio/update`, directory);
  }

  delete(id: number) {
    return this.http.delete(`${api}/directorio/delete/${id}`);
  }
}
