/*
    1. Creating a product object with a constructor that takes 5 arguments. 
*/

export class Product {
    constructor(
        public sku: string,
        public name: string,
        public imageURL: string,
        public department: string[],
        public price: number
    ) {

    }
}
