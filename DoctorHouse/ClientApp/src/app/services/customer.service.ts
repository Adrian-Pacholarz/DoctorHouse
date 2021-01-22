import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = '/api/users/customers'

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getCustomers() {
    return this.http.get(this.url);
  }

  getCustomerById(id) {
    return this.http.get(this.url + '/' + id);
  }

  updateCustomer(id, customer) {
    return this.http.patch(this.url + '/' + id, JSON.stringify(customer), this.httpOptions);
  }
}
