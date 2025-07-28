import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { Customer } from '../model/customer.model';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-customer',
  imports: [RouterModule, HttpClientModule, MatToolbarModule, ScrollingModule, NgFor, MatListModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  
  constructor(private customerService:CustomerService) {
  }

  ngOnInit(): void {
    this.readCustomers();
  }

  readCustomers() {
    this.customerService.readCustomers().subscribe(
      (customers) => {
        customers.forEach(item => {
          this.customers.push(
            new Customer (
              item.name,
              item.surname,
              item.email,
              item.phoneNumber,
              item.organization,
              item.createdAt,
              item.notes
            )
          );
        });
      }
    )
  }

} 
