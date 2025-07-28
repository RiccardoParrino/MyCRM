import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageDTO } from '../dto/message.dto';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-customer',
  imports: [RouterModule, HttpClientModule, MatToolbarModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customers:MessageDTO | undefined;
  
  constructor(private customerService:CustomerService) {
  }

  readCustomers() {
    this.customerService.readCustomers().subscribe(
      (customer) => { this.customers = customer; }
    )
  }

} 
