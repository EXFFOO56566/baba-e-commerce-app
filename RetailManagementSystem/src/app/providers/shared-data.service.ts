import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { ConfigService } from './config.service';
import Swal from "sweetalert2";
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  /*
    Please Note: There are two types Data in this system for General Module / Touch Module
      1- In General Moudle 
         -- For Simple Products Without Images (products array)

      2- In Touch Module
        -- For Daily Featured Array use for touch modlue and this array also include images  

      3- For use Touch sceen module, please make sure your Touch Module (Dailyfeatured array) items also exists in Products List Array because we have added check  
  */

  // For All Products
  products: any = [
    // General Module Products
    {
      itemCode: 'Al-001',
      itemName: 'Burger-with-egg',
      uom: 'nos',
      rate: 100,
      tax: 20,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-002',
      itemName: 'Candi Chochlates',
      uom: 'nos',
      rate: 110,
      tax: 30,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-003',
      itemName: 'Bottle-Cola',
      uom: 'kg',
      rate: 110,
      tax: 40,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-004',
      itemName: 'Ice cream',
      uom: 'kg',
      rate: 110,
      tax: 50,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-005',
      itemName: 'Fruit Cakes',
      uom: 'kg',
      rate: 110,
      tax: 60,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-006',
      itemName: 'Apple Fruit',
      uom: 'kg',
      rate: 110,
      tax: 70,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-007',
      itemName: this.config.language.Apple,
      uom: 'kg',
      rate: 180,
      tax: 25,
      discount: 10,
      barcode: 123456789
    },
    // Touch Module Items
    {
      itemCode: 'Al-008',
      itemName: this.config.language.Mango,
      uom: 'kg',
      rate: 190,
      tax: 35,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-009',
      itemName: this.config.language.Strawberry,
      uom: 'kg',
      rate: 180,
      tax: 25,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-010',
      itemName: this.config.language.Tomato,
      uom: 'kg',
      rate: 180,
      tax: 25,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-011',
      itemName: this.config.language.Cauliflower,
      uom: 'kg',
      rate: 180,
      tax: 25,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-012',
      itemName: this.config.language.Biscute,
      uom: 'kg',
      rate: 180,
      tax: 25,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-013',
      itemName: this.config.language.Biscute,
      uom: 'kg',
      rate: 180,
      tax: 25,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-014',
      itemName: this.config.language.Chocklate,
      uom: 'kg',
      rate: 180,
      tax: 25,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-015',
      itemName: this.config.language.Chocklate,
      uom: 'kg',
      rate: 180,
      tax: 25,
      discount: 10,
      barcode: 123456789
    },
    {
      itemCode: 'Al-016',
      itemName: this.config.language.Mango,
      uom: 'kg',
      rate: 180,
      tax: 25,
      discount: 10,
      barcode: 123456789
    }
  ];

  // For Touch Module Products
  dailyFeatured = [{ name: this.config.language.Apple, image: './assets/grocery/CustomSize12.png', qty: 0 }, { name: this.config.language.Mango, image: './assets/grocery/CustomSize12.png', qty: 0 }, { name: this.config.language.Strawberry, image: './assets/grocery/CustomSize12.png', qty: 0 }, { name: this.config.language.Tomato, image: './assets/grocery/CustomSize12.png', qty: 0 }, { name: this.config.language.Cauliflower, image: './assets/grocery/CustomSize12.png', qty: 0 }, { name: this.config.language.Biscute, image: './assets/grocery/CustomSize12.png', qty: 0 },
  { name: this.config.language.Biscute, image: './assets/grocery/CustomSize12.png', qty: 0 }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize12.png', qty: 0 }, { name: this.config.language.Chocklate, image: './assets/grocery/CustomSize12.png', qty: 0 }, { name: this.config.language.Mango, image: './assets/grocery/CustomSize12.png', qty: 0 }];


  holdProducts: any = [];
  holdTempForm: any = [];
  @ViewChild('inputElement') inputElement: any;           // For Focus On Code Input Field
  constructor(public config: ConfigService, private _formBuilder: FormBuilder) {
  }

  // For Success Message
  success(message) {
    Swal.fire({
      customClass: {
        icon: "alert-success",
      },
      background: "green",
      text: message,
      icon: "success",
      backdrop: false,
      showConfirmButton: false,
      showCloseButton: true,
      allowOutsideClick: true,
      timer: 2000
    });
  }

  // For Error Message
  error(message) {
    Swal.fire({
      background: "red",
      icon: "error",
      text: message,
      backdrop: false,
      showConfirmButton: false,
      showCloseButton: true,
      allowOutsideClick: true,
      timer: 2000,
    });
  }

  // For Add Product In Form Array
  addProduct(form) {
    // For Check Code And Quantity
    if (form.value.code && form.value.qty && form.value.qty > 0) {
      // For Reset Item Details Only Used When  (Price Check Page Open)
      if (!form.value.priceCheck) {
        this.resetAll(form);
      }
      // For Check Items Exists Or Not In Products List
      let foundIndex = this.products.findIndex(items => form.value.code === items.barcode || form.value.code === items.itemCode || form.value.code === items.itemName);
      // For Get Grid Items Array 
      let valuesArray = this.getGridItems(form).value;
      // For Check Already Items Exists Or Not In Grid List
      let alreadyAddedIndex = valuesArray.findIndex(items => form.value.code === items.barcode || form.value.code === items.itemCode || form.value.code === items.itemName);
      // For First Time Push Item In Grid If Item ALready Not Exists In Grid List
      if (alreadyAddedIndex == -1) {
        let cont = <FormArray>form.controls.itemDetail;
        const newFields = this.addTemplateFormGroup(this.products[foundIndex], form);
        cont.push(newFields);
      }
      // For Update Item In Grid If Item ALready Exists In Grid List
      else {
        this.alreadyItemUpdate(foundIndex, alreadyAddedIndex, form);
      }
      // When Price Check Page Not Open Then Calculations Call
      if (form.value.priceCheck) {
        // For Total Calculations
        this.calculations(form);
      }
      else { // When Price Check Page Open Then Item Code And Quantity Reset
        form.controls.code.reset();
        form.controls.qty.reset();
        setTimeout(() => {
          this.inputElement.setFocus();
        }, 500);
      }
    }
  }

  // For Update Item In Grid If Item ALready Exists In Grid List
  alreadyItemUpdate(foundIndex, alreadyAddedIndex, _form) {
    var form = (<FormArray>_form.get('itemDetail')).at(alreadyAddedIndex) as FormGroup;
    form.patchValue({
      qty: this.products[foundIndex] ? (form.value.qty + _form.value.qty) : 0,
      value: this.products[foundIndex] ? (form.value.value + (this.products[foundIndex].rate * _form.value.qty)) : 0,
      discount: this.products[foundIndex] ? (form.value.discount + (this.products[foundIndex].discount * _form.value.qty)) : 0,
      netValue: this.products[foundIndex] ? (form.value.netValue + ((this.products[foundIndex].rate * _form.value.qty) - (this.products[foundIndex].discount * _form.value.qty))) : 0,
      tax: this.products[foundIndex] ? (form.value.tax + (this.products[foundIndex].tax * _form.value.qty)) : 0,
      price: this.products[foundIndex] ? (form.value.price + ((this.products[foundIndex].tax * _form.value.qty) + (((this.products[foundIndex].rate * _form.value.qty) - (this.products[foundIndex].discount * _form.value.qty))))) : 0
    });
  }

  // For Remove Product In Form Array
  removeProduct(form) {
    // For Check Items Exists Or Not In Products List
    let foundIndex = this.products.findIndex(items => form.value.code === items.barcode || form.value.code === items.itemCode || form.value.code === items.itemName);
    // For Get Grid Items Array 
    let valuesArray = this.getGridItems(form).value;
    // For Check Already Items Exists Or Not In Grid List
    let alreadyAddedIndex = valuesArray.findIndex(items => form.value.code === items.barcode || form.value.code === items.itemCode || form.value.code === items.itemName);
    // For First Time Push Item In Grid If Item ALready Not Exists In Grid List
    if (alreadyAddedIndex != -1) {
      // For Remove Row On Specific Index After Quantity Matches
      const control = <FormArray>form.controls.itemDetail;
      console.log(control);
      if (control.value[alreadyAddedIndex].qty == form.value.qty) {
        control.removeAt(alreadyAddedIndex);
      }
      else if(control.value[alreadyAddedIndex].qty < form.value.qty){
        this.error('Please Enter Valid Quantity For Revese Operation');
      }
      else {
        this.alreadyItemUpdateForReverse(foundIndex, alreadyAddedIndex, form);
      }
    }
    // For Total Calculations
    this.calculations(form);
  }

  // For Reverse Update Item In Grid If Item ALready Exists In Grid List
  alreadyItemUpdateForReverse(foundIndex, alreadyAddedIndex, _form) {
    var form = (<FormArray>_form.get('itemDetail')).at(alreadyAddedIndex) as FormGroup;
    form.patchValue({
      qty: this.products[foundIndex] ? (form.value.qty - _form.value.qty) : 0,
      value: this.products[foundIndex] ? (form.value.value - (this.products[foundIndex].rate * _form.value.qty)) : 0,
      disc: this.products[foundIndex] ? (form.value.disc - (this.products[foundIndex].discount * _form.value.qty)) : 0,
      netValue: this.products[foundIndex] ? (form.value.netValue - ((this.products[foundIndex].rate * _form.value.qty) - (this.products[foundIndex].discount * _form.value.qty))) : 0,
      tax: this.products[foundIndex] ? (form.value.tax - (this.products[foundIndex].tax * _form.value.qty)) : 0,
      price: this.products[foundIndex] ? (form.value.price - ((this.products[foundIndex].tax * _form.value.qty) + (((this.products[foundIndex].rate * _form.value.qty) - (this.products[foundIndex].discount * _form.value.qty))))) : 0
    });
  }

  // For Return Form Group For Grid List
  addTemplateFormGroup(items, form) {
    return this._formBuilder.group({
      itemCode: [items ? items.itemCode : ""],
      itemName: [items ? items.itemName : ""],
      qty: items ? form.value.qty : 0,
      rate: items ? items.rate : 0,
      uom: items ? items.uom : '',
      barcode: items ? items.barcode : null,
      value: items ? items.rate * form.value.qty : 0,
      discount: items ? items.discount * form.value.qty : 0,
      netValue: items ? ((items.rate * form.value.qty) - (items.discount * form.value.qty)) : 0,
      tax: items ? items.tax * form.value.qty : 0,
      price: items ? ((items.tax * form.value.qty) + (((items.rate * form.value.qty) - (items.discount * form.value.qty)))) : 0
    });
  }

  // For Total Calculations
  calculations(form) {
    // For Clear The Final Details For New Calculations
    this.reset(form)
    // FOr Update New Values
    let cont = <FormArray>form.controls.itemDetail;
    for (let index = 0; index < cont.value.length; index++) {
      form.controls.numberOfItems.patchValue(form.value.numberOfItems + cont.value[index].qty)
      form.controls.amount.patchValue(form.value.amount + cont.value[index].rate)
      form.controls.priceBeforeDiscount.patchValue(form.value.priceBeforeDiscount + cont.value[index].value)
      form.controls.discount.patchValue(form.value.discount + cont.value[index].discount)
      form.controls.priceAfterDiscount.patchValue(form.value.priceAfterDiscount + cont.value[index].netValue)
      form.controls.saleTax.patchValue(form.value.saleTax + cont.value[index].tax)
      form.controls.invoiceTotal.patchValue(form.value.invoiceTotal + cont.value[index].price)
    }

    setTimeout(() => {
      if (form.value.mode == 'general') {
        this.inputElement.setFocus();
      }
    }, 500);
  }

  // For Clear The Final Details For New Calculations
  reset(form) {
    form.controls.code.reset();
    form.controls.qty.reset();
    form.controls.numberOfItems.patchValue(0);
    form.controls.priceBeforeDiscount.patchValue(0);
    form.controls.discount.patchValue(0);
    form.controls.priceAfterDiscount.patchValue(0);
    form.controls.saleTax.patchValue(0);
    form.controls.invoiceTotal.patchValue(0);
    form.controls.amount.patchValue(0);
  }

  // For Reset Only Used When Price Check Page Open
  resetAll(form) {
    const itemDetail = <FormArray>form.controls.itemDetail;
    itemDetail.controls = [];
    itemDetail.reset();
  }

  // For Get Form Array Item Details 
  getGridItems(form) {
    return form.get("itemDetail") as FormArray;
  }

  // For Checking Item Exists Or Not
  checkItem(form) {
    if (form.value.code != '' || form.value.code != null) {
      let foundIndex = this.products.findIndex(items => items.itemCode == form.value.code || form.value.code === items.barcode || form.value.code === items.itemName);
      if (foundIndex != -1) {
        return true
      }
      else {
        form.patchValue({ code: '' });
      }
    }
  }

  // For Set Focus On Input Field
  setFocusInput(inputElement) {
    this.inputElement = inputElement
  }

  // For Get Focus On Input Field
  getFocusInput() {
    // For Focus Set On Input Field (Item Code)
    this.inputElement.setFocus();
  }

  // For Hold Orders
  setHoldOrders(form) {
    this.holdTempForm.push(form);
  }

  // For Items Details Already Exists To Push In Form
  retrieveHoldData(form, data) {
    // For About Transaction Details
    form.patchValue({
      transactionId: data.transactionId ? data.transactionId : '',
      transactionDate: data.transactionDate ? data.transactionDate : '',
      tillNo: data.tillNo ? data.tillNo : 1,
      cashPaid: data.cashPaid ? data.cashPaid : 0,
      Change: data.Change ? data.Change : 0,
      numberOfItems: data.numberOfItems ? data.numberOfItems : 0,
      priceBeforeDiscount: data.priceBeforeDiscount ? data.priceBeforeDiscount : 0,
      discount: data.discount ? data.discount : 0,
      priceAfterDiscount: data.priceAfterDiscount ? data.priceAfterDiscount : 0,
      saleTax: data.saleTax ? data.saleTax : 0,
      invoiceTotal: data.invoiceTotal ? data.invoiceTotal : 0,
    });
    // For Customer Information 
    form.controls.customerInfo.patchValue({
      CustomerName: data.customerInfo.CustomerName,
      CustomerPhoneNo: data.customerInfo.CustomerPhoneNo,
    })
    // For Products
    const control = <FormArray>form.controls.itemDetail;
    data.itemDetail.forEach((items: any) => {
      control.push(
        this._formBuilder.group({
          itemCode: [items ? items.itemCode : ""],
          itemName: [items ? items.itemName : ""],
          uom: items ? items.uom : null,
          qty: items ? items.qty : 0,
          rate: items ? items.rate : 0,
          barcode: items ? items.barcode : null,
          value: items ? items.value : 0,
          discount: items ? items.discount : 0,
          netValue: items ? items.netValue : 0,
          tax: items ? items.tax : 0,
          price: items ? items.price : 0,
        })
      );
    });

    this.dailyFeatured = this.dailyFeatured.map(item => {
      let item2 = data.itemDetail.find(i2 => i2.itemName === item.name);
      return item2 ? { ...item, ...item2 } : item;
    });
  }


}
