import { Injectable } from '@angular/core';
import { ProductDTO } from '../dto/product.dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  ) { }

  readProducts() : Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(this.readUrl);
  }

  // createSale(sale:Sale) : Observable<Boolean> {
  // }

  // updateSale(sale:any) : Observable<Boolean> {
  // }

  // deleteSale(saleId:SaleId) : Observable<Boolean> {
  // }
  
}
