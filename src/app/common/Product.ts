export class Product {
  productName: string;
  productCode: string;
  productPrice: number;
  constructor(productName: string, productCode: string, productPrice: number){
    this.productName = productName;
    this.productCode = productCode;
    this.productPrice = productPrice;
  }
}
