import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  imports: [RouterModule, HttpClientModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customers:String;
  
  constructor(private customerService:CustomerService) {
    this.customers = "";
  }

  readCustomers() {
    this.customerService.readCustomers().subscribe(
      (customer) => { this.customers = customer; console.log("temp");}
    )
  }

} 
