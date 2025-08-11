import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleDTO } from '../dto/sale.dto';
import { Sale } from '../model/sale.model';
import { SaleId } from '../model/saleId.model';

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

  createSale(sale:Sale) : Observable<Boolean> {
    const saleDTO = {
      'saleId' : sale.saleId.saleId,
      'createdAt' : sale.saleId.createdAt,
      'customerId': sale.saleId.customerId,
      'productId': sale.saleId.productId,
      'progress': sale.progress,
      'activity': sale.activity,
      'amount': sale.amount,
      'lastUpdate': sale.lastUpdate,
      'notes': sale.notes
    };
    return this.httpClient.post<Boolean>(this.createUrl, saleDTO);
  }

  updateSale(sale:any) : Observable<Boolean> {
    console.log(sale);
    return this.httpClient.post<Boolean>(this.updateUrl, sale);
  }

  deleteSale(saleId:SaleId) : Observable<Boolean> {
    return this.httpClient.post<Boolean>(this.deleteUrl, saleId);
  }

}
