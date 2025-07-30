import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDTO } from '../dto/customer.dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readCustomerAPI:string = 'http://localhost:8080/readCustomer';
  createCustomerAPI:string = 'http://localhost:8080/createCustomer';
  deleteCustomerAPI:string = 'http://localhost:8080/deleteCustomer';
  updateCustomerAPI:string = 'http://localhost:8080/updateCustomer';

  constructor(private http: HttpClient) {}

  readCustomers(): Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>(this.readCustomerAPI);
  }

  createCustomer(customer:CustomerDTO): Observable<Boolean> {
    return this.http.post<Boolean>(this.createCustomerAPI, customer);
  }

  deleteCustomer(customerId:number): Observable<Boolean> {
    const params = new HttpParams().set('customerId', customerId);
    return this.http.get<Boolean>(this.deleteCustomerAPI, {params});
  }

  updateCustomer(customer:CustomerDTO): Observable<Boolean> {
    return this.http.post<Boolean>(this.updateCustomerAPI, customer);
  }

}
