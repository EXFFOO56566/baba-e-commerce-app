import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetrieveSalesPageRoutingModule } from './retrieve-sales-routing.module';

import { RetrieveSalesPage } from './retrieve-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetrieveSalesPageRoutingModule
  ],
  declarations: [RetrieveSalesPage]
})
export class RetrieveSalesPageModule {}
