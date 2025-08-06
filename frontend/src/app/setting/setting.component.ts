import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SettingService } from '../service/setting.service';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-setting',
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatLabel, MatFormField, MatToolbarModule],
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
    private userService:UserService,
    private route:Router
  ) {}

  ngOnInit() {
    this.settingService.userDetails().subscribe( data => {
      console.log(data);
      if (data != null) {
        this.name = data.name,
        this.surname = data.surname,
        this.email = data.email,
        this.phoneNumber = data.phoneNumber,
        this.organizationName = data.organizationName
      }
    } )
  }

  refresh() {
    this.name = '';
    this.newName = '';
    this.email = '';
    this.newEmail = '';
    this.surname = '';
    this.newSurname = '';
    this.phoneNumber = '';
    this.newPhoneNumber = '';
    this.organizationName = '';
    this.newOrganizationName = '';
    this.settingService.userDetails().subscribe( data => {
      if (data != null) {
        this.name = data.name,
        this.surname = data.surname,
        this.email = data.email,
        this.phoneNumber = data.phoneNumber,
        this.organizationName = data.organizationName
      }
    } );
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

  save() {
    const updateUserDTO = {
      'username': this.authService.usernameLogged,
      'password': this.authService.passwordLogged,
      'name' : this.newName == '' ? this.name : this.newName,
      'surname' : this.newSurname == '' ? this.surname : this.newSurname,
      'email' : this.newEmail == '' ? this.email : this.newEmail,
      'phoneNumber' : this.newPhoneNumber == '' ? this.phoneNumber : this.newPhoneNumber,
      'organizationName' : this.newOrganizationName == '' ? this.organizationName : this.newOrganizationName
    }
    this.userService.updateUserDetails(updateUserDTO).subscribe( response => {
      if (response) {
        console.log("User data update successfully!");
        this.refresh();
      } else {
        console.log("Some errors occurred!");
      }
    } )
  }

}
