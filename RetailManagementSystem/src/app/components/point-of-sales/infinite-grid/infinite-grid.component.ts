import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ConfigService } from 'src/app/providers/config.service';
import { SharedDataService } from 'src/app/providers/shared-data.service';
import { ItemBarcodeScanComponent } from '../item-barcode-scan/item-barcode-scan.component';

@Component({
  selector: 'app-infinite-grid',
  templateUrl: './infinite-grid.component.html',
  styleUrls: ['./infinite-grid.component.scss'],
})
export class InfiniteGridComponent implements OnInit {
  @Input('type') isGrid;                       // For Product Type
  @Input('changesToCalled') changesToCalled; // For Product shop
  @Input() form;                          // This is Parent Form

  page = 0;
  products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  scrollTopButton = false;                // For scroll Down FAB 
  scrollTop: any
  public test: ItemBarcodeScanComponent;
  constructor(public config: ConfigService, public sharedData: SharedDataService) {
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes &&
      changes["changesToCalled"] &&
      changes["changesToCalled"].currentValue
    ) {
      this.isGrid = changes["changesToCalled"].currentValue.role;
    }
  }

  // For FAB Scroll
  onScroll(e) {
    let first = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight;
    if ((first < 1)) {
      this.getProducts();
    }

    this.scrollTop = e; // Reference For Scroll Top
    if (e.srcElement.scrollTop >= 500) {
      this.scrollTopButton = true;
    }
    if (e.srcElement.scrollTop < 500) {
      this.scrollTopButton = false;
    }
  }

  getProducts() {
    var prod = this.sharedData.dailyFeatured;
    prod.forEach(element => {
      this.sharedData.dailyFeatured.push(element);
    });
  }

  // For Scroll To Top Content
  scrollToTop() {
    this.scrollTop.srcElement.scrollTop = 0
    this.scrollTopButton = false;
  }

  add(item) {
    this.form.controls.code.patchValue(item.name)
    this.form.controls.qty.patchValue(1);
    let filterData = this.sharedData.checkItem(this.form);
    if (filterData) {
      item.qty++;
      this.sharedData.addProduct(this.form);
    }
    else {
      console.log("Item Not Exists In Lists");
    }
  }

  remove(item) {
    if (item.qty > 0) {
      this.form.controls.code.patchValue(item.name)
      this.form.controls.qty.patchValue(1);
      let filterData = this.sharedData.checkItem(this.form);
      if (filterData) {
        item.qty--;
        this.sharedData.removeProduct(this.form);
      }
      else {
        console.log("Item Not Exists In Lists");
      }
    }
  }
}
