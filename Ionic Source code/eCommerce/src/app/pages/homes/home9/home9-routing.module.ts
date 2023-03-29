import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home9Page } from './home9.page';

const routes: Routes = [
  {
    path: '',
    component: Home9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home9PageRoutingModule {}
