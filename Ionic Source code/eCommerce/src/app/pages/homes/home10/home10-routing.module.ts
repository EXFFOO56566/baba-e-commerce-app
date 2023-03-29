import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home10Page } from './home10.page';

const routes: Routes = [
  {
    path: '',
    component: Home10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home10PageRoutingModule {}
