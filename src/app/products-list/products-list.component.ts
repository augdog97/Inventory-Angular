import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';
import { Product } from '../product.model';

/*
  1. Import the product model
  2. @input productList = the Product [] passed to us.
    - Inputs specify the parameters we expect our component to receive.
      - To designate an input, we put the @Input() decoration on a component class property.
    - When we specify that a component tkaes an input, it is expected that the definition class will h ave an instance variable that will receive the value.
    - @output onProducSelected - outputs the current Prouct whnever a new Product is selected.
  3. currentProduct is the local state containing the currently selected "product"
    - This property is a property internal to the component. Also referred to  as :local component state"
  4. The click function does 2 things:
    - Set this.currentProduct to the Product that was passed in
    - Emit the Product that was clicked on our output.
  5. The isSelected function accepts a Product and returns true if the products SKU matches the currentProducts SKU. It returns false otherwise.
*/

/*
  @ProductsList: A component for rendering all ProductRows and storing the currently selcted Product.
*/



/**
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  /**
     * @input productList - the Product[] passed to us
     */
  @Input() productList: Product[];

  /**
   * @output onProductSelected - outputs the current
   *          Product whenever a new Product is selected
   */
  @Output() ProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing
   *             the currently selected `Product`
   */
  private currentProduct: Product;

  constructor() {
    this.ProductSelected = new EventEmitter();
   }

  ngOnInit(): void {
  }
  clicked(product: Product): void {
    this.currentProduct = product;
    this.ProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
