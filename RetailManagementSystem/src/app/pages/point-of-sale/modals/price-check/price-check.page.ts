import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-price-check',
  templateUrl: './price-check.page.html',
  styleUrls: ['./price-check.page.scss'],
})
export class PriceCheckPage implements OnInit {
  // For Price Check Form Group Declaration
  _form: FormGroup;

  // Constructor
  constructor(private modalController: ModalController, public sharedData: SharedDataService, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // For Reactive Form Initialication (Price Check Page)
    this._form = this._formBuilder.group({
      /* ------------------------ For Item Scanner  -------------------------------------------------- */
      code: [''],                                          // For Input Code (Item Name/ Item Code / Barcode)
      qty: [],                                             // For Quantity 
      /* ------------------------ For Item Detail Array  --------------------------------------------- */
      itemDetail: this._formBuilder.array([]),             // For Item Detail Array
      /* ------------------------ For Handle Price Page  -------------------------------------------- */
      priceCheck: false
    });
  }

  // For Price Check Modal Dismissal
  dismiss() {
    this.sharedData.resetAll(this._form);
    this.modalController.dismiss();
  }
}
