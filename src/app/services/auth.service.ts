import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  JwtHelperService } from '@auth0/angular-jwt'; 
// import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators'; 

@Injectable()
export class AuthService {
  currentUser: any; 

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials: any) { 
   return this.http.post('/api/authenticate', JSON.stringify(credentials))
    .pipe(map((response:any) => {
      let result = response.json();
      
      if (result && result.token) {
        localStorage.setItem('token', result.token);

        let jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

        return true; 
      }
      else return false; 
    }));
  }

  logout() { 
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() { 
    return tokenNotExpired('token');
  }
}

