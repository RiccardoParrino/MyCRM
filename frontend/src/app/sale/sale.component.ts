import { Component, OnInit, ViewChild } from '@angular/core';
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
import { SaleService } from '../service/sale.service';

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
export class SaleComponent implements OnInit{

  sales: Sale[] = [];
  salesDataSource = new MatTableDataSource<Sale>();
  displayedColumns: String[] = ["name", "progress", "activity", "customer", "amount", "product", "lastUpdate", "createdAt", "notes"];
  
  isRowSelected:boolean = false;
  currentSelectedSale!: Sale;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private saleService:SaleService) {}

  ngAfterViewInit() {
    this.salesDataSource.sort = this.sort;
  }

  ngOnInit() {
    this.readSales();
  }

  openCreateSaleDialog() {
    
  }

  readSales() {
    this.saleService.readSales();
  }

  deleteSale() {
    this.saleService.deleteSale(this.currentSelectedSale).subscribe(value => {
      value;
    })
  }

  modifySale() {
    this.saleService.updateSale(this.currentSelectedSale);
  }

  rowClicked(saleRow:any) {
    this.currentSelectedSale = saleRow;
    this.isRowSelected = true;
    console.log(saleRow);
  }

}
