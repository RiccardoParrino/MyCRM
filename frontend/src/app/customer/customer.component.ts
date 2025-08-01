import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { Customer } from '../model/customer.model';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CreateCustomerDialogComponent } from '../create-customer-dialog/create-customer-dialog.component';
import { DeleteCustomerComponent } from '../delete-customer/delete-customer.component';
import { ModifyCustomerComponent } from '../modify-customer/modify-customer.component';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-customer',
  imports: [RouterModule, 
    HttpClientModule, 
    MatToolbarModule, 
    ScrollingModule,
    MatListModule, 
    MatButtonModule, 
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customers: Customer[] = [];
  customersDataSource = new MatTableDataSource<Customer>();
  displayedColumns: String[] = ["name", "email", "organizationName", "city", "region", "state", "coreBusiness", "phoneNumber", "notes", "createdAt"];

  isRowSelected:boolean = false;
  currentSelectedCustomer: Customer | undefined;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private customerService:CustomerService, 
    private createCustomerDialog:MatDialog,
    private deleteCustomerDialog:MatDialog,
    private modifyCustomerDialog:MatDialog) {
  }

  ngAfterViewInit() {
    this.customersDataSource.sort = this.sort;
  }

  modifyCustomer() : void {
    console.log("Open modify customer dialog!");

    const dialogRef = this.modifyCustomerDialog.open(ModifyCustomerComponent,
      {width:'1000px',height:'600px', maxWidth:'1000px', data:this.currentSelectedCustomer},
    );

    dialogRef.afterClosed().subscribe( data => {
      if (data) {
        this.customerService.updateCustomer(data).subscribe( result => {
          if (result) {
            console.log("Customer successfully updated!");
            this.readCustomers();
          }
        });
      } else {
        this.currentSelectedCustomer = undefined;
        this.isRowSelected = false;
      }
    });
  }

  readCustomers() {
    this.customerService.readCustomers().subscribe(
      (customers) => {
        this.customers = [];  
        customers.forEach(item => {
          this.customers.push(
            new Customer (
              item.customerId,
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
    const dialogRef = this.createCustomerDialog.open(CreateCustomerDialogComponent, 
      {width:'1000px',height:'600px', maxWidth:'1000px'}
    );

    dialogRef.afterClosed().subscribe ( data => {
      if (data) {
        this.customerService.createCustomer(data).subscribe( result => {
        if ( result ) {
          console.log("customer creato correttamente");
        } else {
          console.log("errore!");
        }
      });
      }
    });
  }

  deleteCustomer() {
    const deleteDialogRef = this.deleteCustomerDialog.open(DeleteCustomerComponent,
      {width:'512px', height:'158px'}
    );

    deleteDialogRef.afterClosed().subscribe( result => {
      if (result) {
        if (this.currentSelectedCustomer) {
          this.customerService.deleteCustomer(this.currentSelectedCustomer.customerId).subscribe ( 
            (value) => console.log("customer deleted successfully!")
          );
        }
      } else {
        this.currentSelectedCustomer = undefined;
        this.isRowSelected = false;
      }
    });
  }

  rowClicked(customerRow:any) {
    this.currentSelectedCustomer = customerRow;
    this.isRowSelected = true;
    console.log(customerRow);
  }

} 
