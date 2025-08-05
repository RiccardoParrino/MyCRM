import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { Customer } from '../model/customer.model';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Product } from '../model/product.model';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ProductService } from '../service/product.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateProductComponent } from '../create-product/create-product.component';
import { ModifyProductComponent } from '../modify-product/modify-product.component';


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
  currentSelectedProduct!: Product | undefined;

  @ViewChild(MatSort) sort!: MatSort;

  constructor (
    private productService:ProductService,
    private createproductComponentMatDialog:MatDialog,
    private modifyProductComponentMatDialog:MatDialog
  ){}

  ngAfterViewInit() {
    this.productsDataSource.sort = this.sort;
  }

  openCreateProductDialog() {
    const createProductDialogRef = this.createproductComponentMatDialog.open(
      CreateProductComponent,
      {width:'1000px',height:'600px',maxWidth:'1000px'}
    );

    createProductDialogRef.afterClosed().subscribe(data => {
      if(data){
        this.productService.createProduct(data).subscribe(value => {
          if (value) {
            console.log("Product successfully created!");
            this.readProducts();
          } else {
            console.log("Some errors occurred!");
          }
        });
      }
    })
  }

  readProducts() {
    this.productService.readProducts().subscribe( products => {
      this.products = [];
      products.forEach( p =>
        this.products.push(
          new Product(
            p.productId,
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

  deleteProduct() {
    if (this.currentSelectedProduct)
      this.productService.deleteProduct(this.currentSelectedProduct.productId).subscribe( value => {
        if(value){
          console.log("Product successfully deleted");
          this.readProducts();
        } else {
          console.log("Some errors occurred!");
        }
      } );
  }

  modifyProduct() {
    const modifyProductDialogRef = this.modifyProductComponentMatDialog.open(
      ModifyProductComponent,
      {width:'1000px',height:'600px',maxWidth:'1000px'}
    );
  
    modifyProductDialogRef.afterClosed().subscribe( value => {
      if(value) {
        console.log(value);
      }
    });
  }

  rowClicked(productRow:any) {
    this.currentSelectedProduct = productRow;
    this.isRowSelected = true;
    console.log(productRow);
  }


}
