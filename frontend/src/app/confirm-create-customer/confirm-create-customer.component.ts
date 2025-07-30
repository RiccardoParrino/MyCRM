import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-create-customer',
  imports: [MatDialogModule, MatInputModule, MatButtonModule],
  templateUrl: './confirm-create-customer.component.html',
  styleUrl: './confirm-create-customer.component.css'
})
export class ConfirmCreateCustomerComponent {

  constructor(
    public dialogRef:MatDialogRef<ConfirmCreateCustomerComponent>
  ) {}

  cancel() {
    console.log("Temporary cancelled operation!");
    this.dialogRef.close(false);
  }

  saveCustomer() {
    console.log("Saving customer operation!");
    this.dialogRef.close(true);
  }

}
