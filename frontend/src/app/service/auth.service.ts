import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from '../dto/user.dto';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged: boolean = false;
  private registrationUrl: string = 'http://localhost:8080/registration';
  private loginUrl: string = 'http://localhost:8080/login';

  constructor(private http:HttpClient, private router:Router) {}

  login(username:string, password:string) {
    this.http.post<boolean>(this.loginUrl,{username, password}).subscribe( value => {
      if (value == true) 
        return true;
      else
        return false;
    } )
    return false;
  }

  logout() {
    this.isLogged = false;
  }

  isLoggedIn() {
    return this.isLogged;
  }

  registration(user:User) {
    this.http.post<boolean>(this.registrationUrl, user).subscribe({
      next: value => {
        if (value == true)
          alert('New user registered!');
        else
          alert('Some errors occurred!');
      }, 
      error: value => {
        alert(value);
      }
    });
    this.router.navigate(["login"]);
  }

}
