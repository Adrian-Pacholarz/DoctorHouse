import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateCustomerService {
  private url = '/api/users/customers/'

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  createCustomer(newCustomer) {
    return this.http.post(this.url, JSON.stringify(newCustomer), this.httpOptions);
  }
}
