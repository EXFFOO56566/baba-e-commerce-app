import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';
import { arLang } from 'src/app/providers/gLJson';
import { SharedDataService } from 'src/app/providers/shared-data.service';


@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  scrollTopButton = false;//for scroll down fab 
  // For Product Slider Configurations
  sliderConfig = {
    slidesPerView: 4.5,
    spaceBetween: 10
  }
  constructor(public shared: SharedDataService, public navCtrl: NavController, public config: ConfigService) {
  }

  ngOnInit() {
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

  showCategory() {
    this.navCtrl.navigateForward("/category");
  }

  showSearch() {
    this.navCtrl.navigateForward("/search");
  }

  appSetting() {
    this.navCtrl.navigateForward("/demo-settings");
  }
}
