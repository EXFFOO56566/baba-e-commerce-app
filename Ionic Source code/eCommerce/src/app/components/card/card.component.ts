import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input('data') p;                 // For Product Data
  @Input('type') type;              // For Product Type
  @Input('wishlist') wishlist;      // For Product wishlist

  constructor(public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() {
  }

  showProductDetail() {
    this.navCtrl.navigateForward("/product-detail");
  }
}
