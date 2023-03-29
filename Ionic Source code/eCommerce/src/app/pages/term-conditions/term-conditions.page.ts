import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-term-conditions',
  templateUrl: './term-conditions.page.html',
  styleUrls: ['./term-conditions.page.scss'],
})
export class TermConditionsPage implements OnInit {

  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

}
