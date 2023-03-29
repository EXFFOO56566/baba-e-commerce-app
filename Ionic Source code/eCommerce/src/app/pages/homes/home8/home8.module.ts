import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home8PageRoutingModule } from './home8-routing.module';

import { Home8Page } from './home8.page';
import { ShareModule } from 'src/app/modules/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home8PageRoutingModule,
    ShareModule
  ],
  declarations: [Home8Page]
})
export class Home8PageModule {}
