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
import { Sale } from '../model/sale.model';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-sale',
  imports: [RouterModule, 
    HttpClientModule, 
    MatToolbarModule, 
    ScrollingModule,
    MatListModule, 
    MatButtonModule, 
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {

  sales: Sale[] = [];
  salesDataSource = new MatTableDataSource<Sale>();
  displayedColumns: String[] = ["name", "progress", "activity", "customer", "amount", "product", "lastUpdate", "createdAt", "notes"];
  
  isRowSelected:boolean = false;
  currentSelectedSale: Sale | undefined;

  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngAfterViewInit() {
    this.salesDataSource.sort = this.sort;
  }

  openCreateSaleDialog() {}

  readSales() {}

  deleteSale() {}

  modifySale() {}

  rowClicked(saleRow:any) {
    this.currentSelectedSale = saleRow;
    this.isRowSelected = true;
    console.log(saleRow);
  }

}
