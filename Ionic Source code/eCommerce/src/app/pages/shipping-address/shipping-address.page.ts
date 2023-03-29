import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.page.html',
  styleUrls: ['./shipping-address.page.scss'],
})
export class ShippingAddressPage implements OnInit {

  constructor(public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() {
  }

  showShippingMethod() {
    this.navCtrl.navigateForward("/shipping-method");
  }

}
