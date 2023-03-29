import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import DataSource from 'devextreme/data/data_source';
import { IDetect } from 'src/app/directives/barcode-scaner.directive';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-item-barcode-scan',
  templateUrl: './item-barcode-scan.component.html',
  styleUrls: ['./item-barcode-scan.component.scss'],
})
export class ItemBarcodeScanComponent implements OnInit {
  // For Short Keys Handling
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == 'ArrowDown') {
      // down arrow
      this.lisItem.focus();
    }
  }
  @Input() form;                          // This is Parent Form
  @ViewChild('quantity') quantity: any;   // For Focus On Quantity Input Field
  @ViewChild('code') code: any;           // For Focus On Code Input Field
  lisItem: any;                           // For Arrow Down Key Handle
  listDataSource: any;
  val: string = '';                       // For Suggestion List
  selected: any = -1;                     // For Focus Dx-List handle
  serachList: any = [];
  constructor(private _formBuilder: FormBuilder, public sharedData: SharedDataService) { }

  ngOnInit() {
  }

  // For Set Focus On Item Code
  ngAfterViewInit() {
    setTimeout(() => {
      this.code.setFocus();
      this.sharedData.setFocusInput(this.code);
    }, 500);
  }

  // For Downward Key (Dx-List)
  onContentReady(e) {
    this.lisItem = e.component;
  }

  // For Keypress Event Handler
  eventHandler($event) {
    // For When BackSpace is undefined Calling from Backspace function
    if ($event.key != undefined) {
      this.val = this.val + $event.key;
    }

    // For Filter Products
    if (this.val != '') {
      this.selected = 0         // For Tab Selected On
      this.serachList = this.sharedData.products.filter(s =>
        s.itemCode.toLowerCase().includes(this.val.toLowerCase()) || s.itemName.toLowerCase().includes(this.val.toLowerCase())
      );
      this.setProducts();
    }
  }

  // For Backspace Handle
  backSpaceHandle() {
    if (this.form.value.code == '' || this.form.value.code == null) {
      this.serachList = [];
      this.setProducts();
      this.val = '';
      this.selected = -1      // For Tab Selected Hide
    }
    else {
      this.val = this.form.value.code;
      this.eventHandler(this.val);
    }
  }

  escape() {
    this.code.nativeElement.focus();
  }

  returnItem($event) {
    // For Patch The Item Code From Products(Items Code) List
    if (Array.isArray($event.addedItems) && $event.addedItems.length > 0) {
      this.form.controls.code.patchValue($event.addedItems[0].itemCode);
    }
    // For Set The Focus On Quantity
    this.quantity.setFocus();
    // For Reset The Products and Value
    this.serachList = [];
    this.setProducts();
    this.val = '';
  }

  setProducts() {
    this.listDataSource = new DataSource({
      store: this.serachList,
      paginate: true,
      pageSize: 10
    });
  }


  // For Only Integer Values
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
  }

  // For BarCode And KeyBoard Handling
  onDetected(event: IDetect) {
    // For Keyboard Handling
    if (event.type == 'keyboard' && (event.event.code == 'Enter' || event.event.code == 'NumpadEnter')) {
      // For Check User Items Exists Or Not In All Existing Items List (Retruns True Or False)
      let filterData = this.sharedData.checkItem(this.form);
      if (filterData) {
        // You Can Customize Logic here for your specific items
        this.quantity.setFocus();
      }
    }

    // For Barcode Scanner Handling
    if (event.type == 'scanner' && event.event.code == 'Enter') {
      // For Check User Items Exists Or Not In All Existing Items List (Retruns True Or False)
      let filterData = this.sharedData.checkItem(this.form);
      if (filterData) {
        // You Can Customize Logic here for your specific items
        // For Simple Item
        let qty = this.form.value.qty + 1;
        this.form.controls.qty.patchValue(qty);
        this.addProduct();
      }
    }
  }



  // For Add Items In Grid List
  addProduct() {
    let filterData = this.sharedData.checkItem(this.form);
    if (filterData) {
      this.sharedData.addProduct(this.form);
    }
    else {
      this.form.patchValue({ qty: '' });
    }
  }
}