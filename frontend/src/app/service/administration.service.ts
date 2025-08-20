import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../dto/user.dto';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  private allRegisteredUserUrl : string = environment.apiUrl + '/user/getAllUser';

  constructor(private http:HttpClient) { }

  getAllRegisteredUser() : Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(this.allRegisteredUserUrl);
  }

}
