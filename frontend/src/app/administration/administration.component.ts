import { Component } from '@angular/core';
import { AdministrationService } from '../service/administration.service';
import { MatDialog } from '@angular/material/dialog';
import { AllUserRegisteredComponent } from '../all-user-registered/all-user-registered.component';
import { MatButton } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";

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
      const allUserRegisterdRef = this.allUserRegistered.open(
        AllUserRegisteredComponent,
        {width:'1000px', height:'600px', maxWidth:'1000px', data:usersList}
      );
    });
  }

}
