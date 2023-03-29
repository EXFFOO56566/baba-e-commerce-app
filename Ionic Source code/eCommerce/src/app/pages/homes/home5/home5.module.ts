import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home5PageRoutingModule } from './home5-routing.module';

import { Home5Page } from './home5.page';
import { ShareModule } from 'src/app/modules/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home5PageRoutingModule,
    ShareModule
  ],
  declarations: [Home5Page]
})
export class Home5PageModule {}
