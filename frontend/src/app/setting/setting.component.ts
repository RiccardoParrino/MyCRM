import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SettingService } from '../service/setting.service';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';
import { MatFormField } from '@angular/material/input';
import { MatLabel } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-setting',
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatFormField, MatLabel, FormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent implements OnInit {

  name:string = '';
  newName:string = '';
  surname:string = '';
  newSurname:string = '';
  email:string = '';
  newEmail:string = '';
  phoneNumber:string = '';
  newPhoneNumber:string = '';
  organizationName:string = '';
  newOrganizationName:string = '';

  constructor (
    private settingService:SettingService,
    private authService:AuthService,
    private resetPasswordComponentDialog:MatDialog,
    private route:Router
  ) {}

  ngOnInit() {
    
  }

  resetPassword() {
    this.settingService.resetPassword().subscribe( response => {
      const resetPasswordComponentDialogRef = this.resetPasswordComponentDialog.open(
        ResetPasswordComponent,
        {width:'1000px',maxWidth:'1000px',height:'512px'}
      );

      resetPasswordComponentDialogRef.afterClosed().subscribe( data => {
        if (data) {
          this.settingService.changePassword(
            data.oldPassword,
            data.newPassword
          ).subscribe( response => {
            if (response) {
              console.log("Password changed successfully!");
              this.authService.logout();
              this.route.navigate(['/login']);
            }
            else {
              console.log("Some errors occurred!");
            }
          } )
        }
      } )
    });
  }

  save() {}

}
