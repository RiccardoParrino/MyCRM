import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-create-customer-dialog',
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule],
  templateUrl: './create-customer-dialog.component.html',
  styleUrl: './create-customer-dialog.component.css'
})
export class CreateCustomerDialogComponent {

  constructor(
    public dialogRef:MatDialogRef<CreateCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name:string}
  ) {}

  save() {
    const updatedData = {name: this.data.name};
    this.dialogRef.close(updatedData);
  }

  close() {
    this.dialogRef.close();
  }
}
