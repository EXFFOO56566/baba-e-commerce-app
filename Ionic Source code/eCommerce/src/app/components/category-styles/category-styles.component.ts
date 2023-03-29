import { Component, Input, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-category-styles',
  templateUrl: './category-styles.component.html',
  styleUrls: ['./category-styles.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CategoryStylesComponent implements OnInit {
  @Input('style') style;                     // For Product Data
  @Input('changesToCalled') changesToCalled; // For Product shop
  hotCategory = [{ name: this.config.language.ParxShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.ParkAvenueShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.JohnPlayersShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.LouisPhillipeShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.ZodiacShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.VanHeusenShirts, image: './assets/shirts/CustomSize43.png' },
  { name: this.config.language.PeterEnglandShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.ArrowShirts, image: './assets/shirts/CustomSize43.png' }];
  public categoryData: any = [];
  segments: any = this.config.language.Men;

  constructor(public navCtrl: NavController, public config: ConfigService, public shared: SharedDataService) {
  }

  ngOnInit() {
    // console.log("Val", this.style);
    this.setStyle();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes &&
      changes["changesToCalled"] &&
      changes["changesToCalled"].currentValue
    ) {
      this.setStyle();
    }
  }

  setStyle() {
    if (this.style == 1) {
      this.categoryData = [{ name: this.config.language.Men, description: '120 ' + this.config.language.Products, img: './assets/categories/Menright.png' }, { name: this.config.language.Furniture, description: '678 ' + this.config.language.Products, img: './assets/categories/Menright.png' },
      { name: this.config.language.Grocery, description: '432 ' + this.config.language.Products, img: './assets/categories/Menright.png' }, { name: this.config.language.headphones, description: '650 ' + this.config.language.Products, img: './assets/categories/Menright.png' }, { name: this.config.language.Baby, description: '789 ' + this.config.language.Products, img: './assets/categories/Menright.png' }];
    }
    else if (this.style == 2) {
      this.categoryData = [{ name: this.config.language.Men, img: './assets/categories/Menright.png' }, { name: this.config.language.headphones, img: './assets/categories/Menright.png' },
      { name: this.config.language.Grocery, img: './assets/categories/Menright.png' }, { name: this.config.language.Furniture, img: './assets/categories/Menright.png' }, { name: this.config.language.Baby, img: './assets/categories/Menright.png' }];
    }
    else if (this.style == 3 || this.style == 4 || this.style == 5 || this.style == 6 || this.style == 7) {
      this.categoryData = [{ name: this.config.language.Men, description: '120 ' + this.config.language.Products, img: './assets/shirts/CustomSize43.png' }, { name: this.config.language.headphones, description: '20 ' + this.config.language.Products, img: './assets/headPhone/CustomSize3.png' },
      { name: this.config.language.Grocery, description: '300 ' + this.config.language.Products, img: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Furniture, description: '120 ' + this.config.language.Products, img: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Baby, description: '20 ' + this.config.language.Products, img: './assets/categories/Menright.png' }];
    }
  }

  showShop() {
    this.navCtrl.navigateForward("/shop");
  }

  segmentChange(ev) {
    this.segments = ev.detail.value
    if (this.segments == this.config.language.Men) {
      this.hotCategory = [{ name: this.config.language.ParxShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.ParkAvenueShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.JohnPlayersShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.LouisPhillipeShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.ZodiacShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.VanHeusenShirts, image: './assets/shirts/CustomSize43.png' },
      { name: this.config.language.PeterEnglandShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.ArrowShirts, image: './assets/shirts/CustomSize43.png' }];
    }
    else if (this.segments == this.config.language.headphones) {
      this.hotCategory = [{ name: this.config.language.AKGAcoustics, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Beyerdynamic, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Skullcandy, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.JBL, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Sony, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Sony, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Bose, image: './assets/headPhone/CustomSize3.png' },
      { name: this.config.language.BeatsbyDre, image: './assets/headPhone/CustomSize3.png' }];
    }
    else if (this.segments == this.config.language.Grocery) {
      this.hotCategory = [{ name: this.config.language.Mango, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Lays, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Biscute, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Cauliflower, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Tomato, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Strawberry, image: './assets/grocery/CustomSize10.png' },
      { name: this.config.language.Mango, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Apple, image: './assets/grocery/CustomSize10.png' }];
    }
    else if (this.segments == this.config.language.Furniture) {
      this.hotCategory = [{ name: this.config.language.Salonchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Gardenchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Sofa, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Studentchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Foldingchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Woodchair, image: './assets/furniture/CustomSize19.png' },
      { name: this.config.language.Wingchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Armchair, image: './assets/furniture/CustomSize19.png' }];
    }
    else {
      this.hotCategory = [{ name: this.config.language.ParxShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.ParkAvenueShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.JohnPlayersShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.LouisPhillipeShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.ZodiacShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.VanHeusenShirts, image: './assets/shirts/CustomSize43.png' },
      { name: this.config.language.PeterEnglandShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.ArrowShirts, image: './assets/shirts/CustomSize43.png' }];
    }
  }
}
