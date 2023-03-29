import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoSettingsPage } from './demo-settings.page';

const routes: Routes = [
  {
    path: '',
    component: DemoSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoSettingsPageRoutingModule {}
