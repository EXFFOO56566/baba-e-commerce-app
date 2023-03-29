import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home9PageRoutingModule } from './home9-routing.module';

import { Home9Page } from './home9.page';
import { ShareModule } from 'src/app/modules/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home9PageRoutingModule,
    ShareModule
  ],
  declarations: [Home9Page]
})
export class Home9PageModule {}
