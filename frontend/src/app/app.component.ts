import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, MatListModule, RouterModule, NgIf, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyCrm';
  showAppComponentContainer: boolean = false;

  constructor(private router:Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showAppComponentContainer = !['/login','/registration'].includes(event.urlAfterRedirects);
      });
  }
}
