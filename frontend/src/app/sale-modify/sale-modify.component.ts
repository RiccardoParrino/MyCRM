import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-sale-modify',
  imports: [
    MatDialogModule, 
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule, 
    MatButtonModule
  ],
  templateUrl: './sale-modify.component.html',
  styleUrl: './sale-modify.component.css'
})
export class SaleModifyComponent {

  customerId:number = 0;
  productId:number = 0;
  progress:string = '';
  activity:string = '';
  amount:string = '';
  notes:string = '';

  constructor(
    public modifySaleDialogRef:MatDialogRef<SaleModifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  
  save() {
    const saleDTO = {
      'customerId': this.customerId,
      'productId': this.productId,
      'progress': this.progress,
      'activity': this.activity,
      'amount': this.amount,
      'lastUpdate': new Date(),
      'notes': this.notes
    };
    this.modifySaleDialogRef.close(saleDTO);
  }

  close() {
    this.modifySaleDialogRef.close();
  }
}
