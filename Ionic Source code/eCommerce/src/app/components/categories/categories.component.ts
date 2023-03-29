import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input('type') type;

  sliderConfig2 = {
    slidesPerView: 5.5,
    spaceBetween: 0
  }
  constructor(public shared: SharedDataService, public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() { }

  showShop() {
    this.navCtrl.navigateForward("/shop");
  }
}
