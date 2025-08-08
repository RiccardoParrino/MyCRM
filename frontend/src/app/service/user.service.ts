import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDetailsUrl:string = 'http://localhost:8080/user/userDetails'
  updateUserDetailsUrl:string = 'http://localhost:8080/user/updateUserDetails'

  constructor(
    private http:HttpClient
  ) { }

  userDetails(username:string, password:string) : Observable<UserDTO> {
    const userDetailsDTO = {
      'username': username
    }
    return this.http.post<UserDTO>(this.userDetailsUrl, userDetailsDTO);
  }

  updateUserDetails(updateUserDTO: { username:string, password:string, name: string; surname: string; email: string; phoneNumber: string; organizationName: string; }) : Observable<Boolean>{
    console.log(updateUserDTO);
    return this.http.post<Boolean>(this.updateUserDetailsUrl, updateUserDTO);
  }
}
