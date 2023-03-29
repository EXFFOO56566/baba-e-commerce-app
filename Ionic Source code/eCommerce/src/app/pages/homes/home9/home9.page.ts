import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-home9',
  templateUrl: './home9.page.html',
  styleUrls: ['./home9.page.scss'],
})
export class Home9Page implements OnInit {

  style = 5;
  changesToCalled = { role: "" };
  segments: any = this.config.language.FLashSale;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  scrollTopButton = false;//for scroll down fab 
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 10
  };
  constructor(public shared: SharedDataService, public navCtrl: NavController, public config: ConfigService) {
  }
  ngOnInit() {
  }

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

  appSetting() {
    this.navCtrl.navigateForward("/demo-settings");
  }

}
