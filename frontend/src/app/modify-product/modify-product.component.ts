import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../model/product.model';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-modify-product',
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './modify-product.component.html',
  styleUrl: './modify-product.component.css'
})
export class ModifyProductComponent {

  name:string = '';
  description:string = '';
  unit:string = '';
  prices:string = '';
  stock:number = 0;
  notes:string = '';

  constructor(
    private modifyProductComponentMatDialogRef:MatDialogRef<ModifyProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.name = data.name;
    this.description = data.description;
    this.unit = data.unit;
    this.prices = data.prices;
    this.stock = data.stock;
    this.notes = data.notes;
  }

  save() {
    this.modifyProductComponentMatDialogRef.close( 
      new Product(
        -1,
        this.name,
        this.description,
        this.unit,
        this.prices,
        this.stock,
        this.notes
      )
    );
  }

  close() {
    this.modifyProductComponentMatDialogRef.close(false);
  }

}

