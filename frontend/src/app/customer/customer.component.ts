import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { Customer } from '../model/customer.model';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { CreateCustomerDialogComponent } from '../create-customer-dialog/create-customer-dialog.component';

@Component({
  selector: 'app-customer',
  imports: [RouterModule, 
    HttpClientModule, 
    MatToolbarModule, 
    ScrollingModule,
    MatListModule, 
    MatButtonModule, 
    MatTableModule
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customers: Customer[] = [];
  customersDataSource = new MatTableDataSource<Customer>();
  displayedColumns: String[] = ["name", "email", "phoneNumber", "organization"];

  constructor(private customerService:CustomerService,
    private createCustomerDialog:MatDialog) {
  }

  readCustomers() {
    console.log("Reading customers...");
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
    );
    console.log("Customers readed!");
    this.customersDataSource.data = this.customers;
    console.log(this.customers);
    console.log(this.customersDataSource.data);
  }

  openCreateCustomerDialog() : void {
    console.log("Create Customer Dialog opened!");
    this.createCustomerDialog.open(CreateCustomerDialogComponent, 
      { width: '400px',
        data: {
          name: "temp"
        }
      });

    this.createCustomerDialog.afterAllClosed.subscribe ( result => {
      console.log(result);
    }
    )
  }

} 
