import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormNgModelComponent } from './form-ng-model/form-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSkuComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    ReactiveFormComponent,
    FormNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
