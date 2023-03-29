import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-my-order-details',
  templateUrl: './my-order-details.page.html',
  styleUrls: ['./my-order-details.page.scss'],
})
export class MyOrderDetailsPage implements OnInit {

  id: any;
  orderDetails: any = [{ name: 'T Shirt', price: "20.00$", quantity: "3", total: "60.00$" }, { name: 'Mobile', price: "500.00$", quantity: "9", total: "960.00$" }]
  constructor(private activatedRoute: ActivatedRoute, public config: ConfigService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
