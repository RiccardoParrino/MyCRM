import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleDTO } from '../dto/sale.dto';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  readUrl : string = 'http://localhost:8080/sale/read'
  createUrl : string = 'http://localhost:8080/sale/create'
  updateUrl : string = 'http://localhost:8080/sale/update'
  deleteUrl : string = 'http://localhost:8080/sale/delete'

  constructor(private httpClient:HttpClient) {}

  readSales() : Observable<SaleDTO[]> {
    return this.httpClient.get<SaleDTO[]>(this.readUrl);
  }

  createSale(sale:SaleDTO) : Observable<Boolean> {
    return this.httpClient.post<Boolean>(this.createUrl, sale);
  }

  updateSale(sale:SaleDTO) : Observable<Boolean> {
    return this.httpClient.post<Boolean>(this.updateUrl, sale);
  }

  deleteSale(sale:SaleDTO) : Observable<Boolean> {
    return this.httpClient.get<Boolean>(this.deleteUrl);
  }

}
