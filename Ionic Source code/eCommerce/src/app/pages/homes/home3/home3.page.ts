import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.page.html',
  styleUrls: ['./home3.page.scss'],
})
export class Home3Page implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  scrollTopButton = false;//for scroll down fab 
  constructor(public shared: SharedDataService, public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() {
  }

  // For Product Slider Configurations
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 10
  }

  appSetting() {
    this.navCtrl.navigateForward("/demo-settings");
  }

  // For FAB Scroll
  onScroll(e) {
    if (e.detail.scrollTop >= 500) {
      this.scrollTopButton = true;
    }
    if (e.detail.scrollTop < 500) {
      this.scrollTopButton = false;
    }
  }

  // For Scroll To Top Content
  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
  }

  showWishlist() {
    this.navCtrl.navigateForward("/wish-list");
  }

  showCategory() {
    this.navCtrl.navigateForward("/category");
  }

  showShop() {
    this.navCtrl.navigateForward("/shop");
  }
}
