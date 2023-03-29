import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  myOrders: any = [];

  constructor(public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() {
    this.myOrders = [{ id: "123", orderDate: '17/01/2021', status: 'On Hold', paymentMethod: 'Cash On Delivery', total: '$80.00' },
    { id: "136", orderDate: '17/05/2021', status: 'On Hold', paymentMethod: 'Paypal', total: '$190.00' }]
  }

  segmentChanged(event) {
    if (event.detail.value == "processing") {
      this.myOrders = [{ id: "123", orderDate: '17/01/2021', status: 'In Progress', paymentMethod: 'Cash On Delivery', total: '$80.00' },
      { id: "136", orderDate: '17/05/2021', status: 'In Progress', paymentMethod: 'Paypal', total: '$190.00' }, { id: "123", orderDate: '17/01/2021', status: 'In Progress', paymentMethod: 'Cash On Delivery', total: '$80.00' },
      { id: "136", orderDate: '17/05/2021', status: 'In Progress', paymentMethod: 'Paypal', total: '$190.00' }, { id: "123", orderDate: '17/01/2021', status: 'In Progress', paymentMethod: 'Cash On Delivery', total: '$80.00' },
      { id: "136", orderDate: '17/05/2021', status: 'In Progress', paymentMethod: 'Paypal', total: '$190.00' }, { id: "123", orderDate: '17/01/2021', status: 'In Progress', paymentMethod: 'Cash On Delivery', total: '$80.00' },
      { id: "136", orderDate: '17/05/2021', status: 'In Progress', paymentMethod: 'Paypal', total: '$190.00' }];
    }
    else if (event.detail.value == "hold") {
      this.myOrders = [{ id: "123", orderDate: '17/01/2021', status: 'On Hold', paymentMethod: 'Cash On Delivery', total: '$80.00' },
      { id: "136", orderDate: '17/05/2021', status: 'On Hold', paymentMethod: 'Paypal', total: '$190.00' }];
    }
    else {
      this.myOrders = [{ id: "123", orderDate: '17/01/2021', status: 'Completed', paymentMethod: 'Cash On Delivery', total: '$80.00' },
      { id: "136", orderDate: '17/05/2021', status: 'Completed', paymentMethod: 'Paypal', total: '$190.00' }]
    }
  }

  showMyOrderDetail(order) {
    this.navCtrl.navigateForward("/my-order-details/" + order.id);
  }

}
