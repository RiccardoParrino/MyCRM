import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  resetUrl:string = "http://localhost:8080/auth/resetPassword"

  constructor(private http:HttpClient,
    private authService:AuthService
  ) {}

  resetPassword() : Observable<Boolean> {
    const params = new HttpParams()
      .set( 'username',this.authService.usernameLogged )
      .set( 'password',this.authService.passwordLogged );
    return this.http.post<Boolean>(this.resetUrl, params);
  }

}
