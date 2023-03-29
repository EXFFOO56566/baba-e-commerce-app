import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/providers/config.service';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  constructor(public shared: SharedDataService, public config: ConfigService) { }

  ngOnInit() { }

}
