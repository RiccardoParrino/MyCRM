import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-modify-product',
  imports: [],
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
  ) {}

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
