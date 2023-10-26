import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product("P01", "Hat", 15),
    new Product("P02", "Jeans", 20),
    new Product("P03", "Shirt", 26)
  ]
  constructor() { }

  ngOnInit() {
  }

}
