import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor(public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() {
  }

  showPrivacy() {
    this.navCtrl.navigateForward("/privacy-policy");

  }

  showTerm() {
    this.navCtrl.navigateForward("/term-conditions");

  }
}
