import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-general-module',
  templateUrl: './general-module.component.html',
  styleUrls: ['./general-module.component.scss'],
})
export class GeneralModuleComponent implements OnInit {
  @Input() form; // this is parentForm

  constructor() { }

  ngOnInit() {
  }

  // For Get All Items
  get geAllItems() {
    return this.form.get("itemDetail") as FormArray;
  }


}
