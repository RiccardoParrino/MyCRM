import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Sale } from '../model/sale.model';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { SaleService } from '../service/sale.service';
import { CreateSaleComponent } from '../create-sale/create-sale.component';
import { SaleId } from '../model/saleId.model';
import { SaleModifyComponent } from '../sale-modify/sale-modify.component';

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

  constructor(
    private saleService:SaleService,
    private createSaleComponentMatDialog:MatDialog,
    private modifySaleComponentMatDialog:MatDialog
  ) {}

  ngAfterViewInit() {
    this.salesDataSource.sort = this.sort;
  }

  ngOnInit() {
    this.readSales();
  }

  openCreateSaleDialog() {
    const createSaleDialogRef = this.createSaleComponentMatDialog.open(
      CreateSaleComponent,
      {width:'1000px',height:'600px', maxWidth:'1000px'}
    );

    createSaleDialogRef.afterClosed().subscribe( data => {
      if (data != false){
        console.log(data);
        this.saleService.createSale(data).subscribe( value => {
          if (value){
            console.log("New sale created!");
            this.readSales();
          } else {
            console.log("Some error occurred");
          }
        } );
      }
    });
  }

  readSales() {
    this.saleService.readSales().subscribe( saleDtoData => {
      const sales:Sale[] = [];
      saleDtoData.forEach( sale => {
        sales.push(
          new Sale(
            new SaleId (
              sale.saleId,
              sale.username,
              sale.customerId,
              sale.productId,
              sale.createdAt
            ),
            sale.username,
            sale.customerId,
            sale.productId,
            sale.progress,
            sale.activity,
            sale.amount,
            sale.lastUpdate,
            sale.notes
          )
        )
      });
      this.salesDataSource.data = sales;
    });
  }

  deleteSale() {
    this.saleService.deleteSale(this.currentSelectedSale.saleId)
      .subscribe(
        value => {
          if (value) {
            console.log("Sale deleted successfully");
            this.readSales();
          } else {
            console.log("Some error occurred!");
          }
        }
      );
  }

  modifySale() {
    const createSaleDialogRef = this.createSaleComponentMatDialog.open(
      SaleModifyComponent,
      {width:'1000px',height:'600px', maxWidth:'1000px'}
    );
    
    createSaleDialogRef.afterClosed().subscribe( data => {
      if (data) {
        console.log(data);
        const saleDTO = {
          'saleId' : this.currentSelectedSale.saleId.saleId,
          'createdAt' : this.currentSelectedSale.saleId.createdAt,
          'username': this.currentSelectedSale.saleId.username,
          'customerId': data.customerId == '' ? this.currentSelectedSale.customerId : data.customerId,
          'productId': data.productId == '' ? this.currentSelectedSale.productId : data.productId,
          'progress': data.progress == '' ? this.currentSelectedSale.progress : data.progress,
          'activity': data.activity == '' ? this.currentSelectedSale.activity : data.activity,
          'amount': data.amount == '' ? this.currentSelectedSale.amount : data.amount,
          'notes': data.notes == '' ? this.currentSelectedSale.notes : data.notes
        };
        this.saleService.updateSale(saleDTO).subscribe( value => {
          console.log(value);
          if (value) {
            console.log("Sale modifiied successfully!");
          }
          else {
            console.log("Some errors occurred!");
          }
          this.readSales();
        });
      }
    } );
  }

  rowClicked(saleRow:any) {
    this.currentSelectedSale = saleRow;
    this.isRowSelected = true;
    console.log(saleRow);
  }

}
