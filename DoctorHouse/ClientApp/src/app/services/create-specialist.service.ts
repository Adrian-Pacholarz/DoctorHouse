import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateSpecialistService {
  private url = '/api/users/specialists/'

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  createSpecialist(newSpecialist) {
    return this.http.post(this.url, JSON.stringify(newSpecialist), this.httpOptions);
  }
}
