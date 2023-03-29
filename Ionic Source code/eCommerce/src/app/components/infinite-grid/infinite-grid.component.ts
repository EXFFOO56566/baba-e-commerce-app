import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ConfigService } from 'src/app/providers/config.service';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-infinite-grid',
  templateUrl: './infinite-grid.component.html',
  styleUrls: ['./infinite-grid.component.scss'],
})
export class InfiniteGridComponent implements OnInit {

  @Input('type') type;                       // For Product Type
  @Input('shop') shop;                       // For Product shop
  @Input('wishlist') wishlist;               // For Product wishlist
  @Input('changesToCalled') changesToCalled; // For Product shop

  products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  page = 0;

  constructor(public shared: SharedDataService, public config: ConfigService) {

  }

  ngOnInit() {
    this.getProducts(null);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes &&
      changes["changesToCalled"] &&
      changes["changesToCalled"].currentValue
    ) {
      this.page = 0;
      this.getProducts(null);
    }
  }

  getProducts(infiniteScroll) {
    if (this.page == 0) {
      this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    }

    setTimeout(() => {
      infiniteScroll?.target.complete();
      if (this.page == 0) {
        this.products = new Array;
      }
      // if (this.products.length == 0) {
      this.page++;
      if (this.shop) {
        var prod = this.shared.shopData;
      }
      else if (this.wishlist) {
        var prod = this.shared.wishListProducts;
      }
      else {
        var prod = this.shared.dailyFeatured;
      }
      for (let value of prod) {
        this.products.push(value);
      }
      if (infiniteScroll != null) {
        infiniteScroll.disabled = true;
      }
    }, 500);
  }
}
