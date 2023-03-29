import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoSettingsPageRoutingModule } from './demo-settings-routing.module';

import { DemoSettingsPage } from './demo-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemoSettingsPageRoutingModule
  ],
  declarations: [DemoSettingsPage]
})
export class DemoSettingsPageModule {}
