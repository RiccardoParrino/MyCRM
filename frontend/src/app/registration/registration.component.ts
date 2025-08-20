import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-registration',
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  name = '';
  surname = '';
  email = '';
  repeatedEmail = '';
  organizationName = '';
  phoneNumber = '';
  username = '';
  password = '';
  repeatedPassword = '';

  constructor(private authService:AuthService, private router:Router) {
  }

  onSubmit() {
    if (this.email != this.repeatedEmail ) {
      alert("Inserisci la stessa mail!");
      return;
    }
    if (this.password != this.repeatedPassword) {
      alert("Inserisci la stessa password!");
      return;
    }
    const user = new User(
      this.username,
      this.password,
      this.name,
      this.surname,
      this.email,
      this.phoneNumber,
      this.organizationName
    );
    this.authService.registration(user).subscribe({
      next: value => {
        if (value == true)
          alert('New user registered!');
        else
          alert('Some errors occurred!');
      }, 
      error: value => {
        alert(value);
      }
    });
    this.router.navigate(["login"]);
  }
}
