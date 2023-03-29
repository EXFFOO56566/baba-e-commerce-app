import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-cart-actionsheet',
  templateUrl: './cart-actionsheet.component.html',
  styleUrls: ['./cart-actionsheet.component.scss'],
})
export class CartActionsheetComponent implements OnInit {

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

  // For Sizes
  sizes: any = ["L", "M", "S", "XL"];
  weights: any = ["2kg", "3kg", "5kg"];

  sizeL: any = 'L';
  wightL: any = '2kg'

  counter: any = 1;
  // sizeM: boolean = false;
  // sizeS: boolean = false;
  // sizeXl: boolean = false;

  constructor(private modalController: ModalController, public config: ConfigService) {
  }

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
    if (size == 'L') {
      this.sizeL = 'L';
    }
    else if (size == 'S') {
      this.sizeL = 'S';
    }
    else if (size == 'M') {
      this.sizeL = 'M';
    }
    else {
      this.sizeL = 'XL';
    }
  }

  selectWeight(weigth) {
    if (weigth == '2kg') {
      this.wightL = '2kg';
    }
    else if (weigth == '3kg') {
      this.wightL = '3kg';
    }
    else {
      this.wightL = '5kg';
    }
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
