import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-delete-customer',
  imports: [MatInputModule, MatDialogModule],
  templateUrl: './delete-customer.component.html',
  styleUrl: './delete-customer.component.css'
})
export class DeleteCustomerComponent {

  constructor(
    public dialogRef:MatDialogRef<DeleteCustomerComponent>
  ) {}

  cancel() {
    console.log("Cancelled operation!");
    this.dialogRef.close();
  }

  delete() {
    console.log("Customer removed!");
    this.dialogRef.close();
  }

}
