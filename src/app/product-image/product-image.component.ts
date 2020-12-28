import {
  Component,
  Input,
  HostBinding
} from '@angular/core';
import { Product } from '../product.model';
/**
 *    1. By putting src in [] "[src]" this tells Angular that we want to use the [src] input on this img tag. Angular will then replace the value of the src attribute once the expression is resolved.
        - Could also have written the expression as "src = {{product.imageUrl}}". It depends on the developer on which method to use.
 */

/**
 * @ProductImage: A component to show a single Product's image
 */
@Component({
  selector: 'app-product-image',
  template: `<img class="product-image" [src]="product.imageURL">`,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent  {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
}
