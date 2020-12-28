import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

/**
 * 1. Define that this row takes an @input of product. This instance variable will be set to the Product that was passed in from our parent Component.
 * 2. HostBinding allows us to set attributes on the host element.
 *  - The "host" is the element this component is attached to.
 *  - In the case below we are using Semantic UI item class. with the @hostBinding code below we are saying that we want to attach the CSS class "item" to the host element.
 */

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent  {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item'
}
