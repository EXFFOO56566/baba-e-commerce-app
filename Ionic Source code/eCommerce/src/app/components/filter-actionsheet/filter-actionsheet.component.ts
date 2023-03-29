import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-filter-actionsheet',
  templateUrl: './filter-actionsheet.component.html',
  styleUrls: ['./filter-actionsheet.component.scss'],
})
export class FilterActionsheetComponent implements OnInit {

  // For Button Selection
  selectedColor: boolean = true;
  selectedWeight: boolean = false;
  selectedSize: boolean = false;

  // For Radio Button Selection
  colorRed: boolean = true;
  colorGreen: boolean = false;
  colorBlue: boolean = false;

  // For Conditional
  color: boolean = true;
  size: boolean = false;
  weight: boolean = false;

  productCategory = ["Men", "Women", "T-Shirts", "Jackets", "Bags", "Posters"]
  pCat: any = '';
  productTags = ["#Green", "#red", "#Shirt", "# 2kg"];
  pTag:any = ''

  // For Sizes
  sizes: any = ["L", "M", "S", "XL"];
  weights: any = ["2kg", "3kg", "5kg"];

  sizeL: any = 'L';
  wightL: any = '2kg'

  counter: any = 1;
  // sizeM: boolean = false;
  // sizeS: boolean = false;
  // sizeXl: boolean = false;

  constructor(private modalController: ModalController, public config: ConfigService) { }

  ngOnInit() { }

  // For Change Button
  changeBtn(value) {
    if (value == 'color') {
      this.selectedColor = true;
      this.selectedWeight = false;
      this.selectedSize = false;

      this.color = true;
      this.size = false;
      this.weight = false;
    }
    else if (value == 'size') {
      this.selectedColor = false;
      this.selectedWeight = false;
      this.selectedSize = true;

      this.color = false;
      this.size = true;
      this.weight = false;
    }
    else {
      this.selectedColor = false;
      this.selectedSize = false;
      this.selectedWeight = true;

      this.color = false;
      this.size = false;
      this.weight = true;
    }
  }

  // For Change Radio
  selectRadio(event) {
    if (event == 'red') {
      this.colorRed = true;
      this.colorGreen = false;
      this.colorBlue = false;
    }
    else if (event == 'green') {
      this.colorRed = false;
      this.colorGreen = true;
      this.colorBlue = false;
    }
    else {
      this.colorRed = false;
      this.colorGreen = false;
      this.colorBlue = true;
    }
  }

  selectSizes(size) {
    this.sizeL = size;
  }


  selectProductCategory(size) {
    this.pCat = size;
  }

  selectTages(size) {
    this.pTag = size;
  }

  selectWeight(weigth) {
    this.wightL = weigth;
  }

  add() {
    this.counter++;
  }

  remove() {
    if (this.counter > 1) {
      this.counter--;
    }
  }

  // For Modal Dismiss
  dismiss() {
    this.modalController.dismiss({
    });
  }
}
