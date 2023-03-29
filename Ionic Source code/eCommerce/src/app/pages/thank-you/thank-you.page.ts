import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.page.html',
  styleUrls: ['./thank-you.page.scss'],
})
export class ThankYouPage implements OnInit {

  constructor(public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() {
  }

  openHomePage() {
    this.navCtrl.navigateForward("/tabs/home" + this.config.homePage);
  }
}
