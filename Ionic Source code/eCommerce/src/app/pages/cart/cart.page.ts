import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartDetails: any = [{ name: this.config.language.JBL, image: './assets/headPhone/CustomSize3.png', counter: 0 },
  { name: this.config.language.Sony, image: './assets/headPhone/CustomSize3.png', counter: 0 }];

  // For Product Slider Configurations
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 10
  }

  constructor(public shared: SharedDataService, public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() {
  }

  showShippingAddress() {
    this.navCtrl.navigateForward("/shipping-address");
  }

  add(dat) {
    dat.counter++;
  }

  remove(dat) {
    if (dat.counter > 1) {
      dat.counter--;
    }
  }

  showWishlist() {
    this.navCtrl.navigateForward("/wish-list");
  }

}
