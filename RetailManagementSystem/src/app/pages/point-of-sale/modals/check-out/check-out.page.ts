import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.page.html',
  styleUrls: ['./check-out.page.scss'],
})
export class CheckOutPage implements OnInit {
  // For Short Keys Handling For Printing
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // For Dismiss Modal On Escape 
    if (event.key == 'Escape') {
      this.dismiss(false);
    }
  }

  @ViewChild('cashPaid') cashPaid: any;   // For Focus On Cash Paid Input Field
  form: any;

  value: any[] = [];
  showResult: any = false;
  constructor(private navParams: NavParams, private modalController: ModalController, private share: SharedDataService) { }

  ngOnInit() {
    this.form = this.navParams.get('value');
    this.form.controls.cashPaid.patchValue('');
  }

  // For Set Focus On Item Code
  ngAfterViewInit() {
    setTimeout(() => {
      this.cashPaid.setFocus();
    }, 500);
  }

  reset(): void {
    this.value = this.value.slice(0, -1); // For Remove Last Index From Tokens
  }

  // For Modal Dismiss
  dismiss(status) {
    this.modalController.dismiss({
      'dismissed': status
    });
  }

  // For Check Customer Balance
  cashBalance(ev) {
    if (this.form.value.cashPaid >= this.form.value.invoiceTotal) {
      this.form.value.change = ev.detail.value - this.form.value.invoiceTotal;
    }
  }

  submit() {
    if (this.form.value.cashPaid >= this.form.value.invoiceTotal) {
      this.dismiss(true);
    }
    else {
      this.share.error('Amount is less than Invoice Total');
    }
  }

  insertChar(val) {
    if (this.showResult) {
      this.value.push(val);
    }
    else {
      this.value = [val];
      this.showResult = true;
    }
    let joined = this.value.join('');
    this.form.patchValue({
      cashPaid: joined
    })
    setTimeout(() => {
      this.cashPaid.setFocus();
    }, 500);
  }

  backSpaceHandle() {
    this.reset();
  }
}
