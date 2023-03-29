import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-home10',
  templateUrl: './home10.page.html',
  styleUrls: ['./home10.page.scss'],
})
export class Home10Page implements OnInit {
  changesToCalled = { role: "" };
  selectedTab = this.config.language.DressShirt;
  segments: any = this.config.language.FLashSale;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  scrollTopButton = false;//for scroll down fab 
  style = 4;
  sliderConfigHeader = {
    slidesPerView: 3,
    spaceBetween: 0
  }

  sliderConfig = {
    slidesPerView: 2.35,
    spaceBetween: 0
  }
  constructor(public shared: SharedDataService, public navCtrl: NavController, public config: ConfigService) {
  }

  ngOnInit() {
  }

  changeTab(c) {
    if (c == '') this.selectedTab = c
    else this.selectedTab = c.name;
    this.changesToCalled = { role: "true" };
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
