import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged: boolean = false;

  constructor(private http:HttpClient, private router:Router) {}

  login(username:string, password:string) {
    if (username == 'giovanni' && password == 'mycrm') {
      this.isLogged = true;
      return true;
    }
    if (username == 'riccardo' && password == 'mycrm') {
      this.isLogged = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isLogged = false;
  }

  isLoggedIn() {
    return this.isLogged;
  }

  registration() {
    // parte chiamata verso backend this.http...
    this.router.navigate(["login"]);
  }

}
