import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-sale',
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './create-sale.component.html',
  styleUrl: './create-sale.component.css'
})
export class CreateSaleComponent {

  userId:number = 0;
  customerId:number = 0;
  productId:number = 0;
  progress:string = '';
  activity:string = '';
  amount:string = '';
  lastUpdate:Date = new Date();
  notes:string = '';

  constructor(
    public createSaleDialogRef:MatDialogRef<CreateSaleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  save() {
    this.createSaleDialogRef.close(this.data);
  }

  close() {
    this.createSaleDialogRef.close(false);
  }
  
}
