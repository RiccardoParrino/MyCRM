import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { Customer } from '../model/customer.model';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatRow, MatTableDataSource, MatTableModule} from '@angular/material/table';
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
  displayedColumns: String[] = ["name", "email", "organizationName", "city", "region", "state", "coreBusiness", "phoneNumber", "notes", "createdAt"];

  isRowSelected:boolean = false;
  currentSelectedRow: MatRow | undefined;

  constructor(private customerService:CustomerService,
    private createCustomerDialog:MatDialog) {
  }

  readCustomers() {
    this.customerService.readCustomers().subscribe(
      (customers) => {
        this.customers = [];  
        customers.forEach(item => {
          this.customers.push(
            new Customer (
              item.name,
              item.surname,
              item.email,
              item.phoneNumber,
              item.organizationName,
              item.city,
              item.region,
              item.state,
              item.coreBusiness,
              item.createdAt,
              item.notes
            )
          );
        });
        this.customersDataSource.data = this.customers;
      }
    );
  }

  openCreateCustomerDialog() : void {
    console.log("Create Customer Dialog opened!");
    this.createCustomerDialog.open(CreateCustomerDialogComponent, 
      {width:'1000px',height:'600px', minWidth:'1000px', maxWidth:'1000px'}
    );

    this.createCustomerDialog.afterAllClosed.subscribe ( result => {
      console.log(result);
    });
  }

  rowClicked(customerRow:MatRow) {
    this.currentSelectedRow = customerRow;
    this.isRowSelected = true;
  }

} 
