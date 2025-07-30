import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDTO } from '../dto/customer.dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readCustomerAPI:string = 'http://localhost:8080/readCustomer';
  createCustomerAPI:string = 'http://localhost:8080/createCustomer';

  constructor(private http: HttpClient) {}

  readCustomers(): Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>(this.readCustomerAPI);
  }

  createCustomer(customer:CustomerDTO): Observable<Boolean> {
    return this.http.post<Boolean>(this.createCustomerAPI, customer);
  }

}
