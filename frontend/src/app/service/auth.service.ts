import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, Subject, switchMap, tap } from 'rxjs';
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
  private refreshUrl: string = 'http://localhost:8080/auth/refreshToken'

  isRefreshing = false;
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http:HttpClient, private router:Router) {}

  login(username:string, password:string) : Observable<any> {
    return this.http.post<{accessToken:string,refreshToken:string,msgError:string}>(this.loginUrl,{username, password});
  }

  logout() {
    this.clearTokens();
    this.isLogged = false;
  }

  clearTokens() : void {
    localStorage.removeItem('mycrm-jwt-token');
    localStorage.removeItem('mycrm-refresh-token');
  }

  getAccessToken(): string | null {
    return localStorage.getItem('mycrm-jwt-token');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('mycrm-refresh-token')
  }

  private storeTokens(tokens:{accessToken:string, refreshToken:string, msgError:string}) {
    localStorage.setItem('access_token', tokens.accessToken);
    localStorage.setItem('refresh_token', tokens.refreshToken);
  }

  refreshToken() : Observable<any> {
    if (this.isRefreshing) {
      return this.refreshTokenSubject.pipe(
        switchMap(token => {
          return of(token);
        })
      )
    }

    this.isRefreshing = true;
    this.refreshTokenSubject.next(null);

    const refreshToken = this.getRefreshToken();

    return this.http.post<{accessToken:string,refreshToken:string,msgError:string}>(this.refreshUrl, refreshToken).pipe(
      tap( (tokens) => {
        this.isRefreshing = false;
        this.storeTokens(tokens);
        this.refreshTokenSubject.next(tokens.accessToken);
      }),
      catchError( error => {
        this.isRefreshing = false;
        this.logout();
        return of(null);
      })
    );
  }

  isLoggedIn() {
    return this.isLogged;
  }

  registration(user:UserDTO) : Observable<boolean> {
    return this.http.post<boolean>(this.registrationUrl, user);
  }

}
