import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriceCheckPageRoutingModule } from './price-check-routing.module';

import { PriceCheckPage } from './price-check.page';
import { ShareModule } from 'src/app/modules/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriceCheckPageRoutingModule,
    ReactiveFormsModule,
    ShareModule
  ],
  declarations: [PriceCheckPage]
})
export class PriceCheckPageModule {}
