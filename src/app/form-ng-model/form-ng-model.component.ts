import { Component, OnInit } from '@angular/core';

/**
 * 1. Storing productName: string as an instance variable 
 */

@Component({
  selector: 'app-form-ng-model',
  templateUrl: './form-ng-model.component.html',
  styleUrls: ['./form-ng-model.component.css']
})
export class FormNgModelComponent implements OnInit {
  productName: string;

  constructor() {
    this.productName = 'ng-book: The Complete Guide to Angular';
   }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    console.log('You submitted value:', value);
  }
}
