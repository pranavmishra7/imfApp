import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from './directives/directive.module';
import { ToastLoadController } from './shared/load.toast.controller';
import { PolicyHolderComponent } from './customer-info/policy-holder/policy-holder.component';
import { LifeinsuredComponent } from './customer-info/lifeinsured/lifeinsured.component';
import { CommonService } from './shared/services/common.service';
import { HttpClientModule } from '@angular/common/http';
import { UniversalService } from './shared/services/universalservices/universal.service';
import { NomineeComponent } from './customer-info/nominee/nominee.component';
import { InsurancemasterComponent } from './insurancemaster/insurancemaster.component';
@NgModule({
  declarations: [AppComponent, CustomerInfoComponent, PolicyHolderComponent,
    LifeinsuredComponent, NomineeComponent, InsurancemasterComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    CommonModule, FormsModule, DirectivesModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ToastLoadController, CommonService, UniversalService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
