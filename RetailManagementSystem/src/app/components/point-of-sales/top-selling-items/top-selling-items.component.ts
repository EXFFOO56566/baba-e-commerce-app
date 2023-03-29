import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemCategoryPage } from 'src/app/pages/point-of-sale/modals/item-category/item-category.page';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-top-selling-items',
  templateUrl: './top-selling-items.component.html',
  styleUrls: ['./top-selling-items.component.scss'],
})
export class TopSellingItemsComponent implements OnInit {
  @ViewChild('subscriptionSlider') subscriptionSlider;

  // For Slider Configurations
  topItemSlider = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      disableOnInteraction: false,
    },
  };

  // Just Call Your API And Initialized Top Selling Data
  topItems = [
    [
      { name: this.config.language.Apple, value: 50000, image: 'assets/grocery/CustomSize12.png', category: 'Grocery' },
      { name: this.config.language.Strawberry, value: 5005100, image: 'assets/grocery/CustomSize12.png', category: 'Grocery' },
      { name: this.config.language.Mango, value: 5005100, image: 'assets/grocery/CustomSize12.png', category: 'Grocery' },
      { name: this.config.language.Lays, value: 5005100, image: 'assets/grocery/CustomSize12.png', category: 'Grocery' },
      { name: this.config.language.Chocklate, value: 5005100, image: 'assets/grocery/CustomSize12.png', category: 'Grocery' },
    ],
    [
      { name: this.config.language.Strawberry, value: 5005100, image: 'assets/burger.jpg', category: 'Live Baking' },
      { name: this.config.language.Mango, value: 5005100, image: 'assets/pizza.jpg', category: 'Live Baking' },
      { name: this.config.language.Mango, value: 5, image: 'assets/pizza3.png', category: 'Live Baking' },
      { name: 'Big delicious classic burger', value: 5005100, image: 'assets/burger2.jpg', category: 'Live Baking' },
      { name: this.config.language.Chocklate, value: 5005100, image: 'assets/marinda.jpg', category: 'Live Baking' },
    ],
    [
      { name: 'Coca-Cola 250 ML', value: 5005100, image: 'assets/cola.jpg', category: 'Bevarages' },
      { name: 'Marinda Soft Drink 250 ML', value: 5005100, image: 'assets/marinda.jpg', category: 'Bevarages' },
      { name: 'Fresh Orange Juice', value: 50000, image: 'assets/juice.jpg', category: 'Bevarages' },
      { name: 'Nestle Fruita Vital Chaunsa Nectar 1L X', value: 5005100, image: 'assets/mangojuice.jpg', category: 'Bevarages' },
      { name: 'Nestle Fruita Vital Red Grapes Nectar 1L', value: 5005100, image: 'assets/juice2.jpg', category: 'Bevarages' },
    ],
    [
      { name: this.config.language.JBL, value: 50000, image: 'assets/headPhone/CustomSize8.png', category: 'Fashion' },
      { name: this.config.language.AKGAcoustics, value: 50000, image: 'assets/headPhone/CustomSize8.png', category: 'Fashion' },
      { name: this.config.language.BangOlufsen, value: 5005100, image: 'assets/watch.jpg', category: 'Fashion' },
      { name: this.config.language.BeatsbyDre, value: 5005100, image: 'assets/watch2.jpg', category: 'Fashion' },
      { name: this.config.language.BeatsbyDre, value: 5005100, image: 'assets/watch3.jpg', category: 'Fashion' },
    ],
  ];

  // For top Rank And Count
  topRank: any = "";
  topRankCount: any = "";

  constructor(public config: ConfigService, private modalController: ModalController) { }

  ngOnInit() {
    if (this.topItems.length != 0) {
      this.topRank = this.topItems[0][0].category;
      this.topRankCount = 1;
    }
  }

  // Slide Change Method For Update Top Rank Name And Count Value
  ionSlideDidChange(event) {
    this.subscriptionSlider.getActiveIndex().then(index => {
      // For Index Setting Of Items
      let ind = index + 1;
      this.topRankCount = ind;
      this.topRank = this.topItems[index][0].category;
    });
  }

  async openCategory() {

    console.log("Call...");
    const modal = await this.modalController.create({
      component: ItemCategoryPage,
      cssClass: 'checkoutcsss',
      backdropDismiss: false
    });

    return await modal.present();
  }
}
