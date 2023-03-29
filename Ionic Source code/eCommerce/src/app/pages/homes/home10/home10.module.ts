import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home10PageRoutingModule } from './home10-routing.module';

import { Home10Page } from './home10.page';
import { ShareModule } from 'src/app/modules/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home10PageRoutingModule,
    ShareModule
  ],
  declarations: [Home10Page]
})
export class Home10PageModule {}
