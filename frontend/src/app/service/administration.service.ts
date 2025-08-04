import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../dto/user.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  private allRegisteredUserUrl : string = 'http://localhost:8080/user/getAllUser';

  constructor(private http:HttpClient) { }

  getAllRegisteredUser() : Observable<User[]> {
    return this.http.get<User[]>(this.allRegisteredUserUrl);
  }

}
