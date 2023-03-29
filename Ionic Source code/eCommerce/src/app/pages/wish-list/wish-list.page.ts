import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.page.html',
  styleUrls: ['./wish-list.page.scss'],
})
export class WishListPage implements OnInit {

  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

}
