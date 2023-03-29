import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-sorting-actionsheet',
  templateUrl: './sorting-actionsheet.component.html',
  styleUrls: ['./sorting-actionsheet.component.scss'],
})
export class SortingActionsheetComponent implements OnInit {

  constructor(public config: ConfigService) { }

  ngOnInit() {}

}
