import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageDTO } from '../dto/message.dto';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-customer',
  imports: [RouterModule, HttpClientModule, MatToolbarModule, ScrollingModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customers: Customer[] = [];
  
  constructor(private customerService:CustomerService) {
  }

  readCustomers() {
    this.customerService.readCustomers().subscribe(
      (customers[]) => {
        customers.forEach(element => {
          this.customers.push(element);
        });
      }
    )
  }

} 
