import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetrieveSalesPage } from './retrieve-sales.page';

const routes: Routes = [
  {
    path: '',
    component: RetrieveSalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetrieveSalesPageRoutingModule {}
