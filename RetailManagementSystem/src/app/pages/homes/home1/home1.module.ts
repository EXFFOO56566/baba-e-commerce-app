import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home1PageRoutingModule } from './home1-routing.module';

import { Home1Page } from './home1.page';
import { ShareModule } from 'src/app/modules/share/share.module';
import { DxChartModule, DxPieChartModule, DxCircularGaugeModule, DxBarGaugeModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home1PageRoutingModule,
    ShareModule,
    DxChartModule,
    DxPieChartModule,
    DxCircularGaugeModule,
    DxBarGaugeModule
  ],
  declarations: [Home1Page]
})
export class Home1PageModule { }
