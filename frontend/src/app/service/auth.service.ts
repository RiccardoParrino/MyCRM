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
  private isRefreshing = false;
  private refreshSubject = new Subject<string>();
  private accessToken = localStorage.getItem('mycrm-jwt-token');

  constructor(private http:HttpClient, private router:Router) {}

  login(username:string, password:string) : Observable<any> {
    return this.http.post<{token:string}>(this.loginUrl,{username, password});
  }

  setAccessToken() {

    localStorage.setItem('mycrm-jwt-token');
  }

  getAccessToken(): string | null {
    return localStorage.getItem('mycrm-jwt-token');
  }

  getRefreshToken(): string {
    return localStorage.getItem('mycrm-refresh-token')
  }

  logout() {
    localStorage.removeItem('mycrm-jwt-token');
    localStorage.removeItem('mycrm-refresh-token');
    this.isLogged = false;
  }

  isLoggedIn() {
    return this.isLogged;
  }

  registration(user:UserDTO) : Observable<boolean> {
    return this.http.post<boolean>(this.registrationUrl, user);
  }

  refreshToken() : Observable<any> {

  }

}
