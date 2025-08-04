import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  readUrl : string = 'http://localhost:8080/sale/read'
  createUrl : string = 'http://localhost:8080/sale/create'
  updateUrl : string = 'http://localhost:8080/sale/update'
  deleteUrl : string = 'http://localhost:8080/sale/delete'

  constructor(private httpClient:HttpClient) {}

  readSales() {
  }

  createSale() {
  }

  updateSale() {
  }

  deleteSale() {
  }

}
