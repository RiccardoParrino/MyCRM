import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readCustomerAPI:string = 'http://localhost:8080/readCustomer';

  constructor(private http: HttpClient) { }

  readCustomers(): Observable<String> {
    return this.http.get<String>(this.readCustomerAPI);
  }

}
