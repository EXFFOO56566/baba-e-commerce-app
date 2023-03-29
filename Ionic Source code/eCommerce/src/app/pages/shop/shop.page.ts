import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterActionsheetComponent } from 'src/app/components/filter-actionsheet/filter-actionsheet.component';
import { SortingActionsheetComponent } from 'src/app/components/sorting-actionsheet/sorting-actionsheet.component';
import { ConfigService } from 'src/app/providers/config.service';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  selectedTab = this.config.language.DressShirt;
  isGrid: boolean = true;


  changesToCalled = { role: "" };

  sliderConfig = {
    slidesPerView: 3,
    spaceBetween: 0
  }

  constructor(public shared: SharedDataService, public modalCtrl: ModalController, public config: ConfigService) { }

  ngOnInit() {
  }

  // For Changing Tab
  changeTab(c) {
    if (c == '') this.selectedTab = c
    else this.selectedTab = c.name;
    this.changesToCalled = { role: "true" };

  }

  // For Grid CHange
  gridChange() {
    if (this.isGrid) {
      this.isGrid = false;
    }
    else {
      this.isGrid = true;
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
