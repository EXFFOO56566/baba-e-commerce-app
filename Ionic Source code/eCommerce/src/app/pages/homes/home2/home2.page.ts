import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  scrollTopButton = false;//for scroll down fab 

  changesToCalled = { role: "" };
  selectedTab = this.config.language.JBL;
  isGrid: boolean = true;

  sliderConfig = {
    slidesPerView: 3,
    spaceBetween: 10
  }

  constructor(public shared: SharedDataService, public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() {
  }

  // For Changing Tab
  changeTab(c) {
    if (c == '') this.selectedTab = c
    else this.selectedTab = c.name;
    this.changesToCalled = { role: "true" };
  }

  showCategory() {
    this.navCtrl.navigateForward("/category");
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

  showSearch() {
    this.navCtrl.navigateForward("/search");
  }
}
