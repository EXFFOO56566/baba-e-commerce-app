import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopSellingItemsComponent } from 'src/app/components/point-of-sales/top-selling-items/top-selling-items.component';
import { OnlineOrdersComponent } from 'src/app/components/point-of-sales/online-orders/online-orders.component';
import { CustomerInformationComponent } from 'src/app/components/point-of-sales/customer-information/customer-information.component';
import { GeneralModuleComponent } from 'src/app/components/point-of-sales/general-module/general-module.component';
import { TouchModuleComponent } from 'src/app/components/point-of-sales/touch-module/touch-module.component';
import { ItemBarcodeScanComponent } from 'src/app/components/point-of-sales/item-barcode-scan/item-barcode-scan.component';
import { SaleOperationsComponent } from 'src/app/components/point-of-sales/sale-operations/sale-operations.component';
import { BarcodeScanerDirective } from 'src/app/directives/barcode-scaner.directive';
import { DxListModule, DxTemplateModule } from 'devextreme-angular';
import { CardComponent } from 'src/app/components/point-of-sales/card/card.component';
import { FilterActionsheetComponent } from 'src/app/components/point-of-sales/filter-actionsheet/filter-actionsheet.component';
import { InfiniteGridComponent } from 'src/app/components/point-of-sales/infinite-grid/infinite-grid.component';
import { SortingActionsheetComponent } from 'src/app/components/point-of-sales/sorting-actionsheet/sorting-actionsheet.component';

@NgModule({
  declarations: [TopSellingItemsComponent, OnlineOrdersComponent, CustomerInformationComponent, GeneralModuleComponent, TouchModuleComponent, ItemBarcodeScanComponent,
    SaleOperationsComponent, BarcodeScanerDirective, CardComponent, FilterActionsheetComponent, InfiniteGridComponent, SortingActionsheetComponent, ItemBarcodeScanComponent],
  exports: [
    TopSellingItemsComponent,
    OnlineOrdersComponent,
    CustomerInformationComponent,
    GeneralModuleComponent,
    TouchModuleComponent,
    ItemBarcodeScanComponent,
    SaleOperationsComponent,
    BarcodeScanerDirective,
    FilterActionsheetComponent,
    CardComponent,
    InfiniteGridComponent,
    SortingActionsheetComponent,
    ItemBarcodeScanComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DxListModule,
    DxTemplateModule
  ]
})
export class ShareModule { }
