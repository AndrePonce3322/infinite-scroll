import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './Interfaces/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<API> {
    return this.http.get<API>('https://rickandmortyapi.com/api/character');
  }
}
