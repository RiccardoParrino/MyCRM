import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDetailsUrl:string = 'http://localhost:8080/user/'

  constructor(
    private http:HttpClient
  ) { }

  userDetails(username:string, password:string) : Observable<UserDTO> {
    const userDTO = {
      'username': username,
      'password': password
    }
    return this.http.post<UserDTO>(this.userDetailsUrl, userDTO);
  }
}
