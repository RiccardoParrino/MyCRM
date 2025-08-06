import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SettingService } from '../service/setting.service';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-setting',
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

  constructor (
    private settingService:SettingService,
    private authService:AuthService,
    private resetPasswordComponentDialog:MatDialog
  ) {}

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
            }
            else {
              console.log("Some errors occurred!");
            }
          } )
        }
      } )
    });
  }

}
