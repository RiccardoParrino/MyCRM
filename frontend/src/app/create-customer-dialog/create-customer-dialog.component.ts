import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-customer-dialog',
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './create-customer-dialog.component.html',
  styleUrl: './create-customer-dialog.component.css'
})
export class CreateCustomerDialogComponent {

  name:string = '';

  constructor(
    public dialogRef:MatDialogRef<CreateCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  save() {
    this.dialogRef.close(this.name);
  }

  close() {
    this.dialogRef.close();
  }
}
