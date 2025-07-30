import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Customer } from '../model/customer.model';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmCreateCustomerComponent } from '../confirm-create-customer/confirm-create-customer.component';

@Component({
  selector: 'app-create-customer-dialog',
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
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
    public createCustomerDialogRef:MatDialogRef<CreateCustomerDialogComponent>,
    public confirmCreateCustomerDialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  save() {
    const confirmDialogRef = this.confirmCreateCustomerDialog.open(ConfirmCreateCustomerComponent,
      {width:'512px', height:'158px'}
    );

    confirmDialogRef.afterClosed().subscribe( result => {
      if (result) {
        const newCustomer = new Customer(
          -1,
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
        this.createCustomerDialogRef.close(newCustomer);
      }
    });
  }

  close() {
    this.createCustomerDialogRef.close(false);
  }
}
