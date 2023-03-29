import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroScreensPage } from './intro-screens.page';

const routes: Routes = [
  {
    path: '',
    component: IntroScreensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroScreensPageRoutingModule {}
