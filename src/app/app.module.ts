import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {CommonModule} from '@angular/common'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { FormsModule, NgForm } from '@angular/forms';
import { DirectivesModule } from './directives/directive.module';
import {ToastLoadController} from './shared/load.toast.controller'
@NgModule({
  declarations: [AppComponent, CustomerInfoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, FormsModule, DirectivesModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ToastLoadController],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
