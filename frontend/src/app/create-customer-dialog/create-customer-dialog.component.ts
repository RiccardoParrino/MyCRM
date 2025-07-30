import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-create-customer-dialog',
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './create-customer-dialog.component.html',
  styleUrl: './create-customer-dialog.component.css'
})
export class CreateCustomerDialogComponent {

  name:string = '';
  surname:string = '';
  email:string = '';
  phoneNumber:string = '';
  organizationName:string = '';
  city:string = '';
  region:string = '';
  state:string = '';
  coreBusiness:string = '';
  notes:string = '';

  constructor(
    public dialogRef:MatDialogRef<CreateCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  save() {
    const newCustomer = new Customer(
      this.name,
      this.surname,
      this.email,
      this.phoneNumber,
      this.organizationName,
      this.city,
      this.region,
      this.state,
      this.coreBusiness,
      new Date(),
      this.notes
    );
    this.dialogRef.close(newCustomer);
  }

  close() {
    this.dialogRef.close();
  }
}
