import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDTO } from '../dto/customer.dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readCustomerAPI:string = 'http://localhost:8080/readCustomer';

  constructor(private http: HttpClient) {}

  readCustomers(): Observable<CustomerDTO> {
    return this.http.get<CustomerDTO>(this.readCustomerAPI);
  }

}
