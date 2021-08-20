import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { InsurancemasterComponent } from './insurancemaster/insurancemaster.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customer-info',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'customer-info',
    component: CustomerInfoComponent
  },
  {
    path:'insurance-master',
    component:InsurancemasterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
