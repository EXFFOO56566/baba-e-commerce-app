import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriceCheckPage } from './price-check.page';

const routes: Routes = [
  {
    path: '',
    component: PriceCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriceCheckPageRoutingModule {}
