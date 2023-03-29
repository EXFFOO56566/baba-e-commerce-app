import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-intro-screens',
  templateUrl: './intro-screens.page.html',
  styleUrls: ['./intro-screens.page.scss'],
})
export class IntroScreensPage implements OnInit {

  checkMark: boolean = false;

  @ViewChild('subscriptionSlider') subscriptionSlider;
  public slides = [
    { image: "assets/intro/IntroShop.png", title: this.config.language.OnlineShopping, description: this.config.language.OnlineShoppingText },
    { image: "assets/intro/IntroSearch.png", title: this.config.language.ProductSearch, description: this.config.language.ProductSearchText },
    { image: "assets/intro/IntroNoti.png", title: this.config.language.LiveFilters, description: this.config.language.LiveFilterText },
  ];

  sliderConfig = {
    autoplay: {
      disableOnInteraction: false,
    }
  };

  constructor(public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() {
  }

  ionSlideTouchEnd(event) {
    this.subscriptionSlider.getActiveIndex().then(index => {
      // For Last Index
      if (event.target.swiper.isEnd) {
        this.checkMark = true;
      }
      // For First Two Indexes
      if (index == 0 || index == 1) {
        this.checkMark = false;
      }
    });
  }

  ionSlideWillChange(event) {
    this.subscriptionSlider.getActiveIndex().then(index => {
      // For Last Index
      if (event.target.swiper.isEnd) {
        this.checkMark = true;
      }
      // For First Two Indexes
      if (index == 0 || index == 1) {
        this.checkMark = false;
      }
    });
  }
  openHomePage() {

    this.subscriptionSlider.getActiveIndex().then(index => {
      // For Last Index
      if (index == 2) {
        this.navCtrl.navigateRoot("tabs/home" + localStorage.home);
      }
      else {
        this.subscriptionSlider.slideNext();
      }
    })
  }

  skip() {
    this.navCtrl.navigateRoot("tabs/home" + localStorage.home);
  }
}
