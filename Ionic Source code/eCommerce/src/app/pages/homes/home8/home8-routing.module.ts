import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home8Page } from './home8.page';

const routes: Routes = [
  {
    path: '',
    component: Home8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home8PageRoutingModule {}
