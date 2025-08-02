import { Component } from '@angular/core';
import { AdministrationService } from '../service/administration.service';

@Component({
  selector: 'app-administration',
  imports: [],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent {

  constructor (private adminstrationService:AdministrationService) {}

  getAllRegisteredUser() {
    
  }

}
