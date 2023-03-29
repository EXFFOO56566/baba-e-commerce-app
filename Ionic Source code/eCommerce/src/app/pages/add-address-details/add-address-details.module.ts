import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAddressDetailsPageRoutingModule } from './add-address-details-routing.module';

import { AddAddressDetailsPage } from './add-address-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAddressDetailsPageRoutingModule
  ],
  declarations: [AddAddressDetailsPage]
})
export class AddAddressDetailsPageModule {}
