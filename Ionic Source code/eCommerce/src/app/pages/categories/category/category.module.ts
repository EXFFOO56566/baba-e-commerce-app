import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CategoryPage } from './category.page';
import { ShareModule } from 'src/app/modules/share/share.module';
import { CategoryPageRoutingModule } from './category-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    ShareModule
  ],
  declarations: [CategoryPage]
})
export class Category1PageModule {}
