import { Component } from '@angular/core';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/input';
import { MatLabel } from '@angular/material/input';
import { MatDialogActions } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reset-password',
  imports: [MatDialogContent, MatFormField, MatLabel, MatDialogActions, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  oldPassword:string = '';
  newPassword:string = '';
  confirmPassword:string = '';

  constructor(
    private resetPasswordComponentMatDialogRef:MatDialogRef<ResetPasswordComponent>
  ) {}

  close() {
    this.resetPasswordComponentMatDialogRef.close(false);
  }

  save() {
    if (this.newPassword !== this.confirmPassword){
      alert("Confirm password is different form new password!");
      return;
    }
    this.resetPasswordComponentMatDialogRef.close( {
      'oldPassword':this.oldPassword,
      'newPassword':this.newPassword,
      'confirmPassword':this.confirmPassword
    } );
  }

}
