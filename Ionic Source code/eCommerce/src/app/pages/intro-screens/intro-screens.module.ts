import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroScreensPageRoutingModule } from './intro-screens-routing.module';

import { IntroScreensPage } from './intro-screens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroScreensPageRoutingModule
  ],
  declarations: [IntroScreensPage]
})
export class IntroScreensPageModule {}
