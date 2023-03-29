import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import { CartActionsheetComponent } from 'src/app/components/cart-actionsheet/cart-actionsheet.component';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  scrollTopButton = false;//for scroll down fab 
  sliderConfig = {
    autoplay: {
      disableOnInteraction: false,
    }
  };
  images: any;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController, public config: ConfigService) {
    if (this.config.homePage == 1 || this.config.homePage == 6) {
      this.images = [{ img: './assets/furniture/CustomSize19.png' }, { img: './assets/furniture/CustomSize19.png' }]
    }
    else if (this.config.homePage == 2 || this.config.homePage == 7) {
      this.images = [{ img: './assets/headPhone/CustomSize3.png' }, { img: './assets/headPhone/CustomSize3.png' }]
    }
    else if (this.config.homePage == 3 || this.config.homePage == 8) {
      this.images = [{ img: './assets/shirts/CustomSize43.png' }, { img: './assets/shirts/CustomSize43.png' }]
    }
    else if (this.config.homePage == 4 || this.config.homePage == 9) {
      this.images = [{ img: './assets/shirtsTwo/CustomSize43.png' }, { img: './assets/shirtsTwo/CustomSize43.png' }]
    }
    else if (this.config.homePage == 5 || this.config.homePage == 10) {
      this.images = [{ img: './assets/grocery/CustomSize10.png' }, { img: './assets/grocery/CustomSize10.png' }]
    }

  }

  ngOnInit() {
  }

  productDescription() {
    this.navCtrl.navigateForward("/product-description");
  }

  async cartActionSheet() {
    const modal = await this.modalCtrl.create({
      component: CartActionsheetComponent,
      cssClass: 'cartActionsheet'
    });
    return await modal.present();
  }

  customerReview() {
    this.navCtrl.navigateForward("/reviews");
  }

  goBack() {
    let currentRoute = this.config.getCurrentHomePage();
    this.navCtrl.navigateForward(currentRoute);
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
}
