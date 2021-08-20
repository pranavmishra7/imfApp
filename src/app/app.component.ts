import { Component } from '@angular/core';
import { UniversalService } from './shared/services/universalservices/universal.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Add Customer', url: '/customer-info', icon: 'add' },
    { title: 'Add Insurance', url: '/insurance-master', icon: 'add' },
  ];
  public labels = [];
  constructor(_universalService:UniversalService) {
   
  }
}
