import { Component } from '@angular/core';
import { AdministrationService } from '../service/administration.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-administration',
  imports: [],
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
        AdministrationComponent,
        {width:'1000px', data:usersList}
      );
    });
  }

}
