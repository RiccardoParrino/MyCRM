import { Component, Inject } from '@angular/core';
import { User } from '../model/user.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';


@Component({
  selector: 'app-all-user-registered',
  imports: [
    MatToolbarModule, 
    MatTableModule,
    RouterModule, 
    MatToolbarModule, 
    ScrollingModule,
    MatListModule, 
    MatButtonModule, 
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './all-user-registered.component.html',
  styleUrl: './all-user-registered.component.css'
})
export class AllUserRegisteredComponent {

  usersList : User[] = [];
  usersListDataSource = new MatTableDataSource<User>();
  displayedColumns: String[] = ["username", "name", "surname", "email", "phoneNumber", "organizationName"];

  constructor (
    public allUserRegisteredComponentDialogRef:MatDialogRef<AllUserRegisteredComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.usersList = data;
    this.usersListDataSource.data = data;
  }

  close() {
    this.allUserRegisteredComponentDialogRef.close();
  }
  
}
