import { Injectable } from '@angular/core';
import { ProductDTO } from '../dto/product.dto';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readUrl : string = 'http://localhost:8080/product/read'
  createUrl : string = 'http://localhost:8080/product/create'
  updateUrl : string = 'http://localhost:8080/product/update'
  deleteUrl : string = 'http://localhost:8080/product/delete'

  constructor(
    private http:HttpClient
  ) {}

  readProducts() : Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(this.readUrl);
  }

  createProduct(product:Product) : Observable<Boolean> {
    const productDTO = {
      'productId':product.productId,
      'name':product.name,
      'description':product.description,
      'unit':product.unit,
      'price':product.price,
      'stock':product.stock,
      'notes':product.notes
    }
    return this.http.post<Boolean>(this.createUrl, productDTO);
  }

  updateSale(sale:Product) : Observable<Boolean> {
    return this.http.post<Boolean>(this.updateUrl, sale);
  }

  deleteProduct(productId:number) : Observable<Boolean> {
    console.log("Here we go");
    const params = new HttpParams()
      .set( 'productId',productId );
    return this.http.get<Boolean>(this.deleteUrl, {params:params});
  }
  
}
