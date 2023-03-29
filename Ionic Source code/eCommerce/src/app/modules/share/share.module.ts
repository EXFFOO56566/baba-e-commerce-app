import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { TimerComponent } from 'src/app/components/timer/timer.component';
import { InfiniteGridComponent } from 'src/app/components/infinite-grid/infinite-grid.component';
import { CartActionsheetComponent } from 'src/app/components/cart-actionsheet/cart-actionsheet.component';
import { GiveReviewComponent } from 'src/app/components/give-review/give-review.component';
import { FilterActionsheetComponent } from 'src/app/components/filter-actionsheet/filter-actionsheet.component';
import { CategoryStylesComponent } from 'src/app/components/category-styles/category-styles.component';
import { IonicModule } from '@ionic/angular';
import { SortingActionsheetComponent } from 'src/app/components/sorting-actionsheet/sorting-actionsheet.component';
import { FormsModule } from '@angular/forms';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';

@NgModule({
  declarations: [BannerComponent, CategoriesComponent, CardComponent, TimerComponent, InfiniteGridComponent, CartActionsheetComponent, GiveReviewComponent, FilterActionsheetComponent, CategoryStylesComponent, SortingActionsheetComponent, ExpandableComponent],
  exports: [
    BannerComponent,
    CategoriesComponent,
    CardComponent,
    TimerComponent,
    InfiniteGridComponent,
    CartActionsheetComponent,
    GiveReviewComponent,
    FilterActionsheetComponent,
    CategoryStylesComponent,
    SortingActionsheetComponent,
    ExpandableComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class ShareModule { }
