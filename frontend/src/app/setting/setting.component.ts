import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SettingService } from '../service/setting.service';

@Component({
  selector: 'app-setting',
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

  constructor (
    private settingService:SettingService,
    
  ) {}

  resetPassword() {
    this.settingService.resetPassword().subscribe( response => {
      
    });
  }

}
