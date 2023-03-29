import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.page.html',
  styleUrls: ['./shipping-method.page.scss'],
})
export class ShippingMethodPage implements OnInit {

  constructor(public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() {
  }

  showOrderDetails() {
    this.navCtrl.navigateForward("/order-detail");
  }

}
