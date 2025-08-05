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
import { Product } from '../model/product.model';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product',
  imports: [RouterModule, 
    HttpClientModule, 
    MatToolbarModule, 
    ScrollingModule,
    MatListModule, 
    MatButtonModule, 
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products: Product[] = [];
  productsDataSource = new MatTableDataSource<Product>();
  displayedColumns: String[] = ["name", "description", "unit", "stock", "notes"];

  isRowSelected:boolean = false;
  currentSelectedProduct: Customer | undefined;

  @ViewChild(MatSort) sort!: MatSort;

  constructor (
    private productService:ProductService
  ){}

  ngAfterViewInit() {
    this.productsDataSource.sort = this.sort;
  }

  openCreateProductDialog() {}

  readProducts() {
    this.productService.readProducts().subscribe( products => {
      this.products = [];
      products.forEach( p =>
        this.products.push(
          new Product(
            p.name,
            p.description,
            p.unit,
            p.price,
            p.stock,
            p.notes
          )
        )
      )
      this.productsDataSource.data = products;
    });
  }

  deleteProduct() {}

  modifyProduct() {}

  rowClicked(productRow:any) {
    this.currentSelectedProduct = productRow;
    this.isRowSelected = true;
    console.log(productRow);
  }


}
