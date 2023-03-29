import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  // For Skeleton 
  public banners: any = [1, 1, 1, 1];
  public categories: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public flashSaleFurniture: any = [1, 1, 1, 1, 1, 1, 1, 1];
  public dailyFeatured: any = [1, 1, 1, 1, 1, 1, 1, 1];
  public hotCategory: any = [1, 1, 1, 1, 1, 1, 1, 1];
  public shopData: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  // For Banners Data
  bannerGrocery = [{ image: './assets/grocery/Banner1.png' }, { image: './assets/grocery/Banner1.png' }, { image: './assets/grocery/Banner1.png' }, { image: './assets/grocery/Banner1.png' }];
  bannerHeadPhone = [{ image: './assets/headPhone/Banner1.png' }, { image: './assets/headPhone/Banner1.png' }, { image: './assets/headPhone/Banner1.png' }, { image: './assets/headPhone/Banner1.png' }];
  bannerShirts = [{ image: './assets/shirts/Banner4.png' }, { image: './assets/shirts/Banner4.png' }, { image: './assets/shirts/Banner4.png' }, { image: './assets/shirts/Banner4.png' }];
  bannerShirtsTwo = [{ image: './assets/shirtsTwo/Banner8.png' }, { image: './assets/shirtsTwo/Banner8.png' }, { image: './assets/shirtsTwo/Banner8.png' }, { image: './assets/shirtsTwo/Banner8.png' }];

  // For All Category
  public allCategory: any = [];

  // For WishList Products
  wishListProducts: any = [{ name: this.config.language.JBL, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Sony, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Sony, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Bose, image: './assets/headPhone/CustomSize3.png' },
  { name: this.config.language.BeatsbyDre, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Skullcandy, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Beyerdynamic, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.AKGAcoustics, image: './assets/headPhone/CustomSize3.png' }];

  constructor(public config: ConfigService) {
    this.setBanners();
    this.setCategory();
    this.setFlashSaleFurniture();
    this.setDailyFeatured();
    this.setHotSale();
    this.setShopData();
    this.setWishListProducts();
    this.setAllCategory();
  }

  getAllMethods() {
    this.setBanners();
    this.setCategory();
    this.setFlashSaleFurniture();
    this.setDailyFeatured();
    this.setHotSale();
    this.setShopData();
    this.setWishListProducts();
    this.setAllCategory();
  }

  setWishListProducts() {
    if (this.config.homePage == 3) {
      this.wishListProducts = [{ name: this.config.language.DressShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.CubanCollarShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.Overshirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.FlannelShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.OfficeShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.Chambray, image: './assets/shirts/CustomSize43.png' },
      { name: this.config.language.ClassicShortSleeveShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.DenimShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.LinenShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.Chambray, image: './assets/shirts/CustomSize43.png' }];
    }
    else if (this.config.homePage == 5) {
      this.wishListProducts = [{ name: this.config.language.Apple, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Mango, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Strawberry, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Tomato, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Cauliflower, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Biscute, image: './assets/grocery/CustomSize10.png' },
      { name: this.config.language.Lays, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Mango, image: './assets/grocery/CustomSize10.png' }];
    }
    else if (this.config.homePage == 9) {
      this.wishListProducts = [{ name: this.config.language.Overshirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.CubanCollarShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.DressShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.LinenShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.Chambray, image: './assets/shirtsTwo/CustomSize43.png' }];
    }
  }

  setBanners() {
    // Just Call Your API and Initialized Data
    // For Home-1 Banner Data
    if (this.config.homePage == 1 || this.config.homePage == 6 || this.config.homePage == 7 || this.config.homePage == 9) {
      this.banners = [{ image: './assets/furniture/Banner1.png' }, { image: './assets/furniture/Banner1.png' }, { image: './assets/furniture/Banner1.png' }, { image: './assets/furniture/Banner1.png' }];
    }
    // For Home-2 Shared Data Changes
    else if (this.config.homePage == 2) {
      this.banners = this.bannerHeadPhone;
    }

    // For Home-3 Shared Data Changes
    else if (this.config.homePage == 3) {
      this.banners = this.bannerShirts;
    }
    // For Home-4 Shared Data Changes
    else if (this.config.homePage == 4 || this.config.homePage == 10) {
      this.banners = this.bannerShirtsTwo;
    }
    // For Home-4 Shared Data Changes
    else if (this.config.homePage == 5) {
      this.banners = this.bannerGrocery;
    }
  }

  setCategory() {
    // Just Call Your API and Initialized Data
    this.categories = [{ name: this.config.language.bed, icon: 'bed' }, { name: this.config.language.headphones, icon: 'headset' },
    { name: this.config.language.Books, icon: 'book' }, { name: this.config.language.Gift, icon: 'gift' }, { name: this.config.language.Bikes, icon: 'bicycle' },
    { name: this.config.language.Cars, icon: 'car-sport' }, { name: this.config.language.Calculator, icon: 'calculator' }, { name: this.config.language.Coffee, icon: 'cafe' }];
  }

  setFlashSaleFurniture() {
    // Just Call Your API and Initialized Data
    if (this.config.homePage == 1) {
      this.flashSaleFurniture = [{ name: this.config.language.Armchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Wingchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Woodchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Foldingchair, image: './assets/furniture/CustomSize19.png' },
      { name: this.config.language.Studentchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Sofa, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Gardenchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Armchair, image: './assets/furniture/CustomSize19.png' }];
    }
    // For Home-2 Shared Data Changes
    else if (this.config.homePage == 2) {
      this.flashSaleFurniture = [{ name: this.config.language.Upto + '66' + this.config.language.Off, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Upto + '66' + this.config.language.Off, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Upto + '66' + this.config.language.Off, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Upto + '66' + this.config.language.Off, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Upto + '66' + this.config.language.Off, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Upto + '66' + this.config.language.Off, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Upto + '66' + this.config.language.Off, image: './assets/headPhone/CustomSize3.png' },
      { name: this.config.language.Upto + '66' + this.config.language.Off, image: './assets/headPhone/CustomSize3.png' }];
    }
    // For Home-6 Shared Data Changes
    else if (this.config.homePage == 6) {
      this.flashSaleFurniture = [{ name: this.config.language.Studentchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Deskchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Salonchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Gardenchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Studentchair, image: './assets/furniture/CustomSize19.png' }];
    }
    // For Home-7 Shared Data Changes
    else if (this.config.homePage == 7) {
      this.flashSaleFurniture = [{ name: this.config.language.Beyerdynamic, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Bose, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Skullcandy, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.JBL, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.AKGAcoustics, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Skullcandy, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Beyerdynamic, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.AKGAcoustics, image: './assets/headPhone/CustomSize3.png' }];
    }
    // For Home-9 Shared Data Changes
    else if (this.config.homePage == 9) {
      this.flashSaleFurniture = [{ name: this.config.language.Chambray, image: './assets/shirts/CustomSize43.png' },
      { name: this.config.language.ClassicShortSleeveShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.DenimShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.LinenShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.Chambray, image: './assets/shirts/CustomSize43.png' }];
    }
    // For Home-10 Shared Data Changes
    else if (this.config.homePage == 10) {
      this.flashSaleFurniture = [{ name: this.config.language.Mango, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Strawberry, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Lays, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Cauliflower, image: './assets/grocery/CustomSize10.png' }];
    }
  }

  setDailyFeatured() {
    // Just Call Your API and Initialized 
    if (this.config.homePage == 1) {
      this.dailyFeatured = [{ name: this.config.language.Gardenchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Sofa, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Wingchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Foldingchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Studentchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Salonchair, image: './assets/furniture/CustomSize19.png' },
      { name: this.config.language.Woodchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Armchair, image: './assets/furniture/CustomSize19.png' }];
    }
    else if (this.config.homePage == 2) {
      this.dailyFeatured = [{ name: this.config.language.JBL, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Sony, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Sony, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Bose, image: './assets/headPhone/CustomSize3.png' },
      { name: this.config.language.BeatsbyDre, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Skullcandy, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Beyerdynamic, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.AKGAcoustics, image: './assets/headPhone/CustomSize3.png' }];
    }
    else if (this.config.homePage == 3) {
      this.dailyFeatured = [{ name: this.config.language.DressShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.CubanCollarShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.Overshirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.FlannelShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.OfficeShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.Chambray, image: './assets/shirts/CustomSize43.png' },
      { name: this.config.language.ClassicShortSleeveShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.DenimShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.LinenShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.Chambray, image: './assets/shirts/CustomSize43.png' }];
    }
    else if (this.config.homePage == 4 || this.config.homePage == 9) {
      this.dailyFeatured = [{ name: this.config.language.Chambray, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.LinenShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.DenimShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.ClassicShortSleeveShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.Chambray, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.OfficeShirt, image: './assets/shirts/CustomSize43.png' },
      { name: this.config.language.FlannelShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.Overshirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.CubanCollarShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.DressShirt, image: './assets/shirts/CustomSize43.png' }];
    }
    else if (this.config.homePage == 5 || this.config.homePage == 10) {
      this.dailyFeatured = [{ name: this.config.language.Apple, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Mango, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Strawberry, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Tomato, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Cauliflower, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Biscute, image: './assets/grocery/CustomSize10.png' },
      { name: this.config.language.Lays, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Mango, image: './assets/grocery/CustomSize10.png' }];
    }
    else if (this.config.homePage == 6) {
      this.dailyFeatured = [{ name: this.config.language.Foldingchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Wingchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Woodchair, image: './assets/furniture/CustomSize19.png' },
      { name: this.config.language.Sofa, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Armchair, image: './assets/furniture/CustomSize19.png' }];
    }
    else if (this.config.homePage == 7) {
      this.dailyFeatured = [{ name: this.config.language.Skullcandy, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Beyerdynamic, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.AKGAcoustics, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.JBL, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.BeatsbyDre, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Sony, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Sony, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Bose, image: './assets/headPhone/CustomSize3.png' }];
    }
  }

  setHotSale() {
    // Just Call Your API and Initialized Data
    if (this.config.homePage == 1 || this.config.homePage == 6) {
      this.hotCategory = [{ name: this.config.language.Salonchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Gardenchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Sofa, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Studentchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Foldingchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Woodchair, image: './assets/furniture/CustomSize19.png' },
      { name: this.config.language.Wingchair, image: './assets/furniture/CustomSize19.png' }, { name: this.config.language.Armchair, image: './assets/furniture/CustomSize19.png' }];
    }
    else if (this.config.homePage == 2 || this.config.homePage == 7) {
      this.hotCategory = [{ name: this.config.language.AKGAcoustics, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Beyerdynamic, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Skullcandy, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.JBL, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Sony, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Sony, image: './assets/headPhone/CustomSize3.png' }, { name: this.config.language.Bose, image: './assets/headPhone/CustomSize3.png' },
      { name: this.config.language.BeatsbyDre, image: './assets/headPhone/CustomSize3.png' }];
    }
    else if (this.config.homePage == 3 || this.config.homePage == 9) {
      this.hotCategory = [{ name: this.config.language.ParxShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.ParkAvenueShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.JohnPlayersShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.LouisPhillipeShirts, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.ZodiacShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.VanHeusenShirts, image: './assets/shirts/CustomSize43.png' },
      { name: this.config.language.PeterEnglandShirts, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.ArrowShirts, image: './assets/shirts/CustomSize43.png' }];
    }
    else if (this.config.homePage == 5) {
      this.hotCategory = [{ name: this.config.language.Mango, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Lays, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Biscute, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Cauliflower, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Tomato, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Strawberry, image: './assets/grocery/CustomSize10.png' },
      { name: this.config.language.Mango, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Apple, image: './assets/grocery/CustomSize10.png' }];
    }
  }

  // pending
  setShopData() {
    this.shopData = [{ name: this.config.language.DressShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.CubanCollarShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.Overshirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.FlannelShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.OfficeShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.Chambray, image: './assets/shirts/CustomSize43.png' },
    { name: this.config.language.ClassicShortSleeveShirt, image: './assets/shirts/CustomSize43.png' }, { name: this.config.language.DenimShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.LinenShirt, image: './assets/shirtsTwo/CustomSize43.png' }, { name: this.config.language.Chambray, image: './assets/shirts/CustomSize43.png' }];
  }

  setAllCategory() {
    if (this.config.homePage == 1 || this.config.homePage == 3 || this.config.homePage == 5 || this.config.homePage == 8 || this.config.homePage == 10) {
      this.allCategory = [{ name: this.config.language.DressShirt }, { name: this.config.language.CubanCollarShirt }, { name: this.config.language.PeterEnglandShirts }, { name: this.config.language.ZodiacShirts }, { name: this.config.language.ParxShirts }, { name: this.config.language.ParxShirts }, { name: this.config.language.VanHeusenShirts }]
    }
    else if (this.config.homePage == 2) {
      this.allCategory = [{ name: this.config.language.JBL }, { name: this.config.language.Sony }, { name: this.config.language.BangOlufsen }, { name: this.config.language.Bose }, { name: this.config.language.BeatsbyDre }, { name: this.config.language.Skullcandy }, { name: this.config.language.Beyerdynamic }, { name: this.config.language.AKGAcoustics }]
    }
    else if (this.config.homePage == 4) {
      this.allCategory = [{ name: this.config.language.ArrowShirts }, { name: this.config.language.PeterEnglandShirts }, { name: this.config.language.VanHeusenShirts }, { name: this.config.language.ZodiacShirts }, { name: this.config.language.LouisPhillipeShirts }, { name: this.config.language.JohnPlayersShirts }, { name: this.config.language.ParkAvenueShirts }, { name: this.config.language.ParxShirts }]
    }
  }
}
