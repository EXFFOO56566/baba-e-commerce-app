import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterActionsheetComponent } from 'src/app/components/filter-actionsheet/filter-actionsheet.component';
import { SortingActionsheetComponent } from 'src/app/components/sorting-actionsheet/sorting-actionsheet.component';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public modalCtrl: ModalController, public config: ConfigService) { }

  ngOnInit() {
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
