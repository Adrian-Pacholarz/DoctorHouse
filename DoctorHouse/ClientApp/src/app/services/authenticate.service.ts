import { JwtHelperService } from "@auth0/angular-jwt";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private url = '/api/users/authenticate/'

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post(this.url, JSON.stringify(credentials), this.httpOptions)
      .pipe(map((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response['token']);
          localStorage.setItem('id', response['id']);
          localStorage.setItem('name', response['firstName']);
          localStorage.setItem('surname', response['lastName']);
          localStorage.setItem('role', response['userRole']);
          return true;
        }
        return false;
      }));

  }

  logout() {
    localStorage.clear();

  }

  isLoggedIn() {
    let jwtHelper = new JwtHelperService();
    return !jwtHelper.isTokenExpired(localStorage.getItem('token'));

  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return null

    let currentUser = {
      id : localStorage.getItem('id'),
      name : localStorage.getItem('name'),
      surname : localStorage.getItem('surname'),
      role : localStorage.getItem('role').toLowerCase()
    }

    return currentUser;
  }

}
