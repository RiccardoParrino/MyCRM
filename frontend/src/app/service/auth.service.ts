import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged: boolean = false;

  constructor() {}

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

}
