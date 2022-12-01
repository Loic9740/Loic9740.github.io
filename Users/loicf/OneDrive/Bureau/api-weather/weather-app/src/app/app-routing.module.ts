import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {enableProdMode} from '@angular/core';

enableProdMode();
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const environment = {
  production: true
};