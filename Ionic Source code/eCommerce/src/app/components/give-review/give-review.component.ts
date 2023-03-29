import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-give-review',
  templateUrl: './give-review.component.html',
  styleUrls: ['./give-review.component.scss'],
})
export class GiveReviewComponent implements OnInit {

  constructor(private modalController: ModalController, public config: ConfigService) { }

  ngOnInit() { }

  // For Modal Dismiss
  giveReview() {
    this.modalController.dismiss({
    });
  }

}
