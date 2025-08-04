import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Customer } from '../model/customer.model';
import { ConfirmModifyCustomerComponent } from '../confirm-modify-customer/confirm-modify-customer.component';
@Component({
  selector: 'app-modify-customer',
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './modify-customer.component.html',
  styleUrl: './modify-customer.component.css'
})
export class ModifyCustomerComponent {
  customerId:number = -1;
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
    public confirmModifyCustomerComponentDialog:MatDialog,
    public modifyCustomerDialogRef:MatDialogRef<ModifyCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.customerId = data.customerId;
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
    const confirmDialogRef = this.confirmModifyCustomerComponentDialog.open(
      ConfirmModifyCustomerComponent, {width:'512px', height:'158px'}
    );

    confirmDialogRef.afterClosed().subscribe( (result) => {
      if (result) {
        const newCustomer = new Customer(
          this.customerId,
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
    } );
  }

}
