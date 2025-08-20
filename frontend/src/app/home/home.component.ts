import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor (private router:Router) {}

  openSalesPage() {
    this.router.navigate(['sales']);
  }

  openProductsPage() {
    this.router.navigate(['products']);
  }

  openCustomersPage() {
    this.router.navigate(['customers']);
  }

  openSettingsPage() {
    this.router.navigate(['settings']);
  }
  
}
