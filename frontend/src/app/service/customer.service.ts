import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageDTO } from '../dto/message.dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readCustomerAPI:string = 'http://localhost:8080/readCustomer';

  constructor(private http: HttpClient) { }

  readCustomers(): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(this.readCustomerAPI);
  }

}
