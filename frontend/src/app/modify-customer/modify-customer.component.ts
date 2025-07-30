import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-modify-customer',
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './modify-customer.component.html',
  styleUrl: './modify-customer.component.css'
})
export class ModifyCustomerComponent {
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

  constructor (
    public modifyCustomerDialogRef:MatDialogRef<ModifyCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.name = data.name;
    this.surname = data.surname;
    this.email = data.email;
    this.phoneNumber = data.phoneNumber;
    this.organizationName = data.organizationName;
    this.city = data.city;
    this.region = data.region;
    this.state = data.state;
    this.coreBusiness = data.coreBusiness;
    this.notes = data.notes;
  }

  close() {
    this.modifyCustomerDialogRef.close(false);
  }

  save() {
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
    this.modifyCustomerDialogRef.close(newCustomer);
  }

}
