import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-create-product',
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  name:string = '';
  description:string = '';
  unit:string = '';
  price:string = '';
  stock:number = 0;
  notes:string = '';

  constructor(
    private createProductComponent:MatDialogRef<CreateProductComponent>
  ) {

  }

  save() {
    const product = new Product(
      -1,
      this.name,
      this.description,
      this.unit,
      this.price,
      this.stock,
      this.notes
    );
    this.createProductComponent.close(product);
  }

  close(){
    this.createProductComponent.close();
  }

}
