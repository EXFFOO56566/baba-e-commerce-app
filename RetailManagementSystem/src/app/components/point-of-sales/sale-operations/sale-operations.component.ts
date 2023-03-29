import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CheckOutPage } from 'src/app/pages/point-of-sale/modals/check-out/check-out.page';
import { PriceCheckPage } from 'src/app/pages/point-of-sale/modals/price-check/price-check.page';
import { RetrieveSalesPage } from 'src/app/pages/point-of-sale/modals/retrieve-sales/retrieve-sales.page';
import { SharedDataService } from 'src/app/providers/shared-data.service';
import { ItemBarcodeScanComponent } from '../item-barcode-scan/item-barcode-scan.component';

@Component({
  selector: 'app-sale-operations',
  templateUrl: './sale-operations.component.html',
  styleUrls: ['./sale-operations.component.scss'],
})
export class SaleOperationsComponent implements OnInit {
  // This Is A Parent Form
  @Input() form;
  // @ViewChild(ItemBarcodeScanComponent) series: ItemBarcodeScanComponent;
  @ViewChild('code') code: any;           // For Focus On Code Input Field

  // Constructor Called
  constructor(private share: SharedDataService, private modalController: ModalController, public sharedData: SharedDataService
  ) { }

  ngOnInit() {
    this.formReset()
  }

  // For Hold Sale Model
  async holdSale() {
    if (this.form.value.itemDetail.length != 0) {
      // Just Call Your API For Hold Sale With Status 'Hold' And Then Retrieve For Further Operations
      console.log("trans", this.form.value.transactionId);
      let id: any = '';
      if (this.form.value.transactionId == '') {    // For New Transaction
        id = new Date().getTime() + Math.random();  // For Used Algorithom for generate Random Unique Transaction ID
      }
      else {                                        // For Again Existing Already Hold Sale Transaction Updated 
        id = this.form.value.transactionId;
        const index = this.findIndex();
        if (index !== -1) {
          this.share.holdTempForm.splice(index, 1);
        }
      }
      let date = new Date();                         // For Transaction Date
      this.form.patchValue({
        transactionDate: date,
        transactionId: Math.floor(id)
      });
      this.share.setHoldOrders(this.form.value);
      // For Reset Form Data
      this.formReset();
      this.share.success('Hold Sale Successfuly!');

      // For Set Focus On Input Field (Item Code )
      setTimeout(() => {
        this.share.getFocusInput();
      }, 500);
    }
    else {
      this.share.error('Your Cart Is Empty For Hold Sale');
      // For Set Focus On Input Field (Item Code )
      setTimeout(() => {
        this.share.getFocusInput();
      }, 500);
    }
  }

  // For Price Sale Model
  async priceCheck() {
    const modal = await this.modalController.create({
      component: PriceCheckPage,
      cssClass: 'priceCheckCss',
      backdropDismiss: false
    });
    // For Modal Dismissed
    modal.onDidDismiss().then((data: any) => {
      // For Set Focus On Input Field (Item Code )
      setTimeout(() => {
        this.share.getFocusInput();
      }, 500);
    });

    return await modal.present();
  }

  // For Retrieve Sale Model
  async retriveSale() {
    const modal = await this.modalController.create({
      component: RetrieveSalesPage,
      cssClass: 'checkoutcsss',
      backdropDismiss: false
    });
    // For Modal Dismissed
    modal.onDidDismiss().then((data: any) => {
      if (data.data.dismissed != undefined) {
        this.formReset();
        this.share.retrieveHoldData(this.form, data.data.dismissed);
      }
      // For Set Focus On Input Field (Item Code )
      setTimeout(() => {
        this.share.getFocusInput();
      }, 500);
    });
    return await modal.present();
  }

  // For CheckOut Sale Model 
  async checkOutSale() {
    if (this.form.value.itemDetail.length != 0) {
      const modal = await this.modalController.create({
        component: CheckOutPage,
        cssClass: 'checkoutcsss',
        componentProps: { value: this.form },
        backdropDismiss: false
      });

      modal.onDidDismiss().then((data: any) => {
        const index = this.findIndex();
        if (index !== -1) {
          this.share.holdTempForm.splice(index, 1);
        }
        if (data.data.dismissed == true) {
          this.share.success('Sale Submitted Successfuly!');
          this.formReset();
        }
        else {
          this.form.patchValue({
            change: 0
          })
        }
        // For Set Focus On Input Field (Item Code )
        setTimeout(() => {
          this.share.getFocusInput();
        }, 500);
      });

      return await modal.present();
    }
    else {
      this.share.error('Your Cart Is Empty');
      // For Set Focus On Input Field (Item Code )
      setTimeout(() => {
        this.share.getFocusInput();
      }, 500);
    }
  }

  // For Reset Form Controls On Sale Submitted
  formReset() {
    const itemDetail = <FormArray>this.form.controls.itemDetail;
    itemDetail.controls = [];
    itemDetail.reset();
    // For Items Details Before API Call
    this.form.controls.numberOfItems.patchValue(0)
    this.form.controls.priceBeforeDiscount.patchValue(0)
    this.form.controls.amount.patchValue(0)
    this.form.controls.discount.patchValue(0)
    this.form.controls.priceAfterDiscount.patchValue(0)
    this.form.controls.saleTax.patchValue(0)
    this.form.controls.invoiceTotal.patchValue(0)
    this.form.controls.change.patchValue(0)
    this.form.controls.code.patchValue([''])
    this.form.controls.qty.reset();
    this.form.controls.transactionId.patchValue(0)
    this.form.controls.customerInfo.reset();
    // For All Touch Module Items
    if (this.share.dailyFeatured) {
      this.share.dailyFeatured.map((obj) => {
        obj.qty = 0;
      })
    }
  }

  reverseScan() {
    let filterData = this.sharedData.checkItem(this.form);
    if (filterData) {
      this.sharedData.removeProduct(this.form);
    }
    else {
      console.log("Item Not Exists In Lists");
    }
  }

  cancallSale() {
    if (this.form.value.itemDetail.length != 0) {

      const index = this.findIndex();
      if (index !== -1) {
        this.share.holdTempForm.splice(index, 1);
      }
      this.formReset()
    }
    else {
      this.share.error('Your Cart Is Empty For Cancal Sale');
      // For Set Focus On Input Field (Item Code )
      setTimeout(() => {
        this.share.getFocusInput();
      }, 500);
    }
  }

  // For Find Index For Update Hold and Checkout Sale
  findIndex() {
    return this.share.holdTempForm.findIndex((element) => element.transactionId === this.form.value.transactionId);
  }
}
