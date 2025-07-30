import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-modify-customer',
  imports: [MatDialogModule, MatInputModule, MatButtonModule],
  templateUrl: './confirm-modify-customer.component.html',
  styleUrl: './confirm-modify-customer.component.css'
})
export class ConfirmModifyCustomerComponent {

  constructor (
    public confirmModifyCustomerComponentDialogRef:MatDialogRef<ConfirmModifyCustomerComponent>
  ) {}

  cancel() {
    console.log("Cancelled operation!");
    this.confirmModifyCustomerComponentDialogRef.close(false);
  }

  saveCustomer() {
    console.log("Saving update customer operation!");
    this.confirmModifyCustomerComponentDialogRef.close(true);
  }
  
}
