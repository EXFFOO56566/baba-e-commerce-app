import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

}
