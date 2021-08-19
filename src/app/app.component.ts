import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Add Customer', url: '/customer-info', icon: 'add' },
  ];
  public labels = [];
  constructor() {}
}
