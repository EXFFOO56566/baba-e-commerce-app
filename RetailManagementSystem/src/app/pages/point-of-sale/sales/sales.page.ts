import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/providers/config.service';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  form: FormGroup;                 // For Main Form Group 
  // mode: any = 'general';           // For Mode (General)
  slectedGeneral: any = false;     // For Default general
  segments: any = 'pos';

  constructor(public config: ConfigService, private router: Router, public sharedData: SharedDataService, private _formBuilder: FormBuilder) { }

  // For Reactive Form Initialized From
  ngOnInit() {
    // For Generic Reactive Form Initialication (Main Page)
    this.form = this._formBuilder.group({
      /* ------------------------ For Cashier User ID --------------------------------*/
      userId: 'Mr.Mark White (8230)',
      tillNumber: '1234',                                 // For Cashier Till
      /* ------------------------ For Mode ----------------------------------------------------------- */
      mode: 'touch',                                      // For Mode Touch/General
      /* ------------------------ For Item Scanner  -------------------------------------------------- */
      code: [''],                                         // For Input Code (Item Name/ Item Code / Barcode)
      qty: [],                                            // For Quantity 
      /* ------------------------ For Item Detail Array  --------------------------------------------- */
      itemDetail: this._formBuilder.array([]),
      /* ------------------------ For Item Final Details  -------------------------------------------- */
      numberOfItems: 0,                                   // For Total Number Of Items
      amount: 0,                                          // For Total Amount
      priceBeforeDiscount: 0,                             // For Total Price Before Discount
      discount: 0,                                        // For Total Discount
      priceAfterDiscount: 0,                              // For Price After Discount
      saleTax: 0,                                         // For Total Sale Tax
      invoiceTotal: 0,                                    // For Total Invoice 
      /* ------------------------ For Customer INformation  ------------------------------------------- */
      customerInfo: this._formBuilder.group({
        CustomerName: '',                                 // For Customer Name
        CustomerPhoneNo: '',                              // FOr Customer Phone No
        CustomerAddress: ''                               // For Customer Address
      }),
      /* ------------------------ For Customer Cash Paid And Balanace  -------------------------------- */
      cashPaid: [],                                       // For Cash Paid
      change: 0,                                          // For CHange Return
      /* ------------------------ For Sale Transaction Details  --------------------------------------- */
      transactionDate: '',                                // For Transaction Date
      transactionId: '',                                  // For Transaction ID
      /* ------------------------ For Handle Price Page  -------------------------------------------- */
      priceCheck: true                                    // For Price Page Not Open
    });
  }

  // For Segment Change Mode (General/Touch)
  saleModeChange() {
    if (this.form.value.mode == 'general') {
      this.slectedGeneral = true;
      this.form.controls.mode.patchValue('general');
    }
    else {
      this.slectedGeneral = false;
      this.form.controls.mode.patchValue('touch');
    }
  }

  // For Segment Change Mode (General/Touch)
  segmentChanged(evt) {
    if (evt.detail.value == 'dashboard') {
      this.router.navigateByUrl("/home1");
    }
  }
}
