import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent implements OnInit {
sku: string;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: any): void {
    console.log("You have submitted value:", form);
  }
}
