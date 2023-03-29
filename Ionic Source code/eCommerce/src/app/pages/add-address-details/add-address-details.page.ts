import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-add-address-details',
  templateUrl: './add-address-details.page.html',
  styleUrls: ['./add-address-details.page.scss'],
})
export class AddAddressDetailsPage implements OnInit {

  constructor(public config: ConfigService) { }

  ngOnInit() {
  }
}
