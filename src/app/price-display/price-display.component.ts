import {
  Component,
  Input
} from '@angular/core';

/**
 * @PriceDisplay: A component to show the price of a
 * Product
 *
<!--
    1. Setting a div to render the product price.
        - If we put this HTML in the component file it would need "\@". We need to escape the dollar sign $ becuase it would be a backtick string and the dollar sign is used for template variables. "\@{{price}}"
-->
 */

@Component({
  selector: 'app-price-display',
  template: `
  <div class="price-display">\${{ price }}</div>
  `,
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent {
  @Input() price: number;
}
