import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Sale } from '../model/sale.model';
import { SaleId } from '../model/saleId.model';

@Component({
  selector: 'app-create-sale',
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './create-sale.component.html',
  styleUrl: './create-sale.component.css'
})
export class CreateSaleComponent {

  customerId:number = 0;
  productId:number = 0;
  progress:string = '';
  activity:string = '';
  amount:string = '';
  lastUpdate:Date = new Date();
  notes:string = '';

  constructor(
    public createSaleDialogRef:MatDialogRef<CreateSaleComponent>
  ) {}

  save() {
    const sale = new Sale(
      new SaleId(
        -1,
        '',
        this.customerId,
        this.productId,
        new Date()
      ),
      '',
      this.customerId,
      this.productId,
      this.progress,
      this.activity,
      this.amount,
      this.lastUpdate,
      this.notes
    );
    this.createSaleDialogRef.close(sale);
  }

  close() {
    this.createSaleDialogRef.close(false);
  }
  
}
