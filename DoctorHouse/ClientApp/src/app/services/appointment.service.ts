import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private url = '/api/appointments'

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getAppointments() {
    return this.http.get(this.url)
  }

  getAppointmentsById(id) {
    return this.http.get(this.url + '/' + id)
  }
}
