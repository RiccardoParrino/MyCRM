import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../dto/user.dto';

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
  organizationName = '';
  phoneNumber = '';
  username = '';
  password = '';

  constructor(private authService:AuthService, private router:Router) {
  }

  onSubmit() {
    const user = new User(
      this.username,
      this.password,
      this.name,
      this.surname,
      this.email,
      this.phoneNumber,
      this.organizationName
    );
    this.authService.registration(user);
  }
}
