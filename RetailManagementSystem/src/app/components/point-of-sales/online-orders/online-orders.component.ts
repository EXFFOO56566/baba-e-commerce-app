import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-orders',
  templateUrl: './online-orders.component.html',
  styleUrls: ['./online-orders.component.scss'],
})
export class OnlineOrdersComponent implements OnInit {

  // Just Call Your API And Initialized Your Data
  onlineOrders: any = [
    { orderId: 1, customerName: 'Mr.Cameron', date: '14/11/2021' },
    { orderId: 1, customerName: 'Walton Roy', date: '14/11/2021' },
    { orderId: 1, customerName: 'Steve Smith', date: '14/11/2021' },
    { orderId: 1, customerName: 'Emma John', date: '14/11/2021' },
    { orderId: 1, customerName: 'Isabella Janes', date: '14/11/2021' },
  ];

  constructor() { }

  ngOnInit() { }

}
