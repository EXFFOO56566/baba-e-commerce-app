import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  val: any = 'home5'
  constructor(public config: ConfigService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.val = 'home' + this.config.homePage;
  }
}
