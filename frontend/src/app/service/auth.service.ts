import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { __values } from 'tslib';
import { UserDTO } from '../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: boolean = false;
  public usernameLogged:string = '';
  public passwordLogged:string = '';
  private registrationUrl: string = 'http://localhost:8080/auth/registration';
  private loginUrl: string = 'http://localhost:8080/auth/login';

  constructor(private http:HttpClient, private router:Router) {}

  login(username:string, password:string) : Observable<any> {
    return this.http.post<{token:string}>(this.loginUrl,{username, password});
  }

  logout() {
    this.isLogged = false;
  }

  isLoggedIn() {
    return this.isLogged;
  }

  registration(user:UserDTO) : Observable<boolean> {
    return this.http.post<boolean>(this.registrationUrl, user);
  }

}
