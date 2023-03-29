import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.page.html',
  styleUrls: ['./item-category.page.scss'],
})
export class ItemCategoryPage implements OnInit {
  segments: any = this.config.language.Men;
  hotCategory = [{ name: this.config.language.ParxShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.ParkAvenueShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.JohnPlayersShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.LouisPhillipeShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.ZodiacShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.VanHeusenShirts, image: './assets/shirts/CustomSize34.png' },
  { name: this.config.language.PeterEnglandShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.ArrowShirts, image: './assets/shirts/CustomSize34.png' }];

  constructor(public config: ConfigService, private modalController: ModalController) { }

  ngOnInit() {
  }

  segmentChange(ev) {
    this.segments = ev.detail.value
    if (this.segments == this.config.language.Men) {
      this.hotCategory = [{ name: this.config.language.ParxShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.ParkAvenueShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.JohnPlayersShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.LouisPhillipeShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.ZodiacShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.VanHeusenShirts, image: './assets/shirts/CustomSize34.png' },
      { name: this.config.language.PeterEnglandShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.ArrowShirts, image: './assets/shirts/CustomSize34.png' }];
    }
    else if (this.segments == this.config.language.headphones) {
      this.hotCategory = [{ name: this.config.language.AKGAcoustics, image: './assets/headPhone/CustomSize8.png' }, { name: this.config.language.Beyerdynamic, image: './assets/headPhone/CustomSize8.png' }, { name: this.config.language.Skullcandy, image: './assets/headPhone/CustomSize8.png' }, { name: this.config.language.JBL, image: './assets/headPhone/CustomSize8.png' }, { name: this.config.language.Sony, image: './assets/headPhone/CustomSize8.png' }, { name: this.config.language.Sony, image: './assets/headPhone/CustomSize8.png' }, { name: this.config.language.Bose, image: './assets/headPhone/CustomSize8.png' },
      { name: this.config.language.BeatsbyDre, image: './assets/headPhone/CustomSize8.png' }];
    }
    else if (this.segments == this.config.language.Grocery) {
      this.hotCategory = [{ name: this.config.language.Mango, image: './assets/grocery/CustomSize12.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize12.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize12.png' }, { name: this.config.language.Lays, image: './assets/grocery/CustomSize12.png' }, { name: this.config.language.Biscute, image: './assets/grocery/CustomSize12.png' }, { name: this.config.language.Cauliflower, image: './assets/grocery/CustomSize12.png' }, { name: this.config.language.Tomato, image: './assets/grocery/CustomSize12.png' }, { name: this.config.language.Strawberry, image: './assets/grocery/CustomSize12.png' },
      { name: this.config.language.Mango, image: './assets/grocery/CustomSize12.png' }, { name: this.config.language.Apple, image: './assets/grocery/CustomSize12.png' }];
    }
    else if (this.segments == this.config.language.Furniture) {
      this.hotCategory = [{ name: this.config.language.Salonchair, image: './assets/furniture/CustomSize23.png' }, { name: this.config.language.Gardenchair, image: './assets/furniture/CustomSize23.png' }, { name: this.config.language.Sofa, image: './assets/furniture/CustomSize23.png' }, { name: this.config.language.Studentchair, image: './assets/furniture/CustomSize23.png' }, { name: this.config.language.Foldingchair, image: './assets/furniture/CustomSize23.png' }, { name: this.config.language.Woodchair, image: './assets/furniture/CustomSize23.png' },
      { name: this.config.language.Wingchair, image: './assets/furniture/CustomSize23.png' }, { name: this.config.language.Armchair, image: './assets/furniture/CustomSize23.png' }];
    }
    else {
      this.hotCategory = [{ name: this.config.language.ParxShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.ParkAvenueShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.JohnPlayersShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.LouisPhillipeShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.ZodiacShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.VanHeusenShirts, image: './assets/shirts/CustomSize34.png' },
      { name: this.config.language.PeterEnglandShirts, image: './assets/shirts/CustomSize34.png' }, { name: this.config.language.ArrowShirts, image: './assets/shirts/CustomSize34.png' }];
    }
  }

  // For Dismiss Function
  close() {
    this.modalController.dismiss({
    });
  }
}
