import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserDTO } from '../dto/user.dto';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  resetUrl:string = "http://localhost:8080/auth/resetPassword";
  changePasswordUrl:string = "http://localhost:8080/auth/changePassword";

  constructor(private http:HttpClient,
    private authService:AuthService,
    private userService:UserService
  ) {}

  userDetails() : Observable<UserDTO> {
    return this.userService.userDetails(
      this.authService.usernameLogged,
      this.authService.passwordLogged
    )
  }

  resetPassword() : Observable<Boolean> {
    const data = {
      'username':this.authService.usernameLogged,
      'password':this.authService.passwordLogged
    }
    return this.http.post<Boolean>(this.resetUrl, data);
  }

  changePassword(oldPassword:string, newPassword:string) : Observable<Boolean> {
    const changePasswordDTO = {
      'username':this.authService.usernameLogged,
      'oldPassword':oldPassword,
      'newPassword':newPassword
    }
    return this.http.post<Boolean>(this.changePasswordUrl, changePasswordDTO);
  }

}
