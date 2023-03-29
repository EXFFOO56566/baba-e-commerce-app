import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  cartDetails: any = [{ name: this.config.language.JBL, image: './assets/headPhone/CustomSize3.png' },
  { name: this.config.language.Sony, image: './assets/headPhone/CustomSize3.png' }];

  constructor(public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() {
  }

  showThankYou() {
    this.navCtrl.navigateForward("/thank-you");
  }

}
