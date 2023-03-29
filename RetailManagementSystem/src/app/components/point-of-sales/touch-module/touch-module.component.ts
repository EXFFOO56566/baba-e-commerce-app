import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';
import { FilterActionsheetComponent } from '../filter-actionsheet/filter-actionsheet.component';
import { SortingActionsheetComponent } from '../sorting-actionsheet/sorting-actionsheet.component';

@Component({
  selector: 'app-touch-module',
  templateUrl: './touch-module.component.html',
  styleUrls: ['./touch-module.component.scss'],
})
export class TouchModuleComponent implements OnInit {
  // This is Parent Form Input 
  @Input() form;

  // For Dummy Data (Just Call API And Initialized Your Data Here)
  categories = [{ name: this.config.language.bed, icon: 'bed' }, { name: this.config.language.headphones, icon: 'headset' },
  { name: this.config.language.Books, icon: 'book' }, { name: this.config.language.Gift, icon: 'gift' }, { name: this.config.language.Bikes, icon: 'bicycle' },
  { name: this.config.language.Cars, icon: 'car-sport' }, { name: this.config.language.Calculator, icon: 'calculator' }, { name: this.config.language.Coffee, icon: 'cafe' }, { name: this.config.language.bed, icon: 'bed' }, { name: this.config.language.headphones, icon: 'headset' },
  { name: this.config.language.Books, icon: 'book' }, { name: this.config.language.Gift, icon: 'gift' }, { name: this.config.language.Bikes, icon: 'bicycle' },
  { name: this.config.language.Cars, icon: 'car-sport' }, { name: this.config.language.Calculator, icon: 'calculator' }, { name: this.config.language.Coffee, icon: 'cafe' }];

  // For Slider Config Options
  sliderConfig = {
    slidesPerView: "auto"
  }

  // For Dummy Data (Just Call API And Initialized Your Data Here)
  dailyFeatured = [{ name: this.config.language.Apple, image: './assets/grocery/CustomSize10.png' }, { name: this.config.language.Mango, image: './assets/grocery/CustomSize12.png' }, { name: this.config.language.Strawberry, image: './assets/grocery/CustomSize11.png' }, { name: this.config.language.Tomato, image: './assets/grocery/CustomSize13.png' }, { name: this.config.language.Cauliflower, image: './assets/grocery/CustomSize14.png' }, { name: this.config.language.Biscute, image: './assets/grocery/CustomSize15.png' },
  { name: this.config.language.Lays, image: './assets/grocery/CustomSize16.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize17.png' }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize18.png' }, { name: this.config.language.Mango, image: './assets/grocery/CustomSize12.png' }];

  // For GRID/LIST
  isGrid: boolean = true;

  changesToCalled = { role: true };

  constructor(public config: ConfigService, public modalCtrl: ModalController) { }

  ngOnInit() { }

  // For Card Style Change
  selectCardStyle(ev) {
    if (ev.detail.value == "1") {
      this.config.card = 1;
      localStorage.card = 1;
    }
    else if (ev.detail.value == "2") {
      this.config.card = 2;
      localStorage.card = 2;
    }
    else if (ev.detail.value == "3") {
      this.config.card = 3;
      localStorage.card = 3;
    }
    else if (ev.detail.value == "4") {
      this.config.card = 4;
      localStorage.card = 4;
    }
    else if (ev.detail.value == "5") {
      this.config.card = 5;
      localStorage.card = 5;
    }
    else if (ev.detail.value == "6") {
      this.config.card = 6;
      localStorage.card = 6;
    }
    else if (ev.detail.value == "7") {
      this.config.card = 7;
      localStorage.card = 7;
    }
    else if (ev.detail.value == "8") {
      this.config.card = 8;
      localStorage.card = 8;
    }
    else if (ev.detail.value == "9") {
      this.config.card = 9;
      localStorage.card = 9;
    }
    else {
      this.config.card = 10;
      localStorage.card = 10;
    }
  }

  // For Grid Change
  gridChange() {
    if (!this.isGrid) {
      this.isGrid = true;
      this.changesToCalled = { role: true };
    }
  }

  // For List Change
  listChange() {
    if (this.isGrid) {
      this.isGrid = false;
      this.changesToCalled = { role: false };
    }
  }

  // For Filtering()
  async filter() {
    const modal = await this.modalCtrl.create({
      component: FilterActionsheetComponent,
      cssClass: 'cartActionsheet'
    });
    return await modal.present();
  }

  // For Sorting
  async sort() {
    const modal = await this.modalCtrl.create({
      component: SortingActionsheetComponent,
      cssClass: 'giveReviewActionsheet'
    });
    return await modal.present();
  }
}
