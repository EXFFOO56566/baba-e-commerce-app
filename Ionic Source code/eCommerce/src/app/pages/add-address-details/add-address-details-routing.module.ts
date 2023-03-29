import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAddressDetailsPage } from './add-address-details.page';

const routes: Routes = [
  {
    path: '',
    component: AddAddressDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAddressDetailsPageRoutingModule {}
