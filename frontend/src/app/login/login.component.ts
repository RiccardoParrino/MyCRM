import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ValueChangeEvent} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private authService:AuthService, private router:Router) {}

  onRegistration() {
    this.router.navigate(['registration'])
  }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe( value => {
      if (value){
        this.authService.isLogged = true;
        this.router.navigate(['customers']);
      }
      else { 
        alert('Credenziali errate');
      }
    } );
  }

}
