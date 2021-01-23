import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {

  private url = '/api/users/specialists'

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getSpecialists() {
    return this.http.get(this.url);
  }

  getSpecialistById(id) {
    return this.http.get(this.url + '/' + id);
  }

  updateSpecialist(id, specialist) {
    return this.http.put(this.url + '/' + id, JSON.stringify(specialist), this.httpOptions);
  }
}
