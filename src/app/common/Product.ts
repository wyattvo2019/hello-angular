export class Product {
  productName: string;
  productCode: string;
  productPrice: number;
  productRating: number;
  constructor(productName: string, productCode: string, productPrice: number, productRating: number){
    this.productName = productName;
    this.productCode = productCode;
    this.productPrice = productPrice;
    this.productRating = productRating;
  }
}
