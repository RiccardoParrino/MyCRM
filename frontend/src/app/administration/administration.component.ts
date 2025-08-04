import { Component } from '@angular/core';
import { AdministrationService } from '../service/administration.service';
import { MatDialog } from '@angular/material/dialog';
import { AllUserRegisteredComponent } from '../all-user-registered/all-user-registered.component';
import { MatButton } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import { User } from '../model/user.model';

@Component({
  selector: 'app-administration',
  imports: [MatButton, MatToolbarModule],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent {

  constructor (private adminstrationService:AdministrationService,
    private allUserRegistered:MatDialog
  ) {}

  getAllRegisteredUser() {
    this.adminstrationService.getAllRegisteredUser().subscribe( usersList => {

      const users : User[] = [];

      usersList.forEach( user => {
        users.push(
          new User(
            user.username,
            user.password,
            user.name,
            user.surname,
            user.email,
            user.phoneNumber,
            user.organizationName
          )
        );
      });

      const allUserRegisterdRef = this.allUserRegistered.open(
        AllUserRegisteredComponent,
        {width:'1000px', height:'600px', maxWidth:'1000px', data:users}
      );
    });
  }

}
