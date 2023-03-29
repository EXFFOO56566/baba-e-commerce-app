import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-retrieve-sales',
  templateUrl: './retrieve-sales.page.html',
  styleUrls: ['./retrieve-sales.page.scss'],
})
export class RetrieveSalesPage implements OnInit {
  gridView: boolean = false;           // For Hold Order Exists Or Not (Default Not)
  tempData: any;                       // For Set Hold Order
  constructor(private modalController: ModalController, private share: SharedDataService) { }

  ngOnInit() {
    // For Get Hold Order
    this.tempData = this.share.holdTempForm

    // For Check Hold Order Exists Or Not
    if (this.tempData[0].itemDetail.length != 0) {
      this.gridView = true;
    }
    else {
      this.gridView = false;
    }
  }

  // For Dismiss Function
  close(data) {
    this.modalController.dismiss({
      'dismissed': data,
    });
  }

  // For Get Order
  getHoldOrder(data) {
    this.close(data);
  }
}
