import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDTO } from '../dto/customer.dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readCustomerAPI:string = environment.apiUrl + '/customer/read';
  createCustomerAPI:string = environment.apiUrl + '/customer/create';
  deleteCustomerAPI:string = environment.apiUrl + '/customer/delete';
  updateCustomerAPI:string = environment.apiUrl + '/customer/update';

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
