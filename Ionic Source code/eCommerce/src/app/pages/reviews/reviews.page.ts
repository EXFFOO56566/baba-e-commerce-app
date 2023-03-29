import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GiveReviewComponent } from 'src/app/components/give-review/give-review.component';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  constructor(public modalCtrl: ModalController, public config: ConfigService) { }

  ngOnInit() {
  }

  async giveReview() {
    const modal = await this.modalCtrl.create({
      component: GiveReviewComponent,
      cssClass: 'giveReviewActionsheet'
    });
    return await modal.present();
  }

}
